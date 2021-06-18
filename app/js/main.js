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
  //----------------------------------------footer-menu--------------------------------------//
});