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
  petal.style.animationDuration = `${3 + Math.random() * 2}s`; // Random duration
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 5000); // Remove after animation
}

function handleScroll() {
  const sections = document.querySelectorAll('.section');
  const scrollTop = window.scrollY + window.innerHeight / 2; // Middle of the viewport
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
      section.classList.add('visible');
      createPetals();
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
