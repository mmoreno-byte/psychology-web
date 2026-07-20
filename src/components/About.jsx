export default function About() {
  return (
    <section id="sobre-mi" className="section section--cream">
      <div className="container">

        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 64px' }}>
          <span className="eyebrow">Sobre mí</span>
          <h2>Cómo trabajo</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          marginBottom: 64
        }}>
          <div className="card">
            <h3 style={{ marginBottom: 10 }}>Atención temprana (0–6 años)</h3>
            <p>
              Intervención con niños pequeños y sus familias cuando algo en el desarrollo
              preocupa: lenguaje, conducta, relación con los iguales, regulación emocional.
              Trabajo siempre con los padres dentro del proceso, no como espectadores.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: 10 }}>Adultos</h3>
            <p>
              Ansiedad, bajo estado de ánimo, duelos, crisis vitales, problemas de pareja
              o momentos en los que uno ya no se reconoce. También acompaño en procesos
              largos de cambio cuando la motivación no termina de aparecer.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginBottom: 10 }}>Psicogerontología</h3>
            <p>
              Atención a personas mayores y orientación a sus familias: adaptación a
              pérdidas, deterioro cognitivo leve, sobrecarga del cuidador, decisiones
              difíciles sobre dependencia o vivienda.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 760, margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8 }}>
          <p style={{ marginBottom: 20 }}>
            Mi enfoque es integrador, pero con un peso claro en la terapia cognitivo-conductual
            y la psicología basada en la evidencia. No creo en soluciones mágicas ni en
            encajar a todos en el mismo protocolo. Si algo no funciona, lo cambiamos.
          </p>
          <p style={{ marginBottom: 20 }}>
            Trabajo exclusivamente online desde hace años. Eso me ha enseñado dos cosas:
            que la pantalla no resta profundidad cuando el vínculo está bien, y que muchos
            pacientes que nunca pisarían una consulta sí dan el paso desde su salón.
          </p>
          <p style={{ marginBottom: 36 }}>
            No soy el profesional adecuado para urgencias ni para casos que requieran
            coordinación con psiquiatría presencial. Si es tu caso, te lo digo en la
            primera sesión y te ayudo a derivar.
          </p>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            color: 'var(--ink)',
            borderLeft: '2px solid var(--sage)',
            paddingLeft: 18,
            fontStyle: 'italic'
          }}>
            Pedir ayuda no es rendirse. Es, casi siempre, el primer movimiento honesto.
          </p>
        </div>

      </div>
    </section>
  );
}
