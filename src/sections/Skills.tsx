import React from 'react';
import { Layout, Server, Database, Hammer, Cpu, Terminal, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  tag: string;
}

interface SkillCategory {
  title: string;
  categoryTag: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  color: string;
}

export const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Engineering',
      categoryTag: 'UI / UX LAYER',
      icon: <Layout size={18} />,
      color: 'var(--primary)',
      skills: [
        { name: 'React.js', tag: 'Core Web Library' },
        { name: 'Next.js', tag: 'SSR & App Router' },
        { name: 'TypeScript', tag: 'Static Typing' },
        { name: 'JavaScript', tag: 'ES6+ Logic' },
        { name: 'Tailwind CSS', tag: 'Utility Styling' },
        { name: 'HTML5 & CSS3', tag: 'Semantic Layout' },
      ],
    },
    {
      title: 'Backend Engineering',
      categoryTag: 'SERVER & APIS',
      icon: <Server size={18} />,
      color: 'var(--secondary)',
      skills: [
        { name: 'Node.js', tag: 'Runtime Engine' },
        { name: 'Express.js', tag: 'API Framework' },
        { name: 'REST APIs', tag: 'Endpoint Design' },
        { name: 'Socket.io', tag: 'Real-Time Protocol' },
      ],
    },
    {
      title: 'Database Architecture',
      categoryTag: 'PERSISTENCE',
      icon: <Database size={18} />,
      color: 'var(--accent)',
      skills: [
        { name: 'MongoDB', tag: 'NoSQL Document Store' },
        { name: 'PostgreSQL', tag: 'Relational Database' },
        { name: 'SQL & NoSQL Schemas', tag: 'Data Modeling' },
      ],
    },
    {
      title: 'Tools & DevOps',
      categoryTag: 'DEVELOPMENT WORKFLOW',
      icon: <Hammer size={18} />,
      color: '#E11D48',
      skills: [
        { name: 'Git & GitHub', tag: 'Version Control' },
        { name: 'VS Code', tag: 'IDE Environment' },
        { name: 'Postman', tag: 'API Testing' },
        { name: 'Docker (Basics)', tag: 'Containerization' },
      ],
    },
    {
      title: 'Core Specialties',
      categoryTag: 'ENGINEERING PRACTICES',
      icon: <Cpu size={18} />,
      color: '#10B981',
      skills: [
        { name: 'Full-Stack Web Development', tag: 'End-to-End' },
        { name: 'Responsive Web Design', tag: 'Cross-Device' },
        { name: 'Performance Optimization', tag: 'Lighthouse / Vitals' },
        { name: 'Clean Architecture', tag: 'Modular Design' },
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
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">
            <Terminal size={14} /> // 02. Technical Stack
          </span>
          <h2 className="section-title">
            Technical <span>Capabilities</span>
          </h2>
          <p className="section-subtitle">
            Curated list of frameworks, databases, and tooling used to engineer production web applications.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                backgroundColor: 'rgba(15, 22, 35, 0.85)',
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--card-border)',
                  paddingBottom: '0.85rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--card-border)',
                      padding: '0.5rem',
                      borderRadius: '8px',
                      color: category.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {category.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {category.title}
                  </h3>
                </div>

                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  {category.categoryTag}
                </span>
              </div>

              {/* Technical Skill Badges & Modules */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="skill-item-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(7, 9, 14, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.04)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Sparkles size={13} color={category.color} opacity={0.8} />
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className="font-mono"
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-item-card:hover {
          border-color: rgba(6, 182, 212, 0.3) !important;
          background-color: rgba(17, 22, 34, 0.9) !important;
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
};
