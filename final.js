

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('hamburger-menu');
const overlay = document.getElementById('menu-overlay');
const closeBtn = document.getElementById('menu-close');

function openMenu() {
    menu.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        closeMenu();
    } else {
        openMenu();
    }
});

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Close menu on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});