'use strict';

// --------burger menu ------

$(document).ready(function() {
  $('.header__burger').click(function() {
    $('.header__burger, .header__nav__menu').toggleClass('open');
    $('body').toggleClass('fixed-page');
  });
  $('.header__nav__link').click(function(){
    $('.header__burger, .header__nav__menu').removeClass('open');
    $('body').removeClass('fixed-page');
  });
});

// ----scroll from top to the end----
$(document).ready(function(){
  $('.header__scroll').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#the-end').offset().top }, 1000);
    e.preventDefault();
  });
});

// ------smooth scroll to sections-------
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// --------- 'more' button in gallery --------

$(document).ready(function(){
  $('.gallery__button').on('click', function(e){
    $('.gallery__more__wrapper').toggle('slow').css('display', 'flex');
    $('.gallery__button').css('margin-bottom', '60px');
  }); 
});

const btn_gallery = document.querySelector('.gallery__button');
btn_gallery.addEventListener('click', function() {
  btn_gallery.innerHTML =
    (btn_gallery.innerHTML === 'Close') ? btn_gallery.innerHTML = 'See more' : btn_gallery.innerHTML = 'Close';
});

// --------popups---------

let btnOpenTrade = document.querySelector('#trade-center-btn');
let closeTrade = document.querySelector('#trade-close');
let btnOpenCommerce = document.querySelector('#commercial-center-btn');
let closeCommerce = document.querySelector('#commerce-close');
let popups = document.querySelectorAll('.popup');

function openPopup(index) {
  popups[index].classList.add('open');
  $('body').addClass('fixed-page');
}

function closePopup(index) {
  popups[index].classList.remove('open');
  $('body').removeClass('fixed-page');
}

btnOpenTrade.addEventListener('click', () => openPopup(0));
closeTrade.addEventListener('click', () => closePopup(0));
btnOpenCommerce.addEventListener('click', () => openPopup(1));
closeCommerce.addEventListener('click', () => closePopup(1));

// ---------slider--------
$(document).ready(function(){
  $('.header__slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
  });
  
});
  $(document).ready(function(){
    $('.news__slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false, 
            centerMode: true
          }
      },
    ]
  })
});