$(function() {
	$("ul > li").click(function() {		// li 태그를 클릭했을 때 실행
		$("ul > li").removeClass("on");
		$(this).addClass("on");
		let index = $(this).index();
		console.log(index);
		$(".contentsBox > div").hide();
		$(".contentsBox > div").eq(index).show();
	});
});