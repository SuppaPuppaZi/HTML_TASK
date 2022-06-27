(function () {
	const burger_menu = document.querySelector(".burger-menu");
	const menu_nav = document.querySelector(".menu-nav");
	burger_menu.addEventListener("click", () => {
		burger_menu.classList.toggle("burger-menu-active");
		menu_nav.classList.toggle("menu-nav-active");
});
}());