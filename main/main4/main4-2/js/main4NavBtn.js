$(function(){ //main4NavBtn.js
	
	$('.main4NavBtn').each(function(index){
		$(this).on({
			click: function(){
				if( index == 0 ){
					location.href = 'http://jimoroot.dothome.co.kr/hotel/main/main4/main4-1';
				}
				else if( index == 1 ){
					location.href = 'http://jimoroot.dothome.co.kr/hotel/main/main4/main4-2';
				}
				else{
					$('html').addClass('addScroll');
					$('#modal-login-wrap').show();
				}
			}
		});
	});
	
}); //main4NavBtn.js