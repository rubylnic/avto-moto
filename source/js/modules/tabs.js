'use strict';
(function () {
  var tabBtns = document.querySelectorAll('.tabs__item');
  var tabs = document.querySelectorAll('.tabs__tab');

  var makeTabsActive = function (buttons) {
    buttons.forEach(function (button) {
      button.classList.remove('tabs__item--active');
    });
  };

  var hideTabs = function (tabsList) {
    tabsList.forEach(function (btn) {
      btn.classList.add('tabs__tab--hidden');
    });
  };


  tabBtns.forEach(function (tabButton, i) {
    tabButton.addEventListener('click', function () {
      makeTabsActive(tabBtns);
      tabButton.classList.add('tabs__item--active');

      hideTabs(tabs);
      tabs[i].classList.remove('tabs__tab--hidden');
    });
  });
}
)();
