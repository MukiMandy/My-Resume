import React, { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isClicked = false;
    let animFrameId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Instant precision tracking for center dot
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isClicked ? 0.6 : isHovered ? 1.4 : 1})`;
    };

    const onMouseDown = () => {
      isClicked = true;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(0.6)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(0.85)`;
    };

    const onMouseUp = () => {
      isClicked = false;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.4 : 1})`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const interactiveEl = target.closest && target.closest('button, a, input, textarea, select, [role="button"], .cursor-pointer');
      
      const nextHoverState = Boolean(interactiveEl);
      if (nextHoverState !== isHovered) {
        isHovered = nextHoverState;
        if (isHovered) {
          ring.classList.add('cursor-hover');
        } else {
          ring.classList.remove('cursor-hover');
        }
      }
    };

    // Smooth trailing loop (60-120fps hardware accelerated)
    const renderLoop = () => {
      // Linear interpolation for smooth trailing without sticking
      const ease = 0.2;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      const scale = isClicked ? 0.85 : isHovered ? 1.5 : 1;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;

      animFrameId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    animFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Precision Lead Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-emerald-600 pointer-events-none transition-transform duration-75 will-change-transform shadow-sm"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />

      {/* Fluid Trailing Glow Ring (No edge snapping or sticking) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-emerald-500/40 bg-emerald-500/10 pointer-events-none transition-colors duration-200 will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </div>
  );
};
