import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import { ParticleBackground } from './components/ParticleBackground';
// import { CustomCursor } from './components/CustomCursor';
// import { Navbar } from './components/Navbar';
// import { Footer } from './components/Footer';
// import { RecruiterWidget } from './components/RecruiterWidget';
// import { Hero } from './sections/Hero';
// import { About } from './sections/About';
// import { Skills } from './sections/Skills';
// import { Services } from './sections/Services';
// import { Experience } from './sections/Experience';
// import { Education } from './sections/Education';
// import { Projects } from './sections/Projects';
// import { Achievements } from './sections/Achievements';
// import { Contact } from './sections/Contact';
// import { useScrollReveal } from './hooks/useScrollReveal';
import { Contact, Terminal } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Projects } from '../sections/Projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ParticleBackground } from './ParticleBackground';
import { Education } from '../sections/Education';
import { Achievements } from '../sections/Achievements';
import { Skills } from '../sections/Skills';
import { Services } from '../sections/Services';
import { Experience } from '../sections/Experience';

// Create HomePage component with multiple sections
const HomePage: React.FC = () => {
  const location = useLocation();
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

  // Log current location for debugging and scroll to top on route change
  useEffect(() => {
    console.log('Current route changed to:', location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Trigger scroll reveal animations hook - re-run on route change
  useScrollReveal([location.pathname]);

  useEffect(() => {
    // Premium loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

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
          backgroundColor: '#05050A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          zIndex: 9999,
          color: '#FFFFFF',
        }}
      >
        {/* Glowing Terminal Icon */}
        <div
          style={{
            background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
            padding: '1.25rem',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)',
            animation: 'pulse-glow-loader 1.5s infinite ease-in-out',
          }}
        >
          <Terminal size={40} />
        </div>

        {/* Loading status details */}
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
            style={{
              color: '#64748B',
              fontSize: '0.78rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            Compilers & Architectures Loading...
          </p>
        </div>

        <style>{`
          @keyframes pulse-glow-loader {
            0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(59, 130, 246, 0.3); }
            50% { transform: scale(1.08); box-shadow: 0 0 50px rgba(139, 92, 246, 0.6); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      {/* Background Interactive Particles */}
      <ParticleBackground />

      {/* Lag-free Dual Ring Custom Cursor */}
      {/* <CustomCursor /> */}

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Portfolio Main Routing Sections */}
      <main style={{ minHeight: '80vh', paddingBottom: '60px' }}>
        <Routes>
          {/* Home Route - NOW SHOWS Hero, About, Projects, Contact */}
          <Route path="/" element={<HomePage />} />
          
          {/* About Route (aggregating biography, academic timeline & licensed engineering achievements) */}
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
          
          {/* Catch-all fallback navigation to Home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Floating Recruiter Message Center Widget */}
      {/* <RecruiterWidget /> */}

      {/* Web Footer info */}
      <Footer />
    </>
  );
  
};

export default App;