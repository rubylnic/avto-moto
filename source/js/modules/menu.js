'use strict';
(function () {
  var button = document.querySelector('.header__button');
  var nav = document.querySelector('.main-nav');

  var js = function () {
    nav.classList.add('main-nav--closed');
    button.classList.remove('header__button--opened');
  };
  js();

  var openClose = function () {
    nav.classList.toggle('main-nav--closed');
    button.classList.toggle('header__button--opened');
  };

  button.addEventListener('click', openClose);
}
)();
