import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'MERN Stack Developer Intern',
      company: 'Mindrisers Technology',
      location: 'Kathmandu, Nepal',
      period: 'Nov 2025 – Apr 2026',
      highlights: [
        'Development of a modern EV mobility startup web platform in Nepal preparing for future launch.',
        'Built fast responsive web apps using React.js, Next.js, and Tailwind CSS.',
        'Created high-fidelity, reusable modular components.',
        'Improved load-times and responsiveness.',
        'Integrated REST backend routes using Node.js & Express.js.',
        'Interacted with MongoDB schemas and queries.',
        'Collaborated in teams using Git and GitHub.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      style={{
        position: 'relative',
        padding: '100px 0',
        zIndex: 1,
        backgroundColor: 'var(--bg-secondary)',
        transition: 'background-color var(--transition-normal)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">
            Professional <span>Journey</span>
          </h2>
          <p className="section-subtitle">
            Hands-on work experience developing applications in industry settings.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item reveal">
              {/* Animated Dot */}
              <div className="timeline-dot" />

              {/* Experience Card */}
              <div
                className="glass-card"
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {/* Header Row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-display)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--primary)',
                        marginTop: '0.25rem',
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>

                  {/* Period & Location Meta */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description Divider */}
                <div
                  style={{
                    width: '100%',
                    height: '1px',
                    background: 'var(--card-border)',
                  }}
                />

                {/* Responsibilities list */}
                <div>
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                      color: 'var(--text-primary)',
                    }}
                  >
                    Key Responsibilities & Learnings:
                  </h4>
                  <ul
                    style={{
                      paddingLeft: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} style={{ listStyleType: 'square' }}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
