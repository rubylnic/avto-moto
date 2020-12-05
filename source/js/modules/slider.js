'use strict';
(function () {
  let buttonNext = document.querySelector('.slider__button--next');
  let buttonPrevious = document.querySelector('.slider__button--previous');
  let slides = document.querySelectorAll('.slider__img');
  let slideIndex = 0;

  let miniatures = document.querySelectorAll('.slider__item');

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

    for (let slide of slides) {
      slide.classList.add('slider__img--hidden')
    }


    slides[n].classList.remove('slider__img--hidden');
    slides[n].classList.add('slider__img--animation');
  }

  buttonNext.addEventListener('click', function () {
    nextSlide();
  });

  buttonPrevious.addEventListener('click', function () {
    previousSlide();
  });

  miniatures.forEach(function (miniature, index) {
    miniature.addEventListener('click', function (evt) {
      evt.preventDefault();
      for (let slide of slides) {
        slide.classList.add('slider__img--hidden')
      }
      slides[index].classList.remove('slider__img--hidden');
      slideIndex = index;
    })
  });
}
)();
