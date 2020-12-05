'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var btnOpen = document.querySelector('.main-nav__link');
  var btnClose = document.querySelector('.modal__button-close');
  var html = document.querySelector('html');
  var modal = document.querySelector('.modal');
  var overlay = modal.querySelector('.modal__overlay');
  var modalContainer = modal.querySelector('.modal__container');
  var submit = document.querySelector('.modal__button');
  var errorMessage = document.querySelector('.modal__error-message');
  var errorMessageComment = document.querySelector('.modal__comment-error-message');

  var form = modal.querySelector('form');
  var name = modal.querySelector('[name=name]');
  var pluses = modal.querySelector('[name=advantages]');
  var minuses = modal.querySelector('[name=disadvantages]');
  var comment = modal.querySelector('[name=comment]');
  var radio = modal.querySelector('[name=choose-radio]');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }

  var closeModal = function () {
    modal.classList.add('modal--closed');
  };

  var openModal = function (evt) {
    evt.preventDefault();
    modal.classList.remove('modal--closed');
    html.style.overflow = 'hidden';

    if (storage) {
      name.value = localStorage.getItem('name');
      pluses.value = localStorage.getItem('advantages');
      minuses.value = localStorage.getItem('disadvantages');
      comment.value = localStorage.getItem('comment');
      radio.value = localStorage.getItem('choose-radio');
    }

    name.focus();
  };
  var enterPressHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openModal();
    }
  };
  var escPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeModal();
    }
  };

  btnOpen.addEventListener('click', openModal);
  btnClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  modalContainer.addEventListener('click', function (evt) {
    evt.stopPropagation();
  });
  document.addEventListener('keydown', escPressHandler);
  btnOpen.addEventListener('keydown', enterPressHandler);

  var errorHandler = function () {
    if (!name.value) {
      name.setCustomValidity('');
      errorMessage.classList.remove('modal__error-message--hidden');
      name.classList.add('modal__error');
    }
    else {
      errorMessage.classList.add('modal__error-message--hidden');
      name.classList.remove('modal__error');
    }
  }

  var errorCommentHandler = function (evt) {
    if (!comment.value) {
      comment.setCustomValidity('');
      errorMessageComment.classList.remove('modal__comment-error-message--hidden');
      comment.classList.add('modal__error');
    } else {
      errorMessageComment.classList.add('modal__comment-error-message--hidden');
      comment.classList.remove('modal__error');
    }
  }

  submit.addEventListener('click', errorHandler);
  submit.addEventListener('click', errorCommentHandler);

  form.addEventListener('submit', function (evt) {
    if (!name.value || !comment.value) {
      evt.preventDefault();
    }
    else {
      if (isStorageSupport) {
        localStorage.setItem('name', name.value);
        localStorage.setItem('advantages', pluses.value);
        localStorage.setItem('disadvantages', minuses.value);
        localStorage.setItem('comment', comment.value);
        localStorage.setItem('choose-radio', radio.value);
      }
    }
  });
})();

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
