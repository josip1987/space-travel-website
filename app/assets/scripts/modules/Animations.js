import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Animations {
	constructor(elements, offset) {
		this.animatedItems = elements;
		this.offsetPercentage = offset;
		this.hideOnInit();
		this.createWaypoints();
	}

	hideOnInit() {
		this.animatedItems.addClass("reveal");
	}

	createWaypoints() {
		var that = this;
		this.animatedItems.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal--is-visible");
				},

				offset: that.offsetPercentage
			});
		});
	}
}

export default Animations;
