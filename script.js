function showSeason(season) {
  document.getElementById(season).style.display = 'flex';
}

function closeSeason() {
  const seasonPages = document.querySelectorAll('.season-page');
  seasonPages.forEach(page => {
    page.style.display = 'none';
  });
}
