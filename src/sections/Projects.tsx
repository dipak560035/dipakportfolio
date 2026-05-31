// import React from 'react';
// import { ExternalLink, Sparkles } from 'lucide-react';

// interface Project {
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   githubUrl: string;
//   demoUrl: string;
//   stats: { label: string; value: string }[];
//   isFeatured: boolean;
// }

// export const Projects: React.FC = () => {
//   const projects: Project[] = [
//     {
//       title: 'Gantabya Mobility',
//       description: 'A modern EV mobility platform developed for an emerging Nepalese startup preparing for future launch. The platform focuses on scalable architecture, modern user experience, responsive design, and efficient digital mobility solutions.',
//       image: '/assets/gantabya.png',
//       tags: ['Next.js', 'TypeScript', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
//       githubUrl: 'https://github.com/dipak560035',
//       demoUrl: 'https://github.com/dipak560035',
//       isFeatured: true,
//       stats: [
//         { label: 'Latency', value: '< 80ms' },
//         { label: 'PageSpeed', value: '98/100' },
//         { label: 'Architecture', value: 'Modular Monolith' },
//       ],
//     },
//   ];

//   const placeholders = [
//     {
//       title: 'Real-Time Sync Collaboration Engine',
//       description: 'An interactive collaboration workspace allowing multi-user drawing, document writing, and code editor synchronization.',
//       tags: ['React.js', 'Socket.io', 'Node.js', 'PostgreSQL'],
//     },
//     {
//       title: 'Decentralized Microservices Webhook Broker',
//       description: 'A high-throughput message queue broker providing secure transaction receipts and routing logs.',
//       tags: ['Go / Golang', 'Express.js', 'Redis', 'Docker'],
//     },
//   ];

//   return (
//     <section
//       id="projects"
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
//           <span className="section-tag">Portfolio</span>
//           <h2 className="section-title">
//             Featured <span>Projects</span>
//           </h2>
//           <p className="section-subtitle">
//             A selection of platforms and products I've engineered.
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
//                   <Sparkles size={14} /> Featured Project
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
//                     {project.title}
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
//                 <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
//                   <a
//                     href='https://github.com/dipak560035/gantabya-mobility'
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-secondary"
//                     style={{ flex: 1 }}
//                   >
//                     <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
//                       <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
//                       <path d="M9 18c-4.51 2-5-2-7-2" />
//                     </svg> GitHub Repository
//                   </a>
//                   <a
//                     href='https://gantabya-mobility.vercel.app'
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-primary"
//                     style={{ flex: 1 }}
//                   >
//                     <ExternalLink size={18} /> Live Demonstration
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
          
//       `}</style>
//     </section>
//   );
// };





















































import EcommerceProject from '../components/projects/EcommerceProject';
import { GantabyaProject } from '../components/projects/GantabyaProject';

export const Projects = () => {
  return (
    <section 
      id="projects"
      style={{
        position: 'relative',
        padding: '120px 0 80px 0', // Increased top padding to avoid navbar overlap
        zIndex: 1,
        backgroundColor: 'var(--bg-secondary)',
        minHeight: '100vh',
      }}
    >
      <div className="container">
        {/* Add scroll margin top to account for fixed navbar */}
        <div style={{ scrollMarginTop: '80px' }}>
          <div className="section-header reveal">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">
              Featured <span>Projects</span>
            </h2>
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
      </div>
    </section>
  );
};






















// import EcommerceProject from '../components/projects/EcommerceProject';
// import { GantabyaProject } from '../components/projects/GantabyaProject';

// export const Projects = () => {
//   return (
//     <section 
//       id="projects"
//       style={{
//         position: 'relative',
//         padding: '120px 0 80px 0', // Added top padding to avoid navbar overlap
//         zIndex: 1,
//         backgroundColor: 'var(--bg-secondary)',
//         minHeight: '100vh',
//       }}
//     >
//       <div className="container">
//         <div
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '3rem',
//           }}
//         >
//           <GantabyaProject />
//           <EcommerceProject />
//         </div>
//       </div>
//     </section>
//   );
// };