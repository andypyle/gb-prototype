$(document).ready(function(){
	var comingsoon = $('.bwg-coming-soon');
	var scrollBtn = $('.scroller');
	var navigation = $('#nav');
	var mobileToggle = $('.mob-nav');

	comingsoon.hide();
	comingsoon.velocity("fadeIn", { duration: 3500 });


	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		if(wScroll >= (navigation.offset().top - ($(this).height()))){
			
			navigation.css({
				'opacity': wScroll * 0.0025,
				'position':'fixed',
				'z-index':100,
				'top':0,
				'background-color':'black'
			});
			
			navigation.height(wScroll / 5);
			if(navigation.height() >= $('.brandname').outerHeight()){
				navigation.height($('.brandname').outerHeight());
				navigation.css({
					
				});
			}
		}
	});	

	scrollBtn.click(function(e){
		e.preventDefault();
		var getHref = $($(this).attr('href'));
		getHref.velocity("scroll", {
			duration: 1100,
			offset: -($('.brandname').outerHeight() / 10)});
	});

	mobileToggle.click(function(e){
		e.preventDefault();
		$('.navigation').stop().slideToggle();
	});
});