function showSeason(season) {
  document.getElementById(season).style.display = 'flex';
}

function closeSeason() {
  const seasonPages = document.querySelectorAll('.season-page');
  seasonPages.forEach(page => {
    page.style.display = 'none';
  });
}
  
function createPetals() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.animationDuration = `${3 + Math.random() * 2}s`;
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 5000);
}

function showVisibleSections() {
  const sections = document.querySelectorAll('.section');
  const scrollTop = window.scrollY + window.innerHeight / 2;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
      section.classList.add('visible');
    }
  });
}

function initializePage() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('visible'));
  for (let i = 0; i < 30; i++) {
    setTimeout(createPetals, i * 200);
  }
}

window.addEventListener('scroll', () => {
  createPetals();
});

window.addEventListener('load', () => {
  initializePage();
  showVisibleSections();
});
