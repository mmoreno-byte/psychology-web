export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--ink)',
        color: 'var(--cream)',
        padding: '64px 0 32px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 48,
            marginBottom: 48,
          }}
        >
          <div>
            <h3 style={{ color: 'var(--cream)', fontSize: '1.3rem', marginBottom: 12 }}>
              Álvaro XX
            </h3>
            <p style={{ color: 'var(--cream-soft)', fontSize: '0.92rem', lineHeight: 1.7 }}>
              Psicólogo general sanitario<br />
              Nº colegiado: AN-XXXXX<br />
              Colegio Oficial de Psicología
            </p>
          </div>

          <div>
            <h4 style={{
              color: 'var(--cream)',
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: 16,
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
            }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 10 }}>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  style={{ color: 'var(--cream-soft)', fontSize: '0.92rem', padding: 0 }}
                >
                  Inicio
                </button>
              </li>
              <li style={{ marginBottom: 10 }}>
                <button onClick={() => scrollTo('sobre-mi')} style={{ color: 'var(--cream-soft)', fontSize: '0.92rem', padding: 0 }}>
                  Cómo trabajo
                </button>
              </li>
              <li style={{ marginBottom: 10 }}>
                <button onClick={() => scrollTo('servicios')} style={{ color: 'var(--cream-soft)', fontSize: '0.92rem', padding: 0 }}>
                  Servicios
                </button>
              </li>
              <li style={{ marginBottom: 10 }}>
                <button onClick={() => scrollTo('primera-sesion')} style={{ color: 'var(--cream-soft)', fontSize: '0.92rem', padding: 0 }}>
                  Primera sesión
                </button>
              </li>
              <li style={{ marginBottom: 10 }}>
                <button onClick={() => scrollTo('contacto')} style={{ color: 'var(--cream-soft)', fontSize: '0.92rem', padding: 0 }}>
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{
              color: 'var(--cream)',
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: 16,
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
            }}>
              Legal
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 10 }}>
                <a href="#aviso-legal" style={{ color: 'var(--cream-soft)', fontSize: '0.92rem' }}>
                  Aviso legal
                </a>
              </li>
              <li style={{ marginBottom: 10 }}>
                <a href="#privacidad" style={{ color: 'var(--cream-soft)', fontSize: '0.92rem' }}>
                  Política de privacidad
                </a>
              </li>
              <li style={{ marginBottom: 10 }}>
                <a href="#cookies" style={{ color: 'var(--cream-soft)', fontSize: '0.92rem' }}>
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(245, 239, 227, 0.15)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
            fontSize: '0.85rem',
            color: 'var(--cream-soft)',
          }}
        >
          <p style={{ margin: 0 }}>
            © {year} Álvaro XX. Todos los derechos reservados.
          </p>
          <p style={{ margin: 0, opacity: 0.7 }}>
            Actividad sanitaria sujeta al código deontológico del COP.
          </p>
        </div>
      </div>
    </footer>
  );
}
