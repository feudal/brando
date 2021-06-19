$(document).ready(function() {
  //----------------------------------------personal-menu--------------------------------------//
  $('.personal-menu__trigger').on('mouseover', function() {
    if ($(window).width() > 768) {
      $('.personal-menu__trigger').addClass('active');
      $('.personal-menu').addClass('active');
    }
  })
  $('.personal-menu__trigger').on('mouseout', function() {
    if ($(window).width() > 768) {
      $('.personal-menu__trigger').removeClass('active');
      $('.personal-menu').removeClass('active');
    }
  })
  $('.personal-menu__trigger').on('click', function() {
    if ($(window).width() > 768) {
      $('.personal-menu').toggleClass('active');
      $('.personal-menu__trigger').toggleClass('active');
    }
  })

  //----------------------------------------personal-menu--------------------------------------//

  //----------------------------------------footer-menu--------------------------------------//
  $('.footer-menu__title').on('click', function() {
    $(this).find('.plus').toggle();
    $(this).find('.minus').toggle();
    $(this).next().slideToggle(400);
  })
  $(window).on('resize', function() {
    if ($(window).width() > 1024) {
      $('.footer-menu__list').show();
    }
  });

  //----------------------------------------footer-menu--------------------------------------//
  //----------------------------------------menu-burger--------------------------------------//
  $('.menu-burger').on('click', function() {
    $('.hidden-menu').show('400').css('display','flex');
  })

  $('.left-menu__close').on('click', function() {
    $('.hidden-menu').hide('400');
  })
  //----------------------------------------menu-burger--------------------------------------//
  //----------------------------------------gender--------------------------------------//
  $('.bold-menu__gender span').on('click', function() {
    $('.bold-menu__gender').children().removeClass('active');
    $(this).addClass('active');
  })
  //----------------------------------------gender--------------------------------------//
  //----------------------------------------slider--------------------------------------//
  $('.brand-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1
  });
//----------------------------------------slider--------------------------------------//
//----------------------------------------green-button--------------------------------------//
  $('.banner__button').on('mouseenter', function() {
    setTimeout(() => { $('.banner__button').addClass('active'); }, 200);
  })
  $('.banner__button').on('mouseleave', function() {
    $('.banner__button').removeClass('active');
  })
//----------------------------------------green-button--------------------------------------//

});