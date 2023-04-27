$(document).ready(function(){

    // Range Slider
    if ( $( '[data-slider]' ).length ) {
        $( '[data-slider]' ).slider({});

        $( '#price_slider' ).on( 'slide', function( evt ) {
            $( '#price_slider_value span' ).html( '$' + evt.value[0] + ' - ' + '$' + evt.value[1] );
        });
    }


    // QTY
    if ( $('.quantity').length ) {
        $('.quantity').each(function() {
            var $this = $(this);
            var $qty = $this.find('.qty');
            var $plusBtn = $this.find('#plus-btn');
            var $minusBtn = $this.find('#minus-btn');

            $plusBtn.click(function(evt) {
                evt.preventDefault();
                $qty.val(parseInt($qty.val()) + 1 );
            });
            $minusBtn.click(function(evt) {
                evt.preventDefault();
                $qty.val(parseInt($qty.val()) - 1 );
                if ($qty.val() == 0) {
                    $qty.val(1);
                }
            });
        });
    }

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