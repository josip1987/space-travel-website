import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyLoadedImgs = $(".lazyload");
		this.nav = $('nav');
		this.navTrigger = $(".section-features");
		this.createNavWaypoint();
		this.pageSections = $(".section");
		this.headerLinks = $(".main-navigation a");
		this.actionLinks = $(".action");
		this.createPageSectionWaypoints();	
		this.addSmoothScroll();
		this.refreshWaypointLazyLoading();
	}

	refreshWaypointLazyLoading() {
		this.lazyLoadedImgs.on(function() {
			Waypoint.refreshAll();
		});
	}

	addSmoothScroll() {
		this.headerLinks.smoothScroll();
		this.actionLinks.smoothScroll();
	}

	createNavWaypoint() {
		var that = this;
		new Waypoint({
			element: this.navTrigger[0], 
			handler: function(direction) {
				if(direction === "down") {
					that.nav.addClass("sticky");
				} else {
					that.nav.removeClass("sticky");
				}
			},

			offset: "87%"
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSections.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction === "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction === "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					}
				},
				offset: "-40%"
			});
		});
	}
}

export default StickyHeader;
