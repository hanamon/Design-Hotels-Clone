$(function(){ //section4-clos3-Slide.js
	section4Clos3SlideOBJ.init();
});

var s=[], a=[], b=[], j = k = 0, n = 0;

var section4Clos3SlideOBJ = {
	init: function(){
		section4Clos3SlideOBJ.sFn();
		section4Clos3SlideOBJ.formatFn();
		
		section4Clos3SlideOBJ.swipeEvent();
		section4Clos3SlideOBJ.arrowBtnEvent();
	},
	formatFn: function(){
		n = $('.sec4cols3Slide').length-1;
		s[0]=1;
	},
	swipeEvent: function(){
		$('.sec4cols3Slide-wrap').on({
			swipeleft: function(){
				section4Clos3SlideOBJ.nextSlideFn();
			},
			swiperight: function(){
				section4Clos3SlideOBJ.prevSlideFn();
			}
		});
	},
	arrowBtnEvent: function(){
		$('.section4-2-arrow-right-wrap').on({
			click: function(){
				section4Clos3SlideOBJ.nextSlideFn();
			}
		});
		$('.section4-2-arrow-left-wrap').on({
			click: function(){
				section4Clos3SlideOBJ.prevSlideFn();
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
					return section4Clos3SlideOBJ.nextSlide(0);
					break;
				}
				else if(i!=n){
					return section4Clos3SlideOBJ.nextSlide(i+1);
					break;
				}
			}
		}
	},
	prevSlideFn: function(){
		for(i=0;i<=n;i++){
			if(s[i]==1){
				if(i==0){
					return section4Clos3SlideOBJ.prevSlide(n);
					break;
				}
				else if(i!=0){
					return section4Clos3SlideOBJ.prevSlide(i-1);
					break;
				}
			}
		}
	},
	nextSlide: function(z){
		section4Clos3SlideOBJ.sFn();
		s[z]=1;
		
		if(z==0){
			a = [8,0,1,2,3,4,5,6,7];
		}
		else if(z==1){
			a = [0,1,2,3,4,5,6,7,8];
		}
		else if(z==2){
			a = [1,2,3,4,5,6,7,8,0];
		}
		else if(z==3){
			a = [2,3,4,5,6,7,8,0,1];
		}
		else if(z==4){
			a = [3,4,5,6,7,8,0,1,2];
		}
		else if(z==5){
			a = [4,5,6,7,8,0,1,2,3];
		}
		else if(z==6){
			a = [5,6,7,8,0,1,2,3,4];
		}
		else if(z==7){
			a = [6,7,8,0,1,2,3,4,5];
		}
		else if(z==8){
			a = [7,8,0,1,2,3,4,5,6];
		}
		for(i=0;i<=n;i++){
			$('.sec4cols3Slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-1))+'%'},500);
		}
	},
	prevSlide: function(z){
		section4Clos3SlideOBJ.sFn();
		s[z]=1;
		
		if(z==8){
			b = [0,8,7,6,5,4,3,2,1];
		}
		else if(z==7){
			b = [8,7,6,5,4,3,2,1,0];
		}
		else if(z==6){
			b = [7,6,5,4,3,2,1,0,8];
		}
		else if(z==5){
			b = [6,5,4,3,2,1,0,8,7];
		}
		else if(z==4){
			b = [5,4,3,2,1,0,8,7,6];
		}
		else if(z==3){
			b = [4,3,2,1,0,8,7,6,5];
		}
		else if(z==2){
			b = [3,2,1,0,8,7,6,5,4];
		}
		else if(z==1){
			b = [2,1,0,8,7,6,5,4,3];
		}
		else if(z==0){
			b = [1,0,8,7,6,5,4,3,2];
		}
		j=1;
		k=2;
		for(i=0;i<=n;i++){
			j--;
			k--;
			$('.sec4cols3Slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},500);
		}
	}
};
/*----------------------------------------------------------------------*/
//section4-clos3-Slide.js