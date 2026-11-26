const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = matchMedia('(max-width: 760px)');

function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

menu.hidden = false;
document.documentElement.classList.add('has-menu');

menu.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menu.setAttribute('aria-expanded', String(isOpen));
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});

mobile.addEventListener('change', closeMenu);
