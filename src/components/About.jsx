import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section className="section" id="about" style={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '48px' }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about my journey and passion</p>
      </motion.div>

      <motion.div
        className="card"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <motion.div variants={item} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '28px',
          paddingBottom: '24px',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--gradient-1), var(--gradient-2))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.2rem',
            fontWeight: 800,
            color: '#fff',
            flexShrink: 0,
            boxShadow: '0 12px 40px rgba(124, 92, 252, 0.35)',
            border: '3px solid rgba(255,255,255,0.1)',
          }}>
            NCG
          </div>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '6px',
              color: 'var(--text-primary)',
            }}>Naveen C Gundapalli</h3>
            <p style={{
              fontSize: '0.95rem',
              color: 'var(--accent)',
              fontWeight: 500,
              fontFamily: "'Fira Code', monospace",
              background: 'rgba(124, 92, 252, 0.08)',
              display: 'inline-block',
              padding: '4px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(124, 92, 252, 0.15)',
            }}>
              AI/ML Developer
            </p>
          </div>
        </motion.div>

        {[
          'I\'m a passionate AI/ML developer focused on building practical, hands-on projects that solve real-world problems. My journey into technology started with a curiosity about how machines can learn and make decisions — and I\'ve been hooked ever since.',
          'I build hands-on AI/ML projects using Python and enjoy working with datasets to extract meaningful insights. I\'m open to collaborating on beginner to intermediate AI, machine learning, and automation projects.',
          'My approach is simple: focus on building working projects rather than chasing certificates. I believe in learning by doing and turning ideas into functional applications.',
        ].map((text, i) => (
          <motion.p key={i} variants={item} style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            marginBottom: '16px',
            lineHeight: 1.8,
          }}>
            {text}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
