import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
	constructor() {
		this.nav = $('nav');
		this.navTrigger = $(".section-features");
		this.createNavWaypoint();
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

			offset: "50%"
		});
	}
}

export default StickyHeader;
