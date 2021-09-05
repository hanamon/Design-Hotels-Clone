$(function(){ //section1-Risize.js
	
	var winW = winH = vidW = vidH = marL = 0;
/*-------------------------------------------------------------------------------------------------*/	
	
	/*
		$('.introVideo').get(0).play();	
		처음 화면에서 모바일이 세로인(0도)경우(포트레이트), 비디오 높이가 창 높이보다 작게 나타남.
		console.log( window.orientation );
		모바일 방향  0도 또는 180도 = 세로방향 (Portrait)
		모바일 방향 90도 또는 -90도 = 가로방향 (Landscape)
	*/
	
	winW = $(window).innerWidth();
	winH = $(window).innerHeight();
	vidW = $('#mainVideo').innerWidth();
	vidH = $('#mainVideo').innerHeight();
	marL = (winW - vidW)/2;
	
	if( window.orientation == 0 || window.orientation == 180 ){
		$('#mainVideo').css({ left:marL, width:'auto', height:winH });
	}
	else{ //90 -90
		$('#mainVideo').css({ width:winW, height:'auto' });
	}
/*-------------------------------------------------------------------------------------------------*/	
	setInterval(resizeFn, 100);
	function resizeFn(){
		winW = $(window).innerWidth();
		winH = $(window).innerHeight();
		vidW = $('#mainVideo').innerWidth();
		vidH = $('#mainVideo').innerHeight();
		marL = (winW - vidW)/2;
		
		//창너비 보다 비디오 너비가 큰 경우
		if( vidW > winW ){
			$('#mainVideo').css({ left:marL, width:'auto', height:winH });
			marL=0;
		}
		// 창너비 보다 작거나 같은 경우(양 옆에 공백이 생기기 때문) : 비디오 너비를 창너비로 설정, 비디오의 높이를 auto로 설정.
		else if( vidW <= winW ){
			$('#mainVideo').css({ left:0, width:'100%', height:'auto'});
			if( vidH < winH ){
				$('#mainVideo').css({ left:marL, width:'auto', height:winH });
			}
		}
		$('#section1>div').css({ height:winH });
	}
/*-------------------------------------------------------------------------------------------------*/		
	
}); //section1-Risize.js