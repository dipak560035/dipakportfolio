import React, { useState, useEffect } from 'react';
import { FileText, ChevronDown, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const roles = [
  'Full Stack Developer',
  'MERN Stack Architect',
  'Next.js & React Engineer',
  'Computer Science Engineer'
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'metrics'>('profile');

  useEffect(() => {
    let timer: number;
    const fullText = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(90);

        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2200) as unknown as number;
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(45);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed) as unknown as number;
    };

    timer = setTimeout(handleTyping, typingSpeed) as unknown as number;

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleNavScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 0 60px 0',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <div className="container">
        <div
          className="hero-grid-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Hero Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}
          >
            {/* System Status Pill */}
            <motion.div variants={itemVariants} style={{ alignSelf: 'flex-start' }}>
              <div className="sys-status-pill">
                <span className="status-dot-animated" />
                <span>SYS_STATUS: AVAILABLE FOR OPPORTUNITIES</span>
              </div>
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                lineHeight: 1.1,
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
              }}
            >
              Building Scalable <br />
              <span className="text-gradient">Digital Web Apps</span>
            </motion.h1>

            {/* Rotating Technical Title */}
            <motion.h2
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>&gt;</span> I am a{' '}
              <span className="cursor-blink" style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
                {currentText}
              </span>
            </motion.h2>

            {/* Intro Description */}
            <motion.p
              variants={itemVariants}
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                maxWidth: '600px',
                lineHeight: '1.75',
              }}
            >
              Computer Science Engineer and Full Stack Developer specialized in engineering robust, modern MERN Stack and Next.js web applications. Registered NEC Engineer (#15998 Comp) focused on performance, clean backend APIs, and sleek frontend UX.
            </motion.p>

            {/* Quick Specs Bar */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                borderTop: '1px solid var(--card-border)',
                borderBottom: '1px solid var(--card-border)',
                padding: '0.75rem 0',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle size={14} color="var(--accent)" /> React / Next.js
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle size={14} color="var(--accent)" /> Node.js / Express
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle size={14} color="var(--accent)" /> TypeScript
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <CheckCircle size={14} color="var(--accent)" /> PostgreSQL / MongoDB
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-primary"
                >
                  View Projects <ArrowRight size={17} />
                </motion.button>
              </Link>

              <motion.a
                href="/Dipak_Sah_Resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-secondary"
              >
                <FileText size={17} /> Resume
              </motion.a>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-accent"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Right Content: Developer Technical System Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '520px',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--card-border)',
                background: 'rgba(11, 15, 23, 0.9)',
              }}
            >
              {/* Terminal Window Header */}
              <div
                style={{
                  backgroundColor: 'rgba(17, 22, 34, 0.95)',
                  padding: '0.65rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--card-border)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.6rem' }}
                  >
                    dipaksah@system-node ~ dev
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.25rem' }}>
                  <button
                    type="button"
                    onClick={() => setActiveTab('profile')}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      border: 'none',
                      background: activeTab === 'profile' ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                      color: activeTab === 'profile' ? 'var(--accent)' : 'var(--text-muted)',
                      cursor: 'pointer',
                    }}
                  >
                    Profile.ts
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('stack')}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      border: 'none',
                      background: activeTab === 'stack' ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                      color: activeTab === 'stack' ? 'var(--accent)' : 'var(--text-muted)',
                      cursor: 'pointer',
                    }}
                  >
                    Stack.json
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('metrics')}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      border: 'none',
                      background: activeTab === 'metrics' ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                      color: activeTab === 'metrics' ? 'var(--accent)' : 'var(--text-muted)',
                      cursor: 'pointer',
                    }}
                  >
                    Metrics.sh
                  </button>
                </div>
              </div>

              {/* Terminal Code Content Area */}
              <div
                className="font-mono"
                style={{
                  padding: '1.4rem',
                  fontSize: '0.84rem',
                  lineHeight: '1.7',
                  minHeight: '300px',
                  backgroundColor: '#07090E',
                  color: 'var(--text-secondary)',
                  overflowX: 'auto',
                }}
              >
                {activeTab === 'profile' && (
                  <div>
                    <p style={{ color: 'var(--text-muted)' }}>// Developer System Object Definition</p>
                    <p>
                      <span style={{ color: '#F43F5E' }}>const</span>{' '}
                      <span style={{ color: '#38BDF8' }}>developerProfile</span>:{' '}
                      <span style={{ color: '#F59E0B' }}>EngineSpec</span> = &#123;
                    </p>
                    <div style={{ paddingLeft: '1.2rem' }}>
                      <p>
                        <span style={{ color: 'var(--accent)' }}>name</span>: <span style={{ color: '#10B981' }}>"Dipak Sah"</span>,
                      </p>
                      <p>
                        <span style={{ color: 'var(--accent)' }}>role</span>: <span style={{ color: '#10B981' }}>"Full Stack Developer"</span>,
                      </p>
                      <p>
                        <span style={{ color: 'var(--accent)' }}>degree</span>: <span style={{ color: '#10B981' }}>"B.E. Computer Science"</span>,
                      </p>
                      <p>
                        <span style={{ color: 'var(--accent)' }}>license</span>: <span style={{ color: '#10B981' }}>"NEC Registered Engineer (#15998 Comp)"</span>,
                      </p>
                      <p>
                        <span style={{ color: 'var(--accent)' }}>location</span>: <span style={{ color: '#10B981' }}>"Kathmandu, Nepal"</span>,
                      </p>
                      <p>
                        <span style={{ color: 'var(--accent)' }}>availability</span>: <span style={{ color: '#F59E0B' }}>true</span>,
                      </p>
                      <p>
                        <span style={{ color: 'var(--accent)' }}>focusAreas</span>: [
                      </p>
                      <div style={{ paddingLeft: '1rem', color: '#10B981' }}>
                        <p>"Web Applications",</p>
                        <p>"MERN Architecture",</p>
                        <p>"RESTful API Design"</p>
                      </div>
                      <p>],</p>
                    </div>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div>
                    <p style={{ color: 'var(--text-muted)' }}>// Primary System Technologies</p>
                    <p>&#123;</p>
                    <div style={{ paddingLeft: '1.2rem' }}>
                      <p>
                        <span style={{ color: '#38BDF8' }}>"frontend"</span>: [
                        <span style={{ color: '#10B981' }}>"React.js"</span>, <span style={{ color: '#10B981' }}>"Next.js"</span>, <span style={{ color: '#10B981' }}>"TypeScript"</span>, <span style={{ color: '#10B981' }}>"Tailwind CSS"</span>
                        ],
                      </p>
                      <p>
                        <span style={{ color: '#38BDF8' }}>"backend"</span>: [
                        <span style={{ color: '#10B981' }}>"Node.js"</span>, <span style={{ color: '#10B981' }}>"Express.js"</span>, <span style={{ color: '#10B981' }}>"REST APIs"</span>, <span style={{ color: '#10B981' }}>"Socket.io"</span>
                        ],
                      </p>
                      <p>
                        <span style={{ color: '#38BDF8' }}>"database"</span>: [
                        <span style={{ color: '#10B981' }}>"MongoDB"</span>, <span style={{ color: '#10B981' }}>"PostgreSQL"</span>
                        ],
                      </p>
                      <p>
                        <span style={{ color: '#38BDF8' }}>"tooling"</span>: [
                        <span style={{ color: '#10B981' }}>"Git"</span>, <span style={{ color: '#10B981' }}>"GitHub"</span>, <span style={{ color: '#10B981' }}>"Postman"</span>, <span style={{ color: '#10B981' }}>"VS Code"</span>
                        ]
                      </p>
                    </div>
                    <p>&#125;</p>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div>
                    <p style={{ color: 'var(--text-muted)' }}># Telemetry & Performance Snapshot</p>
                    <p style={{ color: '#F59E0B' }}>$ system-health check --verbose</p>
                    <br />
                    <p>[<span style={{ color: '#10B981' }}>OK</span>] Component Architecture: Modular & Reusable</p>
                    <p>[<span style={{ color: '#10B981' }}>OK</span>] Frontend Performance: Optimised Bundle</p>
                    <p>[<span style={{ color: '#10B981' }}>OK</span>] Database Connection: Query Indexing Ready</p>
                    <p>[<span style={{ color: '#10B981' }}>OK</span>] Security Policies: RLS & Input Sanitization Enabled</p>
                    <br />
                    <p style={{ color: 'var(--accent)' }}>&gt; Status: All engineering systems operational.</p>
                  </div>
                )}
              </div>

              {/* Technical Footer Status */}
              <div
                style={{
                  backgroundColor: 'rgba(17, 22, 34, 0.95)',
                  padding: '0.5rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--card-border)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                }}
              >
                <span>UTF-8 | TypeScript 5.x</span>
                <span style={{ color: '#10B981' }}>● 100% Compiled</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={() => handleNavScroll('about')}
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.2rem',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            transition: 'color 0.2s ease',
          }}
          className="scroll-indicator"
        >
          <span>SCROLL_DOWN</span>
          <ChevronDown size={16} />
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid-layout {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        .scroll-indicator:hover {
          color: var(--accent) !important;
        }
      `}</style>
    </section>
  );
};
