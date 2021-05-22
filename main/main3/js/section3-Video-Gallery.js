$(function(){ //section3-Video-Gallery.js
	
	var z = 0;
	var winW = 0;
	var imgVideoW = 0;
	var cols = rows = s = h = 0;
	var a = [];
	var cnt = 0;
	
	n = $('.section3-video-gallery>ul>li').length;
	
	setInterval( galleryResizeFn, 100 );

/*-------------------------------------------------------------------------------------------------------*/	
	
	$('.galleryBtn').each(function(idx){
		$(this).on({
			click: function(){
				$('.galleryBtn').removeClass('addSec3Nav');
				$(this).addClass('addSec3Nav');
				z = idx;
				galleryResizeFn(z);
			}
		});
	});
	
/*-------------------------------------------------------------------------------------------------------*/		
	
	$(window).resize(function(){
		galleryResizeFn();
	});
	
/*-------------------------------------------------------------------------------------------------------*/	
	
	function galleryResizeFn(z){
		
		winW = $(window).innerWidth();
		
		if( winW > 1024 ){
			cols = 3;
		}
		else if( winW <= 1024 && winW > 760 ){
			cols = 2;
		}
		else if(winW <= 760 ){
			cols = 1;
		}
		
		imgVideoW = winW / cols;
		$('.section3-video-gallery>ul>li>div').css({ width: imgVideoW, height: imgVideoW, transition:'all 0s' });
		
		if( z==0 ){
		 	h = 0;
			s = 24;
			a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
		}
		else if( z==1 ){
		 	h = 16;
			s = 8; 
			a = [1,3,4,6,7,8,9,12,14,15,16,17,20,21,22,23, 0,2,5,10,11,13,18,19 ];
		}
		else if( z==2 ){
		 	h = 16;
			s = 8; 
			a = [0,2,3,4,5,6,9,10,12,14,18,19,20,21,22,23, 1,7,8,11,13,15,16,17];
		}
		else if( z==3 ){
		 	h = 14;
			s = 10; 
			a = [0,1,2,7,11,12,13,14,16,18,19,20,22,23, 3,4,5,6,8,9,10,15,17,21];
		}
		else if( z==4 ){
		 	h = 20;
			s = 4; 
			a = [0,1,2,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23, 3,4,5,6];
		}
		else if( z==5 ){
		 	h = 21;
			s = 3; 
			a = [0,1,2,3,5,6,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23, 4,7,14];
		}
		
		for(i=0;i<h;i++){
			$('.section3-video-gallery>ul>li').eq(a[i]).hide();
		}
		
		cnt = h-1; 
		for(i=0;i<(n-h);i++){ 
			cnt++; 
			$('.section3-video-gallery>ul>li').eq(a[cnt]).show();
		}
	}
	
/*-------------------------------------------------------------------------------------------------------*/	
	
	$('.section3-hidden-text-wrap>ul>li>span').on({
		focusin: function(){
			$(this).addClass('addGalleryFocus');
		},
		focusout: function(){
			$(this).removeClass('addGalleryFocus');
		}
	});
	
/*-------------------------------------------------------------------------------------------------------*/	
	
	$('.section3-video-gallery>ul>li>div').on({
		mouseenter: function(){
			$(this).find('.section3-hidden-text-wrap>ul').stop().animate({top:0, opacity:1},500);
			$(this).find('.section3-gallery-btn').addClass('addSec3Hover');
			$(this).find('video').addClass('addSec3VideoScale');
			$(this).find('img').addClass('addSec3VideoScale');
			
			if( $(this).find('video').get(0)){
				$(this).find('video').get(0).pause();
			}
		},
		mouseleave: function(){
			$(this).find('.section3-hidden-text-wrap>ul').stop().animate({top:100, opacity:0},500);
			$(this).find('.section3-gallery-btn').removeClass('addSec3Hover');
			$(this).find('video').removeClass('addSec3VideoScale');
			$(this).find('img').removeClass('addSec3VideoScale');
			
			if( $(this).find('video').get(0)){ 
				$(this).find('video').get(0).play();
			}
		},
		focusin: function(){
			$(this).find('.section3-hidden-text-wrap>ul').stop().animate({top:0, opacity:1},500);
			$(this).find('.section3-gallery-btn').addClass('addSec3Hover');
			$(this).find('video').addClass('addSec3VideoScale');
			$(this).find('img').addClass('addSec3VideoScale');
			
			if( $(this).find('video').get(0)){
				$(this).find('video').get(0).pause();
			}
		},
		focusout: function(){
			$(this).find('.section3-hidden-text-wrap>ul').stop().animate({top:100, opacity:0},500);
			$(this).find('.section3-gallery-btn').removeClass('addSec3Hover');
			$(this).find('video').removeClass('addSec3VideoScale');
			$(this).find('img').removeClass('addSec3VideoScale');
			
			if( $(this).find('video').get(0)){ 
				$(this).find('video').get(0).play();
			}
		}
	});
	
/*-------------------------------------------------------------------------------------------------------*/	
}); //section3-Video-Gallery.js




















