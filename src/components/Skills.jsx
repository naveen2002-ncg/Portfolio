import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'AI / ML',
    skills: ['Machine Learning', 'NLP', 'OpenCV', 'Generative AI', 'LLMs', 'Scikit-learn'],
  },
  {
    title: 'Databases',
    skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Web Development',
    skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'AWS', 'Google Cloud'],
  },
];

function SkillCard({ category, index }) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -3, boxShadow: '0 0 20px rgba(168,85,247,0.15), 0 20px 60px rgba(0,0,0,0.3)' }}
      style={{ padding: '22px' }}
    >
      <h3 style={{
        fontSize: '0.85rem',
        fontWeight: 600,
        marginBottom: '14px',
        color: 'var(--text-primary)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
      }}>
        {category.title}
      </h3>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        justifyContent: 'center',
      }}>
        {category.skills.map(skill => (
          <motion.span
            key={skill}
            className="tag"
            whileHover={{ scale: 1.05, y: -2 }}
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 500,
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              color: 'var(--text-secondary)',
              cursor: 'default',
              transition: 'all 0.3s',
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills" style={{
      position: 'relative',
      overflow: 'hidden',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '48px' }}
      >
        <h2 className="section-title">Skills & Tech Stack</h2>
        <p className="section-subtitle" style={{ marginBottom: 0 }}>Technologies and tools I work with</p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        marginBottom: '56px',
      }}>
        {skillCategories.map((category, i) => (
          <SkillCard key={category.title} category={category} index={i} />
        ))}
      </div>
    </section>
  );
}
