'use strict';
(function () {
  var buttonNext = document.querySelector('.slider__button--next');
  var buttonPrevious = document.querySelector('.slider__button--previous');
  var slides = document.querySelectorAll('.slider__img');
  var slideIndex = 0;

  var miniatures = document.querySelectorAll('.slider__item');

  function nextSlide() {
    showSlides(slideIndex += 1);
    buttonPrevious.classList.remove('slider__button--inactive');
  }

  function previousSlide() {
    showSlides(slideIndex -= 1);
  }

  function showSlides(n) {
    n = slideIndex;
    if (n > slides.length - 1) {
      slideIndex = slides.length - 1;
      n = slides.length - 1;
      buttonNext.classList.add('slider__button--inactive');
    }
    if (n < 0) {
      slideIndex = 0;
      n = 0;
      buttonPrevious.classList.add('slider__button--inactive');
    }

    slides.forEach(function (slide) {
      slide.classList.add('slider__img--hidden');
    });


    slides[n].classList.remove('slider__img--hidden');
    slides[n].classList.add('slider__img--animation');
  }

  buttonNext.addEventListener('click', function () {
    nextSlide();
  });

  buttonPrevious.addEventListener('click', function () {
    previousSlide();
  });

  var hideAllSlides = function (slidesList) {
    slidesList.forEach(function (slide) {
      slide.classList.add('slider__img--hidden');
    });
  };

  miniatures.forEach(function (miniature, index) {
    miniature.addEventListener('click', function (evt) {
      evt.preventDefault();
      hideAllSlides(slides);
      slides[index].classList.remove('slider__img--hidden');
      slides[index].classList.add('slider__img--animation');
      slideIndex = index;
    });
  });
}
)();
