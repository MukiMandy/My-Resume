// ==========================================================================
// Sri Mukesh B - UX/UI Portfolio (Vanilla JS Engine)
// Connected with ASP.NET Core Backend
// ==========================================================================

// Confetti Utility (Lightweight Canvas Particle Explosion)
function fireConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#16A34A', '#22C55E', '#86EFAC', '#15803D', '#F59E0B'];
  const particles = [];
  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.6,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.8) * 18,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 10
    });
  }

  let animationId;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.vx *= 0.98;
      p.rotation += p.vRot;
      p.alpha -= 0.012;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive) {
      animationId = requestAnimationFrame(update);
    } else {
      cancelAnimationFrame(animationId);
      canvas.remove();
    }
  }
  update();
}

// Interactive Constellation Canvas
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const count = Math.min(Math.floor(window.innerWidth / 26), 45);
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.15,
    });
  }

  let mouse = { x: null, y: null, radius: 130 };
  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, idx) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

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

      for (let j = idx + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(22, 163, 74, ${(1 - dist / 90) * 0.12})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(render);
  }
  render();
}

// Custom Physics Cursor
function initCustomCursor() {
  const dot = document.querySelector('.custom-cursor-dot');
  const ring = document.querySelector('.custom-cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;

  window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function loop() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(loop);
  }
  loop();

  document.querySelectorAll('button, a, input, textarea, .interactive').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });
}

// Rotating Role Typer
function initRoleTyper() {
  const roleEl = document.getElementById('hero-rotating-role');
  if (!roleEl) return;
  const roles = [
    "UX/UI Designer",
    "Product Designer",
    "Design System Specialist",
    "UX Researcher",
    "Mentor"
  ];
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % roles.length;
    roleEl.style.opacity = 0;
    setTimeout(() => {
      roleEl.textContent = roles[idx];
      roleEl.style.opacity = 1;
    }, 250);
  }, 3000);
}

// Case Study Projects Data & Modal
const caseStudies = {
  "dance-chero": {
    title: "Dance Chero – All-in-One Dance Learning App",
    subtitle: "Interactive mobile experience for dance enthusiasts and studio coaches",
    category: "Mobile App",
    metric: "+35% Engagement",
    problem: "Dance learners often struggle with disjointed video tutorials, lack of personalized progress tracking, and zero feedback loops from professional choreographers.",
    research: "Conducted 1-on-1 interviews with 25+ aspiring dancers and studio instructors to identify key drop-off points in digital dance practice routines.",
    solution: "Created an intuitive 4-step learning flow: Discover -> Master Choreography -> Video Rehearsal Recording -> AI & Mentor Feedback loop.",
    impact: "Boosted user retention by 35% during initial prototype user testing, with 90% positive feedback on the visual rehearsal player."
  },
  "linkedin-resume": {
    title: "LinkedIn Resume Access – Hiring Flow Enhancement",
    subtitle: "Streamlining candidate discovery and profile resume interactions",
    category: "Product Enhancement",
    metric: "-25% Search Time",
    problem: "Recruiters spent excessive clicks navigating external links and multi-page menus to review freshers' resumes, leading to high drop-offs.",
    research: "Analyzed recruiter task efficiency metrics and candidate application funnels to map the cognitive load of resume verification.",
    solution: "Integrated an embedded hover-preview drawer and standardized PDF parsing badge on profile headers for instantaneous review.",
    impact: "Reduced recruiter resume retrieval time by 25% and increased profile view-to-interview contact rate for fresh graduates."
  },
  "uxify": {
    title: "Uxify – UI/UX Learning App for Beginners",
    subtitle: "Bite-sized design education, practical tool workouts & interview readiness",
    category: "EdTech Mobile App",
    metric: "+40% Satisfaction",
    problem: "Newcomers in UI/UX feel overwhelmed by dense theoretical textbooks and lack hands-on, micro-sized interactive sandboxes.",
    research: "Surveyed 200+ design bootcamp students to assess primary hurdles in transitioning theory into portfolio-ready design execution.",
    solution: "Gamified learning paths divided into 5-minute interactive challenges, accompanied by Figma shortcut exercises and resume building wizards.",
    impact: "Achieved a 40% improvement in learning satisfaction score and 4.8/5 rating across 200+ beta testers."
  }
};

function openCaseStudy(id) {
  const data = caseStudies[id];
  if (!data) return;

  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-subtitle').textContent = data.subtitle;
  document.getElementById('modal-category').textContent = data.category;
  document.getElementById('modal-metric').textContent = data.metric;
  document.getElementById('modal-problem').textContent = data.problem;
  document.getElementById('modal-research').textContent = data.research;
  document.getElementById('modal-solution').textContent = data.solution;
  document.getElementById('modal-impact').textContent = data.impact;

  const modal = document.getElementById('case-study-modal');
  modal.classList.add('active');
}

function closeCaseStudy() {
  const modal = document.getElementById('case-study-modal');
  modal.classList.remove('active');
}

// Filter Projects
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Contact Form AJAX Handler (Connected with ASP.NET Core endpoint)
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('contact-success');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    fireConfetti();

    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      const data = await res.json();
      console.log('Contact response:', data);
    } catch (_) {
      // Offline fallback
    }

    form.style.display = 'none';
    if (successBox) successBox.style.display = 'block';
  });
}

// Copy Email Utility
function copyEmail() {
  navigator.clipboard.writeText('Srimukesh25@gmail.com');
  const btnText = document.getElementById('copy-email-text');
  if (btnText) {
    btnText.textContent = 'Email Copied!';
    setTimeout(() => {
      btnText.textContent = 'Copy Email';
    }, 2500);
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initCustomCursor();
  initRoleTyper();
  initProjectFilters();
  initContactForm();
});
