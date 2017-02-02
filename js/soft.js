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
            var showAfter = $('.s__toolbar').data('show-after');
            if($(this).scrollTop() > showAfter) {
                $('.s__toolbar').removeClass('s__toolbar-transparent');
            } else {
                $('.s__toolbar').addClass('s__toolbar-transparent');
            }
        });
    }

    $('.s__page-content').scroll(function() {
        $('.s__background').css({top: -$(this).scrollTop() * 0.7});
    });

    $('.carousel').carousel();

    // http://rateyo.fundoocode.ninja/
    $(".s__rate").rateYo({
        starWidth: "20px", 
        normalFill: "#DDDDDD", 
        ratedFill: "#FF4081",
        rating: 4.5        
    });

});