import StickyHeader from './modules/StickyHeader';
import Animations from './modules/Animations';
import MobileMenu from './modules/MobileMenu';
import Scroll from './modules/Scroll';
import $ from 'jquery';

var stickyHeader = new StickyHeader();
new Animations($(".section-features__item"), "87%");
new Animations($(".how-it-works__box"), "60%");
new Animations($(".transfers__image"), "60%");
new Animations($(".testimonials__quote"), "60%");
new Animations($(".plan__box"), "60%");
var mobileMenu = new MobileMenu();
var scroll = new Scroll();