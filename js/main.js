$(document).ready(function(){
    $('.banner').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 800,
        dots: true,
        arrows: false,
        infinite: true,
        appendDots: $('#indicator'),
    });
    $('.logos').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
});