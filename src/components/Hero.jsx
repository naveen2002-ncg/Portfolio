import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      paddingTop: '80px',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(124, 92, 252, 0.2) 0%, rgba(79, 142, 247, 0.1) 40%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: '60%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(247, 85, 144, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      <GridPattern />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '60px',
        position: 'relative',
        zIndex: 2,
        maxWidth: '1000px',
        padding: '0 24px',
        flexWrap: 'wrap',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            flex: '1 1 300px',
            textAlign: 'left',
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '50px',
            background: 'rgba(124, 92, 252, 0.08)',
            border: '1px solid rgba(124, 92, 252, 0.2)',
            marginBottom: '28px',
            fontSize: '0.9rem',
            color: 'var(--accent)',
            fontWeight: 500,
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#4ade80',
              boxShadow: '0 0 10px #4ade80',
              animation: 'pulse 2s infinite',
            }} />
            Available for opportunities
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '16px',
            letterSpacing: '-0.03em',
          }}>
            Hi, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--gradient-1) 0%, var(--gradient-2) 50%, var(--gradient-3) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
            }}>
              Naveen
              <span style={{
                position: 'absolute',
                bottom: '2px',
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--gradient-1), var(--gradient-2))',
                borderRadius: '2px',
                opacity: 0.6,
              }} />
            </span>
          </h1>

          <h2 style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '16px',
            fontFamily: "'Fira Code', monospace",
          }}>
            <span style={{ color: 'var(--accent)' }}>&lt;</span>
            AI/ML Developer
            <span style={{ color: 'var(--accent)' }}>/&gt;</span>
          </h2>

          <p style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
            color: 'var(--text-secondary)',
            maxWidth: '480px',
            margin: '0 0 32px',
            lineHeight: 1.8,
          }}>
            Building AI/ML projects with Python. Hands-on learner focused on creating
            real-world solutions using machine learning, automation, and clean code.
          </p>

          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
          }}>
            <motion.a
              href="#projects"
              className="btn btn-primary"
              style={{ padding: '12px 28px', fontSize: '0.9rem' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects &rarr;
            </motion.a>
            <motion.a
              href="https://drive.google.com/uc?export=download&id=1033TnDWnze8emo7-mnzufKj7uT58OUy8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '12px 28px', fontSize: '0.9rem' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              style={{ padding: '12px 28px', fontSize: '0.9rem' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </div>

          <div style={{
            display: 'flex',
            gap: '12px',
            marginTop: '28px',
          }}>
            {[
              { href: 'https://github.com/naveen2002-ncg', label: 'GitHub', icon: 'github' },
              { href: 'https://www.linkedin.com/in/naveen-c-gundapalli-bb56b824b', label: 'LinkedIn', icon: 'linkedin' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="btn btn-outline"
                style={{
                  padding: '10px 16px',
                  fontSize: '0.82rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                dangerouslySetInnerHTML={{ __html: {
                  github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
                  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
                }[social.icon] || '' }}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            flex: '0 0 320px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{
            position: 'relative',
            width: '300px',
            height: '300px',
          }}>
            <div style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #7c5cfc, #4f8ef7, #f75590, #7c5cfc)',
              opacity: 0.7,
              filter: 'blur(15px)',
              animation: 'spin 4s linear infinite',
            }} />
            <img
              src="/profile.jpg"
              alt="Naveen C Gundapalli"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 25%',
                borderRadius: '50%',
                border: '4px solid var(--bg-primary)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#4ade80',
              border: '4px solid var(--bg-primary)',
              boxShadow: '0 0 12px rgba(74, 222, 128, 0.4)',
            }} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          section[style*="flex-wrap: wrap"] {
            flex-direction: column-reverse !important;
          }
          section[style*="flex-wrap: wrap"] > div:last-child {
            margin-bottom: 32px;
          }
          section[style*="flex-wrap: wrap"] > div:first-child {
            text-align: center !important;
          }
          section[style*="flex-wrap: wrap"] > div:first-child p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

function GridPattern() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      opacity: 0.03,
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      pointerEvents: 'none',
    }} />
  );
}
