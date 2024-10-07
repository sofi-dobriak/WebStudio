const modal = document.querySelector('.modal-overlay');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const modalToggle = () => modal.classList.toggle('is-open');

modalBtnOpen.addEventListener('click', modalToggle);
modalBtnClose.addEventListener('click', modalToggle);
