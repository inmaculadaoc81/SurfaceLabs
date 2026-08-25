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

IMPORTANTE
No se proporcionó el dominio público de SurfaceLabs en esta solicitud.
Por ese motivo NO se inventó:
- canonical
- URL absoluta de sitemap
- dominio en Schema (falta la propiedad "url")

Cuando se proporcione el dominio, hay que añadirlo antes de publicar definitivamente.
NOTA: en el repositorio TechMac apareció una línea de contacto de prueba
apuntando a "info@surface-reparacion-servicio-tecnico.info" — es posible
que ese fuera el dominio real pensado para SurfaceLabs. Confirmar antes
de darlo por bueno.

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
