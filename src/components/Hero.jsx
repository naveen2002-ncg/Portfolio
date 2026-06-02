import { motion } from 'framer-motion';

function SocialIcon({ href, label, icon }) {
  const svg = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  };

  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="social-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      dangerouslySetInnerHTML={{ __html: svg[icon] || '' }}
    />
  );
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '120px 0 80px',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(194, 164, 255, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto',
        padding: '0 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        gap: '50px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }} className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-badge" style={{ marginBottom: '24px' }}>
            <span className="status-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-name tracking-tight" style={{ marginBottom: '16px' }}>
            Hi, I'm <span className="gradient-text">Naveen</span>
          </h1>

          <p className="hero-role" style={{ marginBottom: '20px' }}>
            AI/ML Engineer & Full Stack Developer
          </p>

          <p className="text-muted" style={{
            fontSize: '1rem',
            maxWidth: '480px',
            marginBottom: '32px',
            lineHeight: 1.7,
          }}>
            Building hands-on AI/ML projects with Python. Learning full-stack web development with JavaScript, React, and SQL. Open to collaborations on AI, ML, and automation projects.
          </p>

          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '36px',
          }}>
            <a href="#projects" className="btn btn-primary">View Projects →</a>
            <a href="https://drive.google.com/uc?export=download&id=1033TnDWnze8emo7-mnzufKj7uT58OUy8" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Resume</a>
            <a href="#contact" className="btn btn-outline">Contact</a>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <SocialIcon href="https://github.com/naveen2002-ncg" label="GitHub" icon="github" />
            <SocialIcon href="https://www.linkedin.com/in/naveen-c-gundapalli-bb56b824b" label="LinkedIn" icon="linkedin" />
            <SocialIcon href="mailto:naveen2002.ncg@gmail.com" label="Email" icon="mail" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{
            position: 'relative',
            width: '280px',
            height: '280px',
          }}>
            <div style={{
              position: 'absolute',
              inset: '-8px',
              borderRadius: '50%',
              border: '1px solid rgba(194, 164, 255, 0.2)',
            }} />
            <img
              src="/profile.jpg"
              alt="Naveen C Gundapalli"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 25%',
                borderRadius: '50%',
                border: '3px solid var(--bg-primary)',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#4ade80',
              border: '3px solid var(--bg-primary)',
              boxShadow: '0 0 12px rgba(74, 222, 128, 0.4)',
            }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

