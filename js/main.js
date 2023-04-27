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

    //Logo slider
    $('.logos').slick({
        infinite: true,
        dots: false,
        arrows: false,
        speed: 800,
        rtl: false,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });
});