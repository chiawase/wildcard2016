$(document).ready(function () {
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 75) {
      $('.header').addClass('mini');
    } else {
      $('.header').removeClass('mini');
    }
  });
});