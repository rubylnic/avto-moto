'use strict';
(function () {
  var button = document.querySelector('.header__button');
  var nav = document.querySelector('.main-nav');

  button.addEventListener('click', function () {
    nav.classList.toggle('main-nav--closed');
    button.classList.toggle('header__button--opened');
  });
}
)();
