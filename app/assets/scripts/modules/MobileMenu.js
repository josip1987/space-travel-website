import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.toggleIcon = $(".toggle-menu");
		this.navigation = $(".main-navigation");
		this.heroText = $(".hero__text");
		this.events();
	}

	events() {
		this.toggleIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.navigation.toggleClass("main-navigation--expanded");
		this.toggleIcon.toggleClass("toggle-menu--close-x");
		this.heroText.toggleClass("hero__text--slide");
	}
}

export default MobileMenu;
