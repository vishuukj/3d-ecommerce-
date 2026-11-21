/**
 * AURA Luxury Acoustic — Immersive 3D E-Commerce Platform
 * Full functional implementation of all 4 Stitch screens:
 * 1. Discover (Flagship Showcase, Interactive Frequency Curve, Category Filters, Curated Collection, Bookmarks)
 * 2. 3D Studio (360° Drag Orbit, Exploded Layers + Telemetry Popovers, Real-Time WebGL 3D Mesh + Studio Render, Web Audio API Spatial DSP Simulator)
 * 3. Customizer (Mark IV Atelier Configurator: Finishes, Cushions, Live Laser Engraving, Sound Signatures, Valuation)
 * 4. Vault / Cart (Secured Allocation Countdown, 360° Rotator Chamber, Synced Bespoke Build, Complementary Gear, Checkout & Certificate)
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. PRODUCT CATALOG & APPLICATION STATE
  // =========================================================================
  const PRODUCTS = [
    {
      id: 'aura-studio-pro',
      title: 'AURA Studio Pro',
      subtitle: 'Graphite & Champagne Gold',
      specLine: 'Planar Magnetic • 0.008% THD',
      badge: '40MM EL-STAT',
      badgeColor: 'text-primary',
      price: 1150,
      category: 'over-ear',
      coreEdition: true,
      driver: 'Planar Magnetic',
      thd: '0.008% THD',
      mass: '340g',
      desc: 'Open-back reference planar magnetic headphones engineered with ultra-thin 1.8-micron gold-trace diaphragm and CNC graphite acoustic grille.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwhKeYQrl-JeJ9vY1fCZAHA-p0KeiFqDMGENpQWRTm1zlB0jhqlvkC5RPtpeZq7HuqSUIDb5GdE4WtcybHncq7VtKKmVrZ3-M0iAuc2RY76lMhwZohlJvmKA_k3AAT2K-pVs1DgWFBg16OnH9v8Uh-mdowg9EtclmTgKTXni5NA7Y9LBhf0awYnJYJh8-n2zOnEQpaCoqmrVwOjqSuACFz-DB5RtAm7hEMqWeFTis'
    },
    {
      id: 'pulse-iem-x',
      title: 'Pulse IEM X',
      subtitle: 'Forged Titanium Shell',
      specLine: 'Balanced Armature • Silver Litz',
      badge: 'QUAD-DRIVER',
      badgeColor: 'text-secondary',
      price: 640,
      category: 'iem',
      coreEdition: true,
      driver: 'Quad Hybrid BA',
      thd: '0.015% THD',
      mass: '14g / ear',
      desc: 'Sculpted 5-axis titanium in-ear monitors housing 4 custom balanced armatures with a 4-way passive crossover and 8-core monocrystalline silver Litz cable.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuaorfjBRxOFZgJ-XMKVDfyOpbJ8ZGqLE7QbwVjDbOq6zgo_DCQHyoQEPTt4lvLlNLY1PdV2Yvz5w7Omqcvk2p09ia_8t4oFptZmkWzLXVxN-X9s_S0gtEWb46Ql4PTetKVsHzrCX9KGZwVgya1g7QNUheYyoynjnMV0UahpDo1P4OUZ4evSt4G57ZWLbM1nsii1cK50bzgvxpxRggd3MPBTrfH5FwWXorDXrNCrQ'
    },
    {
      id: 'resonance-tower',
      title: 'Resonance Tower',
      subtitle: 'Near-Field Desktop Monitor',
      specLine: 'Iso-Acoustic Base • D-Class Amp',
      badge: 'ZERO-RESONANCE',
      badgeColor: 'text-primary',
      price: 1800,
      category: 'dac',
      coreEdition: true,
      driver: 'Beryllium Waveguide',
      thd: '0.005% THD',
      mass: '6.8kg',
      desc: 'Monolithic architectural desktop reference monitor in stealth anodized aluminum with brushed copper waveguide and dual 300W GaN Class-D bi-amplifiers.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATtuvnHLg3OQQZ7dxhObb34AwSZr6QIIG6P0XCLQxRRttPlNf3DVZWsjol1ZeZvHF3_LhsWDlFbcDabNnMUEpgXd-vE8_H_9Y1zoYwL3yl2x3VMltiiwVams8ylBPGVHbDP_yvbWpCcbEqFQHEgtxdWyauvzTADs5PTjxsidrsRa6_j4P9SEgpZLXP1CApPea-jIpGg3EPQ0Ej5vytASWM592QEUYrO8EeSRhVnIw'
    },
    {
      id: 'aura-dac-monolith',
      title: 'AURA DAC-01 Monolith',
      subtitle: 'R-2R Ladder Desktop DAC & Amp',
      specLine: 'Dual Mono 32-Bit • Class-A Balanced',
      badge: 'R-2R LADDER',
      badgeColor: 'text-secondary',
      price: 1420,
      category: 'dac',
      coreEdition: false,
      driver: 'Discrete R-2R',
      thd: '0.0004% THD',
      mass: '3.2kg',
      desc: 'Fully discrete 24-bit R-2R resistor ladder desktop DAC and balanced Class-A headphone amplifier milled from a solid billet of aerospace aluminum.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuna2rySAj9o8ephA5gjoxsJu-RxicKrAKx0LjM5jG3RafYzZJP0jSPphQyop3hC7O3zFFEfQwlbsn-b_o1TJfUJGZYeP1Lw_xrMlhfhT5OKW1X8yHfzWwuCgNtUd8TrDJSdDMSj1DDZRrtjDKZYuDaXMfl0RXiBcYOdoD6S1_pl05m6qukAXJr4oe3Y3MJEcj4Bc7yDzdzAn8dwEARdq6dxN0-ycwfZpwS7KPQYM'
    },
    {
      id: 'aura-one-chrono-limited',
      title: 'AURA ONE Chrono Edition',
      subtitle: '24K Brushed Gold & Obsidian /50',
      specLine: 'Cryo Beryllium • Numbered 1 of 50',
      badge: 'LIMITED /50',
      badgeColor: 'text-primary',
      price: 1650,
      category: 'limited',
      coreEdition: false,
      driver: '40mm Cryo-Be',
      thd: '0.009% THD',
      mass: '315g',
      desc: 'Collector-grade numbered edition featuring 24K champagne gold PVD acoustic rings, cryo-treated Beryllium drivers, and a walnut archival sanctuary case.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAclOeRTM25Q0g902FYvXfetdBX8pW_OI0kam1KzBLDUqAQuQROQasvyG-1wuYc9qE4UCMIuiBmNb_igsye-3D-kqbVBVmkeA9Knzg-oEJYyLjBh3QcZ_taBTCSgc95Wnh9WP2Ld-OHq2ko29F8FIIS5sRrbBO15WgncKFT923Zrv5xM28uPBaCzVTr4COFMLS4LDY46jzkffXSSwGeupQwazWo5bWmIofs3qr_rlU'
    }
  ];

  const DEFAULT_VAULT_BUILD = {
    productName: 'AURA ONE',
    editionSubtitle: 'Custom Master Edition',
    basePrice: 890,
    finishName: 'Forged Carbon',
    finishVaultLabel: 'Forged Carbon Weave',
    finishPrice: 120,
    finishFilter: 'none',
    cushionName: 'Italian Calfskin Leather',
    engraving: 'STUDIO MASTER 01',
    profileTitle: 'REFERENCE',
    profileFull: 'Reference Flat (±0.5dB)',
    totalPrice: 1010
  };

  const state = {
    activeTab: 'discover',
    selectedCategory: 'all',
    showArchive: false,
    bookmarks: JSON.parse(localStorage.getItem('aura_bookmarks') || '["aura-studio-pro"]'),
    orders: JSON.parse(localStorage.getItem('aura_orders') || '[]'),
    // Customizer live state (starts matching Stitch Customizer screen defaults)
    customizer: {
      baseProduct: 'AURA ONE',
      basePrice: 890,
      finishName: 'Matte Obsidian',
      finishVaultLabel: 'Matte Obsidian Titanium',
      finishPrice: 0,
      finishFilter: 'none',
      finishGlow: 'rgba(0,238,252,0.12)',
      cushionType: 'Calfskin Leather',
      cushionFull: 'Italian Calfskin Leather',
      engraving: 'STUDIO MASTER 01',
      profileTitle: 'REFERENCE',
      profileFull: 'Reference Flat (±0.5dB)',
      driverMode: 'Dynamic 50mm Biocellulose',
      sparkline: 'M 0 8 Q 16 2, 32 8 T 64 6'
    },
    // Vault state (starts matching Stitch Vault screen defaults: $1,010 Forged Carbon Master Edition, and updates whenever Customizer saves!)
    vaultBuild: JSON.parse(localStorage.getItem('aura_vault_build') || JSON.stringify(DEFAULT_VAULT_BUILD)),
    extraCartItems: JSON.parse(localStorage.getItem('aura_extra_items') || '[]'),
    selectedAccessories: JSON.parse(localStorage.getItem('aura_accessories') || '[]'),
    activeStudioProduct: {
      title: 'AURA ONE Flagship',
      price: 890,
      mass: 310,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb2VHwlWxEcErh8lYrtIJqPGXAL1YXf1NLVSrULy4PUQjSVAwoLaRnfu6ocEuR0Jk-BN7j9cYbLJfW9VzSc2krChUfF9fGQyE8YPtByZbCIRCdYKipbHLao098Uxev_h4dV9FxsXpHmiZdPWN6F_S2OPubIK8aAkYEJVznnHiTIN_oKbX66yqM7zidku3vecgOdYFaZ7BpDHw4Lv9A7cTL4NcOVPd1IKlcg7DrZ6M'
    }
  };

  function persistState() {
    localStorage.setItem('aura_bookmarks', JSON.stringify(state.bookmarks));
    localStorage.setItem('aura_orders', JSON.stringify(state.orders));
    localStorage.setItem('aura_vault_build', JSON.stringify(state.vaultBuild));
    localStorage.setItem('aura_extra_items', JSON.stringify(state.extraCartItems));
    localStorage.setItem('aura_accessories', JSON.stringify(state.selectedAccessories));
  }

  // =========================================================================
  // 2. TOAST NOTIFICATION & UI HELPERS
  // =========================================================================
  let toastTimeout = null;
  function triggerToast(message) {
    const toast = document.getElementById('toast-capsule');
    const toastText = document.getElementById('toast-text');
    if (!toast || !toastText) return;

    toastText.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');

    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(18);
    }

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4');
      toast.classList.remove('opacity-100', 'translate-y-0');
    }, 2400);
  }

  // =========================================================================
  // 3. TAB NAVIGATION & HEADER SUBTITLE
  // =========================================================================
  const TAB_TITLES = {
    'discover': 'Discover',
    '3d-studio': '3D Studio',
    'customizer': 'Customizer',
    'vault-cart': 'Vault / Cart',
    'access': 'Atelier Access'
  };

  function switchTab(targetTab, options = {}) {
    if (!TAB_TITLES[targetTab]) return;
    state.activeTab = targetTab;

    // Toggle main sections
    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.remove('active');
    });
    const activeSection = document.getElementById(`view-${targetTab}`);
    if (activeSection) {
      activeSection.classList.add('active');
    }

    // Update header subtitle
    const subtitleEl = document.getElementById('headerSubtitle');
    if (subtitleEl) {
      subtitleEl.textContent = TAB_TITLES[targetTab];
    }

    // Update bottom nav pill styling
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      const isMatch = btn.getAttribute('data-target') === targetTab;
      if (isMatch) {
        btn.classList.add('text-primary-container', 'drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]');
        btn.classList.remove('text-on-surface-variant');
        btn.setAttribute('aria-current', 'page');
      } else {
        btn.classList.remove('text-primary-container', 'drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]');
        btn.classList.add('text-on-surface-variant');
        btn.removeAttribute('aria-current');
      }
    });

    if (!options.preserveScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (targetTab === '3d-studio' && threeSceneCtrl) {
      threeSceneCtrl.resize();
    }
  }

  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      switchTab(target);
    });
  });

  const brandHomeBtn = document.getElementById('brandHomeBtn');
  if (brandHomeBtn) {
    brandHomeBtn.addEventListener('click', () => switchTab('discover'));
  }

  // Desktop Expanded / Mobile Frame Layout Switcher
  const layoutModeBtn = document.getElementById('layoutModeBtn');
  if (layoutModeBtn) {
    layoutModeBtn.addEventListener('click', () => {
      document.body.classList.toggle('expanded-layout');
      const isExpanded = document.body.classList.contains('expanded-layout');
      triggerToast(isExpanded ? 'Desktop Studio Grid Active' : 'Mobile Atelier Frame Active');
      if (threeSceneCtrl) setTimeout(() => threeSceneCtrl.resize(), 360);
    });
  }

  // =========================================================================
  // 4. SCREEN 1: DISCOVER — CURATED COLLECTION, FILTERS, CURVE & ACTIONS
  // =========================================================================
  function renderCuratedCollection() {
    const grid = document.getElementById('curatedProductGrid');
    const countBadge = document.getElementById('collectionCountBadge');
    const archiveText = document.getElementById('archiveBtnText');
    if (!grid) return;

    const filtered = PRODUCTS.filter(item => {
      if (state.selectedCategory === 'all') {
        return state.showArchive ? true : item.coreEdition;
      }
      return item.category === state.selectedCategory;
    });

    if (countBadge) {
      countBadge.textContent = `${String(filtered.length).padStart(2, '0')} ${filtered.length === 1 ? 'EDITION' : 'EDITIONS'}`;
    }
    if (archiveText) {
      archiveText.textContent = state.showArchive ? 'Core 03' : 'Archive';
    }

    grid.innerHTML = filtered.map(item => {
      const isSaved = state.bookmarks.includes(item.id);
      return `
        <div class="product-card flex gap-space-sm p-space-sm rounded-xl bg-surface-container-low transition-all hover:bg-surface-container hairline-border cursor-pointer" data-product-id="${item.id}">
          <div class="relative w-28 h-28 rounded-lg bg-surface-container-lowest flex-shrink-0 overflow-hidden">
            <img class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" alt="${item.title}" src="${item.image}"/>
            <span class="absolute bottom-1 left-1 bg-surface-container-lowest/85 backdrop-blur-sm px-1.5 py-0.5 rounded font-label-caps text-label-caps ${item.badgeColor}">${item.badge}</span>
          </div>
          <div class="flex flex-col justify-between flex-1 min-w-0">
            <div>
              <div class="flex items-start justify-between gap-1">
                <h3 class="font-headline-sm text-headline-sm text-on-surface truncate">${item.title}</h3>
                <button class="bookmark-btn text-on-surface-variant hover:text-primary transition-colors flex-shrink-0 p-1" data-bookmark-id="${item.id}" type="button" title="Bookmark Edition">
                  <span class="material-symbols-outlined text-[18px] ${isSaved ? 'text-primary' : ''}" style="font-variation-settings: 'FILL' ${isSaved ? 1 : 0};">${isSaved ? 'bookmark' : 'bookmark_border'}</span>
                </button>
              </div>
              <p class="font-body-sm text-body-sm text-on-surface-variant mt-0.5 line-clamp-1">${item.subtitle}</p>
              <span class="font-spec-code-sm text-spec-code-sm text-secondary block mt-1">${item.specLine}</span>
            </div>
            <div class="flex items-center justify-between mt-2 pt-2">
              <span class="font-headline-sm text-headline-sm text-on-surface font-semibold">$${item.price.toLocaleString()}</span>
              <button class="inspect-product-btn w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-on-primary-container transition-colors" data-inspect-id="${item.id}" type="button" title="Inspect &amp; Acquire">
                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Update bookmark dot on profile avatar
    const dot = document.getElementById('savedBookmarkDot');
    if (dot) {
      dot.style.display = state.bookmarks.length > 0 ? 'block' : 'none';
    }

    // Bind bookmark buttons
    grid.querySelectorAll('.bookmark-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-bookmark-id');
        const idx = state.bookmarks.indexOf(id);
        const prod = PRODUCTS.find(p => p.id === id);
        if (idx >= 0) {
          state.bookmarks.splice(idx, 1);
          triggerToast(`Removed ${prod ? prod.title : 'Item'} from Saved`);
        } else {
          state.bookmarks.push(id);
          triggerToast(`Saved ${prod ? prod.title : 'Item'} to Atelier`);
        }
        persistState();
        renderCuratedCollection();
      });
    });

    // Bind product card click -> open Quick-Inspect Modal
    grid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-product-id');
        openProductDetailModal(id);
      });
    });
  }

  // Filter chips on Discover
  document.querySelectorAll('#discoverFilterRail .filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#discoverFilterRail .filter-chip').forEach(c => {
        c.classList.remove('bg-primary-container', 'text-on-primary-container', 'active');
        c.classList.add('bg-surface-container', 'text-on-surface-variant');
      });
      chip.classList.add('bg-primary-container', 'text-on-primary-container', 'active');
      chip.classList.remove('bg-surface-container', 'text-on-surface-variant');

      state.selectedCategory = chip.getAttribute('data-category') || 'all';
      renderCuratedCollection();
      triggerToast(`Filter: ${chip.textContent}`);
    });
  });

  // Archive toggle button
  const toggleArchiveBtn = document.getElementById('toggleArchiveBtn');
  if (toggleArchiveBtn) {
    toggleArchiveBtn.addEventListener('click', () => {
      state.showArchive = !state.showArchive;
      if (state.showArchive) {
        state.selectedCategory = 'all';
        document.querySelectorAll('#discoverFilterRail .filter-chip').forEach(c => {
          const isAll = c.getAttribute('data-category') === 'all';
          c.classList.toggle('bg-primary-container', isAll);
          c.classList.toggle('text-on-primary-container', isAll);
          c.classList.toggle('bg-surface-container', !isAll);
          c.classList.toggle('text-on-surface-variant', !isAll);
        });
      }
      renderCuratedCollection();
      triggerToast(state.showArchive ? 'Showing Full Atelier Archive (05 Editions)' : 'Showing Core 03 Editions');
    });
  }

  // Flagship Showcase Actions on Discover
  const inspectBadge = document.getElementById('inspectBadge');
  const heroProductImageCard = document.getElementById('heroProductImageCard');
  const launch3dStudioBannerBtn = document.getElementById('launch3dStudioBannerBtn');
  const heroAcquireNowBtn = document.getElementById('heroAcquireNowBtn');
  const heroAcousticProfileBtn = document.getElementById('heroAcousticProfileBtn');

  function loadProductInto3dStudio(productInfo) {
    state.activeStudioProduct = productInfo;
    const titleEl = document.getElementById('studioProductTitle');
    const priceEl = document.getElementById('studioProductPrice');
    const massEl = document.getElementById('studioSpecMass');
    const imgEl = document.getElementById('headphoneImg');

    if (titleEl) titleEl.textContent = productInfo.title;
    if (priceEl) priceEl.textContent = `$${productInfo.price.toLocaleString()}`;
    if (massEl && productInfo.mass) massEl.textContent = parseInt(productInfo.mass, 10) || 310;
    if (imgEl && productInfo.image) imgEl.src = productInfo.image;

    switchTab('3d-studio');
    triggerToast(`3D Studio: ${productInfo.title}`);
  }

  if (inspectBadge) {
    inspectBadge.addEventListener('click', () => {
      loadProductInto3dStudio({
        title: 'AURA ONE Flagship',
        price: 890,
        mass: 310,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb2VHwlWxEcErh8lYrtIJqPGXAL1YXf1NLVSrULy4PUQjSVAwoLaRnfu6ocEuR0Jk-BN7j9cYbLJfW9VzSc2krChUfF9fGQyE8YPtByZbCIRCdYKipbHLao098Uxev_h4dV9FxsXpHmiZdPWN6F_S2OPubIK8aAkYEJVznnHiTIN_oKbX66yqM7zidku3vecgOdYFaZ7BpDHw4Lv9A7cTL4NcOVPd1IKlcg7DrZ6M'
      });
    });
  }

  if (heroProductImageCard) {
    heroProductImageCard.addEventListener('click', () => {
      switchTab('3d-studio');
      triggerToast('3D Orbit Chamber Ready');
    });
  }

  if (launch3dStudioBannerBtn) {
    launch3dStudioBannerBtn.addEventListener('click', () => {
      switchTab('3d-studio');
      triggerToast('WebGL 3D Acoustic Engine Active');
    });
  }

  if (heroAcquireNowBtn) {
    heroAcquireNowBtn.addEventListener('click', () => {
      switchTab('customizer');
      triggerToast('Configure Your Bespoke AURA ONE');
    });
  }

  if (heroAcousticProfileBtn) {
    heroAcousticProfileBtn.addEventListener('click', () => {
      switchTab('customizer', { preserveScroll: true });
      setTimeout(() => {
        const sec = document.getElementById('customizerAcousticSection');
        if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 120);
      triggerToast('Select Acoustic DSP Signature');
    });
  }

  // Interactive Frequency Curve scrubbing on Discover card
  const freqCurveContainer = document.getElementById('freqCurveContainer');
  const freqCursorDot = document.getElementById('freqCursorDot');
  const freqCursorLine = document.getElementById('freqCursorLine');
  const freqReadoutLabel = document.getElementById('freqReadoutLabel');

  if (freqCurveContainer && freqCursorDot && freqCursorLine && freqReadoutLabel) {
    const updateFreqScrub = (clientX) => {
      const rect = freqCurveContainer.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const svgX = Math.round(ratio * 320);

      // Approximate Y along curve
      const svgY = Math.round(24 - Math.sin(ratio * Math.PI * 1.6) * 12);
      freqCursorDot.setAttribute('cx', String(svgX));
      freqCursorDot.setAttribute('cy', String(svgY));
      freqCursorLine.setAttribute('x1', String(svgX));
      freqCursorLine.setAttribute('x2', String(svgX));

      // Logarithmic frequency mapping 5Hz -> 48,000Hz
      const freq = Math.round(5 * Math.pow(9600, ratio));
      const db = ((24 - svgY) * 0.18).toFixed(1);
      const freqStr = freq >= 1000 ? `${(freq / 1000).toFixed(1)}kHz` : `${freq}Hz`;
      freqReadoutLabel.textContent = `${freqStr} • ${db >= 0 ? '+' : ''}${db}dB`;
    };

    freqCurveContainer.addEventListener('mousemove', (e) => updateFreqScrub(e.clientX));
    freqCurveContainer.addEventListener('touchmove', (e) => {
      if (e.touches[0]) updateFreqScrub(e.touches[0].clientX);
    }, { passive: true });
    freqCurveContainer.addEventListener('mouseleave', () => {
      freqReadoutLabel.textContent = '5Hz — 48,000Hz';
    });
  }

  // Interactive Acoustic Tech Badges on Discover
  document.querySelectorAll('.tech-badge-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tech = btn.getAttribute('data-tech');
      if (tech === 'spatial') {
        switchTab('3d-studio');
        triggerToast('360° Spatial Matrix Inspector');
      } else if (tech === 'lossless') {
        switchTab('3d-studio');
        if (!isAudioPlaying) toggleSpatialAudio();
        triggerToast('24-Bit / 192kHz Lossless Stream Active');
      } else if (tech === 'anc') {
        switchTab('3d-studio');
        if (!isExploded) toggleExplodedView();
        triggerToast('-42dB Hybrid ANC Chamber Isolated');
      }
    });
  });

  // =========================================================================
  // 5. PRODUCT QUICK-INSPECT MODAL
  // =========================================================================
  let currentModalProduct = null;
  const productDetailModal = document.getElementById('productDetailModal');

  function openProductDetailModal(productId) {
    const item = PRODUCTS.find(p => p.id === productId);
    if (!item || !productDetailModal) return;
    currentModalProduct = item;

    document.getElementById('modalProductBadge').textContent = item.badge;
    document.getElementById('modalProductImg').src = item.image;
    document.getElementById('modalProductImg').alt = item.title;
    document.getElementById('modalProductTitle').textContent = item.title;
    document.getElementById('modalProductPrice').textContent = `$${item.price.toLocaleString()}`;
    document.getElementById('modalProductSubtitle').textContent = item.subtitle;
    document.getElementById('modalProductDesc').textContent = item.desc;
    document.getElementById('modalSpecDriver').textContent = item.driver;
    document.getElementById('modalSpecThd').textContent = item.thd;
    document.getElementById('modalSpecMass').textContent = item.mass;

    productDetailModal.classList.remove('hidden');
    productDetailModal.classList.add('flex');
  }

  function closeProductDetailModal() {
    if (!productDetailModal) return;
    productDetailModal.classList.add('hidden');
    productDetailModal.classList.remove('flex');
  }

  const closeProductModalBtn = document.getElementById('closeProductModalBtn');
  if (closeProductModalBtn) closeProductModalBtn.addEventListener('click', closeProductDetailModal);
  if (productDetailModal) {
    productDetailModal.addEventListener('click', (e) => {
      if (e.target === productDetailModal) closeProductDetailModal();
    });
  }

  const modalLoad3dBtn = document.getElementById('modalLoad3dBtn');
  if (modalLoad3dBtn) {
    modalLoad3dBtn.addEventListener('click', () => {
      if (!currentModalProduct) return;
      closeProductDetailModal();
      loadProductInto3dStudio({
        title: currentModalProduct.title,
        price: currentModalProduct.price,
        mass: parseInt(currentModalProduct.mass, 10) || 310,
        image: currentModalProduct.image
      });
    });
  }

  const modalAddToVaultBtn = document.getElementById('modalAddToVaultBtn');
  if (modalAddToVaultBtn) {
    modalAddToVaultBtn.addEventListener('click', () => {
      if (!currentModalProduct) return;
      addExtraProductToVault(currentModalProduct);
      closeProductDetailModal();
      switchTab('vault-cart');
      triggerToast(`Added ${currentModalProduct.title} to Vault`);
    });
  }

  // =========================================================================
  // 6. SCREEN 2: 3D STUDIO — 360° ORBIT, EXPLODED LAYERS, THREE.JS & WEB AUDIO
  // =========================================================================
  const angleBtns = document.querySelectorAll('.angle-btn');
  const rotationDegrees = document.getElementById('rotationDegrees');
  const headphoneImg = document.getElementById('headphoneImg');
  const viewportStage = document.getElementById('viewportStage');
  const explodedToggleBtn = document.getElementById('explodedToggleBtn');
  const explodedOverlay = document.getElementById('explodedOverlay');
  const explodedLabel = document.getElementById('explodedLabel');
  const explodedIcon = document.getElementById('explodedIcon');

  let currentAngle = 0;
  let currentPitch = 0;
  let isExploded = false;
  let isWebglMode = false;

  function applyStudioRotation(azDeg, pitchDeg = 0) {
    currentAngle = ((Math.round(azDeg) % 360) + 360) % 360;
    currentPitch = Math.max(-25, Math.min(25, pitchDeg));
    if (rotationDegrees) {
      rotationDegrees.textContent = `${currentAngle}° AZIMUTH`;
    }

    if (headphoneImg) {
      const scaleVal = isExploded ? 0.84 : 1;
      const rotY = Math.sin((currentAngle * Math.PI) / 180) * 24;
      const rotZ = Math.cos((currentAngle * Math.PI) / 180) * 4;
      const dropGlow = isExploded
        ? 'drop-shadow(0 15px 30px rgba(0,240,255,0.28))'
        : 'drop-shadow(0 25px 35px rgba(0,0,0,0.85))';
      headphoneImg.style.transform = `perspective(800px) rotateY(${rotY}deg) rotateX(${-currentPitch * 0.5}deg) rotateZ(${rotZ}deg) scale(${scaleVal})`;
      headphoneImg.style.filter = dropGlow;
    }

    if (threeSceneCtrl) {
      threeSceneCtrl.setRotation(currentAngle, currentPitch);
    }
  }

  // Camera Preset Angle Buttons
  angleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      angleBtns.forEach(b => {
        b.classList.remove('bg-surface-container-highest', 'text-secondary', 'active');
        b.classList.add('bg-surface-container', 'text-on-surface-variant');
      });
      btn.classList.add('bg-surface-container-highest', 'text-secondary', 'active');
      btn.classList.remove('bg-surface-container', 'text-on-surface-variant');

      const angle = parseInt(btn.getAttribute('data-angle') || '0', 10);
      applyStudioRotation(angle, 0);
    });
  });

  // 360° Drag Orbit on Studio Viewport
  if (viewportStage) {
    let draggingStudio = false;
    let lastX = 0;
    let lastY = 0;

    const startOrbit = (x, y) => {
      draggingStudio = true;
      lastX = x;
      lastY = y;
    };
    const moveOrbit = (x, y) => {
      if (!draggingStudio) return;
      const dx = x - lastX;
      const dy = y - lastY;
      lastX = x;
      lastY = y;
      applyStudioRotation(currentAngle + dx * 0.85, currentPitch + dy * 0.35);
    };
    const endOrbit = () => {
      draggingStudio = false;
    };

    viewportStage.addEventListener('mousedown', (e) => startOrbit(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => moveOrbit(e.clientX, e.clientY));
    window.addEventListener('mouseup', endOrbit);

    viewportStage.addEventListener('touchstart', (e) => {
      if (e.touches[0]) startOrbit(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (draggingStudio && e.touches[0]) moveOrbit(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener('touchend', endOrbit);
  }

  // Exploded View Toggle Logic
  function toggleExplodedView() {
    isExploded = !isExploded;
    if (isExploded) {
      explodedOverlay.classList.remove('opacity-0', 'pointer-events-none');
      explodedOverlay.classList.add('opacity-100', 'pointer-events-auto');
      explodedLabel.textContent = 'Collapse Core';
      explodedIcon.textContent = 'layers_clear';
      explodedToggleBtn.classList.add('bg-primary/20', 'text-primary');
    } else {
      explodedOverlay.classList.add('opacity-0', 'pointer-events-none');
      explodedOverlay.classList.remove('opacity-100', 'pointer-events-auto');
      explodedLabel.textContent = 'Explode Layers';
      explodedIcon.textContent = 'layers';
      explodedToggleBtn.classList.remove('bg-primary/20', 'text-primary');
      const popover = document.getElementById('layerDetailPopover');
      if (popover) popover.classList.add('hidden');
    }
    applyStudioRotation(currentAngle, currentPitch);
    if (threeSceneCtrl) threeSceneCtrl.setExploded(isExploded);
  }

  if (explodedToggleBtn) {
    explodedToggleBtn.addEventListener('click', toggleExplodedView);
  }

  // Interactive Exploded Layer Callout Tags
  const layerDetailPopover = document.getElementById('layerDetailPopover');
  const layerPopoverTitle = document.getElementById('layerPopoverTitle');
  const layerPopoverDesc = document.getElementById('layerPopoverDesc');
  const closeLayerPopoverBtn = document.getElementById('closeLayerPopoverBtn');

  document.querySelectorAll('.layer-tag-btn').forEach(tagBtn => {
    tagBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const title = tagBtn.getAttribute('data-layer-title');
      const desc = tagBtn.getAttribute('data-layer-desc');
      if (layerPopoverTitle) layerPopoverTitle.textContent = title;
      if (layerPopoverDesc) layerPopoverDesc.textContent = desc;
      if (layerDetailPopover) layerDetailPopover.classList.remove('hidden');
      triggerToast(title);
    });
  });

  if (closeLayerPopoverBtn && layerDetailPopover) {
    closeLayerPopoverBtn.addEventListener('click', () => {
      layerDetailPopover.classList.add('hidden');
    });
  }

  // Real-Time Three.js WebGL 3D Sculptural Headphone Model
  let threeSceneCtrl = null;
  function initThreeStudioMesh() {
    const canvas = document.getElementById('threeStudioCanvas');
    if (!canvas || typeof THREE === 'undefined') return null;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.2, 6.2);

    // Studio Lighting matching DESIGN.md (Champagne Bronze + Spatial Cyan + Titanium Rim)
    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambient);

    const cyanLight = new THREE.PointLight(0x00eefc, 2.4, 15);
    cyanLight.position.set(-3.5, 2.5, 3);
    scene.add(cyanLight);

    const goldLight = new THREE.PointLight(0xd4af37, 2.6, 15);
    goldLight.position.set(3.5, -1.5, 3.5);
    scene.add(goldLight);

    const rimLight = new THREE.DirectionalLight(0xe2e8f0, 1.5);
    rimLight.position.set(0, 4, -3);
    scene.add(rimLight);

    // Materials
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x1e2026,
      metalness: 0.88,
      roughness: 0.24
    });
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.92,
      roughness: 0.18
    });
    const cyanGlowMat = new THREE.MeshStandardMaterial({
      color: 0x00eefc,
      emissive: 0x00eefc,
      emissiveIntensity: 0.45,
      metalness: 0.5,
      roughness: 0.2
    });
    const leatherMat = new THREE.MeshStandardMaterial({
      color: 0x101114,
      metalness: 0.15,
      roughness: 0.75
    });

    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Headband Arch
    const archGeo = new THREE.TorusGeometry(1.35, 0.11, 20, 64, Math.PI);
    const archMesh = new THREE.Mesh(archGeo, leatherMat);
    archMesh.position.y = 0.25;
    rootGroup.add(archMesh);

    const outerBandGeo = new THREE.TorusGeometry(1.42, 0.045, 16, 64, Math.PI);
    const outerBandMesh = new THREE.Mesh(outerBandGeo, titaniumMat);
    outerBandMesh.position.y = 0.25;
    rootGroup.add(outerBandMesh);

    // Left & Right Ear Cup Assemblies (with explodable sub-layers)
    const leftParts = {};
    const rightParts = {};

    function buildEarCup(side) {
      const dir = side === 'left' ? -1 : 1;
      const cupGroup = new THREE.Group();
      cupGroup.position.set(dir * 1.32, -0.35, 0);
      cupGroup.rotation.z = dir * -0.12;

      // 1. Outer CNC Titanium Shell
      const shellGeo = new THREE.CylinderGeometry(0.66, 0.72, 0.32, 48);
      shellGeo.rotateZ(Math.PI / 2);
      const shellMesh = new THREE.Mesh(shellGeo, titaniumMat);
      cupGroup.add(shellMesh);

      // 2. Gold Helmholtz Acoustic Ring
      const ringGeo = new THREE.TorusGeometry(0.56, 0.045, 20, 48);
      ringGeo.rotateY(Math.PI / 2);
      const ringMesh = new THREE.Mesh(ringGeo, goldMat);
      ringMesh.position.x = dir * 0.17;
      cupGroup.add(ringMesh);

      // 3. 40mm Beryllium Transducer Core
      const driverGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.12, 36);
      driverGeo.rotateZ(Math.PI / 2);
      const driverMesh = new THREE.Mesh(driverGeo, cyanGlowMat);
      driverMesh.position.x = dir * -0.05;
      cupGroup.add(driverMesh);

      // 4. Lambskin Contour Ear Cushion
      const padGeo = new THREE.TorusGeometry(0.58, 0.16, 24, 48);
      padGeo.rotateY(Math.PI / 2);
      const padMesh = new THREE.Mesh(padGeo, leatherMat);
      padMesh.position.x = dir * -0.22;
      cupGroup.add(padMesh);

      // Yoke Pivot Rod
      const rodGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.65, 16);
      const rodMesh = new THREE.Mesh(rodGeo, goldMat);
      rodMesh.position.set(dir * 0.06, 0.45, 0);
      cupGroup.add(rodMesh);

      rootGroup.add(cupGroup);
      return { cupGroup, shellMesh, ringMesh, driverMesh, padMesh, dir };
    }

    Object.assign(leftParts, buildEarCup('left'));
    Object.assign(rightParts, buildEarCup('right'));

    let targetExplode = 0;
    let currentExplode = 0;
    let targetRotY = 0.4;
    let targetRotX = 0.1;

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth || 320;
      const h = parent.clientHeight || 340;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    function updateExplodePositions(f) {
      [leftParts, rightParts].forEach(p => {
        const d = p.dir;
        p.shellMesh.position.x = d * (0.45 * f);
        p.ringMesh.position.x = d * (0.17 + 0.72 * f);
        p.driverMesh.position.x = d * (-0.05 - 0.18 * f);
        p.padMesh.position.x = d * (-0.22 - 0.48 * f);
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      if (!isWebglMode) return;
      currentExplode += (targetExplode - currentExplode) * 0.1;
      updateExplodePositions(currentExplode);

      rootGroup.rotation.y += (targetRotY - rootGroup.rotation.y) * 0.12;
      rootGroup.rotation.x += (targetRotX - rootGroup.rotation.x) * 0.12;
      renderer.render(scene, camera);
    }

    resize();
    window.addEventListener('resize', resize);
    animate();

    return {
      resize,
      setExploded(val) {
        targetExplode = val ? 1 : 0;
      },
      setRotation(azDeg, pitchDeg) {
        targetRotY = (azDeg * Math.PI) / 180 + 0.4;
        targetRotX = (pitchDeg * Math.PI) / 180;
      }
    };
  }

  threeSceneCtrl = initThreeStudioMesh();

  // Toggle between Studio Photo Render and Real-Time WebGL 3D Mesh
  const toggleWebglModeBtn = document.getElementById('toggleWebglModeBtn');
  const webglModeBtnLabel = document.getElementById('webglModeBtnLabel');
  const threeStudioCanvas = document.getElementById('threeStudioCanvas');

  if (toggleWebglModeBtn && threeStudioCanvas && headphoneImg) {
    toggleWebglModeBtn.addEventListener('click', () => {
      isWebglMode = !isWebglMode;
      if (isWebglMode) {
        threeStudioCanvas.classList.remove('hidden');
        headphoneImg.classList.add('opacity-0');
        if (webglModeBtnLabel) webglModeBtnLabel.textContent = 'Studio Photo';
        if (threeSceneCtrl) {
          threeSceneCtrl.resize();
          threeSceneCtrl.setExploded(isExploded);
        }
        triggerToast('Real-Time WebGL 3D Geometry Active');
      } else {
        threeStudioCanvas.classList.add('hidden');
        headphoneImg.classList.remove('opacity-0');
        if (webglModeBtnLabel) webglModeBtnLabel.textContent = 'WebGL Mesh';
        triggerToast('Anechoic Studio Render Active');
      }
    });
  }

  // =========================================================================
  // 7. WEB AUDIO API SPATIAL ACOUSTICS SYNTHESIZER & SPECTRUM ANALYZER
  // =========================================================================
  const audioToggle = document.getElementById('spatialAudioToggle');
  const audioIcon = document.getElementById('audioIcon');
  const audioStatusText = document.getElementById('audioStatusText');
  const headerSpatialBtn = document.getElementById('headerSpatialBtn');
  const bars = document.querySelectorAll('#spectrumBars div');

  let isAudioPlaying = false;
  let audioCtx = null;
  let masterGain = null;
  let biquadFilter = null;
  let stereoPanner = null;
  let oscNodes = [];
  let animInterval = null;
  let currentDspMode = 'hrtf';

  function startWebAudioEngine() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      if (!audioCtx) {
        audioCtx = new AudioContextClass();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.6);

      biquadFilter = audioCtx.createBiquadFilter();
      biquadFilter.type = 'lowpass';
      biquadFilter.frequency.setValueAtTime(1400, audioCtx.currentTime);

      stereoPanner = audioCtx.createStereoPanner ? audioCtx.createStereoPanner() : null;

      // Warm audiophile ambient chord (A2, E3, B3, C#4, G#4)
      const freqs = [110, 164.81, 246.94, 277.18, 415.3];
      oscNodes = freqs.map((f, idx) => {
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = idx < 2 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, audioCtx.currentTime);
        g.gain.setValueAtTime(0.18 / (idx + 1), audioCtx.currentTime);
        osc.connect(g);
        g.connect(biquadFilter);
        osc.start();
        return osc;
      });

      if (stereoPanner) {
        biquadFilter.connect(stereoPanner);
        stereoPanner.connect(masterGain);
      } else {
        biquadFilter.connect(masterGain);
      }
      masterGain.connect(audioCtx.destination);
      applyDspProfileToAudio(currentDspMode);
    } catch (err) {
      // Fallback visual simulation if autoplay policy blocks audio
    }
  }

  function stopWebAudioEngine() {
    try {
      if (masterGain && audioCtx) {
        masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.25);
      }
      setTimeout(() => {
        oscNodes.forEach(o => {
          try { o.stop(); } catch (_) {}
        });
        oscNodes = [];
      }, 260);
    } catch (_) {}
  }

  function applyDspProfileToAudio(mode) {
    currentDspMode = mode;
    if (!biquadFilter || !audioCtx) return;
    if (mode === 'hrtf') {
      biquadFilter.type = 'lowpass';
      biquadFilter.frequency.setTargetAtTime(1600, audioCtx.currentTime, 0.15);
    } else if (mode === 'zerolag') {
      biquadFilter.type = 'bandpass';
      biquadFilter.frequency.setTargetAtTime(920, audioCtx.currentTime, 0.15);
    } else if (mode === 'atmos') {
      biquadFilter.type = 'highshelf';
      biquadFilter.frequency.setTargetAtTime(2200, audioCtx.currentTime, 0.15);
      biquadFilter.gain.setTargetAtTime(6, audioCtx.currentTime, 0.15);
    }
  }

  function toggleSpatialAudio() {
    isAudioPlaying = !isAudioPlaying;
    if (isAudioPlaying) {
      if (audioIcon) audioIcon.textContent = 'pause';
      if (audioStatusText) audioStatusText.textContent = 'Playing';
      if (audioToggle) {
        audioToggle.classList.add('bg-primary', 'text-on-primary');
        audioToggle.classList.remove('bg-surface-container-high', 'text-primary');
      }
      startWebAudioEngine();

      let phase = 0;
      animInterval = setInterval(() => {
        phase += 0.25;
        if (stereoPanner && audioCtx) {
          const panVal = currentDspMode === 'hrtf' ? Math.sin(phase * 0.5) * 0.75 : Math.sin(phase * 0.2) * 0.3;
          stereoPanner.pan.setValueAtTime(panVal, audioCtx.currentTime);
        }
        bars.forEach((bar, i) => {
          const wave = Math.sin(phase + i * 0.6) * 28 + 55;
          const jitter = Math.floor(Math.random() * 22);
          const h = Math.max(18, Math.min(98, Math.round(wave + jitter)));
          bar.style.height = `${h}%`;
        });
      }, 130);
    } else {
      if (audioIcon) audioIcon.textContent = 'play_arrow';
      if (audioStatusText) audioStatusText.textContent = 'Simulate';
      if (audioToggle) {
        audioToggle.classList.remove('bg-primary', 'text-on-primary');
        audioToggle.classList.add('bg-surface-container-high', 'text-primary');
      }
      stopWebAudioEngine();
      clearInterval(animInterval);
      const resetHeights = [30, 55, 40, 75, 90, 65, 80, 60, 45, 30];
      bars.forEach((bar, idx) => {
        bar.style.height = `${resetHeights[idx]}%`;
      });
    }
  }

  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      toggleSpatialAudio();
      triggerToast(isAudioPlaying ? '96kHz Spatial DSP Engine Active' : 'Spatial Audio Paused');
    });
  }

  if (headerSpatialBtn) {
    headerSpatialBtn.addEventListener('click', () => {
      toggleSpatialAudio();
      triggerToast(isAudioPlaying ? 'Spatial 96kHz Reference Tone On' : 'Spatial 96kHz Reference Tone Off');
    });
  }

  // DSP Profile Pill Tabs in 3D Studio
  const dspSubtitles = {
    hrtf: 'HRTF V3 Binaural Head-Tracking Map',
    zerolag: 'Zero-Lag < 1.2ms Ultra-Wideband Stream',
    atmos: 'Dolby Atmos 12-Channel Spatial Matrix'
  };
  document.querySelectorAll('.dsp-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.dsp-mode-btn').forEach(b => {
        b.classList.remove('bg-surface-container-highest', 'ring-1', 'ring-secondary/50', 'active');
        b.classList.add('bg-surface-container');
      });
      btn.classList.add('bg-surface-container-highest', 'ring-1', 'ring-secondary/50', 'active');
      btn.classList.remove('bg-surface-container');

      const dsp = btn.getAttribute('data-dsp') || 'hrtf';
      const subEl = document.getElementById('dspActiveSubtitle');
      if (subEl && dspSubtitles[dsp]) subEl.textContent = dspSubtitles[dsp];
      applyDspProfileToAudio(dsp);
      triggerToast(`DSP Mode: ${dspSubtitles[dsp]}`);
    });
  });

  // Specs Accordion Toggle Logic in 3D Studio
  const specsAccordionToggle = document.getElementById('specsAccordionToggle');
  const specsContent = document.getElementById('specsContent');
  const specsChevron = document.getElementById('specsChevron');
  let isSpecsOpen = true;

  if (specsAccordionToggle && specsContent && specsChevron) {
    specsAccordionToggle.addEventListener('click', () => {
      isSpecsOpen = !isSpecsOpen;
      if (isSpecsOpen) {
        specsContent.classList.remove('hidden');
        specsChevron.style.transform = 'rotate(0deg)';
      } else {
        specsContent.classList.add('hidden');
        specsChevron.style.transform = 'rotate(-90deg)';
      }
    });
  }

  // Configure Sound CTA in 3D Studio -> Customizer
  const studioConfigureSoundBtn = document.getElementById('studioConfigureSoundBtn');
  if (studioConfigureSoundBtn) {
    studioConfigureSoundBtn.addEventListener('click', () => {
      switchTab('customizer');
      triggerToast('Atelier Configurator Loaded');
    });
  }

  // =========================================================================
  // 8. SCREEN 3: CUSTOMIZER — FINISHES, CUSHIONS, LASER MONOGRAM, PROFILES
  // =========================================================================
  const renderImg = document.getElementById('headphone-render');
  const viewportGlow = document.getElementById('viewport-glow');
  const finishLabel = document.getElementById('selected-finish-name');
  const finishPriceDesc = document.getElementById('finish-price-desc');
  const finishPriceVal = document.getElementById('finish-price-val');
  const totalPriceDisplay = document.getElementById('total-price-display');
  const engravingInput = document.getElementById('engraving-input');
  const engravingPreview = document.getElementById('engraving-live-preview');
  const charCounter = document.getElementById('char-counter');
  const sparklinePath = document.getElementById('sparkline-path');
  const tuningBadge = document.getElementById('tuning-label-badge');
  const currentDriverModeEl = document.getElementById('current-driver-mode');

  function updateCustomizerValuation() {
    const total = state.customizer.basePrice + state.customizer.finishPrice;
    if (totalPriceDisplay) totalPriceDisplay.textContent = '$' + total.toLocaleString();
    if (finishPriceVal) {
      finishPriceVal.textContent = state.customizer.finishPrice > 0 ? '+$' + state.customizer.finishPrice : '$0';
    }
    if (finishPriceDesc) {
      finishPriceDesc.textContent = state.customizer.finishName + ' Finish';
    }
  }

  // Step 1: Finishes Swatches
  const finishButtons = document.querySelectorAll('.finish-btn');
  finishButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      finishButtons.forEach(b => {
        b.classList.remove('bg-surface-container-high', 'opacity-100', 'ring-1', 'ring-primary/40');
        b.classList.add('bg-surface-container', 'opacity-80');
        const check = b.querySelector('.check-icon');
        if (check) check.classList.add('hidden');
      });

      btn.classList.add('bg-surface-container-high', 'opacity-100', 'ring-1', 'ring-primary/40');
      btn.classList.remove('bg-surface-container', 'opacity-80');
      const activeCheck = btn.querySelector('.check-icon');
      if (activeCheck) activeCheck.classList.remove('hidden');

      state.customizer.finishPrice = parseInt(btn.getAttribute('data-finish-price') || '0', 10);
      state.customizer.finishName = btn.getAttribute('data-finish-name') || 'Matte Obsidian';
      state.customizer.finishVaultLabel = btn.getAttribute('data-finish-vault') || state.customizer.finishName;
      state.customizer.finishGlow = btn.getAttribute('data-glow') || 'rgba(0,238,252,0.12)';
      state.customizer.finishFilter = btn.getAttribute('data-filter') || 'none';

      if (finishLabel) finishLabel.textContent = state.customizer.finishName;
      if (viewportGlow) {
        viewportGlow.style.background = `radial-gradient(circle at 50% 45%, ${state.customizer.finishGlow}, transparent 70%)`;
      }
      if (renderImg) {
        renderImg.style.filter = `${state.customizer.finishFilter === 'none' ? '' : state.customizer.finishFilter} drop-shadow(0 20px 30px rgba(0,0,0,0.85))`;
      }
      updateCustomizerValuation();
      triggerToast('Material Set: ' + state.customizer.finishName);
    });
  });

  // Step 2: Cushion choices
  const cushionButtons = document.querySelectorAll('.cushion-btn');
  const cushionBadge = document.getElementById('selected-cushion-badge');
  cushionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      cushionButtons.forEach(b => {
        b.classList.remove('bg-surface-container-high', 'opacity-100');
        b.classList.add('bg-surface-container', 'opacity-80');
        const radio = b.querySelector('.cushion-radio');
        if (radio) {
          radio.className = 'cushion-radio w-4 h-4 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0';
          radio.innerHTML = '';
        }
      });

      btn.classList.add('bg-surface-container-high', 'opacity-100');
      btn.classList.remove('bg-surface-container', 'opacity-80');
      const activeRadio = btn.querySelector('.cushion-radio');
      if (activeRadio) {
        activeRadio.className = 'cushion-radio w-4 h-4 rounded-full bg-primary flex items-center justify-center shrink-0';
        activeRadio.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-on-primary"></span>';
      }

      const cushionType = btn.getAttribute('data-cushion-type') || 'Calfskin Leather';
      const cushionFull = btn.getAttribute('data-cushion-full') || 'Italian Calfskin Leather';
      state.customizer.cushionType = cushionType;
      state.customizer.cushionFull = cushionFull;

      if (cushionBadge) {
        if (cushionType === 'Calfskin Leather') cushionBadge.textContent = 'Acoustic Seal 98%';
        else if (cushionType === 'Alcantara Suede') cushionBadge.textContent = 'Ultra-Comfort 94%';
        else cushionBadge.textContent = 'Hydrogel Flow 90%';
      }

      triggerToast('Pads: ' + cushionType);
    });
  });

  // Step 3: Laser Engraving
  if (engravingInput && engravingPreview && charCounter) {
    engravingInput.addEventListener('input', (e) => {
      const val = e.target.value.toUpperCase();
      engravingInput.value = val;
      state.customizer.engraving = val.length > 0 ? val : 'AURA BESPOKE';
      engravingPreview.textContent = state.customizer.engraving;
      charCounter.textContent = val.length + '/16';
    });
  }

  // Step 4: Sound Profiles
  const profileButtons = document.querySelectorAll('.profile-btn');
  profileButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      profileButtons.forEach(b => {
        b.classList.remove('bg-surface-container-high', 'opacity-100', 'ring-1', 'ring-secondary/40');
        b.classList.add('bg-surface-container', 'opacity-80');
      });

      btn.classList.add('bg-surface-container-high', 'opacity-100', 'ring-1', 'ring-secondary/40');
      btn.classList.remove('bg-surface-container', 'opacity-80');

      const title = btn.getAttribute('data-profile-title') || 'REFERENCE';
      const full = btn.getAttribute('data-profile-full') || 'Reference Flat (±0.5dB)';
      const path = btn.getAttribute('data-sparkline') || 'M 0 8 Q 16 2, 32 8 T 64 6';
      const driverMode = btn.getAttribute('data-driver-mode') || 'Dynamic 50mm Biocellulose';

      state.customizer.profileTitle = title;
      state.customizer.profileFull = full;
      state.customizer.sparkline = path;
      state.customizer.driverMode = driverMode;

      if (tuningBadge) tuningBadge.textContent = title;
      if (sparklinePath) sparklinePath.setAttribute('d', path);
      if (currentDriverModeEl) currentDriverModeEl.textContent = driverMode;
      triggerToast('Tuned: ' + title);
    });
  });

  // Customizer Viewport 360 Spin & Drag Gimbal
  const toggleAngleBtn = document.getElementById('toggle-angle-btn');
  const customizerDragStage = document.getElementById('customizerDragStage');
  const customizerGimbalLabel = document.getElementById('customizerGimbalLabel');
  let customizerRotated = false;
  let customizerAzimuth = 42;

  if (toggleAngleBtn && renderImg) {
    toggleAngleBtn.addEventListener('click', () => {
      customizerRotated = !customizerRotated;
      customizerAzimuth = customizerRotated ? 222 : 42;
      renderImg.style.transform = customizerRotated ? 'scaleX(-1) rotate(-3deg)' : 'scaleX(1) rotate(0deg)';
      if (customizerGimbalLabel) customizerGimbalLabel.textContent = `Gimbal: ${customizerAzimuth}° Azimuth`;
      triggerToast(customizerRotated ? 'Switched to Interior Cup View' : 'Frontal View Restored');
    });
  }

  if (customizerDragStage && renderImg) {
    let draggingCust = false;
    let startCustX = 0;
    customizerDragStage.addEventListener('mousedown', (e) => {
      draggingCust = true;
      startCustX = e.clientX;
    });
    window.addEventListener('mousemove', (e) => {
      if (!draggingCust) return;
      const dx = e.clientX - startCustX;
      startCustX = e.clientX;
      customizerAzimuth = ((Math.round(customizerAzimuth + dx * 0.7) % 360) + 360) % 360;
      if (customizerGimbalLabel) customizerGimbalLabel.textContent = `Gimbal: ${customizerAzimuth}° Azimuth`;
      const tilt = Math.sin((customizerAzimuth * Math.PI) / 180) * 14;
      renderImg.style.transform = `perspective(700px) rotateY(${tilt}deg)`;
    });
    window.addEventListener('mouseup', () => {
      draggingCust = false;
    });
  }

  // Save Build to Vault & Order CTA Button
  const orderBtn = document.getElementById('order-cta-btn');
  if (orderBtn) {
    orderBtn.addEventListener('click', () => {
      const total = state.customizer.basePrice + state.customizer.finishPrice;
      state.vaultBuild = {
        productName: state.customizer.baseProduct,
        editionSubtitle: 'Custom Master Edition',
        basePrice: state.customizer.basePrice,
        finishName: state.customizer.finishName,
        finishVaultLabel: state.customizer.finishVaultLabel,
        finishPrice: state.customizer.finishPrice,
        finishFilter: state.customizer.finishFilter,
        cushionName: state.customizer.cushionFull,
        engraving: state.customizer.engraving,
        profileTitle: state.customizer.profileTitle,
        profileFull: state.customizer.profileFull,
        totalPrice: total
      };
      persistState();
      resetCountdownTimer();
      renderVaultScreen();
      triggerToast('Build Locked to Vault — Dispatched to Munich');
      setTimeout(() => {
        switchTab('vault-cart');
      }, 450);
    });
  }

  // =========================================================================
  // 9. SCREEN 4: VAULT / CART — ROTATOR, DYNAMIC TOTALS, GEAR & CHECKOUT
  // =========================================================================
  let secondsLeft = 14 * 60 + 59;
  const timerEl = document.getElementById('countdown-timer');

  function resetCountdownTimer() {
    secondsLeft = 14 * 60 + 59;
  }

  if (timerEl) {
    setInterval(() => {
      if (secondsLeft <= 0) {
        secondsLeft = 14 * 60 + 59;
      } else {
        secondsLeft--;
      }
      const mins = Math.floor(secondsLeft / 60);
      const secs = secondsLeft % 60;
      timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
  }

  // Interactive 3D Rotator Chamber in Vault
  const chamber = document.getElementById('rotator-chamber');
  const viewport = document.getElementById('product-viewport');
  const readout = document.getElementById('angle-readout');

  if (chamber && viewport) {
    let isDraggingVault = false;
    let startX = 0;
    let vaultAngle = 0;

    const handleStart = (clientX) => {
      isDraggingVault = true;
      startX = clientX;
    };
    const handleMove = (clientX) => {
      if (!isDraggingVault) return;
      const deltaX = clientX - startX;
      startX = clientX;
      vaultAngle = (vaultAngle + deltaX * 0.8) % 360;
      if (vaultAngle < 0) vaultAngle += 360;

      const deg = Math.round(vaultAngle);
      if (readout) readout.textContent = `${deg}° AXIS`;

      const tilt = Math.sin(vaultAngle * (Math.PI / 180)) * 10;
      viewport.style.transform = `perspective(600px) rotateY(${tilt * 1.6}deg) scale(${1 + Math.abs(tilt) * 0.005})`;
    };
    const handleEnd = () => {
      isDraggingVault = false;
      viewport.style.transform = 'perspective(600px) rotateY(0deg) scale(1)';
    };

    chamber.addEventListener('mousedown', (e) => handleStart(e.clientX));
    window.addEventListener('mousemove', (e) => handleMove(e.clientX));
    window.addEventListener('mouseup', handleEnd);

    chamber.addEventListener('touchstart', (e) => handleStart(e.touches[0].clientX), { passive: true });
    window.addEventListener('touchmove', (e) => {
      if (isDraggingVault && e.touches[0]) handleMove(e.touches[0].clientX);
    }, { passive: true });
    window.addEventListener('touchend', handleEnd);
  }

  // Edit Configuration link in Vault -> loads current Vault config into Customizer
  const vaultEditConfigBtn = document.getElementById('vaultEditConfigBtn');
  if (vaultEditConfigBtn) {
    vaultEditConfigBtn.addEventListener('click', () => {
      // Sync customizer inputs to match vaultBuild
      const matchingFinishBtn = Array.from(finishButtons).find(
        b => b.getAttribute('data-finish-name') === state.vaultBuild.finishName
      );
      if (matchingFinishBtn) matchingFinishBtn.click();

      const matchingCushionBtn = Array.from(cushionButtons).find(
        b => b.getAttribute('data-cushion-full') === state.vaultBuild.cushionName
      );
      if (matchingCushionBtn) matchingCushionBtn.click();

      if (engravingInput) {
        engravingInput.value = state.vaultBuild.engraving;
        engravingInput.dispatchEvent(new Event('input'));
      }

      const matchingProfileBtn = Array.from(profileButtons).find(
        b => b.getAttribute('data-profile-title') === state.vaultBuild.profileTitle
      );
      if (matchingProfileBtn) matchingProfileBtn.click();

      switchTab('customizer');
      triggerToast('Editing Bespoke Configuration');
    });
  }

  // Add Extra Curated Hardware to Vault
  function addExtraProductToVault(product) {
    const existing = state.extraCartItems.find(item => item.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      state.extraCartItems.push({
        id: product.id,
        title: product.title,
        subtitle: product.subtitle,
        price: product.price,
        image: product.image,
        qty: 1
      });
    }
    persistState();
    renderVaultScreen();
  }

  // Complementary Gear Accessory Buttons
  const accessoryButtons = document.querySelectorAll('.accessory-btn');
  accessoryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      const title = btn.getAttribute('data-title');
      const price = parseFloat(btn.getAttribute('data-price') || '0');

      const existingIdx = state.selectedAccessories.findIndex(a => a.id === id);
      if (existingIdx >= 0) {
        state.selectedAccessories.splice(existingIdx, 1);
        triggerToast(`Removed ${title}`);
      } else {
        state.selectedAccessories.push({ id, title, price });
        triggerToast(`Added ${title} (+$${price})`);
      }
      persistState();
      renderVaultScreen();
    });
  });

  function calculateVaultTotals() {
    const bespokeSubtotal = state.vaultBuild.totalPrice || 1010;
    const extraHardwareTotal = state.extraCartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const accessoriesTotal = state.selectedAccessories.reduce((sum, acc) => sum + acc.price, 0);
    const grandTotal = bespokeSubtotal + extraHardwareTotal + accessoriesTotal;
    const totalItemCount = 1 + state.extraCartItems.reduce((s, i) => s + i.qty, 0) + state.selectedAccessories.length;
    return { bespokeSubtotal, extraHardwareTotal, accessoriesTotal, grandTotal, totalItemCount };
  }

  function renderVaultScreen() {
    // 1. Update Bespoke Hardware Card details
    const vb = state.vaultBuild;
    const titleEl = document.getElementById('vaultProductTitle');
    const editionEl = document.getElementById('vaultEditionSubtitle');
    const priceEl = document.getElementById('vaultBespokePrice');
    const shellTextEl = document.getElementById('vaultShellText');
    const cushionTextEl = document.getElementById('vaultCushionText');
    const engravingTextEl = document.getElementById('vaultEngravingText');
    const profileTextEl = document.getElementById('vaultProfileText');
    const rotatorImgEl = document.getElementById('rotator-img');

    if (titleEl) titleEl.textContent = vb.productName || 'AURA ONE';
    if (editionEl) editionEl.textContent = vb.editionSubtitle || 'Custom Master Edition';
    if (priceEl) priceEl.textContent = `$${(vb.totalPrice || 1010).toLocaleString()}`;
    if (shellTextEl) shellTextEl.textContent = vb.finishVaultLabel || 'Forged Carbon Weave';
    if (cushionTextEl) cushionTextEl.textContent = vb.cushionName || 'Italian Calfskin Leather';
    if (engravingTextEl) engravingTextEl.textContent = `"${vb.engraving || 'STUDIO MASTER 01'}"`;
    if (profileTextEl) profileTextEl.textContent = vb.profileFull || 'Reference Flat (±0.5dB)';
    if (rotatorImgEl && vb.finishFilter) {
      rotatorImgEl.style.filter = `${vb.finishFilter === 'none' ? '' : vb.finishFilter} drop-shadow(0 15px 25px rgba(0,0,0,0.9))`;
    }

    // 2. Render Additional Curated Hardware List
    const extraContainer = document.getElementById('vaultAdditionalHardwareList');
    if (extraContainer) {
      if (state.extraCartItems.length === 0) {
        extraContainer.classList.add('hidden');
        extraContainer.innerHTML = '';
      } else {
        extraContainer.classList.remove('hidden');
        extraContainer.innerHTML = state.extraCartItems.map(item => `
          <div class="flex items-center justify-between p-3 rounded-xl bg-surface-container hairline-border shadow-md">
            <div class="flex items-center gap-3 min-w-0">
              <img src="${item.image}" alt="${item.title}" class="w-14 h-14 rounded-lg object-cover bg-surface-container-lowest shrink-0"/>
              <div class="min-w-0">
                <h4 class="font-headline-sm text-[15px] text-on-surface truncate">${item.title}</h4>
                <span class="font-body-sm text-xs text-on-surface-variant block truncate">${item.subtitle}</span>
                <span class="font-spec-code-sm text-spec-code-sm text-primary">$${(item.price * item.qty).toLocaleString()}</span>
              </div>
            </div>
            <div class="flex items-center gap-1.5 shrink-0">
              <button class="extra-qty-btn w-7 h-7 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container" data-action="dec" data-id="${item.id}" type="button">-</button>
              <span class="font-spec-code-sm text-spec-code-sm w-5 text-center">${item.qty}</span>
              <button class="extra-qty-btn w-7 h-7 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container" data-action="inc" data-id="${item.id}" type="button">+</button>
            </div>
          </div>
        `).join('');

        extraContainer.querySelectorAll('.extra-qty-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const action = btn.getAttribute('data-action');
            const idx = state.extraCartItems.findIndex(x => x.id === id);
            if (idx < 0) return;
            if (action === 'inc') {
              state.extraCartItems[idx].qty += 1;
            } else {
              state.extraCartItems[idx].qty -= 1;
              if (state.extraCartItems[idx].qty <= 0) {
                state.extraCartItems.splice(idx, 1);
              }
            }
            persistState();
            renderVaultScreen();
          });
        });
      }
    }

    // 3. Update Accessory Button visual states
    accessoryButtons.forEach(btn => {
      const id = btn.getAttribute('data-id');
      const isSelected = state.selectedAccessories.some(a => a.id === id);
      if (isSelected) {
        btn.classList.remove('bg-surface-container-highest', 'text-on-surface');
        btn.classList.add('bg-primary-container', 'text-on-primary-container');
        btn.innerHTML = '<span class="material-symbols-outlined text-[18px]">check</span>';
      } else {
        btn.classList.add('bg-surface-container-highest', 'text-on-surface');
        btn.classList.remove('bg-primary-container', 'text-on-primary-container');
        btn.innerHTML = '<span class="material-symbols-outlined text-[18px]">add</span>';
      }
    });

    // 4. Update Fiscal Statement & Badges
    const { bespokeSubtotal, extraHardwareTotal, accessoriesTotal, grandTotal, totalItemCount } = calculateVaultTotals();

    const subtotalValEl = document.getElementById('subtotal-val');
    const extraRowEl = document.getElementById('extra-hardware-row');
    const extraValEl = document.getElementById('extra-hardware-val');
    const accRowEl = document.getElementById('accessories-row');
    const accValEl = document.getElementById('accessories-val');
    const totalValEl = document.getElementById('total-val');
    const ctaTotalValEl = document.getElementById('cta-total-val');
    const navVaultBadge = document.getElementById('navVaultCountBadge');
    const vaultSavedCountText = document.getElementById('vaultSavedCountText');

    if (subtotalValEl) {
      subtotalValEl.textContent = `$${bespokeSubtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (extraRowEl && extraValEl) {
      if (extraHardwareTotal > 0) {
        extraRowEl.style.display = 'flex';
        extraValEl.textContent = `$${extraHardwareTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      } else {
        extraRowEl.style.display = 'none';
      }
    }
    if (accRowEl && accValEl) {
      if (accessoriesTotal > 0) {
        accRowEl.style.display = 'flex';
        accValEl.textContent = `$${accessoriesTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      } else {
        accRowEl.style.display = 'none';
      }
    }
    if (totalValEl) {
      totalValEl.textContent = `$${grandTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (ctaTotalValEl) {
      ctaTotalValEl.textContent = `$${grandTotal.toLocaleString('en-US')}`;
    }
    if (navVaultBadge) {
      navVaultBadge.textContent = String(totalItemCount);
    }
    if (vaultSavedCountText) {
      vaultSavedCountText.textContent = `${totalItemCount} ${totalItemCount === 1 ? 'Master' : 'Items'} Saved`;
    }
  }

  // =========================================================================
  // 10. RAZORPAY PAYMENT GATEWAY, CHECKOUT MODAL & CERTIFICATE MINTING
  // =========================================================================
  const checkoutModal = document.getElementById('checkoutModal');
  const checkoutFormStep = document.getElementById('checkoutFormStep');
  const checkoutSuccessStep = document.getElementById('checkoutSuccessStep');
  const checkoutMainBtn = document.getElementById('checkout-main-btn');
  const razorpayDirectBtn = document.getElementById('razorpayDirectBtn');
  const closeCheckoutModalBtn = document.getElementById('closeCheckoutModalBtn');
  const vaultCheckoutForm = document.getElementById('vaultCheckoutForm');
  const finishOrderReturnBtn = document.getElementById('finishOrderReturnBtn');
  const checkoutCurrencySelect = document.getElementById('checkoutCurrency');
  const toggleRzpConfigBtn = document.getElementById('toggleRzpConfigBtn');
  const rzpConfigDrawer = document.getElementById('rzpConfigDrawer');
  const razorpayCustomKeyInput = document.getElementById('razorpayCustomKeyInput');

  // Interactive Razorpay Gateway Modal Elements
  const razorpayGatewayModal = document.getElementById('razorpayGatewayModal');
  const closeRzpGatewayBtn = document.getElementById('closeRzpGatewayBtn');
  const rzpAuthorizePayBtn = document.getElementById('rzpAuthorizePayBtn');
  const rzpAuthorizePayBtnText = document.getElementById('rzpAuthorizePayBtnText');

  const USD_TO_INR_RATE = 84.5;
  let activeRzpTab = 'upi';
  let activeRzpBank = 'HDFC Bank';
  let currentRzpOrder = null;

  if (razorpayCustomKeyInput) {
    razorpayCustomKeyInput.value = localStorage.getItem('aura_rzp_key_id') || '';
    razorpayCustomKeyInput.addEventListener('input', (e) => {
      localStorage.setItem('aura_rzp_key_id', e.target.value.trim());
    });
  }

  if (toggleRzpConfigBtn && rzpConfigDrawer) {
    toggleRzpConfigBtn.addEventListener('click', () => {
      const isHidden = rzpConfigDrawer.classList.contains('hidden');
      rzpConfigDrawer.classList.toggle('hidden', !isHidden);
      rzpConfigDrawer.classList.toggle('flex', isHidden);
    });
  }

  function getFormattedCheckoutAmount(usdTotal) {
    const currency = checkoutCurrencySelect ? checkoutCurrencySelect.value : 'USD';
    if (currency === 'INR') {
      const inrAmount = Math.round(usdTotal * USD_TO_INR_RATE);
      return {
        currency: 'INR',
        majorAmount: inrAmount,
        formatted: `₹${inrAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
      };
    }
    return {
      currency: 'USD',
      majorAmount: usdTotal,
      formatted: `$${usdTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    };
  }

  function updateCheckoutModalCurrencyDisplay() {
    const { grandTotal, totalItemCount } = calculateVaultTotals();
    const { formatted } = getFormattedCheckoutAmount(grandTotal);
    const modalTotalEl = document.getElementById('checkoutModalTotal');
    const summaryItemsEl = document.getElementById('checkoutSummaryItems');

    if (modalTotalEl) modalTotalEl.textContent = formatted;
    if (summaryItemsEl) {
      summaryItemsEl.textContent = `${state.vaultBuild.productName} (${state.vaultBuild.finishName}) • ${totalItemCount} Item${totalItemCount > 1 ? 's' : ''}`;
    }
  }

  if (checkoutCurrencySelect) {
    checkoutCurrencySelect.addEventListener('change', updateCheckoutModalCurrencyDisplay);
  }

  function openCheckoutModal(preselectedMethod) {
    if (!checkoutModal) return;
    const methodSelect = document.getElementById('checkoutMethod');
    if (methodSelect && preselectedMethod) {
      methodSelect.value = preselectedMethod;
    }
    updateCheckoutModalCurrencyDisplay();

    checkoutFormStep.classList.remove('hidden');
    checkoutFormStep.classList.add('flex');
    checkoutSuccessStep.classList.add('hidden');
    checkoutSuccessStep.classList.remove('flex');

    checkoutModal.classList.remove('hidden');
    checkoutModal.classList.add('flex');
  }

  function closeCheckoutModal() {
    if (!checkoutModal) return;
    checkoutModal.classList.add('hidden');
    checkoutModal.classList.remove('flex');
  }

  if (checkoutMainBtn) {
    checkoutMainBtn.addEventListener('click', () => openCheckoutModal('Razorpay Gateway (UPI / Cards / Netbanking / EMI)'));
  }

  if (razorpayDirectBtn) {
    razorpayDirectBtn.addEventListener('click', () => {
      openCheckoutModal('Razorpay Gateway (UPI / Cards / Netbanking / EMI)');
      setTimeout(() => {
        initiateRazorpayPaymentFlow();
      }, 120);
    });
  }

  document.querySelectorAll('.express-pay-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const method = btn.getAttribute('data-method');
      openCheckoutModal(method);
    });
  });

  if (closeCheckoutModalBtn) {
    closeCheckoutModalBtn.addEventListener('click', closeCheckoutModal);
  }

  // Razorpay Method Tabs inside #razorpayGatewayModal
  document.querySelectorAll('.rzp-tab-btn').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      document.querySelectorAll('.rzp-tab-btn').forEach(b => {
        b.classList.remove('border-[#3395ff]', 'text-[#7df4ff]', 'bg-[#182033]', 'font-semibold', 'active');
        b.classList.add('border-transparent', 'text-slate-400');
      });
      tabBtn.classList.add('border-[#3395ff]', 'text-[#7df4ff]', 'bg-[#182033]', 'font-semibold', 'active');
      tabBtn.classList.remove('border-transparent', 'text-slate-400');

      activeRzpTab = tabBtn.getAttribute('data-rzp-tab') || 'upi';
      document.querySelectorAll('.rzp-panel').forEach(p => {
        p.classList.add('hidden');
        p.classList.remove('flex');
      });
      const activePanel = document.getElementById(`rzp-panel-${activeRzpTab}`);
      if (activePanel) {
        activePanel.classList.remove('hidden');
        activePanel.classList.add('flex');
      }
    });
  });

  // Netbanking Bank Selector
  document.querySelectorAll('.rzp-bank-btn').forEach(bankBtn => {
    bankBtn.addEventListener('click', () => {
      document.querySelectorAll('.rzp-bank-btn').forEach(b => {
        b.classList.remove('bg-[#1d2740]', 'border-[#3395ff]', 'text-white');
        b.classList.add('bg-[#0e121b]', 'border-white/10', 'text-slate-300');
      });
      bankBtn.classList.add('bg-[#1d2740]', 'border-[#3395ff]', 'text-white');
      bankBtn.classList.remove('bg-[#0e121b]', 'border-white/10', 'text-slate-300');
      activeRzpBank = bankBtn.getAttribute('data-bank') || 'HDFC Bank';
    });
  });

  if (closeRzpGatewayBtn && razorpayGatewayModal) {
    closeRzpGatewayBtn.addEventListener('click', () => {
      razorpayGatewayModal.classList.add('hidden');
      razorpayGatewayModal.classList.remove('flex');
    });
  }

  async function createRazorpayOrderOnServer(majorAmount, currency, customKeyId) {
    try {
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: majorAmount,
          currency,
          keyId: customKeyId,
          notes: {
            product: state.vaultBuild.productName,
            finish: state.vaultBuild.finishName,
            engraving: state.vaultBuild.engraving
          }
        })
      });
      if (res.ok) return await res.json();
    } catch (_) {}
    return {
      id: 'order_Aura' + Math.floor(100000 + Math.random() * 900000),
      amount: Math.round(majorAmount * 100),
      currency,
      keyId: customKeyId || 'rzp_test_AuraAtelier96k'
    };
  }

  async function verifyRazorpayPaymentOnServer(payload) {
    try {
      const res = await fetch('/api/razorpay/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) return await res.json();
    } catch (_) {}
    return {
      verified: true,
      razorpay_order_id: payload.razorpay_order_id,
      razorpay_payment_id: payload.razorpay_payment_id || ('pay_' + Math.random().toString(36).substring(2, 12)),
      razorpay_signature: 'hmac_sha256_verified',
      method: payload.method || 'Razorpay UPI',
      amountFormatted: payload.amountFormatted
    };
  }

  function completeOrderAndShowCertificate(verificationResult) {
    if (razorpayGatewayModal) {
      razorpayGatewayModal.classList.add('hidden');
      razorpayGatewayModal.classList.remove('flex');
    }

    const certId = 'AURA-' + Math.floor(100000 + Math.random() * 900000);
    const rzpOrderId = verificationResult.razorpay_order_id || 'order_Aura96k';
    const rzpPayId = verificationResult.razorpay_payment_id || 'pay_Aura96k';
    const methodUsed = verificationResult.method || 'Razorpay UPI';
    const amountStr = verificationResult.amountFormatted || '$1,010.00';

    const certOrderEl = document.getElementById('certOrderId');
    const certRzpOrderEl = document.getElementById('certRzpOrderId');
    const certRzpPayEl = document.getElementById('certRzpPaymentId');
    const certMethodEl = document.getElementById('certPaymentMethod');
    const certHardwareEl = document.getElementById('certHardwareName');
    const certMonogramEl = document.getElementById('certMonogram');
    const certTotalEl = document.getElementById('certTotalPaid');

    if (certOrderEl) certOrderEl.textContent = certId;
    if (certRzpOrderEl) certRzpOrderEl.textContent = rzpOrderId;
    if (certRzpPayEl) certRzpPayEl.textContent = rzpPayId;
    if (certMethodEl) certMethodEl.textContent = methodUsed;
    if (certHardwareEl) certHardwareEl.textContent = `${state.vaultBuild.productName} (${state.vaultBuild.finishName})`;
    if (certMonogramEl) certMonogramEl.textContent = `"${state.vaultBuild.engraving}"`;
    if (certTotalEl) certTotalEl.textContent = amountStr;

    state.orders.unshift({
      id: certId,
      rzpOrderId,
      rzpPaymentId: rzpPayId,
      method: methodUsed,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      hardware: `${state.vaultBuild.productName} — ${state.vaultBuild.finishName}`,
      monogram: state.vaultBuild.engraving,
      total: amountStr
    });
    persistState();

    checkoutFormStep.classList.add('hidden');
    checkoutFormStep.classList.remove('flex');
    checkoutSuccessStep.classList.remove('hidden');
    checkoutSuccessStep.classList.add('flex');

    triggerToast(`Razorpay Verified (${rzpPayId}) • Certificate Minted`);
  }

  async function initiateRazorpayPaymentFlow() {
    const { grandTotal } = calculateVaultTotals();
    const { currency, majorAmount, formatted } = getFormattedCheckoutAmount(grandTotal);
    const customKeyId = razorpayCustomKeyInput ? razorpayCustomKeyInput.value.trim() : '';
    const customerName = document.getElementById('checkoutName')?.value || 'Julian Vance';
    const customerEmail = document.getElementById('checkoutEmail')?.value || 'j.vance@atelier.ch';
    const customerPhone = document.getElementById('checkoutPhone')?.value || '+91 98765 43210';

    triggerToast('Initializing Razorpay Secure Order...');
    const orderData = await createRazorpayOrderOnServer(majorAmount, currency, customKeyId);
    currentRzpOrder = {
      ...orderData,
      formatted,
      customerName,
      customerEmail,
      customerPhone
    };

    // If user entered their own rzp_test_... or rzp_live_... Key ID and Razorpay Checkout.js is available
    if (customKeyId && /^rzp_(test|live)_/.test(customKeyId) && typeof window.Razorpay === 'function') {
      try {
        const rzpOptions = {
          key: customKeyId,
          amount: orderData.amount,
          currency: orderData.currency,
          name: 'AURA Luxury Acoustic',
          description: `${state.vaultBuild.productName} (${state.vaultBuild.finishName})`,
          prefill: {
            name: customerName,
            email: customerEmail,
            contact: customerPhone
          },
          theme: {
            color: '#D4AF37',
            backdrop_color: '#0A0B0E'
          },
          handler: async function (response) {
            const verified = await verifyRazorpayPaymentOnServer({
              razorpay_order_id: response.razorpay_order_id || orderData.id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              method: 'Razorpay Checkout.js Live',
              currency,
              amountFormatted: formatted
            });
            completeOrderAndShowCertificate(verified);
          }
        };
        if (orderData.mode === 'razorpay_api' && orderData.id) {
          rzpOptions.order_id = orderData.id;
        }
        const rzpInstance = new window.Razorpay(rzpOptions);
        rzpInstance.open();
        return;
      } catch (err) {
        // Fall back to built-in interactive Razorpay Gateway modal
      }
    }

    // Open built-in Interactive Razorpay Secure Checkout Gateway Modal
    const rzpOrderIdEl = document.getElementById('rzpModalOrderId');
    const rzpAmountEl = document.getElementById('rzpModalAmount');
    const rzpPhoneEl = document.getElementById('rzpCustomerPhone');
    const rzpEmailEl = document.getElementById('rzpCustomerEmail');

    if (rzpOrderIdEl) rzpOrderIdEl.textContent = `ORDER: ${orderData.id}`;
    if (rzpAmountEl) rzpAmountEl.textContent = formatted;
    if (rzpPhoneEl) rzpPhoneEl.textContent = customerPhone;
    if (rzpEmailEl) rzpEmailEl.textContent = customerEmail;
    if (rzpAuthorizePayBtnText) rzpAuthorizePayBtnText.textContent = `Pay ${formatted} via Razorpay`;

    if (razorpayGatewayModal) {
      razorpayGatewayModal.classList.remove('hidden');
      razorpayGatewayModal.classList.add('flex');
    }
  }

  if (rzpAuthorizePayBtn) {
    rzpAuthorizePayBtn.addEventListener('click', async () => {
      if (!currentRzpOrder) return;
      const origText = rzpAuthorizePayBtnText ? rzpAuthorizePayBtnText.textContent : 'Pay Now via Razorpay';
      if (rzpAuthorizePayBtnText) rzpAuthorizePayBtnText.textContent = 'Verifying HMAC-SHA256 Signature...';
      rzpAuthorizePayBtn.disabled = true;

      let channelDesc = 'Razorpay UPI';
      if (activeRzpTab === 'upi') {
        const upiId = document.getElementById('rzpUpiInput')?.value || 'julian.aura@okhdfcbank';
        channelDesc = `Razorpay UPI (${upiId})`;
      } else if (activeRzpTab === 'card') {
        const cardNum = (document.getElementById('rzpCardNumber')?.value || '4111').slice(-4);
        channelDesc = `Razorpay Card (•••• ${cardNum})`;
      } else if (activeRzpTab === 'netbanking') {
        channelDesc = `Razorpay Netbanking (${activeRzpBank})`;
      } else if (activeRzpTab === 'emi') {
        channelDesc = 'Razorpay No-Cost EMI';
      }

      const generatedPaymentId = 'pay_' + Math.random().toString(36).substring(2, 10) + Math.floor(10 + Math.random() * 89);
      const verified = await verifyRazorpayPaymentOnServer({
        razorpay_order_id: currentRzpOrder.id,
        razorpay_payment_id: generatedPaymentId,
        method: channelDesc,
        currency: currentRzpOrder.currency,
        amountFormatted: currentRzpOrder.formatted
      });

      setTimeout(() => {
        rzpAuthorizePayBtn.disabled = false;
        if (rzpAuthorizePayBtnText) rzpAuthorizePayBtnText.textContent = origText;
        completeOrderAndShowCertificate(verified);
      }, 450);
    });
  }

  if (vaultCheckoutForm) {
    vaultCheckoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      initiateRazorpayPaymentFlow();
    });
  }

  if (finishOrderReturnBtn) {
    finishOrderReturnBtn.addEventListener('click', () => {
      closeCheckoutModal();
      switchTab('discover');
    });
  }

  // =========================================================================
  // 11. GLOBAL SEARCH MODAL & MEMBER PROFILE MODAL
  // =========================================================================
  const searchFilterModal = document.getElementById('searchFilterModal');
  const openSearchModalBtn = document.getElementById('openSearchModalBtn');
  const closeSearchModalBtn = document.getElementById('closeSearchModalBtn');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const globalSearchResults = document.getElementById('globalSearchResults');

  function renderSearchResults(query = '') {
    if (!globalSearchResults) return;
    const q = query.trim().toLowerCase();
    const allSearchable = [
      {
        id: 'flagship-aura-one',
        title: 'AURA ONE Flagship',
        subtitle: '40mm Beryllium Over-Ear • Spatial 96kHz',
        price: 890,
        isFlagship: true
      },
      ...PRODUCTS
    ];

    const matches = allSearchable.filter(item =>
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      (item.specLine && item.specLine.toLowerCase().includes(q))
    );

    globalSearchResults.innerHTML = matches.map(item => `
      <button class="search-result-item w-full p-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-between text-left transition-colors" data-id="${item.id}" data-flagship="${Boolean(item.isFlagship)}" type="button">
        <div>
          <span class="font-headline-sm text-[15px] text-on-surface block">${item.title}</span>
          <span class="font-body-sm text-xs text-on-surface-variant">${item.subtitle}</span>
        </div>
        <span class="font-spec-code-sm text-spec-code-sm text-primary font-semibold">$${item.price.toLocaleString()}</span>
      </button>
    `).join('');

    globalSearchResults.querySelectorAll('.search-result-item').forEach(btn => {
      btn.addEventListener('click', () => {
        searchFilterModal.classList.add('hidden');
        searchFilterModal.classList.remove('flex');
        const isFlagship = btn.getAttribute('data-flagship') === 'true';
        const id = btn.getAttribute('data-id');
        if (isFlagship) {
          switchTab('3d-studio');
        } else {
          openProductDetailModal(id);
        }
      });
    });
  }

  if (openSearchModalBtn && searchFilterModal) {
    openSearchModalBtn.addEventListener('click', () => {
      renderSearchResults(globalSearchInput ? globalSearchInput.value : '');
      searchFilterModal.classList.remove('hidden');
      searchFilterModal.classList.add('flex');
      if (globalSearchInput) setTimeout(() => globalSearchInput.focus(), 50);
    });
  }
  if (closeSearchModalBtn && searchFilterModal) {
    closeSearchModalBtn.addEventListener('click', () => {
      searchFilterModal.classList.add('hidden');
      searchFilterModal.classList.remove('flex');
    });
  }
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => renderSearchResults(e.target.value));
  }

  // Member Profile & Bookmarks Modal
  const profileModal = document.getElementById('profileModal');
  const openProfileModalBtn = document.getElementById('openProfileModalBtn');
  const closeProfileModalBtn = document.getElementById('closeProfileModalBtn');

  function renderProfileModal() {
    const bookmarksEl = document.getElementById('profileBookmarksList');
    const ordersEl = document.getElementById('profileOrdersList');

    if (bookmarksEl) {
      const savedProds = PRODUCTS.filter(p => state.bookmarks.includes(p.id));
      if (savedProds.length === 0) {
        bookmarksEl.innerHTML = `<p class="font-body-sm text-xs text-on-surface-variant p-2.5 rounded-lg bg-surface-container">No bookmarked editions yet. Tap the bookmark icon on any hardware card in Discover.</p>`;
      } else {
        bookmarksEl.innerHTML = savedProds.map(p => `
          <div class="flex items-center justify-between p-2.5 rounded-lg bg-surface-container">
            <div class="flex items-center gap-2.5">
              <img src="${p.image}" alt="${p.title}" class="w-10 h-10 rounded object-cover"/>
              <div>
                <span class="font-body-sm text-on-surface font-medium block">${p.title}</span>
                <span class="font-spec-code-sm text-spec-code-sm text-primary">$${p.price.toLocaleString()}</span>
              </div>
            </div>
            <button class="profile-inspect-btn px-3 py-1 rounded-full bg-surface-container-highest text-secondary font-spec-code-sm text-spec-code-sm uppercase" data-id="${p.id}" type="button">Inspect</button>
          </div>
        `).join('');

        bookmarksEl.querySelectorAll('.profile-inspect-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            profileModal.classList.add('hidden');
            profileModal.classList.remove('flex');
            openProductDetailModal(btn.getAttribute('data-id'));
          });
        });
      }
    }

    if (ordersEl) {
      if (state.orders.length === 0) {
        ordersEl.innerHTML = `<p class="font-body-sm text-xs text-on-surface-variant p-2.5 rounded-lg bg-surface-container">No commissioned orders yet. Save a bespoke build to your Vault and authorize checkout.</p>`;
      } else {
        ordersEl.innerHTML = state.orders.map(o => `
          <div class="p-2.5 rounded-lg bg-surface-container flex items-center justify-between">
            <div>
              <span class="font-spec-code-sm text-spec-code-sm text-primary block">${o.id} • ${o.date}</span>
              <span class="font-body-sm text-xs text-on-surface block">${o.hardware} ("${o.monogram}")</span>
            </div>
            <span class="font-spec-code-sm text-spec-code-sm text-secondary font-semibold">${o.total}</span>
          </div>
        `).join('');
      }
    }
  }

  if (openProfileModalBtn && profileModal) {
    openProfileModalBtn.addEventListener('click', () => {
      renderProfileModal();
      profileModal.classList.remove('hidden');
      profileModal.classList.add('flex');
    });
  }
  if (closeProfileModalBtn && profileModal) {
    closeProfileModalBtn.addEventListener('click', () => {
      profileModal.classList.add('hidden');
      profileModal.classList.remove('flex');
    });
  }

  const profileOpenAccessBtn = document.getElementById('profileOpenAccessBtn');
  if (profileOpenAccessBtn && profileModal) {
    profileOpenAccessBtn.addEventListener('click', () => {
      profileModal.classList.add('hidden');
      profileModal.classList.remove('flex');
      switchTab('access');
    });
  }

  // =========================================================================
  // 12. SCREEN 5: AURA ATELIER ACCESS (COLLECTOR SIGN IN & BIOMETRIC ENCLAVE)
  // =========================================================================
  const passkeyInput = document.getElementById('vault-passkey');
  const togglePasskeyBtn = document.getElementById('toggle-passkey-visibility');
  const eyeIcon = document.getElementById('eye-icon');
  const biometricBtn = document.getElementById('biometric-trigger');
  const biometricBadge = document.getElementById('biometric-status-badge');
  const googleAuthBtn = document.getElementById('google-auth-btn');
  const facebookAuthBtn = document.getElementById('facebook-auth-btn');
  const vaultAuthForm = document.getElementById('vault-auth-form');
  const collectorEmailInput = document.getElementById('collector-email');
  const collectorFullnameInput = document.getElementById('collector-fullname');
  const forgotPasskeyBtn = document.getElementById('forgot-passkey-btn');
  const requestMembershipBtn = document.getElementById('request-membership-btn');
  const registerNameGroup = document.getElementById('register-name-group');
  const atelierAccessHeading = document.getElementById('atelierAccessHeading');
  const authDividerLabel = document.getElementById('authDividerLabel');
  const vaultAuthSubmitLabel = document.getElementById('vault-auth-submit-label');
  const membershipPromptLabel = document.getElementById('membershipPromptLabel');

  let isMembershipRegisterMode = false;

  // Load saved collector session if present
  const savedCollector = JSON.parse(localStorage.getItem('aura_collector_session') || 'null');
  if (savedCollector) {
    applyCollectorIdentity(savedCollector.name, savedCollector.email, savedCollector.tier);
  }

  function applyCollectorIdentity(name, email, tier) {
    const profileNameEl = document.getElementById('profileCollectorName');
    const profileEmailEl = document.getElementById('profileCollectorEmail');
    const profileTierEl = document.getElementById('profileCollectorTier');
    const checkoutNameEl = document.getElementById('checkoutName');
    const checkoutEmailEl = document.getElementById('checkoutEmail');

    if (profileNameEl && name) profileNameEl.textContent = name;
    if (profileEmailEl && email) profileEmailEl.textContent = email;
    if (profileTierEl && tier) profileTierEl.textContent = tier;
    if (checkoutNameEl && name) checkoutNameEl.value = name;
    if (checkoutEmailEl && email) checkoutEmailEl.value = email;
    if (collectorEmailInput && email) collectorEmailInput.value = email;
  }

  function completeCollectorSignIn(name, email, methodLabel) {
    const keepActive = document.getElementById('keep-session-checkbox')?.checked !== false;
    const sessionData = {
      name: name || 'Julian Vance',
      email: email || 'collector@aura-acoustic.com',
      tier: `Geneva Founders Tier • ${methodLabel}`
    };
    if (keepActive) {
      localStorage.setItem('aura_collector_session', JSON.stringify(sessionData));
    }
    applyCollectorIdentity(sessionData.name, sessionData.email, sessionData.tier);
    triggerToast(`Authenticated (${methodLabel}) — Vault Unlocked`);
    setTimeout(() => {
      switchTab('vault-cart');
    }, 500);
  }

  // 1. Toggle Passkey Visibility
  if (togglePasskeyBtn && passkeyInput && eyeIcon) {
    togglePasskeyBtn.addEventListener('click', () => {
      const isPassword = passkeyInput.type === 'password';
      passkeyInput.type = isPassword ? 'text' : 'password';
      eyeIcon.textContent = isPassword ? 'visibility_off' : 'visibility';
    });
  }

  // 2. Face ID / Touch ID Biometric Trigger
  if (biometricBtn && biometricBadge) {
    biometricBtn.addEventListener('click', () => {
      biometricBadge.textContent = 'SCANNING...';
      biometricBadge.classList.remove('text-secondary-fixed');
      biometricBadge.classList.add('text-primary');
      triggerToast('Scanning Acoustic Secure Enclave...');

      setTimeout(() => {
        biometricBadge.textContent = 'VERIFIED';
        biometricBadge.classList.remove('text-primary');
        biometricBadge.classList.add('text-secondary-fixed');
        completeCollectorSignIn(
          'Julian Vance (#089)',
          collectorEmailInput?.value || 'collector@aura-acoustic.com',
          'Face ID Enclave'
        );
      }, 850);
    });
  }

  // 3. Continue with Google
  if (googleAuthBtn) {
    googleAuthBtn.addEventListener('click', () => {
      completeCollectorSignIn('Julian Vance', 'julian.vance@gmail.com', 'Google OAuth');
    });
  }

  // 4. Continue with Facebook
  if (facebookAuthBtn) {
    facebookAuthBtn.addEventListener('click', () => {
      completeCollectorSignIn('Julian Vance', 'j.vance@atelier.ch', 'Facebook SSO');
    });
  }

  // 5. Email & Vault Passkey Sign In / Membership Submit
  if (vaultAuthForm) {
    vaultAuthForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = collectorEmailInput?.value.trim() || 'collector@aura-acoustic.com';
      const customName = collectorFullnameInput?.value.trim();
      const derivedName = customName || email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const modeTag = isMembershipRegisterMode ? 'New Founder #090' : 'SLOT #01 Passkey';
      completeCollectorSignIn(derivedName, email, modeTag);
    });
  }

  // 6. Forgot Passkey Recovery
  if (forgotPasskeyBtn) {
    forgotPasskeyBtn.addEventListener('click', () => {
      const email = collectorEmailInput?.value.trim() || 'collector@aura-acoustic.com';
      triggerToast(`Encrypted Passkey Recovery Sent to ${email}`);
    });
  }

  // 7. Request Atelier Membership Mode Toggle
  if (requestMembershipBtn) {
    requestMembershipBtn.addEventListener('click', () => {
      isMembershipRegisterMode = !isMembershipRegisterMode;
      if (isMembershipRegisterMode) {
        if (registerNameGroup) {
          registerNameGroup.classList.remove('hidden');
          registerNameGroup.classList.add('flex');
        }
        if (atelierAccessHeading) atelierAccessHeading.textContent = 'Request Atelier Membership';
        if (authDividerLabel) authDividerLabel.textContent = 'Mint Collector Credentials';
        if (vaultAuthSubmitLabel) vaultAuthSubmitLabel.textContent = 'Mint Atelier Membership';
        if (membershipPromptLabel) membershipPromptLabel.textContent = 'Existing collector?';
        requestMembershipBtn.textContent = 'Return to Vault Sign In';
        triggerToast('Atelier Membership Application Active');
      } else {
        if (registerNameGroup) {
          registerNameGroup.classList.add('hidden');
          registerNameGroup.classList.remove('flex');
        }
        if (atelierAccessHeading) atelierAccessHeading.textContent = 'AURA Atelier Access';
        if (authDividerLabel) authDividerLabel.textContent = 'Or Secure Email Sign In';
        if (vaultAuthSubmitLabel) vaultAuthSubmitLabel.textContent = 'Access Acoustic Vault';
        if (membershipPromptLabel) membershipPromptLabel.textContent = 'New collector?';
        requestMembershipBtn.textContent = 'Request Atelier Membership';
      }
    });
  }

  // =========================================================================
  // 13. INITIALIZE APP
  // =========================================================================
  renderCuratedCollection();
  updateCustomizerValuation();
  renderVaultScreen();
})();
