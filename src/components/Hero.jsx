import Avatar from './Avatar';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="section section--paper" style={{ paddingTop: 120, paddingBottom: 96 }}>
      <div className="container" style={{ display: 'grid', gap: 56, alignItems: 'center', gridTemplateColumns: 'minmax(0, 1fr)' }}>

        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
          <span className="eyebrow">Psicólogo general sanitario · Online</span>

          <h1 style={{ marginBottom: 20 }}>
            Álvaro XX
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--ink-soft)', marginBottom: 36, lineHeight: 1.55 }}>
            Acompaño a adultos, familias con niños pequeños y personas mayores
            a entender lo que les pasa y a decidir qué hacer con ello.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={scrollToBooking} className="btn btn--primary">
              Reservar primera sesión
            </button>
            <a href="#sobre-mi" className="btn btn--ghost">
              Conocer cómo trabajo
            </a>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: 24 }}>
            Sesión inicial 50 € · 50–60 minutos · Primera cita disponible en menos de 48 h
          </p>
          <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: 8, fontStyle: 'italic' }}>
            Sitio demo · Los datos personales y el calendario de reservas no están activos
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="avatar-wrap">
            <Avatar size={220} />
          </div>
        </div>

      </div>
    </header>
  );
}
