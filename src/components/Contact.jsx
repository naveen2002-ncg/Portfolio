import { motion } from 'framer-motion';

const contactMethods = [
  {
    label: 'Email',
    sublabel: 'Reach out for projects & collaborations',
    href: 'mailto:naveen2002.ncg@gmail.com',
    display: 'naveen2002.ncg@gmail.com',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  },
  {
    label: 'LinkedIn',
    sublabel: 'Let\'s connect professionally',
    href: 'https://www.linkedin.com/in/naveen-c-gundapalli-bb56b824b',
    display: '/in/naveen-c-gundapalli',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
  {
    label: 'GitHub',
    sublabel: 'Check out my code & open source',
    href: 'https://github.com/naveen2002-ncg',
    display: '@naveen2002-ncg',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  },
];

export default function Contact() {
  return (
    <section className="section" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '48px' }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle" style={{ maxWidth: '500px', margin: '0 auto' }}>
          I'm always interested in hearing about new projects, collaborations, and opportunities.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginBottom: '48px',
      }}>
        {contactMethods.map((method, i) => (
          <motion.a
            key={method.label}
            href={method.href}
            target={method.href.startsWith('http') ? '_blank' : undefined}
            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              padding: '24px',
              textDecoration: 'none',
              position: 'relative',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'rgba(124, 92, 252, 0.12)',
              border: '1px solid rgba(124, 92, 252, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              flexShrink: 0,
            }} dangerouslySetInnerHTML={{ __html: method.icon }} />
            <div>
              <h3 style={{
                fontWeight: 600,
                fontSize: '1rem',
                color: 'var(--text-primary)',
                marginBottom: '4px',
              }}>{method.label}</h3>
              <p style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                marginBottom: '2px',
              }}>{method.sublabel}</p>
              <span style={{
                fontSize: '0.85rem',
                color: 'var(--accent)',
                fontWeight: 500,
                fontFamily: "'Fira Code', monospace",
              }}>{method.display}</span>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="card"
        style={{
          textAlign: 'center',
          padding: '40px 32px',
          background: 'linear-gradient(135deg, rgba(124, 92, 252, 0.08), rgba(79, 142, 247, 0.05))',
          border: '1px solid rgba(124, 92, 252, 0.15)',
          maxWidth: '700px',
          margin: '0 auto',
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 style={{
          fontSize: '1.2rem',
          fontWeight: 700,
          marginBottom: '12px',
          color: 'var(--text-primary)',
        }}>Let's build something together</h3>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.95rem',
          marginBottom: '24px',
          lineHeight: 1.7,
        }}>
          Currently open for freelance projects, internships, and full-time opportunities in AI/ML.
          Drop me a message and let's turn ideas into reality.
        </p>
        <a
          href="mailto:naveen2002.ncg@gmail.com"
          className="btn btn-primary"
          style={{ padding: '14px 36px', fontSize: '0.95rem' }}
        >
          Send Message →
        </a>
      </motion.div>
    </section>
  );
}
