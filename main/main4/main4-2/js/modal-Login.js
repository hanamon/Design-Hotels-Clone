$(function(){ //modal-Login.js
	
	var winW = 0;
	var winH = 0;
	
	var modW = 0;
	var modH = 0;
	var modT = 0;
	
	windowResizeFn();
	setInterval(windowResizeFn, 0);
	
	$('.modal-closeBtn').on({
		click: function(){
			$('#modal-login-wrap').hide();
			$('html').removeClass('addScroll');
		}
	});
	
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function windowResizeFn(){
		winW = $(window).innerWidth();
		winH = $(window).innerHeight();
		
		modW = $('#modal-login-wrap>div').innerWidth();
		modH = $('#modal-login-wrap>div').innerHeight();
		
		modT = (winH-modH)/2
		
		if( winW < modW ){
			$('#modal-login-wrap>div').css({ width:'100%' });
		}
		else if( winW >= 430 ){
			$('#modal-login-wrap>div').css({ width:430 });
		}
		
		if( winH < modH ){
			$('#modal-login-wrap>div').css({ top:0 });
		}
		else{
			$('#modal-login-wrap>div').css({ top:modT });
		}
	}
	
}); //modal-Login.js




















