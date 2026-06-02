import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Railway Radiance',
    description: 'A modern TypeScript project showcasing clean architecture patterns and performance-optimized code structure.',
    tech: ['TypeScript', 'TypeScript'],
    techLabels: ['TypeScript'],
    link: 'https://github.com/naveen2002-ncg/railway-radiance',
    stars: 2,
  },
  {
    title: 'Career Recommendation System',
    description: 'An intelligent ML-powered system that analyzes user profiles and recommends personalized career paths. Built with Python and scikit-learn.',
    tech: ['Python', 'ml'],
    techLabels: ['Python', 'ML'],
    link: 'https://github.com/naveen2002-ncg/career-recommendation-system',
    stars: 2,
  },
  {
    title: 'AI Personal Tutor',
    description: 'An interactive AI-powered tutoring platform that helps users learn concepts through adaptive learning and smart explanations.',
    tech: ['Python', 'ai'],
    techLabels: ['Python', 'AI'],
    link: 'https://github.com/naveen2002-ncg/ai-personal-tutor',
    stars: 2,
  },
  {
    title: 'SmartNotes Deploy',
    description: 'A smart notes application featuring intelligent note organization, categorization, and a seamless deployment pipeline to production.',
    tech: ['Python'],
    techLabels: ['Python', 'Deployment'],
    link: 'https://github.com/naveen2002-ncg/smartnotes-deploy',
    stars: 2,
  },
  {
    title: 'Language Translation Tool',
    description: 'A web-based multilingual translation tool built to bridge communication gaps between different languages using modern web technologies.',
    tech: ['html', 'Python'],
    techLabels: ['HTML', 'Python'],
    link: 'https://github.com/naveen2002-ncg/SourceHubIT-_Language-Translation-Tool',
    stars: 2,
  },
  {
    title: 'FAQ Chatbot',
    description: 'An NLP-powered FAQ chatbot that automatically answers common queries with natural language understanding. Integrated into web interfaces.',
    tech: ['Python', 'ml'],
    techLabels: ['Python', 'NLP'],
    link: 'https://github.com/naveen2002-ncg/SourceHubIT-faq-chatbot',
    stars: 2,
  },
];

const techColors = {
  Python: '#3776AB',
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  HTML: '#E34F26',
  ML: '#FF6F00',
  AI: '#7B61FF',
  NLP: '#00BCD4',
  Deployment: '#4CAF50',
};

function TechBadge({ label }) {
  const color = techColors[label] || 'var(--accent)';
  return (
    <motion.span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '5px 12px',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: 500,
        background: `${color}15`,
        color: color,
        border: `1px solid ${color}30`,
      }}
      whileHover={{ scale: 1.05 }}
    >
      <span style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: color,
      }} />
      {label}
    </motion.span>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#fbbf24' }}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of my recent AI/ML and development work</p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '24px',
      }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, var(--gradient-1), var(--gradient-2), var(--gradient-3))',
              opacity: 0,
              transition: 'opacity 0.3s',
            }} className="project-card-top" />

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '14px',
            }}>
              <motion.h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  fontFamily: "'Fira Code', monospace",
                }}
              >
                <span style={{ color: 'var(--gradient-2)' }}>#</span>
                {project.title}
              </motion.h3>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.78rem',
                color: 'var(--text-secondary)',
                background: 'rgba(251, 191, 36, 0.08)',
                padding: '4px 8px',
                borderRadius: '6px',
              }}>
                <StarIcon /> {project.stars}
              </span>
            </div>

            <p style={{
              fontSize: '0.93rem',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
              flex: 1,
              lineHeight: 1.7,
            }}>
              {project.description}
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '20px',
            }}>
              {project.techLabels.map(t => (
                <TechBadge key={t} label={t} />
              ))}
            </div>

            <div style={{
              display: 'flex',
              gap: '12px',
              paddingTop: '16px',
              borderTop: '1px solid var(--border)',
            }}>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  padding: '8px 18px',
                  fontSize: '0.82rem',
                  flex: 1,
                  justifyContent: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                dangerouslySetInnerHTML={{
                  __html: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Code`,
                }}
              />
              <motion.span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(124, 92, 252, 0.08)',
                  border: '1px solid rgba(124, 92, 252, 0.15)',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                whileHover={{
                  scale: 1.05,
                  background: 'rgba(124, 92, 252, 0.2)',
                  color: 'var(--accent)',
                }}
                dangerouslySetInnerHTML={{
                  __html: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .project-card-top {
          opacity: 0;
        }
        .card:hover .project-card-top {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
