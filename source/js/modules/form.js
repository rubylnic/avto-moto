'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var btnOpen = document.querySelector('.review__button');
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

  var commentTemplate = document.querySelector('#comment').content.querySelector('article');
  var commentsList = document.querySelector('.review');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }

  var getRate = function () {
    var rate;
    modal.querySelectorAll('[name=rating2]').forEach(function (radio) {
      if (radio.checked) {
        rate = radio.value;
      }
    });
    return rate;
  };

  var closeModal = function () {
    modal.classList.add('modal--closed');
    html.style.overflow = 'initial';
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

      var getCheckedRadio = function () {
        var checked;
        modal.querySelectorAll('[name=rating2]').forEach(function (radio) {
          if (radio.value === localStorage.getItem('rate')) {
            checked = radio;
          }
        });
        return checked;
      };
    }
    getCheckedRadio().checked = true;

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
    } else {
      errorMessage.classList.add('modal__error-message--hidden');
      name.classList.remove('modal__error');
    }
  };

  var errorCommentHandler = function () {
    if (!comment.value) {
      comment.setCustomValidity('');
      errorMessageComment.classList.remove('modal__comment-error-message--hidden');
      comment.classList.add('modal__error');
    } else {
      errorMessageComment.classList.add('modal__comment-error-message--hidden');
      comment.classList.remove('modal__error');
    }
  };

  submit.addEventListener('click', errorHandler);
  submit.addEventListener('click', errorCommentHandler);

  var makeStars = function (n, list) {
    var makeStar = function () {
      var newDiv = document.createElement('div');
      newDiv.className = 'rating__label';
      var newI = document.createElement('i');
      newI.className = 'rating__icon rating__icon--star fa fa-star';
      newDiv.appendChild(newI);
      list.appendChild(newDiv);
    };

    var makeHalfStar = function () {
      var newDiv = document.createElement('div');
      newDiv.className = 'rating__label rating__label--full-half';
      var newI = document.createElement('i');
      newI.className = 'rating__icon rating__icon--star fa fa-star-half';
      newDiv.appendChild(newI);
      var newDiv1 = document.createElement('div');
      newDiv1.className = 'rating__label rating__label--half';
      var newI1 = document.createElement('i');
      newI1.className = 'rating__icon rating__icon--star fa fa-star';
      newDiv1.appendChild(newI);
      list.appendChild(newDiv);
      newDiv.appendChild(newI1);
      list.appendChild(newDiv1);
    };

    n = Number(n);
    if (Number.isInteger(n)) {
      for (var i = 0; i < n; i++) {
        makeStar();
      }
    } else {
      n = Math.floor(n);
      for (var y = 0; y < n; y++) {
        makeStar();
      }
      makeHalfStar();
    }
  };

  var createComment = function () {
    var commentData = commentTemplate.cloneNode(true);

    commentData.querySelector('.comment__name').textContent = name.value;
    commentData.querySelector('.comment__plus').textContent = pluses.value;
    commentData.querySelector('.comment__minus').textContent = minuses.value;
    commentData.querySelector('.comment__comment').textContent = comment.value;
    makeStars(getRate(), commentData.querySelector('.rating__stars'));

    if (getRate() < 2.5) {
      commentData.querySelector('.rating span').textContent = 'Не советует';
    }

    return commentData;
  };

  var renderComments = function () {
    var commentsFragment = document.createDocumentFragment();

    commentsFragment.appendChild(createComment());

    commentsList.insertBefore(commentsFragment, commentsList.firstChild);

    closeModal();
  };

  form.addEventListener('submit', function (evt) {
    if (!name.value || !comment.value) {
      evt.preventDefault();
    } else {
      evt.preventDefault();
      renderComments();
      if (isStorageSupport) {

        localStorage.setItem('name', name.value);
        localStorage.setItem('advantages', pluses.value);
        localStorage.setItem('disadvantages', minuses.value);
        localStorage.setItem('comment', comment.value);
        localStorage.setItem('rate', getRate());
      }
    }
  });
})();
