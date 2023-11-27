# We set a generous timeout because the first test that is running
# has to setup the virtualenv for the operator.
: "${BATS_TEST_TIMEOUT:=120}"

setup() {
  bats_load_library bats-support
  bats_load_library bats-assert
  bats_load_library bats-tenzir

  # Fake HTTP server accepts any input.
  conn=$(mktemp)
  data=$(mktemp)
  coproc SRV { exec socat -d -d -lf "${conn}" -r /dev/stdout TCP-LISTEN:0,crlf,reuseaddr,fork SYSTEM:"echo HTTP/1.0 200; echo Content-Type\: text/plain;" >> "${data}"; }
  # While `sync` would be more elegant than a sleep loop, empirically it suffers from a
  # race condition on debian-based systems.
  while [ ! -s ${conn} ]; do
    sleep 0.1
  done
  # socat writes a line like this into ${conn}:
  # 2023/10/31 18:20:34 socat[469933] N listening on AF=2 0.0.0.0:42437
  read -r HTTP_INFO < "${conn}"
  port="${HTTP_INFO##*:}"
}

teardown() {
  kill -9 "$SRV_PID"
  rm "${conn}" "${data}"
}

@test "simple field access" {
  check tenzir -f /dev/stdin << END
    show version
    | put a=1, b=2
    | python "self.c = self.a + self.b"
END
}

@test "nested struct support" {
  check tenzir -f /dev/stdin << END
    show version
    | put a.b=1, b=2
    | unflatten
    | python '
        self.c = {}
        self.c.d = {}
        self.c.d.e = self.a.b + self.b'
END
}

@test "empty output throws" {
  check ! --with-stderr tenzir -f /dev/stdin << END
    show version
    | put a.b=1, b=2
    | python 'self.clear()'
END
}

@test "python operator nested passthrough" {
  check tenzir -f /dev/stdin << END
    show version
    | put a.b = 2
    | unflatten
    | python "pass"
END
}

@test "python operator nested modification" {
  check tenzir -f /dev/stdin << END
    show version
    | put a.b = 2
    | unflatten
    | python "self.a.b = 3"
END
}

@test "python operator nested deep modification" {
  check tenzir -f /dev/stdin << END
    show version
    | put a.b.c = 2
    | unflatten
    | python "self.original_c = self.a.b.c; self.a.b.c = 3"
END
}

@test "python operator nested addition" {
  check tenzir -f /dev/stdin << END
    show version
    | put a.b = 2
    | unflatten
    | python "self.a.c = 2 * self.a.b"
END
}

@test "python operator field deletion" {
  check tenzir -f /dev/stdin << END
    put a.b = 1, a.c = 2, d = 3
    | unflatten
    | python "del self.a.b = 3; del self.d"
END
}

@test "python operator requirements statement" {
  check tenzir -f /dev/stdin << END
    show version
    | put a=1, b=2
    | python --requirements 'requests' '
        import requests
        payload = {"a": self.a, "b": self.b}
        # Override Accept-Encoding for this test since this varies between the
        # versions of requests used in various CI environments.
        requests.post("http://127.0.0.1:$port", headers={"Accept-Encoding": "gzip, deflate, br"}, data=payload)'
    | discard
END
  check grep -v '\(Host:\|User-Agent:\)' "${data}"
  truncate -s 0 "${data}"
}


@test "python operator deletion" {
  check tenzir -f /dev/stdin << END
    put a.b = 1, a.c = 2, d = 3
    | unflatten
    | python "del self.a.b = 3; del self.d"
END
}


@test "python operator json passthrough" {
  cat > input.json << END
  {
    "foo": "bar"
  }
END
  check tenzir -f /dev/stdin << END
    from file input.json
    | python "pass"
END
}

@test "python operator advanced type passthrough" {
  cat > input.json << END
  {
    "ip": "127.0.0.1",
    "subnet": "10.0.0.1/8",
    "ip6": "::1",
    "subnet6": "::1/64",
    "list": [1,2,3]
  }
END
  check tenzir -f /dev/stdin << END
    from file input.json
    | python "pass"
END
}

@test "python operator advanced type manipulation" {
  cat > input.json << END
  {
    "ip": "127.0.255.255",
    "subnet": "127.0.0.1/8"
  }
END
  check tenzir -f /dev/stdin << END
    from file input.json
    | python "self.inside = self.ip in self.subnet"
END
}

@test "python operator suricata passthrough" {
  DATADIR="$(dirname "$BATS_SUITE_DIRNAME")/data"
  check tenzir -f /dev/stdin << END
    from file $DATADIR/suricata/eve.json read suricata
    | python "pass"
END
}

@test "python operator suricata.dns passthrough" {
  DATADIR="$(dirname "$BATS_SUITE_DIRNAME")/data"
  check tenzir -f /dev/stdin << END
    from file $DATADIR/suricata/rrdata-eve.json read suricata
    | python "pass"
END
}

@test "python operator suricata.dns list manipulation" {
  DATADIR="$(dirname "$BATS_SUITE_DIRNAME")/data"
  check tenzir -f /dev/stdin << END
    from file $DATADIR/suricata/rrdata-eve.json read suricata
    | where dns.answers != null
    | python "self.first_result = self.dns.answers[0]; self.num_results = len(self.dns.answers)"
END
}


# @test "python operator suricata.dns nested record in list assignment (xfail)" {
#   DATADIR="$(dirname "$BATS_SUITE_DIRNAME")/data"
#   check tenzir -f /dev/stdin << END
#     from file $DATADIR/suricata/rrdata-eve.json read suricata
#     | where dns.answers != null
#     | python "self.dns.answers[0].rrname = \"boogle.dom\""
# END
# }


@test "python operator suricata.dns list assignment" {
  DATADIR="$(dirname "$BATS_SUITE_DIRNAME")/data"
  check tenzir -f /dev/stdin << END
    from file $DATADIR/suricata/rrdata-eve.json read suricata
    | python "if self.dns.grouped.MX is not None: self.dns.grouped.MX[0] = \"boogle.dom\""
END
}

@test "python operator suricata.dns assignment to field in null record" {
  DATADIR="$(dirname "$BATS_SUITE_DIRNAME")/data"
  check tenzir -f /dev/stdin << END
    from file $DATADIR/suricata/rrdata-eve.json read suricata
    | python "
      if self.dns.grouped.TXT is None:
        self.dns.grouped.TXT = \"text record\"
      "
END
}


@test "python operator fill partial output with nulls" {
  DATADIR="$(dirname "$BATS_SUITE_DIRNAME")/data"
  check tenzir -f /dev/stdin << END
    from file $DATADIR/suricata/rrdata-eve.json read suricata
    | python "
      if self.dns.answers is not None:
        self.had_answers = True
      else:
        self.did_not_have_answers = True"
END
}
