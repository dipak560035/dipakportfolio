import React, { useState } from 'react';
import { ExternalLink, Sparkles, Terminal } from 'lucide-react';

export const GantabyaProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'arch'>('overview');

  const project = {
    title: 'Gantabya Mobility',
    subtitle: 'Electric Mobility Startup Platform',
    description: 'A modern EV mobility platform engineered for an emerging Nepalese startup preparing for future market launch. Features scalable modular application architecture, responsive interfaces, real-time status indicators, and streamlined user workflows.',
    image: '/assets/gantabya.png',
    tags: ['Next.js', 'TypeScript', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/dipak560035/gantabya-mobility',
    demoUrl: 'https://gantabya-mobility.vercel.app',
    stats: [
      { label: 'Latency Target', value: '< 80ms' },
      { label: 'PageSpeed Score', value: '98 / 100' },
      { label: 'Architecture', value: 'Modular Monolith' },
    ],
    features: [
      'Next.js SSR & Server Components for fast initial loads',
      'TypeScript strict typing across client interfaces',
      'REST API route integration with Express & Node backend',
      'MongoDB schemas tuned for high-speed location queries',
      'Fully responsive UI styled with Tailwind CSS',
    ]
  };

  const placeholders = [
    {
      title: 'Real-Time Workspace Sync Engine',
      description: 'Multi-user interactive workspace engine providing concurrent document editing, drawing canvas, and code editor synchronization.',
      tags: ['React.js', 'Socket.io', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Distributed Microservices Webhook Broker',
      description: 'High-throughput event queue broker providing transactional delivery receipts and payload audit logs.',
      tags: ['Node.js / Express', 'Redis', 'Docker', 'PostgreSQL'],
    },
  ];

  return (
    <div style={{ width: '100%' }}>
      {/* Featured Gantabya Project Card */}
      <div
        className="glass-card reveal"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)',
          backgroundColor: 'rgba(15, 22, 35, 0.9)',
          border: '1px solid var(--card-border)',
        }}
      >
        {/* Left Column: Image & Badge */}
        <div
          style={{
            position: 'relative',
            minHeight: '280px',
            backgroundColor: 'var(--bg-tertiary)',
            overflow: 'hidden',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform var(--transition-slow)',
            }}
            className="project-img-zoom"
          />
          <div
            className="font-mono"
            style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              backgroundColor: 'rgba(6, 182, 212, 0.95)',
              color: '#07090E',
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              boxShadow: '0 4px 12px rgba(6,182,212,0.3)',
            }}
          >
            <Sparkles size={13} /> Featured Production Application
          </div>
        </div>

        {/* Right Column: Content */}
        <div
          style={{
            padding: '2.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="font-mono"
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--accent)',
                    marginTop: '0.1rem',
                  }}
                >
                  // {project.subtitle}
                </p>
              </div>

              {/* Inspect Tab Toggle */}
              <div
                style={{
                  display: 'flex',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  padding: '0.2rem',
                  borderRadius: '6px',
                  border: '1px solid var(--card-border)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    border: 'none',
                    background: activeTab === 'overview' ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                    color: activeTab === 'overview' ? 'var(--accent)' : 'var(--text-muted)',
                    cursor: 'pointer',
                  }}
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('arch')}
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    border: 'none',
                    background: activeTab === 'arch' ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                    color: activeTab === 'arch' ? 'var(--accent)' : 'var(--text-muted)',
                    cursor: 'pointer',
                  }}
                >
                  Features
                </button>
              </div>
            </div>

            {activeTab === 'overview' ? (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7' }}>
                {project.description}
              </p>
            ) : (
              <ul
                style={{
                  paddingLeft: '1.2rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: '1.75',
                }}
              >
                {project.features.map((feat, fIdx) => (
                  <li key={fIdx}>{feat}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Tech Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {project.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="font-mono"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-secondary)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats Metrics Row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.85rem',
              borderTop: '1px solid var(--card-border)',
              borderBottom: '1px solid var(--card-border)',
              padding: '0.85rem 0',
            }}
          >
            {project.stats.map((stat, sIdx) => (
              <div key={sIdx} style={{ textAlign: 'center' }}>
                <p
                  className="font-mono"
                  style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}
                >
                  {stat.label}
                </p>
                <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', fontWeight: 700, marginTop: '0.1rem' }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '150px' }}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1, minWidth: '150px' }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg> GitHub Repository
            </a>
          </div>
        </div>
      </div>

      {/* Pipeline & Future Deployments */}
      <h3
        className="font-mono reveal"
        style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          marginBottom: '1.25rem',
          marginTop: '3rem',
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Terminal size={18} color="var(--accent)" /> // Future Pipeline Deployments
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {placeholders.map((item, idx) => (
          <div
            key={idx}
            className="glass-card reveal"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              borderStyle: 'dashed',
              backgroundColor: 'rgba(11, 15, 23, 0.6)',
            }}
          >
            <div
              className="font-mono"
              style={{
                alignSelf: 'flex-start',
                backgroundColor: 'rgba(139, 92, 246, 0.08)',
                color: 'var(--secondary)',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
              }}
            >
              In Pipeline
            </div>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
              {item.title}
            </h4>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6', flexGrow: 1 }}>
              {item.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="font-mono"
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '4px',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 992px) {
          .glass-card.reveal {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GantabyaProject;