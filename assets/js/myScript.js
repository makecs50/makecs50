$(document).ready(function () {
    
  var trigger = $('.hamburger'),
      rightText = $('.col-md-9'),
      overlay = $('.overlay'),
     isClosed = false;
    //my code
  if ($(window).width()>991){
        rightText.removeClass('col-lg-offset-2');
        rightText.addClass('col-lg-offset-0');
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      $('#wrapper').toggleClass('toggled');
    }
    //End of my code
    
    trigger.click(function () {
      hamburger_cross();
        
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
});

$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").delay(400).fadeOut("slow");;
	});