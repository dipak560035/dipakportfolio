import React from 'react';
import { Cpu, Award, FileCode, Globe, ShieldCheck } from 'lucide-react';

interface Achievement {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

export const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      icon: <Cpu size={24} />,
      title: 'Computer Science Engineer',
      subtitle: 'Academic Credential',
      description: 'Acquired core competencies in algorithm design, software engineering, computational modeling, and system architectures from Bangalore Institute of Technology.',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Registered NEC Engineer',
      subtitle: 'Professional License',
      description: 'Officially registered as a Professional Computer Engineer with the Nepal Engineering Council (License No. 15998 Comp), certified for engineering standards.',
    },
    {
      icon: <FileCode size={24} />,
      title: 'MERN Stack Developer',
      subtitle: 'Technical Specialization',
      description: 'Demonstrated proficiency in building database-driven applications with full integration across Mongo, Express, React, and Node environments.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Full Stack Web Developer',
      subtitle: 'Core Capability',
      description: 'Equipped to build complete end-to-end applications, incorporating user authentications, transactional APIs, web security, and cloud deployments.',
    },
    {
      icon: <Award size={24} />,
      title: 'Modern Web Application Developer',
      subtitle: 'Design & Performance Specialty',
      description: 'Focused on implementing interactive glassmorphism UI/UX designs, real-time sync systems, search engine optimizations, and optimal asset tuning.',
    },
  ];

  return (
    <section
      id="achievements"
      style={{
        position: 'relative',
        padding: '100px 0',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">Credentials</span>
          <h2 className="section-title">
            Professional <span>Achievements</span>
          </h2>
          <p className="section-subtitle">
            A validation of my academic foundations, professional registrations, and specialized software engineering capabilities.
          </p>
        </div>

        {/* Achievements Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-card reveal"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(139, 92, 246, 0.08)',
                  color: 'var(--secondary)',
                  border: '1px solid rgba(139, 92, 246, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </div>

              {/* Title & Sub */}
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginTop: '0.15rem',
                  }}
                >
                  {item.subtitle}
                </p>
              </div>

              {/* Desc */}
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
