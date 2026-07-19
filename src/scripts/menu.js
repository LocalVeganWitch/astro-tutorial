const menu = document.querySelector('.menu');
const nav = document.querySelector('#main-menu');

menu?.addEventListener('click', () => {

  const isExpanded =
    menu.getAttribute('aria-expanded') === 'true';

  menu.setAttribute(
    'aria-expanded',
    `${!isExpanded}`
  );

  nav?.classList.toggle('open');

});