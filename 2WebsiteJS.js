$(document).ready(function () {
    $("#openNav").on("click", function () {
        $(".sidenav").show().on("click", function () {
            $(".sidenav").hide();
        });
    });

    $("img").on("click", function () {

        $(this.parentElement).find(".hidden-text").slideToggle();



    });
    /*top menu position fixed on scroll*/

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 70) {
            $('.ul-menu').addClass('ul-menu-fixed');
            $('.sidenav').addClass('fixed-sidenav');
        } else {
            $('.ul-menu').removeClass('ul-menu-fixed');
            $('.sidenav').removeClass('fixed-sidenav');
        }
    });
});