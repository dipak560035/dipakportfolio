import React, { useState, useEffect } from 'react';
import { Mail, FileText, ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const roles = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'Computer Engineer',
  'Next.js Developer'
];

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: number;
    const fullText = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at the end
          timer = setTimeout(() => setIsDeleting(true), 2000) as unknown as number;
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

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

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = (element as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  } as const;

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 18, delay: 0.6 }
    }
  } as const;

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
      {/* Dynamic background blur elements */}
      <div className="blur-blob blob-1" />
      <div className="blur-blob blob-2" style={{ animationDelay: '-5s' }} />

      <div className="container">
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Hero Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Status Tag */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(59, 130, 246, 0.08)', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '0.5rem 1rem', borderRadius: '99px', alignSelf: 'flex-start' }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', boxShadow: '0 0 8px #10B981', animation: 'pulse-glow 2s infinite' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Open to New Opportunities</span>
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1
              variants={itemVariants}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: 1.1, fontFamily: 'var(--font-display)', fontWeight: 800 }}
            >
              Hi, I'm <br />
              <span className="text-gradient">Dipak Sah</span>
            </motion.h1>

            {/* Rotating Title */}
            <motion.h2
              variants={itemVariants}
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 600, color: 'var(--text-secondary)', height: '50px' }}
            >
              I am a <span className="cursor-blink" style={{ color: 'var(--primary)' }}>{currentText}</span>
            </motion.h2>

            {/* Paragraph Introduction */}
            <motion.p
              variants={itemVariants}
              style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '580px', lineHeight: '1.7' }}
            >
              Computer Science Engineer and Full Stack Developer specialized in building scalable, premium, and highly modern MERN Stack & Next.js web applications. I solve real-world problems through clean code and responsive engineering.
            </motion.p>

            {/* CTAs with hover physics */}
            <motion.div
              variants={itemVariants}
              className="hero-ctas"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}
            >
              
            <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn btn-primary"
            >
              View Projects <ArrowRight size={18} />
            </motion.button>
          </Link>

              
                <motion.a
                href="/Dipak_Sah_Resume.pdf"
                download
                className="btn btn-secondary"
                >
                <FileText size={18} />
                Download Resume
              </motion.a>
<Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleNavClick('#contact')}
                className="btn btn-accent"
              >
                Contact Me
              </motion.button>
</Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: '1.5rem' }}
            >
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>CONNECT:</span>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/dipak560035"
                target="_blank"
                rel="noopener noreferrer"
                className="social-hero-icon"
                aria-label="GitHub Profile"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/dipak-sah-bab95a202"
                target="_blank"
                rel="noopener noreferrer"
                className="social-hero-icon"
                aria-label="LinkedIn Profile"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:dipaksah2070@gmail.com"
                className="social-hero-icon"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Right Image (Profile Display) */}
          <motion.div
            variants={profileVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            <div className="profile-image-wrapper" style={{
              position: 'relative',
              width: 'min(360px, 80vw)',
              height: 'min(360px, 80vw)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 50%, var(--accent) 100%)',
              padding: '8px',
              animation: 'morphing-border 8s ease-in-out infinite, float 6s ease-in-out infinite',
              boxShadow: '0 20px 40px -10px rgba(var(--primary-rgb), 0.3)'
            }}>
              <img
                src="/assets/profile.png"
                alt="Dipak Sah profile headshot"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 'inherit',
                  backgroundColor: 'var(--bg-secondary)',
                }}
              />
            </div>

            {/* Floating Info badge cards */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, type: 'spring' }}
              className="glass-card floating-card-1"
              style={{ position: 'absolute', top: '10%', left: '0', padding: '0.75rem 1.25rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', transform: 'rotate(-5deg)', animation: 'float 5s infinite alternate ease-in-out' }}
            >
              <span style={{ fontSize: '1.5rem' }}>💻</span>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: 800, margin: 0 }}>Full-Stack</p>
                <p style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', margin: 0 }}>MERN / NextJS</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, type: 'spring' }}
              className="glass-card floating-card-2"
              style={{ position: 'absolute', bottom: '10%', right: '0', padding: '0.75rem 1.25rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', transform: 'rotate(5deg)', animation: 'float 7s infinite alternate-reverse ease-in-out' }}
            >
              <span style={{ fontSize: '1.5rem' }}>🎓</span>
              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: 800, margin: 0 }}>B.E. CSE</p>
                <p style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', margin: 0 }}>NEC Engineer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={() => handleNavClick('#about')}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            cursor: 'pointer',
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            transition: 'var(--transition-fast)',
          }}
          className="scroll-indicator"
        >
          <span>Scroll Down</span>
          <ChevronDown size={18} className="scroll-chevron-animation" />
        </div>
      </div>

      <style>{`
        .social-hero-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--card-border);
          display: flex;
          alignItems: center;
          justifyContent: center;
          color: var(--text-secondary);
          transition: var(--transition-normal);
        }
        .social-hero-icon:hover {
          color: white;
          background: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(var(--primary-rgb), 0.3);
        }
        
        @keyframes morphing-border {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }

        .scroll-chevron-animation {
          animation: bounce-chevron 2s infinite;
        }

        @keyframes bounce-chevron {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
          60% { transform: translateY(-3px); }
        }

        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
        
        .scroll-indicator:hover {
          color: var(--primary);
        }
      `}</style>
    </section>
  );
};
