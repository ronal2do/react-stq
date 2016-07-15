import $ from 'jQuery';

jQuery(document).ready(function(a) {
	function b() {
	    $body = a("section#body"), e = a(window), e.scrollTop() < 50 ? ($body.addClass("show-logo"), $body.removeClass("dont-show-logo")) : $body.hasClass("navigation-is-open") || ($body.removeClass("show-logo"), $body.addClass("dont-show-logo"))
	}
	var c = !1,
	    d = a(".cd-nav-trigger"),
	    e = a(window);
	return d.on("click", function(b) {
	    d.find("span").each(function() {
	        a(this).hasClass("visually-hidden")
	    }), b.preventDefault(), c || (a(this).parents(".csstransitions").length > 0 && (c = !0), $body = a("section#body"), $body.toggleClass("navigation-is-open"), a(document).one("keydown", function(a) {
	        27 === a.keyCode && $body.hasClass("navigation-is-open") && $body.toggleClass("navigation-is-open")
	    }), a(".cd-navigation-wrapper").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
	        c = !1
	    }))
	}), b(), e.scroll(function() {
	    b()
	}), a("mood-area").length ? void e.scroll(function() {
	    return e.scrollTop() > 200 ? void d.addClass("triggered") : void d.removeClass("triggered")
	}) : void d.addClass("triggered")
})