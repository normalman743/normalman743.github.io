function setLang(lang) {
  lang = lang === 'en' ? 'en' : 'zh';
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  const title = document.body.dataset[lang === 'zh' ? 'titleZh' : 'titleEn'];
  document.title = title + ' · 齐紫瀚 · Zihan Qi';
  ['zh', 'en'].forEach(code => {
    const button = document.getElementById('btn-' + code);
    button.classList.toggle('active', lang === code);
    button.setAttribute('aria-pressed', String(lang === code));
  });
  try { localStorage.setItem('lang', lang); } catch (_) {}
}
let saved = 'zh';
try { saved = localStorage.getItem('lang') || 'zh'; } catch (_) {}
setLang(saved);

// Keep links to sections of the previous single-page site working.
if (document.body.dataset.page === 'about') {
  const destinations = {
    education: 'education.html', research: 'research.html',
    experience: 'experience.html', skills: 'skills.html', hobbies: 'hobbies.html'
  };
  const destination = destinations[location.hash.slice(1)];
  if (destination) location.replace(destination);
}

