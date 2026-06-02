import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="section" id="about" style={{ textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '48px' }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle" style={{ marginBottom: 0 }}>Get to know more about my journey and passion</p>
      </motion.div>

      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px',
          paddingBottom: '24px',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--gradient-1), var(--gradient-3))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#fff',
          }}>
            NCG
          </div>
          <div>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '4px',
            }}>Naveen C Gundapalli</h3>
            <p style={{
              fontSize: '0.85rem',
              color: 'var(--accent)',
              fontWeight: 500,
            }}>
              AI/ML Developer
            </p>
          </div>
        </div>

        {[
          'I\'m a passionate AI/ML developer focused on building practical, hands-on projects that solve real-world problems. My journey into technology started with a curiosity about how machines can learn and make decisions — and I\'ve been hooked ever since.',
          'I build hands-on AI/ML projects using Python and enjoy working with datasets to extract meaningful insights. I\'m open to collaborating on beginner to intermediate AI, machine learning, and automation projects.',
          'My approach is simple: focus on building working projects rather than chasing certificates. I believe in learning by doing and turning ideas into functional applications.',
        ].map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              marginBottom: '14px',
              lineHeight: 1.7,
            }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
}
