/**
 * Author 		: Najrul Ahmed
 * Author URL 	: http://www.facebook.com/najrul787
 * From 		: Bangladesh
 * plugin Name 	: Quick Text Animation
 * Created 		: March 15, 2016
 * Update 		: DESC 1, 2017
 */
(function($) {
	$.fn.animQText = function(opt) {
		// Text Box Alement 
		const that = $(this);
		var opt = opt || {};
		// Global 
		that.interval = false;
		that.length = 0;
		that.count = 0;
		that.revers = false;
		// user options
		var uRevers = opt.revers === false ? false : true;
		// Default Options
		const options = {
			effectIn: opt.effectIn || 'rollIn',
			effectOut: opt.effectOut || 'rollOut',
			delay: opt.delay || 800,
			duration: opt.duration || 500,
			revers: uRevers,
			span: 'qtt',
			space: 'qts',
		};
		// span tag for Every word
		that.span = function(t) {
			that.length += 1;
			return '<span class="' + options.span + '" style="display:inline-block;animation-duration:' + options.duration + 'ms">' + t + '</span>';
		}
		// include Space in i tag
		that.space = function(s) {
			return '<i style="display:inline-block;" class="' + options.space + '">&nbsp;</i>';
		}
		// Empty Text box
		that.empty = function() {
			that.html('');
		}
		// reset all
		that.resetEffect = function() {
			that.items.removeClass(options.effectIn);
			that.items.removeClass(options.effectOut);
		}
		// Effect in & Out
		that.addEffect = function() {
			if (!that.revers) {
				that.items.eq(that.count).addClass(options.effectIn);
				if (that.count > that.length) {
					that.revers = true;
				}
				that.count++;
			} else {
				if (options.revers) {
					that.count--;
					that.items.eq(that.count).addClass(options.effectOut);
					if (that.count <= 0) {
						that.revers = false;
					}
				} else {
					that.revers = false;
					that.count = 0;
				}
			}
		}
		// All Text Procecing in this function
		that.processText = function() {
			var string = "";
			let text = that.text();
			let words = text.split('');
			let WordLength = words.length;
			// genaret Words
			for (var i = 0; i < WordLength; i++) {
				if (words[i].trim()) {
					string += that.span(words[i]);
				} else {
					string += that.space();
				}
			}
			return string;
		}
		// Set text 
		that.setText = function() {
			const texts = that.processText();
			that.empty();
			that.html(texts);
		}
		that.start = function() {
			that.setText();
			that.items = that.children('span.qtt');
			if (options.duration > options.delay) {
				options.delay = options.duration;
			}
			setInterval(that.anim, options.delay);
		}
		// Start Animation
		that.anim = function() {
			that.resetEffect();
			that.addEffect();
		}
		that.start();
	}
})(jQuery);
