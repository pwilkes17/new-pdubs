$(document).ready(function(){
	$('.dropdown').on('click', function(){
		$(this).toggleClass("active")	
			.toggleClass("rotate");
		$('.menu-shown').toggleClass("menu-on");
	});
	$('.resume-box').on('mouse-over', function(){
		$(this).toggleClass('inset');



	});


	$('.collapse').collapse();
	

	

});