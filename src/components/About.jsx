import { FaGraduationCap, FaAward, FaUserMd } from 'react-icons/fa';

export default function About() {
  return (
    <section style={{ 
      padding: '80px 20px', 
      maxWidth: '1100px', 
      margin: '0 auto',
      background: 'white'
    }}>
      <h2 style={{ 
        fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
        color: '#667eea', 
        marginBottom: '20px',
        textAlign: 'center',
        fontWeight: '700'
      }}>
        Sobre mí
      </h2>
      
      <p style={{ 
        textAlign: 'center', 
        color: '#666', 
        marginBottom: '50px',
        fontSize: '1.1rem'
      }}>
        Comprometido con tu bienestar emocional
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '30px',
        marginBottom: '50px'
      }}>
        {/* Tarjeta 1 */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '35px',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(102, 126, 234, 0.2)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <FaGraduationCap style={{ fontSize: '3rem', marginBottom: '15px' }} />
          <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Formación</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.95 }}>
            Psicólogo General Sanitario con sólida formación académica y práctica clínica
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          padding: '35px',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(240, 147, 251, 0.2)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <FaAward style={{ fontSize: '3rem', marginBottom: '15px' }} />
          <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Especialización</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.95 }}>
            Máster en Atención Temprana y Máster en Gerontología
          </p>
        </div>

        {/* Tarjeta 3 */}
        <div style={{
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          padding: '35px',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(79, 172, 254, 0.2)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <FaUserMd style={{ fontSize: '3rem', marginBottom: '15px' }} />
          <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>Experiencia</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.95 }}>
            Amplia experiencia en intervención psicológica con todas las edades
          </p>
        </div>
      </div>

      {/* Descripción personal */}
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        fontSize: '1.1rem', 
        color: '#555',
        lineHeight: '1.8',
        textAlign: 'center'
      }}>
        <p style={{ marginBottom: '20px' }}>
          Mi enfoque terapéutico se basa en la <strong>escucha activa</strong> y el 
          <strong> respeto a la individualidad</strong> de cada persona. Creo firmemente que 
          cada paciente es único y merece un tratamiento personalizado.
        </p>
        <p style={{ marginBottom: '20px' }}>
          Con formación especializada en <strong>Atención Temprana</strong> (niños de 0 a 6 años) 
          y <strong>Psicogerontología</strong> (tercera edad), ofrezco intervenciones adaptadas 
          a las necesidades específicas de cada etapa vital.
        </p>
        <p style={{ 
          fontStyle: 'italic', 
          color: '#667eea',
          fontSize: '1.2rem',
          marginTop: '30px',
          fontWeight: '500'
        }}>
          "El primer paso para el cambio es entender que mereces estar bien"
        </p>
      </div>
    </section>
  );
}
