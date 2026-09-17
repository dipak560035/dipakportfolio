import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal, ChevronRight, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Services', href: '/services' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();
  const activeSection = location.pathname;

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: isScrolled
            ? 'rgba(7, 9, 14, 0.92)'
            : 'rgba(7, 9, 14, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1380px',
            margin: '0 auto',
            padding: isScrolled ? '0.75rem 1.5rem' : '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'padding 0.3s ease',
          }}
        >
          {/* Personal Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textDecoration: 'none',
              zIndex: 1001,
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                padding: '0.45rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.25)',
              }}
            >
              <Terminal size={18} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.5px',
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                }}
              >
                DIPAK<span style={{ color: 'var(--accent)' }}>.SAH</span>
              </span>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.65rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Full Stack Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div
            className="desktop-nav-container"
            style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}
          >
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                listStyle: 'none',
              }}
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href} style={{ position: 'relative' }}>
                    <Link
                      to={item.href}
                      onClick={handleNavClick}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.5rem 0.85rem',
                        borderRadius: '6px',
                        color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                        fontSize: '0.88rem',
                        fontWeight: isActive ? 600 : 500,
                        backgroundColor: isActive
                          ? 'rgba(6, 182, 212, 0.08)'
                          : 'transparent',
                        transition: 'all 0.2s ease',
                      }}
                      className="nav-link-hover"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Right Action Icons & Admin Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              {/* Admin Portal Shortcut Link */}
              <Link
                to="/admin/login"
                title="Admin Messages Portal"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.65rem',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: activeSection.startsWith('/admin') ? 'var(--accent)' : 'var(--text-muted)',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--card-border)',
                  transition: 'all 0.2s ease',
                }}
                className="admin-shortcut-btn"
              >
                <ShieldCheck size={14} />
                <span>Admin</span>
              </Link>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle Dark/Light Theme"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '8px',
                  padding: '0.45rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                }}
                className="theme-toggle-btn"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Social Links */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  paddingLeft: '0.6rem',
                  borderLeft: '1px solid var(--card-border)',
                }}
              >
                <a
                  href="https://github.com/dipak560035"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  style={{ color: 'var(--text-secondary)', display: 'flex', transition: 'color 0.2s ease' }}
                  className="social-nav-link"
                >
                  <FaGithub size={17} />
                </a>
                <a
                  href="https://linkedin.com/in/dipak-sah-bab95a202"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{ color: 'var(--text-secondary)', display: 'flex', transition: 'color 0.2s ease' }}
                  className="social-nav-link"
                >
                  <FaLinkedin size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Mobile Menu"
            className="mobile-menu-toggle"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              padding: '0.4rem',
              display: 'none',
            }}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Top Scroll Progress Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, var(--primary), var(--accent))',
            transformOrigin: '0%',
            transform: `scaleX(${scrollProgress / 100})`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(4px)',
                zIndex: 998,
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(82%, 320px)',
                backgroundColor: 'var(--bg-primary)',
                borderLeft: '1px solid var(--card-border)',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 999,
                padding: '5rem 1.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p
                  className="font-mono"
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                  }}
                >
                  // Navigation Menu
                </p>
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={handleNavClick}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        borderRadius: '8px',
                        color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                        backgroundColor: isActive
                          ? 'rgba(6, 182, 212, 0.1)'
                          : 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid',
                        borderColor: isActive
                          ? 'rgba(6, 182, 212, 0.25)'
                          : 'transparent',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>{item.label}</span>
                      <ChevronRight size={16} opacity={isActive ? 1 : 0.4} />
                    </Link>
                  );
                })}

                <Link
                  to="/admin/login"
                  onClick={handleNavClick}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    color: 'var(--accent)',
                    backgroundColor: 'rgba(6, 182, 212, 0.05)',
                    border: '1px solid rgba(6, 182, 212, 0.15)',
                    fontSize: '0.9rem',
                    fontFamily: 'var(--font-mono)',
                    marginTop: '0.5rem',
                  }}
                >
                  <ShieldCheck size={16} />
                  <span>Admin Dashboard</span>
                </Link>
              </div>

              <div
                style={{
                  borderTop: '1px solid var(--card-border)',
                  paddingTop: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a
                    href="https://github.com/dipak560035"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/dipak-sah-bab95a202"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
                <button
                  type="button"
                  onClick={toggleTheme}
                  style={{
                    padding: '0.4rem 0.8rem',
                    borderRadius: '6px',
                    border: '1px solid var(--card-border)',
                    background: 'transparent',
                    color: 'var(--text-secondary)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
                  <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link-hover:hover {
          color: var(--text-primary) !important;
          background-color: rgba(255, 255, 255, 0.05) !important;
        }

        .admin-shortcut-btn:hover {
          color: var(--accent) !important;
          border-color: rgba(6, 182, 212, 0.3) !important;
          background-color: rgba(6, 182, 212, 0.08) !important;
        }

        .social-nav-link:hover {
          color: var(--accent) !important;
        }

        .theme-toggle-btn:hover {
          color: var(--accent) !important;
          border-color: rgba(6, 182, 212, 0.3) !important;
        }

        @media (max-width: 991px) {
          .desktop-nav-container {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};