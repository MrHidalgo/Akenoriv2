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


function checkboxInit() {
    $(".checkbox__btn").click(function(e) {
        e.preventDefault();

        var inputCheckbox = $(this).find('input');
        if ($(this).hasClass('disabled')){
            return false;
        }
        $(this).toggleClass('active');
        if(inputCheckbox.prop('checked') == true){
            inputCheckbox.prop('checked', false).change();
        } else {
            inputCheckbox.prop('checked', true).change();
        }
        return false;
    });
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
    /* FUNCTION */
    checkboxInit();


    if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        $(document).on('blur', 'input, textarea', function () {
            setTimeout(function () {
                window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
            }, 0);
        });
    }


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


    /* MODAL */
    var modalBtn = ".advantages__btn, .video__btn, .delivery__btn";
    $(modalBtn).on("click", function(e) {
        e.preventDefault();

        $("body, html").addClass("open-popup");
        $(".modal").fadeIn(300);
    });
    $(".btn-close").on("click", function(e) {
        e.preventDefault();

        $("body, html").removeClass("open-popup");
        $(".modal").fadeOut(300);
    });
    $(document).on("keyup", function(e) {
        if (e.keyCode == 27) {
            $("body, html").removeClass("open-popup");
            $(".modal").fadeOut(300);
        }
    });
});