$(function(){ //section1-Video-Control.js
	
	var t = 0;
	
		$('#mainVideo').get(0).muted = true; //소리 꺼진 상태
		
/*----------------------------------------------------------------------------------*/
	//7. 다음버튼 클릭시 섹션2로 부드럽게 이동
	$('.section1-next-btn').on({
		click: function(){
			if( $(window).innerWidth() > 1024 ){
				$('html,body').animate({ scrollTop : $('#section2').offset().top }, 600);
			}
			else{
				$('html,body').animate({ scrollTop : $('#section2').offset().top-67 }, 600);
			}
		}
	});
/*----------------------------------------------------------------------------------*/		
	//3. 비디오 끝나고(TIME) 화면 가운데 비디오 앤드 플레이 박스 나타남( SNS 버튼 / 재실행 버튼 )
	setInterval(timeCheckFn, 100);
	
	function timeCheckFn(){
		currTime = $('#mainVideo').get(0).currentTime; //비디오 진행시간 확인가능( ==현재시간 )
		if( currTime >= 37 && t == 0 ){
			$('.video-end-play-wrap').stop().show(0);
			$('.video-end-play-wrap>div').stop().animate({opacity:0},0).animate({opacity:1},5000);
			$('.section1-bottom-button-wrap').stop().show(0);
			$('.fa-equals').stop().hide(0);
			$('.fa-play'  ).stop().show(0).css({transform:'rotate(0)'});
			t=1;
		}
	}
/*----------------------------------------------------------------------------------*/	
	//4. 37초 이후 플레이버튼 click 이벤트
	$('.watchBtn').on({
		click: function(){
			$('.video-end-play-wrap').stop().hide(0);
			$('.section1-bottom-button-wrap').stop().hide(0);
			$('#mainVideo').get(0).play();
			$('.fa-equals').stop().show(0);
			$('.fa-play'  ).stop().hide(0).css({transform:'rotate(0)'});
			t=0;
		}
	});
/*----------------------------------------------------------------------------------*/
	//5. 쉐어박스 모달창 닫기버튼
	$('.shareCloseBtn').on({
		click: function(){
			$('.section1-share-wrap').stop().hide(0);
		}
	});
/*----------------------------------------------------------------------------------*/	
	//6. 쉐어박스 모달창 열기 이벤트
	$('.shareBtn').on({
		click: function(){
			$('.section1-share-wrap').stop().show(0);
		}
	});
/*----------------------------------------------------------------------------------*/
	//1. 플레이 일시정지 버튼 클릭시 메인비디오 일시정지 시킨다.
	$('.playPause').on({
		click: function(){
			if( t === 0 ){
				$('#mainVideo').get(0).pause();
				$(this).addClass('addVideo');
				t=1;
			}
			else if( t === 1 ){
				$('#mainVideo').get(0).play();
				$(this).removeClass('addVideo');
				t=0;
			}
		}
	});
/*----------------------------------------------------------------------------------*/
	//2. 오디오 뮤트 버튼 클릭시 오디오를 뮤트 시킨다.
	$('.volumeOnOff').on({
		click: function(){
			if( $('#mainVideo').get(0).muted === true ){ //소리가 꺼진 상태
				$('#mainVideo').get(0).muted = false;	 //소리를 켜기	
				$(this).addClass('addVideo');
			}
			else if( $('#mainVideo').get(0).muted === false ){
				$('#mainVideo').get(0).muted = true;
				$(this).removeClass('addVideo');
			}
		}
	});
/*----------------------------------------------------------------------------------*/
}); //section1-Video-Control.js