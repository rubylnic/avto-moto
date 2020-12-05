'use strict';
(function () {
  let btns = document.querySelectorAll('.tabs__item');
  let tabs = document.querySelectorAll('.tabs__tab');


  btns.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      for (let btn of btns) {
        btn.classList.remove('tabs__item--active')
      }
      btn.classList.add('tabs__item--active');

      for (let tab of tabs) {
        tab.classList.add('tabs__tab--hidden')
      }
      tabs[i].classList.remove('tabs__tab--hidden');
    })
  })
}
)();
