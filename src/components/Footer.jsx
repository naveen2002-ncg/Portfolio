export default function Footer() {
  return (
    <footer style={{
      padding: '48px 0 32px',
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: 700,
          marginBottom: '16px',
          background: 'linear-gradient(135deg, var(--gradient-1), var(--gradient-2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Naveen C Gundapalli
        </h3>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          marginBottom: '24px',
          maxWidth: '450px',
          margin: '0 auto 24px',
        }}>
          Building AI/ML projects with Python. Focused on creating real-world solutions through hands-on development.
        </p>

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          marginBottom: '28px',
        }}>
          <SocialIcon href="https://github.com/naveen2002-ncg" label="GitHub" icon="github" />
          <SocialIcon href="https://www.linkedin.com/in/naveen-c-gundapalli-bb56b824b" label="LinkedIn" icon="linkedin" />
        </div>

        <p style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
        }}>
          Made with ♥ by Naveen C Gundapalli • 2026
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, icon }) {
  const svg = icon === 'github'
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        color: 'var(--text-secondary)',
        transition: 'all 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.color = 'var(--accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.color = 'var(--text-secondary)';
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
