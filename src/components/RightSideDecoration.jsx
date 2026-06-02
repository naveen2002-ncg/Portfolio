import { motion } from 'framer-motion';

function RightSideDecoration({ type }) {
  const illustrations = {
    about: (
      <svg viewBox="0 0 200 200" style={{ width: '180px', height: '180px', opacity: 0.7 }}>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c5cfc" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <motion.circle cx="100" cy="80" r="35" fill="url(#grad1)" opacity="0.8"
          animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.circle cx="85" cy="72" r="5" fill="#fff"
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="115" cy="72" r="5" fill="#fff"
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
        <motion.path d="M 90 88 Q 100 98 110 88" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round"
          animate={{ d: ["M 90 88 Q 100 98 110 88", "M 90 88 Q 100 95 110 88", "M 90 88 Q 100 98 110 88"] }}
          transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.rect x="60" y="120" width="80" height="55" rx="10" fill="none" stroke="url(#grad1)" strokeWidth="2"
          animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.rect x="70" y="140" width="15" height="10" rx="3" fill="#7c5cfc" opacity="0.5" />
        <motion.rect x="95" y="140" width="25" height="4" rx="2" fill="#a855f7" opacity="0.4" />
        <motion.rect x="95" y="148" width="20" height="4" rx="2" fill="#a855f7" opacity="0.3" />
        <motion.path d="M 160 40 L 165 30 L 170 40 L 180 45 L 170 50 L 165 60 L 160 50 L 150 45 Z" fill="#f75590" opacity="0.6"
          animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.path d="M 30 150 L 35 142 L 40 150 L 48 154 L 40 158 L 35 166 L 30 158 L 22 154 Z" fill="#4f8ef7" opacity="0.5"
          animate={{ rotate: [0, -12, 10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4.5, repeat: Infinity, delay: 1 }} />
      </svg>
    ),
    experience: (
      <svg viewBox="0 0 200 200" style={{ width: '180px', height: '180px', opacity: 0.7 }}>
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f75590" />
            <stop offset="100%" stopColor="#f59939" />
          </linearGradient>
        </defs>
        <motion.rect x="60" y="30" width="80" height="90" rx="8" fill="none" stroke="url(#grad2)" strokeWidth="2.5"
          animate={{ y: [0, -4, 0], rotate: [0, 1, -1, 0] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.line x1="75" y1="50" x2="125" y2="50" stroke="#f75590" strokeWidth="2" opacity="0.6"
          animate={{ scaleX: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.rect x="75" y="60" width="50" height="6" rx="3" fill="#f75590" opacity="0.3" />
        <motion.rect x="75" y="72" width="40" height="6" rx="3" fill="#f75590" opacity="0.25" />
        <motion.rect x="75" y="84" width="45" height="6" rx="3" fill="#f75590" opacity="0.2" />
        <motion.circle cx="60" cy="150" r="12" fill="none" stroke="#f59939" strokeWidth="2"
          animate={{ y: [0, 6, 0], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="100" cy="145" r="12" fill="none" stroke="#f59939" strokeWidth="2"
          animate={{ y: [0, 6, 0], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
        <motion.circle cx="140" cy="150" r="12" fill="none" stroke="#f59939" strokeWidth="2"
          animate={{ y: [0, 6, 0], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
        <motion.path d="M 25 60 L 30 45 L 35 60 Z" fill="none" stroke="#f75590" strokeWidth="1.5"
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
      </svg>
    ),
    education: (
      <svg viewBox="0 0 200 200" style={{ width: '180px', height: '180px', opacity: 0.7 }}>
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f8ef7" />
            <stop offset="100%" stopColor="#7c5cfc" />
          </linearGradient>
        </defs>
        <motion.path d="M 100 30 L 160 85 L 100 85 Z" fill="url(#grad3)" opacity="0.5"
          animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.path d="M 100 30 L 40 85 L 100 85 Z" fill="url(#grad3)" opacity="0.4"
          animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
        <motion.path d="M 40 85 L 100 140 L 160 85" fill="none" stroke="url(#grad3)" strokeWidth="2.5"
          animate={{ scaleY: [1, 1.03, 1] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.rect x="85" y="100" width="30" height="25" rx="4" fill="none" stroke="#4f8ef7" strokeWidth="1.5" opacity="0.6"
          animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.text x="100" y="117" textAnchor="middle" fill="#4f8ef7" fontSize="14" fontWeight="bold" opacity="0.7">CG</motion.text>
        <motion.path d="M 60 160 Q 80 150 100 160 Q 120 170 140 160" fill="none" stroke="#7c5cfc" strokeWidth="2" opacity="0.4"
          animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
        <motion.circle cx="50" cy="50" r="4" fill="#c2a4ff" opacity="0.6"
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.circle cx="155" cy="55" r="3" fill="#f75590" opacity="0.5"
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
      </svg>
    ),
    certifications: (
      <svg viewBox="0 0 200 200" style={{ width: '180px', height: '180px', opacity: 0.7 }}>
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59939" />
            <stop offset="100%" stopColor="#c2a4ff" />
          </linearGradient>
        </defs>
        <motion.circle cx="100" cy="80" r="40" fill="none" stroke="url(#grad4)" strokeWidth="3"
          animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 80px' }} />
        <motion.circle cx="100" cy="80" r="30" fill="none" stroke="url(#grad4)" strokeWidth="1.5" opacity="0.5"
          animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 80px' }} />
        <motion.path d="M 90 72 L 95 80 L 108 68" fill="none" stroke="#f59939" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.rect x="65" y="135" width="70" height="10" rx="5" fill="url(#grad4)" opacity="0.3"
          animate={{ scaleX: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.rect x="50" y="120" width="100" height="6" rx="3" fill="url(#grad4)" opacity="0.2"
          animate={{ scaleX: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
        <motion.path d="M 40 40 L 45 30 L 50 40 L 58 45 L 50 50 L 45 58 L 40 50 L 32 45 Z" fill="#f59939" opacity="0.4"
          animate={{ y: [0, -6, 0], rotate: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.path d="M 160 140 L 165 132 L 170 140 L 176 146 L 170 150 L 165 158 L 160 150 L 154 146 Z" fill="#c2a4ff" opacity="0.5"
          animate={{ y: [0, 8, 0], rotate: [0, -15, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} />
      </svg>
    ),
  };

  return (
    <div style={{
      position: 'absolute',
      right: '5%',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 30 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {illustrations[type] || illustrations.about}
      </motion.div>
    </div>
  );
}

export default RightSideDecoration;
