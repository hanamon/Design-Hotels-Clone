$(function(){ //section6-Slide.js
	section6SlideOBJ.init();
});

var s=[], a=[], b=[], n = 0;

var section6SlideOBJ = {
	init: function(){
		section6SlideOBJ.sFn();
		section6SlideOBJ.formatFn();
		
		section6SlideOBJ.hotelMapBtn();
		section6SlideOBJ.swipeEvent();
		section6SlideOBJ.arrowBtnEvent();
	},
	formatFn: function(){
		n = $('.section6-slide').length-1
		s[0]=1;
	},
	hotelMapBtn: function(){
		$('.hotelMapBtn').on({
			mouseenter: function(){
				$(this).find('img').attr('src', 'img/intro-section6-map01.png');
			},
			mouseleave: function(){
				$(this).find('img').attr('src', 'img/intro-section6-map00.png');
			},
			focusin: function(){
				$(this).find('img').attr('src', 'img/intro-section6-map01.png');
			},
			focusout: function(){
				$(this).find('img').attr('src', 'img/intro-section6-map00.png');
			}
		});
	},
	swipeEvent: function(){
		$('.section6-slide-wrap').on({
			swipeleft: function(){
				section6SlideOBJ.nextSlideFn();
			},
			swiperight: function(){
				section6SlideOBJ.prevSlideFn();
			}
		});
	},
	arrowBtnEvent: function(){
		$('.section6-arrow-right-wrap').on({
			click: function(){
				section6SlideOBJ.nextSlideFn();
			}
		});
		$('.section6-arrow-left-wrap').on({
			click: function(){
				section6SlideOBJ.prevSlideFn();
			}
		});
	},
	sFn: function(){
		for(i=0;i<=n;i++){ s[i]=0; }
	},
	nextSlideFn: function(){
		for(i=0;i<=n;i++){
		if(s[i]==1){
				if(i==n){
					return section6SlideOBJ.nextSlide(0);
					break;
				}
				else{
					return section6SlideOBJ.nextSlide(i+1);
					break;
				}
			}
		}
	},
	prevSlideFn: function(){
		for(i=0;i<=n;i++){
		if(s[i]==1){
				if(i==0){
					return section6SlideOBJ.prevSlide(n);
					break;
				}
				else{
					return section6SlideOBJ.prevSlide(i-1);
					break;
				}
			}
		}
	},
	nextSlide: function(z){
		section6SlideOBJ.sFn();
		s[z]=1;
		
		if(z==0){
			a = [4,0,1,2,3];
		}
		else if(z==1){
			a = [0,1,2,3,4];
		}
		else if(z==2){
			a = [1,2,3,4,0];
		}
		else if(z==3){
			a = [2,3,4,0,1];
		}
		else if(z==4){
			a = [3,4,0,1,2];
		}
		$('.section6-slide').eq(a[0]).stop().animate({opacity:1},0).animate({opacity:0},1000);
		$('.section6-slide').eq(a[1]).stop().animate({opacity:0},0).animate({opacity:1},1000);
		$('.section6-slide').eq(a[2]).stop().animate({opacity:0},0).animate({opacity:0},1000);
		$('.section6-slide').eq(a[3]).stop().animate({opacity:0},0).animate({opacity:0},1000);
		$('.section6-slide').eq(a[4]).stop().animate({opacity:0},0).animate({opacity:0},1000);
	},
	prevSlide: function(z){
		section6SlideOBJ.sFn();
		s[z]=1;
		
		if(z==4){
			b = [0,4,3,2,1];
		}
		else if(z==3){
			b = [4,3,2,1,0];
		}
		else if(z==2){
			b = [3,2,1,0,4];
		}
		else if(z==1){
			b = [2,1,0,4,3];
		}
		else if(z==0){
			b = [1,0,4,3,2];
		}
		$('.section6-slide').eq(b[0]).stop().animate({opacity:1},0).animate({opacity:0},1000);
		$('.section6-slide').eq(b[1]).stop().animate({opacity:0},0).animate({opacity:1},1000);
		$('.section6-slide').eq(b[2]).stop().animate({opacity:0},0).animate({opacity:0},1000);
		$('.section6-slide').eq(b[3]).stop().animate({opacity:0},0).animate({opacity:0},1000);
		$('.section6-slide').eq(b[4]).stop().animate({opacity:0},0).animate({opacity:0},1000);
	}
};
/*----------------------------------------------------------------------*/
//section6-Slide.js

	
	