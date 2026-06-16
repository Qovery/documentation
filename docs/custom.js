(function () {
  var debounceTimer;

  function applyVariant() {
    if (!window.posthog) return;

    var variant = window.posthog.getFeatureFlag('docs-cta-subtitle');
    document.querySelectorAll('.cta-banner-subtitle').forEach(function (el) {
      el.style.display = variant === 'no-subtitle' ? 'none' : '';
    });

    document.querySelectorAll('.cta-banner-button').forEach(function (btn) {
      if (btn._ctaTracked) return;
      btn._ctaTracked = true;
      btn.addEventListener('click', function () {
        if (!window.posthog) return;
        window.posthog.capture('docs_cta_click', {
          variant: window.posthog.getFeatureFlag('docs-cta-subtitle') || 'unknown',
          page: window.location.pathname
        });
      });
    });
  }

  function waitForPostHog(callback) {
    if (window.posthog && window.posthog.getFeatureFlag) {
      window.posthog.onFeatureFlags(callback);
    } else {
      setTimeout(function () { waitForPostHog(callback); }, 100);
    }
  }

  waitForPostHog(applyVariant);

  // Re-apply on SPA navigation (Mintlify uses Next.js router)
  var lastUrl = location.href;
  new MutationObserver(function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        waitForPostHog(applyVariant);
      } else {
        applyVariant();
      }
    }, 300);
  }).observe(document.body, { childList: true, subtree: true });
})();
