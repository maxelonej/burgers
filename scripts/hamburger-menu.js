const openHamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.menu');

if (openHamburgerMenu) {
   openHamburgerMenu.addEventListener('click', () => {
     nav.classList.toggle('active');
   });

   const closeIcon = document.querySelector('.menu__close');
   closeIcon.addEventListener('click', () => {
     nav.classList.remove('active');
   });
}