$(function(){ //headerFixed-aside.js
	headerFixedAsideOBJ.init();
});

var adultCnt = childCnt = 0, cAgeCnt = [];

var headerFixedAsideOBJ = {
	init: function(){
		headerFixedAsideOBJ.formatFn();
		headerFixedAsideOBJ.clickEvent();
	},
	formatFn: function(){
		adultCnt = 2;
		childCnt = 0;
		cAgeCnt  = [];
		for(i=0;i<=7;i++){
			cAgeCnt[i] = 0;
		}
		for(i=2;i<=9;i++){
			$('.adultsChildren-wrap>ul>li').eq(i).hide();
		}
	},
	clickEvent: function(){
		/* 1. adult 업버튼 클릭이벤트 */
		$('.adultUpBtn').on({
			click: function(){
				adultCnt++;
				if( adultCnt > 8 ){
					adultCnt = 8;
				}
				$('.adult-number').text( adultCnt );
			}
		});
		/* 2. adult 다운버튼 클릭이벤트 */
		$('.adultDownBtn').on({
			click: function(){
				adultCnt--;
				if( adultCnt < 1 ){
					adultCnt = 1;
				}
				$('.adult-number').text( adultCnt );
			}
		});
		/* 3. children 업버튼 클릭이벤트 */
		$('.childrenUpBtn').on({
			click: function(){
				childCnt++;
				if( childCnt > 8 ){
					childCnt = 8;
				}
				else{
					$('.adultsChildren-wrap>ul>li').eq( (childCnt+1) ).show();
				}
				$('.children-number').text( childCnt );
			}
		});
		/* 4. children 다운버튼 클릭이벤트 */
		$('.childrenDownBtn').on({
			click: function(){
				childCnt--;
				if( childCnt < 0 ){
					childCnt = 0;
				}
				else{
					$('.adultsChildren-wrap>ul>li').eq( (childCnt+2) ).hide();
				}
				$('.children-number').text( childCnt );
				for(i=0;i<=7;i++){
					if( childCnt == i ){
						cAgeCnt[i]=0;
						$('.childrenAge-number').eq(i).text( cAgeCnt[i] );
					}
				}
			}
		});
		/* 5. childrenAge 업버튼 클릭이벤트 */
		$('.childrenAgeUpBtn').each(function(index){
			$(this).on({
				click: function(){
					cAgeCnt[index]++;
					if( cAgeCnt[index] > 17 ){
						cAgeCnt[index] = 17;
					}
					$('.childrenAge-number').eq(index).text( cAgeCnt[index] );
				}
			});
		});
		/* 6. childrenAge 다운버튼 클릭이벤트 */
		$('.childrenAgeDownBtn').each(function(index){
			$(this).on({
				click: function(){
					cAgeCnt[index]--;
					if( cAgeCnt[index] < 0 ){
						cAgeCnt[index] = 0;
					}
					$('.childrenAge-number').eq(index).text( cAgeCnt[index] );
				}
			});
		});
	}
};
/*----------------------------------------------------------------------*/
//headerFixed-aside.js