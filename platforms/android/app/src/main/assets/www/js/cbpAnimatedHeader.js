const button = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__body');
const close = document.querySelector('.menu__header button');
const overlay = document.querySelector('.menu__overlay');

function showMenu() {
  animateCSS('.menu__button', 'slideOutRight', function(){
    $('.menu__button').addClass('is-hidden');
  });
  animateCSS('.menu__body', 'slideInUp');
  $('.menu__body').removeClass('is-hidden');
  animateCSS('.menu__overlay', 'fadeIn');
  $('.menu__overlay').removeClass('is-hidden');
};

function hideMenu() {
  animateCSS('.menu__body', 'slideOutDown', function(){
    $('.menu__body').addClass('is-hidden');
  });
  animateCSS('.menu__button', 'fadeInDown');
  $('.menu__button').removeClass('is-hidden');
  animateCSS('.menu__overlay', 'fadeOut');
  $('.menu__overlay').addClass('is-hidden');
};

button.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);
overlay.addEventListener('click', hideMenu);
