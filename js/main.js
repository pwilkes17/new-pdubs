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

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 88
	    }, 900, 'swing');
	});

	var waypoint = $('#about').waypoint({
		handler: function(direction) {
			$('select option:contains(About)').attr('selected', true);
		},
		
			offset: '10%'
		
	});
  

	var waypoint = $('#video').waypoint({
		handler: function(direction) {
			$('select option:contains(Video)').attr('selected', true);
		},
		
			offset: '20%'
		
	});
	var waypoint = $('#resume').waypoint({
		handler: function(direction) {
			$('select option:contains(Resume)').attr('selected', true);
		},
			offset: '20%'
	});

	var waypoint = $('#contact').waypoint({
		handler: function(direction) {
			$('select option:contains(Contact)').attr('selected', true);
		},
			offset: '50%'
	}); 



	$('.collapse').collapse();
	

	

});