/**
 * ==============================================================================
 * DecodeLabs Industrial Training Kit - Project 1: The Responsive Architecture
 * Pure Vanilla JavaScript Application Logic (Zero Dependencies)
 * Fulfilling Pillar 3: State Management & WCAG Adherence
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ----------------------------------------------------------------------------
  // 1. Module Blueprint Database (Technical Content & Code Snippets)
  // ----------------------------------------------------------------------------
  const MODULES_DATA = {
    'mod-1': {
      title: 'Semantic HTML5: Structural Meaning Over Div-Soup',
      category: 'Foundations',
      readTime: '6 min read',
      req: 'Slide 10 Standard',
      description: 'Slide 10 establishes that semantic landmarks provide a vital Table of Contents for screen readers, assistive technology, and AI crawlers. Rather than unstyled generic <div> containers, use dedicated structural landmarks to construct predictable wayfinding trees.',
      codeSnippet: `<!-- Landmark Infrastructure Tree -->
<header role="banner">
  <nav aria-label="Main Navigation">...</nav>
</header>
<main id="main-content" tabindex="-1">
  <article aria-labelledby="post-title">
    <h1 id="post-title">Headline</h1>
    <section>...</section>
  </article>
  <aside aria-label="Supplementary Info">...</aside>
</main>
<footer role="contentinfo">...</footer>`
    },
    'mod-2': {
      title: 'CSS Grid: Orchestrating the 2D Macro Floor-Plan',
      category: 'Layout Systems',
      readTime: '8 min read',
      req: 'Slide 11 Standard',
      description: 'Slide 11 designates CSS Grid for Macro Layouts: a whole-page 2D floorplan. By establishing explicit template areas and dynamic column tracks via minmax(), layouts fluidly adapt across breakpoints without brittle margin math.',
      codeSnippet: `/* Desktop Macro Layout with CSS Grid */
.layout-macro-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-2xl);
  align-items: start;
}

@media (max-width: 1023px) {
  .layout-macro-grid {
    grid-template-columns: 1fr;
  }
}`
    },
    'mod-3': {
      title: 'Flexbox: Precision 1D Micro Alignments',
      category: 'Layout Systems',
      readTime: '5 min read',
      req: 'Slide 11 Micro Standard',
      description: 'While CSS Grid handles the 2D macro canvas, Flexbox rules micro components (Slide 11): navigation rows, badge clusters, card action footers, and stat indicators where items flow dynamically along a single axis.',
      codeSnippet: `/* Flexbox Header Micro Alignment */
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-md);
}`
    },
    'mod-4': {
      title: 'Fluid Typography: Replacing Breakpoints with clamp()',
      category: 'Aesthetics & WCAG',
      readTime: '7 min read',
      req: 'Slide 9 & 11 Formula',
      description: 'Rather than jumping between jarring static font sizes at 768px and 1024px, clamp(min, preferred, max) creates mathematically continuous typographic scaling across any screen geometry while maintaining strict accessibility zoom factors.',
      codeSnippet: `/* Mathematical Fluid Typography Formula */
:root {
  --font-size-hero: clamp(2.25rem, 1.8rem + 2.5vw, 3.65rem);
  --font-size-xl: clamp(1.75rem, 1.4rem + 1.5vw, 2.5rem);
  --font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
}`
    },
    'mod-5': {
      title: 'Warmth & Grounding: The 2025/2026 Color Palette',
      category: 'Aesthetics & WCAG',
      readTime: '4 min read',
      req: 'Slide 9 Palette',
      description: 'Slide 9 dictates a deliberate departure from sterile cold tech aesthetics into organic warmth. The trinity of Mocha Mousse (#A5856F - Stability), Ethereal Blue (#A0D4E0 - Trust), and Moonlit Grey (#F2F0EA - Refinement) balances human warmth with certified WCAG 2.2 AA/AAA contrast ratios.',
      codeSnippet: `/* Slide 9 Grounded Palette Tokens */
:root {
  --color-mocha: #A5856F;     /* Stability */
  --color-ethereal: #A0D4E0;  /* Trust */
  --color-moonlit: #F2F0EA;   /* Refinement */
  --color-espresso: #261E1A;  /* High-Contrast WCAG Anchor */
}`
    },
    'mod-6': {
      title: 'Reactive State Without Framework Overhead',
      category: 'Logic & State',
      readTime: '9 min read',
      req: 'Slide 7 & 12 Logic',
      description: 'The training mandate: "No Frameworks. Master the fundamentals first." (Slide 7). By orchestrating client state via native browser events, Custom Elements, and LocalStorage, we achieve sub-millisecond execution with zero bundle penalties.',
      codeSnippet: `// Pure Vanilla Reactive Storage State
const getBookmarks = () => 
  JSON.parse(localStorage.getItem('dl_saved_modules') || '[]');

const toggleBookmark = (id) => {
  const current = getBookmarks();
  const next = current.includes(id) 
    ? current.filter(x => x !== id) 
    : [...current, id];
  localStorage.setItem('dl_saved_modules', JSON.stringify(next));
  window.dispatchEvent(new CustomEvent('bookmarksUpdated'));
};`
    },
    'mod-7': {
      title: 'Strict WCAG Adherence: Auditing LCP, CLS & Universal Access',
      category: 'Aesthetics & WCAG',
      readTime: '10 min read',
      req: 'Slide 6 & 12 Audit',
      description: 'Slide 6 & 12 require strict WCAG 2.2 adherence. This means all interactive controls have accessible names, visible focus rings with minimum 3:1 contrast against backgrounds, skip navigation for keyboard users, and zero Cumulative Layout Shift (CLS).',
      codeSnippet: `/* Accessible Focus Visibility */
:focus-visible {
  outline: 3px solid var(--color-mocha);
  outline-offset: 3px;
}

/* Reduced Motion Preference Respect */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`
    },
    'mod-8': {
      title: 'Strategy & Soil Testing: Empathy Maps & Grayscale Prototyping',
      category: 'Foundations',
      readTime: '6 min read',
      req: 'Slide 8 Blueprint',
      description: 'Pillar 1 (Slide 8): Strategy & The Blueprint. Before writing single lines of code, interns conduct "Soil Testing" using Empathy Maps (Says, Thinks, Does, Feels) and grayscale wireframes. Golden Rule: "If it doesn\'t work in grayscale, color won\'t fix it."',
      codeSnippet: `/* Wireframe Hierarchy Checklist */
1. Establish visual weighting with 100% grayscale contrast.
2. Confirm tap target dimensions (minimum 44x44px).
3. Validate mobile reading scan path (F-pattern & Z-pattern).
4. Map keyboard Tab navigation hierarchy before CSS skins.`
    }
  };

  // ----------------------------------------------------------------------------
  // 2. DOM Elements Selection
  // ----------------------------------------------------------------------------
  const siteHeader = document.getElementById('site-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const searchToggleBtn = document.getElementById('search-toggle-btn');
  const searchDrawer = document.getElementById('header-search-drawer');
  const globalSearchInput = document.getElementById('global-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');

  const filterPills = document.querySelectorAll('.filter-pill');
  const cardsContainer = document.getElementById('cards-container');
  const allCards = document.querySelectorAll('.content-card');
  const filterStatusMsg = document.getElementById('filter-status-msg');

  const viewGridBtn = document.getElementById('view-grid-btn');
  const viewListBtn = document.getElementById('view-list-btn');

  const bookmarksCounter = document.getElementById('bookmarks-counter');
  const bookmarksDrawerToggle = document.getElementById('bookmarks-drawer-toggle');
  const bookmarksDrawer = document.getElementById('bookmarks-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const savedModulesList = document.getElementById('saved-modules-list');

  const themeToggle = document.getElementById('theme-toggle');
  const copyHexBtns = document.querySelectorAll('.copy-hex-btn');
  const toastRegion = document.getElementById('toast-region');

  // Diagnostics & Sandbox
  const vpWidthEl = document.getElementById('vp-width');
  const vpTargetEl = document.getElementById('vp-target');
  const fluidSlider = document.getElementById('fluid-slider');
  const sliderVal = document.getElementById('slider-val');
  const clampPreviewHeading = document.querySelector('.live-sample-heading');
  const calculatedFontSize = document.getElementById('calculated-font-size');

  // Modal Dialog Elements
  const modalDialog = document.getElementById('module-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalMeta = document.getElementById('modal-meta');
  const modalText = document.getElementById('modal-text');
  const modalCode = document.getElementById('modal-code');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalSecondaryClose = document.getElementById('modal-secondary-close');
  const modalBookmarkAction = document.getElementById('modal-bookmark-action');
  const modalBookmarkText = document.getElementById('modal-bookmark-text');
  let activeModalModuleId = null;

  // ----------------------------------------------------------------------------
  // 3. LocalStorage State Management
  // ----------------------------------------------------------------------------
  const STORAGE_KEYS = {
    BOOKMARKS: 'dl_p1_bookmarks',
    THEME: 'dl_p1_high_contrast',
    VIEW_MODE: 'dl_p1_view_mode'
  };

  const getSavedBookmarks = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS)) || [];
    } catch {
      return [];
    }
  };

  const saveBookmarks = (bookmarks) => {
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    updateBookmarksUI();
  };

  // ----------------------------------------------------------------------------
  // 4. Header Scroll & Mobile Navigation
  // ----------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  const toggleMobileMenu = (forceClose = false) => {
    const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    const nextState = forceClose ? false : !isExpanded;
    
    mobileMenuBtn.setAttribute('aria-expanded', String(nextState));
    mainNav.classList.toggle('is-open', nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
  }

  // Close nav on click of any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu(true);
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // ESC to close mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
      toggleMobileMenu(true);
      mobileMenuBtn.focus();
    }
  });

  // ----------------------------------------------------------------------------
  // 5. Search Bar Functionality
  // ----------------------------------------------------------------------------
  if (searchToggleBtn && searchDrawer) {
    searchToggleBtn.addEventListener('click', () => {
      const isHidden = searchDrawer.hidden;
      searchDrawer.hidden = !isHidden;
      searchToggleBtn.setAttribute('aria-expanded', String(isHidden));
      if (isHidden) {
        globalSearchInput.focus();
      }
    });
  }

  if (clearSearchBtn && globalSearchInput) {
    clearSearchBtn.addEventListener('click', () => {
      globalSearchInput.value = '';
      clearSearchBtn.hidden = true;
      filterCards();
      globalSearchInput.focus();
    });
  }

  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', () => {
      if (clearSearchBtn) {
        clearSearchBtn.hidden = globalSearchInput.value.trim().length === 0;
      }
      filterCards();
    });
  }

  // ----------------------------------------------------------------------------
  // 6. Category Filtering & Search Coordination
  // ----------------------------------------------------------------------------
  let activeFilter = 'all';

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      activeFilter = pill.getAttribute('data-filter') || 'all';
      filterCards();
    });
  });

  function filterCards() {
    const query = (globalSearchInput ? globalSearchInput.value : '').toLowerCase().trim();
    let visibleCount = 0;

    allCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
      const excerpt = card.querySelector('.card-excerpt')?.textContent.toLowerCase() || '';
      const badge = card.querySelector('.card-badge')?.textContent.toLowerCase() || '';

      const matchesFilter = (activeFilter === 'all' || category === activeFilter);
      const matchesSearch = query === '' || 
        title.includes(query) || 
        excerpt.includes(query) || 
        badge.includes(query);

      if (matchesFilter && matchesSearch) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (filterStatusMsg) {
      if (query.length > 0 || activeFilter !== 'all') {
        filterStatusMsg.textContent = `Showing ${visibleCount} of ${allCards.length} modules matching current criteria.`;
      } else {
        filterStatusMsg.textContent = '';
      }
    }
  }

  // ----------------------------------------------------------------------------
  // 7. Grid vs List View Density Toggle
  // ----------------------------------------------------------------------------
  const setViewMode = (mode) => {
    if (!cardsContainer) return;
    if (mode === 'list') {
      cardsContainer.classList.add('list-view');
      viewListBtn?.classList.add('active');
      viewGridBtn?.classList.remove('active');
    } else {
      cardsContainer.classList.remove('list-view');
      viewGridBtn?.classList.add('active');
      viewListBtn?.classList.remove('active');
    }
    localStorage.setItem(STORAGE_KEYS.VIEW_MODE, mode);
  };

  viewGridBtn?.addEventListener('click', () => setViewMode('grid'));
  viewListBtn?.addEventListener('click', () => setViewMode('list'));

  // Initialize View Mode
  const savedViewMode = localStorage.getItem(STORAGE_KEYS.VIEW_MODE) || 'grid';
  setViewMode(savedViewMode);

  // ----------------------------------------------------------------------------
  // 8. Bookmarks & LocalStorage State Sync
  // ----------------------------------------------------------------------------
  function updateBookmarksUI() {
    const saved = getSavedBookmarks();

    // Update Counter Pill in Header
    if (bookmarksCounter) {
      bookmarksCounter.textContent = saved.length;
    }

    // Update bookmark buttons state on all cards
    document.querySelectorAll('.btn-bookmark').forEach(btn => {
      const id = btn.getAttribute('data-bookmark-id');
      const isSaved = saved.includes(id);
      btn.classList.toggle('bookmarked', isSaved);
      btn.setAttribute('aria-label', isSaved ? 'Remove from saved modules' : 'Bookmark module');
      btn.title = isSaved ? 'Remove Bookmark' : 'Bookmark Module';
    });

    // Update Modal bookmark button if active
    if (activeModalModuleId && modalBookmarkText) {
      const isSaved = saved.includes(activeModalModuleId);
      modalBookmarkText.textContent = isSaved ? 'Remove from Saved' : 'Save Module';
    }

    // Re-render Saved Modules list in drawer
    renderSavedModulesList(saved);
  }

  function toggleBookmark(moduleId, titleHint = 'Module') {
    const saved = getSavedBookmarks();
    let updated;
    const exists = saved.includes(moduleId);

    if (exists) {
      updated = saved.filter(id => id !== moduleId);
      showToast(`Removed "${titleHint}" from saved modules.`);
    } else {
      updated = [...saved, moduleId];
      showToast(`Saved "${titleHint}" to your training notebook.`);
    }

    saveBookmarks(updated);
  }

  function renderSavedModulesList(saved) {
    if (!savedModulesList) return;

    if (saved.length === 0) {
      savedModulesList.innerHTML = `<p class="empty-state-msg">No modules saved yet. Click the bookmark icon on any module card to save it for offline review.</p>`;
      return;
    }

    savedModulesList.innerHTML = '';
    saved.forEach(id => {
      const mod = MODULES_DATA[id];
      if (!mod) return;

      const item = document.createElement('div');
      item.className = 'saved-module-item';
      item.innerHTML = `
        <span class="saved-module-title">${mod.title}</span>
        <div class="saved-module-actions">
          <button type="button" class="btn-text-link" data-inspect-saved="${id}">View Details</button>
          <button type="button" class="remove-saved-btn" data-remove-saved="${id}" aria-label="Remove ${mod.title}">Remove</button>
        </div>
      `;
      savedModulesList.appendChild(item);
    });

    // Attach inspect events to saved list
    savedModulesList.querySelectorAll('[data-inspect-saved]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-inspect-saved');
        closeDrawer();
        openModal(id);
      });
    });

    // Attach remove events
    savedModulesList.querySelectorAll('[data-remove-saved]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-remove-saved');
        const mod = MODULES_DATA[id];
        toggleBookmark(id, mod ? mod.title : 'Module');
      });
    });
  }

  // Card bookmark click delegations
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-bookmark');
    if (btn) {
      e.stopPropagation();
      const id = btn.getAttribute('data-bookmark-id');
      const card = btn.closest('.content-card');
      const title = card?.querySelector('.card-title')?.textContent || 'Module';
      toggleBookmark(id, title);
    }
  });

  // ----------------------------------------------------------------------------
  // 9. Bookmarks Drawer Opening & Closing
  // ----------------------------------------------------------------------------
  const openDrawer = () => {
    bookmarksDrawer?.classList.add('is-open');
    drawerBackdrop?.classList.add('is-open');
    bookmarksDrawer?.setAttribute('aria-hidden', 'false');
    drawerBackdrop?.setAttribute('aria-hidden', 'false');
    drawerCloseBtn?.focus();
  };

  const closeDrawer = () => {
    bookmarksDrawer?.classList.remove('is-open');
    drawerBackdrop?.classList.remove('is-open');
    bookmarksDrawer?.setAttribute('aria-hidden', 'true');
    drawerBackdrop?.setAttribute('aria-hidden', 'true');
  };

  bookmarksDrawerToggle?.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookmarksDrawer?.classList.contains('is-open')) {
      closeDrawer();
      bookmarksDrawerToggle?.focus();
    }
  });

  // ----------------------------------------------------------------------------
  // 10. Blueprint Modal Dialog
  // ----------------------------------------------------------------------------
  function openModal(moduleId) {
    const mod = MODULES_DATA[moduleId];
    if (!mod || !modalDialog) return;

    activeModalModuleId = moduleId;
    modalTitle.textContent = mod.title;
    modalCategory.textContent = mod.category;
    modalMeta.textContent = `${mod.readTime} • ${mod.req}`;
    modalText.textContent = mod.description;
    modalCode.textContent = mod.codeSnippet;

    const saved = getSavedBookmarks();
    modalBookmarkText.textContent = saved.includes(moduleId) ? 'Remove from Saved' : 'Save Module';

    if (typeof modalDialog.showModal === 'function') {
      modalDialog.showModal();
    } else {
      modalDialog.setAttribute('open', 'true');
    }
    modalCloseBtn?.focus();
  }

  function closeModal() {
    if (!modalDialog) return;
    if (typeof modalDialog.close === 'function') {
      modalDialog.close();
    } else {
      modalDialog.removeAttribute('open');
    }
    activeModalModuleId = null;
  }

  // Open modal button triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-modal]');
    if (trigger) {
      const id = trigger.getAttribute('data-open-modal');
      openModal(id);
    }
  });

  modalCloseBtn?.addEventListener('click', closeModal);
  modalSecondaryClose?.addEventListener('click', closeModal);

  modalBookmarkAction?.addEventListener('click', () => {
    if (activeModalModuleId) {
      const mod = MODULES_DATA[activeModalModuleId];
      toggleBookmark(activeModalModuleId, mod ? mod.title : 'Module');
    }
  });

  // Close modal on click outside (backdrop)
  modalDialog?.addEventListener('click', (e) => {
    const rect = modalDialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeModal();
    }
  });

  // ----------------------------------------------------------------------------
  // 11. Color Token Copy-to-Clipboard & Toast Feedback
  // ----------------------------------------------------------------------------
  copyHexBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const hex = btn.getAttribute('data-copy');
      if (!hex) return;
      try {
        await navigator.clipboard.writeText(hex);
        showToast(`Copied token ${hex} to clipboard!`);
      } catch {
        // Fallback for clipboard
        const input = document.createElement('input');
        input.value = hex;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showToast(`Copied token ${hex} to clipboard!`);
      }
    });
  });

  function showToast(message) {
    if (!toastRegion) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${message}</span>
    `;
    toastRegion.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  // ----------------------------------------------------------------------------
  // 12. Viewport Live Diagnostic Tool (Slide 11 Breakpoint Verification)
  // ----------------------------------------------------------------------------
  function updateViewportDiagnostic() {
    const width = window.innerWidth;
    if (vpWidthEl) vpWidthEl.textContent = `${width}px`;

    if (vpTargetEl) {
      if (width < 768) {
        vpTargetEl.textContent = 'Mobile (< 768px)';
        vpTargetEl.style.color = '#A0D4E0';
      } else if (width < 1024) {
        vpTargetEl.textContent = 'Tablet (768px - 1023px)';
        vpTargetEl.style.color = '#D6B49D';
      } else {
        vpTargetEl.textContent = 'Desktop (≥ 1024px)';
        vpTargetEl.style.color = '#8BE0A4';
      }
    }
  }

  window.addEventListener('resize', updateViewportDiagnostic, { passive: true });
  updateViewportDiagnostic();

  // ----------------------------------------------------------------------------
  // 13. Interactive clamp() Fluid Typography Simulator
  // ----------------------------------------------------------------------------
  if (fluidSlider && sliderVal && clampPreviewHeading && calculatedFontSize) {
    const updateFluidSimulation = () => {
      const width = parseInt(fluidSlider.value, 10);
      sliderVal.textContent = `${width}px`;

      // Mathematical clamp formula simulated: clamp(1.25rem, 4vw + 0.5rem, 3rem)
      // At base 16px:
      // min = 1.25 * 16 = 20px
      // max = 3 * 16 = 48px
      // preferred = (width * 0.04) + 8px
      const preferred = (width * 0.04) + 8;
      const computedPx = Math.max(20, Math.min(48, preferred));
      const computedRem = (computedPx / 16).toFixed(3);

      clampPreviewHeading.style.fontSize = `${computedPx}px`;
      calculatedFontSize.textContent = `${computedRem}rem (${Math.round(computedPx)}px)`;
      fluidSlider.setAttribute('aria-valuenow', String(width));
    };

    fluidSlider.addEventListener('input', updateFluidSimulation);
    updateFluidSimulation();
  }

  // ----------------------------------------------------------------------------
  // 14. High-Contrast Warmth Theme Switcher
  // ----------------------------------------------------------------------------
  const isHighContrast = localStorage.getItem(STORAGE_KEYS.THEME) === 'true';
  if (isHighContrast) {
    document.body.classList.add('theme-high-contrast');
  }

  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('theme-high-contrast');
    const enabled = document.body.classList.contains('theme-high-contrast');
    localStorage.setItem(STORAGE_KEYS.THEME, String(enabled));
    showToast(enabled ? 'High-contrast accessible theme activated.' : 'Default grounded 2025 theme restored.');
  });

  // ----------------------------------------------------------------------------
  // 15. Initial State Hydration
  // ----------------------------------------------------------------------------
  updateBookmarksUI();
  console.info('🚀 DecodeLabs Project 1: The Responsive Architecture Initialized.');
});
