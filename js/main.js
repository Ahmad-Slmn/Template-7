/* global $ */
$(function () {
    // Smoothly Scroll To Elment
    $("header ul li a").click(function (e) {

        e.preventDefault()

        $("header ul").removeClass("active")

        document.querySelector($(this).data("section")).scrollIntoView({

            behavior: "smooth"

        })

    })

    //information about our companey
    $('.info-list li').click(function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn("slow")
    });

    //show my menu
    $(".fa-bars").click(function () {

        $("header ul").toggleClass("active")
    })

    $(window).scroll(function () {

        // Show The Arrow-up If Window scrollY Is >= 700
        if (this.scrollY >= 700) {

            $(".fa-arrow-up").fadeIn("slow")

        } else {
            $(".fa-arrow-up").fadeOut("slow")
        }
    })

    // Click To Go Up
    $(".fa-arrow-up").click(function () {

        $(window).scrollTop(0)
    })
})
