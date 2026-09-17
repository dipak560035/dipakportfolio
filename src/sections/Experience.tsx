import React from 'react';
import { Calendar, MapPin, Terminal, Briefcase, Code, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'MERN Stack Developer Intern',
      company: 'Mindrisers Technology',
      location: 'Kathmandu, Nepal',
      period: 'Nov 2025 – Apr 2026',
      techStack: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Git'],
      highlights: [
        'Engineered modern web platform for an EV mobility startup preparing for future market launch.',
        'Developed high-fidelity, reusable modular frontend components using React.js, Next.js, and Tailwind CSS.',
        'Integrated backend RESTful API routes utilizing Node.js and Express.js.',
        'Structured and executed database queries against MongoDB document collections.',
        'Collaborated in agile team sprints using Git version control and GitHub repositories.',
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
          <span className="section-tag">
            <Terminal size={14} /> // 03. Engineering Log
          </span>
          <h2 className="section-title">
            Professional <span>Experience</span>
          </h2>
          <p className="section-subtitle">
            Industry work timeline building production features and scalable software solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item reveal">
              {/* Timeline Indicator Dot */}
              <div className="timeline-dot" />

              {/* Experience Card */}
              <div
                className="glass-card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  backgroundColor: 'rgba(15, 22, 35, 0.85)',
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Briefcase size={18} color="var(--accent)" />
                      <h3
                        style={{
                          fontSize: '1.35rem',
                          fontWeight: 700,
                          fontFamily: 'var(--font-display)',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {exp.role}
                      </h3>
                    </div>
                    <p
                      style={{
                        fontSize: '1.02rem',
                        fontWeight: 600,
                        color: 'var(--primary)',
                        marginTop: '0.2rem',
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>

                  {/* Period & Location Meta */}
                  <div
                    className="font-mono"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={14} color="var(--accent)" />
                      <span>{exp.period}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={14} color="var(--accent)" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono"
                      style={{
                        fontSize: '0.74rem',
                        backgroundColor: 'rgba(6, 182, 212, 0.08)',
                        border: '1px solid rgba(6, 182, 212, 0.2)',
                        color: 'var(--accent)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    width: '100%',
                    height: '1px',
                    background: 'var(--card-border)',
                  }}
                />

                {/* Responsibilities */}
                <div>
                  <h4
                    className="font-mono"
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      marginBottom: '0.75rem',
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <Code size={15} color="var(--accent)" /> Deliverables & Responsibilities:
                  </h4>
                  <ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.94rem',
                      lineHeight: '1.65',
                      listStyle: 'none',
                    }}
                  >
                    {exp.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <CheckCircle size={16} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.2rem' }} />
                        <span>{bullet}</span>
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
