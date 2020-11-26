jQuery(document).ready(function ($) {
  new WOW().init();
});

$(window).scroll(function () {
  if ($(this).scrollTop() >= 500) {
    $('#return-to-top').fadeIn(300);
  } else {
    $('#return-to-top').fadeOut(300);
  }
});
$('#return-to-top').click(function () {
  $('body,html').animate(
    {
      scrollTop: 0,
    },
    500
  );
});
//Scroll header
const header = $('.header');
const headerHeight = header.height();
const headerOffsetTop = header.offset().top;
let headerFixedHeight;
headerFixedHeight = $('.header__menu').outerHeight();
if (scrollY >= headerOffsetTop + headerHeight) {
  header.addClass('header-fixed');
  header.next().css('margin-top', headerFixedHeight);
} else {
  header.removeClass('header-fixed');
  header.next().css('margin-top', 0);
}
$(window).on('scroll', function () {
  if (scrollY >= headerOffsetTop + headerHeight) {
    header.addClass('header-fixed');
    header.next().css('margin-top', headerFixedHeight);
  } else {
    header.removeClass('header-fixed');
    header.next().css('margin-top', 0);
  }
});

$('.is-slider').each(function () {
  let nextButton = $(this).find('.swiper-button-next')[0];
  let prevButton = $(this).find('.swiper-button-prev')[0];
  let pagination = $(this).find('.swiper-pagination')[0];
  let container = $(this).find('.swiper-container')[0];
  var swiperslider = new Swiper(container, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 1200,
    observer: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    pagination: {
      el: pagination,
      clickable: true,
    },
  });
});

//Menu mobile
$('.main-menu-btn').on('click', function () {
  $(this).addClass('active');
  $('.main-menu').addClass('active');
  $('body').css('overflow', 'hidden');
});

$('.main-menu-overlay').on('click', function () {
  $('.main-menu-btn').removeClass('active');
  $('.main-menu').removeClass('active');
  $('body').css('overflow', '');
});

//Add arrow for submenu
$('.main-menu-nav  .dropdown').each(function () {
  const dropdown = $(this);
  const arrows = $('<i> </i>');
  arrows.addClass('fa fa-angle-down');
  dropdown.find('a').eq(0).append(arrows);
  const subMenu = dropdown.children('.submenu');
  arrows.on('click', function (e) {
    e.preventDefault();
    dropdown.toggleClass('--show');
    $(this).parent().next('ul').stop().slideToggle();
    $(this).toggleClass('--active');
  });
});

//Check submenu
$('.submenu').each(function () {
  var windowWidth = $(window).width();
  var subOffset = $(this).offset().left;
  var subWidth = $(this).width();
  var rightOfSub = subOffset + subWidth;
  if (rightOfSub > windowWidth) {
    $(this).addClass('s-rev');
  }
});
