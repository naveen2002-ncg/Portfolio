import { motion, useScroll, useTransform } from 'framer-motion';

const techList = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#68A063' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#E34F26' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#1572B6' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '#fff' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-line-wordmark.svg', color: '#FF9900' },
  { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', color: '#4285F4' },
];

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', color: '#3776AB' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'HTML', color: '#E34F26' },
      { name: 'CSS', color: '#1572B6' },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Machine Learning', color: '#a855f7' },
      { name: 'NLP', color: '#c2a4ff' },
      { name: 'OpenCV', color: '#f75590' },
      { name: 'Generative AI', color: '#4f8ef7' },
      { name: 'LLMs', color: '#f59939' },
      { name: 'Scikit-learn', color: '#f89939' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQL', color: '#3178C6' },
      { name: 'PostgreSQL', color: '#4DABCF' },
      { name: 'MongoDB', color: '#68A063' },
      { name: 'Firebase', color: '#FFCA28' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React.js', color: '#61DAFB' },
      { name: 'Node.js', color: '#68A063' },
      { name: 'Express.js', color: '#8a8490' },
      { name: 'REST APIs', color: '#4ade80' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#8B949E' },
      { name: 'Docker', color: '#2496ED' },
      { name: 'Linux', color: '#FCC624' },
      { name: 'AWS', color: '#FF9900' },
      { name: 'Google Cloud', color: '#4285F4' },
    ],
  },
];

function BackgroundOrbs() {
  const orbs = [
    { size: 400, x: '5%', y: '10%', color: '#7c5cfc', delay: 0 },
    { size: 350, x: '60%', y: '50%', color: '#a855f7', delay: 1 },
    { size: 300, x: '30%', y: '70%', color: '#f75590', delay: 2 },
    { size: 250, x: '75%', y: '20%', color: '#4f8ef7', delay: 0.5 },
    { size: 200, x: '45%', y: '85%', color: '#c2a4ff', delay: 1.5 },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color}30 0%, transparent 70%)`,
            left: orb.x,
            top: orb.y,
            filter: 'blur(80px)',
          }}
          animate={{
            x: [0, 40, -30, 20, -40, 0],
            y: [0, -30, 40, -20, 30, 0],
            scale: [1, 1.2, 0.85, 1.15, 0.9, 1],
            opacity: [0.4, 0.7, 0.5, 0.8, 0.4, 0.6],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

function SkillChip({ skill, color, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{
        scale: 1.1,
        y: -3,
        boxShadow: `0 0 20px ${color}40, 0 8px 24px rgba(0,0,0,0.3)`,
      }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        borderRadius: '100px',
        fontSize: '0.72rem',
        fontWeight: 600,
        background: `${color}15`,
        border: `1px solid ${color}30`,
        color: color,
        cursor: 'default',
        transition: 'all 0.3s',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 8px ${color}60`,
      }} />
      {skill.name}
    </motion.span>
  );
}

function CategoryCard({ category, index }) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        y: -4,
        boxShadow: '0 0 25px rgba(168,85,247,0.2), 0 20px 60px rgba(0,0,0,0.3)',
        borderColor: 'rgba(168, 85, 247, 0.25)',
      }}
      style={{ padding: '22px', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: `linear-gradient(90deg, ${category.skills[0]?.color || '#7c5cfc'}, ${category.skills[1]?.color || '#a855f7'}, ${category.skills[2]?.color || '#c2a4ff'})`,
        opacity: 0.5,
      }} />
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
        gap: '7px',
        justifyContent: 'center',
      }}>
        {category.skills.map((skill, i) => (
          <SkillChip key={skill.name} skill={skill} color={skill.color} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

function AnimatedTechLogo({ tech, index }) {
  const textColor = ['#F7DF1E', '#61DAFB', '#FFCA28', '#FCC624', '#68A063', '#8B949E'].includes(tech.color) ? '#0b080c' : '#fff';
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05, type: 'spring', stiffness: 200 }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
        y: -8,
        boxShadow: `0 0 30px ${tech.color}50, 0 16px 40px rgba(0,0,0,0.4)`,
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '14px 10px',
        width: '100px',
        height: '100px',
        borderRadius: '16px',
        background: `linear-gradient(135deg, ${tech.color}10, ${tech.color}05)`,
        border: `2px solid ${tech.color}25`,
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at 30% 30%, ${tech.color}15, transparent 60%)`,
        opacity: 0,
        transition: 'opacity 0.3s',
      }} className="logo-glow" />

      <motion.img
        src={tech.icon}
        alt={tech.name}
        style={{
          width: '32px',
          height: '32px',
          objectFit: 'contain',
          position: 'relative',
          zIndex: 1,
          filter: `drop-shadow(0 0 8px ${tech.color}40)`,
          transition: 'filter 0.3s',
        }}
        whileHover={{ filter: `drop-shadow(0 0 16px ${tech.color}80)` }}
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      <span style={{
        fontSize: '0.68rem',
        fontWeight: 600,
        color: textColor,
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        lineHeight: 1.2,
        textShadow: `0 0 10px ${tech.color}30`,
      }}>{tech.name}</span>
    </motion.div>
  );
}

function FloatingShapes() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: 4 + (i % 3) * 3,
            height: 4 + (i % 3) * 3,
            borderRadius: '50%',
            background: ['#7c5cfc', '#a855f7', '#f75590', '#4f8ef7', '#c2a4ff'][i % 5],
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 20}%`,
            boxShadow: `0 0 10px ${['#7c5cfc', '#a855f7', '#f75590', '#4f8ef7', '#c2a4ff'][i % 5]}50`,
          }}
          animate={{
            y: [0, -30, 20, -15, 30, 0],
            opacity: [0, 0.7, 0.3, 0.8, 0.2, 0],
          }}
          transition={{
            duration: 4 + i * 0.8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills" style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#05020a',
      borderTop: '1px solid rgba(255,255,255,0.04)',
    }}>
      <BackgroundOrbs />
      <FloatingShapes />

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
            background: 'linear-gradient(135deg, #7c5cfc, #a855f7, #c2a4ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Skills & Tech Stack</h2>
          <p className="section-subtitle" style={{ marginBottom: 0, position: 'relative', zIndex: 2 }}>Technologies and tools I work with</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
          marginBottom: '48px',
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
          style={{ textAlign: 'center', marginBottom: '28px', position: 'relative', zIndex: 2 }}
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
          gap: '12px',
          justifyContent: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
          {techList.map((tech, i) => (
            <AnimatedTechLogo key={tech.name} tech={tech} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
