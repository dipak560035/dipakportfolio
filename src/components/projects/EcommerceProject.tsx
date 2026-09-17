import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export const EcommerceProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features'>('overview');

  const project = {
    title: 'MERN E-Commerce Platform',
    subtitle: 'Full-Stack Digital Marketplace',
    description: 'A full-featured online store with secure JWT user authentication, admin product control, search & filtering, order processing, and shopping cart state management.',
    image: '/assets/ecommerce.png',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    githubFrontendUrl: 'https://github.com/dipak560035/MernFrontened/tree/figma-design',
    githubBackendUrl: 'https://github.com/dipak560035/rtk-query/tree/figma-backend',
    demoUrl: 'https://mern-frontened.vercel.app/',
    stats: [
      { label: 'API Speed', value: '< 120ms' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Security', value: 'JWT Tokens' },
    ],
    features: [
      'JWT Authentication & Protected Route Guards',
      'Product Search, Category Filter, and Sorting',
      'Cart State Management & Checkout Order Flow',
      'Admin Dashboard for Product CRUD Operations',
      'Responsive Mobile-First UI with Tailwind CSS',
    ],
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Featured E-Commerce Card */}
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
        {/* Left Column: Image Container */}
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
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1613906800797-d5d4fb2f7bbb?q=80&w=1170&auto=format&fit=crop';
            }}
          />
          <div
            className="font-mono"
            style={{
              position: 'absolute',
              top: '15px',
              left: '15px',
              backgroundColor: 'rgba(59, 130, 246, 0.95)',
              color: '#FFFFFF',
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              boxShadow: '0 4px 12px rgba(59,130,246,0.3)',
            }}
          >
            <Sparkles size={13} /> Full-Stack Production App
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
                  🛒 {project.title}
                </h3>
                <p
                  className="font-mono"
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--primary)',
                    marginTop: '0.1rem',
                  }}
                >
                  // {project.subtitle}
                </p>
              </div>

              {/* Tab Toggle */}
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
                    background: activeTab === 'overview' ? 'rgba(59, 130, 246, 0.18)' : 'transparent',
                    color: activeTab === 'overview' ? 'var(--primary)' : 'var(--text-muted)',
                    cursor: 'pointer',
                  }}
                >
                  Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('features')}
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    border: 'none',
                    background: activeTab === 'features' ? 'rgba(59, 130, 246, 0.18)' : 'transparent',
                    color: activeTab === 'features' ? 'var(--primary)' : 'var(--text-muted)',
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
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '130px' }}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
            <a
              href={project.githubFrontendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1, minWidth: '130px' }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '5px' }}>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg> Frontend Repo
            </a>
            <a
              href={project.githubBackendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ flex: 1, minWidth: '130px' }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '5px' }}>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg> Backend Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProject;