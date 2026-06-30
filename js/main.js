/* ===== Gavin Portfolio CMS ===== */
var DATA_URL = 'data.json';
var GH_API = 'https://api.github.com/repos/Gavin0311666/gavin-portfolio/contents/data.json';
var DOUYIN = 'https://v.douyin.com/5Onmz-XZnVQ/';
var AUTHOR_PW = '10030311';

var siteData = null;
var isAuthor = false;
var fallbackData = {
  "categories": [
    {
      "key": "vlog",
      "name": "Vlog"
    },
    {
      "key": "documentary",
      "name": "纪录片"
    },
    {
      "key": "educational",
      "name": "科普&教学"
    },
    {
      "key": "talking",
      "name": "口播"
    },
    {
      "key": "montage",
      "name": "影视混剪"
    },
    {
      "key": "ae",
      "name": "AE特效"
    },
    {
      "key": "social",
      "name": "我的自媒体"
    }
  ],
  "videos": [
    {
      "category": "vlog",
      "title": "猫头鹰之森",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/video_%E4%BA%AC%E9%83%BD%E5%AE%9D%E8%97%8F%E5%BA%97%E9%93%BA%E6%8E%A8%E8%8D%90%20%20%E7%8C%AB%E5%A4%B4%E9%B9%B0%E4%B9%8B%E6%A3%AE%EF%BF%BD..._top_0_2.mp4"
    },
    {
      "category": "vlog",
      "title": "大阪首日游",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/video_%E5%B0%8F%E9%BB%91%E7%8C%B4%E5%A4%A7%E9%98%AAvlog%E6%97%A5%E5%B8%B8%23vlog..._top_0_2.mp4"
    },
    {
      "category": "vlog",
      "title": "大阪次日游",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/video_%E5%B0%8F%E9%BB%91%E7%8C%B4%E5%A4%A7%E9%98%AA%E4%BA%8C%E6%97%A5vlog%F0%9F%90%92%23vl..._top_0_2.mp4"
    },
    {
      "category": "vlog",
      "title": "剪辑师的一天",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E5%89%AA%E8%BE%91%E5%B8%88vlog2.0.mp4"
    },
    {
      "category": "vlog",
      "title": "新疆",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E6%96%B0%E7%96%86.mp4"
    },
    {
      "category": "vlog",
      "title": "重庆个人游",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E9%87%8D%E5%BA%86.mp4"
    },
    {
      "category": "documentary",
      "title": "研究院纪录片",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E7%A0%94%E7%A9%B6%E9%99%A24.7.mp4"
    },
    {
      "category": "documentary",
      "title": "Time",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/video_Time%20%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%BE%AE%E8%A7%86%E9%A2%91%23%E5%A4%A7%E5%AD%A6%E7%94%9F..._top_0_2.mp4"
    },
    {
      "category": "educational",
      "title": "快闪教程",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E5%BF%AB%E9%97%AA%E6%95%99%E7%A8%8B.mp4"
    },
    {
      "category": "educational",
      "title": "老干妈",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E8%80%81%E5%B9%B2%E5%A6%88.mp4"
    },
    {
      "category": "educational",
      "title": "角色墙纸",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E5%A2%93%E7%A2%9F%E5%A2%99%E7%BA%B8%E6%95%99%E5%AD%A6.mp4"
    },
    {
      "category": "educational",
      "title": "炸鸡科普",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E7%82%B8%E9%B8%A1.mp4"
    },
    {
      "category": "talking",
      "title": "Ai选股",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/ai%E9%80%89%E8%82%A1.mp4"
    },
    {
      "category": "talking",
      "title": "修眉",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/video_%E4%BF%AE%E7%9C%89%E6%98%AF%E5%B0%8F%E4%BA%8B%EF%BC%9F%E6%8B%A5%E6%9C%89%E4%B8%80%E5%AF%B9%E8%87%AA%E7%84%B6%E7%94%9F%E6%B4%BB%E6%AC%BE%E7%9A%84..._top_0_2.mp4"
    },
    {
      "category": "montage",
      "title": "spider",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/spider.mp4"
    },
    {
      "category": "montage",
      "title": "怪奇物语",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/strangerthings.mp4"
    },
    {
      "category": "montage",
      "title": "Timeless&spiderman",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/video_Timeless%E5%92%8C%E8%9C%98%E8%9B%9B%E4%BE%A0%E5%A4%AA%E7%BB%9D%E9%85%8D%E4%BA%86..._top_0_1.mp4"
    },
    {
      "category": "montage",
      "title": "超凡蜘蛛侠",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/video_%E8%B6%85%E5%B8%85%E8%9C%98%E8%9B%9B%E4%BE%A0%EF%BC%81%EF%BC%81%23%E8%9C%98%E8%9B%9B%E4%BE%A0%20%23%E8%B6%85%E5%87%A1%E8%9C%98..._top_0_1.mp4"
    },
    {
      "category": "montage",
      "title": "永劫无间",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/video_%E6%88%91%E8%BA%AB%E6%97%A0%E6%8B%98%EF%BC%8C%E5%90%BE%E9%81%93%E6%97%A0%E7%A9%B7_1080p_top_0_2.mp4"
    },
    {
      "category": "montage",
      "title": "蜘蛛侠是…",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/video_%E8%9C%98%E8%9B%9B%E4%BE%A0%E6%98%AF.......%20%23%E8%9C%98%E8%9B%9B%E4%BE%A0..._top_0_1.mp4"
    },
    {
      "category": "montage",
      "title": "黑神话悟空",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E7%8C%B4%E5%AD%90.mp4"
    },
    {
      "category": "montage",
      "title": "牧师",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E7%89%A7%E5%B8%88222.mp4"
    },
    {
      "category": "montage",
      "title": "前田夫人",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E5%89%8D%E7%94%B0%E5%A4%AB%E4%BA%BA.mp4"
    },
    {
      "category": "montage",
      "title": "天命人",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E5%A4%A9%E5%91%BD%E4%BA%BA.mp4"
    },
    {
      "category": "montage",
      "title": "永劫逆战",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E6%B0%B8%E5%8A%AB%E9%80%86%E6%88%98.mp4"
    },
    {
      "category": "montage",
      "title": "战斗天使",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/%E6%88%98%E6%96%97%E5%A4%A9%E4%BD%BF.mp4"
    },
    {
      "category": "ae",
      "title": "耳机特效",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/video_%23%20%23ae%E7%89%B9%E6%95%88%20%20%23AE%20%23th..._top_0_2.mp4"
    },
    {
      "category": "ae",
      "title": "宇宙粒子",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/video_Don%27t%20call%20me%20no..._top_0_2.mp4"
    },
    {
      "category": "ae",
      "title": "猩红湖面",
      "url": "https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/video_%E6%96%B0%E9%A3%8E%E6%A0%BC%20%23ae%20%23%E7%83%AD%E6%AD%8C%E5%88%86%E4%BA%AB%20%23a..._top_0_2.mp4"
    },
    {
      "category": "social",
      "title": "抖音主页",
      "url": "https://v.douyin.com/5Onmz-XZnVQ/"
    }
  ],
  "schemaVersion": 1
};

/* ===== Init ===== */
document.addEventListener("DOMContentLoaded", function() {
  loadData();
  initCursor();
  initCanvas();
  initNav();
  initReveal();
  initParallax();
  initSmoothScroll();
  initLogin();
  checkAuth();
});

/* ===== Data Loading ===== */
async function loadData() {
  try {
    var r = await fetch(DATA_URL + '?t=' + Date.now());
    if (r.ok) { siteData = await r.json(); }
  } catch(e) {}
  
  if (!siteData && fallbackData) siteData = fallbackData;
  if (!siteData) siteData = { categories: [], videos: [] };
  
  renderPortfolio();
}

function renderPortfolio() {
  if (!siteData) return;
  
  // Render filters
  var filtersDiv = document.getElementById('portfolioFilters');
  var cats = siteData.categories || [];
  var h = '<button class="filter-btn active" data-filter="all" onclick="filterPortfolio(\x27all\x27,this)">全部</button>';
  for (var i = 0; i < cats.length; i++) {
    h += '<button class="filter-btn" data-filter="' + cats[i].key + '" onclick="filterPortfolio(\x27' + cats[i].key + '\x27,this)">' + cats[i].name + '</button>';
  }
  filtersDiv.innerHTML = h;

  // Render grid
  var grid = document.getElementById('portfolioGrid');
  var videos = siteData.videos || [];
  var itemsHtml = '';
  for (var i = 0; i < videos.length; i++) {
    var v = videos[i];
    var isSocial = v.category === 'social';
    var onclick = isSocial ? 'window.open(\x27' + (v.url || DOUYIN) + '\x27,\x27_blank\x27)' : 'openVideo(this)';
    var catName = '';
    for (var j = 0; j < cats.length; j++) { if (cats[j].key === v.category) { catName = cats[j].name; break; } }
    var thumbHtml = isSocial 
      ? '<div class="portfolio-thumb-placeholder portfolio-thumb-douyin"></div>'
      : '<video muted preload="none" playsinline disablePictureInPicture class="portfolio-thumb-video" data-idx="' + i + '"></video>';
    var playText = isSocial ? '🎵 前往' : '▶ 播放';
    var extraClass = isSocial ? ' portfolio-card-douyin' : '';
    var extraCatClass = isSocial ? ' portfolio-cat-douyin' : '';
    var playClass = isSocial ? ' portfolio-play-douyin' : '';
    var dataAttr = isSocial ? '' : ' data-video="' + (v.url||'') + '"';
    
    itemsHtml += '<div class="portfolio-item" data-category="' + v.category + '" data-idx="' + i + '"><div class="portfolio-card' + extraClass + '" onclick="' + onclick + '"><div class="portfolio-thumb">' + thumbHtml + '<div class="portfolio-overlay"><span class="portfolio-play' + playClass + '">' + playText + '</span></div></div><div class="portfolio-info"><span class="portfolio-cat' + extraCatClass + '">' + catName + '</span><h4 class="portfolio-title"' + dataAttr + '>' + v.title + '</h4>';
    
    if (isAuthor) {
      itemsHtml += '<div class="admin-actions"><button onclick="event.stopPropagation();editVideo(' + i + ')" class="admin-btn">✏️</button><button onclick="event.stopPropagation();deleteVideo(' + i + ')" class="admin-btn admin-del">🗑️</button></div>';
    }
    itemsHtml += '</div></div></div>';
  }
  
  if (isAuthor) {
    itemsHtml += '<div class="portfolio-item portfolio-item-add"><div class="portfolio-card portfolio-card-add" onclick="addVideo()"><div class="portfolio-thumb"><div class="portfolio-thumb-placeholder portfolio-thumb-add">+</div></div><div class="portfolio-info"><h4 class="portfolio-title">添加作品</h4></div></div></div>';
  }
  
  grid.innerHTML = itemsHtml;
  
  // Lazy load thumbnails
  initThumbObserver();
  // Re-init reveal for new elements
  initReveal();
  
  // Admin panel
  if (isAuthor) renderAdminPanel();
}

function initThumbObserver() {
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        var tv = e.target;
        var idx = parseInt(tv.getAttribute('data-idx'));
        if (!isNaN(idx) && siteData && siteData.videos && siteData.videos[idx]) {
          var url = siteData.videos[idx].url;
          if (url && !tv.src) { tv.preload = 'metadata'; tv.src = url; tv.load(); }
        }
        obs.unobserve(tv);
      }
    });
  }, { rootMargin: '200px' });
  
  document.querySelectorAll('.portfolio-thumb-video').forEach(function(tv, i) {
    obs.observe(tv);
    if (i < 6) {
      var idx = parseInt(tv.getAttribute('data-idx'));
      if (!isNaN(idx) && siteData && siteData.videos && siteData.videos[idx]) {
        var url = siteData.videos[idx].url;
        if (url) { tv.preload = 'metadata'; tv.src = url; tv.load(); obs.unobserve(tv); }
      }
    }
  });
}

/* ===== Filter ===== */
function filterPortfolio(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('.portfolio-item').forEach(function(item) {
    if (cat === 'all' || item.getAttribute('data-category') === cat) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

/* ===== Video Playback ===== */
function openVideo(card) {
  var titleEl = card.querySelector('.portfolio-title');
  var url = titleEl.getAttribute('data-video');
  var m = document.getElementById('videoModal');
  var v = document.getElementById('videoEl');
  var p = document.getElementById('videoPlayer');
  var d = document.getElementById('videoTitle');
  if (!m || !url) return;
  d.textContent = titleEl.textContent.trim();
  if (!p.contains(v)) p.appendChild(v);
  v.src = url;
  v.load();
  v.play().catch(function(){});
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVideo() {
  var m = document.getElementById('videoModal');
  var v = document.getElementById('videoEl');
  if (!m) return;
  m.classList.remove('open');
  document.body.style.overflow = '';
  v.pause();
  v.removeAttribute('src');
}

/* ===== Auth ===== */
function initLogin() {
  document.getElementById('loginBtn').addEventListener('click', function() {
    if (isAuthor) { logout(); }
    else { document.getElementById('loginModal').classList.add('open'); }
  });
}

function checkAuth() {
  var token = localStorage.getItem('gavin_auth');
  if (token === AUTHOR_PW) {
    isAuthor = true;
    document.getElementById('loginBtn').textContent = '🔓';
    if (siteData) renderPortfolio();
  }
}

function doLogin() {
  var pw = document.getElementById('authPassword').value;
  if (pw === AUTHOR_PW) {
    isAuthor = true;
    localStorage.setItem('gavin_auth', pw);
    document.getElementById('loginModal').classList.remove('open');
    document.getElementById('loginBtn').textContent = '🔓';
    document.getElementById('loginError').textContent = '';
    document.getElementById('authPassword').value = '';
    renderPortfolio();
  } else {
    document.getElementById('loginError').textContent = '密码错误';
  }
}

function closeLogin() {
  document.getElementById('loginModal').classList.remove('open');
  document.getElementById('authPassword').value = '';
}

function logout() {
  isAuthor = false;
  localStorage.removeItem('gavin_auth');
  document.getElementById('loginBtn').textContent = '🔒';
  renderPortfolio();
}

/* ===== Author CRUD ===== */
function addVideo() {
  var cats = (siteData.categories || []).map(function(c) { return '<option value="' + c.key + '">' + c.name + '</option>'; }).join('');
  var form = '<h3>添加作品</h3>' +
    '<label>标题</label><input id="evTitle" class="edit-input">' +
    '<label>分类</label><select id="evCat" class="edit-input">' + cats + '</select>' +
    '<label>视频URL (或抖音链接)</label><input id="evUrl" class="edit-input" placeholder="https://gavin-videos.oss-cn-shenzhen.aliyuncs.com/...">' +
    '<div class="edit-btns"><button onclick="saveVideo(-1)" class="login-submit">保存</button><button onclick="closeEdit()" class="admin-btn">取消</button></div>';
  document.getElementById('editForm').innerHTML = form;
  document.getElementById('editModal').classList.add('open');
}

function editVideo(idx) {
  var v = siteData.videos[idx];
  var cats = (siteData.categories || []).map(function(c) { return '<option value="' + c.key + '"' + (c.key === v.category ? ' selected' : '') + '>' + c.name + '</option>'; }).join('');
  var form = '<h3>编辑作品</h3>' +
    '<label>标题</label><input id="evTitle" class="edit-input" value="' + escHtml(v.title) + '">' +
    '<label>分类</label><select id="evCat" class="edit-input">' + cats + '</select>' +
    '<label>视频URL</label><input id="evUrl" class="edit-input" value="' + escHtml(v.url||'') + '">' +
    '<div class="edit-btns"><button onclick="saveVideo(' + idx + ')" class="login-submit">保存</button><button onclick="closeEdit()" class="admin-btn">取消</button></div>';
  document.getElementById('editForm').innerHTML = form;
  document.getElementById('editModal').classList.add('open');
}

function saveVideo(idx) {
  var title = document.getElementById('evTitle').value.trim();
  var cat = document.getElementById('evCat').value;
  var url = document.getElementById('evUrl').value.trim();
  if (!title || !cat) { alert('标题和分类不能为空'); return; }
  
  if (idx >= 0) {
    siteData.videos[idx].title = title;
    siteData.videos[idx].category = cat;
    siteData.videos[idx].url = url;
  } else {
    siteData.videos.push({ title: title, category: cat, url: url });
  }
  closeEdit();
  renderPortfolio();
}

function deleteVideo(idx) {
  if (!confirm('确定删除「' + siteData.videos[idx].title + '」？')) return;
  siteData.videos.splice(idx, 1);
  renderPortfolio();
}

function closeEdit() {
  document.getElementById('editModal').classList.remove('open');
}

function escHtml(s) { return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

/* ===== Admin Panel ===== */
function renderAdminPanel() {
  var panel = document.getElementById('adminPanel');
  var catNames = (siteData.categories || []).map(function(c) { return '<span class="admin-cat-item">' + c.name + ' <button onclick="deleteCategory(\x27' + c.key + '\x27)" class="admin-del-sm">×</button></span>'; }).join(' ');
  var h = '<h4>⚙️ 管理面板</h4><div class="admin-section"><strong>分类管理</strong><br>' + catNames + '<br><input id="newCatKey" placeholder="标识(英文)" class="edit-input-sm"><input id="newCatName" placeholder="名称" class="edit-input-sm"><button onclick="addCategory()" class="admin-btn-sm">+ 添加分类</button></div>';
  h += '<button onclick="publishData()" class="login-submit" style="margin-top:12px">📤 发布到网站</button>';
  panel.innerHTML = h;
  panel.style.display = 'block';
}

function addCategory() {
  var key = document.getElementById('newCatKey').value.trim();
  var name = document.getElementById('newCatName').value.trim();
  if (!key || !name) { alert('请填写完整'); return; }
  siteData.categories.push({ key: key, name: name });
  renderPortfolio();
}

function deleteCategory(key) {
  if (!confirm('删除分类「' + key + '」？该分类下的视频不会被删除。')) return;
  siteData.categories = siteData.categories.filter(function(c) { return c.key !== key; });
  renderPortfolio();
}

/* ===== Publish to GitHub ===== */
async function publishData() {
  var token = localStorage.getItem('gavin_gh_token');
  if (!token) {
    token = prompt('请输入 GitHub Personal Access Token (repo权限):');
    if (!token) return;
    localStorage.setItem('gavin_gh_token', token);
  }
  
  try {
    // Get current file SHA
    var r1 = await fetch(GH_API, { headers: { 'Authorization': 'Bearer ' + token } });
    var d1 = await r1.json();
    var sha = d1.sha;
    
    // Update file
    var content = btoa(unescape(encodeURIComponent(JSON.stringify(siteData, null, 2))));
    var r2 = await fetch(GH_API, {
      method: 'PUT',
      headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Update portfolio data', content: content, sha: sha })
    });
    var d2 = await r2.json();
    if (d2.content) {
      alert('✅ 发布成功！约30秒后网站自动更新。');
    } else {
      alert('❌ 发布失败: ' + (d2.message || '未知错误'));
    }
  } catch(e) {
    alert('❌ 发布失败: ' + e.message);
  }
}

/* ===== Existing helpers (unchanged) ===== */
function initCursor() {
  var cursor = document.querySelector('.cursor'), follower = document.querySelector('.cursor-follower');
  if (!cursor || !follower) return;
  var mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, followerX = 0, followerY = 0;
  document.addEventListener('mousemove', function(e) { mouseX = e.clientX; mouseY = e.clientY; });
  document.querySelectorAll('a, button, .portfolio-card, .tag, .filter-btn, .contact-link, .video-modal-close').forEach(function(el) {
    el.addEventListener('mouseenter', function() { cursor.classList.add('hover'); follower.classList.add('hover'); });
    el.addEventListener('mouseleave', function() { cursor.classList.remove('hover'); follower.classList.remove('hover'); });
  });
  (function animate() {
    cursorX += (mouseX - cursorX) * 0.35; cursorY += (mouseY - cursorY) * 0.35;
    followerX += (mouseX - followerX) * 0.12; followerY += (mouseY - followerY) * 0.12;
    cursor.style.left = cursorX + 'px'; cursor.style.top = cursorY + 'px';
    follower.style.left = followerX + 'px'; follower.style.top = followerY + 'px';
    requestAnimationFrame(animate);
  })();
}

function initCanvas() {
  var canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];
  (function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; })();
  window.addEventListener('resize', resize);
  for (var i = 0; i < Math.min(60, Math.floor(window.innerWidth / 25)); i++) {
    particles.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx: (Math.random()-0.5)*0.35, vy: (Math.random()-0.5)*0.35, r: Math.random()*2+0.5, alpha: Math.random()*0.35+0.08 });
  }
  var mpX = 0, mpY = 0;
  document.addEventListener('mousemove', function(e) { mpX = e.clientX; mpY = e.clientY; });
  (function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      var dx = mpX - p.x, dy = mpY - p.y;
      if (Math.sqrt(dx*dx+dy*dy) < 150) { p.x += dx*0.001; p.y += dy*0.001; }
      p.x += p.vx; p.y += p.vy;
      if (p.x<0||p.x>canvas.width) p.vx*=-1;
      if (p.y<0||p.y>canvas.height) p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(109,179,216,'+p.alpha+')'; ctx.fill();
      for (var j = i+1; j < particles.length; j++) {
        var q = particles[j], dx2=p.x-q.x, dy2=p.y-q.y, dist2=Math.sqrt(dx2*dx2+dy2*dy2);
        if (dist2<120) { ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y); ctx.strokeStyle='rgba(109,179,216,'+(0.04*(1-dist2/120))+')'; ctx.lineWidth=0.5; ctx.stroke(); }
      }
    }
    requestAnimationFrame(draw);
  })();
}

function initNav() {
  var nav = document.getElementById('nav'), toggle = document.querySelector('.nav-toggle'), links = document.querySelector('.nav-links'), navLinks = document.querySelectorAll('.nav-links a'), sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    var current = '';
    sections.forEach(function(s) { if (window.scrollY >= s.offsetTop-120) current = s.getAttribute('id'); });
    navLinks.forEach(function(l) { l.classList.toggle('active', l.getAttribute('data-nav') === current); });
  });
  if (toggle && links) {
    toggle.addEventListener('click', function() { links.classList.toggle('open'); toggle.classList.toggle('open'); });
    navLinks.forEach(function(l) { l.addEventListener('click', function() { links.classList.remove('open'); toggle.classList.remove('open'); }); });
  }
}

function initReveal() {
  document.querySelectorAll('.about-card, .timeline-item, .portfolio-item, .contact-quote, .section-title, .about-intro, .about-tags, .contact-tagline, .contact-links').forEach(function(el) { el.classList.add('reveal'); });
  document.querySelectorAll('.timeline-item').forEach(function(el, i) { el.classList.add('reveal-delay-' + Math.min(i+1,5)); });
  document.querySelectorAll('.about-card').forEach(function(el, i) { el.classList.add('reveal-delay-' + Math.min(i+1,5)); });
  var observer = new IntersectionObserver(function(entries) { entries.forEach(function(e) { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }); }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
}

function initParallax() {
  var hero = document.querySelector('.hero'), glow = document.querySelector('.hero-bg-glow'), photo = document.querySelector('.hero-photo');
  if (!hero||!glow) return;
  hero.addEventListener('mousemove', function(e) {
    var rect = hero.getBoundingClientRect(), cx = rect.width/2, cy = rect.height/2, mx = (e.clientX-rect.left-cx)/cx*20, my = (e.clientY-rect.top-cy)/cy*20;
    glow.style.transform = 'translate(calc(-50% + '+mx+'px), calc(-50% + '+my+'px))';
    if (photo) photo.style.transform = 'translate('+(mx*0.1)+'px, '+(my*0.1)+'px)';
  });
  hero.addEventListener('mouseleave', function() { glow.style.transform = 'translate(-50%,-50%)'; if(photo) photo.style.transform = 'translate(0,0)'; });
  window.addEventListener('scroll', function() {
    var hc = document.querySelector('.hero-content');
    if (hc && window.scrollY < window.innerHeight) { hc.style.transform = 'translateY('+(window.scrollY*0.15)+'px)'; hc.style.opacity = Math.max(0, 1-window.scrollY/(window.innerHeight*0.8)); }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(a) { a.addEventListener('click', function(e) { e.preventDefault(); var t = document.querySelector(this.getAttribute('href')); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }); });
}
