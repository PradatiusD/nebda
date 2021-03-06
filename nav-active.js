(function AddActiveClassToMenu($){

	var $menu = $('#menu-main-menu');
	var $menuLi = $menu.find('li');

	$menu.find('a').click(function(e){

		var $this = $(this);

		$menuLi.removeClass('active');
		$this.parent().addClass('active');

		// Fix first link and make it scroll to top
		if ($this.parent().index() === 0) {
			e.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, "slow");
		}
	});

	var selectorStrings = ['#page','#register','.eventschedule','#accomodations','.visitors','#contact'];

	function activeWhenInView(iterator) {
		$(selectorStrings[iterator]).waypoint(function(){
			$menuLi
				.removeClass('active')
				.eq(iterator).addClass('active');
			}
		);
	}

	for (var i = 0; i < selectorStrings.length; i++) {
		activeWhenInView(i);
	}

})(jQuery);