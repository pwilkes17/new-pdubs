$(document).ready(function(){
	$('.dropdown').on('click', function(){
		$(this).toggleClass("active")	
			.toggleClass("rotate");
		$('.menu-shown').toggleClass("menu-on");
	});
});