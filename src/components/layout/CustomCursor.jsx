import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || !target.tagName) {
        setIsHovered(false);
        return;
      }

      const isButton = target.tagName === 'BUTTON' || target.tagName === 'A';
      const closestButton = target.closest && (target.closest('button') || target.closest('a'));
      const hasRoleButton = target.getAttribute && target.getAttribute('role') === 'button';
      const hasCursorClass = target.classList && target.classList.contains && target.classList.contains('cursor-pointer');

      if (isButton || closestButton || hasRoleButton || hasCursorClass) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-emerald-600 rounded-full shadow-neon-green"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isClicked ? 0.6 : isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />

      {/* Trailing Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-emerald-500/40 bg-emerald-500/10 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 18),
          y: mousePosition.y - (isHovered ? 28 : 18),
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          borderColor: isHovered ? 'rgba(21, 128, 61, 0.8)' : 'rgba(34, 197, 94, 0.35)',
          backgroundColor: isHovered ? 'rgba(34, 197, 94, 0.15)' : 'rgba(34, 197, 94, 0.05)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28, mass: 0.5 }}
      />
    </div>
  );
};
