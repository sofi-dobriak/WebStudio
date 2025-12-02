const mobileMenu = document.querySelector('.mobile-menu');
const mobileBtnOpen = document.querySelector('.mobile-btn-open');
const mobileBtnClosed = document.querySelector('.mobile-btn-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link-item');

const toggleMenu = () => {
  mobileMenu.classList.toggle('is-open');
  document.body.style.overflow = 'hidden';
};

const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
};

mobileBtnOpen.addEventListener('click', toggleMenu);
mobileBtnClosed.addEventListener('click', closeMenu);

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});
