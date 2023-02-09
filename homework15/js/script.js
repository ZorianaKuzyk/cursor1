$(".slick-carousel").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScrol: 1,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
  window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none'
  };