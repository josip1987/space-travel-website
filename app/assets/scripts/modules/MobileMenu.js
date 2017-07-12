import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.toggleIcon = $(".toggle-menu");
		this.navigation = $(".main-navigation");
		this.events();
	}

	events() {
		this.toggleIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.navigation.toggleClass("main-navigation--expanded");
		this.toggleIcon.toggleClass("toggle-menu--close-x");
	}
}

export default MobileMenu;
