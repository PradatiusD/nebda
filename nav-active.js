(function AddActiveClassToMenu($){

	var $menu = $('#menu-main-menu');
	var $menuLi = $menu.find('li');

	$menu.find('a').click(function(){
		$menuLi.removeClass('active');
		$(this).parent().addClass('active');
	});

	var selectorStrings = ['.register','.eventschedule','.speakers-home','.visitors','#contact'];

	function activeWhenInView(iterator) {
		$(selectorStrings[iterator]).waypoint(function(){
			$menuLi
				.removeClass('active')
				.eq(iterator+1).addClass('active');
		});
	}

	for (var i = 0; i < selectorStrings.length; i++) {
		activeWhenInView(i);
	}
	
})(jQuery);