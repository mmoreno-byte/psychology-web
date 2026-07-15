import { FaBrain, FaHeart, FaHandHoldingHeart } from 'react-icons/fa';

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header style={{ 
      padding: '100px 20px 80px', 
      textAlign: 'center', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Círculos decorativos de fondo */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.1)',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
        zIndex: 0
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Logo/Avatar */}
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'white',
          margin: '0 auto 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#667eea',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
        }}>
          ASD
        </div>

        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
          margin: '20px 0', 
          fontWeight: '700',
          letterSpacing: '-1px'
        }}>
          Álvaro Sánchez Durán
        </h1>
        
        <p style={{ 
          fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', 
          color: 'rgba(255,255,255,0.95)', 
          maxWidth: '700px', 
          margin: '0 auto 20px',
          fontWeight: '300'
        }}>
          Psicólogo General Sanitario
        </p>

        <p style={{ 
          fontSize: '1rem', 
          color: 'rgba(255,255,255,0.85)', 
          maxWidth: '600px', 
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Especialista en Atención Temprana y Psicogerontología<br/>
          Terapia online personalizada para todas las edades
        </p>

        {/* Iconos de especialidades */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '40px', 
          flexWrap: 'wrap', 
          marginTop: '40px',
          marginBottom: '40px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <FaBrain style={{ fontSize: '2.5rem', marginBottom: '10px' }} />
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Adultos</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaHandHoldingHeart style={{ fontSize: '2.5rem', marginBottom: '10px' }} />
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Niños 0-6 años</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaHeart style={{ fontSize: '2.5rem', marginBottom: '10px' }} />
            <p style={{ fontSize: '0.9rem', margin: 0 }}>Tercera Edad</p>
          </div>
        </div>

        {/* Botón CTA */}
        <button 
          onClick={scrollToBooking}
          style={{
            background: 'white',
            color: '#667eea',
            border: 'none',
            padding: '18px 45px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease',
            marginTop: '20px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          }}
        >
          Reservar Primera Sesión
        </button>

        <p style={{ 
          fontSize: '0.9rem', 
          marginTop: '15px', 
          color: 'rgba(255,255,255,0.8)' 
        }}>
          Primera consulta: 50€ | Sesiones siguientes: 50€
        </p>
      </div>
    </header>
  );
}
