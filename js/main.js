jQuery.fn.exists = function () {
    return $(this).length;
};

jQuery(document).ready(function ($) {
    $('.owl-carousel1').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $('.owl-carousel2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });
    $(".program-info").mCustomScrollbar({
        theme: "dark",
        scrollButtons: {scrollType: "stepped"},
        live: "on"
    });
});