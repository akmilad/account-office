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



    var pageWidth = document.documentElement.clientWidth;

    if (pageWidth > 768) {
        if ($('.MinistriLink').length > 0) {
            $('.MinistriLink').owlCarousel({
                items: 3,
                dots: true,
                loop: true,
                nav: false,
                autoplay: true,
                autoplayHoverPause: true,
                mouseDrag: true,
                touchDrag: false,
                margin: 15,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: 2,
                    },
                    // breakpoint from 480 up
                    480: {
                        items: 2,
                    },
                    // breakpoint from 768 up
                    768: {
                        items: 4,
                    },
                    // breakpoint from 768 up
                    1200: {
                        items: 6,
                    }
                }
            });
        }


    }

    var pageWidth = document.documentElement.clientWidth;

    if (pageWidth < 576) {
        if ($('.MinistriLink').length > 0) {
            $('.MinistriLink').owlCarousel({
                items: 3,
                dots: true,
                loop: true,
                nav: false,
                autoplay: true,
                autoplayHoverPause: true,
                mouseDrag: false,
                touchDrag: true,
                margin: 15,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: 2,
                    },
                    // breakpoint from 480 up
                    480: {
                        items: 2,
                    },
                    // breakpoint from 768 up
                    768: {
                        items: 4,
                    },
                    // breakpoint from 768 up
                    1200: {
                        items: 6,
                    }
                }
            });
        }


    }


});




//Scroll back to top
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

//Scroll back to top





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






const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        })
}



// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});




// SideBar Click to Open Window

// Facebook Open
var newWin;
function Popup() {
    newWin = window.open('https://web.facebook.com/', 'Facebook', 'width=800', 'height=500');
    document.onmousedown = focusPopup;
    document.onkeyup = focusPopup;
    document.onmousemove = focusPopup;
}
function focusPopup() {
    if (!newWin.closed) {
        newWin.focus();
    }
}

// Twitter Open
var newWin;
function Popuptwt() {
    newWin = window.open('https://twitter.com/home', 'Facebook', 'width=800', 'height=500');
    document.onmousedown = focusPopup;
    document.onkeyup = focusPopup;
    document.onmousemove = focusPopup;
}
function focusPopup() {
    if (!newWin.closed) {
        newWin.focus();
    }
}

// Mail Open
var newWin;
function PopupMail() {
    newWin = window.open('https://mail.google.com/mail/u/0/#inbox', 'Facebook', 'width=800', 'height=500');
    document.onmousedown = focusPopup;
    document.onkeyup = focusPopup;
    document.onmousemove = focusPopup;
}
function focusPopup() {
    if (!newWin.closed) {
        newWin.focus();
    }
}

// SideBar Click to Open Window