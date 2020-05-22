'use strict';

$(document).ready(function () {

    /*Fixed Header*/
    jQuery(function (f) {
        var element = f('#header__fixed'),
            home = document.querySelector('#home'),
            homeH = home.offsetHeight;
        f(window).scroll(function () {
            element['fade' + (f(this).scrollTop() > homeH - 50 ? 'In' : 'Out')](200);
        });
    });

    /*Smooth Scroll*/
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 800);
    });

    jQuery(window).scroll(function () {
        var $sections = $('section');
        $sections.each(function (i, el) {
            var top = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('a.active').removeClass('active');
                $('a[href="#' + id + '"]').addClass('active');
            }
        })
    });

    /*Nav-toggle*/
    $(".nav-toggle").on("click", function (event) {
        event.preventDefault();
        $(".nav-toggle").toggleClass("active");
        $(".header__nav").toggleClass("active");
        $("#header__fixed.nav-toggle").toggleClass("active");
        $("#header__fixed.header__nav").toggleClass("active");
    });

    /*data-slider*/
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 700,
        fade: false,
        arrows: false,
        dots: true,
        autoplay: true,
    });

});
