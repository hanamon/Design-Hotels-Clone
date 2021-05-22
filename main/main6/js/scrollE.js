$(function(){ //scrollE.js
	
	var winH = 0;
	
	$(window).scroll(function(){
		if( $(window).scrollTop() > 30 ){
			$('#header>div').addClass('addFixed');
		}
		else if( $(window).scrollTop() <= 30 ){
			$('#header>div').removeClass('addFixed');
		}
	});
	
}); //scrollE.js