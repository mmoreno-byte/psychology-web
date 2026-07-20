# Psychology Web — Demo de portfolio

Web profesional para psicólogo. **Sitio demo**: los datos personales y el
sistema de reservas no están activos (ver [`STATUS.md`](./STATUS.md)).

Construido con React 19 + Vite. Sin frameworks de UI pesados, sin CSS
adicional, sin dependencias decorativas. El peso del bundle final ronda
los 70 kB gzipped.

## Stack

- **React 19** con hooks
- **Vite 7** como bundler / dev server
- **Google Fonts** (Fraunces + Inter) — única dependencia externa
- **CSS nativo** con variables (sin Tailwind ni styled-components)
- **SVG inline** para el avatar (sustituible por `<img>`)

## Estructura

```
src/
├── components/
│   ├── Avatar.jsx          # SVG inline del profesional
│   ├── Hero.jsx            # Cabecera
│   ├── About.jsx           # Cómo trabajo
│   ├── Services.jsx        # Áreas de intervención
│   ├── FirstSession.jsx    # FAQ pre-reserva
│   ├── Booking.jsx         # Sistema de reservas (con Calendly comentado)
│   ├── Contact.jsx         # Email, teléfono, WhatsApp
│   └── Footer.jsx          # Pie con aviso legal, privacidad, cookies
├── App.jsx
├── main.jsx
└── index.css               # Sistema de diseño completo (variables CSS)
```

## Sistema de diseño

Toda la web se construye con un único `index.css` que define:

- **Paleta**: `--cream`, `--sage`, `--earth`, `--ink` y variantes.
- **Tipografía**: `--font-serif` (Fraunces) y `--font-sans` (Inter).
- **Espaciado y radios**: `--radius-sm/md/lg`, helpers `.section`, `.card`, `.btn`, `.eyebrow`.

Esto permite cambiar toda la estética del sitio tocando solo el `:root` de
`index.css`.

## Cómo activar Calendly (cuando el cliente tenga cuenta)

Las instrucciones exactas están en el comentario superior de
`src/components/Booking.jsx`. Resumen:

1. Crear cuenta en [calendly.com](https://calendly.com) (gratis).
2. Configurar disponibilidad y crear tipo de evento.
3. Pegar la URL en `const CALENDLY_URL`.
4. Poner `CALENDLY_ACTIVE = true`.
5. Añadir `<script src="https://assets.calendly.com/assets/external/widget.js" async></script>` en `index.html`, antes de `</body>`.
6. Descomentar el bloque "WIDGET CALENDLY".

## Sustituir el avatar por una foto real

En `src/components/Avatar.jsx`, dentro del bloque, sustituir el `<svg>` por:

```jsx
<img src="/avatar.jpg" alt="Retrato" className="avatar-photo" />
```

Y añadir al final de `index.css`:

```css
.avatar-photo { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
```

## Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Servidor de desarrollo (http://localhost:5173)
npm run build    # Build de producción → dist/
npm run preview  # Previsualizar el build
```

## Capturas

(pendiente de sustituir — ver `STATUS.md`)
