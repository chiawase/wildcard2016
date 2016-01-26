// Last edited: 8 Jan 2016
// Last edit by: Chi Señires

$(document).ready(function() {
  var $nav = $("nav"),
      ypos = $nav.offset().top,
      height = $nav.height();

  $("body").scroll(function() {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > ypos + height) {
      $nav.addClass("fixed").animate({top: 0});
    } else if (scrollTop <= ypos) {
      $nav.removeClass("fixed").clearQueue().animate({top: 0}, 0);
    }
  });
});