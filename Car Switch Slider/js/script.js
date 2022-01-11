
// $('.main-slider').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrow:true,
//     // dots:true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear'
//   });

$(document).ready(function(){
  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:'.left-arrow',
    nextArrow:'.right-arrow',
    fade: true,
    // dots: true,
    asNavFor: '.feature-hold',
  });
  $('.feature-hold').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main-slider',
    dots: false,
    arrows:false, 
    centerMode: true,
    focusOnSelect: true
  });
});