/**
 * Main Application Logic for Merazul Khan's Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProfile();
  renderStats();
  renderSkills();
  renderServices();
  renderProjects();
  renderExperience();
  renderEducation();
  renderTestimonials();
  initTypewriter();
  initProjectFilter();
  initModal();
  initContactForm();
  initScrollSpy();
  initMobileMenu();
  initBackToTop();
  lucide.createIcons();
});

/* ==========================================================================
   1. THEME SWITCHER (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeToggleMobileBtn = document.getElementById("theme-toggle-mobile");
  const htmlEl = document.documentElement;
  const bodyEl = document.body;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem("merazul-portfolio-theme") || "dark";
  applyTheme(savedTheme);

  function applyTheme(theme) {
    if (theme === "light") {
      htmlEl.classList.remove("dark");
      htmlEl.classList.add("light");
      bodyEl.classList.remove("bg-mesh-dark", "text-slate-100");
      bodyEl.classList.add("bg-mesh-light", "text-slate-800");
      localStorage.setItem("merazul-portfolio-theme", "light");
      updateThemeIcons("light");
    } else {
      htmlEl.classList.remove("light");
      htmlEl.classList.add("dark");
      bodyEl.classList.remove("bg-mesh-light", "text-slate-800");
      bodyEl.classList.add("bg-mesh-dark", "text-slate-100");
      localStorage.setItem("merazul-portfolio-theme", "dark");
      updateThemeIcons("dark");
    }
  }

  function updateThemeIcons(theme) {
    const iconClass = theme === "light" ? "moon" : "sun";
    const titleText = theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode";
    [themeToggleBtn, themeToggleMobileBtn].forEach((btn) => {
      if (!btn) return;
      btn.innerHTML = `<i data-lucide="${iconClass}" class="w-5 h-5"></i>`;
      btn.setAttribute("title", titleText);
      btn.setAttribute("aria-label", titleText);
    });
    if (window.lucide) {
      lucide.createIcons();
    }
  }

  function toggle() {
    const currentTheme = localStorage.getItem("merazul-portfolio-theme") || "dark";
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggle);
  if (themeToggleMobileBtn) themeToggleMobileBtn.addEventListener("click", toggle);
}

/* ==========================================================================
   2. PROFILE & HERO RENDERING
   ========================================================================== */
function renderProfile() {
  const p = portfolioData.profile;

  // Hero section elements
  const heroName = document.getElementById("hero-name");
  const heroBio = document.getElementById("hero-bio");
  const heroStatus = document.getElementById("hero-status-text");
  const heroAvatar = document.getElementById("hero-avatar");
  const aboutDetail = document.getElementById("about-detailed-text");
  const contactEmailLink = document.getElementById("contact-email-link");
  const contactEmailText = document.getElementById("contact-email-text");
  const contactLocationText = document.getElementById("contact-location-text");
  const resumeDownloadBtn = document.getElementById("resume-download-btn");

  if (heroName) heroName.textContent = p.name;
  if (heroBio) heroBio.textContent = p.bio;
  if (heroStatus) heroStatus.textContent = p.statusBadge;
  if (heroAvatar) heroAvatar.src = p.avatar;
  if (aboutDetail) {
    aboutDetail.innerHTML = p.detailedAbout
      .split("\n\n")
      .map((paragraph) => `<p class="leading-relaxed mb-4">${paragraph}</p>`)
      .join("");
  }
  if (contactEmailLink) contactEmailLink.href = `mailto:${p.email}`;
  if (contactEmailText) contactEmailText.textContent = p.email;
  if (contactLocationText) contactLocationText.textContent = p.location;
  if (resumeDownloadBtn) resumeDownloadBtn.href = p.resumeUrl;

  // Socials in Hero and Footer
  const heroSocialsContainer = document.getElementById("hero-socials");
  const footerSocialsContainer = document.getElementById("footer-socials");

  const socialIconsMap = {
    github: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>',
    linkedin: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
    twitter: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    mail: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'
  };

  const socialsHtml = p.socials
    .map(
      (s) => `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer" 
         class="p-2.5 rounded-xl border border-slate-700/60 hover:border-blue-500 bg-slate-800/50 hover:bg-blue-600/10 text-slate-300 hover:text-blue-400 transition-all duration-200"
         title="${s.name}" aria-label="${s.name}">
        ${socialIconsMap[s.icon] || ""}
      </a>
    `
    )
    .join("");

  if (heroSocialsContainer) heroSocialsContainer.innerHTML = socialsHtml;
  if (footerSocialsContainer) footerSocialsContainer.innerHTML = socialsHtml;
}

/* ==========================================================================
   3. TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const el = document.getElementById("typewriter-text");
  if (!el) return;

  const roles = portfolioData.profile.roles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      charIdx--;
      typingSpeed = 50;
    } else {
      charIdx++;
      typingSpeed = 110;
    }

    el.textContent = currentRole.substring(0, charIdx);

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 1800; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // Pause before next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   4. STATS ANIMATION
   ========================================================================== */
function renderStats() {
  const container = document.getElementById("stats-grid");
  if (!container) return;

  container.innerHTML = portfolioData.stats
    .map(
      (st) => `
    <div class="glass-panel p-6 rounded-2xl text-center hover-lift relative overflow-hidden group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"></div>
      <div class="relative">
        <div class="text-3xl lg:text-4xl font-extrabold text-blue-400 mb-2 font-mono flex items-center justify-center">
          <span class="stat-counter" data-target="${st.value}">0</span>
          <span>${st.suffix}</span>
        </div>
        <p class="text-xs uppercase tracking-wider font-semibold text-slate-400">${st.label}</p>
      </div>
    </div>
  `
    )
    .join("");

  // Animate stats counter with Intersection Observer
  let animated = false;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          document.querySelectorAll(".stat-counter").forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            const duration = 1500;
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
              } else {
                counter.textContent = Math.ceil(current);
              }
            }, stepTime);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(container);
}

/* ==========================================================================
   5. SKILLS SECTION
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = portfolioData.skills.categories
    .map(
      (cat) => `
    <div class="glass-panel p-6 rounded-2xl hover-lift border border-slate-800/80">
      <div class="flex items-center gap-3 mb-6">
        <div class="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
          <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-100 dark:text-slate-100">${cat.title}</h3>
      </div>
      <div class="space-y-4">
        ${cat.items
          .map(
            (item) => `
          <div>
            <div class="flex justify-between text-sm font-medium mb-1.5">
              <span class="text-slate-300">${item.name}</span>
              <span class="text-blue-400 font-mono text-xs">${item.level}%</span>
            </div>
            <div class="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden">
              <div class="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 h-2 rounded-full skill-bar-fill" style="width: ${item.level}%"></div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   6. SERVICES SECTION
   ========================================================================== */
function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  container.innerHTML = portfolioData.services
    .map(
      (srv) => `
    <div class="glass-panel p-6 lg:p-8 rounded-2xl hover-lift border border-slate-800/80 group">
      <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <i data-lucide="${srv.icon}" class="w-6 h-6"></i>
      </div>
      <h3 class="text-xl font-bold text-slate-100 mb-3">${srv.title}</h3>
      <p class="text-slate-400 text-sm leading-relaxed">${srv.description}</p>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   7. PROJECTS SECTION & FILTERING
   ========================================================================== */
function renderProjects(category = "all") {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const filtered =
    category === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === category);

  grid.innerHTML = filtered
    .map(
      (proj) => `
    <div class="glass-panel rounded-2xl overflow-hidden hover-lift border border-slate-800/80 flex flex-col group" data-category="${proj.category}">
      <div class="relative overflow-hidden aspect-video bg-slate-900">
        <img src="${proj.image}" alt="${proj.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        ${
          proj.featured
            ? `<span class="absolute top-3 left-3 bg-blue-500/90 text-white text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider backdrop-blur-md shadow-md">Featured</span>`
            : ""
        }
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors mb-2">${proj.title}</h3>
          <p class="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">${proj.tagline}</p>
          
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${proj.tags
              .map(
                (t) => `
              <span class="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-blue-300 font-medium border border-slate-700/60">${t}</span>
            `
              )
              .join("")}
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-slate-800/80">
          <button onclick="openProjectModal('${proj.id}')" 
                  class="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group/btn cursor-pointer">
            View Details
            <i data-lucide="arrow-right" class="w-4 h-4 transition-transform group-hover/btn:translate-x-1"></i>
          </button>
          
          <div class="flex items-center gap-2">
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" 
               class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors" title="GitHub Source" aria-label="GitHub Repository">
              <i data-lucide="github" class="w-4 h-4"></i>
            </a>
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" 
               class="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors" title="Live Preview" aria-label="Live Demo">
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  if (window.lucide) {
    lucide.createIcons();
  }
}

function initProjectFilter() {
  const filterButtons = document.querySelectorAll(".project-filter-btn");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => {
        b.classList.remove("bg-blue-600", "text-white");
        b.classList.add("bg-slate-800/80", "text-slate-400");
      });
      btn.classList.add("bg-blue-600", "text-white");
      btn.classList.remove("bg-slate-800/80", "text-slate-400");

      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
}

/* ==========================================================================
   8. PROJECT QUICK-VIEW MODAL
   ========================================================================== */
function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const backdrop = document.getElementById("modal-backdrop");

  if (!modal) return;

  function closeModal() {
    modal.classList.add("opacity-0", "pointer-events-none");
    document.body.style.overflow = "auto";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("opacity-0")) {
      closeModal();
    }
  });

  // Expose to window for inline onclick handler
  window.openProjectModal = function (id) {
    const proj = portfolioData.projects.find((p) => p.id === id);
    if (!proj) return;

    document.getElementById("modal-title").textContent = proj.title;
    document.getElementById("modal-image").src = proj.image;
    document.getElementById("modal-image").alt = proj.title;
    document.getElementById("modal-overview").textContent = proj.details.overview;
    document.getElementById("modal-results").textContent = proj.details.results;
    
    const tagsContainer = document.getElementById("modal-tags");
    tagsContainer.innerHTML = proj.tags
      .map(
        (t) =>
          `<span class="text-xs px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 font-medium border border-blue-500/20">${t}</span>`
      )
      .join("");

    const featuresContainer = document.getElementById("modal-features");
    featuresContainer.innerHTML = proj.details.features
      .map(
        (f) => `
        <li class="flex items-start gap-2 text-sm text-slate-300">
          <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"></i>
          <span>${f}</span>
        </li>
      `
      )
      .join("");

    document.getElementById("modal-live-link").href = proj.liveUrl;
    document.getElementById("modal-github-link").href = proj.githubUrl;

    if (window.lucide) {
      lucide.createIcons();
    }

    modal.classList.remove("opacity-0", "pointer-events-none");
    document.body.style.overflow = "hidden";
  };
}

/* ==========================================================================
   9. EXPERIENCE & EDUCATION TIMELINE
   ========================================================================== */
function renderExperience() {
  const container = document.getElementById("experience-timeline");
  if (!container) return;

  container.innerHTML = portfolioData.experience
    .map(
      (exp) => `
    <div class="relative pl-8 pb-8 group">
      <!-- Glow Dot -->
      <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:scale-125 group-hover:border-cyan-400 group-hover:bg-cyan-500 transition-all"></div>
      
      <div class="glass-panel p-6 rounded-2xl hover-lift border border-slate-800/80">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">${exp.period}</span>
          <span class="text-xs text-slate-400 flex items-center gap-1">
            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
            ${exp.location}
          </span>
        </div>
        <h4 class="text-lg font-bold text-slate-100">${exp.role}</h4>
        <h5 class="text-sm font-semibold text-blue-400 mb-3">${exp.company}</h5>
        <p class="text-slate-400 text-sm mb-4 leading-relaxed">${exp.description}</p>
        <ul class="space-y-1.5">
          ${exp.highlights
            .map(
              (h) => `
            <li class="flex items-start gap-2 text-xs text-slate-300">
              <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0"></i>
              <span>${h}</span>
            </li>
          `
            )
            .join("")}
        </ul>
      </div>
    </div>
  `
    )
    .join("");
}

function renderEducation() {
  const container = document.getElementById("education-timeline");
  if (!container) return;

  container.innerHTML = portfolioData.education
    .map(
      (edu) => `
    <div class="relative pl-8 pb-4 group">
      <!-- Glow Dot -->
      <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-purple-500 group-hover:scale-125 group-hover:border-purple-400 group-hover:bg-purple-500 transition-all"></div>
      
      <div class="glass-panel p-6 rounded-2xl hover-lift border border-slate-800/80">
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">${edu.period}</span>
          <span class="text-xs text-slate-400">${edu.location}</span>
        </div>
        <h4 class="text-lg font-bold text-slate-100">${edu.degree}</h4>
        <h5 class="text-sm font-semibold text-purple-400 mb-2">${edu.institution}</h5>
        <p class="text-slate-400 text-sm leading-relaxed">${edu.description}</p>
      </div>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   10. TESTIMONIALS SECTION
   ========================================================================== */
function renderTestimonials() {
  const container = document.getElementById("testimonials-grid");
  if (!container) return;

  container.innerHTML = portfolioData.testimonials
    .map(
      (t) => `
    <div class="glass-panel p-6 lg:p-8 rounded-2xl hover-lift border border-slate-800/80 flex flex-col justify-between">
      <div>
        <div class="flex text-amber-400 mb-4">
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
          <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
        </div>
        <p class="text-slate-300 text-sm italic mb-6 leading-relaxed">"${t.quote}"</p>
      </div>
      <div class="flex items-center gap-3 pt-4 border-t border-slate-800">
        <img src="${t.avatar}" alt="${t.author}" class="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 object-cover" />
        <div>
          <h4 class="text-sm font-bold text-slate-100">${t.author}</h4>
          <p class="text-xs text-slate-400">${t.role} • ${t.company}</p>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

/* ==========================================================================
   11. CONTACT FORM & TOAST
   ========================================================================== */
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast px-5 py-3.5 rounded-xl shadow-xl flex items-center gap-3 text-sm font-medium border backdrop-blur-md ${
    type === "success"
      ? "bg-slate-900/90 text-emerald-300 border-emerald-500/30"
      : "bg-slate-900/90 text-rose-300 border-rose-500/30"
  }`;

  const iconName = type === "success" ? "check-circle-2" : "alert-circle";
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-5 h-5 shrink-0"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  requestAnimationFrame(() => toast.classList.add("show"));

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("form-name").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const subject = document.getElementById("form-subject").value.trim();
    const message = document.getElementById("form-message").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    // Direct mailto fallback link triggers email client with full payload
    const mailtoUri = `mailto:${portfolioData.profile.email}?subject=${encodeURIComponent(
      subject || `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(`Hi Merazul,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.open(mailtoUri, "_blank");

    showToast(`Thank you, ${name}! Your email draft has been generated.`);
    form.reset();
  });
}

/* ==========================================================================
   12. SCROLL SPY & NAVIGATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset + 150;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("text-blue-400", "font-semibold");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("text-blue-400", "font-semibold");
          }
        });
      }
    });
  });
}

/* ==========================================================================
   13. MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("close-mobile-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!menuBtn || !menu) return;

  function openMenu() {
    menu.classList.remove("translate-x-full");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    menu.classList.add("translate-x-full");
    document.body.style.overflow = "auto";
  }

  menuBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  links.forEach((l) => l.addEventListener("click", closeMenu));
}

/* ==========================================================================
   14. BACK TO TOP
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
      btn.classList.add("opacity-100", "translate-y-0");
    } else {
      btn.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
      btn.classList.remove("opacity-100", "translate-y-0");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
