$(document).ready(function () {
  $(".slider-custom").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
});
