$(function(){ //section4-clos4-Slide.js
	section4Clos4SlideOBJ.init();
});

var s=[], a=[], b=[], setId = k = j = n = 0;

var section4Clos4SlideOBJ = {
	init: function(){
		section4Clos4SlideOBJ.sFn();
		section4Clos4SlideOBJ.formatFn();
		
		section4Clos4SlideOBJ.swipeEvent();
		section4Clos4SlideOBJ.arrowBtnEvent();
	},
	formatFn: function(){
		n = $('.sec4cols4Slide').length-1;
		s[0]=1;
	},
	swipeEvent: function(){
		$('.sec4cols4Slide-wrap').on({
			swipeleft: function(){
				section4Clos4SlideOBJ.nextSlideFn();
			},
			swiperight: function(){
				section4Clos4SlideOBJ.prevSlideFn();
			}
		});
	},
	arrowBtnEvent: function(){
		$('.section4-3-arrow-left-wrap').on({
			click: function(){
				section4Clos4SlideOBJ.prevSlideFn();
			}
		});
		$('.section4-3-arrow-right-wrap').on({
			click: function(){
				section4Clos4SlideOBJ.nextSlideFn();
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
					return section4Clos4SlideOBJ.nextSlide(0);
					break;
				}
				else{
					return section4Clos4SlideOBJ.nextSlide(i+1);
					break;
				}
			}
		}
	},
	prevSlideFn: function(){
		for(i=0;i<=n;i++){
			if(s[i]==1){
				if(i==0){
					return section4Clos4SlideOBJ.prevSlide(n);
					break;
				}
				else if(i!=0){
					return section4Clos4SlideOBJ.prevSlide(i-1);
					break;
				}
			}
		}
	},
	nextSlide: function(z){
		section4Clos4SlideOBJ.sFn();
		s[z]=1;
		
		if(z==0){
			a = [10,0,1,2,3,4,5,6,7,8,9];
		}
		else if(z==1){
			a = [0,1,2,3,4,5,6,7,8,9,10];
		}
		else if(z==2){
			a = [1,2,3,4,5,6,7,8,9,10,0];
		}
		else if(z==3){
			a = [2,3,4,5,6,7,8,9,10,0,1];
		}
		else if(z==4){
			a = [3,4,5,6,7,8,9,10,0,1,2];
		}
		else if(z==5){
			a = [4,5,6,7,8,9,10,0,1,2,3];
		}
		else if(z==6){
			a = [5,6,7,8,9,10,0,1,2,3,4]; 
		}
		else if(z==7){
			a = [6,7,8,9,10,0,1,2,3,4,5]; 
		}
		else if(z==8){
			a = [7,8,9,10,0,1,2,3,4,5,6]; 
		}
		else if(z==9){
			a = [8,9,10,0,1,2,3,4,5,6,7]; 
		}
		else if(z==10){
			a = [9,10,0,1,2,3,4,5,6,7,8]; 
		}
		for(i=0;i<=n;i++){
			$('.sec4cols4Slide').eq(a[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-1))+'%'},500);
		}
	},
	prevSlide: function(z){
		section4Clos4SlideOBJ.sFn();
		s[z]=1;
		
		if(z==10){
			b = [0,10,9,8,7,6,5,4,3,2,1]; 
		}
		else if(z==9){
			b = [10,9,8,7,6,5,4,3,2,1,0]; 
		}
		else if(z==8){
			b = [9,8,7,6,5,4,3,2,1,0,10]; 
		}
		else if(z==7){
			b = [8,7,6,5,4,3,2,1,0,10,9]; 
		}
		else if(z==6){
			b = [7,6,5,4,3,2,1,0,10,9,8]; 
		}
		else if(z==5){
			b = [6,5,4,3,2,1,0,10,9,8,7]; 
		}
		else if(z==4){
			b = [5,4,3,2,1,0,10,9,8,7,6]; 
		}
		else if(z==3){
			b = [4,3,2,1,0,10,9,8,7,6,5]; 
		}
		else if(z==2){
			b = [3,2,1,0,10,9,8,7,6,5,4]; 
		}
		else if(z==1){
			b = [2,1,0,10,9,8,7,6,5,4,3];
		}
		else if(z==0){
			b = [1,0,10,9,8,7,6,5,4,3,2];
		}
		j=1;
		k=2;
		for(i=0;i<=n;i++){
			j--;
			k--;
			$('.sec4cols4Slide').eq(b[i]).stop().animate({left:(100*j)+'%'},0).animate({left:(100*k)+'%'},500);
		}
	}
};
/*----------------------------------------------------------------------*/
//section4-clos4-Slide.js