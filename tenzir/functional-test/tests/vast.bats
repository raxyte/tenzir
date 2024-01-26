: "${BATS_TEST_TIMEOUT:=30}"

# BATS ports of our old integration test suite.

# This file contains the subset of tests that were written
# before pipelines were introduced and are not using any
# server fixture.

setup() {
  bats_load_library bats-support
  bats_load_library bats-assert
  bats_load_library bats-tenzir

  setup_node
}

teardown() {
  teardown_node
}

# -- Test Suites

# bats test_tags=node,counting,zeek
@test "Conn log counting" {
  import_zeek_conn

  check tenzir 'export | where :ip == 192.168.1.104 | summarize count=count(.)'
  check tenzir 'export | where resp_p == 80 | summarize count=count(.)'
  check tenzir 'export | where resp_p != 80 | summarize count=count(.)'
  check tenzir 'export | where 861237 | summarize count=count(.)'
}

# bats test_tags=node,import,export,zeek
@test "Node Zeek conn log" {
  import_zeek_conn

  check tenzir "export | where resp_h == 192.168.1.104 | sort ts"
  check tenzir "export | where orig_bytes > 1k && orig_bytes < 1Ki | sort ts"
  check tenzir 'export | where :string == "OrfTtuI5G4e" || :port == 67 || :uint64 == 67 | sort ts'
  check tenzir 'export | where #schema == "zeek.conn" && resp_h == 192.168.1.104 | sort ts'
  check tenzir 'export | where #schema != "zeek.conn" | sort ts'
  check tenzir 'export | where #schema != "foobar" && resp_h == 192.168.1.104 | sort ts'
}

# bats test_tags=node,import,export,zeek
@test "Node zeek multiple imports" {
  if [ $(uname) == "Darwin" ]; then
    # TODO: Figure out why this has different output on mac
    skip "disabled on mac"
  fi

  import_zeek_conn
  import_zeek_dns

  check tenzir "export | where resp_h == 192.168.1.104 | sort ts"
  check tenzir "export | where zeek.conn.id.resp_h == 192.168.1.104 | sort ts"
  check tenzir 'export | where :timestamp >= 1970-01-01 | summarize count=count(.) | sort ts'
  check tenzir 'export | where #schema == "zeek.conn" | summarize count=count(.) | sort ts'
}

# bats test_tags=node,import,export,zeek
@test "Node Zeek dns log" {
  import_zeek_dns

  check tenzir "export | where resp_h == 192.168.1.104"
  check tenzir 'export | where resp_h == 192.168.1.104 | write zeek-tsv --disable-timestamp-tags'
  check tenzir "export | where :port == 53 | summarize count=count(.)"
  check tenzir 'export | where :uint64 == 53 && #schema == "zeek.dns" | summarize count=count(.)'
}

# bats test_tags=node,import,export,zeek
@test "Node Zeek http log" {
  import_zeek_http

  check tenzir "export | where resp_h == 216.240.189.196 | sort ts"
}

# bats test_tags=node,import,export,zeek
@test "Node Zeek snmp log" {
  import_zeek_snmp

  check tenzir "export | where duration >= 3s | sort ts"
}

# bats test_tags=node,import,export,zeek,json
@test "Node Zeek JSON" {
  import_zeek_json

  check --sort -c "tenzir 'export | where \"zeek\" in #schema' | jq --sort-keys -ec ."
}

# bats test_tags=node,type
@test "Node type query" {
  import_zeek_conn "head 20"

  check tenzir "export | sort ts"
}

#bats test_tags=node,import,export,suricata,eve,import_filter
@test "Node suricata alert" {
  import_suricata_eve 'where #schema != "suricata.stats" && event_type != "flow"'

  export TENZIR_EXPORT__ZEEK__DISABLE_TIMESTAMP_TAGS=true

  check tenzir "export | where src_ip == 147.32.84.165 | sort timestamp"
  check --sort tenzir-ctl export csv "where #schema == /suricata.*/"
  check tenzir "export | where #schema == /suricata.alert/ | sort timestamp | write zeek-tsv --disable-timestamp-tags"
  check tenzir "export | sort timestamp | write json --omit-nulls --omit-empty-objects"
}

#bats test_tags=node,import,export,suricata,eve
@test "Node suricata rrdata" {
  if [ $(uname) == "Darwin" ]; then
    # TODO: Figure out why this has different output on mac
    skip "disabled on mac"
  fi

  import_data "load file ${INPUTSDIR}/suricata/rrdata-eve.json | read json --selector=event_type:suricata"

  check tenzir 'export | sort timestamp'
  check tenzir 'export | where #schema == "suricata.dns" | sort timestamp'
}

#bats test_tags=node,import,export,argus,csv
@test "Node argus csv" {
  if [ $(uname) == "Darwin" ]; then
    # TODO: Figure out why this is failing on mac
    skip "disabled on mac"
  fi

  zcat ${INPUTSDIR}/csv/argus-M57-10k-pkts.csv.gz |
    tenzir-ctl import -b -t argus.record csv
  tenzir-ctl flush

  check tenzir "export | where State != \"CON\" && Dur > 4900ms | sort StartTime"
  check tenzir "export | where Cause == \"Status\" && Dur > 1s | sort StartTime"
}

#bats test_tags=node,import,export,argus,ssv,csv
@test "Node argus ssv" {
  cat ${INPUTSDIR}/csv/argus-additional-fields.ssv |
    tenzir-ctl import -b -t argus.record csv '--separator=" "'

  check tenzir "export | sort StartTime | write csv"
}

#bats test_tags=node,import,export,argus,tsv,csv
@test "node argus tsv" {
  cat ${INPUTSDIR}/csv/argus-reordered.tsv |
    tenzir-ctl import -b -t argus.record csv '--separator="\t"'

  check tenzir "export | sort StartTime | write csv"
}

#bats test_tags=import,export,zeek
@test "multi addr query" {
  import_zeek_conn

  query=$(<${QUERYDIR}/multi_addr.txt)
  check tenzir "export | ${query}"
}

#bats test_tags=export,arrow
@test "arrow export" {
  if ! python -c "import pyarrow"; then
    skip "pyarrow isn't installed"
  fi

  import_zeek_conn

  check -c "tenzir-ctl export -n 10 arrow 'where #schema == \"zeek.conn\"' | python ${MISCDIR}/scripts/print-arrow.py"

  import_suricata_eve

  check -c "tenzir-ctl export arrow 'where #schema == \"suricata.http\"' | python ${MISCDIR}/scripts/print-arrow.py"
}

#bats test_tags=syslog,import
@test "Import syslog" {
  import_data "from ${INPUTSDIR}/syslog/syslog.log read syslog"

  check --sort -c "tenzir 'export | where #schema == /syslog.*/' | jq --sort-keys -ec ."
}

# TODO: Figure out why this one is flaky in CI
#bats test_tags=import,json,sysmon,flaky
@test "Heterogeneous jsonl import" {
  skip "Temporarily disabled due to CI flakinesss"

  import_suricata_eve
  import_data "from ${INPUTSDIR}/json/sysmon.json"

  check --sort -c "tenzir 'export | where \"®\" in :string' | jq --sort-keys -ec ."
  check --sort -c "tenzir 'export | where #schema ni \"suricata\"' | jq --sort-keys -ec ."

  check tenzir 'export | where ProcessGuid == /\{[0-9a-f]{8}-[0-9a-f]{4}-5ec2-7.15-[0-9a-f]{12}\}/ | sort UtcTime | sort ProcessId'
}

#bats test_tags=import,json,suricata
@test "Import time" {
  if [ $(uname) == "Darwin" ]; then
    # TODO: Figure out correct invocation of `date` for mac
    skip "disabled on mac"
  fi

  import_suricata_eve 'where #schema == "suricata.stats"'

  NOW=$(date -Is)
  check tenzir "export | where #import_time > ${NOW}"
  check tenzir "export | where #import_time <= ${NOW} | sort timestamp"
}

#bats test_tags=import,export,suricata
@test "Extractor Predicates" {
  import_suricata_eve

  check tenzir "export | where timestamp && :ip | sort timestamp"
  check tenzir "export | where does_not_exist | sort timestamp"
  check tenzir "export | where flow.alerted | sort timestamp"
}

#bats test_tags=import,json
@test "Nested Records" {
  import_data "from ${INPUTSDIR}/json/record-in-list.json"

  check --sort tenzir "export"
}

#bats test_tags=fault
@test "Self repair" {
  import_zeek_conn

  ${MISCDIR}/scripts/break-sizelimit.sh

  # We use an extra import step to trigger the repair because querying
  # directly would not wait for the repair step.
  import_suricata_eve

  tenzir "export | where zeek.conn.id.orig_h == 192.168.1.104 | summarize count=count(.)"
}

# bats test_tags=import,export,csv
@test "Optional Partition Indexes" {
  # Checks if the import and export works as usual when we ignore creation
  # of partition indexes for all field names

  TENZIR_INDEX__RULES__TARGETS="[argus.record.StartTime, argus.record.Flgs, argus.record.Proto, argus.record.SrcAddr,                  argus.record.Sport, argus.record.Dir, argus.record.DstAddr, argus.record.Dport, argus.record.TotPkts,                  argus.record.TotBytes, argus.record.State, argus.record.Dur, argus.record.UnknownField, argus.record.Cause]"
  TENZIR_INDEX__RULES__PARTITION_INDEX=false

  cat ${INPUTSDIR}/csv/argus-additional-fields.ssv |
    tenzir-ctl import -t argus.record csv '--separator=" "'

  check tenzir "export | write csv"
}
