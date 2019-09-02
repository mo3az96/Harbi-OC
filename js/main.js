$(document).ready(function () {
    //side-bar
    $('.menu-btn').click(function () {
        $('.side-bar-overlay').show();
        $('.side-bar').addClass('inscreen');
        $('.side-bar').removeClass('outscreen');
        $('.outer').addClass('body-out');
        $('.outer').removeClass('body-in');
        $('body').css("overflow", "hidden");
        $('html').css("overflow", "hidden");
        $('html, body').animate({
            scrollTop: 0
        }, 1);
    });
    $('.side-bar-overlay').click(function () {
        $('.side-bar-overlay').fadeOut(500);
        $('.side-bar').addClass('outscreen');
        $('.side-bar').removeClass('inscreen');
        $('.outer').addClass('body-in');
        $('.outer').removeClass('body-out');
        $('body').css("overflow", "visible");
        $('html').css("overflow", "visible");
    });
    $(".side-bar").click(function (e) {
        e.stopPropagation();
    });
    ////////////////////////////////////////////////////////////
    // search
    // Mobile Search 
    $('.search-btn').click(function () {
        $('.search-pop').slideDown(500);
        $('body').css("overflow", "hidden");
    });
    $('.search-pop').click(function () {
        $('.search-pop').slideUp(500);
        $('body').css("overflow", "visible");
    });
    $(".search").click(function (e) {
        e.stopPropagation();
    });
    ////////////////////////////////////////////////////////////

    // Fixed Header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.header').addClass('fixednav');
        } else {
            $('.header').removeClass('fixednav');
        }
    });
    ////////////////////////////////////////////////////////////
    // Accordion
    if ($(window).width() <= 767) {
        $(".foot-nav-links-header").addClass("mo-accordion");
        $(".foot-links").addClass("mo-panel");

        $(".newsletter-head").addClass("mo-accordion");
        $(".news-body").addClass("mo-panel");
    }
    var acc = document.getElementsByClassName("mo-accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("mo-active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    ////////////////////////////////////////////////////////////
    // Main Slider
    $('.main-slider').owlCarousel({
        items: 1,
        autoplay: false,
        margin: 10,
        rtl: true,
        loop: true,
        nav: true,
        dots: true,
        navText: ["<i class='fas fa-chevron-right'></i>", "<i class='fas fa-chevron-left'></i>"],
        responsive: {
            0: {
                nav: false,
            },
            500: {
                nav: false,

            },
            768: {
                nav: true,
            },
        }
    });

    setTimeout(function () {
        if ($(window).width() >= 768) {
            var x = $(".main-slider").height()
            $(".main-banner").height(x);
        }
    }, 1000);

    ////////////////////////////////////////////////////////////
    // Product Slider
    $('.Product-slider').owlCarousel({
        items: 6,
        margin: 11,
        rtl: true,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            500: {
                items: 2,
                nav: false,
                dots: true,

            },
            768: {
                items: 3,
            },
            900: {
                items: 4,
            },
            1100: {
                items: 5,
            },
            1200: {
                items: 6
            }
        }
    });
    ////////////////////////////////////////////////////////////
    // cats slider
    $('.cats-slider').owlCarousel({
        items: 5,
        autoplay: true,
        margin: 13,
        rtl: true,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            500: {
                items: 2,
                nav: false,
                dots: true,

            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1100: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });
    ////////////////////////////////////////////////////////////
    // brands slider
    $('.brands-slider').owlCarousel({
        items: 8,
        autoplay: true,
        margin: 8,
        rtl: true,
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            500: {
                items: 3,
                nav: false,
                dots: true,
            },
            768: {
                items: 5,
            },
            992: {
                items: 6,
            },
            1100: {
                items: 7,
            },
            1200: {
                items: 8
            }
        }
    });
    ////////////////////////////////////////////////////////////



    //side-bar
    $('.cart-ico').click(function () {
        $('.cart-side').show();
        $('.cart-over').show();
        $('body').css("overflow", "hidden");
        $('html').css("overflow", "hidden");
        $('html, body').animate({
            scrollTop: 0
        }, 1);
    });
    $('.cart-over').click(function () {
        $('.cart-side').hide();
        $('.cart-over').hide();
        $('body').css("overflow", "visible");
        $('html').css("overflow", "visible");
    });
    $(".side-bar").click(function (e) {
        e.stopPropagation();
    });
});