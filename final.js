const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburger-menu');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburgerMenu.classList.toggle('open');
});

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.remove('open');
});

document.addEventListener('click', (e) => {
  if (!hamburgerMenu.classList.contains('open')) return;
  const clickOnHamburger = hamburger.contains(e.target);
  if (!clickOnHamburger) {
    hamburgerMenu.classList.remove('open');
  }
});