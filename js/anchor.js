// Go to gallery
$(document).ready(function(){
    $( "a.scrollTo" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
    });
});
// Go top
$(document).ready(function() {
  
    var btn = $('#button');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 40) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  
  });