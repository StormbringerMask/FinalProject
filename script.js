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
  console.log("You're dumb")
}

function showVisibleSections() {
  const sections = document.querySelectorAll('.section');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top <= windowHeight && rect.bottom >= 0;

    if (isVisible) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('load', showVisibleSections);

function initializePage() {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.add('visible'));
  for (let i = 0; i < 30; i++) {
    setTimeout(createPetals, i * 200);
  }
}
