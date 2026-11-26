// Translations (Default: English, Toggleable to Spanish)
const translations = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cv': 'View CV',
    'hero.status': 'Available for Full Stack roles & projects',
    'hero.greeting': "Hi, I'm",
    'hero.role': 'Computer Engineer · Full Stack Software Developer',
    'hero.desc':
      'I turn industrial workflows and business needs into fast, secure, and scalable web applications with <strong>React, Node.js, and SQL</strong>, accelerating every stage of the software lifecycle with modern <strong>AI tools like Google Antigravity</strong>.',
    'hero.ctaProjects': 'Explore Projects',
    'hero.ctaDrive': 'Certifications (Drive) ↗',
    'hero.metricNatulac': 'Industrial Experience',
    'hero.badgeTitle': 'Computer Engineer',
    'about.eyebrow': 'Who I am',
    'about.title': 'Solid engineering with a product mindset',
    'about.p1':
      'I\'m a <strong>Computer Engineer</strong> graduated from <strong>Universidad Valle del Momboy</strong>. I\'m passionate about building software that solves real-world problems and drives measurable operational impact.',
    'about.p2':
      'During my internship at <strong>Industrias Maros, C.A. (Natulac)</strong>, I designed and built an end-to-end web system to digitize and trace the dairy supply chain, integrating a Node.js/Express backend, relational databases (PostgreSQL/MySQL), a React/Vite frontend, and role-based access control (RBAC).',
    'about.p3':
      'Alongside strong software engineering fundamentals, I actively leverage <strong>agentic AI development tools such as Google Antigravity</strong> to speed up architecture, refactoring, documentation, and testing—delivering cleaner solutions faster.',
    'about.pillar1Title': 'End-to-End Full Stack',
    'about.pillar1Desc':
      'From relational SQL database design and secure REST APIs to responsive React interfaces and PWAs.',
    'about.pillar2Title': 'AI-Assisted Development',
    'about.pillar2Desc':
      'Strategic use of Google Antigravity and agentic AI workflows to boost velocity and code quality.',
    'about.pillar3Title': 'Industrial Digitization',
    'about.pillar3Desc':
      'Hands-on experience building batch traceability, auditing, and inventory systems for plant operations.',
    'about.pillar4Title': 'Security & Best Practices',
    'about.pillar4Desc':
      'JWT authentication, role-based access control (RBAC), MVC architecture, and maintainable code.',
    'skills.eyebrow': 'Tech Stack',
    'skills.title': 'Tools I build with',
    'skills.backendTitle': 'Backend & Security',
    'skills.mvc': 'MVC Architecture',
    'skills.dbTitle': 'Databases',
    'skills.dbModel': 'Relational Modeling',
    'skills.dbSql': 'SQL Queries',
    'skills.dbAudit': 'Batch Auditing',
    'skills.aiTitle': 'AI & Dev Productivity',
    'skills.aiAgents': 'Agentic AI Workflows',
    'skills.aiPrompt': 'Prompt Engineering',
    'skills.aiDev': 'AI-Assisted Development',
    'exp.eyebrow': 'Background',
    'exp.title': 'Work Experience & Education',
    'exp.workBadge': 'Work Experience',
    'exp.workDate': 'May 2026 – July 2026',
    'exp.workRole': 'Software Developer – IT Intern',
    'exp.workB1':
      'Designed and developed a comprehensive web system to manage reception, processing, and traceability across the dairy supply chain.',
    'exp.workB2':
      'Built a robust backend architecture with <strong>Node.js and Express</strong> connected to relational databases (<strong>PostgreSQL / MySQL</strong>) for real-time batch logging and auditing.',
    'exp.workB3':
      'Created fast, responsive interfaces with <strong>React and Vite</strong> tailored for daily plant floor operations.',
    'exp.workB4':
      'Integrated secure authentication and role-based access control (<strong>RBAC / JWT</strong>).',
    'exp.eduBadge': 'University Education',
    'exp.eduDate': 'Graduated',
    'exp.eduDegree': 'B.S. in Computer Engineering',
    'exp.eduB1':
      'Comprehensive training in software engineering, systems architecture, databases, networking, and web development.',
    'exp.eduB2':
      'Completed undergraduate thesis focused on developing practical software technology solutions.',
    'exp.eduB3':
      'Complementary foundation in technical support, structured cabling, and computer networks.',
    'exp.eduB4':
      '<strong>Languages:</strong> Spanish (Native) · English (A2–B1 · Technical reading &amp; comprehension).',
    'proj.eyebrow': 'GitHub Portfolio',
    'proj.title': 'Featured Projects',
    'proj.sub': 'A selection of real applications built and published on my GitHub account.',
    'proj.filterAll': 'All',
    'proj.p1Type': 'Full Stack · Agribusiness',
    'proj.p1Title': 'Café 5.0 Inventory System',
    'proj.p1Desc':
      'Full Stack platform managing end-to-end operations for a coffee production business: production tracking, real-time inventory, sales, and supplier management backed by SQL.',
    'proj.p2Title': 'Exchange Rate Difference Calculator',
    'proj.p2Desc':
      'Installable Progressive Web App (mobile & desktop) that calculates real-time bank FX purchases, card fees, and net returns when converting to USDT on Binance.',
    'proj.p3Type': 'Full Stack · MVC Architecture',
    'proj.p3Title': 'Student Management System',
    'proj.p3Desc':
      'Institutional web service structured with the MVC pattern (models, controllers, routes, and middlewares) to manage academic student records with secure authentication.',
    'proj.p4Type': 'Full Stack · Social Impact',
    'proj.p4Title': 'Mujeres Libres y Líderes Portal',
    'proj.p4Desc':
      "Educational web platform promoting gender equality and women's leadership, featuring authenticated user management, learning resources, and Webpack bundling.",
    'proj.p5Title': 'Banking System Server',
    'proj.p5Desc':
      'Node.js backend server model handling core banking logic, built with modular routes, controllers, and server-side data management.',
    'contact.eyebrow': "Let's Talk",
    'contact.title': 'Looking for a dedicated Computer Engineer?',
    'contact.sub':
      "I'm ready to join engineering teams, take on freelance builds, or help digitize your business workflows.",
    'contact.emailLabel': 'Email',
    'contact.phoneLabel': 'WhatsApp / Phone',
    'contact.driveLabel': 'Documents & Certifications',
    'contact.driveCta': 'View on Google Drive →',
    'contact.copyBtn': 'Copy email address',
    'contact.toast': 'Email copied to clipboard',
    'footer.role': 'Computer Engineer',
    'footer.note': 'Built with HTML5, CSS3 & JavaScript.',
  },
  es: {
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Trayectoria',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.cv': 'Ver CV',
    'hero.status': 'Disponible para proyectos y oportunidades Full Stack',
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Ingeniero en Computación · Desarrollador de Software Full Stack',
    'hero.desc':
      'Transformo procesos industriales y necesidades de negocio en aplicaciones web rápidas, seguras y escalables con <strong>React, Node.js y SQL</strong>, potenciando cada etapa del ciclo de desarrollo con herramientas modernas de <strong>Inteligencia Artificial como Google Antigravity</strong>.',
    'hero.ctaProjects': 'Explorar Proyectos',
    'hero.ctaDrive': 'Certificaciones (Drive) ↗',
    'hero.metricNatulac': 'Experiencia Industrial',
    'hero.badgeTitle': 'Ingeniero en Computación',
    'about.eyebrow': 'Quién soy',
    'about.title': 'Ingeniería sólida con mentalidad de producto',
    'about.p1':
      'Soy <strong>Ingeniero en Computación</strong> egresado de la <strong>Universidad Valle del Momboy</strong>. Me apasiona construir software que resuelva problemas reales y genere impacto medible en la operación diaria de las empresas.',
    'about.p2':
      'Durante mi experiencia en <strong>Industrias Maros, C.A. (Natulac)</strong>, diseñé y desarrollé un sistema web integral para la digitalización y trazabilidad de la cadena de suministro láctea, integrando backend en Node.js/Express, bases de datos relacionales (PostgreSQL/MySQL), frontend en React/Vite y control de acceso basado en roles (RBAC).',
    'about.p3':
      'Además de dominar las bases clásicas de la ingeniería de software, adopto activamente <strong>herramientas agénticas de Inteligencia Artificial como Google Antigravity</strong> para acelerar la arquitectura, refactorización, documentación y validación de código, entregando soluciones más limpias en menos tiempo.',
    'about.pillar1Title': 'Full Stack End-to-End',
    'about.pillar1Desc':
      'Desde el modelado de bases de datos SQL y APIs REST seguras hasta interfaces responsivas en React y PWAs.',
    'about.pillar2Title': 'Desarrollo Asistido por IA',
    'about.pillar2Desc':
      'Uso estratégico de Google Antigravity y flujos con agentes de IA para multiplicar productividad y calidad técnica.',
    'about.pillar3Title': 'Digitalización Industrial',
    'about.pillar3Desc':
      'Experiencia real creando sistemas de trazabilidad, auditoría de lotes y control de inventarios en planta.',
    'about.pillar4Title': 'Seguridad y Buenas Prácticas',
    'about.pillar4Desc':
      'Autenticación JWT, control de acceso basado en roles (RBAC), arquitectura MVC y código mantenible.',
    'skills.eyebrow': 'Stack Tecnológico',
    'skills.title': 'Herramientas con las que construyo',
    'skills.backendTitle': 'Backend y Seguridad',
    'skills.mvc': 'Arquitectura MVC',
    'skills.dbTitle': 'Bases de Datos',
    'skills.dbModel': 'Modelado Relacional',
    'skills.dbSql': 'Consultas SQL',
    'skills.dbAudit': 'Auditoría de Lotes',
    'skills.aiTitle': 'IA y Productividad Dev',
    'skills.aiAgents': 'Flujos Agénticos de IA',
    'skills.aiPrompt': 'Ingeniería de Prompts',
    'skills.aiDev': 'Desarrollo Asistido por IA',
    'exp.eyebrow': 'Trayectoria',
    'exp.title': 'Experiencia Laboral y Formación Académica',
    'exp.workBadge': 'Experiencia Laboral',
    'exp.workDate': 'Mayo 2026 – Julio 2026',
    'exp.workRole': 'Desarrollador de Software – Pasante de Informática',
    'exp.workB1':
      'Diseñé y desarrollé un sistema web integral para el control de recepción, procesamiento y trazabilidad en la cadena de suministro láctea.',
    'exp.workB2':
      'Implementé la arquitectura backend con <strong>Node.js y Express</strong> integrada a bases de datos relacionales (<strong>PostgreSQL / MySQL</strong>) para auditoría de lotes en tiempo real.',
    'exp.workB3':
      'Desarrollé interfaces rápidas e intuitivas con <strong>React y Vite</strong> optimizadas para el personal operativo de planta.',
    'exp.workB4':
      'Integré autenticación segura y control de acceso basado en roles (<strong>RBAC / JWT</strong>).',
    'exp.eduBadge': 'Educación Universitaria',
    'exp.eduDate': 'Graduado',
    'exp.eduDegree': 'Ingeniero en Computación',
    'exp.eduB1':
      'Formación integral en ingeniería de software, arquitectura de sistemas, bases de datos, redes y desarrollo web.',
    'exp.eduB2':
      'Culminación del Trabajo Especial de Grado orientado al desarrollo de soluciones tecnológicas de software.',
    'exp.eduB3':
      'Base complementaria en soporte técnico, cableado estructurado y redes.',
    'exp.eduB4':
      '<strong>Idiomas:</strong> Español (Nativo) · Inglés (A2–B1 · Lectura técnica y comprensión).',
    'proj.eyebrow': 'Portafolio en GitHub',
    'proj.title': 'Proyectos Destacados',
    'proj.sub': 'Selección de aplicaciones reales desarrolladas y publicadas en mi repositorio de GitHub.',
    'proj.filterAll': 'Todos',
    'proj.p1Type': 'Full Stack · Agroindustria',
    'proj.p1Title': 'Sistema de Inventario Café 5.0',
    'proj.p1Desc':
      'Plataforma completa para administrar el ciclo operativo de una empresa productora agrícola de café: control de producción, inventario en tiempo real, ventas y proveedores con persistencia SQL.',
    'proj.p2Title': 'Calculadora de Diferencia Cambiaria',
    'proj.p2Desc':
      'Aplicación Web Progresiva (instalable en móvil y PC) que calcula en tiempo real la compra de divisas bancarias, comisiones por tarjeta y el rendimiento neto al convertir a USDT en Binance.',
    'proj.p3Type': 'Full Stack · Arquitectura MVC',
    'proj.p3Title': 'Sistema de Gestión Estudiantil',
    'proj.p3Desc':
      'Servicio web institucional estructurado bajo el patrón MVC (modelos, controladores, rutas y middlewares) para gestionar registros académicos de estudiantes con autenticación segura.',
    'proj.p4Type': 'Full Stack · Impacto Social',
    'proj.p4Title': 'Portal Mujeres Libres y Líderes',
    'proj.p4Desc':
      'Plataforma web educativa enfocada en promover la igualdad de género y recursos de liderazgo, integrando gestión de usuarios autenticados, middlewares y empaquetado con Webpack.',
    'proj.p5Title': 'Sistema Bancario (Servidor)',
    'proj.p5Desc':
      'Modelo de servidor backend en Node.js para la gestión de lógica bancaria ordinaria, estructurado con rutas, controladores y manejo modular de datos del lado del servidor.',
    'contact.eyebrow': 'Hablemos',
    'contact.title': '¿Buscas un Ingeniero en Computación comprometido?',
    'contact.sub':
      'Estoy listo para sumarme a equipos de desarrollo, proyectos freelance o retos de digitalización empresarial.',
    'contact.emailLabel': 'Correo electrónico',
    'contact.phoneLabel': 'WhatsApp / Teléfono',
    'contact.driveLabel': 'Documentación y Certificaciones',
    'contact.driveCta': 'Ver en Google Drive →',
    'contact.copyBtn': 'Copiar correo electrónico',
    'contact.toast': 'Correo copiado al portapapeles',
    'footer.role': 'Ingeniero en Computación',
    'footer.note': 'Construido con HTML5, CSS3 y JavaScript.',
  },
};

const html = document.documentElement;
const langToggle = document.getElementById('langToggle');
let currentLang = localStorage.getItem('rhonny-portfolio-lang') || 'en';

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  html.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) el.innerHTML = dict[key];
  });

  if (langToggle) {
    langToggle.querySelectorAll('.lang-opt').forEach((opt) => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
    langToggle.title = lang === 'en' ? 'Cambiar a Español' : 'Switch to English';
  }
}

applyLanguage(currentLang);

langToggle?.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  localStorage.setItem('rhonny-portfolio-lang', currentLang);
  applyLanguage(currentLang);
});

// Theme toggle with persistence
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('rhonny-portfolio-theme');

if (savedTheme) {
  html.setAttribute('data-theme', savedTheme);
}

themeToggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', current);
  localStorage.setItem('rhonny-portfolio-theme', current);
});

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Project category filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach((card) => {
      const categories = (card.dataset.category || '').split(' ');
      if (filter === 'all' || categories.includes(filter)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Copy email with toast feedback
const copyEmailBtn = document.getElementById('copyEmailBtn');
const toast = document.getElementById('toast');

copyEmailBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('rhonnyjaimes2002@gmail.com');
    toast?.classList.add('show');
    setTimeout(() => toast?.classList.remove('show'), 2600);
  } catch {
    window.location.href = 'mailto:rhonnyjaimes2002@gmail.com';
  }
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => observer.observe(el));

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
