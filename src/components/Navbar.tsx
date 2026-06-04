

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal, ChevronDown, Code, User, Briefcase, Cpu, Layers, Zap, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  subItems?: { label: string; href: string; icon?: React.ElementType }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: User },
  { label: 'About', href: '/about', icon: Code },
  { label: 'Skills', href: '/skills', icon: Cpu },
  { 
    label: 'Services', 
    href: '/services', 
    icon: Layers,
    // subItems: [
    //   { label: 'Web Development', href: '/services/web-dev', icon: Code },
    //   { label: 'Mobile Apps', href: '/services/mobile-apps', icon: Zap },
    //   { label: 'Cloud Solutions', href: '/services/cloud', icon: Cpu },
    // ]
  },
  { label: 'Experience', href: '/experience', icon: Briefcase },
  { label: 'Projects', href: '/projects', icon: Layers },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();
 
  const activeSection = location.pathname;

  // Initialize theme - Fixed: Used lazy initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const defaultTheme = savedTheme || 'dark';
    if (defaultTheme !== theme) {
      setTheme(defaultTheme);
    }
    document.documentElement.setAttribute('data-theme', defaultTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Handle scroll effects
  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrolledDown(currentScrollY > lastScrollY && currentScrollY > 100);
        setLastScrollY(currentScrollY);
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);

  // Handle scroll progress
  useEffect(() => {
    const handleScrollProgress = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScrollProgress);
    return () => window.removeEventListener('scroll', handleScrollProgress);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleNavClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // const handleNavigation = (path: string) => {
  //   navigate(path);
  //   if (isOpen) {
  //     setIsOpen(false);
  //   }
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  const handleDropdownHover = (label: string | null) => {
    if (window.innerWidth >= 992) {
      setActiveDropdown(label);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.1 }}
        className={`navbar-container ${isScrolled ? 'scrolled' : ''} ${scrolledDown ? 'scrolled-down' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          className="navbar-inner"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: isScrolled ? '0.75rem 2rem' : '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'padding 0.3s ease',
          }}
        >
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="brand-logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              zIndex: 1001,
            }}
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                padding: '0.5rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 4px 12px rgba(var(--primary-rgb), 0.2)',
              }}
            >
              <Terminal size={20} />
            </motion.div>
            <div>
              <span style={{ 
                fontSize: '1.25rem', 
                fontWeight: 800, 
                fontFamily: 'var(--font-display)',
                letterSpacing: '1px',
              }}>
                DIPAK<span style={{ color: 'var(--accent)' }}>.SAH</span>
              </span>
              <span style={{ 
                fontSize: '0.7rem', 
                color: 'var(--text-muted)', 
                display: 'block',
                lineHeight: 1.2
              }}>
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className={`nav-item ${activeSection === item.href ? 'active' : ''} ${item.subItems ? 'has-dropdown' : ''}`}
                  onMouseEnter={() => handleDropdownHover(item.label)}
                  onMouseLeave={() => handleDropdownHover(null)}
                >
                  <Link
                    to={item.href}
                    className="nav-link"
                    onClick={handleNavClick}
                  >
                    <item.icon size={16} />
                    <span>{item.label}</span>
                    {item.subItems && <ChevronDown size={14} className="dropdown-icon" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subItems && activeDropdown === item.label && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="dropdown-menu"
                    >
                      {item.subItems.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            to={subItem.href}
                            className="dropdown-link"
                            onClick={handleNavClick}
                          >
                            {subItem.icon && <subItem.icon size={14} />}
                            <span>{subItem.label}</span>
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              {/* Theme Toggle */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="theme-toggle"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              {/* Social Links Desktop */}
              <div className="social-links">
                <a href="https://github.com/dipak560035" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={16} />
                </a>
                <a href="https://linkedin.com/in/dipak-sah-bab95a202" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={16} />
                </a>
              
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              className="mobile-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="scroll-progress"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, var(--primary), var(--accent))',
            transformOrigin: '0%',
            transform: `scaleX(${scrollProgress / 100})`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-overlay"
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(4px)',
                zIndex: 999,
              }}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="mobile-menu"
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                width: 'min(80%, 320px)',
                background: 'var(--bg-primary)',
                boxShadow: 'var(--shadow-xl)',
                zIndex: 1000,
                padding: '5rem 1.5rem 2rem',
                overflowY: 'auto',
              }}
            >
              <ul className="mobile-nav-links">
                {navItems.map((item) => (
                  <li key={item.href} className="mobile-nav-item">
                    <Link
                      to={item.href}
                      className={`mobile-nav-link ${activeSection === item.href ? 'active' : ''}`}
                      onClick={handleNavClick}
                    >
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                    {item.subItems && (
                      <ul className="mobile-submenu">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              to={subItem.href}
                              className="mobile-submenu-link"
                              onClick={handleNavClick}
                            >
                              {subItem.icon && <subItem.icon size={14} />}
                              <span>{subItem.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              
              <div className="mobile-footer">
                <div className="mobile-social-links">
                  <a href="https://github.com/dipak560035" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://linkedin.com/in/dipak-sah-bab95a202" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} />
                  </a>
                  {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={20} />
                  </a> */}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-container {
          background: rgba(var(--bg-primary-rgb), 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(var(--card-border-rgb), 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .navbar-container.scrolled {
          background: rgba(var(--bg-primary-rgb), 0.95);
          backdrop-filter: blur(16px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .navbar-container.scrolled-down {
          transform: translateY(-100%);
        }

        .navbar-container.scrolled-down:hover {
          transform: translateY(0);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
          position: relative;
          text-decoration: none;
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(var(--primary-rgb), 0.08);
        }

        .nav-item.active .nav-link {
          color: var(--primary);
          background: rgba(var(--primary-rgb), 0.1);
        }

        .nav-item.active .nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 1rem;
          right: 1rem;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          border-radius: 2px;
        }

        .dropdown-icon {
          transition: transform 0.2s ease;
        }

        .nav-item:hover .dropdown-icon {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 220px;
          background: var(--bg-primary);
          border: 1px solid var(--card-border);
          border-radius: 12px;
          padding: 0.5rem;
          margin-top: 0.5rem;
          box-shadow: var(--shadow-lg);
          list-style: none;
          animation: dropdownFade 0.2s ease;
        }

        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 0.85rem;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .dropdown-link:hover {
          background: rgba(var(--primary-rgb), 0.08);
          color: var(--primary);
          transform: translateX(4px);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle {
          background: rgba(var(--bg-tertiary-rgb), 0.5);
          border: 1px solid var(--card-border);
          border-radius: 8px;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .theme-toggle:hover {
          background: rgba(var(--primary-rgb), 0.1);
          color: var(--primary);
          transform: rotate(15deg);
        }

        .social-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0 0.5rem;
          border-left: 1px solid var(--card-border);
          border-right: 1px solid var(--card-border);
        }

        .social-links a {
          color: var(--text-secondary);
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
        }

        .social-links a:hover {
          color: var(--primary);
          transform: translateY(-2px);
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          padding: 0.5rem;
        }

        /* Mobile Styles */
        @media (max-width: 991px) {
          .nav-links,
          .social-links {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }

          .navbar-inner {
            padding: 0.75rem 1rem !important;
          }
        }

        .mobile-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          color: var(--text-secondary);
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.2s ease;
          background: rgba(var(--bg-tertiary-rgb), 0.3);
          text-decoration: none;
        }

        .mobile-nav-link.active {
          color: var(--primary);
          background: rgba(var(--primary-rgb), 0.1);
        }

        .mobile-submenu {
          list-style: none;
          padding-left: 2.5rem;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-submenu-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .mobile-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--card-border);
        }

        .mobile-social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .mobile-social-links a {
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .mobile-social-links a:hover {
          color: var(--primary);
          transform: translateY(-2px);
        }

        .scroll-progress {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transform-origin: 0%;
          z-index: 1001;
        }
      `}</style>
    </>
  );
};