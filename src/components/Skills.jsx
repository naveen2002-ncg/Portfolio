import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', pct: 90 },
      { name: 'TypeScript', pct: 70 },
      { name: 'JavaScript', pct: 75 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', pct: 72 },
      { name: 'HTML5', pct: 85 },
      { name: 'CSS3', pct: 88 },
    ],
  },
  {
    title: 'ML & Data',
    skills: [
      { name: 'Machine Learning', pct: 80 },
      { name: 'Pandas', pct: 82 },
      { name: 'NumPy', pct: 78 },
      { name: 'Scikit-learn', pct: 75 },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', pct: 88 },
      { name: 'GitHub', pct: 85 },
      { name: 'VS Code', pct: 92 },
      { name: 'Linux', pct: 72 },
    ],
  },
  {
    title: 'Platforms',
    skills: [
      { name: 'Vercel', pct: 68 },
      { name: 'Railway', pct: 65 },
      { name: 'Jupyter', pct: 80 },
    ],
  },
  {
    title: 'Currently Learning',
    skills: [
      { name: 'Deep Learning', pct: 45 },
      { name: 'Neural Networks', pct: 40 },
      { name: 'ML Deployment', pct: 50 },
    ],
  },
];

function SkillRow({ skill, color, bg }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '8px 0',
    }}>
      <div style={{
        width: '14px',
        height: '14px',
        borderRadius: '4px',
        background: color,
        flexShrink: 0,
        boxShadow: `0 0 8px ${color}40`,
      }} />
      <span style={{
        fontSize: '0.82rem',
        fontWeight: 500,
        color: 'var(--text-primary)',
        minWidth: '110px',
      }}>{skill.name}</span>
      <div style={{
        flex: 1,
        height: '6px',
        background: 'rgba(255,255,255,0.04)',
        borderRadius: '3px',
        overflow: 'hidden',
      }}>
        <motion.div
          style={{
            height: '100%',
            borderRadius: '3px',
            background: `linear-gradient(90deg, ${color}, ${color}bb)`,
            boxShadow: `0 0 8px ${color}30`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
      <span style={{
        fontSize: '0.72rem',
        color: 'var(--text-secondary)',
        fontFamily: "'Fira Code', monospace",
        minWidth: '28px',
        textAlign: 'right',
      }}>{skill.pct}%</span>
    </div>
  );
}

function CategoryCard({ category, colorMap, index }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}
      style={{
        padding: '22px 20px',
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
        background: 'linear-gradient(90deg, var(--gradient-1), var(--gradient-2))',
        opacity: 0.5,
      }} />
      <h3 style={{
        fontSize: '0.9rem',
        fontWeight: 600,
        marginBottom: '14px',
        color: 'var(--text-primary)',
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
      }}>
        {category.title}
      </h3>
      <div>
        {category.skills.map(skill => (
          <SkillRow
            key={skill.name}
            skill={skill}
            color={colorMap[skill.name] || '#7c5cfc'}
            bg={colorMap[skill.name] ? `${colorMap[skill.name]}18` : 'rgba(124,92,252,0.08)'}
          />
        ))}
      </div>
    </motion.div>
  );
}

function TechBadge({ tech, index }) {
  const color = tech.color;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{
        scale: 1.12,
        y: -4,
        boxShadow: `0 12px 28px ${color}30`,
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '16px 12px',
        borderRadius: '14px',
        background: 'rgba(22, 22, 31, 0.8)',
        border: '1px solid rgba(255,255,255,0.07)',
        cursor: 'default',
        minWidth: '90px',
        flex: '1 1 90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        width: '44px',
        height: '44px',
        borderRadius: '10px',
        background: `${color}18`,
        border: `1px solid ${color}35`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.7rem',
        fontWeight: 700,
        color: color,
        fontFamily: "'Fira Code', monospace",
        boxShadow: `0 4px 16px ${color}15`,
        letterSpacing: '-0.02em',
        transition: 'all 0.3s',
      }}>
        {tech.abbr}
      </div>
      <span style={{
        fontSize: '0.72rem',
        fontWeight: 500,
        color: 'var(--text-secondary)',
        textAlign: 'center',
        lineHeight: 1.3,
      }}>{tech.name}</span>
    </motion.div>
  );
}

const colorMap = {
  Python: '#3776AB',
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  React: '#61DAFB',
  HTML5: '#E34F26',
  CSS3: '#1572B6',
  Git: '#F05032',
  GitHub: '#8B949E',
  Pandas: '#150458',
  NumPy: '#4DABCF',
  Scikit: '#F89939',
  'VS Code': '#007ACC',
  Linux: '#FCC624',
  Vercel: '#fff',
  Railway: '#fff',
  Jupyter: '#F37626',
  DeepLearning: '#FF6F00',
  NeuralNets: '#B71C1C',
  MLflow: '#0194F3',
};

const techStack = [
  { name: 'Python', abbr: 'Py', color: '#3776AB' },
  { name: 'TypeScript', abbr: 'TS', color: '#3178C6' },
  { name: 'JavaScript', abbr: 'JS', color: '#F7DF1E' },
  { name: 'React', abbr: 'Re', color: '#61DAFB' },
  { name: 'HTML5', abbr: 'H5', color: '#E34F26' },
  { name: 'CSS3', abbr: 'C3', color: '#1572B6' },
  { name: 'Git', abbr: 'Gi', color: '#F05032' },
  { name: 'GitHub', abbr: 'GH', color: '#8B949E' },
  { name: 'NumPy', abbr: 'Np', color: '#4DABCF' },
  { name: 'Pandas', abbr: 'Pd', color: '#150458' },
  { name: 'Scikit-learn', abbr: 'Sk', color: '#F89939' },
  { name: 'VS Code', abbr: 'VS', color: '#007ACC' },
  { name: 'Linux', abbr: 'Lx', color: '#FCC624' },
  { name: 'Vercel', abbr: 'Vc', color: '#ddd' },
  { name: 'Railway', abbr: 'Rw', color: '#ddd' },
  { name: 'Jupyter', abbr: 'Ju', color: '#F37626' },
  { name: 'Node.js', abbr: 'No', color: '#68A063' },
  { name: 'MLflow', abbr: 'Ml', color: '#0194F3' },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '48px' }}
      >
        <h2 className="section-title">Skills & Tech Stack</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        marginBottom: '56px',
      }}>
        {skillCategories.map((category, i) => (
          <CategoryCard
            key={category.title}
            category={category}
            colorMap={colorMap}
            index={i}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '32px' }}
      >
        <h3 style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '6px',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}>All Technologies</h3>
        <p style={{
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
        }}>Languages, frameworks, and platforms I use</p>
      </motion.div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {techStack.map((tech, i) => (
          <TechBadge key={tech.name} tech={tech} index={i} />
        ))}
      </div>
    </section>
  );
}
