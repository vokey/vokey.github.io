$(document).ready(
	function() {
	$('.contact img').hover(function() {
		$(this).fadeTo(100,0.5);
	}, function() {
		$(this).fadeTo(200,1);
	});
	function scrollNav() {
  $('.nav a').click(function(){  
	    //Toggle Class
	    $(".nav li.active").removeClass("active");      
	    $(this).closest('li').addClass("active");
	    var theClass = $(this).attr("class");
	    $('.'+theClass).parent('li').addClass('active');
	    //Animate
	    $('html, body').stop().animate({
	        scrollTop: $( $(this).attr('href') ).offset().top - 30
	    }, 400);
	    return false;
	  });
	  $('.scrollTop a').scrollTop();
	}
	scrollNav();
});

