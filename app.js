$(document).ready(function() {
    $('.js-scrollTo').on('click', function() {
      var page = $(this).attr('href');
      var speed = 700;
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
      return false;
    });
  });




