(function () {
  // Lee el catálogo de servicios/precios directamente del dashboard de
  // Kelatos (kelatos-rep-back) — sin base de datos propia en esta web,
  // el dashboard sigue siendo la única fuente de verdad. El slug
  // "surfacelabs" corresponde a esta web dada de alta en "Webs Kelatos".
  var ENDPOINT = "https://makeup-reef-raymond-holes.trycloudflare.com/publico/productos/surfacelabs";

  var contenedor = document.getElementById("servicios-lista");
  if (!contenedor) return;

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatearPrecio(precio) {
    var n = precio === null || precio === undefined || precio === "" ? null : Number(precio);
    if (n === null || isNaN(n)) return '<span class="precio consultar">Consultar</span>';
    return '<span class="precio">' + n.toLocaleString("es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €</span>";
  }

  fetch(ENDPOINT, { cache: "no-store" })
    .then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    })
    .then(function (data) {
      var productos = data && data.ok && Array.isArray(data.productos) ? data.productos : [];
      if (!productos.length) {
        contenedor.innerHTML = '<p class="servicios-vacio">Muy pronto publicaremos aquí el listado completo de servicios y precios. Mientras tanto, escríbenos y te lo confirmamos al momento.</p>';
        return;
      }

      var grupos = {};
      var orden = [];
      productos.forEach(function (p) {
        var clave = p.categoria || "Otros servicios";
        if (!grupos[clave]) {
          grupos[clave] = [];
          orden.push(clave);
        }
        grupos[clave].push(p);
      });

      var html = "";
      orden.forEach(function (clave) {
        html += '<div class="servicio-grupo"><h3>' + escapeHtml(clave) + "</h3>";
        grupos[clave].forEach(function (p) {
          html += '<div class="servicio-fila"><span class="nombre">' + escapeHtml(p.nombre) + "</span>" + formatearPrecio(p.precio) + "</div>";
        });
        html += "</div>";
      });
      contenedor.innerHTML = html;
    })
    .catch(function () {
      // Fallo de red/API: se oculta la sección entera en vez de mostrar
      // un hueco roto — la web sigue funcionando con normalidad.
      var seccion = document.getElementById("servicios");
      if (seccion) seccion.style.display = "none";
    });
})();
