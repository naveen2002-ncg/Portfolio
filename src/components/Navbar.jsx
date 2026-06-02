import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Stats', href: '#stats' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(10, 10, 15, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '72px',
      }}>
        <a href="#" style={{
          fontSize: '1.4rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, var(--gradient-1), var(--gradient-2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.02em',
        }}>
          NCG
        </a>

        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }} className={menuOpen ? 'mobile-hidden' : ''}>
          {navLinks.map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '0.88rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                padding: '8px 16px',
                borderRadius: '8px',
                transition: 'color 0.3s',
              }}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--accent)';
                e.target.style.background = 'rgba(124, 92, 252, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-secondary)';
                e.target.style.background = 'transparent';
              }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="mailto:naveen2002.ncg@gmail.com"
            className="btn btn-primary"
            style={{ padding: '10px 24px', fontSize: '0.88rem', marginLeft: '8px' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.a>
        </div>

        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1.5rem',
            padding: '8px',
          }}
          className="menu-toggle"
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? '✕' : '☰'}
        </motion.button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-hidden {
            display: none !important;
          }
          .menu-toggle {
            display: block !important;
          }
          nav > div:nth-child(1) > div:nth-child(2) {
            display: none;
          }
          nav > div:nth-child(1) > div:nth-child(2).mobile-visible {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 72px;
            left: 16px;
            right: 16px;
            background: var(--bg-secondary);
            padding: 20px;
            border-radius: 16px;
            border: 1px solid var(--border);
            gap: 4px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          }
        }
      `}</style>
    </motion.nav>
  );
}
