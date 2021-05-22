$(function(){ //form.js
	formOBJ.init();
}); 

var formOBJ = {
	init: function(){
		formOBJ.clickEvent();
	},
	clickEvent: function(){
		$('.checkBtnLabel').on({
			click: function(){
				$('.checkBtn').toggleClass('addCheckBtn');
			}
		});
	}
};
/*----------------------------------------------------------------------*/
//form.js