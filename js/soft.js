$(function() {

    $('.s__toolbar-open-sidenav').click(function() {
        $('.s__sidenav').removeClass('s__sidenav-hided');
    });
    $('.s__toolbar-close-sidenav').click(function() {
        $('.s__sidenav').addClass('s__sidenav-hided');
    });
    $('.s__sidenav').find('a').each(function() {
        $(this).click(function() {
            $('.s__sidenav').addClass('s__sidenav-hided');
        });
    });

    if($('.s__toolbar').data('show-after')) {
        $('.s__toolbar').addClass('s__toolbar-transparent');
        $('.s__page-content').scroll(function() {
            var showAfter = $(window).height() * .4;
            if($(this).scrollTop() > showAfter) {
                $('.s__toolbar').removeClass('s__toolbar-transparent');
            } else {
                $('.s__toolbar').addClass('s__toolbar-transparent');
            }
        });
    }

    $('.s__page-content').scroll(function() {
        $('.s__landing-top-background-image').css({top: -$(this).scrollTop() * 0.7});
    });


    /* Top image */

    var ptc = $('.s__landing-title-container');
	$('.s__page-content').on('scroll resize', function() {

        /* Just to large screens */
		if($(window).width() > 600) {
			var scrollTop = $(window).scrollTop(),
	            scrollBot = scrollTop + $(window).height(),
	            elTop = ptc.offset().top,
	            elBottom = elTop + ptc.outerHeight(),
	            visibleTop = elTop < scrollTop ? scrollTop : elTop,
	            visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
	        var visible = visibleBottom - visibleTop > 0? visibleBottom - visibleTop: 0;

	        if(visible > 200) {
	        	ptc.find(".s__landing-title").height(visible);

	        	//if(visible > 200)
	        	    //ptc.find(".s__landing-title").css("font-size", Math.sqrt(visible) * 3);
	        }
	    } else {
	    	ptc.find(".s__landing-title").height(128);
	    }

        if($(window).width() > 601) {
	        var maxH = 1000;
	        visible = visible <= maxH? visible: maxH;
	        $(".s__landing-top-background-image-over-layer").css("opacity", visible/maxH);
		}
	});

	/* End - Top Image */

    /* Scroll Effect */

    setTimeout(function() {
    	disableScroll();
        $(".s__foreground").fadeOut("fast");

		var body = $(".s__page-content");
		body.scrollTop(0);
		body.stop().animate({scrollTop: ($(window).height() * .4)}, 700, 'swing', function() {
			enableScroll();
		});
    }, 100);

    /* End - Scroll Effect */

});


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}