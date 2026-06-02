import { motion, useScroll, useTransform } from 'framer-motion';

const floatingOrbs = [
  { size: 300, x: '10%', y: '20%', color: '#7c5cfc', duration: 8 },
  { size: 200, x: '70%', y: '60%', color: '#a855f7', duration: 10 },
  { size: 250, x: '40%', y: '80%', color: '#f75590', duration: 9 },
  { size: 180, x: '80%', y: '10%', color: '#4f8ef7', duration: 7 },
  { size: 220, x: '20%', y: '70%', color: '#c2a4ff', duration: 11 },
  { size: 150, x: '60%', y: '40%', color: '#f59939', duration: 8.5 },
];

function FloatingOrb({ size, x, y, color, duration, delay }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
        left: x,
        top: y,
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      animate={{
        x: [0, 30, -20, 15, -25, 0],
        y: [0, -25, 20, -15, 25, 0],
        scale: [1, 1.15, 0.9, 1.1, 0.95, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
    />
  );
}

function Particle({ delay, x, y, size, color }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        left: x,
        top: y,
        pointerEvents: 'none',
        zIndex: 0,
        boxShadow: `0 0 ${size * 2}px ${color}60`,
      }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0, 1.5, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
    />
  );
}

function LeftSideDecoration() {
  return (
    <div style={{
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: '300px',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      <motion.div
        style={{
          position: 'absolute',
          left: '-50px',
          top: '10%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 92, 252, 0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          y: [0, 30, -20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          left: '-30px',
          top: '50%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
          filter: 'blur(35px)',
        }}
        animate={{
          y: [0, -25, 15, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          left: '-40px',
          bottom: '15%',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(247, 85, 144, 0.15) 0%, transparent 70%)',
          filter: 'blur(45px)',
        }}
        animate={{
          y: [0, 20, -15, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <svg style={{
        position: 'absolute',
        left: '20px',
        top: '20%',
        width: '80px',
        height: '80px',
        opacity: 0.3,
      }} viewBox="0 0 100 100">
        <motion.circle
          cx="50" cy="50" r="40"
          fill="none"
          stroke="#7c5cfc"
          strokeWidth="1"
          strokeDasharray="10 5"
          animate={{
            rotate: 360,
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '50px 50px' }}
        />
      </svg>

      <svg style={{
        position: 'absolute',
        left: '40px',
        top: '55%',
        width: '60px',
        height: '60px',
        opacity: 0.25,
      }} viewBox="0 0 100 100">
        <motion.rect
          x="20" y="20" width="60" height="60"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1"
          rx="10"
          animate={{
            rotate: -360,
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '50px 50px' }}
        />
      </svg>

      <svg style={{
        position: 'absolute',
        left: '10px',
        bottom: '25%',
        width: '70px',
        height: '70px',
        opacity: 0.3,
      }} viewBox="0 0 100 100">
        <motion.polygon
          points="50,10 90,90 10,90"
          fill="none"
          stroke="#f75590"
          strokeWidth="1.5"
          animate={{
            rotate: 360,
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: '50px 63px' }}
        />
      </svg>

      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: `${10 + Math.random() * 40}px`,
            top: `${Math.random() * 100}%`,
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            borderRadius: '50%',
            background: ['#7c5cfc', '#a855f7', '#f75590', '#4f8ef7', '#c2a4ff'][i % 5],
            boxShadow: `0 0 6px ${['#7c5cfc', '#a855f7', '#f75590', '#4f8ef7', '#c2a4ff'][i % 5]}`,
          }}
          animate={{
            y: [0, -20, 15, -10, 20, 0],
            opacity: [0, 0.6, 0.3, 0.7, 0.2, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function About() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, -60]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 90}%`,
    y: `${Math.random() * 90}%`,
    size: 2 + Math.random() * 4,
    color: ['#7c5cfc', '#a855f7', '#f75590', '#4f8ef7', '#c2a4ff', '#f59939'][Math.floor(Math.random() * 6)],
    delay: Math.random() * 3,
  }));

  return (
    <section className="section" id="about" style={{
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <motion.div style={{ position: 'absolute', inset: 0, zIndex: 0, y: bgY }}>
        {floatingOrbs.map((orb, i) => (
          <FloatingOrb key={i} {...orb} delay={i * 0.5} />
        ))}
        {particles.map(p => (
          <Particle key={p.id} {...p} />
        ))}
      </motion.div>

      <LeftSideDecoration />

      <div style={{ position: 'relative', zIndex: 1 }}>
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
          className="glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
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
            <motion.div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c5cfc, #a855f7, #f75590)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 700,
                color: '#fff',
                boxShadow: '0 12px 40px rgba(124, 92, 252, 0.35)',
                border: '3px solid rgba(255,255,255,0.1)',
              }}
              animate={{
                boxShadow: [
                  '0 12px 40px rgba(124, 92, 252, 0.35)',
                  '0 12px 60px rgba(168, 85, 247, 0.5)',
                  '0 12px 40px rgba(247, 85, 144, 0.35)',
                  '0 12px 40px rgba(124, 92, 252, 0.35)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              NCG
            </motion.div>
            <div>
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '4px',
              }}>Naveen C Gundapalli</h3>
              <motion.p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--accent)',
                  fontWeight: 500,
                  background: 'linear-gradient(90deg, #7c5cfc, #a855f7, #c2a4ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI/ML Engineer & Full Stack Developer
              </motion.p>
            </div>
          </div>

          {[
            'I\'m a passionate AI/ML developer focused on building practical, hands-on projects that solve real-world problems. My journey into technology started with a curiosity about how machines can learn and make decisions — and I\'ve been hooked ever since.',
            'I build hands-on AI/ML projects using Python and enjoy working with datasets to extract meaningful insights. I\'m open to collaborating on beginner to intermediate AI, machine learning, and automation projects with real-world datasets.',
            'Currently learning machine learning algorithms, data preprocessing, and Python libraries like NumPy, Pandas, and Scikit-learn. Looking for help with model optimization, project structure, and best practices for deploying ML applications.',
            'My approach is simple: focus on building working projects rather than chasing certificates. I believe in learning by doing and turning ideas into functional applications that make a difference.',
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

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border)',
            }}
          >
            {[
              { value: '15+', label: 'Repositories' },
              { value: '13', label: 'Stars' },
              { value: '6+', label: 'Projects' },
              { value: '2', label: 'Internships' },
            ].map((stat, i) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <motion.p
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #7c5cfc, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: "'Fira Code', monospace",
                  }}
                >
                  {stat.value}
                </motion.p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
