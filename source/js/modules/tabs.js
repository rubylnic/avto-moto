'use strict';
(function () {
  var tabBtns = document.querySelectorAll('.tabs__item');
  var tabs = document.querySelectorAll('.tabs__tab');


  tabBtns.forEach(function (tabButton, i) {
    tabButton.addEventListener('click', function () {
      // tabBtns.forEach(function (button) {
      //   button.classList.remove('tabs__item--active');
      // });
      // tabButton.classList.add('tabs__item--active');

      // tabs.forEach(function (btn) {
      //   btn.classList.add('tabs__tab--hidden');
      // });
      // tabs[i].classList.remove('tabs__tab--hidden');
    });
  });
}
)();
