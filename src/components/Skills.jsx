import { motion } from 'framer-motion';

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
  'Scikit-learn': '#F89939',
  'VS Code': '#007ACC',
  Linux: '#FCC624',
  Vercel: '#ddd',
  Railway: '#ddd',
  Jupyter: '#F37626',
  'Deep Learning': '#FF6F00',
  'Neural Networks': '#B71C1C',
  MLflow: '#0194F3',
};

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', pct: 90, icon: 'Py' },
      { name: 'TypeScript', pct: 70, icon: 'TS' },
      { name: 'JavaScript', pct: 75, icon: 'JS' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', pct: 72, icon: 'Re' },
      { name: 'HTML5', pct: 85, icon: 'H5' },
      { name: 'CSS3', pct: 88, icon: 'C3' },
    ],
  },
  {
    title: 'ML & Data',
    skills: [
      { name: 'Machine Learning', pct: 80, icon: 'ML' },
      { name: 'Pandas', pct: 82, icon: 'Pd' },
      { name: 'NumPy', pct: 78, icon: 'Np' },
      { name: 'Scikit-learn', pct: 75, icon: 'Sk' },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', pct: 88, icon: 'Gi' },
      { name: 'GitHub', pct: 85, icon: 'GH' },
      { name: 'VS Code', pct: 92, icon: 'VS' },
      { name: 'Linux', pct: 72, icon: 'Lx' },
    ],
  },
  {
    title: 'Platforms',
    skills: [
      { name: 'Vercel', pct: 68, icon: 'Vc' },
      { name: 'Railway', pct: 65, icon: 'Rw' },
      { name: 'Jupyter', pct: 80, icon: 'Ju' },
      { name: 'MLflow', pct: 55, icon: 'Ml' },
    ],
  },
  {
    title: 'Currently Learning',
    skills: [
      { name: 'Deep Learning', pct: 45, icon: 'DL' },
      { name: 'Neural Networks', pct: 40, icon: 'NN' },
      { name: 'ML Deployment', pct: 50, icon: 'MD' },
    ],
  },
];

function SkillRow({ skill, color }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '7px 0',
    }}>
      <div style={{
        width: '12px',
        height: '12px',
        borderRadius: '4px',
        background: color,
        flexShrink: 0,
      }} />
      <span style={{
        fontSize: '0.82rem',
        fontWeight: 500,
        color: 'var(--text-primary)',
        minWidth: '120px',
      }}>{skill.name}</span>
      <div className="skill-bar-track" style={{ flex: 1 }}>
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
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

function CategoryCard({ category, index }) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -3 }}
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
      <div>
        {category.skills.map(skill => (
          <SkillRow
            key={skill.name}
            skill={skill}
            color={colorMap[skill.name] || '#a855f7'}
          />
        ))}
      </div>
    </motion.div>
  );
}

function TechChip({ tech, index }) {
  return (
    <motion.div
      className="tech-chip"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{
        scale: 1.06,
        y: -4,
      }}
    >
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '8px',
        background: `${tech.color}18`,
        border: `1px solid ${tech.color}30`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.68rem',
        fontWeight: 700,
        color: tech.color,
        fontFamily: "'Fira Code', monospace",
        letterSpacing: '-0.02em',
        transition: 'all 0.3s',
      }}>
        {tech.abbr}
      </div>
      <span style={{
        fontSize: '0.75rem',
        fontWeight: 500,
        color: 'var(--text-secondary)',
        textAlign: 'center',
        transition: 'color 0.3s',
      }}>{tech.name}</span>
    </motion.div>
  );
}

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
    <section className="section" id="skills" style={{
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="bg-glow" style={{
        position: 'absolute',
        top: '10%',
        left: '20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
        zIndex: 0,
      }} />
      <div className="bg-glow" style={{
        position: 'absolute',
        bottom: '10%',
        right: '15%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(124, 92, 252, 0.06) 0%, transparent 70%)',
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <h2 className="section-title" style={{
            position: 'relative',
            zIndex: 2,
          }}>Skills & Tech Stack</h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>Technologies and tools I work with</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '16px',
          marginBottom: '56px',
          position: 'relative',
          zIndex: 1,
        }}>
          {skillCategories.map((category, i) => (
            <CategoryCard key={category.title} category={category} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '28px' }}
        >
          <h3 style={{
            fontSize: '1rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '6px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>All Technologies</h3>
          <p className="text-muted" style={{ fontSize: '0.82rem' }}>
            Languages, frameworks, libraries, and platforms
          </p>
        </motion.div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
          {techStack.map((tech, i) => (
            <TechChip key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
