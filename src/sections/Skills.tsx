import React from 'react';
import { Layout, Server, Database, Hammer, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: <Layout size={20} />,
      color: 'var(--primary)',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend Engineering',
      icon: <Server size={20} />,
      color: 'var(--secondary)',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Socket.io', level: 75 },
      ],
    },
    {
      title: 'Databases',
      icon: <Database size={20} />,
      color: 'var(--accent)',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'SQL & NoSQL schemas', level: 80 },
      ],
    },
    {
      title: 'Tools & Workflows',
      icon: <Hammer size={20} />,
      color: '#E11D48', // Rose color for variety
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 88 },
        { name: 'Docker (Basics)', level: 60 },
      ],
    },
    {
      title: 'Core Specialties',
      icon: <Cpu size={20} />,
      color: '#10B981', // Emerald
      skills: [
        { name: 'Full-Stack Development', level: 90 },
        { name: 'Responsive Web Design', level: 95 },
        { name: 'Performance Optimization', level: 80 },
        { name: 'Clean Architecture', level: 82 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        position: 'relative',
        padding: '100px 0',
        zIndex: 1,
        backgroundColor: 'var(--bg-secondary)',
        transition: 'background-color var(--transition-normal)',
      }}
    >
      <div className="blur-blob blob-3" />

      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">Skills & Stack</span>
          <h2 className="section-title">
            Technical <span>Capabilities</span>
          </h2>
          <p className="section-subtitle">
            An overview of the technologies, libraries, databases, and development workflows I use to build scalable products.
          </p>
        </div>

        {/* Skill Card Grid */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 80 }}
              className="glass-card"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--card-border)',
                    padding: '0.6rem',
                    borderRadius: '10px',
                    color: category.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                  {category.title}
                </h3>
              </div>

              {/* Progress Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                    >
                      <span style={{ color: 'var(--text-secondary)' }}>{skill.name}</span>
                      <span style={{ color: category.color, fontWeight: 600 }}>{skill.level}%</span>
                    </div>

                    {/* Progress Background */}
                    <div
                      style={{
                        height: '6px',
                        width: '100%',
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      {/* Active Progress - Animates when scrolled into view */}
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: sIdx * 0.05 }}
                        style={{
                          height: '100%',
                          background: `linear-gradient(90deg, ${category.color}, var(--accent))`,
                          borderRadius: '3px',
                          boxShadow: `0 0 8px ${category.color}`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
