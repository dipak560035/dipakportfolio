import React from 'react';
import { GantabyaProject } from '../components/projects/GantabyaProject';
import EcommerceProject from '../components/projects/EcommerceProject';
import { Terminal } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        padding: '110px 0 80px 0',
        zIndex: 1,
        backgroundColor: 'var(--bg-secondary)',
        minHeight: '100vh',
      }}
    >
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">
            <Terminal size={14} /> // 04. Featured Systems
          </span>
          <h2 className="section-title">
            Production <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Full-stack web applications engineered with modern technologies and clean architecture.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
            marginTop: '2rem',
          }}
        >
          <GantabyaProject />
          <EcommerceProject />
        </div>
      </div>
    </section>
  );
};