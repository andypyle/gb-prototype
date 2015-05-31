$(document).ready(function(){
	var scrollBtn = $('.scroller');

	scrollBtn.click(function(e){
		e.preventDefault();
		var getHref = $($(this).attr('href'));
		getHref.velocity("scroll", 1100);
	})
});