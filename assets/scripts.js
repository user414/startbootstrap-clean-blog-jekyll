$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(function() {
  $("body").on("input propertychange", ".floating-label-form-group", function(o) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(o.target).val())
  }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus")
  }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus")
  });
  if ($(window).width() > 992) {
      var o = $("#mainNav").height();
      $(window).on("scroll", {
          previousTop: 0
      }, function() {
          var s = $(window).scrollTop();
          if (this.previousTop < s && s > o)  {
              $("#mainNav").addClass("is-hidden-above-viewport");
              $("#mainNav").removeClass("is-visible");
          } else if (this.previousTop > s && s > 0) {
              $("#mainNav").addClass("is-visible");
          } else if (s == 0) {
              $("#mainNav").removeClass("is-hidden-above-viewport is-visible");
          }
          this.previousTop = s;
      })
  }
});
