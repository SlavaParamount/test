var $menu = $('.click-menu');

$('.platform-menu ').click(function(e){
	var $menuSelect = $(e.target);
	$menuSelect.toggleClass('platform-menu__clicked');
	$menu.toggleClass('hidden');
	$menuSelect.hasClass("platform-menu__clicked") ? $menu.appendTo($menuSelect.parent()) : $menu.detach();
})
