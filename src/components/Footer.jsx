import { FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      padding: '60px 20px 30px',
      background: '#2d3748',
      color: 'white',
      borderTop: '4px solid #667eea'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Logo y descripción */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          <div>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#667eea',
              marginBottom: '15px'
            }}>
              ASD
            </div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              marginBottom: '10px',
              fontWeight: '600'
            }}>
              Álvaro Sánchez Durán
            </h3>
            <p style={{ 
              color: '#cbd5e0', 
              lineHeight: '1.6',
              fontSize: '0.95rem'
            }}>
              Psicólogo General Sanitario<br/>
              Especialista en Atención Temprana<br/>
              y Psicogerontología
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 style={{ 
              fontSize: '1.1rem', 
              marginBottom: '20px',
              color: '#667eea'
            }}>
              Enlaces Rápidos
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0 
            }}>
              <li style={{ marginBottom: '12px' }}>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#cbd5e0',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    padding: 0,
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#667eea'}
                  onMouseLeave={(e) => e.target.style.color = '#cbd5e0'}
                >
                  Inicio
                </button>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <button
                  onClick={() => scrollToSection('reservar')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#cbd5e0',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    padding: 0,
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#667eea'}
                  onMouseLeave={(e) => e.target.style.color = '#cbd5e0'}
                >
                  Reservar Cita
                </button>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a 
                  href="#servicios"
                  style={{
                    color: '#cbd5e0',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    transition: 'color 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#667eea'}
                  onMouseLeave={(e) => e.target.style.color = '#cbd5e0'}
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{ 
              fontSize: '1.1rem', 
              marginBottom: '20px',
              color: '#667eea'
            }}>
              Contacto
            </h4>
            <div style={{ color: '#cbd5e0', fontSize: '0.95rem', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '10px' }}>
                📧 alvaro@psicologia.com
              </p>
              <p style={{ marginBottom: '10px' }}>
                📱 +34 600 000 000
              </p>
              <p>
                🕐 Lun-Vie: 9:00 - 20:00
              </p>
            </div>
            
            {/* Redes sociales */}
            <div style={{
              display: 'flex',
              gap: '15px',
              marginTop: '20px'
            }}>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: '#0077b5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 119, 181, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:alvaro@psicologia.com"
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  background: '#667eea',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div style={{
          borderTop: '1px solid #4a5568',
          marginTop: '40px',
          paddingTop: '30px'
        }}>
          {/* Información legal */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            fontSize: '0.9rem',
            color: '#a0aec0'
          }}>
            <div>
              <p style={{ margin: '0 0 5px 0' }}>
                © {new Date().getFullYear()} Álvaro Sánchez Durán - Psicólogo General Sanitario
              </p>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>
                Nº Colegiado: AN-XXXXX | Todos los derechos reservados
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <a 
                href="#privacidad"
                style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#a0aec0'}
              >
                Política de Privacidad
              </a>
              <a 
                href="#aviso-legal"
                style={{
                  color: '#a0aec0',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = '#a0aec0'}
              >
                Aviso Legal
              </a>
            </div>
          </div>

          {/* Mensaje final */}
          <p style={{
            textAlign: 'center',
            color: '#718096',
            fontSize: '0.85rem',
            marginTop: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            Hecho con <FaHeart style={{ color: '#f56565' }} /> para tu bienestar emocional
          </p>
        </div>
      </div>
    </footer>
  );
}
