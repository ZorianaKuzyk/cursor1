$(document).ready(function () {
  $(".slider-custom").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    adaptiveHeight: true,
  });
});
