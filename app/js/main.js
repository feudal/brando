$(document).ready(function() {
  //----------------------------------------slider--------------------------------------//
  $('.brand-slider').slick({
    autoplay: true,
    dots: false,
    infinite: false,

    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.style__slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  $('.slider').slick({
    autoplay: true,
    dots: true,
    arrows: false
  });
  //----------------------------------------card-slider--------------------------------------//
  $('.card').on('mouseenter', function() {
    if ($(window).width() > 1024) {
      card__slider = $(this).find('.card__slider');
      $(card__slider).slick({
        dots: true,
        arrows: true
      });

      ul = $(this).find('.card__info-size');
      $(ul).addClass('active');
      ul_height = $(ul).height();

      $(card__slider).height($(card__slider).height() - ul_height);
    }
  })

  $('.card').on('mouseleave', function() {
    if ($(window).width() > 1024) {
      card__slider = $(this).find('.card__slider');
      $(card__slider).slick("unslick");

      ul_height = $(this).find('.card__info-size').height();
      $(card__slider).height($(card__slider).height() + ul_height);

      ul = $(this).find('.card__info-size');
      $(ul).removeClass('active');
    }
  })

  //----------------------------------------card-slider--------------------------------------//
  //----------------------------------------dauble-slider--------------------------------------//
  var slickPrimarySecondary = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    infinite: true
  };
  var slickNavigator = {
    vertical: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.nav',
    speed: 500,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    centerMode: false,
    infinite: true
  };

  $('.primary').slick(slickPrimarySecondary);

  $('.navigator').slick(slickNavigator);
  //----------------------------------------dauble-slider--------------------------------------//
  //----------------------------------------slider--------------------------------------//
  //----------------------------------------size--------------------------------------//
  $('.product-select__item').on('click', function() {
    $('.product-select__item').removeClass('active');
    $(this).toggleClass('active');
  })
  //----------------------------------------size--------------------------------------//
  //----------------------------------------color--------------------------------------//
  colors = $('.product-select__color-item span');
  for (var i = colors.length - 1; i >= 0; i--) {
    color_el = $(colors[i]).text();
    $(colors[i]).css('background', color_el);
  }
  $('.product-select__color-item').on('click', function() {
    $('.product-select__color-item').removeClass('active');
    $(this).toggleClass('active');
  })

  $('.product-select__color-item').on('mouseenter', function() {
    $(this).find('.product-select__color-info').addClass('product-select__color-info--active');
  })
  $('.product-select__color-item').on('mouseleave', function() {
    $(this).find('.product-select__color-info').removeClass('product-select__color-info--active');
  })

  //----------------------------------------color--------------------------------------//
  //----------------------------------------heart--------------------------------------//
  $('.product-select__favorite').on('click', function() {
    $(this).toggleClass('active');
  })
  //----------------------------------------heart--------------------------------------//
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
  //----------------------------------------gender--------------------------------------//
  $('.bold-menu__gender span').on('click', function() {
    $('.bold-menu__gender').children().removeClass('active');
    $(this).addClass('active');
  })
  //----------------------------------------gender--------------------------------------//
  //----------------------------------------green-button--------------------------------------//
  $('.banner__button').on('mouseenter', function() {
    setTimeout(() => { $('.banner__button').addClass('active'); }, 200);
  })
  $('.banner__button').on('mouseleave', function() {
    $('.banner__button').removeClass('active');
  })
  //----------------------------------------green-button--------------------------------------//
  //----------------------------------------menu-burger--------------------------------------//
  $('.menu-burger').on('click', function() {
    $('.hidden-menu').show('400').css('display', 'flex');
  })

  $('.left-menu__close').on('click', function() {
    $('.hidden-menu').hide('400');

    //for catalog menu, close all lists
    $('#close-catalog').click();
    $('.menu-clother').removeClass('active');
    $('.menu-clother__title').removeClass('active');
    $('.menu-clother__items').removeClass('active').hide();
  })
  //----------------------------------------menu-burger--------------------------------------//
  //----------------------------------------catalog-menu--------------------------------------//
  $('.catalog-menu-trigger').on('click', function() {
    event.preventDefault();
    if ($(window).width() < 750) {
      $('.menu-clother-list--hidden').show().addClass('active');
    }
  })

  $('.catalog-menu-close').on('click', function() {
    if ($(window).width() < 750) {
      $('.menu-clother-list--hidden').removeClass('active');
    }
  })

  $('.menu-clother__title').on('click', function() {
    if ($(window).width() < 750) {
      $(this).toggleClass('active');
      $(this).next().toggle();
      $(this).parent().hide().toggleClass('active').css('transform', 'translateX(120%)');
      setTimeout(() => { $(this).parent().show().css('transform', 'translateX(0)'); }, 200);
    }
  })

  //----------------------------------------catalog-menu--------------------------------------//
  //----------------------------------------filters--------------------------------------//
  $('.filter__title').on('click', function() {
    if ($(this).next().is(":visible")) {
      $(this).next().slideUp();
    } else {
      $('.filter__list').slideUp();
      $(this).next().slideDown();
    }
  })

  $(".checkbox").change(function() {
    if (this.checked) { //if is checked
      val = $(this).parent().parent().parent().prev().children().text();

      if (val != 0 && val != "") {
        val = Number(val) + 1;
      } else {
        val = 1;
      }
      $(this).parent().parent().parent().prev().children().text(val);
      tag = $(this).parent().parent().text();
      $('.filter__tags').append("<div class=\"filter__tag\">" + tag + "</div>");
      hideTag();

    } else { //if is not checked
      val = $(this).parent().parent().parent().prev().children().text();
      if (val != 0 && val != "") {
        val = Number(val) - 1;
      }
      if (val <= 0) { val = '' };
      $(this).parent().parent().parent().prev().children().text(val);

      //when uncheck delete tag
      span_text = $(this).next().next().text();
      d_tags = $('.filter__tags').children();

      for (var i = 0; i < d_tags.length; i++) {
        if ($.trim(($(d_tags[i]).text())) == span_text) {
          $(d_tags[i]).hide();
        }
      }
    }
  });

  function hideTag() {
    $('.filter__tag').on('click', function() {
      tag = $(this).text();
      span = 'span:contains(' + $.trim(tag) + ')';
      $(span).prev().prev().prop('checked', false); //uncheck checkbox
      $(this).hide(); //hide element


      val = $(span).parent().parent().parent().prev().children().text();
      if (val != 0 && val != "") {
        val = Number(val) - 1;
      }
      if (val <= 0) { val = '' };
      $(span).parent().parent().parent().prev().children().text(val);
    })
  }
  hideTag();


  //----------------------------------------filters--------------------------------------//

  //----------------------------------------sort--------------------------------------//
  $('.sort__item').on('click', function() {
    list_sort = $(this).parent().children();
    var active_elements = 0;

    for (var i = list_sort.length - 1; i >= 0; i--) {
      if ($(list_sort[i]).hasClass('active')) {
        active_elements = active_elements + 1;
      }
    }
    if (active_elements == 1) {
      $(this).parent().children().addClass('active');
    } else {
      $(this).parent().children().removeClass('active');
      $(this).addClass('active');
    }
  });
  //----------------------------------------sort--------------------------------------//
  //----------------------------------------toggle heart--------------------------------------//
  $('.card__heart').on('click', function() {
    $(this).toggleClass('active');
  })
  //----------------------------------------toggle heart--------------------------------------//
  //----------------------------------------close-basket--------------------------------------//
  $('.product-item__close').on('click', function() {
    $(this).parent().parent().parent().parent().hide();
  })
  //----------------------------------------close-basket--------------------------------------//

  //----------------------------------------counter--------------------------------------//
  $('.counter__plus').on('click', function() {
    val = parseInt($(this).prev().text());
      $(this).prev().text(val + 1);
      $(this).prev().prev().addClass('counter__minus--active');

  })

  $('.counter__minus').on('click', function() {
    val = parseInt($(this).next().text());
    $(this).next().text(val - 1);
    if(val == 2) {
      $(this).removeClass('counter__minus--active');
    }
  })
  //----------------------------------------counter--------------------------------------//
});