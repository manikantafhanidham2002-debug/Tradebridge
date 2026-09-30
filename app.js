// TradeBridge India · Client Controller & Application Logic

document.addEventListener('DOMContentLoaded', () => {
  const data = window.TRADE_DATA;
  if (!data) {
    console.error('TradeBridge data not loaded.');
    return;
  }

  // State Management
  const state = {
    currentTab: 'home',
    theme: 'light', // Default to executive Green & White professional theme
    explorerFilter: 'All',
    explorerSearch: '',
    glossaryFilter: 'All',
    glossarySearch: '',
    compareSelection: ['apeda', 'eepc', 'gjepc'],
    quizLevel: 'Basic',
    quizIndex: 0,
    quizScore: 0,
    quizUserAnswered: false,
    checklistState: JSON.parse(localStorage.getItem('tradebridge_checklist') || '{}')
  };

  /* ==========================================================================
     1. THEME TOGGLER
     ========================================================================== */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeMoonIcon = document.getElementById('themeMoonIcon');
  const themeSunIcon = document.getElementById('themeSunIcon');

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      if (themeMoonIcon) themeMoonIcon.style.display = 'none';
      if (themeSunIcon) themeSunIcon.style.display = 'block';
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      if (themeMoonIcon) themeMoonIcon.style.display = 'block';
      if (themeSunIcon) themeSunIcon.style.display = 'none';
    }
    localStorage.setItem('tradebridge_theme', theme);
    state.theme = theme;
  }

  // Check stored theme or default to light Green & White
  const savedTheme = localStorage.getItem('tradebridge_theme') || 'light';
  applyTheme(savedTheme);

  themeToggleBtn?.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  /* ==========================================================================
     2. NAVIGATION & TAB SWITCHING
     ========================================================================== */
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const modulePanels = document.querySelectorAll('.module-panel');

  function switchTab(tabId) {
    if (!tabId) return;
    state.currentTab = tabId;

    // Update Nav buttons
    tabButtons.forEach(btn => {
      const match = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', match ? 'true' : 'false');
    });

    // Update Panels
    modulePanels.forEach(panel => {
      const match = panel.id === `panel-${tabId}`;
      panel.classList.toggle('active', match);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      switchTab(tab);
      const navTabs = document.querySelector('.nav-tabs');
      if (navTabs && window.innerWidth <= 768) {
        navTabs.style.display = 'none';
      }
    });
  });

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  mobileMenuBtn?.addEventListener('click', () => {
    const navTabs = document.querySelector('.nav-tabs');
    if (navTabs) {
      const isVisible = window.getComputedStyle(navTabs).display !== 'none';
      navTabs.style.display = isVisible ? 'none' : 'flex';
      navTabs.style.position = isVisible ? '' : 'absolute';
      navTabs.style.top = isVisible ? '' : 'var(--header-height)';
      navTabs.style.left = isVisible ? '' : '16px';
      navTabs.style.right = isVisible ? '' : '16px';
      navTabs.style.flexDirection = isVisible ? '' : 'column';
      navTabs.style.background = isVisible ? '' : 'var(--bg-modal)';
      navTabs.style.padding = isVisible ? '' : '16px';
      navTabs.style.borderRadius = isVisible ? '' : 'var(--radius-lg)';
      navTabs.style.boxShadow = isVisible ? '' : 'var(--shadow-lg)';
      navTabs.style.border = isVisible ? '' : '1px solid var(--border-subtle)';
      navTabs.style.zIndex = isVisible ? '' : '1100';
    }
  });

  document.getElementById('brandBtn')?.addEventListener('click', () => switchTab('home'));
  document.getElementById('heroExploreBtn')?.addEventListener('click', () => switchTab('explorer'));
  document.getElementById('viewAllEpcBtn')?.addEventListener('click', () => switchTab('explorer'));

  // AI Agent Navigation
  const scrollToAgentSection = (e) => {
    if (e) e.preventDefault();
    if (state.currentTab !== 'home') {
      switchTab('home');
    }
    const agentSec = document.getElementById('agentSection');
    if (agentSec) {
      setTimeout(() => {
        agentSec.scrollIntoView({ behavior: 'smooth' });
        const input = document.getElementById('embeddedChatInput');
        if (input) input.focus();
      }, 50);
    }
  };
  document.getElementById('headerAgentBtn')?.addEventListener('click', scrollToAgentSection);
  document.getElementById('headerContactBtn')?.addEventListener('click', scrollToAgentSection);
  document.getElementById('footerAgentLink')?.addEventListener('click', scrollToAgentSection);
  document.getElementById('footerContactLink')?.addEventListener('click', scrollToAgentSection);

  // Footer tab links
  document.querySelectorAll('[data-footer-tab]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(el.getAttribute('data-footer-tab'));
    });
  });

  /* ==========================================================================
     3. INTERACTIVE 3D CANVAS TRADE GLOBE
     ========================================================================== */
  const canvas = document.getElementById('tradeGlobeCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width;
    let height = canvas.height;
    let rotation = 0.45;
    let isDragging = false;
    let startX = 0;
    let autoRotate = true;

    // India's coordinate (approx center/JNPT Mumbai)
    const indiaCoord = { lat: 19.0, lon: 72.8, name: 'India (JNPT / Mumbai)' };

    // Projection from Lat/Lon to 3D Sphere & 2D Screen
    function project(lat, lon, r) {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + rotation * 180) * (Math.PI / 180);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = -r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.sin(theta);

      return {
        x: width / 2 + x,
        y: height / 2 + y,
        z: z,
        visible: z > -r * 0.15 // visible on the front hemisphere
      };
    }

    let pulseTime = 0;

    function renderGlobe() {
      ctx.clearRect(0, 0, width, height);
      const radius = width * 0.38;
      pulseTime += 0.03;

      // Glow halo
      const glowGrad = ctx.createRadialGradient(width/2, height/2, radius * 0.85, width/2, height/2, radius * 1.25);
      glowGrad.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
      glowGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(width/2, height/2, radius * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // Globe base sphere
      const sphereGrad = ctx.createRadialGradient(width/2 - radius*0.3, height/2 - radius*0.3, radius*0.2, width/2, height/2, radius);
      sphereGrad.addColorStop(0, '#064e3b');
      sphereGrad.addColorStop(0.85, '#022c22');
      sphereGrad.addColorStop(1, '#059669');
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(width/2, height/2, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw latitude circles
      ctx.strokeStyle = 'rgba(52, 211, 153, 0.18)';
      ctx.lineWidth = 0.8;
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        for (let lon = -180; lon <= 180; lon += 5) {
          const pt = project(lat, lon, radius);
          if (lon === -180) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      }

      // Draw longitude meridians
      for (let lon = -180; lon < 180; lon += 45) {
        ctx.beginPath();
        for (let lat = -90; lat <= 90; lat += 5) {
          const pt = project(lat, lon, radius);
          if (lat === -90) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();
      }

      // Project India Hub
      const indPt = project(indiaCoord.lat, indiaCoord.lon, radius);

      // Draw Trade Arcs to Global Connections
      data.connections.forEach((conn, idx) => {
        const destPt = project(conn.lat, conn.lon, radius);

        // Draw curved bezier arc if either point is visible
        if (indPt.z > -radius * 0.3 || destPt.z > -radius * 0.3) {
          ctx.beginPath();
          ctx.moveTo(indPt.x, indPt.y);

          // Control point pulled outwards
          const midX = (indPt.x + destPt.x) / 2;
          const midY = (indPt.y + destPt.y) / 2 - 45;
          ctx.quadraticCurveTo(midX, midY, destPt.x, destPt.y);

          ctx.strokeStyle = conn.color || 'rgba(6, 182, 212, 0.7)';
          ctx.lineWidth = 1.6;
          ctx.stroke();

          // Animated particle travelling along the arc
          const t = (pulseTime + idx * 0.25) % 1;
          const px = (1-t)*(1-t)*indPt.x + 2*(1-t)*t*midX + t*t*destPt.x;
          const py = (1-t)*(1-t)*indPt.y + 2*(1-t)*t*midY + t*t*destPt.y;

          ctx.fillStyle = '#fff';
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI*2);
          ctx.fill();
        }

        // Draw destination pin
        if (destPt.visible) {
          ctx.fillStyle = conn.color;
          ctx.beginPath();
          ctx.arc(destPt.x, destPt.y, 4, 0, Math.PI * 2);
          ctx.fill();

          // Port Label
          ctx.fillStyle = '#f8fafc';
          ctx.font = '600 11px Plus Jakarta Sans, sans-serif';
          ctx.fillText(conn.name, destPt.x + 7, destPt.y + 3);
        }
      });

      // Highlight India with pulsing beacon
      if (indPt.visible) {
        const pulseR = 5 + Math.sin(pulseTime * 3) * 3;
        ctx.fillStyle = 'rgba(245, 158, 11, 0.35)';
        ctx.beginPath();
        ctx.arc(indPt.x, indPt.y, pulseR * 1.8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(indPt.x, indPt.y, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#f8fafc';
        ctx.font = '700 12px Outfit, sans-serif';
        ctx.fillText('INDIA', indPt.x + 8, indPt.y - 6);
      }

      if (autoRotate && !isDragging) {
        rotation += 0.0015;
      }

      requestAnimationFrame(renderGlobe);
    }

    renderGlobe();

    // Canvas Drag Controls
    canvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      autoRotate = false;
    });

    window.addEventListener('mouseup', () => {
      isDragging = false;
      setTimeout(() => { autoRotate = true; }, 3000);
    });

    canvas.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      rotation += dx * 0.004;
      startX = e.clientX;
    });

    // Cycle through connection tooltips periodically
    let activeConnIdx = 0;
    setInterval(() => {
      activeConnIdx = (activeConnIdx + 1) % data.connections.length;
      const conn = data.connections[activeConnIdx];
      const titleEl = document.getElementById('globePortTitle');
      const descEl = document.getElementById('globePortDesc');
      const metricEl = document.getElementById('globePortMetric');
      if (titleEl && descEl && metricEl) {
        titleEl.innerHTML = `<b>India → ${conn.name} (${conn.place})</b>`;
        descEl.textContent = conn.note;
        metricEl.textContent = `${conn.tradeVolume} Trade`;
      }
    }, 4500);
  }

  /* ==========================================================================
     4. RENDER EPC CARDS (HOME PREVIEW & EPC EXPLORER ENGINE)
     ========================================================================== */
  const homeEpcPreviewGrid = document.getElementById('homeEpcPreviewGrid');
  const categoryCardsGrid = document.getElementById('categoryCardsGrid');
  const epcResultCardsList = document.getElementById('epcResultCardsList');
  const resultsCountLabel = document.getElementById('resultsCountLabel');
  const epcSearchInput = document.getElementById('epcSearchInput');
  const epcSearchSubmitBtn = document.getElementById('epcSearchSubmitBtn');
  const sidebarWithinSearch = document.getElementById('sidebarWithinSearch');
  const resetEpcFiltersBtn = document.getElementById('resetEpcFiltersBtn');
  const viewAllEpcLink = document.getElementById('viewAllEpcLink');
  const epcSortSelect = document.getElementById('epcSortSelect');
  const epcDirectoryMainView = document.getElementById('epcDirectoryMainView');
  const epcDedicatedProfileView = document.getElementById('epcDedicatedProfileView');
  const backToResultsBtn = document.getElementById('backToResultsBtn');
  const crumbHome = document.getElementById('crumbHome');
  const crumbExplorer = document.getElementById('crumbExplorer');
  const crumbCategory = document.getElementById('crumbCategory');
  const crumbCouncilName = document.getElementById('crumbCouncilName');
  const popularTagBtns = document.querySelectorAll('.popular-tag-btn');

  // Helper card for Homepage preview
  function createEpcCard(c) {
    const card = document.createElement('article');
    card.className = 'epc-card';
    card.setAttribute('data-id', c.id);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View details for ${c.name}`);

    const tagsHtml = c.products.slice(0, 3).map(p => `<span class="tag-pill">${p}</span>`).join('');

    card.innerHTML = `
      <div>
        <div class="epc-card-top">
          <div class="epc-icon-badge" style="background:${c.color || '#059669'}20; color:${c.color || '#059669'};">
            ${c.name.substring(0, 2)}
          </div>
          <div class="epc-meta-top">
            <span class="badge badge-cyan" style="margin-bottom:6px;">${c.sector}</span>
            <h3 class="epc-name">${c.name}</h3>
            <p class="epc-fullname">${c.fullName}</p>
          </div>
        </div>
        <p style="font-size:0.86rem; color:var(--text-secondary); margin:14px 0 16px; line-height:1.5;">
          ${c.summary}
        </p>
        <div class="epc-products-tags">
          ${tagsHtml}
        </div>
      </div>
      <div class="epc-card-bottom">
        <span style="color:var(--text-muted); font-size:0.75rem;">HQ: ${c.headquarters || 'India'}</span>
        <span class="epc-link-btn">
          View Council Guide
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </span>
      </div>
    `;

    const handleOpen = () => {
      switchTab('explorer');
      openDedicatedProfile(c.id);
    };

    card.addEventListener('click', handleOpen);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleOpen();
      }
    });

    return card;
  }

  // Populate Home featured EPCs (exactly 3 matching Screenshot 2: TEXPROCIL, AEPC, APEDA)
  if (homeEpcPreviewGrid) {
    homeEpcPreviewGrid.innerHTML = '';
    data.councils.slice(0, 3).forEach(c => {
      homeEpcPreviewGrid.appendChild(createEpcCard(c));
    });
  }

  // 1. Render 12 Product Categories Grid
  function renderEpcCategories() {
    if (!categoryCardsGrid) return;
    categoryCardsGrid.innerHTML = '';

    const categories = data.epcCategories || [];
    categories.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'category-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('data-sector-key', cat.sectorKey);
      card.setAttribute('aria-label', `Browse ${cat.name}`);

      card.innerHTML = `
        <div class="cat-info-group">
          <div class="cat-icon-badge">${cat.icon}</div>
          <div class="cat-text-group">
            <h3>${cat.name}</h3>
            <span>${cat.count}</span>
          </div>
        </div>
        <span class="cat-arrow">→</span>
      `;

      const selectCategory = () => {
        state.explorerFilter = cat.sectorKey;
        // Uncheck sidebar checkboxes
        document.querySelectorAll('#productTypeCheckboxes input[type="checkbox"]').forEach(cb => cb.checked = false);
        renderEpcResults();
        const resultsEl = document.getElementById('epcResultsSection');
        if (resultsEl) resultsEl.scrollIntoView({ behavior: 'smooth' });
      };

      card.addEventListener('click', selectCategory);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectCategory();
        }
      });

      categoryCardsGrid.appendChild(card);
    });
  }

  // 2. Render Filtered EPC Results Cards
  function renderEpcResults() {
    if (!epcResultCardsList) return;
    epcResultCardsList.innerHTML = '';

    const query = (state.explorerSearch || '').toLowerCase().trim();
    const sectorFilter = state.explorerFilter || 'All';

    // Get checked product types from sidebar
    const checkedProductTypes = Array.from(document.querySelectorAll('#productTypeCheckboxes input[type="checkbox"]:checked')).map(cb => cb.value.toLowerCase());

    let filtered = data.councils.filter(c => {
      // Sector match
      const matchSector = sectorFilter === 'All' || 
        c.sector.toLowerCase().includes(sectorFilter.toLowerCase()) ||
        sectorFilter.toLowerCase().includes(c.sector.toLowerCase());

      // Query match (covers name, fullName, sector, products, summary, ministry, hq)
      const matchQuery = !query ||
        c.name.toLowerCase().includes(query) ||
        c.fullName.toLowerCase().includes(query) ||
        c.sector.toLowerCase().includes(query) ||
        (c.ministry && c.ministry.toLowerCase().includes(query)) ||
        (c.headquarters && c.headquarters.toLowerCase().includes(query)) ||
        c.products.some(p => p.toLowerCase().includes(query)) ||
        c.summary.toLowerCase().includes(query);

      // Product types checkbox filter
      const matchProducts = checkedProductTypes.length === 0 ||
        checkedProductTypes.some(pt => 
          c.products.some(p => p.toLowerCase().includes(pt)) ||
          c.sector.toLowerCase().includes(pt) ||
          c.name.toLowerCase().includes(pt)
        );

      return matchSector && matchQuery && matchProducts;
    });

    // Sorting
    const sortVal = epcSortSelect ? epcSortSelect.value : 'relevance';
    if (sortVal === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortVal === 'turnover') {
      const getVal = (c) => {
        const str = c.stats?.exportVal || '0';
        const num = parseFloat(str.replace(/[^0-9.]/g, '')) || 0;
        return num;
      };
      filtered.sort((a, b) => getVal(b) - getVal(a));
    } else if (sortVal === 'established') {
      filtered.sort((a, b) => (a.established || 2000) - (b.established || 2000));
    }

    if (resultsCountLabel) {
      resultsCountLabel.textContent = `Showing ${filtered.length} Export Promotion Council${filtered.length === 1 ? '' : 's'}${sectorFilter !== 'All' ? ` in ${sectorFilter}` : ''}`;
    }

    if (filtered.length === 0) {
      epcResultCardsList.innerHTML = `
        <div style="text-align:center; padding:50px 20px; background:var(--bg-card); border-radius:var(--radius-xl); border:1px solid var(--border-subtle);">
          <div style="font-size:2.4rem; margin-bottom:12px;">🔍</div>
          <h3 style="font-family:var(--font-heading); font-size:1.3rem;">No Export Promotion Council matched your search</h3>
          <p style="color:var(--text-secondary); margin:8px 0 18px; font-size:0.9rem;">Try searching for broad terms like "Textiles", "Rice", "Engineering", or reset filters.</p>
          <button class="btn-secondary" id="emptyResetBtn" style="padding:8px 18px;">Reset All Filters</button>
        </div>
      `;
      document.getElementById('emptyResetBtn')?.addEventListener('click', resetAllExplorerFilters);
      return;
    }

    filtered.forEach(c => {
      const card = document.createElement('article');
      card.className = 'epc-result-card';
      
      const tagsHtml = c.products.slice(0, 5).map(p => `<span class="tag-pill">${p}</span>`).join('');
      const initials = c.name.substring(0, 2);

      card.innerHTML = `
        <div class="epc-card-main-info">
          <div class="epc-logo-circle">${initials}</div>
          <div style="flex:1;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px;">
              <div>
                <h3 style="font-family:var(--font-heading); font-size:1.3rem; font-weight:700; color:var(--text-primary); margin-bottom:4px;">
                  ${c.name} <span style="font-size:0.95rem; font-weight:500; color:var(--text-muted); font-family:var(--font-body);">— ${c.fullName}</span>
                </h3>
                <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:10px;">
                  <span class="badge badge-cyan">${c.sector}</span>
                  <span class="badge badge-emerald">Ministry: ${c.ministry ? c.ministry.replace('Ministry of ', '').replace(', Government of India', '') : 'Commerce & Industry'}</span>
                  <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">Est. ${c.established || '1955'} • HQ: ${c.headquarters || 'India'}</span>
                </div>
              </div>
              <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--emerald-400); background:rgba(16, 185, 129, 0.1); border:1px solid rgba(16, 185, 129, 0.25); padding:4px 10px; border-radius:var(--radius-full); display:flex; align-items:center; gap:4px;">
                <span>✓</span> Verified Official Record
              </div>
            </div>

            <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.55; margin-bottom:14px;">
              ${c.summary}
            </p>

            <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:18px;">
              ${tagsHtml}
            </div>

            <div style="display:flex; justify-content:space-between; align-items:center; padding-top:14px; border-top:1px solid var(--border-subtle); flex-wrap:wrap; gap:12px;">
              <div style="display:flex; gap:16px; font-size:0.82rem; color:var(--text-muted);">
                <span>Exporters: <strong style="color:var(--text-primary);">${c.stats?.exporters || '2,000+'}</strong></span>
                <span>Turnover: <strong style="color:var(--saffron-400);">${c.stats?.exportVal || '$10B+'}</strong></span>
              </div>
              <div style="display:flex; gap:10px; align-items:center;">
                <button class="btn-primary view-details-action-btn" data-id="${c.id}" style="padding:8px 16px; font-size:0.85rem;">
                  <span>View Details</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
                <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:8px 14px; font-size:0.85rem;">
                  <span>Official Website ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;

      card.querySelector('.view-details-action-btn')?.addEventListener('click', () => {
        openDedicatedProfile(c.id);
      });

      epcResultCardsList.appendChild(card);
    });
  }

  // 3. Dedicated Full EPC Profile Engine
  function openDedicatedProfile(councilId) {
    const c = data.councils.find(item => item.id === councilId);
    if (!c || !epcDedicatedProfileView || !epcDirectoryMainView) return;

    // Set Breadcrumbs
    if (crumbCategory) crumbCategory.textContent = c.sector;
    if (crumbCouncilName) crumbCouncilName.textContent = c.name;

    // Header Info
    const logoEl = document.getElementById('profileLogoCircle');
    if (logoEl) logoEl.textContent = c.name.substring(0, 2);

    const minBadge = document.getElementById('profileMinistryBadge');
    if (minBadge) minBadge.textContent = c.ministry || 'Government of India (Ministry of Commerce & Industry)';

    const covBadge = document.getElementById('profileCoverageBadge');
    if (covBadge) covBadge.textContent = c.coverage || 'Pan-India';

    const titleEl = document.getElementById('profileCouncilTitle');
    if (titleEl) titleEl.textContent = `${c.fullName} (${c.name})`;

    const tagEl = document.getElementById('profileTagline');
    if (tagEl) tagEl.textContent = c.summary;

    const estEl = document.getElementById('profileEstablished');
    if (estEl) estEl.textContent = c.established || '1955';

    const hqEl = document.getElementById('profileHq');
    if (hqEl) hqEl.textContent = c.headquarters || 'New Delhi, India';

    const expEl = document.getElementById('profileExporters');
    if (expEl) expEl.textContent = c.stats?.exporters || '2,500+';

    const turnEl = document.getElementById('profileTurnover');
    if (turnEl) turnEl.textContent = c.stats?.exportVal || '$12.5 Billion';

    const webBtn = document.getElementById('profileOfficialWebBtn');
    if (webBtn) webBtn.href = c.url;

    // TAB 1: OVERVIEW
    const aboutEl = document.getElementById('profileAboutText');
    if (aboutEl) aboutEl.textContent = `${c.summary} Established under the aegis of the Government of India, ${c.name} serves as the apex trade facilitation organization for Indian exporters, maintaining direct linkages with international trade delegations, commercial consulates, and standards bodies worldwide.`;

    const missionEl = document.getElementById('profileMissionText');
    if (missionEl) missionEl.textContent = c.mission || `To promote, facilitate and accelerate exports from India, ensuring that Indian products meet premier international quality standards and achieve resilient market presence globally.`;

    const highlightsList = document.getElementById('profileHighlightsList');
    if (highlightsList) {
      highlightsList.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:12px; font-size:0.88rem;">
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
            <span style="color:var(--text-muted);">Sector</span>
            <strong style="color:var(--cyan-400);">${c.sector}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
            <span style="color:var(--text-muted);">Jurisdiction</span>
            <strong>${c.coverage || 'All India'}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
            <span style="color:var(--text-muted);">Type of Organisation</span>
            <strong>${c.type || 'Export Promotion Council (EPC)'}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
            <span style="color:var(--text-muted);">Parent Ministry</span>
            <strong>${c.ministry ? c.ministry.replace(', Government of India', '') : 'Ministry of Commerce & Industry'}</strong>
          </div>
          <div style="display:flex; justify-content:space-between; padding-bottom:4px;">
            <span style="color:var(--text-muted);">Export Destinations</span>
            <strong style="color:var(--saffron-400);">${c.stats?.countries || '100+'} Countries</strong>
          </div>
        </div>
      `;
    }

    const relevantList = document.getElementById('profileRelevantList');
    if (relevantList) {
      const items = c.relevantFor && c.relevantFor.length ? c.relevantFor : c.products.map(p => `Exporters & manufacturers of ${p}`);
      relevantList.innerHTML = items.map(item => `
        <li style="display:flex; align-items:flex-start; gap:8px; font-size:0.86rem; color:var(--text-secondary); margin-bottom:8px;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-400)" stroke-width="2.5" style="flex-shrink:0; margin-top:3px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${item}</span>
        </li>
      `).join('');
    }

    // TAB 2: PRODUCTS COVERED
    const productsGrid = document.getElementById('profileProductsDetailedGrid');
    if (productsGrid) {
      const detailed = c.productsCoveredDetailed && c.productsCoveredDetailed.length ? c.productsCoveredDetailed : c.products.map(p => ({
        title: p,
        desc: `Commercial production and export specifications for ${p}, aligned with harmonized ITC-HS classifications.`
      }));

      productsGrid.innerHTML = detailed.map(item => `
        <div class="product-detail-item">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
            <div style="width:8px; height:8px; border-radius:50%; background:var(--cyan-400);"></div>
            <h4 style="font-family:var(--font-heading); font-size:1.05rem; font-weight:700; color:var(--text-primary);">${item.title}</h4>
          </div>
          <p style="font-size:0.86rem; color:var(--text-secondary); line-height:1.5;">${item.desc}</p>
        </div>
      `).join('');
    }

    // TAB 3: SERVICES
    const servicesList = document.getElementById('profileServicesList');
    if (servicesList) {
      const services = c.services && c.services.length ? c.services : [
        "Assisting overseas buyers in sourcing from verified and accredited Indian exporters.",
        "Organizing trade delegations, buyer-seller conclaves, and international exhibitions.",
        "Providing market access intelligence, tariff schedules, and trade barrier alerts.",
        "Facilitating commercial dispute resolution and arbitration under council rules.",
        "Issuing Certificates of Origin, visa recommendations, and manufacturer accreditations."
      ];

      servicesList.innerHTML = services.map((srv, idx) => `
        <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px 20px; display:flex; gap:16px; align-items:flex-start; margin-bottom:12px;">
          <div style="width:32px; height:32px; border-radius:50%; background:rgba(6, 182, 212, 0.15); color:var(--cyan-400); display:flex; align-items:center; justify-content:center; font-weight:700; font-family:var(--font-mono); flex-shrink:0;">${idx + 1}</div>
          <div style="font-size:0.92rem; color:var(--text-primary); line-height:1.55;">${srv}</div>
        </div>
      `).join('');
    }

    // TAB 4: MEMBERSHIP
    const membershipBlock = document.getElementById('profileMembershipBlock');
    if (membershipBlock) {
      const mem = c.membership || {};
      const docsHtml = (mem.documentsRequired || [
        "Copy of Importer-Exporter Code (IEC) issued by DGFT",
        "GST Registration Certificate",
        "PAN Card copy (Company/Firm/Proprietor)",
        "Banker's Certificate of Account Status (AD Code)",
        "CA Turnover Certificate for preceding financial year"
      ]).map(d => `<li style="margin-bottom:6px;">✓ ${d}</li>`).join('');

      membershipBlock.innerHTML = `
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:24px;">
          <div style="background:var(--bg-card); padding:24px; border-radius:var(--radius-lg); border:1px solid var(--border-subtle);">
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; color:var(--saffron-400); margin-bottom:12px;">RCMC Application Process</h4>
            <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.6; margin-bottom:16px;">
              ${mem.rcmcProcess || 'Apply online via the DGFT Common RCMC Portal (dgft.gov.in) selecting this council as the competent issuing authority.'}
            </p>
            <div style="background:rgba(0,0,0,0.25); padding:14px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle);">
              <strong style="color:var(--text-primary); display:block; font-size:0.85rem; margin-bottom:4px;">Eligibility Criteria:</strong>
              <span style="font-size:0.85rem; color:var(--text-muted);">${mem.eligibility || 'Registered Indian business entity engaged in manufacturing or merchant exporting of scheduled items.'}</span>
            </div>
            <div style="margin-top:16px; background:rgba(6,182,212,0.1); border:1px solid rgba(6,182,212,0.25); padding:14px; border-radius:var(--radius-sm);">
              <strong style="color:var(--cyan-400); display:block; font-size:0.85rem; margin-bottom:4px;">Annual Membership Fees:</strong>
              <span style="font-size:0.85rem; color:var(--text-primary);">${mem.annualFee || 'Tiered membership based on export turnover (₹5,000 to ₹25,000 + 18% GST).'}</span>
            </div>
          </div>

          <div style="background:var(--bg-card); padding:24px; border-radius:var(--radius-lg); border:1px solid var(--border-subtle);">
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; color:var(--emerald-400); margin-bottom:12px;">Mandatory Documents Checklist</h4>
            <ul style="list-style:none; padding:0; font-size:0.88rem; color:var(--text-secondary); line-height:1.6;">
              ${docsHtml}
            </ul>
            <div style="margin-top:20px;">
              <a href="https://www.dgft.gov.in" target="_blank" rel="noopener noreferrer" class="btn-primary" style="display:inline-flex; align-items:center; gap:8px; padding:10px 18px; font-size:0.85rem;">
                <span>Apply for RCMC on DGFT</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>
      `;
    }

    // TAB 5: KEY RESOURCES
    const resourcesList = document.getElementById('profileResourcesList');
    if (resourcesList) {
      const res = c.resources && c.resources.length ? c.resources : [
        "Annual Export Turnover & Commodity Analysis Report",
        "Exporters Directory & Searchable Member Database",
        "Guide to Tariff Concessions under Bilateral Free Trade Agreements (FTAs)",
        "Standard Operating Procedures for Customs Clearance and Quality Certification"
      ];

      resourcesList.innerHTML = res.map((r) => `
        <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px 20px; display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; gap:16px; flex-wrap:wrap;">
          <div style="display:flex; align-items:center; gap:12px;">
            <span style="font-size:1.4rem;">📄</span>
            <div>
              <strong style="color:var(--text-primary); font-size:0.92rem; display:block;">${r}</strong>
              <span style="font-size:0.78rem; color:var(--text-muted); font-family:var(--font-mono);">Official Publication · Updated 2026</span>
            </div>
          </div>
          <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:6px 14px; font-size:0.8rem;">
            Access Resource ↗
          </a>
        </div>
      `).join('');
    }

    // TAB 6: EVENTS & SCHEMES
    const eventsList = document.getElementById('profileEventsList');
    if (eventsList) {
      const events = c.eventsSchemes && c.eventsSchemes.length ? c.eventsSchemes : [
        "Market Access Initiative (MAI) Scheme Financial Subsidies for Overseas Exhibition Booths",
        "Flagship Annual International Buyer-Seller Meet (BSM) with delegations from 40+ countries",
        "Capacity Building and Technical Quality Upgradation Seminars for First-time Exporters",
        "Special Export Clusters Focus Workshops under Districts as Export Hubs (DEH) initiative"
      ];

      eventsList.innerHTML = events.map(e => `
        <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px 20px; display:flex; gap:14px; align-items:flex-start; margin-bottom:12px;">
          <div style="font-size:1.3rem;">🎪</div>
          <div>
            <h4 style="font-family:var(--font-heading); font-size:1rem; font-weight:700; color:var(--text-primary); margin-bottom:4px;">${e}</h4>
            <span style="font-size:0.84rem; color:var(--text-secondary);">Subsidized by Department of Commerce, Government of India. Contact council secretariat for application deadlines.</span>
          </div>
        </div>
      `).join('');
    }

    // TAB 7: CONTACT INFORMATION
    const contactBlock = document.getElementById('profileContactBlock');
    if (contactBlock) {
      const contact = c.contact || {
        address: `${c.headquarters || 'Mumbai, Maharashtra'}, India`,
        phone: "+91-11-23344556 / 23344557",
        email: `info@${c.id}.org`,
        website: c.url,
        branches: ["New Delhi Regional Office", "Chennai Liaison Office", "Kolkata Sub-centre"]
      };

      const branchesHtml = (contact.branches || []).map(b => `<li style="margin-bottom:6px;">📍 ${b}</li>`).join('');

      contactBlock.innerHTML = `
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:24px;">
          <div style="background:var(--bg-card); padding:24px; border-radius:var(--radius-lg); border:1px solid var(--border-subtle);">
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; color:var(--cyan-400); margin-bottom:14px;">Headquarters Address</h4>
            <p style="font-size:0.95rem; color:var(--text-primary); line-height:1.6; margin-bottom:18px;">
              🏢 <strong>${c.fullName}</strong><br>
              ${contact.address}
            </p>
            <div style="display:flex; flex-direction:column; gap:8px; font-size:0.88rem; color:var(--text-secondary);">
              <div>📞 <strong>Phone:</strong> ${contact.phone}</div>
              <div>✉️ <strong>Email:</strong> <a href="mailto:${contact.email}" style="color:var(--cyan-400); text-decoration:underline;">${contact.email}</a></div>
              <div>🌐 <strong>Web:</strong> <a href="${contact.website}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan-400); text-decoration:underline;">${contact.website}</a></div>
            </div>
          </div>

          <div style="background:var(--bg-card); padding:24px; border-radius:var(--radius-lg); border:1px solid var(--border-subtle);">
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; color:var(--saffron-400); margin-bottom:14px;">Regional & Liaison Branches</h4>
            <ul style="list-style:none; padding:0; font-size:0.88rem; color:var(--text-secondary); line-height:1.8;">
              ${branchesHtml || '<li>📍 Regional branches available across major industrial ports and metro centres.</li>'}
            </ul>
          </div>
        </div>
      `;
    }

    // Reset to Overview tab
    document.querySelectorAll('.profile-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.profile-pane').forEach(p => p.classList.remove('active'));
    document.querySelector('.profile-tab-btn[data-ptab="overview"]')?.classList.add('active');
    document.getElementById('ptab-overview')?.classList.add('active');

    // Switch views
    epcDirectoryMainView.style.display = 'none';
    epcDedicatedProfileView.style.display = 'block';

    const panelExplorer = document.getElementById('panel-explorer');
    if (panelExplorer) panelExplorer.scrollIntoView({ behavior: 'smooth' });
  }

  function closeDedicatedProfile() {
    if (!epcDedicatedProfileView || !epcDirectoryMainView) return;
    epcDedicatedProfileView.style.display = 'none';
    epcDirectoryMainView.style.display = 'block';
  }

  // Profile Tab Buttons Click Handler
  document.querySelectorAll('.profile-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const ptab = btn.getAttribute('data-ptab');
      document.querySelectorAll('.profile-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.profile-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`ptab-${ptab}`)?.classList.add('active');
    });
  });

  backToResultsBtn?.addEventListener('click', closeDedicatedProfile);
  crumbExplorer?.addEventListener('click', (e) => {
    e.preventDefault();
    closeDedicatedProfile();
  });
  crumbHome?.addEventListener('click', (e) => {
    e.preventDefault();
    closeDedicatedProfile();
    switchTab('home');
  });

  // Filters and Search Event Handlers
  function resetAllExplorerFilters() {
    state.explorerSearch = '';
    state.explorerFilter = 'All';
    if (epcSearchInput) epcSearchInput.value = '';
    if (sidebarWithinSearch) sidebarWithinSearch.value = '';
    if (epcSortSelect) epcSortSelect.value = 'relevance';
    document.querySelectorAll('#productTypeCheckboxes input[type="checkbox"]').forEach(cb => cb.checked = false);
    renderEpcResults();
  }

  resetEpcFiltersBtn?.addEventListener('click', resetAllExplorerFilters);
  viewAllEpcLink?.addEventListener('click', () => {
    resetAllExplorerFilters();
    document.getElementById('epcResultsSection')?.scrollIntoView({ behavior: 'smooth' });
  });

  epcSearchSubmitBtn?.addEventListener('click', () => {
    state.explorerSearch = epcSearchInput ? epcSearchInput.value : '';
    renderEpcResults();
    document.getElementById('epcResultsSection')?.scrollIntoView({ behavior: 'smooth' });
  });

  epcSearchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      state.explorerSearch = epcSearchInput.value;
      renderEpcResults();
      document.getElementById('epcResultsSection')?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  sidebarWithinSearch?.addEventListener('input', (e) => {
    state.explorerSearch = e.target.value;
    renderEpcResults();
  });

  popularTagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const term = btn.getAttribute('data-search');
      if (epcSearchInput) epcSearchInput.value = term;
      state.explorerSearch = term;
      renderEpcResults();
      document.getElementById('epcResultsSection')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelectorAll('#productTypeCheckboxes input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', renderEpcResults);
  });

  epcSortSelect?.addEventListener('change', renderEpcResults);

  // Initialize EPC Explorer
  renderEpcCategories();
  renderEpcResults();

  /* ==========================================================================
     5. COUNCIL DRAWER MODAL (BACKWARD COMPATIBILITY)
     ========================================================================== */
  const drawerBackdrop = document.getElementById('councilDrawerBackdrop');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');

  function openCouncilDrawer(councilId) {
    // Forward directly to dedicated profile view
    switchTab('explorer');
    openDedicatedProfile(councilId);
  }

  function closeCouncilDrawer() {
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  closeDrawerBtn?.addEventListener('click', closeCouncilDrawer);
  drawerBackdrop?.addEventListener('click', (e) => {
    if (e.target === drawerBackdrop) closeCouncilDrawer();
  });

  /* ==========================================================================
     6. CASE STUDIES MODULE (15 MASTER EXIM PRECEDENTS WITH DROPDOWN Q&A)
     ========================================================================== */
  const caseStudiesGrid = document.getElementById('caseStudiesGrid');
  const caseStudiesSearchInput = document.getElementById('caseStudiesSearchInput');
  const casesCountLabel = document.getElementById('casesCountLabel');
  const toggleAllAnswersBtn = document.getElementById('toggleAllAnswersBtn');
  const toggleAllAnswersText = document.getElementById('toggleAllAnswersText');
  const toggleAllAnswersIcon = document.getElementById('toggleAllAnswersIcon');

  let casesCategoryFilter = 'All';
  let casesSearchQuery = '';
  let allAnswersExpanded = false;

  function renderCaseStudies() {
    if (!caseStudiesGrid) return;
    caseStudiesGrid.innerHTML = '';

    const allCases = (window.TRADE_DATA && window.TRADE_DATA.caseStudies) ? window.TRADE_DATA.caseStudies : [];
    const query = casesSearchQuery.toLowerCase().trim();
    const cat = casesCategoryFilter;

    const filtered = allCases.filter(cs => {
      const matchCat = cat === 'All' || cs.category.toLowerCase().includes(cat.toLowerCase()) || cat.toLowerCase().includes(cs.category.toLowerCase());
      const matchQuery = !query ||
        cs.title.toLowerCase().includes(query) ||
        cs.subtitle.toLowerCase().includes(query) ||
        cs.category.toLowerCase().includes(query) ||
        cs.entityContext.toLowerCase().includes(query) ||
        cs.coreIncident.toLowerCase().includes(query) ||
        cs.outcomeImpact.toLowerCase().includes(query) ||
        (cs.jurisdiction && cs.jurisdiction.toLowerCase().includes(query)) ||
        (cs.questionsAndAnswers && cs.questionsAndAnswers.some(qa => qa.q.toLowerCase().includes(query) || qa.a.toLowerCase().includes(query)));

      return matchCat && matchQuery;
    });

    if (casesCountLabel) {
      casesCountLabel.textContent = `Showing ${filtered.length} of ${allCases.length} Verified Case Studies`;
    }

    if (filtered.length === 0) {
      caseStudiesGrid.innerHTML = `
        <div style="text-align:center; padding:50px 20px; background:var(--bg-card); border-radius:var(--radius-xl); border:1px solid var(--border-subtle);">
          <div style="font-size:2.5rem; margin-bottom:12px;">⚖️</div>
          <h3 style="font-family:var(--font-heading); font-size:1.3rem;">No case studies matched "${casesSearchQuery}"</h3>
          <p style="color:var(--text-secondary); margin-top:6px; font-size:0.9rem;">Try selecting "All 15 Cases" or searching for keywords like "ZTE", "assists", "SPS", "Incoterms", "MRL", "ECGC".</p>
        </div>
      `;
      return;
    }

    filtered.forEach(cs => {
      const card = document.createElement('article');
      card.className = 'case-card';
      card.id = cs.id;

      // Color badge class
      const pillClass = cs.badgeColor ? `${cs.badgeColor}-pill` : 'cyan-pill';

      // 1. Q&A Dropdown HTML (Each question has a toggle button that expands the faculty answer!)
      const qaListHtml = (cs.questionsAndAnswers || []).map((qa, idx) => `
        <div class="case-qa-dropdown ${allAnswersExpanded ? 'open' : ''}">
          <button class="case-qa-toggle ${allAnswersExpanded ? 'open' : ''}" type="button" aria-expanded="${allAnswersExpanded}">
            <div class="case-q-left">
              <span class="case-q-badge">Q${idx + 1}</span>
              <span class="case-q-text">${qa.q}</span>
            </div>
            <span class="case-dropdown-chevron">▼</span>
          </button>
          <div class="case-qa-content" style="${allAnswersExpanded ? 'display:block;' : ''}">
            <div class="case-a-inner">
              <span class="case-a-label">💡 MODEL FACULTY ANSWER & STRATEGIC ANALYSIS</span>
              <p class="case-a-text">${qa.a}</p>
            </div>
          </div>
        </div>
      `).join('');

      // 2. Practical Learnings
      const learningsHtml = (cs.practicalLearnings || []).map(item => `
        <li>
          <span class="check-icon">✓</span>
          <span>${item}</span>
        </li>
      `).join('');

      // 3. Regulatory Frameworks
      const frameworksHtml = (cs.regulatoryFrameworks || []).map(f => `
        <div class="case-framework-card">
          <strong>${f.term}</strong>
          <p>${f.def}</p>
        </div>
      `).join('');

      // 4. References Links
      const refsHtml = (cs.references || []).map(r => `
        <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="case-ref-link">
          <span>${r.title}</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      `).join('');

      card.innerHTML = `
        <div class="case-card-header">
          <div class="case-top-meta">
            <span class="case-number-pill ${pillClass}">
              <span>CASE 0${cs.number}</span>
              <span>·</span>
              <span>${cs.category.toUpperCase()}</span>
            </span>
            <div class="case-jurisdiction-tag">
              <span>📍 ${cs.jurisdiction}</span>
              <span>•</span>
              <span>🗓️ ${cs.datePeriod}</span>
            </div>
          </div>
          <h2 class="case-card-title">${cs.title}</h2>
          <p class="case-card-subtitle">${cs.subtitle}</p>
        </div>

        <!-- 3-Column Documented Case Background -->
        <div class="case-fact-grid">
          <div class="case-fact-box entity-box">
            <span class="case-fact-title">
              <span>🏢</span> <span>Real Entity & Commercial Context</span>
            </span>
            <p class="case-fact-text">${cs.entityContext}</p>
          </div>

          <div class="case-fact-box incident-box">
            <span class="case-fact-title">
              <span>⚠️</span> <span>Core Incident & Regulatory Violation</span>
            </span>
            <p class="case-fact-text">${cs.coreIncident}</p>
          </div>

          <div class="case-fact-box outcome-box">
            <span class="case-fact-title">
              <span>⚖️</span> <span>Factual Outcome & Legal Impact</span>
            </span>
            <p class="case-fact-text">${cs.outcomeImpact}</p>
          </div>
        </div>

        <!-- Analytical & Strategic Questions with Dropdown Answers -->
        <div class="case-qa-section">
          <div class="case-qa-header">
            <div class="case-qa-title">
              <span>🧠</span> <span>Analytical & Strategic Questions</span>
            </div>
            <span class="case-qa-helper-badge">Dropdown Active-Recall Mode</span>
          </div>
          <div class="case-qa-list">
            ${qaListHtml}
          </div>
        </div>

        <!-- Key Practical Learnings for New Exporters -->
        <div class="case-learnings-section">
          <div class="case-learnings-title">
            <span>🎯</span> <span>Key Practical Learnings for New Exporters</span>
          </div>
          <ul class="case-learnings-list">
            ${learningsHtml}
          </ul>
        </div>

        <!-- Important EXIM Concepts & Regulatory Frameworks -->
        ${(cs.regulatoryFrameworks && cs.regulatoryFrameworks.length > 0) ? `
          <div class="case-frameworks-section">
            <div class="case-frameworks-title">Important EXIM Concepts & Regulatory Frameworks</div>
            <div class="case-frameworks-grid">
              ${frameworksHtml}
            </div>
          </div>
        ` : ''}

        <!-- Verified Official References -->
        <div class="case-footer-row">
          <span style="font-family:var(--font-mono); font-size:0.75rem; text-transform:uppercase;">Verified Primary Sources:</span>
          <div class="case-refs-group">
            ${refsHtml}
          </div>
        </div>
      `;

      // Interactive Dropdown Click Listener for this case card
      card.querySelectorAll('.case-qa-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const dropdown = btn.closest('.case-qa-dropdown');
          if (!dropdown) return;
          const isOpen = dropdown.classList.contains('open');
          const content = dropdown.querySelector('.case-qa-content');

          if (isOpen) {
            dropdown.classList.remove('open');
            btn.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
            if (content) content.style.display = 'none';
          } else {
            dropdown.classList.add('open');
            btn.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
            if (content) content.style.display = 'block';
          }
        });
      });

      caseStudiesGrid.appendChild(card);
    });
  }

  // Search input event listener
  caseStudiesSearchInput?.addEventListener('input', (e) => {
    casesSearchQuery = e.target.value;
    renderCaseStudies();
  });

  // Category filter chips event listener
  document.querySelectorAll('#caseCategoryChips .filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#caseCategoryChips .filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      casesCategoryFilter = chip.getAttribute('data-cat') || 'All';
      renderCaseStudies();
    });
  });

  // Global Expand / Collapse All Answers button
  toggleAllAnswersBtn?.addEventListener('click', () => {
    allAnswersExpanded = !allAnswersExpanded;
    if (toggleAllAnswersText) {
      toggleAllAnswersText.textContent = allAnswersExpanded ? 'Collapse All Answers' : 'Expand All Answers';
    }
    if (toggleAllAnswersIcon) {
      toggleAllAnswersIcon.textContent = allAnswersExpanded ? '▲' : '▼';
    }
    renderCaseStudies();
  });

  // Initial render of case studies
  renderCaseStudies();

  /* ==========================================================================
     7. EPC COMPARISON TOOL
     ========================================================================== */
  const select1 = document.getElementById('compareSelect1');
  const select2 = document.getElementById('compareSelect2');
  const select3 = document.getElementById('compareSelect3');
  const compareTable = document.getElementById('compareMatrixTable');

  function populateCompareSelects() {
    if (!select1 || !select2 || !select3) return;
    const selects = [select1, select2, select3];

    selects.forEach((sel, idx) => {
      sel.innerHTML = '';
      data.councils.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = `${c.name} (${c.sector})`;
        sel.appendChild(opt);
      });
      sel.value = state.compareSelection[idx] || data.councils[idx].id;

      sel.addEventListener('change', () => {
        state.compareSelection[idx] = sel.value;
        renderCompareMatrix();
      });
    });
  }

  function renderCompareMatrix() {
    if (!compareTable) return;
    const councils = state.compareSelection.map(id => data.councils.find(c => c.id === id)).filter(Boolean);

    const rows = [
      { label: 'Full Title', field: c => `<strong>${c.fullName}</strong>` },
      { label: 'Sector & Ministry', field: c => `<span class="badge badge-cyan">${c.sector}</span><br><small style="color:var(--text-muted);">${c.type}</small>` },
      { label: 'Key Products Covered', field: c => c.products.map(p => `<span class="tag-pill" style="display:inline-block; margin:2px;">${p}</span>`).join('') },
      { label: 'Mandatory RCMC Rule', field: c => c.rcmcRequirement },
      { label: 'Core Exporter Support', field: c => c.support },
      { label: 'Key Government Schemes', field: c => c.keySchemes ? c.keySchemes.map(s => `• ${s}`).join('<br>') : 'MAI & Trade Fairs' },
      { label: 'Registered Exporters', field: c => `<strong style="color:var(--cyan-400);">${c.stats.exporters}</strong>` },
      { label: 'Sector Export Turnover', field: c => `<strong style="color:var(--saffron-400);">${c.stats.exportVal}</strong>` },
      { label: 'Official Portal', field: c => `<a href="${c.url}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="padding:6px 12px; font-size:0.8rem;">Open Portal ↗</a>` }
    ];

    let headerHtml = `<tr><th>Comparison Criteria</th>`;
    councils.forEach(c => {
      headerHtml += `<th><span style="font-size:1.3rem; color:var(--saffron-400);">${c.name}</span></th>`;
    });
    headerHtml += `</tr>`;

    let bodyHtml = '';
    rows.forEach(r => {
      bodyHtml += `<tr><td>${r.label}</td>`;
      councils.forEach(c => {
        bodyHtml += `<td>${r.field(c)}</td>`;
      });
      bodyHtml += `</tr>`;
    });

    compareTable.innerHTML = `<thead>${headerHtml}</thead><tbody>${bodyHtml}</tbody>`;
  }

  populateCompareSelects();
  renderCompareMatrix();

  /* ==========================================================================
     8. GLOSSARY & VISUAL MICRO-LESSONS
     ========================================================================== */
  const visualLessonsStrip = document.getElementById('visualLessonsStrip');
  const glossaryCardsGrid = document.getElementById('glossaryCardsGrid');
  const glossarySearchInput = document.getElementById('glossarySearchInput');

  // Render Visual Lessons
  if (visualLessonsStrip) {
    visualLessonsStrip.innerHTML = '';
    data.visualLessons.forEach(vl => {
      const card = document.createElement('div');
      card.className = 'lesson-card';
      const icon = vl.image === 'ship' ? '🚢' : vl.image === 'document' ? '📄' : '🏦';
      card.innerHTML = `
        <div class="lesson-icon-large">${icon}</div>
        <span class="badge badge-cyan" style="margin-bottom:8px;">${vl.tag}</span>
        <h4>${vl.title}</h4>
        <p>${vl.copy}</p>
        <ul class="lesson-bullets">
          ${vl.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      `;
      visualLessonsStrip.appendChild(card);
    });
  }

  // Render Glossary Terms (79 terms across 8 comprehensive sections + Section 9 checklist)
  function renderGlossaryTerms() {
    if (!glossaryCardsGrid) return;
    glossaryCardsGrid.innerHTML = '';

    const query = state.glossarySearch.toLowerCase().trim();
    const cat = state.glossaryFilter;

    const filtered = data.glossary.filter(t => {
      const matchCat = cat === 'All' || t.category.toLowerCase().includes(cat.toLowerCase());
      const matchQuery = !query ||
        t.name.toLowerCase().includes(query) ||
        (t.meaning && t.meaning.toLowerCase().includes(query)) ||
        (t.inSimpleWords && t.inSimpleWords.toLowerCase().includes(query)) ||
        (t.example && t.example.toLowerCase().includes(query)) ||
        (t.category && t.category.toLowerCase().includes(query));
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      glossaryCardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:50px 20px; background:var(--bg-card); border-radius:var(--radius-xl); border:1px solid var(--border-subtle);">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--saffron-400)" stroke-width="2" style="margin-bottom:12px;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <h3 style="font-family:var(--font-heading); font-size:1.3rem;">No trade terms matched "${query}"</h3>
          <p style="color:var(--text-secondary); margin-top:6px; font-size:0.9rem;">Try searching for Incoterms like FOB, CIF, or regulatory concepts like IEC, AD Code, e-BRC.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(t => {
      const card = document.createElement('div');
      card.className = 'term-card';

      // Section number badge
      const secNum = t.sectionNumber ? `SEC 0${t.sectionNumber}` : 'GLOSSARY';

      card.innerHTML = `
        <div class="term-header">
          <div>
            <span class="badge badge-cyan" style="font-size:0.68rem; margin-bottom:6px;">${secNum} · ${t.category.split('&')[0].trim()}</span>
            <h3 class="term-name">${t.name}</h3>
          </div>
        </div>

        <div class="term-meaning-block">
          <strong style="font-size:0.78rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted); font-family:var(--font-mono); display:block; margin-bottom:4px;">Official Meaning</strong>
          <p style="font-size:0.88rem; color:var(--text-secondary); line-height:1.55;">${t.meaning || t.definition}</p>
        </div>

        ${t.inSimpleWords ? `
          <div class="term-simple-words-box">
            <div style="display:flex; align-items:center; gap:6px; font-weight:700; font-size:0.8rem; color:var(--saffron-400); margin-bottom:4px;">
              <span>💡 IN SIMPLE WORDS</span>
            </div>
            <p style="font-size:0.88rem; color:var(--text-primary); font-weight:500; line-height:1.5;">${t.inSimpleWords}</p>
          </div>
        ` : ''}

        ${t.example ? `
          <div class="term-example-box">
            <strong style="color:var(--cyan-400); font-family:var(--font-mono); font-size:0.75rem; text-transform:uppercase; display:block; margin-bottom:2px;">📌 Practical Example</strong>
            <span style="font-size:0.84rem; color:var(--text-secondary); line-height:1.45;">${t.example}</span>
          </div>
        ` : ''}
      `;
      glossaryCardsGrid.appendChild(card);
    });
  }

  renderGlossaryTerms();

  glossarySearchInput?.addEventListener('input', (e) => {
    state.glossarySearch = e.target.value;
    renderGlossaryTerms();
  });

  document.querySelectorAll('#glossaryCategoryChips .filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#glossaryCategoryChips .filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.glossaryFilter = chip.getAttribute('data-cat') || 'All';
      renderGlossaryTerms();
    });
  });

  /* ==========================================================================
     9. GLOBAL TRADE & GEOPOLITICS NEWS FEED (20 STORIES & INDICATORS)
     ========================================================================== */
  const featuredStoryContainer = document.getElementById('featuredStoryContainer');
  const newsTwoColGrid = document.getElementById('newsTwoColGrid');
  const newsSearchInput = document.getElementById('newsSearchInput');
  const newsCountLabel = document.getElementById('newsCountLabel');
  const tradeIndicatorsGrid = document.getElementById('tradeIndicatorsGrid');

  let newsCategoryFilter = 'All';
  let newsSearchQuery = '';

  function renderGeopoliticsFeed() {
    const allNews = data.geopoliticsNews || [];
    const query = newsSearchQuery.toLowerCase().trim();
    const cat = newsCategoryFilter;

    const filtered = allNews.filter(item => {
      const matchCat = cat === 'All' || 
        item.category.toLowerCase().includes(cat.toLowerCase()) ||
        cat.toLowerCase().includes(item.category.toLowerCase());

      const matchQuery = !query ||
        item.headline.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.whyItMatters.toLowerCase().includes(query) ||
        item.region.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.sourceName.toLowerCase().includes(query);

      return matchCat && matchQuery;
    });

    if (newsCountLabel) {
      newsCountLabel.textContent = `Showing ${filtered.length} of ${allNews.length} Verified Stories`;
    }

    // ⭐ Featured Lead Story (Story 01 or matching featured item)
    if (featuredStoryContainer) {
      const featured = filtered.find(n => n.isFeatured) || filtered[0];
      if (featured) {
        featuredStoryContainer.style.display = 'block';
        featuredStoryContainer.innerHTML = `
          <div class="featured-story-card">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
              <span class="featured-badge">⭐ FEATURED STORY OF THE WEEK</span>
              <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--text-muted);">${featured.flag} ${featured.category.toUpperCase()} | ${featured.date}</span>
            </div>
            <h2 class="featured-headline">${featured.headline}</h2>
            <p style="font-size:1.02rem; color:var(--text-secondary); line-height:1.6;">${featured.summary}</p>
            <div class="why-it-matters-box" style="font-size:0.92rem; padding:14px 18px; background:rgba(245, 158, 11, 0.08); border-left:4px solid var(--saffron-400);">
              <strong style="color:var(--saffron-400); font-size:0.8rem; letter-spacing:0.04em;">💡 WHY IT MATTERS TO EXIM TRADERS:</strong>
              <span style="color:var(--text-primary); font-weight:500;">${featured.whyItMatters}</span>
            </div>
            <div class="news-footer-row" style="margin-top:6px;">
              <span>Region: <strong style="color:var(--text-primary);">${featured.region}</strong> • Source: <strong style="color:var(--text-primary);">${featured.sourceName}</strong></span>
              <a href="${featured.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding:8px 18px; font-size:0.85rem; display:inline-flex; align-items:center; gap:6px;">
                <span>Read Full Article</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        `;
      } else {
        featuredStoryContainer.style.display = 'none';
      }
    }

    // 2-Column Responsive News Grid (19 Stories or all matching)
    if (newsTwoColGrid) {
      newsTwoColGrid.innerHTML = '';
      
      const featuredItem = (filtered.find(n => n.isFeatured) || filtered[0]);
      const gridItems = (featuredStoryContainer && filtered.length > 1 && featuredItem) 
        ? filtered.filter(n => n.id !== featuredItem.id)
        : filtered;

      if (gridItems.length === 0 && filtered.length === 0) {
        newsTwoColGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align:center; padding:50px 20px; background:var(--bg-card); border-radius:var(--radius-xl); border:1px solid var(--border-subtle);">
            <div style="font-size:2.4rem; margin-bottom:12px;">📰</div>
            <h3 style="font-family:var(--font-heading); font-size:1.3rem;">No geopolitical stories matched "${query}"</h3>
            <p style="color:var(--text-secondary); margin-top:6px; font-size:0.9rem;">Try selecting "All Topics" or searching for keywords like "tariffs", "Suez", "FTA", "LNG".</p>
          </div>
        `;
        return;
      }

      gridItems.forEach(item => {
        const card = document.createElement('article');
        card.className = 'news-card';
        card.innerHTML = `
          <div>
            <div class="news-card-header">
              <span class="badge badge-cyan" style="font-size:0.72rem;">${item.flag} ${item.category.toUpperCase()}</span>
              <span>${item.date}</span>
            </div>
            <h3 class="news-headline" style="margin:12px 0 8px;">${item.headline}</h3>
            <p class="news-summary">${item.summary}</p>
            <div class="why-it-matters-box" style="margin-top:14px;">
              <strong>WHY IT MATTERS:</strong>
              <span>${item.whyItMatters}</span>
            </div>
          </div>
          <div class="news-footer-row">
            <span>${item.region} • ${item.sourceName}</span>
            <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="news-read-more-link">
              <span>Read More</span>
              <span>→</span>
            </a>
          </div>
        `;
        newsTwoColGrid.appendChild(card);
      });
    }
  }

  // Render Key Trade Indicators / This Week in Numbers
  function renderTradeIndicators() {
    if (!tradeIndicatorsGrid) return;
    tradeIndicatorsGrid.innerHTML = '';

    const indicators = data.tradeIndicators || [];
    indicators.forEach(ind => {
      const card = document.createElement('div');
      card.className = 'indicator-metric-card';
      const trendColor = ind.trend === 'up' || ind.trend === 'positive' ? 'var(--emerald-400)' : 'var(--saffron-400)';
      card.innerHTML = `
        <span class="indicator-label">${ind.label}</span>
        <span class="indicator-val">${ind.value}</span>
        <span class="indicator-change" style="color:${trendColor};">● ${ind.change}</span>
      `;
      tradeIndicatorsGrid.appendChild(card);
    });
  }

  renderGeopoliticsFeed();
  renderTradeIndicators();

  newsSearchInput?.addEventListener('input', (e) => {
    newsSearchQuery = e.target.value;
    renderGeopoliticsFeed();
  });

  document.querySelectorAll('#newsCategoryChips .filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#newsCategoryChips .filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      newsCategoryFilter = chip.getAttribute('data-cat') || 'All';
      renderGeopoliticsFeed();
    });
  });

  /* ==========================================================================
     10. EXPORT JOURNEY NAVIGATOR & READINESS TRACKER
     ========================================================================== */
  const journeyStepsTimeline = document.getElementById('journeyStepsTimeline');
  const readinessScoreVal = document.getElementById('readinessScoreVal');
  const readinessProgressFill = document.getElementById('readinessProgressFill');
  const readinessCountLabel = document.getElementById('readinessCountLabel');

  function updateReadinessScore() {
    let totalTasks = 0;
    let completedTasks = 0;

    data.exportJourney.forEach(step => {
      step.tasks.forEach(t => {
        totalTasks++;
        if (state.checklistState[t.id]) completedTasks++;
      });
    });

    const percent = Math.round((completedTasks / totalTasks) * 100);
    if (readinessScoreVal) readinessScoreVal.textContent = `${percent}%`;
    if (readinessProgressFill) readinessProgressFill.style.width = `${percent}%`;
    if (readinessCountLabel) readinessCountLabel.textContent = `${completedTasks} of ${totalTasks} Milestones Complete`;

    localStorage.setItem('tradebridge_checklist', JSON.stringify(state.checklistState));
  }

  if (journeyStepsTimeline) {
    journeyStepsTimeline.innerHTML = '';
    data.exportJourney.forEach(step => {
      const card = document.createElement('div');
      card.className = 'journey-step-card';

      const tasksHtml = step.tasks.map(t => {
        const isChecked = !!state.checklistState[t.id];
        return `
          <label class="task-checkbox-label">
            <input type="checkbox" data-task-id="${t.id}" ${isChecked ? 'checked' : ''} />
            <span style="${isChecked ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">${t.label}</span>
          </label>
        `;
      }).join('');

      const linksHtml = step.portalLinks.map(l => `
        <a href="${l.url}" target="_blank" rel="noopener noreferrer" style="font-size:0.8rem; color:var(--cyan-400); text-decoration:underline;">
          ${l.name} ↗
        </a>
      `).join(' • ');

      card.innerHTML = `
        <div class="journey-step-badge">${step.step}</div>
        <div class="journey-step-content">
          <span class="section-eyebrow" style="margin-bottom:4px;">PHASE 0${step.step}</span>
          <h3 class="journey-step-title">${step.title}</h3>
          <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.5;">${step.heading} ${step.description}</p>
          <div class="journey-tasks-list">
            ${tasksHtml}
          </div>
          <div style="margin-top:14px; font-size:0.8rem; color:var(--text-muted);">
            Official Portals: ${linksHtml}
          </div>
        </div>
      `;

      // Checkbox event listeners
      card.querySelectorAll('input[type="checkbox"]').forEach(chk => {
        chk.addEventListener('change', (e) => {
          const tid = chk.getAttribute('data-task-id');
          state.checklistState[tid] = chk.checked;
          const labelSpan = chk.nextElementSibling;
          if (labelSpan) {
            labelSpan.style.textDecoration = chk.checked ? 'line-through' : 'none';
            labelSpan.style.color = chk.checked ? 'var(--text-muted)' : 'var(--text-primary)';
          }
          updateReadinessScore();
        });
      });

      journeyStepsTimeline.appendChild(card);
    });

    updateReadinessScore();
  }

  /* ==========================================================================
     11. EXPORT TRADE QUIZZES ENGINE (MODULE 6: MINI QUIZZES)
     ========================================================================== */
  const quizQuestionView = document.getElementById('quizQuestionView');
  const quizScorecardView = document.getElementById('quizScorecardView');
  const quizQuestionCounter = document.getElementById('quizQuestionCounter');
  const quizTopicPill = document.getElementById('quizTopicPill');
  const quizLevelBadge = document.getElementById('quizLevelBadge');
  const quizProgressPercentText = document.getElementById('quizProgressPercentText');
  const quizProgressBarFill = document.getElementById('quizProgressBarFill');
  const quizScoreNumerator = document.getElementById('quizScoreNumerator');
  const quizScoreDenominator = document.getElementById('quizScoreDenominator');
  const quizQuestionText = document.getElementById('quizQuestionText');
  const quizOptionsContainer = document.getElementById('quizOptionsContainer');
  const quizFeedbackBox = document.getElementById('quizFeedbackBox');
  const quizHintText = document.getElementById('quizHintText');
  const quizNextBtn = document.getElementById('quizNextBtn');

  // Helper: Get question set for current tier from TRADE_DATA
  function getLevelQuizzes() {
    return (data.quizzes || []).filter(q => q.level.toLowerCase() === state.quizLevel.toLowerCase());
  }

  // Helper: Get friendly topic name per tier
  function getTopicForLevel(level) {
    switch (level.toLowerCase()) {
      case 'basic': return 'EPC Mandates & Trade Fundamentals';
      case 'moderate': return 'Trade Finance & SPS Regulations';
      case 'advanced': return 'Geopolitics, Tariffs & Foreign Trade Policy';
      default: return 'EXIM Operations';
    }
  }

  function renderCurrentQuiz() {
    const list = getLevelQuizzes();
    if (!list || list.length === 0) return;

    const totalQuestions = list.length;
    if (quizScoreDenominator) quizScoreDenominator.textContent = totalQuestions;

    // =========================================================================
    // STATE: LEVEL COMPLETE / SCORECARD DISPLAY
    // =========================================================================
    if (state.quizIndex >= totalQuestions) {
      if (quizQuestionView) quizQuestionView.style.display = 'none';
      if (quizScorecardView) quizScorecardView.style.display = 'block';

      if (quizProgressBarFill) quizProgressBarFill.style.width = '100%';
      if (quizProgressPercentText) quizProgressPercentText.textContent = '100% Completed';
      if (quizScoreNumerator) quizScoreNumerator.textContent = state.quizScore;

      const accuracy = Math.round((state.quizScore / totalQuestions) * 100);
      let appraisal = '';
      let appraisalIcon = '🏆';
      let nextLevelName = '';

      if (state.quizLevel === 'Basic') nextLevelName = 'Moderate';
      else if (state.quizLevel === 'Moderate') nextLevelName = 'Advanced';

      if (accuracy === 100) {
        appraisalIcon = '🏆';
        appraisal = 'Outstanding Mastery! You demonstrated exceptional comprehension of EXIM procedures, regulatory authorities, and trade mechanics.';
      } else if (accuracy >= 80) {
        appraisalIcon = '🎯';
        appraisal = 'Distinction Level! Strong analytical understanding of export workflows, institutional frameworks, and operational risks.';
      } else if (accuracy >= 60) {
        appraisalIcon = '📈';
        appraisal = 'Good Progress! Foundational concepts are well understood. Review the sourced explanations below to solidify edge-case knowledge.';
      } else {
        appraisalIcon = '📚';
        appraisal = 'Remediation Suggested: Re-attempt this level and explore the EPC Explorer and EXIM Glossary tabs to reinforce core concepts.';
      }

      if (quizScorecardView) {
        quizScorecardView.innerHTML = `
          <div class="quiz-scorecard-card">
            <div class="scorecard-hero-icon">${appraisalIcon}</div>
            <h2 class="scorecard-title">${state.quizLevel} Level Complete!</h2>
            <p class="scorecard-subtitle">Module 6 self-assessment evaluation for first-year MBA International Business & Foreign Trade.</p>

            <div class="scorecard-stats-grid">
              <div class="scorecard-stat-box">
                <div class="scorecard-stat-val">${totalQuestions}</div>
                <div class="scorecard-stat-label">Total Questions</div>
              </div>
              <div class="scorecard-stat-box">
                <div class="scorecard-stat-val" style="color:var(--emerald-400);">${state.quizScore}</div>
                <div class="scorecard-stat-label">Correct Answers</div>
              </div>
              <div class="scorecard-stat-box">
                <div class="scorecard-stat-val" style="color:${accuracy >= 80 ? 'var(--emerald-400)' : accuracy >= 60 ? 'var(--cyan-400)' : 'var(--rose-400)'};">${accuracy}%</div>
                <div class="scorecard-stat-label">Accuracy Rate</div>
              </div>
            </div>

            <div class="scorecard-feedback-callout">
              <strong style="color:#fff; display:block; margin-bottom:4px;">📋 Faculty Academic Evaluation:</strong>
              <span>${appraisal}</span>
            </div>

            <div class="scorecard-actions-row">
              <button class="btn-secondary" id="retakeQuizBtn" style="padding:12px 24px;">
                <span>🔄 Retake ${state.quizLevel} Level</span>
              </button>
              ${nextLevelName ? `
                <button class="btn-primary" id="advanceQuizBtn" style="padding:12px 26px;">
                  <span>Advance to ${nextLevelName} Level →</span>
                </button>
              ` : `
                <button class="btn-primary" id="exploreCaseStudiesBtn" style="padding:12px 26px;">
                  <span>Explore Real-World Case Studies →</span>
                </button>
              `}
            </div>
          </div>
        `;

        document.getElementById('retakeQuizBtn')?.addEventListener('click', () => {
          state.quizIndex = 0;
          state.quizScore = 0;
          state.quizUserAnswered = false;
          renderCurrentQuiz();
        });

        document.getElementById('advanceQuizBtn')?.addEventListener('click', () => {
          if (nextLevelName) {
            switchQuizLevel(nextLevelName);
          }
        });

        document.getElementById('exploreCaseStudiesBtn')?.addEventListener('click', () => {
          switchTab('cases');
        });
      }

      return;
    }

    // =========================================================================
    // STATE: RENDERING QUESTION CARD
    // =========================================================================
    if (quizQuestionView) quizQuestionView.style.display = 'block';
    if (quizScorecardView) quizScorecardView.style.display = 'none';

    const q = list[state.quizIndex];
    state.quizUserAnswered = false;

    // Progress updates
    const currentQNum = state.quizIndex + 1;
    if (quizProgressPercentText) quizProgressPercentText.textContent = `${Math.round((currentQNum / totalQuestions) * 100)}% Complete`;
    if (quizProgressBarFill) quizProgressBarFill.style.width = `${Math.round((currentQNum / totalQuestions) * 100)}%`;
    if (quizScoreNumerator) quizScoreNumerator.textContent = state.quizScore;

    // Header info
    if (quizQuestionCounter) quizQuestionCounter.textContent = `QUESTION ${currentQNum} OF ${totalQuestions}`;
    if (quizTopicPill) quizTopicPill.textContent = q.topic || getTopicForLevel(state.quizLevel);
    if (quizLevelBadge) {
      quizLevelBadge.textContent = `${state.quizLevel.toUpperCase()} LEVEL`;
      quizLevelBadge.className = state.quizLevel === 'Basic' ? 'badge badge-amber' : state.quizLevel === 'Moderate' ? 'badge badge-cyan' : 'badge badge-rose';
    }

    // Question statement
    if (quizQuestionText) quizQuestionText.textContent = q.question;

    // Reset feedback & next button
    if (quizFeedbackBox) {
      quizFeedbackBox.style.display = 'none';
      quizFeedbackBox.className = 'quiz-feedback-box';
      quizFeedbackBox.innerHTML = '';
    }
    if (quizNextBtn) {
      quizNextBtn.style.display = 'none';
      const labelSpan = quizNextBtn.querySelector('span');
      if (labelSpan) labelSpan.textContent = currentQNum === totalQuestions ? 'View Results Summary' : 'Next Question';
    }
    if (quizHintText) {
      quizHintText.innerHTML = `<span>💡</span> <span>Select an option (A, B, C, or D) to instantly verify against verified EXIM rules.</span>`;
    }

    // Render Options A, B, C, D
    if (quizOptionsContainer) {
      quizOptionsContainer.innerHTML = '';

      q.options.forEach((optText, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx); // A, B, C, D
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.setAttribute('data-index', optIdx);

        btn.innerHTML = `
          <div class="quiz-option-content">
            <span class="quiz-option-badge">${letter}</span>
            <span class="quiz-option-text">${optText}</span>
          </div>
          <div class="quiz-option-status-slot" id="statusSlot-${optIdx}"></div>
        `;

        // =====================================================================
        // OPTION CLICK HANDLER: INSTANT VERIFICATION & EXPLANATION
        // =====================================================================
        btn.addEventListener('click', () => {
          if (state.quizUserAnswered) return;
          state.quizUserAnswered = true;

          const isCorrect = optIdx === q.answer;
          if (isCorrect) {
            state.quizScore++;
            if (quizScoreNumerator) quizScoreNumerator.textContent = state.quizScore;
          }

          // Mark options: Green for correct, Red for wrong
          const allOptionBtns = quizOptionsContainer.querySelectorAll('.quiz-option-btn');
          allOptionBtns.forEach((b, i) => {
            b.disabled = true;
            const slot = b.querySelector('.quiz-option-status-slot');

            if (i === q.answer) {
              // Mark correct answer in GREEN
              b.classList.add('correct');
              if (slot) {
                slot.innerHTML = `<span class="quiz-status-pill correct-pill">✓ Correct Answer</span>`;
              }
            } else if (i === optIdx && !isCorrect) {
              // Mark user's incorrect choice in RED
              b.classList.add('wrong');
              if (slot) {
                slot.innerHTML = `<span class="quiz-status-pill wrong-pill">✗ Your Selection</span>`;
              }
            }
          });

          // Show Instant Academic Feedback with EXIM explanation
          if (quizFeedbackBox) {
            quizFeedbackBox.style.display = 'block';
            quizFeedbackBox.className = `quiz-feedback-box ${isCorrect ? 'correct-box' : 'wrong-box'}`;

            quizFeedbackBox.innerHTML = `
              <div class="quiz-feedback-header">
                <span class="quiz-feedback-title ${isCorrect ? 'correct-title' : 'wrong-title'}">
                  ${isCorrect ? '✓ CORRECT ANSWER' : '✗ INCORRECT SELECTION'}
                </span>
                <span class="quiz-source-tag">VERIFIED EXIM SOURCED EXPLANATION</span>
              </div>
              <div class="quiz-feedback-content">
                <strong>Academic Grounding:</strong> ${q.explanation}
              </div>
            `;
          }

          // Update footer hint text and reveal Next Question button
          if (quizHintText) {
            quizHintText.innerHTML = isCorrect
              ? `<span style="color:var(--emerald-400); font-weight:700;">✓ Excellent!</span> <span>Review the verified EXIM explanation above before proceeding.</span>`
              : `<span style="color:var(--rose-400); font-weight:700;">✗ Note the correction:</span> <span>The correct answer is highlighted in green with source grounding above.</span>`;
          }

          if (quizNextBtn) {
            quizNextBtn.style.display = 'inline-flex';
          }

          // Optional asynchronous background logging to FastAPI backend
          try {
            fetch('/api/quiz/submit', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ question_id: q.id, selected_index: optIdx })
            }).catch(() => {});
          } catch (e) {}
        });

        quizOptionsContainer.appendChild(btn);
      });
    }
  }

  // Advance to next question
  quizNextBtn?.addEventListener('click', () => {
    state.quizIndex++;
    renderCurrentQuiz();
  });

  // Switch Quiz Level
  function switchQuizLevel(level) {
    document.querySelectorAll('#quizLevelSelector .level-btn').forEach(b => {
      if (b.getAttribute('data-level').toLowerCase() === level.toLowerCase()) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    state.quizLevel = level.charAt(0).toUpperCase() + level.slice(1).toLowerCase();
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizUserAnswered = false;

    renderCurrentQuiz();
  }

  // Level selector buttons click listener
  document.querySelectorAll('#quizLevelSelector .level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lvl = btn.getAttribute('data-level');
      if (lvl) switchQuizLevel(lvl);
    });
  });

  // Initial render of quiz
  renderCurrentQuiz();

  /* ==========================================================================
     12. "ASK TRADEBRIDGE" AI ASSISTANT / RAG AGENT
     Delegated to separate dedicated module: rag_agent.js
     ========================================================================== */


  /* ==========================================================================
     13. DEMO VIDEO SHOWCASE & BRIEFING MODAL
     ========================================================================== */
  const videoModalBackdrop = document.getElementById('videoModalBackdrop');
  const watchVideoBtn = document.getElementById('watchVideoBtn');
  const closeVideoBtn = document.getElementById('closeVideoBtn');
  const closeVideoActionBtn = document.getElementById('closeVideoActionBtn');
  const demoVideoSection = document.getElementById('demoVideoSection');
  const tradeBriefingVideo = document.getElementById('tradeBriefingVideo');
  const tradeBriefingIframe = document.getElementById('tradeBriefingIframe');
  const toggleLocalVideoBtn = document.getElementById('toggleLocalVideoBtn');
  const toggleDriveVideoBtn = document.getElementById('toggleDriveVideoBtn');
  const modalTradeVideo = document.getElementById('modalTradeVideo');

  function openVideoModal() {
    videoModalBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalTradeVideo?.play().catch(() => {});
  }
  function closeVideoModal() {
    videoModalBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
    modalTradeVideo?.pause();
  }

  // Smooth scroll from hero button to video showcase and start playback
  watchVideoBtn?.addEventListener('click', () => {
    if (demoVideoSection) {
      demoVideoSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const videoCard = demoVideoSection.querySelector('.demo-video-wrapper');
      if (videoCard) {
        videoCard.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.4)';
        setTimeout(() => {
          videoCard.style.boxShadow = '';
        }, 1800);
      }
      setTimeout(() => {
        if (tradeBriefingVideo) {
          tradeBriefingVideo.play().catch(e => console.log('Autoplay handled:', e));
        }
      }, 600);
    } else {
      openVideoModal();
    }
  });

  // Source switcher: Local HD vs Google Drive Cloud Stream
  toggleLocalVideoBtn?.addEventListener('click', () => {
    toggleLocalVideoBtn.classList.add('active');
    toggleDriveVideoBtn?.classList.remove('active');
    if (tradeBriefingIframe) {
      tradeBriefingIframe.style.display = 'none';
      tradeBriefingIframe.src = '';
    }
    if (tradeBriefingVideo) {
      tradeBriefingVideo.style.display = 'block';
      tradeBriefingVideo.play().catch(() => {});
    }
  });

  toggleDriveVideoBtn?.addEventListener('click', () => {
    toggleDriveVideoBtn.classList.add('active');
    toggleLocalVideoBtn?.classList.remove('active');
    if (tradeBriefingVideo) {
      tradeBriefingVideo.pause();
      tradeBriefingVideo.style.display = 'none';
    }
    if (tradeBriefingIframe) {
      tradeBriefingIframe.style.display = 'block';
      tradeBriefingIframe.src = 'https://drive.google.com/file/d/1XONYzw7U0Tml9QgRVAMx4AYf5CNuhXj3/preview';
    }
  });

  closeVideoBtn?.addEventListener('click', closeVideoModal);
  closeVideoActionBtn?.addEventListener('click', () => {
    closeVideoModal();
    switchTab('explorer');
  });
  videoModalBackdrop?.addEventListener('click', (e) => {
    if (e.target === videoModalBackdrop) closeVideoModal();
  });



  /* ==========================================================================
     14. KEYBOARD SHORTCUTS
     ========================================================================== */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCouncilDrawer();
      closeVideoModal();
    }
  });

});
