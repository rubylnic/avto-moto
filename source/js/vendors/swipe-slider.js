'use strict';
(function () {

  var breakpoint = window.matchMedia('(min-width:767px)');

  var mySwiper;

  var breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  var enableSwiper = function () {
    mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: false,
    });
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

})();
