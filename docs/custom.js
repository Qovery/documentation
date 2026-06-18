(function () {
  var FLAG = 'docs-cta-subtitle-v2';

  function readVariant() {
    var key = Object.keys(localStorage).find(function (k) {
      return k.startsWith('ph_phc_') && k.endsWith('_posthog');
    });
    if (!key) return null;
    try {
      var data = JSON.parse(localStorage.getItem(key)) || {};
      return (data.$enabled_feature_flags || {})[FLAG] || null;
    } catch (e) { return null; }
  }

  function applyVariant() {
    var variant = readVariant();
    if (!variant) return;
    document.querySelectorAll('.cta-banner-subtitle').forEach(function (el) {
      el.style.display = variant === 'no-subtitle' ? 'none' : '';
    });
    document.querySelectorAll('.cta-banner-button').forEach(function (btn) {
      if (btn._ctaTracked) return;
      btn._ctaTracked = true;
      btn.addEventListener('click', function () {
        var key = Object.keys(localStorage).find(function (k) {
          return k.startsWith('ph_phc_') && k.endsWith('_posthog');
        });
        if (!key) return;
        try {
          var data = JSON.parse(localStorage.getItem(key)) || {};
          if (!data.distinct_id) return;
          fetch('https://phprox.qovery.com/capture/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            keepalive: true,
            body: JSON.stringify({
              api_key: key.slice(3, -8),
              event: 'docs_cta_click',
              distinct_id: data.distinct_id,
              properties: { variant: variant, page: location.pathname, $current_url: location.href }
            })
          });
        } catch (e) {}
      });
    });
  }

  applyVariant();

  var debounce;
  new MutationObserver(function () {
    clearTimeout(debounce);
    debounce = setTimeout(applyVariant, 100);
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
