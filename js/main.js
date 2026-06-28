/* ===== Video Data Configuration =====
 * Replace the BV numbers below with your actual Bilibili video BV IDs.
 * Format: "BV1xx411c7XX"
 * Leave empty string "" for items without a video link yet.
 */
const VIDEO_DATA = {
  "Vlog 作品 01": { bvid: "", desc: "日常生活记录与情绪短片" },
  "Vlog 作品 02": { bvid: "", desc: "旅行记录与城市漫游" },
  "Vlog 作品 03": { bvid: "", desc: "活动幕后花絮记录" },
  "Vlog 作品 04": { bvid: "", desc: "日常生活碎片集" },
  "纪录片 01": { bvid: "", desc: "人物纪实短片" },
  "纪录片 02": { bvid: "", desc: "城市文化纪录" },
  "纪录片 03": { bvid: "", desc: "手艺人故事记录" },
  "纪录片 04": { bvid: "", desc: "校园记忆纪录" },
  "科普教学 01": { bvid: "", desc: "知识科普动画短片" },
  "科普教学 02": { bvid: "", desc: "软件教程系列" },
  "科普教学 03": { bvid: "", desc: "剪辑技巧分享" },
  "科普教学 04": { bvid: "", desc: "行业知识科普" },
  "口播 01": { bvid: "", desc: "产品讲解与推荐" },
  "口播 02": { bvid: "", desc: "观点分享与评论" },
  "口播 03": { bvid: "", desc: "商业广告口播" },
  "口播 04": { bvid: "", desc: "品牌故事讲述" },
  "混剪 01": { bvid: "", desc: "年度影视回顾混剪" },
  "混剪 02": { bvid: "", desc: "情绪氛围混剪" },
  "混剪 03": { bvid: "", desc: "动作场面高燃混剪" },
  "混剪 04": { bvid: "", desc: "角色主题混剪" }
};
const BILIBILI_PROFILE = "";

document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initCanvas();
  initNav();
  initReveal();
  initPortfolio();
  initVideoModal();
  initParallax();
  initSmoothScroll();
  initContactLinks();
});

function initCursor() {
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");
  if (!cursor || !follower) return;
  let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, followerX = 0, followerY = 0;
  document.addEventListener("mousemove", (e) => { mouseX = e.clientX; mouseY = e.clientY; });
  const hoverTargets = document.querySelectorAll("a, button, .portfolio-card, .tag, .filter-btn, .contact-link, .video-modal-close, .nav-toggle");
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => { cursor.classList.add("hover"); follower.classList.add("hover"); });
    el.addEventListener("mouseleave", () => { cursor.classList.remove("hover"); follower.classList.remove("hover"); });
  });
  function animate() {
    cursorX += (mouseX - cursorX) * 0.35;
    cursorY += (mouseY - cursorY) * 0.35;
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";
    requestAnimationFrame(animate);
  }
  animate();
}

function initCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener("resize", resize);
  const count = Math.min(60, Math.floor(window.innerWidth / 25));
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2 + 0.5, alpha: Math.random() * 0.35 + 0.08
    });
  }
  let mpX = 0, mpY = 0;
  document.addEventListener("mousemove", (e) => { mpX = e.clientX; mpY = e.clientY; });
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let p of particles) {
      const dx = mpX - p.x, dy = mpY - p.y, dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) { p.x += dx * 0.001; p.y += dy * 0.001; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(109, 179, 216, " + p.alpha + ")";
      ctx.fill();
      for (let j = particles.indexOf(p) + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx2 = p.x - q.x, dy2 = p.y - q.y, dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        if (dist2 < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = "rgba(109, 179, 216, " + (0.04 * (1 - dist2 / 120)) + ")";
          ctx.lineWidth = 0.5; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

function initNav() {
  const nav = document.getElementById("nav");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    nav.classList.toggle("scrolled", scrollY > 60);
    let current = "";
    sections.forEach((section) => { if (scrollY >= section.offsetTop - 120) current = section.getAttribute("id"); });
    navLinks.forEach((link) => { link.classList.toggle("active", link.getAttribute("data-nav") === current); });
  });
  if (toggle && links) {
    toggle.addEventListener("click", () => { links.classList.toggle("open"); toggle.classList.toggle("open"); });
    navLinks.forEach((link) => { link.addEventListener("click", () => { links.classList.remove("open"); toggle.classList.remove("open"); }); });
  }
}

function initReveal() {
  const revealEls = document.querySelectorAll(".about-card, .timeline-item, .portfolio-item, .contact-quote, .section-title, .about-intro, .about-tags, .contact-tagline, .contact-links");
  revealEls.forEach((el) => el.classList.add("reveal"));
  document.querySelectorAll(".timeline-item").forEach((el, i) => el.classList.add("reveal-delay-" + Math.min(i + 1, 5)));
  document.querySelectorAll(".about-card").forEach((el, i) => el.classList.add("reveal-delay-" + Math.min(i + 1, 5)));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initPortfolio() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".portfolio-item");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      items.forEach((item) => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.classList.remove("hidden");
          item.classList.add("reveal");
          setTimeout(() => item.classList.add("visible"), 50);
        } else {
          item.classList.add("hidden");
          item.classList.remove("visible");
        }
      });
    });
  });
}

function initVideoModal() {
  const modal = document.getElementById("videoModal");
  const player = document.getElementById("videoPlayer");
  const titleEl = document.getElementById("videoTitle");
  const descEl = document.getElementById("videoDesc");
  const closeBtn = document.getElementById("videoClose");
  const bg = modal ? modal.querySelector(".video-modal-bg") : null;
  if (!modal) return;
  document.querySelectorAll(".portfolio-card").forEach((card) => {
    card.addEventListener("click", () => {
      const info = card.querySelector(".portfolio-info");
      const title = info.querySelector(".portfolio-title").textContent.trim();
      const data = VIDEO_DATA[title];
      titleEl.textContent = title;
      if (data && data.bvid) {
        descEl.textContent = data.desc || "";
        player.innerHTML = '<iframe src="https://player.bilibili.com/player.html?bvid=' + data.bvid + '&page=1&high_quality=1&autoplay=1" scrolling="no" border="0" frameborder="0" allowfullscreen="true" allow="autoplay"></iframe>';
      } else {
        descEl.textContent = "请在 Bilibili 上传视频后，将 BV 号填入 js/main.js 的 VIDEO_DATA 配置中";
        player.innerHTML = '<div class="video-modal-placeholder"><p>请将作品上传至哔哩哔哩后，将 BV 号填入 <code>js/main.js</code> 中的 <code>VIDEO_DATA</code> 配置</p></div>';
      }
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });
  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => { if (player.querySelector("iframe")) { player.innerHTML = '<div class="video-modal-placeholder"><p>请将作品上传至哔哩哔哩后，将 BV 号填入 <code>js/main.js</code> 中的 <code>VIDEO_DATA</code> 配置</p></div>'; } }, 400);
  }
  closeBtn.addEventListener("click", closeModal);
  bg.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });
}

function initParallax() {
  const hero = document.querySelector(".hero");
  const glow = document.querySelector(".hero-bg-glow");
  const photo = document.querySelector(".hero-photo");
  if (!hero || !glow) return;
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const cx = rect.width / 2, cy = rect.height / 2;
    const mx = (x - cx) / cx * 20, my = (y - cy) / cy * 20;
    glow.style.transform = "translate(calc(-50% + " + mx + "px), calc(-50% + " + my + "px))";
    if (photo) photo.style.transform = "translate(" + (mx * 0.1) + "px, " + (my * 0.1) + "px)";
  });
  hero.addEventListener("mouseleave", () => {
    glow.style.transform = "translate(-50%, -50%)";
    if (photo) photo.style.transform = "translate(0, 0)";
  });
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const heroContent = document.querySelector(".hero-content");
    if (heroContent && scrollY < window.innerHeight) {
      heroContent.style.transform = "translateY(" + (scrollY * 0.15) + "px)";
      heroContent.style.opacity = Math.max(0, 1 - scrollY / (window.innerHeight * 0.8));
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initContactLinks() {
  const biliLink = document.getElementById("bilibiliLink");
  if (biliLink && BILIBILI_PROFILE) {
    biliLink.href = BILIBILI_PROFILE;
    biliLink.target = "_blank";
    biliLink.rel = "noopener noreferrer";
  } else if (biliLink) {
    biliLink.addEventListener("click", (e) => { e.preventDefault(); });
  }
}
