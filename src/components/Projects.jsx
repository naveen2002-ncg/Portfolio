import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Railway Radiance',
    description: 'A TypeScript project built with modern tooling and clean architecture patterns.',
    tech: ['TypeScript'],
    link: 'https://github.com/naveen2002-ncg/railway-radiance',
    stars: 2,
  },
  {
    title: 'Career Recommendation System',
    description: 'An intelligent ML-powered system that recommends career paths based on user profiles.',
    tech: ['Python', 'ML'],
    link: 'https://github.com/naveen2002-ncg/career-recommendation-system',
    stars: 2,
  },
  {
    title: 'AI Personal Tutor',
    description: 'An interactive AI-powered tutoring platform that helps users learn through adaptive explanations.',
    tech: ['Python', 'AI'],
    link: 'https://github.com/naveen2002-ncg/ai-personal-tutor',
    stars: 2,
  },
  {
    title: 'SmartNotes Deploy',
    description: 'A smart notes application with intelligent organization and seamless deployment pipeline.',
    tech: ['Python'],
    link: 'https://github.com/naveen2002-ncg/smartnotes-deploy',
    stars: 2,
  },
  {
    title: 'Language Translation Tool',
    description: 'A multilingual web-based translation tool bridging communication between languages.',
    tech: ['HTML', 'Python'],
    link: 'https://github.com/naveen2002-ncg/SourceHubIT-_Language-Translation-Tool',
    stars: 2,
  },
  {
    title: 'FAQ Chatbot',
    description: 'An NLP-powered FAQ chatbot that answers common queries with natural language understanding.',
    tech: ['Python', 'NLP'],
    link: 'https://github.com/naveen2002-ncg/SourceHubIT-faq-chatbot',
    stars: 2,
  },
];

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#fbbf24' }}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '48px' }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle" style={{ marginBottom: 0 }}>A selection of my recent work</p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '20px',
      }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '12px',
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                fontFamily: "'Fira Code', monospace",
                letterSpacing: '-0.01em',
              }}>
                <span style={{ color: 'var(--accent)' }}>#</span>
                {project.title}
              </h3>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.75rem',
                color: 'var(--text-secondary)',
                background: 'rgba(251, 191, 36, 0.06)',
                padding: '3px 8px',
                borderRadius: '6px',
              }}>
                <StarIcon /> {project.stars}
              </span>
            </div>

            <p style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              marginBottom: '18px',
              lineHeight: 1.65,
            }}>
              {project.description}
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: '18px',
            }}>
              {project.tech.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{
                padding: '7px 16px',
                fontSize: '0.78rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <GitHubIcon /> Code
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
