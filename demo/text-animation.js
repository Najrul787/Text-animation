/**
 * Author 		: Najrul Ahmed
 * Author URL 	: http://www.facebook.com/najrul787
 * From 		: Bangladesh
 * plugin Name 	: Quick Text Animation
 * Created 		: March 15, 2016
 * Update 		: DESC 1, 2017
 * Contact		: +8801838188585
 */
(function(g){g.fn.animQText=function(b){var a=g(this);b=b||{};a.interval=!1;a.length=0;a.count=0;a.revers=!1;var h=b.effectIn||"rollIn",k=b.effectOut||"rollOut",d=b.delay||800,f=b.duration||500,l=!1===b.revers?!1:!0;a.span=function(c){a.length+=1;return'<span class="qtt" style="display:inline-block;animation-duration:'+f+'ms">'+c+"</span>"};a.space=function(a){return'<i style="display:inline-block;" class="qts">&nbsp;</i>'};a.empty=function(){a.html("")};a.resetEffect=function(){a.items.removeClass(h);
a.items.removeClass(k)};a.addEffect=function(){a.revers?l?(a.count--,a.items.eq(a.count).addClass(k),0>=a.count&&(a.revers=!1)):(a.revers=!1,a.count=0):(a.items.eq(a.count).addClass(h),a.count>a.length&&(a.revers=!0),a.count++)};a.processText=function(){for(var c="",b=a.text().split(""),d=b.length,e=0;e<d;e++)c=b[e].trim()?c+a.span(b[e]):c+a.space();return c};a.setText=function(){var b=a.processText();a.empty();a.html(b)};a.start=function(){a.setText();a.items=a.children("span.qtt");f>d&&(d=f);setInterval(a.anim,
d)};a.anim=function(){a.resetEffect();a.addEffect()};a.start()}})(jQuery);
