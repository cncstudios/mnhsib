// Loading //
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";
  } else if (state == 'complete') {
      setTimeout(function(){
          document.getElementById('interactive');
          document.getElementById('load').style.cssText="opacity:0;z-index:-2;";
          document.getElementById('body-container').style.opacity="1";
      },100);
  }
}

window.addEventListener("keydown", function(e) {
    if([37, 39].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

$(document).ready(function (){
    // Smooth Scrolling //
    $("html").easeScroll({
        frameRate: 120,
        animationTime: 1500,
        stepSize: 60,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 1,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 200,
        touchpadSupport: true,
        fixedBackground: true
    });

    // Other //
    var vh100 = ($(window).outerHeight() / $(window).outerWidth()*100 + "vw");
    $('.cover-wrapper, .cover-image, .cover-title, .cover-slant, .article-container-active').css({ height: vh100 });

    var xPos = ($(".cover-t-container").outerHeight())/2;
    var origin = xPos + "px " + xPos + "px";

    $('.cover-t-container').css(
            {
            '-moz-transform-origin': origin,                
            'transform-origin': origin,                   
            '-ms-transform-origin': origin,                 
            '-webkit-transform-origin': origin
            });

    // Mobile Control //
    if ($(window).width() < $(window).height()) {
        $('.ds-split').css({ minHeight: 'auto' });
        $('.page').css({ minHeight: 'auto' });
    }
    else {
        $('.ds-split').css({ minHeight: vh100 });
        $('.page').css({ minHeight: vh100 });
    }

    // Nav Control //
    $(".down").click(function (){
        $('html, body').stop(true, false).animate({
            scrollTop: $(".article-whole").offset().top
        }, 800, 'easeInOutExpo');
    });

    // Article Hover //
    $("div.article-hover").mouseover(function (event){
        $(event.target).closest("div.article-c-hover").addClass("article-container-hover");
    });
    $("div.article-hover").mouseout(function (event){
        $(event.target).closest("div.article-c-hover").removeClass("article-container-hover");
    });

    // Animated Arrow //
    (function($) {
    $.fn.seqfx = function() {
        var elements = this,
            l = elements.length,
            i = 0;

        function execute() {
            var current = $(elements[i]);
            i = (i) % l;

            current
                .fadeIn(300)
                .delay(800)
                .fadeOut(300, execute);
        }
        execute();
        return this;
    };
}(jQuery));

$(".down, h4").seqfx();
});