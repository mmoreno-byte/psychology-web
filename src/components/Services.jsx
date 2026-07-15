import { FaUser, FaBaby, FaHandsHelping, FaLaptop } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <FaUser />,
      title: "Terapia Individual Adultos",
      description: "Tratamiento de ansiedad, depresión, estrés, problemas de autoestima, duelo y crisis vitales.",
      details: [
        "Ansiedad y trastornos del estado de ánimo",
        "Gestión del estrés y burnout",
        "Problemas de autoestima",
        "Duelo y pérdidas",
        "Crisis vitales y adaptación al cambio"
      ],
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      icon: <FaBaby />,
      title: "Atención Temprana (0-6 años)",
      description: "Intervención especializada en el desarrollo infantil temprano, estimulación y apoyo a familias.",
      details: [
        "Evaluación del desarrollo infantil",
        "Estimulación temprana",
        "Trastornos del neurodesarrollo",
        "Apoyo y orientación a familias",
        "Coordinación con otros profesionales"
      ],
      color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      icon: <FaHandsHelping />,
      title: "Psicogerontología",
      description: "Atención psicológica especializada para la tercera edad y apoyo a cuidadores.",
      details: [
        "Envejecimiento activo y saludable",
        "Deterioro cognitivo leve",
        "Adaptación a cambios vitales",
        "Apoyo en procesos de duelo",
        "Orientación a familiares y cuidadores"
      ],
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      icon: <FaLaptop />,
      title: "Terapia Online",
      description: "Sesiones por videollamada desde la comodidad de tu hogar, con la misma calidad profesional.",
      details: [
        "Horarios flexibles adaptados a ti",
        "Plataforma segura y confidencial",
        "Misma efectividad que presencial",
        "Ahorro de tiempo y desplazamientos",
        "Acceso desde cualquier lugar"
      ],
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ];

  return (
    <section style={{ 
      padding: '80px 20px', 
      background: '#f8f9fa',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
          textAlign: 'center', 
          marginBottom: '15px',
          color: '#333',
          fontWeight: '700'
        }}>
          Servicios
        </h2>
        
        <p style={{ 
          textAlign: 'center', 
          color: '#666', 
          marginBottom: '60px',
          fontSize: '1.1rem',
          maxWidth: '700px',
          margin: '0 auto 60px'
        }}>
          Atención psicológica profesional adaptada a cada etapa de la vida
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px'
        }}>
          {services.map((service) => (
            <div 
              key={service.id} 
              style={{
                background: 'white',
                padding: '35px',
                borderRadius: '20px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                border: '1px solid #f0f0f0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
              }}
            >
              {/* Icono */}
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '15px',
                background: service.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white',
                marginBottom: '20px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
              }}>
                {service.icon}
              </div>

              {/* Título */}
              <h3 style={{ 
                color: '#333', 
                fontSize: '1.4rem', 
                marginBottom: '15px',
                fontWeight: '600'
              }}>
                {service.title}
              </h3>

              {/* Descripción */}
              <p style={{ 
                color: '#666', 
                lineHeight: '1.7', 
                marginBottom: '20px',
                fontSize: '0.95rem'
              }}>
                {service.description}
              </p>

              {/* Lista de detalles */}
              <ul style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                fontSize: '0.9rem',
                color: '#777'
              }}>
                {service.details.map((detail, index) => (
                  <li key={index} style={{ 
                    marginBottom: '8px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '0',
                      color: '#667eea',
                      fontWeight: 'bold'
                    }}>✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div style={{
          marginTop: '60px',
          padding: '40px',
          background: 'white',
          borderRadius: '20px',
          textAlign: 'center',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ color: '#667eea', fontSize: '1.5rem', marginBottom: '15px' }}>
            💼 Modalidad y Duración
          </h3>
          <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto' }}>
            Las sesiones tienen una duración de <strong>50-60 minutos</strong> y se realizan mediante 
            videollamada segura. La frecuencia se adapta a tus necesidades, generalmente <strong>semanal 
            o quincenal</strong>. Primera consulta disponible en <strong>menos de 48 horas</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
