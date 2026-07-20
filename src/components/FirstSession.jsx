const faqs = [
  {
    q: "¿Cómo es la primera sesión?",
    a: "Nos conocemos. Me cuentas qué te pasa, te hago algunas preguntas para entender el contexto y, al final, te digo qué creo que puede pasar si trabajamos juntos. No te pido que te comprometas a nada: si después decides que no encajo, te lo entiendo y te derivo si hace falta.",
  },
  {
    q: "¿Cuántas sesiones necesitaré?",
    a: "Depende. Algunos procesos se resuelven en 6–10 sesiones; otros son más largos. Al final del primer mes revisamos juntos si lo que estamos haciendo sirve y, si no, ajustamos o cerramos.",
  },
  {
    q: "¿Trabajas con seguros o mutuas?",
    a: "No estoy en cuadro médico de ninguna aseguradora. La factura que emito puede servirte para solicitar reembolso si tu póliza lo cubre. Consúltalo con tu compañía antes de reservar.",
  },
  {
    q: "¿Puedo cambiar o cancelar la cita?",
    a: "Sí, hasta 24 horas antes sin coste. Después de eso, la sesión se cobra igualmente. Si te surge un imprevisto real, hablemos.",
  },
  {
    q: "¿La terapia online funciona de verdad?",
    a: "Sí. La investigación dice que, para la mayoría de los motivos de consulta, los resultados son equivalentes a la terapia presencial. La condición es que haya un espacio tranquilo y conexión estable por tu parte.",
  },
  {
    q: "¿Qué pasa con la confidencialidad?",
    a: "Lo que hablamos en sesión es estrictamente confidencial. No comparto nada con terceros sin tu consentimiento, salvo las obligaciones legales que marca la ley (riesgo para ti o para terceros).",
  },
];

export default function FirstSession() {
  return (
    <section id="primera-sesion" className="section section--paper">
      <div className="container" style={{ maxWidth: 820 }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span className="eyebrow">Antes de reservar</span>
          <h2>Cómo es una primera sesión</h2>
        </div>

        <div>
          {faqs.map((item, idx) => (
            <details
              key={item.q}
              style={{
                borderBottom: '1px solid var(--line)',
                padding: '20px 0',
              }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  color: 'var(--ink)',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <span>{item.q}</span>
                <span
                  style={{
                    color: 'var(--sage-deep)',
                    fontSize: '1.5rem',
                    lineHeight: 1,
                    fontFamily: 'var(--font-sans)',
                    transition: 'transform 0.2s',
                  }}
                >
                  +
                </span>
              </summary>
              <p style={{ marginTop: 16, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
