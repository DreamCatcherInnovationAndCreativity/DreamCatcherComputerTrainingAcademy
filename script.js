const courses = [
  { title: 'C Programming', category: 'programming', icon: 'fa-solid fa-code', badge: 'Programming', description: 'Build strong logic, syntax, and problem-solving foundations.', duration: '4 weeks', fee: '₹4,500', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'C++ Programming', category: 'programming', icon: 'fa-brands fa-cuttlefish', badge: 'Programming', description: 'Learn object-oriented concepts, data structures, and coding confidence.', duration: '6 weeks', fee: '₹6,000', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Java Programming', category: 'programming', icon: 'fa-brands fa-java', badge: 'Programming', description: 'Master core Java, OOP, and practical app building techniques.', duration: '8 weeks', fee: '₹7,500', level: 'Intermediate', mode: 'Offline / Online' },
  { title: 'Python Programming', category: 'programming', icon: 'fa-brands fa-python', badge: 'Programming', description: 'Accelerate your career with automation, scripting, and web basics.', duration: '8 weeks', fee: '₹8,500', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Web Development', category: 'programming', icon: 'fa-solid fa-globe', badge: 'HTML • CSS • JS • React', description: 'Create modern responsive websites and polished front-end interfaces.', duration: '10 weeks', fee: '₹10,000', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'PHP & MySQL', category: 'programming', icon: 'fa-brands fa-php', badge: 'Backend', description: 'Learn dynamic web development with database-driven applications.', duration: '8 weeks', fee: '₹9,500', level: 'Intermediate', mode: 'Offline / Online' },
  { title: 'Basic Computer', category: 'computer', icon: 'fa-solid fa-computer', badge: 'Computer', description: 'Perfect for beginners learning typing, navigation, and everyday digital tasks.', duration: '4 weeks', fee: '₹3,500', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'MS Office', category: 'computer', icon: 'fa-solid fa-file-word', badge: 'Office', description: 'Become confident with Word, Excel, PowerPoint, and professional documents.', duration: '6 weeks', fee: '₹5,000', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Advanced Excel', category: 'computer', icon: 'fa-solid fa-table', badge: 'Office', description: 'Master formulas, dashboards, analysis, and business reporting tools.', duration: '6 weeks', fee: '₹6,500', level: 'Intermediate', mode: 'Offline / Online' },
  { title: 'Tally Prime with GST', category: 'computer', icon: 'fa-solid fa-calculator', badge: 'Accounting', description: 'Learn accounting, billing, inventory, and GST compliance in practical workflows.', duration: '4 weeks', fee: '₹6,000', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Internet & Email', category: 'computer', icon: 'fa-solid fa-at', badge: 'Digital Skills', description: 'Learn secure browsing, web tools, email etiquette, and online productivity.', duration: '3 weeks', fee: '₹2,800', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Computer Hardware & Networking', category: 'computer', icon: 'fa-solid fa-network-wired', badge: 'IT Support', description: 'Understand hardware, troubleshooting, setup, and networking fundamentals.', duration: '8 weeks', fee: '₹7,000', level: 'Intermediate', mode: 'Offline / Online' },
  { title: 'DTP', category: 'computer', icon: 'fa-solid fa-print', badge: 'Publishing', description: 'Learn document layout, design, print-ready files, and office publishing.', duration: '4 weeks', fee: '₹4,500', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Spoken English', category: 'computer', icon: 'fa-solid fa-comments', badge: 'Communication', description: 'Build fluency, confidence, and professional speaking skills for interviews.', duration: '4 weeks', fee: '₹3,000', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Adobe Photoshop', category: 'graphics', icon: 'fa-solid fa-palette', badge: 'Graphics', description: 'Learn photo editing, retouching, social media creatives, and digital art.', duration: '6 weeks', fee: '₹7,000', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Adobe Illustrator', category: 'graphics', icon: 'fa-solid fa-pen-nib', badge: 'Graphics', description: 'Create logos, vector art, branding visuals, and modern illustrations.', duration: '6 weeks', fee: '₹7,500', level: 'Intermediate', mode: 'Offline / Online' },
  { title: 'Adobe InDesign', category: 'graphics', icon: 'fa-solid fa-book-open', badge: 'Graphics', description: 'Design brochures, magazines, catalogs, and professional print layouts.', duration: '6 weeks', fee: '₹6,800', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'CorelDRAW', category: 'graphics', icon: 'fa-solid fa-draw-polygon', badge: 'Graphics', description: 'Master vector graphics, signage, and print-ready creative design concepts.', duration: '5 weeks', fee: '₹6,000', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Canva Pro Design', category: 'graphics', icon: 'fa-brands fa-canva', badge: 'Graphics', description: 'Create modern presentations, posters, social media visuals, and marketing assets.', duration: '4 weeks', fee: '₹5,500', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Adobe Lightroom', category: 'graphics', icon: 'fa-solid fa-camera', badge: 'Photography', description: 'Edit photos professionally with color grading, presets, and retouching tools.', duration: '4 weeks', fee: '₹5,000', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Figma UI/UX', category: 'graphics', icon: 'fa-solid fa-pen-ruler', badge: 'UI/UX', description: 'Design user flows, wireframes, prototypes, and polished digital products.', duration: '8 weeks', fee: '₹8,500', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Adobe XD', category: 'graphics', icon: 'fa-solid fa-mobile-screen', badge: 'UI/UX', description: 'Create interactive mobile and web experiences with prototyping tools.', duration: '6 weeks', fee: '₹7,200', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Adobe Premiere Pro', category: 'graphics', icon: 'fa-solid fa-film', badge: 'Video', description: 'Edit reels, promos, and cinematic content with industry-standard workflows.', duration: '6 weeks', fee: '₹7,800', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Adobe After Effects', category: 'graphics', icon: 'fa-solid fa-magic', badge: 'Motion', description: 'Build animated intros, kinetic typography, and motion-driven brand stories.', duration: '6 weeks', fee: '₹8,200', level: 'Intermediate', mode: 'Offline / Online' },
  { title: 'Motion Graphics', category: 'graphics', icon: 'fa-solid fa-clapperboard', badge: 'Video', description: 'Bring your ideas to life with animation principles and professional aesthetics.', duration: '8 weeks', fee: '₹9,000', level: 'Intermediate', mode: 'Offline / Online' },
  { title: 'Logo Design', category: 'graphics', icon: 'fa-solid fa-icons', badge: 'Branding', description: 'Develop professional logos that capture identity, values, and storytelling.', duration: '4 weeks', fee: '₹4,800', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Brand Identity Design', category: 'graphics', icon: 'fa-solid fa-brush', badge: 'Branding', description: 'Shape visual systems with color, typography, assets, and brand guidelines.', duration: '6 weeks', fee: '₹7,600', level: 'Intermediate', mode: 'Offline / Online' },
  { title: 'Social Media Design', category: 'graphics', icon: 'fa-solid fa-share-nodes', badge: 'Marketing', description: 'Design scroll-stopping creatives for campaigns, posts, and promotions.', duration: '4 weeks', fee: '₹5,200', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Packaging Design', category: 'graphics', icon: 'fa-solid fa-box', badge: 'Packaging', description: 'Learn product packaging concepts for retail, branding, and print production.', duration: '5 weeks', fee: '₹6,200', level: 'Beginner', mode: 'Offline / Online' },
  { title: 'Print Design', category: 'graphics', icon: 'fa-solid fa-print', badge: 'Print', description: 'Create business cards, brochures, stickers, and print-ready promotional materials.', duration: '4 weeks', fee: '₹5,000', level: 'Beginner', mode: 'Offline / Online' }
];

const testimonials = [
  { quote: 'The classes were practical, inspiring, and completely career-focused. I joined a design internship within weeks.', author: 'Sanjana P.' },
  { quote: 'The Java and web development modules helped me move from beginner to job-ready with confidence.', author: 'Arjun K.' },
  { quote: 'Their placement guidance and portfolio support gave me the momentum I needed to crack interviews.', author: 'Nisha V.' }
];

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80', alt: 'Modern classroom environment', title: 'Interactive classroom' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80', alt: 'Students learning at workstations', title: 'Computer lab sessions' },
  { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80', alt: 'Design projects displayed on screens', title: 'Design studio' },
  { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80', alt: 'Mentor guiding a workshop session', title: 'Workshop session' }
];

const placementCompanies = ['Infosys', 'TCS', 'Wipro', 'Zoho', 'Adobe', 'Amazon'];

const courseGrid = document.getElementById('course-grid');
const galleryGrid = document.getElementById('gallery-grid');
const testimonialCard = document.getElementById('testimonial-card');
const placementCompaniesContainer = document.getElementById('placement-companies');
const searchForm = document.querySelector('.course-search');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const faqItems = document.querySelectorAll('.faq-item');
const backToTop = document.querySelector('.back-to-top');
const loadingScreen = document.getElementById('loading-screen');
const progressBar = document.querySelector('.scroll-progress');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('img');
const lightboxClose = lightbox?.querySelector('.lightbox-close');
const sliderButtons = document.querySelectorAll('.slider-btn');
const counters = document.querySelectorAll('.counter');

let testimonialIndex = 0;

function renderCourses(filter = 'all', query = '') {
  const normalized = query.trim().toLowerCase();
  const visibleCourses = courses.filter((course) => {
    const matchesFilter = filter === 'all' || course.category === filter;
    const matchesQuery = normalized.length === 0 || `${course.title} ${course.badge} ${course.description}`.toLowerCase().includes(normalized);
    return matchesFilter && matchesQuery;
  });

  if (!courseGrid) return;
  courseGrid.innerHTML = visibleCourses.length
    ? visibleCourses.map((course) => `
      <article class="course-card reveal">
        <span class="badge">${course.badge}</span>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p><strong>Level:</strong> ${course.level}</p>
        <p><strong>Mode:</strong> ${course.mode}</p>
        <div class="course-meta">
          <span>${course.duration}</span>
          <strong>${course.fee}</strong>
        </div>
        <a class="btn btn-primary" href="#contact">Enroll Now</a>
      </article>
    `).join('')
    : '<p>No courses match your search right now.</p>';
}

function renderGallery() {
  if (!galleryGrid) return;
  galleryGrid.innerHTML = galleryItems.map((item) => `
    <figure class="gallery-card reveal">
      <img src="${item.src}" alt="${item.alt}" loading="lazy" />
      <figcaption>${item.title}</figcaption>
    </figure>
  `).join('');

  galleryGrid.querySelectorAll('img').forEach((img) => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });
}

function renderPlacementCompanies() {
  if (!placementCompaniesContainer) return;
  placementCompaniesContainer.innerHTML = placementCompanies.map((company) => `<span>${company}</span>`).join('');
}

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

function renderTestimonial(index) {
  const item = testimonials[index];
  if (!testimonialCard) return;
  testimonialCard.innerHTML = `<q>${item.quote}</q><strong>${item.author}</strong>`;
}

function nextTestimonial(direction = 1) {
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  renderTestimonial(testimonialIndex);
}

function setTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light', isLight);
  document.body.classList.toggle('dark', !isLight);
  if (themeToggle) {
    themeToggle.textContent = isLight ? '🌙' : '☀️';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }
}

function setupTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('academy-theme');
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  setTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('light') ? 'dark' : 'light';
      setTheme(nextTheme);
      localStorage.setItem('academy-theme', nextTheme);
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!localStorage.getItem('academy-theme')) {
      setTheme(event.matches ? 'dark' : 'light');
    }
  });
}

function setupNavigation() {
  if (!navToggle || !navLinks) return;
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      if (link.dataset.filter) {
        filterBtns.forEach((button) => button.classList.toggle('active', button.dataset.filter === link.dataset.filter));
        renderCourses(link.dataset.filter, searchInput?.value || '');
      }
    });
  });
}

function setupActiveNav() {
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navItems = Array.from(document.querySelectorAll('.nav-links a'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((item) => item.classList.remove('active'));
        const target = navItems.find((item) => item.getAttribute('href') === `#${entry.target.id}`);
        if (target) target.classList.add('active');
      }
    });
  }, { threshold: 0.45 });

  sections.forEach((section) => observer.observe(section));
}

function setupFaqs() {
  faqItems.forEach((item) => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach((faq) => faq.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

function setupCounters() {
  const items = Array.from(counters);
  if (!items.length) return;

  const animate = (element) => {
    const target = Number(element.dataset.target || 0);
    const suffix = element.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      element.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  items.forEach((item) => observer.observe(item));
}

function setupScrollEffects() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.width = `${(scrollTop / maxHeight) * 100}%`;
    if (backToTop) backToTop.classList.toggle('visible', scrollTop > 450);
  });
}

function setupForms() {
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const firstInput = form.querySelector('input, textarea, select');
      if (firstInput) firstInput.focus();
      const button = form.querySelector('button');
      if (button) button.textContent = 'Submitted';
    });
  });
}

function hideLoadingScreen() {
  loadingScreen?.classList.add('hidden');
}

window.addEventListener('load', () => setTimeout(hideLoadingScreen, 700));

let testimonialTimer;
function startTestimonialRotation() {
  if (testimonialTimer) clearInterval(testimonialTimer);
  testimonialTimer = window.setInterval(() => nextTestimonial(1), 6000);
}

searchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  renderCourses(activeFilter, searchInput?.value || '');
});

filterBtns.forEach((button) => {
  button.addEventListener('click', () => {
    filterBtns.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderCourses(button.dataset.filter, searchInput?.value || '');
  });
});

sliderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    nextTestimonial(button.dataset.direction === 'next' ? 1 : -1);
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});

window.addEventListener('DOMContentLoaded', () => {
  renderCourses();
  renderGallery();
  renderPlacementCompanies();
  renderTestimonial(testimonialIndex);
  setupTheme();
  setupNavigation();
  setupActiveNav();
  setupFaqs();
  setupReveal();
  setupCounters();
  setupScrollEffects();
  setupForms();
  startTestimonialRotation();
});
