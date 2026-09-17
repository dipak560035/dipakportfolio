import React from 'react';
import { Award, Briefcase, GraduationCap, ShieldCheck, CheckCircle, Terminal, MapPin, Mail, Phone, Code } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: <Briefcase size={20} />, label: 'Experience', value: 'Internship & Freelance' },
    { icon: <Award size={20} />, label: 'Projects Built', value: '10+ Web Applications' },
    { icon: <GraduationCap size={20} />, label: 'Education', value: 'B.E. Computer Science' },
    { icon: <ShieldCheck size={20} />, label: 'Engineering License', value: 'NEC Registered #15998 Comp' },
  ];

  const highlights = [
    'Full Stack Web Application development with MERN Stack & Next.js',
    'Scalable RESTful API architecture with PostgreSQL & MongoDB databases',
    'Real-time web communication utilizing Socket.io protocol',
    'Responsive modern UI engineering with clean component design',
    'Licensed Computer Engineer with Nepal Engineering Council registration',
  ];

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '100px 0',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">
            <Terminal size={14} /> // 01. Profile & Architecture
          </span>
          <h2 className="section-title">
            Engineering <span>Background</span>
          </h2>
          <p className="section-subtitle">
            Computer Science Engineer focused on building scalable, production-grade web applications.
          </p>
        </div>

        {/* Content Layout Grid */}
        <div
          className="about-grid-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Biography & Technical Profile */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Profile Status Badge Header */}
            <div
              className="glass-card font-mono"
              style={{
                padding: '1.25rem 1.5rem',
                borderLeft: '3px solid var(--accent)',
                backgroundColor: 'rgba(11, 15, 23, 0.8)',
                fontSize: '0.84rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '0.85rem',
              }}
            >
              <div>
                <span style={{ color: 'var(--text-muted)' }}>ROLE: </span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>FULL STACK DEV</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>FOCUS: </span>
                <span style={{ color: 'var(--accent)', fontWeight: 700 }}>MERN / NEXT.JS</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>LOCATION: </span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>NEPAL</span>
              </div>
              <div>
                <span style={{ color: 'var(--text-muted)' }}>LICENSE: </span>
                <span style={{ color: '#10B981', fontWeight: 700 }}>NEC #15998 COMP</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                Professional Biography
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                I am <strong style={{ color: 'var(--text-primary)' }}>Dipak Sah</strong>, a Computer Science Engineer and Full Stack Developer with experience in engineering modern web applications using MERN Stack, Next.js, TypeScript, PostgreSQL, and Socket.io. I focus on clean code structure, high-performance database schema design, and seamless user experiences.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.8' }}>
                With a background in Computer Science & Engineering and official Nepal Engineering Council licensing, I combine fundamental engineering principles with modern web technologies to build scalable products that solve real-world problems.
              </p>
            </div>

            {/* Key Competencies List */}
            <div style={{ marginTop: '0.5rem' }}>
              <h4
                className="font-mono"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  marginBottom: '0.85rem',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                // Core Engineering Capabilities:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {highlights.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                    }}
                  >
                    <CheckCircle size={17} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Technical Stats & General Information */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Stats Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
              }}
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      padding: '0.5rem',
                      borderRadius: '8px',
                      background: 'rgba(6, 182, 212, 0.08)',
                      color: 'var(--accent)',
                      border: '1px solid rgba(6, 182, 212, 0.2)',
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <p
                      className="font-mono"
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {stat.label}
                    </p>
                    <p style={{ fontSize: '0.98rem', fontWeight: 700, marginTop: '0.2rem' }}>
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* General Information Terminal Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <h4
                className="font-mono"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <Code size={16} /> Technical Profile Info
              </h4>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  fontSize: '0.92rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={16} color="var(--text-muted)" />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</p>
                    <p style={{ fontWeight: 600 }}>Kathmandu, Nepal</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <GraduationCap size={16} color="var(--text-muted)" />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Degree</p>
                    <p style={{ fontWeight: 600 }}>B.E. Computer Science</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={16} color="var(--text-muted)" />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email</p>
                    <a
                      href="mailto:dipaksah2070@gmail.com"
                      style={{ color: 'var(--accent)', fontWeight: 600 }}
                    >
                      dipaksah2070@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={16} color="var(--text-muted)" />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Phone</p>
                    <a href="tel:+9779805104098" style={{ fontWeight: 600 }}>
                      +977-9805104098
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid-layout {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
};
