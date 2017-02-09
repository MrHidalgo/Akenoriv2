$(document).ready(function() {


    /* BTN BURGER */
    $(".btn-menu_js").on("click", function() {
        $(this).toggleClass("active");
        $(".nav").slideToggle(300);
        // $("body").toggleClass("open-menu");
    });


    /* LOGO CLICK SCROLL TO TOP */
    $(".logotype__img-js").on("click", function() {
        $('body,html').animate(
            {
                scrollTop: 0
            }, 1000
        );
    });
});