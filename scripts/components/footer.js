const footers = document.querySelectorAll("footer.footer");

footers.forEach(footer => {
   footer.innerHTML = `
      <div class="footer__wrapper">
         <img src="assets/footer/logo.svg" alt="Лого" class="logo">
         <div class="footer__links">
            <h3 class="title">Основные ссылки</h3>
            <ul class="items">
               <li class="item"><a class="link" href="#">Меню</a></li>
               <li class="item"><a class="link" href="#">Заказ и Доставка</a></li>
               <li class="item"><a class="link" href="#">Методы оплаты</a></li>
               <li class="item"><a class="link" href="#">Контакты</a></li>
            </ul>
         </div>
         <div class="footer__information">
            <h3 class="title">Основная информация</h3>
            <ul class="items">
               <li class="item">
                  <p>Время</p>
                  <p class="bold">ПН - ВС</p>
                  <p class="bold">11:00 - 22:00 без перерывов</p>
               </li>
               <li class="item">
                  <p>Адрес</p>
                  <p class="bold">Москва, ул. Тверская, 5</p>
               </li>
            </ul>
         </div>
         <div class="footer_phones">
            <a href="tel:+79007871313">+7 900 787 13-13</a>
            <a href="tel:+79007001414">+ 7 900 700 14-14</a>
         </div>
      </div>
   `;
});