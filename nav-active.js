(function AddActiveClassToMenu($){

	/* jQuery plugin to check if on Screen */

	$.fn.isOnScreen = function(){

		var win = $(window);

		var viewport = {
			top : win.scrollTop(),
			left : win.scrollLeft()
		};
		viewport.right = viewport.left + win.width();
		viewport.bottom = viewport.top + win.height();

		var bounds = this.offset();
		bounds.right = bounds.left + this.outerWidth();
		bounds.bottom = bounds.top + this.outerHeight();

		return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	};

	var $menu = $('#menu-main-menu');
	var $menuLi = $menu.find('li');

	$menu.find('a').click(function(){
		$menuLi.removeClass('active');
		$(this).parent().addClass('active');
	});

	var selectorStrings = ['.register','.eventschedule','.speakers-home','.visitors','#contact'];

	for (var i = 0; i < selectorStrings.length; i++) {
		$(selectorStrings[i]).addClass('pd-section');
	}

	$sections = $('.pd-section');

	$(window).scroll(function(){
		$sections.each(function(index){
			if ($(this).isOnScreen()) {
				$menuLi
					.removeClass('active')
					.eq(index+1).addClass('active');
			}
		});
	});

})(jQuery);