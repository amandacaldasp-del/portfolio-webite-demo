// EN/PT language toggle. The choice is saved so it carries across pages.
(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll('[data-set-lang]');

  function apply(lang) {
    root.lang = lang === 'pt' ? 'pt-BR' : 'en';
    buttons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.setLang === lang));
    });
    try { localStorage.setItem('ac-lang', lang); } catch (e) {}
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () { apply(btn.dataset.setLang); });
  });

  apply(root.lang === 'pt-BR' ? 'pt' : 'en');
})();
