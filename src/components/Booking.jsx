/*
 * INTEGRACIÓN CON CALENDLY
 * ------------------------
 * 1. Crea una cuenta gratuita en https://calendly.com
 * 2. Configura tu disponibilidad horaria y crea un tipo de evento
 *    (por ejemplo "Primera sesión - 50 min").
 * 3. Copia tu enlace público. Tendrá esta pinta:
 *    https://calendly.com/TU-USUARIO/primera-sesion
 * 4. Pégalo en la constante CALENDLY_URL de más abajo.
 * 5. Añade este <script> en index.html, justo antes del cierre de </body>:
 *    <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
 * 6. Descomenta el bloque "WIDGET CALENDLY" y borra el placeholder.
 */

const CALENDLY_URL = "https://calendly.com/TU-USUARIO/primera-sesion";
const CALENDLY_ACTIVE = false; // <-- cambia a true cuando pegues tu enlace

export default function Booking() {
  return (
    <section id="reservar" className="section section--cream">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
          <span className="eyebrow">Reservar</span>
          <h2>Reserva tu primera sesión</h2>
          <p style={{ marginTop: 16, fontSize: '1.05rem' }}>
            Elige un hueco libre en mi calendario. La primera sesión cuesta
            50 € y dura 50–60 minutos. Si después decides no continuar, no pasa nada.
          </p>
        </div>

        {/* ============================================================
            WIDGET CALENDLY — Descomentar cuando CALENDLY_ACTIVE = true
            ============================================================ */}
        {/* {CALENDLY_ACTIVE ? (
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: '320px', height: '720px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}
          />
        ) : (
          // Placeholder honesto mientras tanto
          <div
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius-lg)',
              padding: '64px 32px',
              textAlign: 'center',
              maxWidth: 720,
              margin: '0 auto',
            }}
          >
            <h3 style={{ marginBottom: 12 }}>El calendario estará disponible en breve</h3>
            <p style={{ marginBottom: 24 }}>
              Estoy terminando de configurar mi agenda online.
              Mientras tanto, escríbeme y te propongo hueco directamente.
            </p>
            <a href="#contacto" className="btn btn--primary">
              Escríbeme
            </a>
          </div>
        )} */}

        {/* Placeholder visible hasta que se active Calendly */}
        <div
          style={{
            background: 'var(--paper)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)',
            padding: '64px 32px',
            textAlign: 'center',
            maxWidth: 720,
            margin: '0 auto',
          }}
        >
          <h3 style={{ marginBottom: 12 }}>El calendario estará disponible en breve</h3>
          <p style={{ marginBottom: 24 }}>
            Estoy terminando de configurar mi agenda online.
            Mientras tanto, escríbeme y te propongo hueco directamente.
          </p>
          <a href="#contacto" className="btn btn--primary">
            Escríbeme
          </a>
        </div>

        {/* Tarifas */}
        <div
          style={{
            marginTop: 80,
            maxWidth: 720,
            margin: '80px auto 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 24,
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: 8 }}>
              Primera sesión
            </p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--ink)' }}>
              50 €
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>50–60 min</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: 8 }}>
              Sesiones siguientes
            </p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--ink)' }}>
              50 €
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>50 min</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: 8 }}>
              Bono 4 sesiones
            </p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: 'var(--ink)' }}>
              180 €
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Ahorras 20 €</p>
          </div>
        </div>
      </div>
    </section>
  );
}
