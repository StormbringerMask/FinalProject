function showSeason(season) {
  document.getElementById(season).style.display = 'flex';
}

function closeSeason() {
  const seasonPages = document.querySelectorAll('.season-page');
  seasonPages.forEach(page => {
    page.style.display = 'none';
  });
}
const container = document.querySelector('.container');
const indicator = document.getElementById('timeline-indicator');
const sections = document.querySelectorAll('.section');

container.addEventListener('scroll', () => {
  const scrollPosition = container.scrollTop;
  const totalHeight = container.scrollHeight - container.offsetHeight;
  const scrollPercentage = scrollPosition / totalHeight;
  indicator.style.top = `${scrollPercentage * 100}%`;
});
