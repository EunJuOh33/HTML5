$(function() {
	// 컨테이너의 위치를 이용하는 배너 - 마지막 배너에서 오른쪽으로 이동해 배너1로 돌아온다.
	/*
	let bannerAction = setInterval(move, 5000);
	let position = 0;
	
	$("section:first").hover(function() {
		if(bannerAction != null) clearInterval(bannerAction);
	}, function() {
		bannerAction = setInterval(move, 3000);
	});
	
	function move() {
		position = ++position % 3;
		$(".container").animate({"left" : -640 * position + "px"}, 1000);
	}
	
	// 컨테이너 위치 배너 버튼
	$("button:first").click(function() {
		position = --position % 3;
		if(position < 0) position = 2;
		$(".container").stop(true).animate({"left" : -640 * position + "px"}, 1000);
		clearInterval(bannerAction);
		bannerAction = setInterval(move, 3000);
	});
	
	$("button:last").click(function() {
		move();
		clearInterval(bannerAction);
		bannerAction = setInterval(move, 3000);
	});
	*/
	
	
	
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
});