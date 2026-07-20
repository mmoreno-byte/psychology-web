# Estado del proyecto — psychology-web

Web profesional para psicólogo. Diseño, desarrollo frontend e integración de
servicios externos (Calendly para reservas, Stripe para pagos).

## Estado actual

🟡 **Diseño y código finalizados · Pendiente de activación por el cliente**

| Bloque | Estado | Notas |
|---|---|---|
| Diseño UI/UX | ✅ Hecho | Paleta "consultorio cálido" (crema, salvia, tierra). Serif + sans. |
| Maquetación (Hero, About, Services, FirstSession, Booking, Contact, Footer) | ✅ Hecho | React + Vite. Responsive. |
| Avatar ilustrado SVG inline | ✅ Hecho | Sustituible por foto real cambiando 2 líneas (instrucciones en `Avatar.jsx`). |
| Sistema de reservas (Calendly) | ⏳ Pendiente | El cliente aún no ha creado la cuenta. Código listo, solo requiere pegar URL y descomentar widget. |
| Sistema de pago (Stripe) | ⏳ Pendiente | No se ha integrado en el código; se hará tras activar reservas. |
| Datos personales reales | ⏳ Pendiente | Email, teléfono, WhatsApp y nº de colegiado son placeholders hasta que el cliente los facilite. |
| Aviso legal / Privacidad / Cookies | ⏳ Pendiente | Generar con iubenda o equivalente antes de producción. |
| Despliegue | ⏳ Pendiente | Listo para Netlify/Vercel en cuanto se decida el dominio. |

## Datos anonimizados

Por privacidad, los datos personales están en formato placeholder ("Álvaro XX",
`[email pendiente]`, `contacto@example.com`). El código real se restaurará
en una rama separada (`cliente-real`) cuando se inicien las sesiones de
trabajo con datos definitivos.

## Demo local

```bash
npm install
npm run dev
```

Disponible en `http://localhost:5173`. En la cabecera del Hero aparece un
aviso discreto: "Sitio demo · Los datos personales y el calendario de
reservas no están activos".

## Próximos pasos

1. Cliente crea cuenta gratuita en Calendly → pegar URL en `Booking.jsx`.
2. Cliente facilita email, teléfono, WhatsApp, nº colegiado y dominio propio.
3. Integración de Stripe para el pago previo a la sesión.
4. Generar textos legales (iubenda ~10 €/mes) o equivalente gratuito.
5. Despliegue en Netlify/Vercel + dominio.
6. (Opcional) Sustituir avatar SVG por foto profesional real.
