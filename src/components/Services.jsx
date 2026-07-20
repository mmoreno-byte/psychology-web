const services = [
  {
    title: "Terapia individual en adultos",
    description:
      "Para momentos en los que algo se ha torcido o en los que, sin saber por qué, ya no estás bien. Ansiedad, bajo estado de ánimo, duelos, crisis de pareja, problemas laborales, autoestima.",
    points: [
      "50 minutos, frecuencia semanal o quincenal",
      "Sesiones por videollamada segura",
      "Tareas entre sesiones cuando tienen sentido",
    ],
  },
  {
    title: "Atención temprana (0–6 años)",
    description:
      "Intervención con niños pequeños y trabajo directo con sus familias. Lenguaje, conducta, regulación emocional, relación con iguales, problemas de sueño o alimentación.",
    points: [
      "Sesiones con el niño + espacio con los padres",
      "Coordinación con colegio o pediatría si hace falta",
      "Orientación familiar continua",
    ],
  },
  {
    title: "Psicogerontología",
    description:
      "Atención a personas mayores y a sus familias. Duelos, deterioro cognitivo leve, soledad, adaptación a pérdidas, decisiones sobre dependencia o cambio de vivienda.",
    points: [
      "Trabajo con la persona y con su familia",
      "Apoyo al cuidador principal",
      "Coordinación con servicios sociales si procede",
    ],
  },
  {
    title: "Orientación a familias y parejas",
    description:
      "Espacios para hablar de lo que pasa en casa sin que se convierta en un juicio. Conflictos de pareja, dificultades con los hijos, decisiones educativas, momentos de cambio.",
    points: [
      "Sesiones puntuales o procesos breves",
      "Enfoque práctico, no terapia larga",
      "Confidencialidad total entre miembros",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section section--paper">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 64px' }}>
          <span className="eyebrow">Servicios</span>
          <h2>Qué hago y con quién</h2>
          <p style={{ marginTop: 16, fontSize: '1.05rem' }}>
            Trabajo en cuatro áreas. Si no encajas en ninguna, te lo digo
            antes de reservar.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {services.map((service) => (
            <div key={service.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: 12 }}>{service.title}</h3>
              <p style={{ marginBottom: 20, flexGrow: 1 }}>{service.description}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {service.points.map((point) => (
                  <li
                    key={point}
                    style={{
                      padding: '6px 0 6px 22px',
                      position: 'relative',
                      fontSize: '0.92rem',
                      color: 'var(--ink-soft)',
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'var(--sage)',
                        fontWeight: 600,
                      }}
                    >
                      ·
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
