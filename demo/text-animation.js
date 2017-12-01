/**
 * Author 		: Najrul Ahmed
 * facebook 	: http://www.facebook.com/najrul787
 * From 		: Bangladesh
 * plugin Name 	: Quick Text Animation
 * Created 		: March 15, 2016
 * Update 		: DESC 1, 2017
 */
(function(c){c.fn.animQText=function(b){var a=c(this);b=b||{};a.interval=!1;a.length=0;a.count=0;a.revers=!1;a.letters="";var h=b.effectIn||"rollIn",k=b.effectOut||"rollOut",g=b.delay||800,f=b.duration||500,l=!1===b.revers?!1:!0;a.letter=function(e){e.trim()?(a.letters+='<span class="qtt">'+e+"</span>",a.length+=1):a.letters+='<i class="qts">&nbsp;</i>'};a.resetEffect=function(){a.items.removeClass(h);a.items.removeClass(k)};a.css=function(){var e=a.selector,b=document.createElement("style"),d=e+
" qtt{display:inline-block;-webkit-animation-duration: "+f+"ms;animation-duration: "+f+"ms;-webkit-animation-fill-mode: both;animation-fill-mode: both;}";d+=e+" qts{display:inline-block;}";c(b).html(d);c("body").append(b)};a.addEffect=function(){a.revers?l?(a.count--,a.items.eq(a.count).addClass(k),0>=a.count&&(a.revers=!1)):(a.revers=!1,a.count=0):(a.items.eq(a.count).addClass(h),a.count>a.length&&(a.revers=!0),a.count++)};a.processText=function(){for(var b=a.text().split(""),c=b.length,d=0;d<c;d++)a.letter(b[d]);
a.html(a.letters)};a.start=function(){a.processText();a.css();a.items=a.children("span.qtt");f>g&&(g=f);setInterval(a.anim,g)};a.anim=function(){a.resetEffect();a.addEffect()};a.start()}})(jQuery);
