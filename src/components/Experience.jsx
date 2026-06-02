import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'AI/ML Engineer Intern',
    company: 'Rooman Technologies Pvt. Ltd.',
    period: 'Dec 2024 - Feb 2025',
    description: 'Worked with Python and Machine Learning. Developed AI-based applications. Learned OpenCV and computer vision fundamentals.',
    tags: ['Python', 'Machine Learning', 'OpenCV', 'Computer Vision'],
  },
  {
    role: 'Python Full Stack Trainee',
    company: 'Fortune Cloud Technologies',
    period: 'March 2026 - Present',
    description: 'Learning frontend and backend development. Working with Python, JavaScript, SQL, HTML, and CSS. Building full-stack web applications.',
    tags: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Full Stack'],
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub / SourceHub IT',
    period: '2023 - Present',
    description: 'Completed 4 AI Projects under SourceHub IT. Active contributor with 15+ repositories. Focused on building working AI/ML projects rather than chasing certificates.',
    tags: ['Python', 'AI/ML', 'Open Source', 'NLP'],
  },
];

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
