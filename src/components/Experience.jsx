import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'AI/ML Developer Intern',
    company: 'SourceHub IT',
    period: '2024 - Present',
    description: 'Building AI-powered tools including FAQ chatbots and translation systems. Working with Python, NLP, and LLM integration.',
    tags: ['Python', 'NLP', 'LLM', 'Chatbot'],
  },
  {
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2023 - Present',
    description: 'Developing custom AI/ML solutions for clients. Focused on automation, data analysis, and deploying scalable ML applications.',
    tags: ['Python', 'ML', 'Automation', 'API'],
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub',
    period: '2023 - Present',
    description: 'Active contributor to AI/ML projects. Building hands-on projects focused on real-world problem solving with machine learning.',
    tags: ['Open Source', 'Python', 'Projects'],
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
  return (
    <section className="section" id="experience" style={{ textAlign: 'center' }}>
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
    </section>
  );
}
