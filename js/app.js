$(document).ready(function(){
	var comingsoon = $('.bwg-coming-soon');
	var scrollBtn = $('.scroller');
	var navigation = $('#nav');

	//navigation.hide();
	comingsoon.hide();
	comingsoon.velocity("fadeIn", { duration: 3500 });


	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		if(wScroll >= (navigation.offset().top - ($(this).height()))){
			
			navigation.css({
				'opacity': wScroll * 0.0015
			});
			
			navigation.height(wScroll / 4);
			if(navigation.height() >= $('.brandname').outerHeight()){
				navigation.height($('.brandname').outerHeight());
			}
		}
		//console.log($('main').position().top);
	});
	

	

	scrollBtn.click(function(e){
		e.preventDefault();
		var getHref = $($(this).attr('href'));
		getHref.velocity("scroll", 1100);
	});
});