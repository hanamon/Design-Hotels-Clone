$(function(){ //nav-Mobile.js
	mobileNavObj.init();
});

var mobileNavObj = {
	init: function(){ 
		setTimeout( mobileNavObj.winResize, 100 ); 
		$(window).resize(function(){ 		
			mobileNavObj.winResize();
		});
		mobileNavObj.buttonEvent();
	},
	winResize: function(){
		if( $(window).innerWidth() > 1024 ){
			$('#mobile-menuBox').stop().animate({left:'-100%'},0);
			$('.mobile-menuBar').stop().animate({left:0},0);
		}
	},
	buttonEvent: function(){
		$('.appBarBtn').on({ 
			click: function(){
				$('#mobile-menuBox').css({display:'block'});
				$('#mobile-menuBox').stop().animate({left:'-100%'},0).animate({left:0},500);
				$('.mobile-menuBar').stop().animate({left:0},0).animate({left:'100%'},500);
			}
		});
		$('.mobile-menuBox-closeBtn').on({ 
			click: function(){
				$('#mobile-menuBox').stop().animate({left:0},0).animate({left:'-100%'},500);
				$('.mobile-menuBar').stop().animate({left:'100%'},0).animate({left:0},500,function(){
					$('#mobile-menuBox').css({display:'none'});
				});
			}
		});
	}
};
/*----------------------------------------------------------------------------------------*/
//nav-Mobile.js




















