import React, { useEffect, useRef } from 'react';

export const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particles Configuration (Soft Emerald / Mint Specks)
    const particleCount = Math.min(Math.floor(window.innerWidth / 24), 50);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.45 + 0.15,
      });
    }

    let mouse = { x: null, y: null, radius: 140 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Gentle Mouse interaction
        if (mouse.x !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 1.2;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${p.alpha * 0.5})`;
        ctx.fill();

        // Connect nearby particles with delicate green web
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 100) * 0.14;
            ctx.strokeStyle = `rgba(22, 163, 74, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas for dynamic green sparkles & constellation */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Floating Animated Botanical Mesh Gradient Orbs */}
      <div className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-40 bg-emerald-200 animate-blob" />
      <div className="absolute top-1/4 -right-32 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-35 bg-green-200 animate-blob [animation-delay:4s]" />
      <div className="absolute top-2/3 left-1/4 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-30 bg-lime-100 animate-blob [animation-delay:8s]" />

      {/* Subtle Pattern Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80" />
      <div className="absolute top-10 right-10 w-48 h-48 bg-dot-pattern opacity-40" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-dot-pattern opacity-40" />
    </div>
  );
};
