(function() {
  'use strict';

  function hideSignOut() {
    // Method 1: Hide based on text content (works even if browser language is Persian)
    const texts = ['Sign out', 'Sign Out', 'Log out', 'Logout', 'خروج', 'خروج از حساب'];
    
    document.querySelectorAll('ytd-compact-link-renderer, ytd-menu-service-item-renderer, tp-yt-paper-item, a, button, yt-formatted-string').forEach(el => {
      const text = (el.textContent || '').trim();
      if (texts.some(t => text === t || text.includes(t))) {
        // Find the appropriate parent element to hide the entire row
        let target = el.closest('ytd-compact-link-renderer') || 
                     el.closest('ytd-menu-service-item-renderer') || 
                     el.closest('tp-yt-paper-item') || 
                     el;
        if (target) {
          target.style.display = 'none';
        }
      }
    });

    // Method 2: Hide based on logout endpoint (more accurate)
    document.querySelectorAll('ytd-compact-link-renderer, ytd-menu-service-item-renderer').forEach(el => {
      const data = el.__data || el.data || {};
      if (data.serviceEndpoint && data.serviceEndpoint.logoutEndpoint) {
        el.style.display = 'none';
      }
      // Check HTML for logout-related strings
      if (el.innerHTML.includes('/logout') || el.innerHTML.includes('LogoutEndpoint') || el.innerHTML.includes('signout')) {
        el.style.display = 'none';
      }
    });
  }

  // Run on initial load
  hideSignOut();

  // Continuously watch for changes because the account menu loads dynamically
  const observer = new MutationObserver(() => {
    hideSignOut();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Also check every 2 seconds for extra reliability
  setInterval(hideSignOut, 2000);
})();