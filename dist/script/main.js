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


    /* MORE BTN */
    $(".more__btn").on("click", function() {
        var linkAttr = $(this).attr("data-more");

        $(".more__btn").removeClass("active");
        $(this).addClass("active");

        $(".more__carousel").css(
            {
                opacity: 0,
                height: 0,
                visibility: "hidden"
            }
        );
        $(".more__carousel-" + linkAttr).css(
            {
                opacity: 1,
                height: "auto",
                visibility: "visible"
            }
        );
    });
    /*MORE CAROUSEL */
    $(".more__carousel").owlCarousel({
        items:1,
        loop: true,
        dots: true,
        nav:true
    });
});