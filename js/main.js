/**
 * AgriBridge — Main Client Script
 * Lightweight, zero-dependency ES module for interactive elements & mobile navigation
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initContactForm();
  initHeaderScroll();
});

/**
 * Mobile Navigation Toggle Handling
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!toggleBtn || !mobileMenu) return;

  function openMobileMenu() {
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    document.body.classList.add('menu-open');
    
    // Switch icon to 'X' (close)
    const svg = toggleBtn.querySelector('svg');
    if (svg) {
      svg.innerHTML = `
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      `;
    }
  }

  function closeMobileMenu() {
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');

    // Switch icon back to hamburger
    const svg = toggleBtn.querySelector('svg');
    if (svg) {
      svg.innerHTML = `
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      `;
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  // Close when clicking any link inside the mobile drawer
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      if (mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
      toggleBtn.focus();
    }
  });

  // Reset menu if viewport is resized back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  }, { passive: true });
}

/**
 * Header subtle elevation on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.boxShadow = '0 4px 20px rgba(15, 56, 44, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  }, { passive: true });
}

/**
 * Interactive Contact / RFQ Form Handling
 */
function initContactForm() {
  const form = document.getElementById('tradeInquiryForm');
  const statusDiv = document.getElementById('formStatus');

  if (!form || !statusDiv) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validity check
    if (!form.checkValidity()) {
      showStatus(statusDiv, 'Please fill in all required fields accurately.', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      Processing RFQ...
    `;

    // Simulate fast API response
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      const formData = new FormData(form);
      const commodity = formData.get('commodity') || 'Commodities';

      showStatus(
        statusDiv,
        `Thank you! Your trade inquiry for ${commodity} has been registered. Our commodity desk will review the specifications and reply to your business email within 24 hours.`,
        'success'
      );

      form.reset();
      statusDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 900);
  });
}

function showStatus(elem, message, type) {
  elem.className = `form-status ${type}`;
  elem.textContent = message;
  elem.style.display = 'block';
}
