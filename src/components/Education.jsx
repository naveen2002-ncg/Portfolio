import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science',
    institution: 'Andhra University',
    period: '2020 - 2024',
    description: 'Focused on core computer science fundamentals, algorithms, and software engineering principles.',
  },
];

function EduCard({ item, index }) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ x: -4, boxShadow: '0 0 20px rgba(168,85,247,0.15), 0 20px 60px rgba(0,0,0,0.3)' }}
      style={{
        maxWidth: '600px',
        margin: '0 auto',
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
      }}>{item.period}</span>

      <h3 style={{
        fontSize: '1.15rem',
        fontWeight: 600,
        color: 'var(--text-primary)',
        marginBottom: '4px',
      }}>{item.degree}</h3>

      <p style={{
        fontSize: '0.9rem',
        color: 'var(--accent)',
        fontWeight: 500,
        marginBottom: '8px',
      }}>{item.field} · {item.institution}</p>

      <p style={{
        fontSize: '0.88rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.65,
      }}>{item.description}</p>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section className="section" id="education" style={{
      textAlign: 'center',
      background: 'linear-gradient(180deg, #05020a 0%, #0b080c 100%)',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '48px' }}
      >
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle" style={{ marginBottom: 0 }}>Academic background</p>
      </motion.div>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
        {education.map((item, i) => (
          <EduCard key={item.degree} item={item} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          marginTop: '40px',
          maxWidth: '500px',
          margin: '40px auto 0',
        }}
        className="glass-card"
      >
        <h3 style={{
          fontSize: '0.95rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '16px',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}>Key Coursework</h3>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
        }}>
          {['Data Structures', 'Algorithms', 'DBMS', 'OS', 'Networks', 'Machine Learning', 'Python', 'OOP'].map(course => (
            <span key={course} className="tag">{course}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
