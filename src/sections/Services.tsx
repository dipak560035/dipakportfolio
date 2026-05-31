import React from 'react';
import { Code, Globe, Cpu, Database, Server, Smartphone, Zap, RefreshCw, Layers, Wrench } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: <Layers size={24} />,
      title: 'Full Stack Web Development',
      description: 'Building end-to-end web applications with scalable architectures, smooth user interfaces, and modular code structures.',
    },
    {
      icon: <Code size={24} />,
      title: 'MERN Stack Development',
      description: 'Developing high-performance, database-driven web solutions using MongoDB, Express.js, React, and Node.js.',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Frontend Development',
      description: 'Creating interactive, accessible, and fast frontends with modern Javascript frameworks, React, and custom styling systems.',
    },
    {
      icon: <Server size={24} />,
      title: 'Backend API Development',
      description: 'Architecting robust RESTful API endpoints, handling authentication, routing, webhooks, and complex server processes.',
    },
    {
      icon: <Globe size={24} />,
      title: 'Next.js Development',
      description: 'Leveraging Server-Side Rendering (SSR), Static Site Generation (SSG), and API routes for SEO-optimal speed and performance.',
    },
    {
      icon: <Database size={24} />,
      title: 'Database Integration',
      description: 'Designing transactional relational databases with PostgreSQL or highly scalable NoSQL document models with MongoDB.',
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Responsive Web Design',
      description: 'Crafting interfaces that scale seamlessly across device layouts including desktops, tablets, and mobile devices.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Real-Time App Development',
      description: 'Creating live, stateful interactive applications like chat services or dynamic boards utilizing Socket.io.',
    },
    {
      icon: <Cpu size={24} />,
      title: 'Website Optimization',
      description: 'Improving site speed, reducing load-times, optimizing image sizing, caching, and tuning Core Web Vitals score.',
    },
    {
      icon: <Wrench size={24} />,
      title: 'Website Maintenance',
      description: 'Providing version upgrades, code refactoring, package auditing, database backups, and security patching services.',
    },
  ];

  return (
    <section
      id="services"
      style={{
        position: 'relative',
        padding: '100px 0',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">Services</span>
          <h2 className="section-title">
            What I <span>Provide</span>
          </h2>
          <p className="section-subtitle">
            Providing professional engineering and developer services to turn your conceptual digital designs into production-ready platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card reveal"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              {/* Service Icon */}
              <div
                style={{
                  padding: '0.75rem',
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.08)',
                  color: 'var(--primary)',
                  border: '1px solid rgba(59, 130, 246, 0.15)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 10px var(--glow-color)',
                }}
              >
                {service.icon}
              </div>

              {/* Service Title */}
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  marginTop: '0.5rem',
                }}
              >
                {service.title}
              </h3>

              {/* Service Description */}
              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
