import { motion } from 'framer-motion';

const achievements = [
  {
    icon: '🎓',
    title: 'Graduated B.E. CSE',
    description: 'Completed Bachelor of Engineering in Computer Science & Engineering with 7.23 CGPA',
    year: '2025',
  },
  {
    icon: '💼',
    title: 'AI/ML Internship',
    description: 'Completed AI/ML Engineer Internship at Rooman Technologies Pvt. Ltd.',
    year: '2025',
  },
  {
    icon: '🚀',
    title: '4 AI Projects',
    description: 'Completed 4 AI Projects under SourceHub IT including chatbots and translation tools',
    year: '2024',
  },
  {
    icon: '🌏',
    title: 'METI Japan Internship',
    description: 'Applied for METI Japan Internship Program',
    year: '2025',
  },
  {
    icon: '🗾',
    title: 'Learning Japanese',
    description: 'Currently learning Japanese (JLPT N5)',
    year: 'Ongoing',
  },
];

function AchievementCard({ achievement, index }) {
  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: '0 0 20px rgba(168,85,247,0.15), 0 20px 60px rgba(0,0,0,0.3)' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '12px',
        padding: '24px 20px',
      }}
    >
      <div style={{
        fontSize: '2.5rem',
        lineHeight: 1,
      }}>
        {achievement.icon}
      </div>

      <div>
        <span style={{
          fontSize: '0.7rem',
          color: 'var(--accent)',
          fontFamily: "'Fira Code', monospace",
          fontWeight: 500,
          marginBottom: '6px',
          display: 'block',
        }}>{achievement.year}</span>
        <h3 style={{
          fontSize: '0.95rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '6px',
        }}>{achievement.title}</h3>
        <p style={{
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
        }}>{achievement.description}</p>
      </div>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <section className="section" id="achievements" style={{
      textAlign: 'center',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '48px' }}
      >
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle" style={{ marginBottom: 0 }}>Milestones & recognition</p>
      </motion.div>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '16px',
      }}>
        {achievements.map((achievement, i) => (
          <AchievementCard key={achievement.title} achievement={achievement} index={i} />
        ))}
      </div>
    </section>
  );
}
