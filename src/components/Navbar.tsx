import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';
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
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  const location = useLocation();
  const activeSection = location.pathname;

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const defaultTheme = savedTheme || 'dark';
    setTheme(defaultTheme);
    document.documentElement.setAttribute('data-theme', defaultTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
    // Smooth scroll back to top of route
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.1 }}
      className="glass-panel"
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        width: '90%',
        maxWidth: '1200px',
        borderRadius: '16px',
        zIndex: 1000,
        padding: isScrolled ? '0.75rem 1.5rem' : '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'padding var(--transition-normal), background-color var(--transition-normal), border-color var(--transition-normal)',
      }}
    >
      {/* Brand Logo */}
      <Link
        to="/"
        onClick={handleNavClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '1.25rem',
          fontWeight: 800,
          fontFamily: 'var(--font-display)',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
            padding: '0.4rem',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <Terminal size={18} />
        </div>
        <span style={{ letterSpacing: '1px' }}>
          DIPAK<span style={{ color: 'var(--accent)' }}>.SAH</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            listStyle: 'none',
          }}
          className="desktop-links"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={handleNavClick}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  position: 'relative',
                  padding: '0.25rem 0',
                  color: activeSection === item.href ? 'var(--text-primary)' : 'var(--text-secondary)',
                }}
              >
                {item.label}
                {/* Active Indicator Underline - Smooth sliding spring animation */}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="activeNavbarUnderline"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '0',
                      width: '100%',
                      height: '2px',
                      background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                      borderRadius: '2px',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.4rem',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition-fast)',
          }}
          className="theme-toggle-btn"
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-tertiary)')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile Hamburguer Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0.4rem',
            borderRadius: '8px',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="glass-panel"
            style={{
              position: 'absolute',
              top: 'calc(100% + 10px)',
              left: 0,
              width: '100%',
              borderRadius: '16px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 999,
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={handleNavClick}
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      display: 'block',
                      padding: '0.5rem 0',
                      color: activeSection === item.href ? 'var(--primary)' : 'var(--text-secondary)',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline styles for media queries */}
      <style>{`
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .mobile-toggle {
          display: flex;
        }

        @media (max-width: 991px) {
          .desktop-links {
            display: none;
          }
        }

        @media (min-width: 992px) {
          .mobile-toggle {
            display: none;
          }
        }
      `}</style>
    </motion.nav>
  );
};
