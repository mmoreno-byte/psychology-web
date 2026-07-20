// Avatar ilustrado de Álvaro.
// Para sustituirlo por una foto real más adelante, basta con reemplazar el <svg> por:
// <img src="/avatar.jpg" alt="Retrato del profesional" className="avatar-photo" />
// y añadir en index.css:
//   .avatar-photo { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }

export default function Avatar({ size = 200 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      role="img"
      aria-label="Retrato ilustrado del profesional"
    >
      {/* Fondo circular crema */}
      <circle cx="100" cy="100" r="100" fill="#EFE7D8" />

      {/* Camiseta / torso (brazos cruzados) */}
      <path
        d="M30 200
           C 30 150, 60 130, 100 130
           C 140 130, 170 150, 170 200 Z"
        fill="#3F5A4A"
      />

      {/* Brazo izquierdo cruzado (el de su derecha) */}
      <path
        d="M55 175
           C 60 158, 80 150, 100 152
           C 110 153, 115 158, 113 165
           C 110 175, 95 180, 75 182
           C 65 183, 55 182, 55 175 Z"
        fill="#EFE7D8"
        stroke="#3F5A4A"
        strokeWidth="1.5"
      />

      {/* Brazo derecho cruzado (el de su izquierda) */}
      <path
        d="M145 175
           C 140 158, 120 150, 100 152
           C 90 153, 85 158, 87 165
           C 90 175, 105 180, 125 182
           C 135 183, 145 182, 145 175 Z"
        fill="#EFE7D8"
        stroke="#3F5A4A"
        strokeWidth="1.5"
      />

      {/* Cuello */}
      <rect x="88" y="115" width="24" height="22" rx="6" fill="#E5C9A8" />

      {/* Cara (un poco rellenita, mejillas suaves) */}
      <ellipse cx="100" cy="85" rx="42" ry="48" fill="#E8CDAF" />

      {/* Sombra sutil bajo el mentón */}
      <ellipse cx="100" cy="118" rx="26" ry="6" fill="#D9B893" opacity="0.4" />

      {/* Orejas */}
      <ellipse cx="58" cy="88" rx="6" ry="9" fill="#E5C9A8" />
      <ellipse cx="142" cy="88" rx="6" ry="9" fill="#E5C9A8" />

      {/* Pelo blanco: base */}
      <path
        d="M58 78
           C 55 50, 80 35, 100 35
           C 120 35, 145 50, 142 78
           C 142 70, 130 62, 120 62
           C 115 55, 100 52, 90 56
           C 78 55, 65 60, 60 70
           C 58 73, 58 76, 58 78 Z"
        fill="#F2F0EA"
      />

      {/* Mechón que cae hacia la frente (pelo blanco) */}
      <path
        d="M75 60
           C 78 52, 92 48, 105 52
           C 95 56, 88 62, 84 70
           C 80 66, 76 63, 75 60 Z"
        fill="#FFFFFF"
      />

      {/* Cejas (delgadas, claras) */}
      <path
        d="M80 78 Q 86 75 92 78"
        stroke="#B8B0A0"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M108 78 Q 114 75 120 78"
        stroke="#B8B0A0"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      />

      {/* Ojos azules */}
      <ellipse cx="86" cy="88" rx="4" ry="3" fill="#5B8DBF" />
      <ellipse cx="114" cy="88" rx="4" ry="3" fill="#5B8DBF" />
      <circle cx="86" cy="88" r="1.2" fill="#2F4A66" />
      <circle cx="114" cy="88" r="1.2" fill="#2F4A66" />

      {/* Nariz (sutil) */}
      <path
        d="M100 92 Q 99 100 102 103"
        stroke="#C9A685"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />

      {/* Boca (sonrisa leve, no exagerada) */}
      <path
        d="M93 108 Q 100 111 107 108"
        stroke="#A87C5C"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />

      {/* Gafas: montura redonda */}
      <circle cx="86" cy="89" r="11" fill="none" stroke="#2D2A26" strokeWidth="2" />
      <circle cx="114" cy="89" r="11" fill="none" stroke="#2D2A26" strokeWidth="2" />
      <path d="M97 89 L 103 89" stroke="#2D2A26" strokeWidth="2" />
      <path d="M75 88 L 70 87" stroke="#2D2A26" strokeWidth="2" />
      <path d="M125 88 L 130 87" stroke="#2D2A26" strokeWidth="2" />

      {/* Sutil brillo en las lentes */}
      <path
        d="M80 84 Q 84 82 88 84"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M108 84 Q 112 82 116 84"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
