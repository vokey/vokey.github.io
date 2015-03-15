$(document).ready(function() {
	$('.contact img').hover(function() {
		$(this).fadeTo(100,0.5);
	}, function() {
		$(this).fadeTo(200,1);
	});
});