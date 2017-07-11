import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Animations {
	constructor() {
		this.animatedItems = $(".section-features__item");
		this.hideOnInit();
		this.createWaypoints();
	}

	hideOnInit() {
		this.animatedItems.addClass("reveal");
	}

	createWaypoints() {
		this.animatedItems.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal--is-visible");
				},

				offset: "75%"
			});
		});
	}
}

export default Animations;
