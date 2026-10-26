const proposal = document.querySelector('#proposal');
document.querySelectorAll('[data-proposal]').forEach(button => button.addEventListener('click', () => proposal.showModal()));
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
}));
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Close' : 'Menu';
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.textContent = 'Menu';
}));
const lightbox = document.querySelector('#lightbox');
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => {
  const image = lightbox.querySelector('img');
  image.src = button.querySelector('img').src;
  image.alt = button.querySelector('img').alt;
  lightbox.showModal();
}));
