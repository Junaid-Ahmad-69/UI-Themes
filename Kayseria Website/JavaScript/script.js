    $(document).ready(function(){
        $(".slider-holder").slick({
             autoplay:true,
            infinite: true,
            speed: 700,
            autoplaySpeed: 2000, 
            prevArrow:'.left-arrow' ,
            nextArrow:'.right-arrow',
            slidesToShow: 1,
            slidesToScroll: 1
            
        });
});
    // second slider
    $(document).ready(function(){
        $('.show-slide-main').slick({
        dots: false,
        infinite: false,
        speed: 900,
        arrows:true,
        prevArrow:'.left-arrow1',
        nextArrow:'.right-arrow1',
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
        }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
    });
    });
//third slider
    $(document).ready(function(){
        $('.show-slide-2').slick({
        dots: false,
        infinite: false,
        speed: 900,
        arrows:true,
        prevArrow:'.left-arrow2',
        nextArrow:'.right-arrow2',
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
        }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
    });
    });
// fourth slider   
    $(document).ready(function(){
        $('.slid-image-holder').slick({
            infinite: true,
            slidesToShow: 4,
            arrows:true,
            prevArrow:'.left-arrow3',
            nextArrow:'.right-arrow3',
            slidesToScroll: 2
          });
    });
