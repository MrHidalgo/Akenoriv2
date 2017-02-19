function scrollWindowNavigationFixedLarge() {
    var countScroll = $(window).scrollTop(),
        navigationBlock = $('.header__fixed'),
        body = $("body");

    if (countScroll > 150) {
        body.addClass("fixed");
        navigationBlock.addClass("slideInDown");
    } else {
        body.removeClass("fixed");
        navigationBlock.removeClass("slideInDown");
    }
}


$(window).on("load resize ready scroll", function(){
    if($(window).width() > '1024') {
        scrollWindowNavigationFixedLarge();
    } else {
        $("body").removeClass("fixed");
        $('.header__fixed').removeClass("slideInDown");
    }
});


$(document).ready(function() {
    /* BTN BURGER */
    $(".btn-menu_js").on("click", function() {
        $(this).toggleClass("active");
        $(".nav").slideToggle(300);
        $(".header__top").toggleClass("active");
        $("body").toggleClass("open-menu");
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