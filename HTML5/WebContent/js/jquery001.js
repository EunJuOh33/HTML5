$(function() {
	/* show, hide 예제
	$(".menu").hover(function() {	//마우스를 올렸을 때 동작한다.
		$(this).find(".sub").show();
		$(this).find("a:first").addClass("on");
	}, function() {
		$(this).find(".sub").hide();
		$(this).find("a:first").removeClass("on");
	});
	*/
	
	$(".menu").hover(function() {
		$(this).find(".sub").slideDown(300);
		$(this).find("a:first").addClass("on");
	}, function() {
		$(this).find(".sub").stop(true).slideUp(300);
		$(this).find("a:first").removeClass("on");
	});
});