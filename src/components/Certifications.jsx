import { motion } from 'framer-motion';

const certifications = [
  { title: 'Google Cloud Generative AI', issuer: 'Google Cloud', date: '2025', id: 'GC-2025-GA' },
  { title: 'Large Language Models', issuer: 'Google Cloud', date: '2025', id: 'GC-2025-LLM' },
  { title: 'Power BI', issuer: 'Microsoft', date: '2024', id: 'MS-2024-PBI' },
  { title: 'R Programming', issuer: 'Coursera', date: '2024', id: 'CR-2024-R' },
  { title: 'AI/ML Fundamentals', issuer: 'IBM Skills', date: '2024', id: 'IBM-2024-AI' },
];

function CertCard({ cert, index }) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4, boxShadow: '0 0 20px rgba(168,85,247,0.15), 0 20px 60px rgba(0,0,0,0.3)' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #7c5cfc, #a855f7, #c2a4ff)',
        opacity: 0.4,
      }} />

      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
      }}>
        <div className="icon-box" style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          fontSize: '0.75rem',
        }}>
          🎓
        </div>
        <div>
          <h3 style={{
            fontSize: '0.92rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '2px',
            lineHeight: 1.3,
          }}>{cert.title}</h3>
          <p style={{
            fontSize: '0.78rem',
            color: 'var(--accent)',
            fontWeight: 500,
          }}>{cert.issuer}</p>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '10px',
        borderTop: '1px solid var(--border)',
      }}>
        <span style={{
          fontSize: '0.7rem',
          color: 'var(--text-secondary)',
          fontFamily: "'Fira Code', monospace",
        }}>{cert.id}</span>
        <span style={{
          fontSize: '0.7rem',
          color: 'var(--text-secondary)',
          fontWeight: 500,
        }}>{cert.date}</span>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section className="section" id="certifications" style={{
      textAlign: 'center',
      background: '#05020a',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '48px' }}
      >
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle" style={{ marginBottom: 0 }}>Professional credentials & courses</p>
      </motion.div>

      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px',
      }}>
        {certifications.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>
    </section>
  );
}
