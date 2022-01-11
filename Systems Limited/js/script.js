$(document).ready(function(){
    $('.main-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        infinite:true,
        speed:1000,
        arrows:false,
        vertical:true,
        asNavFor: '.feature-hold'
      });
      $('.feature-hold').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.main-content',
        dots: true,
        arrows:false,
        infinite:true,
        nextArrow:'.right-arrow',
        prevArrow: ".left-arrow",
        vertical:true,
        focusOnSelect: true
      });
});

$(document).ready(function(){
  $('.happy-slidmain').slick({
    autoplay:true,
    arrows:false,
    dots:false,
    infinite:true,
    slidesToShow:1,
    slidesToScroll:1,
    speed:1000,
  });
});

$(document).ready(function(){
  $('.award-slider').slick({
    autoplay:true,
    arrows:false,
    dots:false,
    infinite:true,
    slidesToShow:4,
    slidesToScroll:4,
    speed:1000,
  });
});