import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if it's touch device
    const touchDevice = window.matchMedia('(pointer: coarse)').matches;
    setIsMobile(touchDevice);

    if (touchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    // Listen to mouse moving
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Listen to all hoverable items
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.glass-card') ||
        target.closest('.interactive-item') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        window.getComputedStyle(target).cursor === 'pointer';

      setHovered(!!isClickable);
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  useEffect(() => {
    if (isMobile || hidden) return;

    let animationFrameId: number;

    const updateTrail = () => {
      setTrail((prev) => {
        // Linear interpolation for smooth trailing lag effect
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position, hidden, isMobile]);

  // Hide on mobile or when cursor leaves viewport
  if (isMobile || hidden) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: hovered ? 'var(--accent)' : 'var(--primary)',
          borderRadius: '50%',
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0) scale(${hovered ? 0.5 : 1})`,
          transition: 'transform 0.15s ease-out, background-color 0.15s ease',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      {/* Outer Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '32px',
          height: '32px',
          border: `1.5px solid ${hovered ? 'var(--accent)' : 'var(--primary)'}`,
          borderRadius: '50%',
          backgroundColor: hovered ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
          transform: `translate3d(${trail.x - 16}px, ${trail.y - 16}px, 0) scale(${hovered ? 1.6 : 1})`,
          transition: 'transform 0.1s ease-out, background-color 0.2s ease, border-color 0.2s ease',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
    </>
  );
};
