(function () {
  var FLAG = 'docs-cta-subtitle-v2';

  function getPhContext() {
    var key = Object.keys(localStorage).find(function (k) {
      return k.startsWith('ph_phc_') && k.endsWith('_posthog');
    });
    if (!key) return null;
    try {
      var data = JSON.parse(localStorage.getItem(key)) || {};
      if (!data.distinct_id) return null;
      return { apiKey: key.slice(3, -8), distinctId: data.distinct_id };
    } catch (e) { return null; }
  }

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

  function capture(event, properties) {
    var ctx = getPhContext();
    if (!ctx) return;
    fetch('https://phprox.qovery.com/capture/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        api_key: ctx.apiKey,
        event: event,
        distinct_id: ctx.distinctId,
        properties: properties
      })
    }).catch(function () {});
  }

  var exposedPages = {};

  function applyVariant() {
    var variant = readVariant();
    if (!variant) return;

    var banners = document.querySelectorAll('.cta-banner');
    if (!banners.length) return;

    document.querySelectorAll('.cta-banner-subtitle').forEach(function (el) {
      el.style.display = variant === 'no-subtitle' ? 'none' : '';
    });

    // Send exposure event once per page
    var page = location.pathname;
    if (!exposedPages[page]) {
      exposedPages[page] = true;
      capture('$feature_flag_called', {
        $feature_flag: FLAG,
        $feature_flag_response: variant,
        $current_url: location.href
      });
    }

    document.querySelectorAll('.cta-banner-button').forEach(function (btn) {
      if (btn._ctaTracked) return;
      btn._ctaTracked = true;
      btn.addEventListener('click', function () {
        capture('docs_cta_click', {
          variant: variant,
          page: page,
          $current_url: location.href
        });
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
