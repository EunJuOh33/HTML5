$(function() {
	/* 한 방향으로만 이동하는 배너 */
	let bannerAction = setInterval(move, 3000);
	
	$("section:first").hover(function() {
		clearInterval(bannerAction);
	}, function() {
		bannerAction = setInterval(move, 3000);
	});
		
	function move() {
		if($(".container").queue().length > 0) {	
			return false;
		}
		$(".container").animate({"left" : "-640px"}, 1000, function() {
		// 위의 줄만 적으면 딱 한 번만 옆으로 넘어간다.	
			$(".container > div:first").appendTo(".container");
			$(".container").css("left", "0");	// 배너2로 이동한 순간 바로 배너1로 바뀐다.
		});
	}
	
	function move2() {
		if($(".container").queue().length > 0) {	
			return false;
		}
		$(".container > div:last").prependTo(".container");
		$(".container").css("left", "-640px");
		$(".container").animate({"left": "0"}, 1000);
	}
	
	// 한방향 이동 배너 버튼
	$("button:first").click(function() {
		if($(".container").queue().length > 0) {	
			return false;
		}
		$(".container > div:last").prependTo(".container");
		$(".container").css("left", "-640px");
		$(".container").animate({"left": "0"}, 1000);	//객체는 콜론(:)을 사용한다.
		console.log($(".container").queue().length);
		clearInteval(bannerAction);
		bannerAction = setInterval(move, 3000);
	});
	
	$("button:last").click(function() {
		move();
		clearInterval(bannerAction);
		bannerAction = setInterval(move, 3000);
	});
	
	
	
	/* 마우스 휠 이벤트 */
	$("html, body").on("DOMMouseScroll", function(e) {
		if(e.originalEvent.wheelDelta == 120 || e.originalEvent.detail == -3) {	
			//마우스휠을 내렸을 때 120이거나 originalEvent가 -3일 경우
			console.log("wheel up");
		} else if(e.originalEvent.wheelDelta == -120) {
			console.log("wheel down");
		}
	});
});