$(document).ready(function(){
    $(".slider-images").slick({
         autoplay:true,
        infinite: true,
        speed: 700,
        autoplaySpeed: 2000, 
        prevArrow:'.left-arrow' ,
        nextArrow:'.right-arrow',
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
    });
});
$(document).ready(function(){
    $(".shop-off").slick({
        infinite: true,
        speed: 200,
        autoplaySpeed: 2000, 
        prevArrow:'.left-arrow2' ,
        nextArrow:'.right-arrow2',
        slidesToShow: 4,
        slidesToScroll: 1,
    });
});