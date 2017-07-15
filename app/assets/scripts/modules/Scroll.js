import $ from 'jquery';

class ScrollTop {
	constructor() {
		this.scrollUp = $("#return-to-top");
		this.events();
	}

	events() {
		this.scrollUp.click(this.returnToTop.bind(this));
	}

	returnToTop() {
		$('body,html').animate({
	       scrollTop: 0                   
	    }, 500);
	}
}

$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {        
        $('#return-to-top').fadeIn();   
    } else {
        $('#return-to-top').hide();  
    }
});

export default ScrollTop;