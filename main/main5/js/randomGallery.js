$(function(){ //randomGallery.js
		
	var winW = 0;
	var padd = 0;
	var li_W = 0;
	var li_H = [];
	var topT = [];
	var li_P = [];
	var n    = $('.gallery>li').length;
	
	windowResizeFn();
	setInterval(windowResizeFn, 100);
	
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function windowResizeFn(){
		winW = $(window).innerWidth();
		padd = 0.007882291*winW*2;
		li_W = (winW-padd) / 3;

		li_P = [	
					2800/1860, 
					2721/1860, 
					2656/1860, 
					2631/1860, 
					2533/1860, 
					2486/1860, 
					2426/1860,
						       
					1860/2800, 
					1636/2800, 
					1278/1860 
				];
				
		li_H[0] = li_W*li_P[0];
		li_H[1] = li_W*li_P[1];
		li_H[2] = li_W*li_P[2];
		li_H[3] = li_W*li_P[3];
		li_H[4] = li_W*li_P[4];
		li_H[5] = li_W*li_P[5];
		li_H[6] = li_W*li_P[6];
		li_H[7] = li_W*li_P[7];
		li_H[8] = li_W*li_P[8];
		li_H[9] = li_W*li_P[9];
	
		gralley();		
	}	

	function gralley(){
		if( winW > 770 ){
			
			$('.gallery').css({ height:topT[0]+topT[3]+topT[6]+topT[9]+topT[12]+topT[15]+topT[18] });		
			$('.gallery>li').css({ position:'absolute', width:li_W });
			
			$('.gallery>li').eq( 0).css({ height:li_H[0], left:(li_W*0), top:0, position:'relative' });
			$('.gallery>li').eq( 1).css({ height:li_H[0], left:(li_W*1), top:0 });
			$('.gallery>li').eq( 2).css({ height:li_H[0], left:(li_W*2), top:0 });
								
			$('.gallery>li').eq( 3).css({ height:li_H[7], left:(li_W*0), top:topT[0] });
			$('.gallery>li').eq( 4).css({ height:li_H[9], left:(li_W*1), top:topT[1] });
			$('.gallery>li').eq( 5).css({ height:li_H[0], left:(li_W*2), top:topT[2] });
								
			$('.gallery>li').eq( 6).css({ height:li_H[0], left:(li_W*0), top:topT[0]+topT[3] });
			$('.gallery>li').eq( 7).css({ height:li_H[7], left:(li_W*1), top:topT[1]+topT[4] });
			$('.gallery>li').eq( 8).css({ height:li_H[7], left:(li_W*2), top:topT[2]+topT[5] });
			
			$('.gallery>li').eq(9 ).css({ height:li_H[0], left:(li_W*0), top:topT[0]+topT[3]+topT[6] });
			$('.gallery>li').eq(10).css({ height:li_H[2], left:(li_W*1), top:topT[1]+topT[4]+topT[7] });
			$('.gallery>li').eq(11).css({ height:li_H[6], left:(li_W*2), top:topT[2]+topT[5]+topT[8] });
			
			$('.gallery>li').eq(12).css({ height:li_H[0], left:(li_W*0), top:topT[0]+topT[3]+topT[6]+topT[ 9] });
			$('.gallery>li').eq(13).css({ height:li_H[3], left:(li_W*1), top:topT[1]+topT[4]+topT[7]+topT[10] });
			$('.gallery>li').eq(14).css({ height:li_H[7], left:(li_W*2), top:topT[2]+topT[5]+topT[8]+topT[11] });
				                                                                     
			$('.gallery>li').eq(15).css({ height:li_H[7], left:(li_W*0), top:topT[0]+topT[3]+topT[6]+topT[ 9]+topT[12] });
			$('.gallery>li').eq(16).css({ height:li_H[0], left:(li_W*1), top:topT[1]+topT[4]+topT[7]+topT[10]+topT[13] });
			$('.gallery>li').eq(17).css({ height:li_H[8], left:(li_W*2), top:topT[2]+topT[5]+topT[8]+topT[11]+topT[14] });
				
			$('.gallery>li').eq(18).css({ height:li_H[7], left:(li_W*0), top:topT[0]+topT[3]+topT[6]+topT[ 9]+topT[12]+topT[15] });
			$('.gallery>li').eq(19).css({ height:li_H[7], left:(li_W*1), top:topT[1]+topT[4]+topT[7]+topT[10]+topT[13]+topT[16] });
			$('.gallery>li').eq(20).css({ height:li_H[0], left:(li_W*2), top:topT[2]+topT[5]+topT[8]+topT[11]+topT[14]+topT[17] });
			
			for(i=0;i<n;i++){
				topT[i] = $('.gallery>li').eq(i).find('div').innerHeight();
			}
			
		}
		else{
			$('.gallery').css({ height:'auto' });		
			$('.gallery>li').css({ position:'relative', width:'100%', height:'auto', top:0, left:0 });
		}
	}

}); //randomGallery.js


































