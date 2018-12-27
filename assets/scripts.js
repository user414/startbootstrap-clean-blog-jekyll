const NAVBAR_DELTA = 50;

var navbarFunctions = {
    hide: function () {
        $("#mainNav").addClass("fixed-viewport");
        $("#mainNav").removeClass("is-visible");
        $("#mainNav").addClass("is-hidden-no-transition");
        $("#mainNav").addClass("is-hidden");
    },
    hideNoTransition: function () {
        $("#mainNav").addClass("fixed-viewport");
        $("#mainNav").removeClass("is-visible");
        $("#mainNav").addClass("is-hidden-no-transition");
    },
    show: function () {
        $("#mainNav").addClass("fixed-viewport");
        $("#mainNav").removeClass("is-hidden");
        $("#mainNav").removeClass("is-hidden-no-transition");
        $("#mainNav").addClass("is-visible");
    },
    fixToScreenTop: function () {
        $("#mainNav").removeClass("fixed-viewport is-visible");
    },
    isNavbarOnScreenTop: function()  {
        return $("#mainNav").offset().top > 0;
    },
    isNavbarVisible: function()  {
        var topOfElement = $("#mainNav").offset().top;
        var bottomOfElement = $("#mainNav").offset().top + $("#mainNav").outerHeight();
        var bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
        var topOfScreen = $(window).scrollTop();
    
        return ((bottomOfScreen > topOfElement) && (topOfScreen < bottomOfElement));
    },
    
}



$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (o) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(o.target).val())
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus")
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus")
    });
    if ($(window).width() > 992) {
        $(window).on("scroll", {
            previousTop: 0
        }, function () {
            var s = $(window).scrollTop();
            var navbarVisible = navbarFunctions.isNavbarVisible();
            if (typeof this.previousTop === "undefined" || !navbarVisible) {
                navbarFunctions.hideNoTransition();
            }
            if (this.previousTop < s && navbarFunctions.isNavbarOnScreenTop() && navbarVisible) {
                navbarFunctions.hide();
            } else if (this.previousTop > s && !navbarVisible) {
                navbarFunctions.show();
            } else if (s == 0) {
                navbarFunctions.fixToScreenTop();
            }
            this.previousTop = s;
        })
    }
});


