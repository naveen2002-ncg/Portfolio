import { motion } from 'framer-motion';
import RightSideDecoration from './RightSideDecoration';

const education = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Engineering',
    institution: 'Jain College of Engineering and Technology',
    period: '2021 - 2025',
    cgpa: '7.23',
    coursework: ['Data Structures', 'Database Management Systems', 'Machine Learning', 'Artificial Intelligence', 'Software Engineering'],
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

      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 12px',
        borderRadius: '100px',
        background: 'var(--accent-soft)',
        border: '1px solid rgba(168, 85, 247, 0.15)',
        marginBottom: '12px',
      }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600 }}>CGPA: {item.cgpa}</span>
      </div>

      <p style={{
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.65,
        marginBottom: '14px',
      }}>Relevant Areas:</p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        justifyContent: 'center',
      }}>
        {item.coursework.map(course => (
          <span key={course} className="tag">{course}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section className="section" id="education" style={{
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <RightSideDecoration type="education" />
      <div style={{ position: 'relative', zIndex: 1 }}>
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
      </div>
    </section>
  );
}
