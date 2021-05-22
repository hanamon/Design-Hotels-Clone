$(function(){ //section1-Slide.js
	
	var winH = setId1 = setId2 = setId3 = t1 = 0;
	var s=[], a=[], b=[], n = $('.introSlide').length-1;
		
		sFn();
		s[0]=1;
		autoPlay('_mouse');
		resizeFn();
		setTimeout(resizeFn, 100);
		
/*----------------------------------------------------------------------*/
		//리사이즈 이벤트
		$(window).resize(function(){
			resizeFn();
		});
		function resizeFn(){
			winW = $(window).innerWidth();
			if( winW > 1024 ){
				winH = $(window).innerHeight()-80;
			}
			else if( winW <= 1024 ){
				winH = $(window).innerHeight()-67;
			}
			$('.section1-introSlide-wrap>ul>li').css({height:winH});
		}
/*----------------------------------------------------------------------*/	
		//터치 이벤트
		$('.section1-introSlide-wrap>ul').on({
			swipeleft: function(){
				clearInterval( setId1 );
				nextSlideFn();
			},
			swiperight: function(){
				clearInterval( setId1 );
				prevSlideFn();
			}
		});
/*----------------------------------------------------------------------*/	
		function autoPlay(z){
			if( z=='_mouse' || z=='_focus' ){
				if( t1==0 ){
					setId1 = setInterval( nextSlideFn, 5000 );
					t1=1;
				}
			}
		}
/*----------------------------------------------------------------------*/
		//다운버튼 이벤트
		$('.section1-arrow-down-wrap').on({
			click:		function(){
				$('html,body').stop().animate({scrollTop:$('#section2').offset().top-67}, 1000);
			},
			mouseenter: function(){
				downBtnFn();
				setId2 = setInterval( downBtnFn, 1000 );
			},
			mouseleave: function(){
				clearInterval( setId2 );
				clearInterval( setId3 );
			},
			focusin: function(){
				downBtnFn();
				setId3 = setInterval( downBtnFn, 1000 );
			},
			focusout: function(){
				clearInterval( setId2 );
				clearInterval( setId3 );
			}
		});
		function downBtnFn(){
			$('.section1-downBtn>img').stop().animate({marginTop:15}, 500).animate({marginTop:0}, 500);
		}
/*----------------------------------------------------------------------*/	
		$('.section1-arrow-left-wrap').on({
			click: function(){
				prevSlideFn();
			},
			mouseenter: function(){
				t=0;
				clearInterval( setId1 );
			},
			mouseleave: function(){
				autoPlay('_mouse');
			},
			focusin: function(){
				t=0;
				clearInterval( setId1 );
			},
			focusout: function(){
				autoPlay('_focus');
			}
		});
		$('.section1-arrow-right-wrap').on({
			click: function(){
				nextSlideFn();
			},
			mouseenter: function(){
				t=0;
				clearInterval( setId1 );
			},
			mouseleave: function(){
				autoPlay('_mouse');
			},
			focusin: function(){
				t=0;
				clearInterval( setId1 );
			},
			focusout: function(){
				autoPlay('_focus');
			}
		});
/*----------------------------------------------------------------------*/		
		function sFn(){
			for(i=0;i<=n;i++){ s[i]=0; }
		}
/*----------------------------------------------------------------------*/		
		function nextSlideFn(){
			for( i=0;i<=n;i++ ){
				if( s[i]==1 ){
					if( i==n ){
						nextSlide(0);
						break;
					}
					else{
						nextSlide(i+1);
						break;
					}
				}
			}
		}
/*----------------------------------------------------------------------*/		
		function nextSlide(z){
			sFn();
			s[z]=1;
			if( z == 0 ){
				a = [0,1,2,3,4,5]
			}
			else if( z == 1 ){
				a = [1,2,3,4,5,0]			
			}
			else if( z == 2 ){
				a = [2,3,4,5,0,1]
			}
			else if( z == 3 ){
				a = [3,4,5,0,1,2]
			}
			else if( z == 4 ){
				a = [4,5,0,1,2,3]
			}
			else if( z == 5 ){
				a = [5,0,1,2,3,4]
			}
			$('.introSlide').eq(a[0]).stop().animate({opacity:0},0).animate({opacity:1},1000);
			$('.introSlide').eq(a[1]).stop().animate({opacity:0},0).animate({opacity:0},1000);
			$('.introSlide').eq(a[2]).stop().animate({opacity:0},0).animate({opacity:0},1000);
			$('.introSlide').eq(a[3]).stop().animate({opacity:0},0).animate({opacity:0},1000);
			$('.introSlide').eq(a[4]).stop().animate({opacity:0},0).animate({opacity:0},1000);
			$('.introSlide').eq(a[5]).stop().animate({opacity:1},0).animate({opacity:0},1000);
		}
/*----------------------------------------------------------------------*/
		function prevSlideFn(){
			for( i=0;i<=n;i++ ){
				if( s[i]==1 ){
					if( i==0 ){
						prevSlide(n);
						break;
					}
					else{
						prevSlide(i-1);
						break;
					}
				}
			}
		}	
/*----------------------------------------------------------------------*/		 
		function prevSlide(z){
			sFn();
			s[z]=1;
			if( z == 5 ){
				b = [5,4,3,2,1,0];
			}
			else if( z == 4 ){
				b = [4,3,2,1,0,5];
			}
			else if( z == 3 ){
				b = [3,2,1,0,5,4];
			}
			else if( z == 2 ){
				b = [2,1,0,5,4,3];
			}
			else if( z == 1 ){
				b = [1,0,5,4,3,2];
			}
			else if( z == 0 ){
				b = [0,5,4,3,2,1];
			}
			$('.introSlide').eq(b[0]).stop().animate({opacity:0},0).animate({opacity:1},1000);
			$('.introSlide').eq(b[1]).stop().animate({opacity:0},0).animate({opacity:0},1000);
			$('.introSlide').eq(b[2]).stop().animate({opacity:0},0).animate({opacity:0},1000);
			$('.introSlide').eq(b[3]).stop().animate({opacity:0},0).animate({opacity:0},1000);
			$('.introSlide').eq(b[4]).stop().animate({opacity:0},0).animate({opacity:0},1000);
			$('.introSlide').eq(b[5]).stop().animate({opacity:1},0).animate({opacity:0},1000);
		}
/*----------------------------------------------------------------------*/	
}); //section1-Slide.js











