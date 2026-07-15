import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section style={{ 
      padding: '80px 20px', 
      background: '#f8f9fa'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
          textAlign: 'center', 
          marginBottom: '15px',
          color: '#333',
          fontWeight: '700'
        }}>
          Contacto
        </h2>
        
        <p style={{ 
          textAlign: 'center', 
          color: '#666', 
          marginBottom: '50px',
          fontSize: '1.1rem'
        }}>
          ¿Tienes alguna duda? Estoy aquí para ayudarte
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {/* Email */}
          <a 
            href="mailto:alvaro@psicologia.com"
            style={{
              background: 'white',
              padding: '35px',
              borderRadius: '20px',
              textAlign: 'center',
              textDecoration: 'none',
              color: 'inherit',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#667eea';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
            }}
          >
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '1.8rem',
              color: 'white'
            }}>
              <FaEnvelope />
            </div>
            <h4 style={{ color: '#333', marginBottom: '10px', fontSize: '1.2rem' }}>Email</h4>
            <p style={{ color: '#667eea', fontSize: '0.95rem', fontWeight: '500' }}>
              alvaro@psicologia.com
            </p>
            <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '10px' }}>
              Respuesta en menos de 24h
            </p>
          </a>

          {/* Teléfono */}
          <a 
            href="tel:+34600000000"
            style={{
              background: 'white',
              padding: '35px',
              borderRadius: '20px',
              textAlign: 'center',
              textDecoration: 'none',
              color: 'inherit',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#f093fb';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(240, 147, 251, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
            }}
          >
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '1.8rem',
              color: 'white'
            }}>
              <FaPhone />
            </div>
            <h4 style={{ color: '#333', marginBottom: '10px', fontSize: '1.2rem' }}>Teléfono</h4>
            <p style={{ color: '#f093fb', fontSize: '0.95rem', fontWeight: '500' }}>
              +34 600 000 000
            </p>
            <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '10px' }}>
              Lun-Vie: 9:00 - 20:00
            </p>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'white',
              padding: '35px',
              borderRadius: '20px',
              textAlign: 'center',
              textDecoration: 'none',
              color: 'inherit',
              boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#25D366';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 211, 102, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
            }}
          >
            <div style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: '#25D366',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '1.8rem',
              color: 'white'
            }}>
              <FaWhatsapp />
            </div>
            <h4 style={{ color: '#333', marginBottom: '10px', fontSize: '1.2rem' }}>WhatsApp</h4>
            <p style={{ color: '#25D366', fontSize: '0.95rem', fontWeight: '500' }}>
              Enviar mensaje
            </p>
            <p style={{ color: '#999', fontSize: '0.85rem', marginTop: '10px' }}>
              Respuesta rápida
            </p>
          </a>
        </div>

        {/* Redes sociales */}
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '20px',
          textAlign: 'center',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ color: '#333', marginBottom: '25px', fontSize: '1.5rem' }}>
            Sígueme en redes
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#0077b5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.15)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 119, 181, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Información adicional */}
        <div style={{
          marginTop: '50px',
          padding: '30px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h4 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>
            📍 Atención 100% Online
          </h4>
          <p style={{ fontSize: '1rem', opacity: 0.95, lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
            Trabajo exclusivamente en modalidad online, lo que te permite recibir atención 
            psicológica profesional desde cualquier lugar de España con conexión a internet.
          </p>
        </div>
      </div>
    </section>
  );
}
