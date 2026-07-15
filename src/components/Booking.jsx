import { FaCalendarCheck, FaCreditCard, FaVideo, FaLock } from 'react-icons/fa';

export default function Booking() {
  return (
    <section id="reservar" style={{ 
      padding: '80px 20px', 
      background: 'white',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
          textAlign: 'center', 
          marginBottom: '15px',
          color: '#667eea',
          fontWeight: '700'
        }}>
          Reservar Cita
        </h2>
        
        <p style={{ 
          textAlign: 'center', 
          color: '#666', 
          marginBottom: '50px',
          fontSize: '1.1rem'
        }}>
          Agenda tu primera sesión de forma rápida y segura
        </p>

        {/* Proceso de reserva */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '25px',
          marginBottom: '50px',
          maxWidth: '900px',
          margin: '0 auto 50px'
        }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 15px',
              color: 'white',
              fontSize: '1.5rem'
            }}>
              1
            </div>
            <h4 style={{ color: '#333', marginBottom: '8px' }}>Elige fecha y hora</h4>
            <p style={{ color: '#777', fontSize: '0.9rem' }}>Selecciona el horario que mejor te venga</p>
          </div>

          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 15px',
              color: 'white',
              fontSize: '1.5rem'
            }}>
              2
            </div>
            <h4 style={{ color: '#333', marginBottom: '8px' }}>Completa tus datos</h4>
            <p style={{ color: '#777', fontSize: '0.9rem' }}>Información básica de contacto</p>
          </div>

          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 15px',
              color: 'white',
              fontSize: '1.5rem'
            }}>
              3
            </div>
            <h4 style={{ color: '#333', marginBottom: '8px' }}>Realiza el pago</h4>
            <p style={{ color: '#777', fontSize: '0.9rem' }}>Tarjeta o Bizum seguro</p>
          </div>

          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 15px',
              color: 'white',
              fontSize: '1.5rem'
            }}>
              4
            </div>
            <h4 style={{ color: '#333', marginBottom: '8px' }}>¡Listo!</h4>
            <p style={{ color: '#777', fontSize: '0.9rem' }}>Recibirás confirmación por email</p>
          </div>
        </div>

        {/* Tarjetas de información */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '50px'
        }}>
          <div style={{
            padding: '25px',
            background: '#f8f9fa',
            borderRadius: '15px',
            textAlign: 'center',
            border: '2px solid #e9ecef'
          }}>
            <FaCalendarCheck style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '15px' }} />
            <h4 style={{ color: '#333', marginBottom: '8px' }}>Disponibilidad Inmediata</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Primera cita en menos de 48h</p>
          </div>

          <div style={{
            padding: '25px',
            background: '#f8f9fa',
            borderRadius: '15px',
            textAlign: 'center',
            border: '2px solid #e9ecef'
          }}>
            <FaVideo style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '15px' }} />
            <h4 style={{ color: '#333', marginBottom: '8px' }}>100% Online</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Desde cualquier lugar con conexión</p>
          </div>

          <div style={{
            padding: '25px',
            background: '#f8f9fa',
            borderRadius: '15px',
            textAlign: 'center',
            border: '2px solid #e9ecef'
          }}>
            <FaCreditCard style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '15px' }} />
            <h4 style={{ color: '#333', marginBottom: '8px' }}>Pago Seguro</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Tarjeta o Bizum protegido</p>
          </div>

          <div style={{
            padding: '25px',
            background: '#f8f9fa',
            borderRadius: '15px',
            textAlign: 'center',
            border: '2px solid #e9ecef'
          }}>
            <FaLock style={{ fontSize: '2.5rem', color: '#667eea', marginBottom: '15px' }} />
            <h4 style={{ color: '#333', marginBottom: '8px' }}>Confidencialidad</h4>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Tus datos están protegidos</p>
          </div>
        </div>

        {/* Calendario de Calendly */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '40px',
          background: '#f8f9fa',
          borderRadius: '20px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.08)'
        }}>
          <h3 style={{ 
            textAlign: 'center', 
            color: '#333', 
            marginBottom: '30px',
            fontSize: '1.5rem'
          }}>
            Selecciona tu horario preferido
          </h3>
          
          {/* AQUÍ IRÁ CALENDLY - Por ahora un placeholder */}
          <div style={{
            background: 'white',
            padding: '60px 30px',
            borderRadius: '15px',
            textAlign: 'center',
            border: '2px dashed #667eea'
          }}>
            <FaCalendarCheck style={{ fontSize: '4rem', color: '#667eea', marginBottom: '20px' }} />
            <h4 style={{ color: '#333', marginBottom: '15px' }}>Calendario de Reservas</h4>
            <p style={{ color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>
              Aquí se integrará <strong>Calendly</strong> para que puedas:<br/>
              • Ver la disponibilidad en tiempo real<br/>
              • Reservar tu cita al instante<br/>
              • Recibir confirmación automática
            </p>
            <div style={{
              background: '#f0f4ff',
              padding: '20px',
              borderRadius: '10px',
              marginTop: '20px'
            }}>
              <p style={{ color: '#667eea', fontSize: '0.95rem', margin: 0 }}>
                💡 <strong>Próximamente:</strong> Necesitarás crear una cuenta gratuita en 
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" 
                   style={{ color: '#667eea', marginLeft: '5px', textDecoration: 'underline' }}>
                  calendly.com
                </a> y copiar tu enlace aquí
              </p>
            </div>
          </div>
        </div>

        {/* Tarifas */}
        <div style={{
          marginTop: '50px',
          padding: '40px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Tarifas</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div>
              <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '10px' }}>Primera Sesión</p>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0' }}>50€</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '5px' }}>60 minutos</p>
            </div>
            <div>
              <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '10px' }}>Sesiones Siguientes</p>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0' }}>50€</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '5px' }}>50 minutos</p>
            </div>
            <div>
              <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '10px' }}>Bono 4 Sesiones</p>
              <p style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0' }}>180€</p>
              <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '5px' }}>Ahorra 20€</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
