$(function() {
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
});