import React from 'react';
import { Award, Briefcase, GraduationCap, Calendar, CheckCircle } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: <Briefcase size={22} />, label: 'Experience', value: 'Internship & Freelance' },
    { icon: <Award size={22} />, label: 'Projects Completed', value: '10+ Applications' },
    { icon: <GraduationCap size={22} />, label: 'Education', value: 'B.E. Computer Science' },
    { icon: <Calendar size={22} />, label: 'Licensing', value: 'NEC Registered Engineer' },
  ];

  const highlights = [
    'Full Stack Web Applications development (MERN & Next.js)',
    'Scalable API integration with PostgreSQL & MongoDB databases',
    'Real-time solutions utilizing Socket.io communication protocol',
    'Modern UI/UX design with responsiveness & optimization',
    'Nepal Engineering Council license registered (#15998 Comp)',
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
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Discover My <span>Journey</span>
          </h2>
          <p className="section-subtitle">
            A software engineer dedicated to building high-fidelity digital solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Stats & Highlights */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
              Professional Biography
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              I am Dipak Sah, a Computer Science Engineer and Full Stack Developer with experience in building modern web applications using MERN Stack, Next.js, TypeScript, PostgreSQL, and Socket.io. I enjoy creating scalable, user-focused digital solutions and contributing to innovative technology projects. 
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              My interests include full-stack development, software engineering, and emerging web technologies. I am passionate about continuous learning and building impactful products that solve real-world problems. With my engineering mindset and developer skills, I focus on performance, scalability, and exceptional UI/UX design.
            </p>

            <div style={{ marginTop: '0.5rem' }}>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Key Competencies:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {highlights.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    <CheckCircle size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.2rem' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Cards & Grid */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Stats Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                  }}
                >
                  <div
                    style={{
                      padding: '0.6rem',
                      borderRadius: '10px',
                      background: 'rgba(59, 130, 246, 0.08)',
                      color: 'var(--primary)',
                      border: '1px solid rgba(59, 130, 246, 0.15)',
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {stat.label}
                    </p>
                    <p style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '0.25rem' }}>
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Profile Summary Details */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                General Information
              </h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1rem',
                  fontSize: '0.95rem',
                }}
              >
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Location: </span>
                  <span style={{ fontWeight: 500 }}>Kathmandu, Nepal</span>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Degree: </span>
                  <span style={{ fontWeight: 500 }}>B.E. Computer Science</span>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Email: </span>
                  <a href="mailto:dipaksah2070@gmail.com" style={{ color: 'var(--primary)', fontWeight: 500 }}>
                    dipaksah2070@gmail.com
                  </a>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>Phone: </span>
                  <a href="tel:+9779805104098" style={{ fontWeight: 500 }}>
                    +977-9805104098
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
};
