const headers = document.querySelectorAll("header.header");

headers.forEach(header => {
   header.innerHTML = `
      <div class="hamburger-logo-wrapper">
         <img src="assets/header/menu.svg" alt="Гамбургер-меню" class="hamburger-menu">
         <div class="header__logo">
            <img src="assets/header/logo.jpg" alt="Лого" class="logo">
         </div>
      </div>
      <nav class="menu">
         <img class="menu__close" src="assets/header/close.svg" alt="Закрыть">
         <ul class="menu__list">
            <li class="menu__item"><a class="menu__link" href="#">Главная</a></li>
            <li class="menu__item"><a class="menu__link" href="#">Меню</a></li>
            <li class="menu__item"><a class="menu__link" href="#">О нас</a></li>
            <li class="menu__item"><a class="menu__link" href="contacts.html">Контакты</a></li>
         </ul>
      </nav>
      <div class="header__cart">
         <div class="cart">
            <img src="assets/header/shopping-cart.svg" alt="Тележка" class="cart__image">
            <span class="cart__count">5</span>
         </div>
         <p class="balance">$125</p>
      </div>
   `;
});