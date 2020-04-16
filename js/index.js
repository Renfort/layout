$(window).on('load resize orientationchange', function () {
  $('.carousel').each(function () {
    var $carousel = $(this);
    if ($(window).width() > 768) {
      if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick');
      }
    } else {
      if (!$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          dots: true,
          infinite: true,
          speed: 500,
          adaptiveHeight: true,
        });
      }
    }
  });
});
