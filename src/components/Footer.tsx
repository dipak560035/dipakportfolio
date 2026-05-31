import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--card-border)',
        padding: '3rem 2rem 2rem 2rem',
        zIndex: 1,
        transition: 'background-color var(--transition-normal), border-color var(--transition-normal)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        {/* Footer Top */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 4px 12px rgba(var(--primary-rgb), 0.2)',
            }}
          >
            DS
          </div>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              textAlign: 'center',
              maxWidth: '400px',
            }}
          >
            Building high-performance, scalable web platforms and solving real-world challenges through code.
          </p>
        </div>

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
          }}
        >
          <a
            href="https://github.com/dipak560035"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="social-footer-btn"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/dipak-sah-bab95a202"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="social-footer-btn"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a href="mailto:dipaksah2070@gmail.com" aria-label="Send Email" className="social-footer-btn">
            <Mail size={20} />
          </a>
        </div>

        {/* Quick Nav Links */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem 2rem',
          }}
        >
          <a href="#home" className="footer-link">
            Home
          </a>
          <a href="#about" className="footer-link">
            About
          </a>
          <a href="#skills" className="footer-link">
            Skills
          </a>
          <a href="#services" className="footer-link">
            Services
          </a>
          <a href="#projects" className="footer-link">
            Projects
          </a>
          <a href="#contact" className="footer-link">
            Contact
          </a>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: '1px',
            background: 'var(--card-border)',
          }}
        />

        {/* Copyright */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
          }}
          className="footer-bottom-row"
        >
          <p>© {currentYear} Dipak Sah. All rights reserved.</p>
          <p>Designed & Engineered with ❤️ in Nepal</p>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(var(--primary-rgb), 0.3)',
          opacity: showScrollTop ? 1 : 0,
          transform: `translateY(${showScrollTop ? 0 : 20}px)`,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: showScrollTop ? 'auto' : 'none',
          zIndex: 900,
        }}
        className="scroll-to-top-btn"
      >
        <ArrowUp size={20} />
      </button>

      <style>{`
        .social-footer-btn {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: var(--bg-tertiary);
          border: 1px solid var(--card-border);
          display: flex;
          alignItems: center;
          justifyContent: center;
          color: var(--text-secondary);
          transition: var(--transition-normal);
        }
        .social-footer-btn:hover {
          color: white;
          background: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.25);
        }
        .footer-link {
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--primary);
        }
        @media (min-width: 768px) {
          .footer-bottom-row {
            flex-direction: row !important;
          }
        }
        .scroll-to-top-btn:hover {
          background-color: var(--secondary) !important;
          transform: translateY(-3px) scale(1.05) !important;
        }
      `}</style>
    </footer>
  );
};
