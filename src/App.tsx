import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Services } from './sections/Services';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Terminal } from 'lucide-react';

// HomePage component - Shows Hero, About, Projects, and Contact sections
const HomePage: React.FC = () => {
  const location = useLocation();
  
  // Trigger scroll reveal animations hook - re-run on route change
  useScrollReveal([location.pathname]);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Trigger scroll reveal animations hook
  useScrollReveal([location.pathname]);

  useEffect(() => {
    // Initial loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#07090E',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          zIndex: 9999,
          color: '#FFFFFF',
        }}
      >
        {/* Terminal Icon Loader */}
        <div
          style={{
            background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
            padding: '1.25rem',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 35px rgba(6, 182, 212, 0.4)',
            animation: 'pulse-glow-loader 1.4s infinite ease-in-out',
          }}
        >
          <Terminal size={38} />
        </div>

        {/* Loading details */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 800,
              letterSpacing: '1px',
            }}
          >
            DIPAK<span style={{ color: '#06B6D4' }}>.SAH</span>
          </p>
          <p
            className="font-mono"
            style={{
              color: '#64748B',
              fontSize: '0.78rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
            }}
          >
            Compilers & Architectures Loading...
          </p>
        </div>

        <style>{`
          @keyframes pulse-glow-loader {
            0%, 100% { transform: scale(1); box-shadow: 0 0 25px rgba(59, 130, 246, 0.3); }
            50% { transform: scale(1.06); box-shadow: 0 0 45px rgba(6, 182, 212, 0.5); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      {/* Background Interactive Particles */}
      <ParticleBackground />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Portfolio Main Routing Sections */}
      <main style={{ minHeight: '80vh', paddingBottom: '60px' }}>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* About Route */}
          <Route
            path="/about"
            element={
              <>
                <About />
                <Education />
                <Achievements />
              </>
            }
          />
          
          {/* Skills Route */}
          <Route path="/skills" element={<Skills />} />
          
          {/* Services Route */}
          <Route path="/services" element={<Services />} />
          
          {/* Experience Route */}
          <Route path="/experience" element={<Experience />} />
          
          {/* Projects Route */}
          <Route path="/projects" element={<Projects />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Navigate to="/admin/messages" replace />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/messages" element={<AdminDashboard />} />
          
          {/* Catch-all fallback navigation to Home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Web Footer info */}
      <Footer />
    </>
  );
};

export default App;