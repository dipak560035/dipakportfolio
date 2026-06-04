
// import React, { useState, useEffect } from 'react';
// import { 
//   ArrowUp, 
//   Mail, 
//   MapPin, 
//   Phone, 
//   Calendar,
//   Heart,
//   Globe
// } from 'lucide-react';
// import { 
//   FaGithub, 
//   FaLinkedin, 
//   // FaTwitter,
//   FaCode,
//   FaBriefcase,
//   FaUser,
//   FaBolt,
//   FaLayerGroup,
//   FaEnvelope
// } from 'react-icons/fa';

// export const Footer: React.FC = () => {
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 400);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   const handleSubscribe = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       alert(`Thank you for subscribing! You'll receive updates at ${email}`);
//       setEmail('');
//     }
//   };

//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { name: 'Home', href: '#home', icon: FaUser },
//     { name: 'About', href: '#about', icon: FaBriefcase },
//     { name: 'Skills', href: '#skills', icon: FaBolt },
//     { name: 'Services', href: '#services', icon: FaLayerGroup },
//     { name: 'Projects', href: '#projects', icon: FaCode },
//     { name: 'Contact', href: '#contact', icon: FaEnvelope },
//   ];

//   const contactInfo = [
//     { icon: MapPin, text: 'Kathmandu, Nepal' },
//     { icon: Mail, text: 'dipaksah2070@gmail.com' },
//     { icon: Phone, text: '+977 9805104098' },
//     { icon: Calendar, text: 'Available for work' },
//   ];

//   const socialLinks = [
//     { 
//       icon: FaGithub, 
//       href: 'https://github.com/dipak560035', 
//       label: 'GitHub',
//       hoverColor: '#6e5494'
//     },
//     { 
//       icon: FaLinkedin, 
//       href: 'https://linkedin.com/in/dipak-sah-bab95a202', 
//       label: 'LinkedIn',
//       hoverColor: '#0077b5'
//     },
//     // { 
//     //   icon: FaTwitter, 
//     //   href: 'https://twitter.com/', 
//     //   label: 'Twitter',
//     //   hoverColor: '#1DA1F2'
//     // },
//     { 
//       icon: Mail, 
//       href: 'mailto:dipaksah2070@gmail.com', 
//       label: 'Email',
//       hoverColor: '#EA4335'
//     },
//   ];

//   return (
//     <>
//       <footer
//         style={{
//           position: 'relative',
//           backgroundColor: '#0a0a0a',
//           borderTop: '1px solid rgba(255, 255, 255, 0.1)',
//           padding: '4rem 2rem 2rem 2rem',
//           marginTop: 'auto',
//         }}
//       >
//         {/* Animated Gradient Border */}
//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             height: '3px',
//             background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)',
//             backgroundSize: '200% 100%',
//             animation: 'gradientMove 3s ease infinite',
//           }}
//         />

//         <div
//           style={{
//             maxWidth: '1200px',
//             margin: '0 auto',
//           }}
//         >
//           {/* Main Footer Grid */}
//           <div
//             style={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//               gap: '2.5rem',
//               marginBottom: '2rem',
//             }}
//           >
//             {/* Brand Section */}
//             <div>
//               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
//                 <div
//                   style={{
//                     fontFamily: 'Arial, sans-serif',
//                     fontSize: '1.5rem',
//                     fontWeight: 800,
//                     background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
//                     width: '48px',
//                     height: '48px',
//                     borderRadius: '12px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: 'white',
//                     boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
//                   }}
//                 >
//                   DS
//                 </div>
//                 <div>
//                   <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
//                     Dipak Sah
//                   </h3>
//                   <p style={{ fontSize: '0.8rem', color: '#3b82f6', margin: 0, fontWeight: 500 }}>
//                     Full Stack Developer
//                   </p>
//                 </div>
//               </div>
//               <p
//                 style={{
//                   color: '#9ca3af',
//                   fontSize: '0.9rem',
//                   lineHeight: '1.6',
//                   marginBottom: '1.5rem',
//                 }}
//               >
//                 Building high-performance, scalable web platforms and solving real-world challenges through innovative code solutions.
//               </p>
//               <div style={{ display: 'flex', gap: '0.75rem' }}>
//                 {socialLinks.map((social, idx) => {
//                   const Icon = social.icon;
//                   return (
//                     <a
//                       key={idx}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label={social.label}
//                       style={{
//                         width: '38px',
//                         height: '38px',
//                         borderRadius: '10px',
//                         background: hoveredIcon === social.label ? social.hoverColor : '#1f1f1f',
//                         border: '1px solid rgba(255, 255, 255, 0.1)',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         color: hoveredIcon === social.label ? 'white' : '#9ca3af',
//                         transition: 'all 0.3s ease',
//                         cursor: 'pointer',
//                       }}
//                       onMouseEnter={() => setHoveredIcon(social.label)}
//                       onMouseLeave={() => setHoveredIcon(null)}
//                     >
//                       <Icon size={18} />
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Quick Links Section */}
//             <div>
//               <h4
//                 style={{
//                   fontSize: '1.1rem',
//                   fontWeight: 600,
//                   color: '#ffffff',
//                   marginBottom: '1.25rem',
//                   position: 'relative',
//                   display: 'inline-block',
//                 }}
//               >
//                 Quick Links
//                 <span
//                   style={{
//                     position: 'absolute',
//                     bottom: '-6px',
//                     left: 0,
//                     width: '40px',
//                     height: '2px',
//                     background: '#3b82f6',
//                     borderRadius: '2px',
//                   }}
//                 />
//               </h4>
//               <div
//                 style={{
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(2, 1fr)',
//                   gap: '0.75rem',
//                 }}
//               >
//                 {quickLinks.map((link, idx) => {
//                   const Icon = link.icon;
//                   return (
//                     <a
//                       key={idx}
//                       href={link.href}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '0.5rem',
//                         fontSize: '0.9rem',
//                         color: '#9ca3af',
//                         textDecoration: 'none',
//                         transition: 'all 0.2s ease',
//                         padding: '0.25rem 0',
//                       }}
//                       className="footer-link"
//                     >
//                       <Icon size={14} />
//                       <span>{link.name}</span>
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Contact Info Section */}
//             <div>
//               <h4
//                 style={{
//                   fontSize: '1.1rem',
//                   fontWeight: 600,
//                   color: '#ffffff',
//                   marginBottom: '1.25rem',
//                   position: 'relative',
//                   display: 'inline-block',
//                 }}
//               >
//                 Contact Info
//                 <span
//                   style={{
//                     position: 'absolute',
//                     bottom: '-6px',
//                     left: 0,
//                     width: '40px',
//                     height: '2px',
//                     background: '#3b82f6',
//                     borderRadius: '2px',
//                   }}
//                 />
//               </h4>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//                 {contactInfo.map((info, idx) => {
//                   const Icon = info.icon;
//                   return (
//                     <div
//                       key={idx}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         gap: '0.75rem',
//                         fontSize: '0.9rem',
//                         color: '#9ca3af',
//                       }}
//                     >
//                       <div
//                         style={{
//                           width: '32px',
//                           height: '32px',
//                           borderRadius: '8px',
//                           background: '#1f1f1f',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           color: '#3b82f6',
//                         }}
//                       >
//                         <Icon size={16} />
//                       </div>
//                       <span>{info.text}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* Newsletter Section */}
//             <div>
//               <h4
//                 style={{
//                   fontSize: '1.1rem',
//                   fontWeight: 600,
//                   color: '#ffffff',
//                   marginBottom: '1.25rem',
//                   position: 'relative',
//                   display: 'inline-block',
//                 }}
//               >
//                 Stay Updated
//                 <span
//                   style={{
//                     position: 'absolute',
//                     bottom: '-6px',
//                     left: 0,
//                     width: '40px',
//                     height: '2px',
//                     background: '#3b82f6',
//                     borderRadius: '2px',
//                   }}
//                 />
//               </h4>
//               <p
//                 style={{
//                   fontSize: '0.9rem',
//                   color: '#9ca3af',
//                   lineHeight: '1.5',
//                   marginBottom: '1rem',
//                 }}
//               >
//                 Get the latest updates about my projects and tech insights.
//               </p>
//               <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Your email address"
//                   required
//                   style={{
//                     flex: 1,
//                     padding: '0.7rem 1rem',
//                     borderRadius: '8px',
//                     border: '1px solid rgba(255, 255, 255, 0.1)',
//                     background: '#1f1f1f',
//                     color: '#ffffff',
//                     fontSize: '0.85rem',
//                     outline: 'none',
//                   }}
//                 />
//                 <button
//                   type="submit"
//                   style={{
//                     padding: '0.7rem 1.25rem',
//                     borderRadius: '8px',
//                     border: 'none',
//                     background: '#3b82f6',
//                     color: 'white',
//                     fontSize: '0.85rem',
//                     fontWeight: 600,
//                     cursor: 'pointer',
//                     transition: 'all 0.2s ease',
//                   }}
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Divider */}
//           <div
//             style={{
//               width: '100%',
//               height: '1px',
//               background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
//               margin: '1rem 0',
//             }}
//           />

//           {/* Copyright Section */}
//           <div
//             style={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               gap: '1rem',
//               color: '#6b7280',
//               fontSize: '0.85rem',
//             }}
//           >
//             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//               <span>© {currentYear} Dipak Sah.</span>
//               <span>All rights reserved.</span>
//             </div>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
//               <Heart size={14} style={{ color: '#ef4444' }} />
//               <span>Made with passion in Nepal</span>
//               <Globe size={14} />
//             </div>
//             <a
//               href="#"
//               style={{
//                 color: '#6b7280',
//                 textDecoration: 'none',
//                 transition: 'color 0.2s ease',
//               }}
//               className="footer-link"
//             >
//               Privacy Policy
//             </a>
//           </div>
//         </div>

//         {/* Scroll to Top Button */}
//         <button
//           onClick={scrollToTop}
//           aria-label="Scroll to top"
//           style={{
//             position: 'fixed',
//             bottom: '30px',
//             right: '30px',
//             backgroundColor: '#3b82f6',
//             color: 'white',
//             border: 'none',
//             borderRadius: '50%',
//             width: '45px',
//             height: '45px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             cursor: 'pointer',
//             boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
//             opacity: showScrollTop ? 1 : 0,
//             transform: `translateY(${showScrollTop ? 0 : 20}px)`,
//             transition: 'all 0.3s ease',
//             pointerEvents: showScrollTop ? 'auto' : 'none',
//             zIndex: 1000,
//           }}
//         >
//           <ArrowUp size={20} />
//         </button>
//       </footer>

//       <style>{`
//         @keyframes gradientMove {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         .footer-link {
//           position: relative;
//           text-decoration: none;
//           transition: all 0.2s ease;
//         }

//         .footer-link:hover {
//           color: #3b82f6 !important;
//           transform: translateX(3px);
//         }

//         button:hover {
//           transform: translateY(-2px);
//           background: #2563eb !important;
//         }

//         input:focus {
//           border-color: #3b82f6 !important;
//           box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
//         }

//         @media (max-width: 768px) {
//           footer {
//             padding: 2rem 1rem 1.5rem 1rem !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// };













import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Mail, 
  MapPin, 
  Phone, 
  Calendar,
  Heart,
  Globe
} from 'lucide-react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaCode,
  FaBriefcase,
  FaUser,
  FaBolt,
  FaLayerGroup,
  FaEnvelope
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Add navigate hook

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing! You'll receive updates at ${email}`);
      setEmail('');
    }
  };

  // Function to handle navigation
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  // Fixed quickLinks with proper routes (not anchor links)
  const quickLinks = [
    { name: 'Home', href: '/', icon: FaUser },
    { name: 'About', href: '/about', icon: FaBriefcase },
    { name: 'Skills', href: '/skills', icon: FaBolt },
    { name: 'Services', href: '/services', icon: FaLayerGroup }, // Fixed: Changed from #services to /services
    { name: 'Projects', href: '/projects', icon: FaCode }, // Fixed: Changed from #projects to /projects
    { name: 'Contact', href: '/contact', icon: FaEnvelope },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Kathmandu, Nepal' },
    { icon: Mail, text: 'dipaksah2070@gmail.com' },
    { icon: Phone, text: '+977 9805104098' },
    { icon: Calendar, text: 'Available for work' },
  ];

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/dipak560035', 
      label: 'GitHub',
      hoverColor: '#6e5494'
    },
    { 
      icon: FaLinkedin, 
      href: 'https://linkedin.com/in/dipak-sah-bab95a202', 
      label: 'LinkedIn',
      hoverColor: '#0077b5'
    },
    // { 
    //   icon: FaTwitter, 
    //   href: 'https://twitter.com/', 
    //   label: 'Twitter',
    //   hoverColor: '#1DA1F2'
    // },
    { 
      icon: Mail, 
      href: 'mailto:dipaksah2070@gmail.com', 
      label: 'Email',
      hoverColor: '#EA4335'
    },
  ];

  return (
    <>
      <footer
        style={{
          position: 'relative',
          backgroundColor: '#0a0a0a',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '4rem 2rem 2rem 2rem',
          marginTop: 'auto',
        }}
      >
        {/* Animated Gradient Border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)',
            backgroundSize: '200% 100%',
            animation: 'gradientMove 3s ease infinite',
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {/* Main Footer Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2.5rem',
              marginBottom: '2rem',
            }}
          >
            {/* Brand Section */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  DS
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                    Dipak Sah
                  </h3>
                  <p style={{ fontSize: '0.8rem', color: '#3b82f6', margin: 0, fontWeight: 500 }}>
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <p
                style={{
                  color: '#9ca3af',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                }}
              >
                Building high-performance, scalable web platforms and solving real-world challenges through innovative code solutions.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: hoveredIcon === social.label ? social.hoverColor : '#1f1f1f',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: hoveredIcon === social.label ? 'white' : '#9ca3af',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={() => setHoveredIcon(social.label)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '1.25rem',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                Quick Links
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: 0,
                    width: '40px',
                    height: '2px',
                    background: '#3b82f6',
                    borderRadius: '2px',
                  }}
                />
              </h4>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.75rem',
                }}
              >
                {quickLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleNavigation(link.href)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        color: '#9ca3af',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        padding: '0.25rem 0',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        width: '100%',
                        textAlign: 'left',
                      }}
                      className="footer-link"
                    >
                      <Icon size={14} />
                      <span>{link.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Contact Info Section */}
            <div>
              <h4
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '1.25rem',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                Contact Info
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: 0,
                    width: '40px',
                    height: '2px',
                    background: '#3b82f6',
                    borderRadius: '2px',
                  }}
                />
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontSize: '0.9rem',
                        color: '#9ca3af',
                      }}
                    >
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: '#1f1f1f',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#3b82f6',
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <span>{info.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Section */}
            <div>
              <h4
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '1.25rem',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                Stay Updated
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-6px',
                    left: 0,
                    width: '40px',
                    height: '2px',
                    background: '#3b82f6',
                    borderRadius: '2px',
                  }}
                />
              </h4>
              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#9ca3af',
                  lineHeight: '1.5',
                  marginBottom: '1rem',
                }}
              >
                Get the latest updates about my projects and tech insights.
              </p>
              <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    flex: 1,
                    padding: '0.7rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: '#1f1f1f',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '0.7rem 1.25rem',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#3b82f6',
                    color: 'white',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              margin: '1rem 0',
            }}
          />

          {/* Copyright Section */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              color: '#6b7280',
              fontSize: '0.85rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>© {currentYear} Dipak Sah.</span>
              <span>All rights reserved.</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Heart size={14} style={{ color: '#ef4444' }} />
              <span>Made with passion in Nepal</span>
              <Globe size={14} />
            </div>
            <button
              onClick={() => handleNavigation('/privacy')}
              style={{
                color: '#6b7280',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              className="footer-link"
            >
              Privacy Policy
            </button>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
            opacity: showScrollTop ? 1 : 0,
            transform: `translateY(${showScrollTop ? 0 : 20}px)`,
            transition: 'all 0.3s ease',
            pointerEvents: showScrollTop ? 'auto' : 'none',
            zIndex: 1000,
          }}
        >
          <ArrowUp size={20} />
        </button>
      </footer>

      <style>{`
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .footer-link {
          position: relative;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .footer-link:hover {
          color: #3b82f6 !important;
          transform: translateX(3px);
        }

        button:hover {
          transform: translateY(-2px);
        }

        input:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        @media (max-width: 768px) {
          footer {
            padding: 2rem 1rem 1.5rem 1rem !important;
          }
        }
      `}</style>
    </>
  );
};