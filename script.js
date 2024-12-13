function showSeason(season) {
  document.getElementById(season).style.display = 'flex';
}

function closeSeason() {
  const seasonPages = document.querySelectorAll('.season-page');
  seasonPages.forEach(page => {
    page.style.display = 'none';
  });
}
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const sakuraContainer = document.querySelector('.sakura-container');
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      section.classList.add('active');
      generateSakura(sakuraContainer);
    } else {
      section.classList.remove('active');
    }
  });
});

function generateSakura(container) {
  for (let i = 0; i < 10; i++) {
    const sakura = document.createElement('div');
    sakura.classList.add('sakura');
    sakura.style.left = `${Math.random() * 100}vw`;
    sakura.style.animationDelay = `${Math.random() * 2}s`;
    sakura.style.animationDuration = `${3 + Math.random() * 2}s`;
    container.appendChild(sakura);

    sakura.addEventListener('animationend', () => {
      sakura.remove();
    });
  }
}
