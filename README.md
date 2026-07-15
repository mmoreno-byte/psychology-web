# 🧠 Web de Psicología - Álvaro Sánchez Durán

Sitio web profesional para psicólogo con sistema de reservas y pagos online.

## 🚀 Instalación y Uso

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en desarrollo
```bash
npm run dev
```

La web estará disponible en: `http://localhost:5173`

### 3. Compilar para producción
```bash
npm run build
```

## 📋 Estructura del Proyecto

```
psychology-web/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Portada principal
│   │   ├── About.jsx         # Sobre mí
│   │   ├── Services.jsx      # Servicios de psicología
│   │   ├── Booking.jsx       # Sistema de reservas
│   │   ├── Contact.jsx       # Contacto
│   │   └── Footer.jsx        # Pie de página
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── favicon.svg           # Logo ASD
└── index.html
```

## 🔧 Configuración Necesaria

### 1. Sistema de Reservas (Calendly - GRATIS)

**Pasos:**
1. Crear cuenta gratuita en [calendly.com](https://calendly.com)
2. Configurar tu disponibilidad horaria
3. Crear un tipo de evento: "Primera Sesión - 60 min"
4. Copiar tu enlace de Calendly (ej: `https://calendly.com/tu-usuario/primera-sesion`)
5. En `src/components/Booking.jsx`, reemplazar el placeholder con:

```jsx
{/* Reemplaza el div placeholder con: */}
<div 
  className="calendly-inline-widget" 
  data-url="TU_ENLACE_DE_CALENDLY_AQUÍ"
  style={{ minWidth: '320px', height: '700px' }}
></div>

{/* Y agrega este script en index.html antes del cierre de </body>: */}
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### 2. Pasarela de Pago (Stripe - GRATIS)

**Pasos:**
1. Crear cuenta en [stripe.com](https://stripe.com)
2. Activar cuenta española (acepta Bizum automáticamente)
3. En el Dashboard de Stripe:
   - Ir a "Productos" → "Crear producto"
   - Nombre: "Sesión de Psicología"
   - Precio: 50€
   - Copiar el "Price ID" (empieza con `price_...`)

4. Instalar Stripe en tu proyecto:
```bash
npm install @stripe/stripe-js
```

5. Crear archivo `src/components/StripeCheckout.jsx`:

```jsx
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('TU_PUBLISHABLE_KEY');

export default function StripeCheckout({ priceId }) {
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: 'payment',
      successUrl: window.location.origin + '/success',
      cancelUrl: window.location.origin + '/cancel',
    });
    if (error) console.error(error);
  };

  return (
    <button onClick={handleCheckout} style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      padding: '15px 40px',
      fontSize: '1.1rem',
      borderRadius: '10px',
      cursor: 'pointer'
    }}>
      Pagar Sesión (50€)
    </button>
  );
}
```

### 3. Integrar Calendly + Stripe

**Opción A: Pago después de reservar (recomendado)**
- Usuario reserva → Recibe email → Paga antes de la sesión

**Opción B: Pago integrado**
- Usar [Calendly + Stripe Integration](https://calendly.com/integrations/stripe)
- Requiere plan de pago de Calendly (desde 10€/mes)

## 💶 Costes Reales (100% Gratis hasta que cobres)

- ✅ **Calendly Free**: Gratis para 1 tipo de evento
- ✅ **Stripe**: Gratis (solo 1,4% + 0,25€ por transacción exitosa)
- ✅ **Hosting**: Gratis con Netlify/Vercel
- ✅ **Dominio**: ~10€/año (opcional, puedes usar el gratuito)

**Total inversión inicial: 0€**

## 🌐 Desplegar en Internet (GRATIS)

### Opción 1: Netlify (Recomendado)
1. Crear cuenta en [netlify.com](https://netlify.com)
2. Conectar tu repositorio de GitHub
3. ¡Listo! URL automática: `tu-sitio.netlify.app`

### Opción 2: Vercel
1. Crear cuenta en [vercel.com](https://vercel.com)
2. Importar proyecto
3. URL automática: `tu-sitio.vercel.app`

## 📝 Personalización

### Cambiar textos y datos:
1. **Hero.jsx**: Nombre, especialidades, tarifas
2. **About.jsx**: Biografía, formación
3. **Services.jsx**: Tipos de terapia
4. **Contact.jsx**: Email, teléfono, WhatsApp
5. **Footer.jsx**: Número de colegiado

### Cambiar colores:
Busca y reemplaza estos códigos de color:
- `#667eea` (morado principal)
- `#764ba2` (morado oscuro)
- `#f093fb` (rosa)

## 📧 Contactos a actualizar

En los siguientes archivos, reemplaza:
- `alvaro@psicologia.com` → tu email real
- `+34 600 000 000` → tu teléfono
- `AN-XXXXX` → tu número de colegiado
- Enlaces de LinkedIn

## 🔒 Aviso Legal y Privacidad

**Importante**: Necesitarás:
1. Política de Privacidad (obligatorio RGPD)
2. Aviso Legal
3. Política de Cookies

Puedes generarlas gratis en:
- [iubenda.com](https://www.iubenda.com/es/)
- [freeprivacypolicy.com](https://www.freeprivacypolicy.com/)

## 📞 Soporte

Si tienes dudas:
1. Revisa la documentación de Calendly y Stripe
2. Consulta tutoriales en YouTube
3. Pregunta en comunidades de React

## ✅ Checklist antes de publicar

- [ ] Configurar Calendly con horarios reales
- [ ] Activar cuenta de Stripe y obtener keys
- [ ] Cambiar todos los emails/teléfonos de contacto
- [ ] Añadir número de colegiado real
- [ ] Crear política de privacidad
- [ ] Probar el sistema de reservas
- [ ] Probar el sistema de pago
- [ ] Conectar dominio propio (opcional)

---

**Hecho con ❤️ para Álvaro Sánchez Durán**
