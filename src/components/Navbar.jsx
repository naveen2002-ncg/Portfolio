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
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '0',
        background: scrolled ? 'rgba(11, 8, 12, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px',
      }}>
        <a href="#" style={{
          fontSize: '1.2rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}>
          naveen<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <div style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
        }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                padding: '8px 16px',
                borderRadius: '100px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--text-primary)';
                e.target.style.background = 'rgba(255,255,255,0.04)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-secondary)';
                e.target.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:naveen2002.ncg@gmail.com"
            className="btn btn-primary"
            style={{ padding: '8px 20px', fontSize: '0.8rem', marginLeft: '8px' }}
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1.3rem',
            padding: '4px',
          }}
          className="menu-toggle"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .menu-toggle { display: block !important; }
          nav > div:nth-child(1) > div:nth-child(2) {
            display: none;
          }
          nav > div:nth-child(1) > div:nth-child(2).mobile-visible {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 64px;
            left: 16px;
            right: 16px;
            background: var(--bg-secondary);
            padding: 16px;
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
