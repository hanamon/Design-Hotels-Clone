$(function(){ //nav.js
	navObj.init();
});

var navObj = {
	init: function(){
		navObj.snsResizeEvent();
		navObj.windowResizeFn();
		navObj.scrollEvent();
		navObj.inputBtnEvent();
		navObj.navBtnEvent();
	},
	windowResizeFn: function(){
		$(window).resize(function(){
			navObj.snsResizeEvent();
		});
	},
	snsResizeEvent: function(){
		if( $(window).innerWidth() < 1025 ){
			$('#fixed-sns-wrap').hide();
		}
		else if( $(window).innerWidth() >= 1025 ){
			$('#fixed-sns-wrap').show();
			
		}
	},
	scrollEvent: function(){
		$(window).scroll(function(){
			navObj.windowResizeFn();
			if( $(window).scrollTop() >= 88 ){
				$('#fixed-side-wrap').addClass('addFixedSide');
			}
			else{
				$('#fixed-side-wrap').removeClass('addFixedSide');
			}
			
			if( $(window).scrollTop() < 150 ){
				$('#fixed-sns-wrap').stop().animate({right:'-100%'}, 1000);
			}
			else if( $(window).scrollTop() >= 150 ){
				$('#fixed-sns-wrap').stop().animate({right:0}, 300);
			}
		});
	},
	inputBtnEvent: function(){
		$('#idsearch').on({
			focusin: function(){
				$('#labelSearch').addClass('addSearch');
			},
			focusout: function(){
				$('#labelSearch').removeClass('addSearch');
			}
		});
	},
	navBtnEvent: function(){
		$('.navBtn').each(function(index){
			$(this).on({
				click: function(){
					if( index == 0 ){
						location.href = 'http://jimoroot.dothome.co.kr/gn53/bbs/board.php?bo_table=DHFreeboard';
					}
					else if( index == 1 ){
						location.href = 'http://jimoroot.dothome.co.kr/hotel/main/main2';
					}
					else if( index == 2 ){
						window.open('http://jimoroot.dothome.co.kr/hotel/main/main3', '_blank');
					}
					else if( index == 3 ){
						location.href = 'http://jimoroot.dothome.co.kr/hotel/main/main4/main4-1';
					}
					else if( index == 4 ){
						location.href = 'http://jimoroot.dothome.co.kr/hotel/main/main5';
					}
					else if( index == 5 ){
						window.open('http://jimoroot.dothome.co.kr/hotel/main/main6', '_blank'); 
					}
				}
			});
		});
		$('.logoBtn').on({
			click: function(){
				location.href = 'http://jimoroot.dothome.co.kr/hotel';
			}
		});
		$('.mobileNavBtn').each(function(index){
			$(this).on({
				click: function(){
					if( index == 0 ){
						location.href = 'http://jimoroot.dothome.co.kr/gn53/bbs/board.php?bo_table=DHFreeboard';
					}
					else if( index == 1 ){
						location.href = 'http://jimoroot.dothome.co.kr/hotel/main/main2';
					}
					else if( index == 2 ){
						window.open('http://jimoroot.dothome.co.kr/hotel/main/main3', '_blank');
					}
					else if( index == 3 ){
						location.href = 'http://jimoroot.dothome.co.kr/hotel/main/main4/main4-1';
					}
					else if( index == 4 ){
						location.href = 'http://jimoroot.dothome.co.kr/hotel/main/main5';
					}
					else if( index == 5 ){
						window.open('http://jimoroot.dothome.co.kr/hotel/main/main6', '_blank'); 
					}
				}
			});
		});
	}
};
/*----------------------------------------------------------------------------------------*/
//nav.js