$(function(){ //section8-Slide.js
	
	var s=[], a=[], b=[], t = p = winW = setId = 0, n = $('.section8-slide').length-1;
		
		sFn();
		s[0]=1;
		
		resizeFn();
		autoPlay('_mouse');
	
	$(window).resize(function(){
		resizeFn();
	});	
	
	function resizeFn(){
		winW = $(window).innerWidth();
		if( winW > 1400 ){
			p = 16.66666;
		}
		else if( winW <= 1400 && winW > 1024 ){
			p = 20;
		}
		else if( winW <= 1024 && winW > 900 ){
			p = 25;
		}
		else if( winW <= 900 && winW > 760 ){
			p = 33.33333;
		}
		else if( winW <= 760 && winW > 460 ){
			p = 50;
		}
		else if( winW <= 460 ){
			p = 100;
		}
		$('.section8-slide-wrap>li').css({width:p+'%'});
		for(i=0;i<=n;i++){
			$('.section8-slide').eq(i).animate({left:(p*i)+'%'}, 0);
		}	
		sFn();
		s[0]=1;
	}	
	
	function autoPlay(z){
		if( z=='_mouse' || z=='_focus' ){
			if( t==0 ){
				setId = setInterval( nextSlideFn, 3000 );
				t=1; 
			}
		}
	}
	
	function sFn(){
		for(i=0;i<=n;i++){
			s[i]=0;
		}
	}
	
	//터치 이벤트
	$('.section8-slide-wrap').on({
		swipeleft: function(){
			clearInterval( setId );
			nextSlideFn();
		},
		swiperight: function(){
			clearInterval( setId );
			prevSlideFn();
		}
	});
	
	$('.section8-arrow-right-wrap').on({
		click: function(){
			nextSlideFn();
		},
		mouseenter: function(){
			t = 0;
			clearInterval( setId );
		},
		mouseleave: function(){
			autoPlay('_mouse');
		},
		focusin: function(){
			t = 0;
			clearInterval( setId );
		},
		focusout: function(){
			autoPlay('_focus');
		}
	});
	
	$('.section8-arrow-left-wrap').on({
		click: function(){
			prevSlideFn();
		},
		mouseenter: function(){
			t = 0;
			clearInterval( setId );
		},
		mouseleave: function(){
			autoPlay('_mouse');
		},
		focusin: function(){
			t = 0;
			clearInterval( setId );
		},
		focusout: function(){
			autoPlay('_focus');
		}
	});

	function nextSlideFn(){
		for(i=0;i<=n;i++){
			if(s[i]==1){
				if(i==n){
					nextSlide(0);
					break;
				}
				else if(i!=n){
					nextSlide(i+1);
					break;
				}
			}
		}	
	}
	
	function prevSlideFn(){
		for(i=0;i<=n;i++){
			if(s[i]==1){
				if(i==0){
					prevSlide(n);
					break;
				}
				else if(i!=0){
					prevSlide(i-1);
					break;
				}
			}
		}	
	}

	function nextSlide(z){
		sFn();
		s[z]=1;

		if(z==0){
			a = [9,0,1,2,3,4,5,6,7,8];
		}
		else if(z==1){
			a = [0,1,2,3,4,5,6,7,8,9];
		}
		else if(z==2){
			a = [1,2,3,4,5,6,7,8,9,0];
		}
		else if(z==3){
			a = [2,3,4,5,6,7,8,9,0,1];
		}
		else if(z==4){
			a = [3,4,5,6,7,8,9,0,1,2];
		}
		else if(z==5){
			a = [4,5,6,7,8,9,0,1,2,3];
		}
		else if(z==6){
			a = [5,6,7,8,9,0,1,2,3,4];
		}
		else if(z==7){
			a = [6,7,8,9,0,1,2,3,4,5];
		}
		else if(z==8){
			a = [7,8,9,0,1,2,3,4,5,6];
		}
		else if(z==9){
			a = [8,9,0,1,2,3,4,5,6,7];
		}
		for(i=0;i<=n;i++){
			$('.section8-slide').eq(a[i]).stop().animate({left:(p*i)+'%'}, 0).animate({left:(p*(i-1))+'%'}, 1000 );
		}
	}
	
	function prevSlide(z){
		sFn();
		s[z]=1;

		if(z==9){
			b = [9,0,1,2,3,4,5,6,7,8];
		}
		else if(z==8){
			b = [8,9,0,1,2,3,4,5,6,7];
		}
		else if(z==7){
			b = [7,8,9,0,1,2,3,4,5,6];
		}
		else if(z==6){
			b = [6,7,8,9,0,1,2,3,4,5];
		}
		else if(z==5){
			b = [5,6,7,8,9,0,1,2,3,4];
		}
		else if(z==4){
			b = [4,5,6,7,8,9,0,1,2,3]; 
		}
		else if(z==3){
			b = [3,4,5,6,7,8,9,0,1,2];
		}
		else if(z==2){
			b = [2,3,4,5,6,7,8,9,0,1];
		}
		else if(z==1){
			b =	[1,2,3,4,5,6,7,8,9,0];
		}
		else if(z==0){
			b = [0,1,2,3,4,5,6,7,8,9];
		}
		for(i=0;i<=n;i++){
			$('.section8-slide').eq(b[i]).stop().animate({left:(p*(i-1))+'%'}, 0).animate({left:(p*i)+'%'}, 1000 );
		}
	}
	
}); //section8-Slide.js























