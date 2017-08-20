                                           /*Show and hide left menu*/

$(document).ready(function () {
    $("#openNav").on("click", function () {
        $(".sidenav").show().on("click", function () {
            $(".sidenav").hide();
        });
    });

                                           /*Description under an image*/
    
    $("img").on("click", function () {

        $(this.parentElement).find(".hidden-text").slideToggle();
    });

    $(document).ready(function () {
    $('.popup-menu').on('click', function () { 
        $(".ul-menu").toggle();
    });
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