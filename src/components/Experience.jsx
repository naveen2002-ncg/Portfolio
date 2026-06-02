import { motion } from 'framer-motion';
import RightSideDecoration from './RightSideDecoration';

const experiences = [
  {
    role: 'Python Full Stack Trainee',
    company: 'Fortune Cloud Technologies',
    period: 'March 2026 - Present',
    description: 'Learning frontend and backend development. Working with Python, JavaScript, SQL, HTML, and CSS. Building full-stack web applications.',
    tags: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Full Stack'],
  },
  {
    role: 'AI/ML Engineer Intern',
    company: 'Rooman Technologies Pvt. Ltd.',
    period: 'Dec 2024 - Feb 2025',
    description: 'Worked with Python and Machine Learning. Developed AI-based applications. Learned OpenCV and computer vision fundamentals.',
    tags: ['Python', 'Machine Learning', 'OpenCV', 'Computer Vision'],
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub / SourceHub IT',
    period: '2023 - Present',
    description: 'Completed 4 AI Projects under SourceHub IT. Active contributor with 15+ repositories. Focused on building working AI/ML projects rather than chasing certificates.',
    tags: ['Python', 'AI/ML', 'Open Source', 'NLP'],
  },
];

function LeftSideDecoration() {
  return (
    <div style={{
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '280px',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      <motion.div
        style={{
          position: 'absolute',
          left: '-40px',
          top: '15%',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 92, 252, 0.2) 0%, transparent 70%)',
          filter: 'blur(45px)',
        }}
        animate={{ y: [0, 30, -20, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          left: '-30px',
          top: '45%',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ y: [0, -25, 18, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        style={{
          position: 'absolute',
          left: '-35px',
          bottom: '20%',
          width: '170px',
          height: '170px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(247, 85, 144, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ y: [0, 22, -15, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <svg style={{ position: 'absolute', left: '15px', top: '18%', width: '70px', height: '70px', opacity: 0.25 }} viewBox="0 0 100 100">
        <motion.circle cx="50" cy="50" r="38" fill="none" stroke="#7c5cfc" strokeWidth="1.5" strokeDasharray="12 6"
          animate={{ rotate: 360, opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '50px 50px' }}
        />
      </svg>

      <svg style={{ position: 'absolute', left: '35px', top: '55%', width: '55px', height: '55px', opacity: 0.2 }} viewBox="0 0 100 100">
        <motion.rect x="18" y="18" width="64" height="64" fill="none" stroke="#a855f7" strokeWidth="1.5" rx="12"
          animate={{ rotate: -360, opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '50px 50px' }}
        />
      </svg>

      <svg style={{ position: 'absolute', left: '10px', bottom: '22%', width: '65px', height: '65px', opacity: 0.25 }} viewBox="0 0 100 100">
        <motion.polygon points="50,12 88,88 12,88" fill="none" stroke="#f75590" strokeWidth="1.5"
          animate={{ rotate: 360, opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '50px 60px' }}
        />
      </svg>

      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: `${8 + Math.random() * 50}px`,
            top: `${Math.random() * 100}%`,
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            borderRadius: '50%',
            background: ['#7c5cfc', '#a855f7', '#f75590', '#4f8ef7', '#c2a4ff'][i % 5],
            boxShadow: `0 0 6px ${['#7c5cfc', '#a855f7', '#f75590', '#4f8ef7', '#c2a4ff'][i % 5]}`,
          }}
          animate={{ y: [0, -18, 12, -8, 18, 0], opacity: [0, 0.6, 0.3, 0.7, 0.2, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function TimelineCard({ exp, index }) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ x: 4, boxShadow: '0 0 20px rgba(168,85,247,0.15), 0 20px 60px rgba(0,0,0,0.3)' }}
      style={{
        position: 'relative',
        paddingLeft: '32px',
        borderLeft: '2px solid rgba(168, 85, 247, 0.2)',
      }}
    >
      <div style={{
        position: 'absolute',
        left: '-7px',
        top: '28px',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: 'var(--accent)',
        boxShadow: '0 0 12px rgba(168, 85, 247, 0.4)',
      }} />

      <span style={{
        fontSize: '0.75rem',
        color: 'var(--accent)',
        fontFamily: "'Fira Code', monospace",
        fontWeight: 500,
        marginBottom: '6px',
        display: 'block',
      }}>{exp.period}</span>

      <h3 style={{
        fontSize: '1.1rem',
        fontWeight: 600,
        color: 'var(--text-primary)',
        marginBottom: '4px',
      }}>{exp.role}</h3>

      <p style={{
        fontSize: '0.85rem',
        color: 'var(--accent)',
        fontWeight: 500,
        marginBottom: '10px',
      }}>{exp.company}</p>

      <p style={{
        fontSize: '0.88rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.65,
        marginBottom: '14px',
      }}>{exp.description}</p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
      }}>
        {exp.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const orbs = [
    { size: 300, x: '10%', y: '20%', color: '#7c5cfc' },
    { size: 250, x: '70%', y: '60%', color: '#f75590' },
    { size: 280, x: '50%', y: '80%', color: '#4f8ef7' },
  ];

  return (
    <section className="section" id="experience" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: orb.size,
              height: orb.size,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${orb.color}25 0%, transparent 70%)`,
              left: orb.x,
              top: orb.y,
              filter: 'blur(70px)',
            }}
            animate={{
              x: [0, 25, -18, 12, -22, 0],
              y: [0, -18, 25, -12, 20, 0],
              scale: [1, 1.15, 0.9, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 9 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <LeftSideDecoration />
      <RightSideDecoration type="experience" />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '48px' }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>My journey so far</p>
        </motion.div>

        <div style={{
          maxWidth: '680px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}>
          {experiences.map((exp, i) => (
            <TimelineCard key={exp.role} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
