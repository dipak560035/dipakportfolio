import React from 'react';
import { GraduationCap, BookOpen, Award, ShieldCheck } from 'lucide-react';

interface AcademicItem {
  degree: string;
  institution: string;
  location: string;
  icon: React.ReactNode;
}

export const Education: React.FC = () => {
  const educationList: AcademicItem[] = [
    {
      degree: 'Bachelor of Engineering — Computer Science & Engineering',
      institution: 'Bangalore Institute of Technology (VTU)',
      location: 'Bangalore, India',
      icon: <GraduationCap size={20} />,
    },
    {
      degree: 'Higher Secondary Level — Science (Class 11 & 12)',
      institution: 'Greenland College',
      location: 'Biratnagar, Nepal',
      icon: <BookOpen size={20} />,
    },
    {
      degree: 'School Level (SEE / Class 10)',
      institution: 'Little Star Secondary School',
      location: 'Lahan, Nepal',
      icon: <Award size={20} />,
    },
  ];

  return (
    <section
      id="education"
      style={{
        position: 'relative',
        padding: '100px 0',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">Education & License</span>
          <h2 className="section-title">
            Academic <span>Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal education background and official engineering registration details.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div
          className="edu-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Timeline list */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {educationList.map((item, idx) => (
              <div
                key={idx}
                className="glass-card reveal"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center',
                }}
              >
                {/* Academic Icon */}
                <div
                  style={{
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                    color: 'var(--primary)',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                    padding: '0.8rem',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>

                {/* Details */}
                <div>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-display)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {item.degree}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      marginTop: '0.25rem',
                    }}
                  >
                    {item.institution}
                  </p>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.2rem',
                    }}
                  >
                    {item.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* License / Certification Highlight Card */}
          <div className="reveal">
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                border: '1.5px solid rgba(16, 185, 129, 0.2)', // green accent highlight
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top background accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.08)',
                  filter: 'blur(30px)',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#10B981',
                    padding: '0.6rem',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                  }}
                >
                  <ShieldCheck size={24} />
                </div>
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  Official Engineering License
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h4
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  Registered Computer Engineer
                </h4>
                <p
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#10B981',
                  }}
                >
                  Nepal Engineering Council (NEC)
                </p>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                  }}
                >
                  Successfully passed the professional board examinations and registered as a licensed computer engineer with the Nepal Engineering Council. Certified to practice engineering and deliver compliant digital architectures in Nepal.
                </p>
              </div>

              <div
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: 'rgba(16, 185, 129, 0.05)',
                  border: '1px dashed rgba(16, 185, 129, 0.3)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                }}
              >
                Status: ACTIVE MEMBER (#15998 Comp)
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .edu-grid {
            grid-template-columns: 1.1fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
};
