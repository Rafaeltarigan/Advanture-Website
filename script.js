const hamburgerMenu = document.getElementById('hamburger-menu');
const navItems = document.querySelector('.container .nav');

hamburgerMenu.addEventListener('click', () => {
    navItems.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !navItems.contains(e.target)) {
        navItems.classList.remove('active');
    }
});
