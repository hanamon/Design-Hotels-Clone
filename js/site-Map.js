$(function(){ //site-Map.js
	siteMapObj.init();
}); 

var t = 0;

var siteMapObj = {
	init: function(){
		siteMapObj.elementFn();
		siteMapObj.setTimeoutFn();
		siteMapObj.windowResizeFn();
	},
	elementFn: function(){
		$('.sitemapBtn').not(this).prev().find('i').addClass('addFooterToggle');
	},
	setTimeoutFn: function(){
		setTimeout(siteMapObj.winResize, 100);
	},
	windowResizeFn: function(){
		$(window).resize(function(){
			siteMapObj.winResize();
		});
	},
	winResize: function(){
		$('.sitemapBtn').not(this).prev().find('i').addClass('addFooterToggle');
		if( $(window).innerWidth() > 1024 ){
			$('.footer-sitemap-linkText').stop().slideDown(0);
			$('.sitemapBtn').off();
			t = 0;
		}
		else if( $(window).innerWidth() <= 1024 ){
			$('.footer-sitemap-linkText').stop().slideUp(0);
			if( t == 0 ){
				t = 1;
				$('.sitemapBtn').on({
					click: function(){
						$('.footer-sitemap-linkText').stop().slideUp(300);
						$(this).parent().find('.footer-sitemap-linkText').stop().slideToggle(300);
					
						$('.sitemapBtn').not(this).removeClass('addSitemapBtn');
						$(this).toggleClass('addSitemapBtn');
					}
				});
			}
		}
	}
};
/*-------------------------------------------------------------------------------------*/	
//site-Map.js



























