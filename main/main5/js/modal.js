$(function(){ //modal.js
	
	var winW = winH = boxW = boxH = imgW = imgH = imgTop = 0;
	var imgTitleFront = imgTitleRear = searchPos1 = searchPos2 ='';
	var n = $('.galleryBtn>img').length-1;
	var fileNum = imgName = '';
	var a = []; 				//이미지 파일명
	var b = []; 				//이미지 타이틀
	var imsi = temp = ''; 		//임시기억장소
	var cnt = 0; 				//이전,다음 카운트 변수
		
		windowResizeFn();
		setInterval( windowResizeFn, 0 );
	
	$(window).resize(function(){
		windowResizeFn();
	});
	
	function windowResizeFn(){
		winW = $(window).innerWidth();
		winH = $(window).innerHeight();
		boxW = $('.modal-img-box').innerWidth();
		boxH = $('.modal-img-box').innerHeight();
		imgW = $('.modal-img-box>img').innerWidth();
		imgH = $('.modal-img-box>img').innerHeight();
		imgTop = (winH-imgH)/2.5;
		$('.modal-img-box').css({top:imgTop});
		if( boxW < imgW ){
			$('.modal-img-box>img').css({width:'100%', height:'auto'});
		}
		else if( imgH > boxH ){
			$('.modal-img-box>img').css({width:'auto', height:'100%'});
		}
	}
	
	/* 
		<파일번호만 뽑기>
		 - 나중에 숫자 비교 후 크고작음 정렬 비교
		<정렬 알고리즘>
		 - Assendding  [어센딩] :오름차순( 작은것 ~ 큰것  ) sign : >
		 - Dessendding [디센딩] :내림차순( 큰것  ~ 작은것 ) sign : <
		<삼각구조 선택정렬 셀렉트설트 임시기억장치> 
		 - imsi = a[0];
		 - a[0] = a[1];
		 - a[1] = imsi;
	*/
	
	for(i=0;i<=n;i++){
		a[i] = $('.galleryBtn>img').eq(i).attr('src');
		b[i] = $('.galleryBtn>img').eq(i).attr('title');
	}
	
	for(i=0;i<=n-1;i++){
		for(j=i+1;j<=n;j++){
			if( parseInt(a[i].slice(-6, -4)) > parseInt(a[j].slice(-6, -4)) ){
				imsi = a[i];
				a[i] = a[j];
				a[j] = imsi;
				
				temp = b[i];
				b[i] = b[j];
				b[j] = temp;
			}
		}
	}
	
	$('.galleryBtn').on({
		click: function(){
			searchPos1 	  = $(this).find('img').attr('title').search('in');
			searchPos2 	  = $(this).find('img').attr('title').search(' - Gallery');
			
			imgTitleFront = $(this).find('img').attr('title').slice( 0, searchPos1 );
			imgTitleRear  = $(this).find('img').attr('title').slice( searchPos1, searchPos2 );
							
							$('.modal-text-front').text( imgTitleFront );
							$('.modal-text-Rear' ).text( imgTitleRear  );
			
			imgName       = $(this).find('img').attr( 'src' );
							
							$('.modal-img-box>img').attr( 'src', imgName );
			
							$('html').addClass('addScroll');
							$('#modal-window').show();
			
			//배열(21개의 배열 0~20)에 기억된 이미지와 비교 배열 번호를 찾기
			for(i=0;i<=n;i++){
				if( parseInt(imgName.slice(-6, -4)) == a[i].slice(-6, -4) ){
					 cnt = i; 
					 break;
				}
			}
		}
	});
	
	$('.modal-nextBtn-wrap').on({
		click: function(){
			cnt++;
			if( cnt > 20 ){
				cnt = 0;
			}
			$('.modal-img-box>img').attr('src', a[cnt]);
			
			searchPos1    = b[cnt].search('in');
			searchPos2    = b[cnt].search(' - Gallery');
			
			imgTitleFront = b[cnt].slice( 0, searchPos1 );
			imgTitleRear  = b[cnt].slice( searchPos1, searchPos2 );
			
			$('.modal-text-front').text( imgTitleFront );
			$('.modal-text-Rear' ).text( imgTitleRear  );
		}
	});
	
	$('.modal-prevBtn-wrap').on({
		click: function(){
			cnt--;
			if( cnt < 0 ){
				cnt = 20;
			}
			$('.modal-img-box>img').attr('src', a[cnt]);
			
			searchPos1    = b[cnt].search('in');
			searchPos2    = b[cnt].search(' - Gallery');
			
			imgTitleFront = b[cnt].slice( 0, searchPos1 );
			imgTitleRear  = b[cnt].slice( searchPos1, searchPos2 );
			
			$('.modal-text-front').text( imgTitleFront );
			$('.modal-text-Rear' ).text( imgTitleRear  );
		}
	});
	
	$('.modal-closeBtn').on({
		click: function(){
			$('html').removeClass('addScroll');
			$('#modal-window').hide();
		}
	});
	
}); //modal.js

























