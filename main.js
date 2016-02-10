$(document).ready(function () {
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 75 && !(window.matchMedia("(max-width: 760px)").matches)) {
      $('.header').addClass('mini');
    } else {
      $('.header').removeClass('mini');
    }
  });
});