var $menu = $('.click-menu');
$('.platform-menu ').click(function(e){
	$('.platform-menu').toggleClass('.platform-menu__clicked');
	$menu.toggleClass('hidden')
	!$menu.hasClass("hidden") ? $menu.appendTo($(e.target).parent()) : $menu.detach();
})