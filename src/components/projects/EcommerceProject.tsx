// import React from 'react';
// import { ExternalLink, Sparkles } from 'lucide-react';

// export const EcommerceProject: React.FC = () => {
//   const projects = [
//     {
//       title: 'MERN E-Commerce Platform',
//       description: 'Full-featured online store with secure authentication & admin capabilities. A complete e-commerce solution with product management, shopping cart, order processing, and admin dashboard for seamless store management.',
//       image: '/assets/ecommerce.png',
//       tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
//       githubFrontendUrl: 'https://github.com/dipak560035/MernFrontened/tree/figma-design',
//       githubBackendUrl: 'https://github.com/dipak560035/rtk-query/tree/figma-backend',
//       demoUrl: 'https://mern-frontened.vercel.app/',
//       isFeatured: true,
//       stats: [
//         { label: 'Response Time', value: '< 120ms' },
//         { label: 'Database', value: 'MongoDB' },
//         { label: 'Auth', value: 'JWT Secure' },
//       ],
//       keyFeatures: [
//         'JWT-based Authentication & Authorization',
//         'Product CRUD + Search + Filters',
//         'Shopping Cart & Order Management',
//         'Admin Dashboard (add/edit products)',
//         'Responsive UI with Tailwind CSS'
//       ]
//     },
//   ];

//   const placeholders = [
//     {
//       title: 'AI-Powered Recommendation Engine',
//       description: 'Smart product recommendation system using machine learning algorithms to suggest products based on user behavior and purchase history.',
//       tags: ['Python', 'TensorFlow', 'React.js', 'FastAPI'],
//     },
//     {
//       title: 'Multi-Vendor Marketplace',
//       description: 'Advanced marketplace platform allowing multiple vendors to sell products with individual dashboards and commission management.',
//       tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe'],
//     },
//   ];

//   return (
//     <section
//       id="ecommerce-project"
//       style={{
//         position: 'relative',
//         padding: '100px 0',
//         zIndex: 1,
//         backgroundColor: 'var(--bg-secondary)',
//         transition: 'background-color var(--transition-normal)',
//       }}
//     >
//       <div className="container">
//         {/* Section Header */}
//         <div className="section-header reveal">
//           <span className="section-tag">E-Commerce</span>
//           <h2 className="section-title">
//             MERN Stack <span>Marketplace</span>
//           </h2>
//           <p className="section-subtitle">
//             A complete full-stack e-commerce solution with admin capabilities.
//           </p>
//         </div>

//         {/* Featured Projects Grid */}
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '3rem',
//             marginBottom: '3rem',
//           }}
//         >
//           {projects.map((project, idx) => (
//             <div
//               key={idx}
//               className="glass-card reveal featured-project-card"
//               style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr',
//                 borderRadius: '20px',
//                 overflow: 'hidden',
//                 boxShadow: 'var(--shadow-lg)',
//               }}
//             >
//               {/* Left Column: Image Container */}
//               <div
//                 style={{
//                   position: 'relative',
//                   minHeight: '260px',
//                   backgroundColor: 'var(--bg-tertiary)',
//                   overflow: 'hidden',
//                 }}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     transition: 'transform var(--transition-slow)',
//                   }}
//                   className="project-img-zoom"
//                   onError={(e) => {
//                     e.currentTarget.src = 'https://plus.unsplash.com/premium_photo-1682410455752-1007e8cea553?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvbW1lcmNlJTIwd2Vic2l0ZSUyMGZvciUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
//                   }}
//                 />
//                 <div
//                   style={{
//                     position: 'absolute',
//                     top: '15px',
//                     left: '15px',
//                     backgroundColor: 'rgba(59, 130, 246, 0.95)',
//                     color: 'white',
//                     padding: '0.4rem 0.8rem',
//                     borderRadius: '6px',
//                     fontSize: '0.75rem',
//                     fontWeight: 700,
//                     letterSpacing: '0.05em',
//                     textTransform: 'uppercase',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '0.4rem',
//                     boxShadow: '0 4px 10px rgba(59,130,246,0.3)',
//                   }}
//                 >
//                   <Sparkles size={14} /> Full-Stack Project
//                 </div>
//               </div>

//               {/* Right Column: Text & Content */}
//               <div
//                 style={{
//                   padding: '2.5rem',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '1.25rem',
//                   justifyContent: 'space-between',
//                 }}
//               >
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
//                   <h3
//                     style={{
//                       fontSize: '1.75rem',
//                       fontWeight: 800,
//                       fontFamily: 'var(--font-display)',
//                     }}
//                   >
//                     🛒 {project.title}
//                   </h3>
//                   <p
//                     style={{
//                       color: 'var(--text-secondary)',
//                       fontSize: '0.98rem',
//                       lineHeight: '1.7',
//                     }}
//                   >
//                     {project.description}
//                   </p>
//                 </div>

//                 {/* Key Features Section */}
//                 <div
//                   style={{
//                     backgroundColor: 'rgba(59, 130, 246, 0.05)',
//                     borderRadius: '12px',
//                     padding: '1rem 1.2rem',
//                     border: '1px solid rgba(59, 130, 246, 0.1)',
//                   }}
//                 >
//                   <h4
//                     style={{
//                       fontSize: '0.9rem',
//                       fontWeight: 700,
//                       marginBottom: '0.75rem',
//                       color: 'var(--primary)',
//                       textTransform: 'uppercase',
//                       letterSpacing: '0.05em',
//                     }}
//                   >
//                     Key Features
//                   </h4>
//                   <ul
//                     style={{
//                       margin: 0,
//                       paddingLeft: '1.2rem',
//                       color: 'var(--text-secondary)',
//                       fontSize: '0.9rem',
//                       lineHeight: '1.8',
//                     }}
//                   >
//                     {project.keyFeatures.map((feature, fIdx) => (
//                       <li key={fIdx}>{feature}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Tech Badges */}
//                 <div
//                   style={{
//                     display: 'flex',
//                     flexWrap: 'wrap',
//                     gap: '0.5rem',
//                     margin: '0.5rem 0',
//                   }}
//                 >
//                   {project.tags.map((tag, tIdx) => (
//                     <span
//                       key={tIdx}
//                       style={{
//                         backgroundColor: 'rgba(255, 255, 255, 0.03)',
//                         border: '1px solid var(--card-border)',
//                         color: 'var(--text-secondary)',
//                         padding: '0.25rem 0.6rem',
//                         borderRadius: '6px',
//                         fontSize: '0.8rem',
//                         fontWeight: 500,
//                       }}
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Stats Row */}
//                 <div
//                   style={{
//                     display: 'grid',
//                     gridTemplateColumns: 'repeat(3, 1fr)',
//                     gap: '1rem',
//                     borderTop: '1px solid var(--card-border)',
//                     borderBottom: '1px solid var(--card-border)',
//                     padding: '1rem 0',
//                   }}
//                 >
//                   {project.stats.map((stat, sIdx) => (
//                     <div key={sIdx} style={{ textAlign: 'center' }}>
//                       <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
//                         {stat.label}
//                       </p>
//                       <p style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 700, marginTop: '0.15rem' }}>
//                         {stat.value}
//                       </p>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Links Buttons */}
//                 <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
//                   <a
//                     href={project.demoUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-primary"
//                     style={{ flex: 1, minWidth: '160px' }}
//                   >
//                     <ExternalLink size={18} /> 🔗 Live Demo
//                   </a>
//                   <a
//                     href={project.githubFrontendUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-secondary"
//                     style={{ flex: 1, minWidth: '160px' }}
//                   >
//                     <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
//                       <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//                       <path d="M9 18c-4.51 2-5-2-7-2" />
//                     </svg> Frontend Repo
//                   </a>
//                   <a
//                     href={project.githubBackendUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-secondary"
//                     style={{ flex: 1, minWidth: '160px' }}
//                   >
//                     <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
//                       <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//                       <path d="M9 18c-4.51 2-5-2-7-2" />
//                     </svg> Backend Repo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Coming Soon Placeholders */}
//         <h3
//           style={{
//             fontSize: '1.3rem',
//             fontWeight: 700,
//             fontFamily: 'var(--font-display)',
//             marginBottom: '1.5rem',
//             color: 'var(--text-primary)',
//           }}
//           className="reveal"
//         >
//           Pipeline & Future Deployments
//         </h3>

//         <div
//           style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//             gap: '1.5rem',
//           }}
//         >
//           {placeholders.map((item, idx) => (
//             <div
//               key={idx}
//               className="glass-card reveal"
//               style={{
//                 padding: '2rem',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '1rem',
//                 borderStyle: 'dashed',
//                 position: 'relative',
//               }}
//             >
//               {/* Construction status */}
//               <div
//                 style={{
//                   alignSelf: 'flex-start',
//                   backgroundColor: 'rgba(139, 92, 246, 0.08)',
//                   color: 'var(--secondary)',
//                   border: '1px solid rgba(139, 92, 246, 0.15)',
//                   fontSize: '0.7rem',
//                   fontWeight: 700,
//                   textTransform: 'uppercase',
//                   padding: '0.2rem 0.5rem',
//                   borderRadius: '4px',
//                 }}
//               >
//                 In Development Pipeline
//               </div>

//               <h4
//                 style={{
//                   fontSize: '1.2rem',
//                   fontWeight: 700,
//                   fontFamily: 'var(--font-display)',
//                 }}
//               >
//                 {item.title}
//               </h4>

//               <p
//                 style={{
//                   fontSize: '0.9rem',
//                   color: 'var(--text-secondary)',
//                   lineHeight: '1.6',
//                   flexGrow: 1,
//                 }}
//               >
//                 {item.description}
//               </p>

//               {/* Tags */}
//               <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
//                 {item.tags.map((tag, tIdx) => (
//                   <span
//                     key={tIdx}
//                     style={{
//                       fontSize: '0.75rem',
//                       color: 'var(--text-muted)',
//                       backgroundColor: 'rgba(255,255,255,0.02)',
//                       padding: '0.15rem 0.4rem',
//                       borderRadius: '4px',
//                       border: '1px solid var(--card-border)',
//                     }}
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .featured-project-card {
//           border-radius: 20px;
//           overflow: hidden;
//         }

//         .featured-project-card:hover .project-img-zoom {
//           transform: scale(1.03);
//         }

//         @media (min-width: 992px) {
//           .featured-project-card {
//             grid-template-columns: 1fr 1fr !important;
//           }
//         }

//         @media (max-width: 768px) {
//           .btn {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default EcommerceProject;
























import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

export const EcommerceProject: React.FC = () => {
  const projects = [
    {
      title: 'MERN E-Commerce Platform',
      description: 'Full-featured online store with secure authentication & admin capabilities. A complete e-commerce solution with product management, shopping cart, order processing, and admin dashboard for seamless store management.',
      image: '/assets/ecommerce.png',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      githubFrontendUrl: 'https://github.com/dipak560035/MernFrontened/tree/figma-design',
      githubBackendUrl: 'https://github.com/dipak560035/rtk-query/tree/figma-backend',
      demoUrl: 'https://mern-frontened.vercel.app/',
      isFeatured: true,
      stats: [
        { label: 'Response Time', value: '< 120ms' },
        { label: 'Database', value: 'MongoDB' },
        { label: 'Auth', value: 'JWT Secure' },
      ],
    },
  ];

  const placeholders = [
    {
      title: 'AI-Powered Recommendation Engine',
      description: 'Smart product recommendation system using machine learning algorithms to suggest products based on user behavior and purchase history.',
      tags: ['Python', 'TensorFlow', 'React.js', 'FastAPI'],
    },
    {
      title: 'Multi-Vendor Marketplace',
      description: 'Advanced marketplace platform allowing multiple vendors to sell products with individual dashboards and commission management.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe'],
    },
  ];

  return (
    <div className="ecommerce-project-wrapper">
      {/* Featured Projects Grid */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          marginBottom: '3rem',
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="glass-card reveal featured-project-card"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* Left Column: Image Container */}
            <div
              style={{
                position: 'relative',
                minHeight: '260px', // Same as Gantabya
                backgroundColor: 'var(--bg-tertiary)',
                overflow: 'hidden',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform var(--transition-slow)',
                }}
                className="project-img-zoom"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1613906800797-d5d4fb2f7bbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  backgroundColor: 'rgba(59, 130, 246, 0.95)',
                  color: 'white',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 4px 10px rgba(59,130,246,0.3)',
                }}
              >
                <Sparkles size={14} /> Full-Stack Project
              </div>
            </div>

            {/* Right Column: Text & Content */}
            <div
              style={{
                padding: '2.5rem', // Same padding as Gantabya
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem', // Same gap as Gantabya
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h3
                  style={{
                    fontSize: '1.75rem', // Same font size as Gantabya
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  🛒 {project.title}
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.98rem', // Same font size as Gantabya
                    lineHeight: '1.7',
                  }}
                >
                  {project.description}
                </p>
              </div>

              {/* Key Features Section - Compact version to match size */}
              <div
                style={{
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  borderRadius: '12px',
                  padding: '0.8rem 1rem', // Reduced padding to match card size
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                }}
              >
                <h4
                  style={{
                    fontSize: '0.8rem', // Slightly smaller to save space
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Key Features
                </h4>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: '1.2rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem', // Slightly smaller to fit
                    lineHeight: '1.6',
                  }}
                >
                  <li>JWT-based Authentication & Authorization</li>
                  <li>Product CRUD + Search + Filters</li>
                  <li>Shopping Cart & Order Management</li>
                  <li>Admin Dashboard (add/edit products)</li>
                  <li>Responsive UI with Tailwind CSS</li>
                </ul>
              </div>

              {/* Tech Badges */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  margin: '0.5rem 0',
                }}
              >
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--card-border)',
                      color: 'var(--text-secondary)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats Row - Same as Gantabya */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  borderTop: '1px solid var(--card-border)',
                  borderBottom: '1px solid var(--card-border)',
                  padding: '1rem 0',
                }}
              >
                {project.stats.map((stat, sIdx) => (
                  <div key={sIdx} style={{ textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                      {stat.label}
                    </p>
                    <p style={{ color: 'var(--text-primary)', fontSize: '1rem', fontWeight: 700, marginTop: '0.15rem' }}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Links Buttons - Same as Gantabya but with 3 buttons */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a
                  href={project.githubFrontendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg> Frontend
                </a>
                <a
                  href={project.githubBackendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg> Backend
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Placeholders - Same as Gantabya */}
      <h3
        style={{
          fontSize: '1.3rem',
          fontWeight: 700,
          fontFamily: 'var(--font-display)',
          marginBottom: '1.5rem',
          marginTop: '2rem',
          color: 'var(--text-primary)',
        }}
        className="reveal"
      >
        Pipeline & Future Deployments
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {placeholders.map((item, idx) => (
          <div
            key={idx}
            className="glass-card reveal"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              borderStyle: 'dashed',
              position: 'relative',
            }}
          >
            {/* Construction status */}
            <div
              style={{
                alignSelf: 'flex-start',
                backgroundColor: 'rgba(139, 92, 246, 0.08)',
                color: 'var(--secondary)',
                border: '1px solid rgba(139, 92, 246, 0.15)',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
              }}
            >
              In Development Pipeline
            </div>

            <h4
              style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                fontFamily: 'var(--font-display)',
              }}
            >
              {item.title}
            </h4>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                flexGrow: 1,
              }}
            >
              {item.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    padding: '0.15rem 0.4rem',
                    borderRadius: '4px',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .ecommerce-project-wrapper {
          width: 100%;
        }
        
        .featured-project-card {
          border-radius: 20px;
          overflow: hidden;
        }

        .featured-project-card:hover .project-img-zoom {
          transform: scale(1.03);
        }

        @media (min-width: 992px) {
          .featured-project-card {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default EcommerceProject;