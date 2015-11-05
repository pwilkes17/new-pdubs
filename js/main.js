$(document).ready(function(){
	$('.dropdown').on('click', function(){
		$(this).toggleClass("active")	
			.toggleClass("rotate");
		$('.menu-shown').toggleClass("menu-on");
	});
	$('.resume-box').on('mouseenter', function(){
		$(this).addClass('inset');
		
	});
	$('.resume-box').on('mouseleave', function(){
		$(this).removeClass('inset');
		
	});
	$('.about-div').on('mouseenter', function(){
		$(this).addClass('inset');
		
	});
	$('.about-div').on('mouseleave', function(){
		$(this).removeClass('inset');
		
	});


	$('.collapse').collapse();
	

	

});