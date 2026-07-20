const contactItems = [
  {
    label: "Email",
    value: "[email pendiente]",
    href: "mailto:contacto@example.com",
    note: "El email real se activará cuando el cliente lo facilite.",
  },
  {
    label: "Teléfono",
    value: "[teléfono pendiente]",
    href: "tel:+34600000000",
    note: "Lunes a viernes, de 9:00 a 20:00.",
  },
  {
    label: "WhatsApp",
    value: "Enviar mensaje",
    href: "https://wa.me/34600000000",
    note: "Para dudas cortas. No se atienden urgencias.",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="section section--cream">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <span className="eyebrow">Contacto</span>
          <h2>Escríbeme</h2>
          <p style={{ marginTop: 16, fontSize: '1.05rem' }}>
            Si dudas entre reservar o no, escríbeme. Te contesto yo, no un bot.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 24,
            marginBottom: 64,
          }}
        >
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card"
              style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <p style={{
                fontSize: '0.78rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--sage-deep)',
                marginBottom: 12,
              }}>
                {item.label}
              </p>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.3rem',
                color: 'var(--ink)',
                marginBottom: 12,
              }}>
                {item.value}
              </p>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', margin: 0 }}>
                {item.note}
              </p>
            </a>
          ))}
        </div>

        {/* Aviso importante */}
        <div
          style={{
            maxWidth: 720,
            margin: '0 auto',
            padding: 24,
            borderLeft: '3px solid var(--earth)',
            background: 'var(--paper)',
            borderRadius: 'var(--radius-sm)',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--ink-soft)' }}>
            <strong>Importante:</strong> si estás en una crisis grave o piensas
            hacerte daño, no esperes a mi respuesta. Llama al{' '}
            <strong>024</strong> (línea de atención a la conducta suicida,
            24/7) o acude al servicio de urgencias más cercano.
          </p>
        </div>
      </div>
    </section>
  );
}
