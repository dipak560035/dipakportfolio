
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