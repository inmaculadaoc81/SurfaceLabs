SurfaceLabs ONE PAGE

DISEÑO
- One Page completamente nueva.
- Diseño visual distinto a TechMac.
- Basado en azules/cian del logotipo de SurfaceLabs.
- Formas geométricas, líneas, patrón de cuadrícula, composiciones asimétricas e iconos.
- Hero con copy a la izquierda y caja de información a la derecha.
- H1 centrado en puntos de dolor: tiempo sin equipo + datos.
- Diagnóstico gratuito destacado.

GOOGLE ANALYTICS
G-9CQ4FSBR05

TELÉFONO
Caja de información y botones:
+34 918 29 46 53

FORMULARIO
Destino:
soporte@kelatos.com

Backend:
index.html -> /api/contact -> SMTP Webempresa -> soporte@kelatos.com

Variables compartidas Vercel:
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[configurada solo en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

La contraseña NO está incluida en el proyecto.

DATOS FIJOS
WhatsApp:
+34 649 97 01 28

Recogida:
https://sis.redsys.es/tiendaWeb/item/NDk4OzI%3D

Cal.com:
https://cal.com/kelatos/30min
Embebido con tema claro.

YouTube:
https://www.youtube.com/channel/UCaxAqLD9Mk5gvzqoDedlWSA

Google Business:
https://maps.app.goo.gl/ijCbB92oHpLqtTp5A

REFERENCIA
Metro: Islas Filipinas (L7) · Canal (L2)
Aparcamiento público: a pocos metros de C. Blasco de Garay, 61

DOMINIO
https://surface-reparacion-servicio-tecnico.info/
Confirmado por el cliente (coincidía con el correo de prueba que había
aparecido filtrado en el repositorio TechMac). Aplicado en canonical,
og:url, robots.txt, sitemap.xml y el "url" del JSON-LD.

REVISIÓN (fixes aplicados):
- Menú móvil: no existía botón de menú en móvil (.navlinks se ocultaba
  a partir de 950px sin ninguna alternativa). Añadido botón .menu-btn +
  desplegable #mobileMenu con los mismos enlaces.
- Añadido borde blanco al botón del chatbot y reposicionado por encima
  del WhatsApp (antes el WhatsApp estaba en bottom:92px sin ningún CSS
  que posicionara el chat; ahora WhatsApp en bottom:24px y chat en
  bottom:96px, estándar de la familia).
- Añadida sección de contenido SEO propio (#guia), enlazada en el menú
  de escritorio y en el móvil.
- Añadido meta robots (index,follow), que faltaba.
- Ya tenía datos schema.org (ProfessionalService) y Google Analytics
  configurados; no se han tocado más allá de lo indicado arriba sobre
  el dominio pendiente.

REVISIÓN ADICIONAL (pasada posterior):
- No aplica middleware.mjs: este repositorio nació ya como one-page,
  nunca fue multipágina (sin eliminaciones de /servicios/ ni
  /modelos/ en el historial).
- .navphone ya mostraba solo el número (sin el bug de texto largo de
  otras marcas); añadido white-space:nowrap como salvaguarda estándar.
- Schema.org: faltaba areaServed ("Madrid") — añadido.
- H1 de portada reescrito, corto, directo y totalmente afirmativo (sin
  interrogación ni condicionales), incluye "Surface": "Tu Surface no
  enciende. La reparamos y protegemos tus archivos." Tamaño del H1
  aumentado: clamp(38-58px) → clamp(46-74px) en escritorio, 36px →
  44px en móvil.

REVISIÓN ADICIONAL (esta pasada):
- El H1 tenía un cambio manual reciente ("Tu Surface no Funciona.")
  con una F mayúscula por error a mitad de frase; corregido a
  minúscula ("Tu Surface no funciona."), respetando el cambio de
  contenido, solo arreglando la mayúscula.
- Verificado: og:*, sección SEO, menú móvil (ya con estilo correcto),
  borde del chat, icono de WhatsApp (SVG, no texto) y dominio ya
  estaban todos correctos; no se ha tocado nada más.

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- H1 repetía la plantilla "no funciona. La reparamos..." usada en
  varios repos. Reescrito con síntoma específico: "Tu Surface no
  carga o se apaga. Lo arreglamos." (9 palabras).
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario.
- Añadida franja de aviso ("Somos un servicio técnico independiente.
  No vemos equipos en garantía.") debajo del menú (no existía).
- Enlace de política de privacidad: ya enlazaba a
  https://kelatos.com/privacy-policy/, pero sin distinguirse
  visualmente. Añadida clase .privacy-link en azul y subrayado.
- Botón "Atención Telefónica..." sin icono, a diferencia del de
  WhatsApp. Añadido el icono de teléfono.
- Formulario verificado: fetch a /api/contact coincide con
  api/contact.js; conexión correcta.
- No existe texto decorativo tipo "HARDWARE" en este diseño; no aplica.

REVISIÓN ADICIONAL (checklist unificado de la familia + nueva regla de menú móvil, a petición del cliente):
- BUG REAL — enlace de Cal.com desactualizado. Actualizado a
  https://cal.com/kelatos/30min?embed=true&theme=light&attendeePhoneNumber=%2B34&overlayCalendar=true.
- BUG REAL — soporte@kelatos.com aparecía como texto visible en la
  caja de información de contacto. Quitado; el correo solo se usa en
  backend.
- BUG REAL — el mensaje prellenado de WhatsApp decía "¡Hola Kelatos!".
  Corregido a "¡Hola SurfaceLabs!".
- BUG REAL — el menú móvil (#mobileMenu, estilo atributo hidden) no
  tenía ningún listener que lo cerrara al pulsar un enlace. Añadido el
  script estándar de la familia.
- Verificado: sin iconos ni imágenes con proporciones fijas
  incorrectas.
- BUG REAL — el H1 en móvil estaba en 44px. Corregido a 48px.
- BUG REAL — botones del hero (.btn) con border-radius de 16px y sin
  estado hover. Aumentado a border-radius:999px; añadido
  filter:brightness(.88) en btn-wa/btn-blue (ambos de color sólido).
- BUG REAL — la franja de aviso de independencia estaba dentro de
  <header>, después del menú móvil desplegable (.mobile-menu, sin
  position propio, bloque normal). Al abrir el menú, empujaba la
  franja hacia abajo de forma incómoda. Movida fuera de <header>,
  como hermana justo después de él y antes del hero: sigue siendo la
  misma franja amarilla de ancho completo (sin cambios de CSS), solo
  que ahora vive entre la cabecera y el hero en vez de dentro de la
  cabecera.
- Verificado: el header (.site-header{position:sticky;top:0}) ya se
  mantenía fijo/pegado arriba al hacer scroll; no requería cambios.
- Verificado: este repo no usa el patrón de franja de insignias bajo
  el H1 (familia Dyson); no aplica la reubicación.
