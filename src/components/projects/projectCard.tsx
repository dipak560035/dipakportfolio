// import React from 'react';
// import { ExternalLink, Sparkles } from 'lucide-react';

// export interface Project {
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   githubUrl: string;
//   demoUrl: string;
//   stats: {
//     label: string;
//     value: string;
//   }[];
//   isFeatured?: boolean;
// }

// interface ProjectCardProps {
//   project: Project;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
//   return (
//     <div className="glass-card reveal featured-project-card grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-lg">
//       {/* Project Image */}
//       <div className="relative min-h-[260px] bg-bg-tertiary overflow-hidden">
//         <img
//           src={project.image}
//           alt={project.title}
//           loading="lazy"
//           className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//         />

//         {project.isFeatured && (
//           <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-md uppercase tracking-wide">
//             <Sparkles size={14} />
//             Featured Project
//           </div>
//         )}
//       </div>

//       {/* Project Content */}
//       <div className="p-10 flex flex-col gap-5 justify-between">
//         <div>
//           <h3 className="text-2xl font-extrabold font-display mb-3">
//             {project.title}
//           </h3>
//           <p className="text-secondary text-sm leading-7">
//             {project.description}
//           </p>
//         </div>

//         {/* Tech Stack */}
//         <div className="flex flex-wrap gap-2">
//           {project.tags.map((tag) => (
//             <span
//               key={tag}
//               className="bg-white/5 border border-card text-secondary px-2 py-1 rounded-md text-xs font-medium"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Stats */}
//         <div
//           className={`grid grid-cols-${project.stats.length} gap-4 border-y border-card py-4`}
//         >
//           {project.stats.map((stat) => (
//             <div key={stat.label} className="text-center">
//               <p className="text-muted text-xs font-semibold uppercase">
//                 {stat.label}
//               </p>
//               <p className="text-primary text-lg font-bold mt-1">
//                 {stat.value}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-4 mt-2">
//           <a
//             href={project.githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={`View ${project.title} on GitHub`}
//             className="btn btn-secondary flex-1"
//           >
//             GitHub Repository
//           </a>
//           <a
//             href={project.demoUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label={`View live demo of ${project.title}`}
//             className="btn btn-primary flex-1 flex items-center justify-center gap-2"
//           >
//             <ExternalLink size={18} />
//             Live Demonstration
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
