$(function(){ //content.js
	
	$('.aCover-wrap>a').on({
		mouseenter: function(){
			$(this).parent().prev().css({color:'#000', transition:'all 0.3s'});
			$(this).parent().prev().find('img').css({opacity:0.7, transition:'all 0.3s'});
			$(this).parent().prev().children('i').css({display:'block'});
			$(this).parent().prev().find('.text-daco').css({color:'#000', transition:'all 0.3s'});
		},
		mouseleave: function(){
			$(this).parent().prev().css({color:'#636363', transition:'all 0.3s'});
			$(this).parent().prev().find('img').css({opacity:1, transition:'all 0.3s'});
			$(this).parent().prev().children('i').css({display:'none'});
			$(this).parent().prev().find('.text-daco').css({color:'#999', transition:'all 0.3s'});
		},
		focusin: function(){
			$(this).parent().prev().css({color:'#000', transition:'all 0.3s'});
			$(this).parent().prev().find('img').css({opacity:0.7, transition:'all 0.3s'});
			$(this).parent().prev().children('i').css({display:'block'});
			$(this).parent().prev().find('.text-daco').css({color:'#000', transition:'all 0.3s'});
		},
		focusout: function(){
			$(this).parent().prev().css({color:'#636363', transition:'all 0.3s'});
			$(this).parent().prev().find('img').css({opacity:1, transition:'all 0.3s'});
			$(this).parent().prev().children('i').css({display:'none'});
			$(this).parent().prev().find('.text-daco').css({color:'#999', transition:'all 0.3s'});
		}
	});
	
}); //content.js