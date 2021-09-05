$(function(){ //datepicker.js
	datrpickerOBJ.init();
});

var datrpickerOBJ = {
	init: function(){
		datrpickerOBJ.clickEvent();
		datrpickerOBJ.datepickerEvent();
	},
	clickEvent: function(){
		/* aside 박스 클릭이벤트 */
		$('.adultsChildrenBtn').on({
			click: function(){
				$('.checkInBtn').find('i').removeClass('addSideIcon');
				$('.checkOutBtn').find('i').removeClass('addSideIcon');
				$('.checkInCalender-wrap').stop().hide(0);
				$('.checkOutCalender-wrap').stop().hide(0);
				$('.adultsChildren-wrap').stop().slideToggle(0);
			}
		});
		// /* checkInBtn 업다운 클릭이벤트 */
		$('.checkInBtn').on({
			click: function(){
				$('.checkOutBtn').find('i').removeClass('addSideIcon');
				$(this).find('i').toggleClass('addSideIcon');
				$('.adultsChildren-wrap').stop().hide(0);
				$('.checkOutCalender-wrap').stop().hide(0);
				$('.checkInCalender-wrap').stop().slideToggle(0);
			}
		});
		/* checkOutBtn 업다운 클릭이벤트 */
		$('.checkOutBtn').on({
			click: function(){
				$('.checkInBtn').find('i').removeClass('addSideIcon');
				$(this).find('i').toggleClass('addSideIcon');
				$('.adultsChildren-wrap').stop().hide(0);
				$('.checkInCalender-wrap').stop().hide(0);
				$('.checkOutCalender-wrap').stop().slideToggle(0);
			}
		});
	},
	datepickerEvent: function(){
		$('#datepicker1').datepicker({
			inline: true,
			//nextText: '&rarr;',
			//prevText: '&larr;',
			showOtherMonths: true,
			//dateFormat: 'dd MM yy',
			dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			//showOn: "button",
			//buttonImage: "img/calendar-blue.png",
			//buttonImageOnly: true,
		});
		
		$('#datepicker2').datepicker({
			inline: true,
			//nextText: '&rarr;',
			//prevText: '&larr;',
			showOtherMonths: true,
			//dateFormat: 'dd MM yy',
			dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			//showOn: "button",
			//buttonImage: "img/calendar-blue.png",
			//buttonImageOnly: true,
		});
		
		$('#datepicker3').datepicker({
			inline: true,
			//nextText: '&rarr;',
			//prevText: '&larr;',
			showOtherMonths: true,
			//dateFormat: 'dd MM yy',
			dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			//showOn: "button",
			//buttonImage: "img/calendar-blue.png",
			//buttonImageOnly: true,
		});
		
		$('#datepicker4').datepicker({
			inline: true,
			//nextText: '&rarr;',
			//prevText: '&larr;',
			showOtherMonths: true,
			//dateFormat: 'dd MM yy',
			dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			//showOn: "button",
			//buttonImage: "img/calendar-blue.png",
			//buttonImageOnly: true,
		});
	}
};
/*----------------------------------------------------------------------*/
//datepicker.js