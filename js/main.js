/*
    Template Name: Vinazine
    Author: Themewinter
    Author URI: https://themeforest.net/user/tripples
    Description: vinazine
   Version: 1.0

   ================================
   table of content
   =================================
   1.   dropdown menu
   2.   breking news slider
   3.   featured post slider
   4.   Most populer slider
   5.   Gallery popup
   6.   video popup
   7.   video slider

*/

$(function ($) {
    "use strict";




    $(window).on('load', function () {

        /*==========================================================
                    4. Preloader
        =======================================================================*/
        setTimeout(() => {
            $('#preloader').addClass('loaded');
        }, 1000);
    });

    $('.preloader-cancel-btn').on('click', function (event) {
        event.preventDefault();
        if (!$('#preloader').hasClass('loaded')) {
            $('#preloader').addClass('loaded');
        }
    });




    /**-------------------------------------------------
     *Fixed HEader
     *----------------------------------------------------**/
    $(window).on('scroll', function () {

        /**Fixed header**/
        if ($(window).scrollTop() > 250) {
            $('.ts-menu-sticky').addClass('sticky fade_down_effect');
        } else {
            $('.ts-menu-sticky').removeClass('sticky fade_down_effect');
        }
    });

    /* ----------------------------------------------------------- */
    /*  index search
    /* ----------------------------------------------------------- */

    if ($(".header-search").length > 0) {
        var todg = true;
        $(".header-search >a").on("click", function (e) {
            e.preventDefault();
            if (todg) {
                $(".header-search-form").fadeIn("slow");
                todg = false;
            } else {
                $(".header-search-form").fadeOut("slow");
                todg = true;
            }
        });

        $(document).on('mouseup', function (e) {
            var container = $(".header-search");

            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $(".header-search-form").fadeOut("slow");
                todg = true;
            }

        });
    }


    /*========================
         navigation
    ==========================*/
    if ($('.ts-main-menu').length > 0) {
        $(".ts-main-menu").navigation({
            effect: "fade",
            mobileBreakpoint: 992,
        });
    }

    /*========================
        breaking news
   ==========================*/
    if ($('#breaking_slider').length > 0) {
        $('#breaking_slider').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            autoplayTimeout: 4000,
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag: false
        })
    }

    if ($('#featured-slider-visit').length > 0) {
        $('#featured-slider-visit').owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            nav: true,
            // autoplayTimeout: 5000,
            slideSpeed: 10000,
            // autoplay: true,
            // animateOut: 'slideOutRight',
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag: false,
            responsiveClass: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
    }

    if ($('#featured-slider-photo').length > 0) {
        $('#featured-slider-photo').owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            nav: true,
            autoplayTimeout: 4000,
            slideSpeed: 10000,
            autoplay: true,
            animateOut: 'fadeOut',
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag: false,
            responsiveClass: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
    }
    /*========================

   ==========================*/
    if ($('.four-slide-section').length > 0) {
        $('.four-slide-section').owlCarousel({
            items: 3,
            dots: false,
            loop: true,
            nav: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag: false,
            margin: 30,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                },
                // breakpoint from 768 up
                1200: {
                    items: 4,
                }
            }
        });
    }



    /*  breking news slider
    /* ----------------------------------------------------------- */
    if ($('#breaking_slider1').length > 0) {
        $('#breaking_slider1').slick({
            speed: 10000,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            draggable: true,
            buttons: false,
            pauseOnHover: true
        });
    }



    if ($("#video-tab-scrollbar").length > 0) {
        $("#video-tab-scrollbar").mCustomScrollbar({
            mouseWheel: true,
            scrollButtons: { enable: true }
        });
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-to-top').on('click', function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('hide');




});





(function ($) {
    "use strict";

    //Switch dark/light

    $(".switch").on('click', function () {
        if ($("body").hasClass("light")) {
            $("body").removeClass("light");
            $(".switch").removeClass("switched");
        }
        else {
            $("body").addClass("light");
            $(".switch").addClass("switched");
        }
    });

    $(document).ready(function () {
        "use strict";

        //Scroll back to top

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })


    });

})(jQuery);







function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}