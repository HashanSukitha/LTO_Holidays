jQuery(document).ready(function(){!function(a){function b(a){(a.which>0||"mousedown"===a.type||"mousewheel"===a.type)&&h.stop().off("scroll mousedown DOMMouseScroll mousewheel keyup",b)}var c=TCParams.FancyBoxState,d=TCParams.FancyBoxAutoscale;1==c&&a("a.grouped_elements").fancybox({transitionIn:"elastic",transitionOut:"elastic",speedIn:200,speedOut:200,overlayShow:!1,autoScale:1==d?"true":"false",changeFade:"fast",enableEscapeButton:!0}),1==c&&a("a[rel*=tc-fancybox-group]").each(function(){var b=a(this).find("img").prop("title"),c=a(this).find("img").prop("alt");"undefined"!=typeof b&&0!=b.length?a(this).attr("title",b):"undefined"!=typeof c&&0!=c.length&&a(this).attr("title",c)});var e=TCParams.SliderName,f=TCParams.SliderDelay;j=TCParams.SliderHover,0!=e.length&&(0==f.length||j?0!=f.length?a("#customizr-slider").carousel({interval:f}):a("#customizr-slider").carousel():a("#customizr-slider").carousel({interval:f,pause:"false"}));var g=TCParams.SmoothScroll;"easeOutExpo"==g&&a('a[href^="#"]').not('[class*=edd], .carousel-control, [data-toggle="modal"], [data-toggle="dropdown"], [data-toggle="tooltip"], [data-toggle="popover"], [data-toggle="collapse"], [data-toggle="tab"]').click(function(){var b=a(this).attr("href");return"#"!=b&&a("html, body").animate({scrollTop:a(b).offset().top},700,g),!1});var h=a("html, body");a(".back-to-top").on("click",function(a){h.on("scroll mousedown DOMMouseScroll mousewheel keyup",b),h.animate({scrollTop:0},1e3,function(){h.stop().off("scroll mousedown DOMMouseScroll mousewheel keyup",b)}),a.preventDefault()}),a.browser.chrome?a("body").addClass("chrome"):a.browser.webkit?a("body").addClass("safari"):(a.browser.msie||"8.0"===a.browser.version||"9.0"===a.browser.version||"10.0"===a.browser.version||"11.0"===a.browser.version)&&a("body").addClass("ie").addClass("ie"+a.browser.version.replace(/[.0]/g,"")),a("body").hasClass("ie")&&a("body").addClass(a.browser.version),a(window).on("load",function(){function b(){767>e&&(i&&j?a(f).insertBefore(g):i?a(f).insertBefore(g):a(f).insertBefore(h))}function c(){767>e?a("#main-wrapper .container .span3.tc-sidebar").insertAfter(f):i&&j?a(f).insertBefore(h):i?a(f).insertAfter(g):a(f).insertBefore(h)}var d=a(window),e=d.width(),f=a("#main-wrapper .container .article-container"),g=a("#main-wrapper .container .span3.left.tc-sidebar"),h=a("#main-wrapper .container .span3.right.tc-sidebar"),i=!1,j=!1;g.length>0&&(i=!0),h.length>0&&(j=!0);var k=new Date(1,1,2e3,12,0,0),l=!1,m=200;a(window).resize(function(){k=new Date,l===!1&&(l=!0,setTimeout(c,m))}),b(),a(".widget-front, article").hover(function(){a(this).addClass("hover")},function(){a(this).removeClass("hover")}),a(".widget li").hover(function(){a(this).addClass("on")},function(){a(this).removeClass("on")}),a("article.attachment img").delay(500).animate({opacity:1},700,function(){})})}(window.jQuery)});