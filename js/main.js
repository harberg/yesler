(function($) {

    jQuery.easing.def = "easeOutCubic";

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var os = $('.homeMarquee').offset().top;
        var ht = $('.homeMarquee').height();

        if(scroll > os + ht) {
            $('#header').addClass('scrollVisible');
        } else {
            if( $('.scrollVisible').length ) {
                $('#header').removeClass('scrollVisible');
            }
        }
    })

    // This sets smooth scrolling for anchor links on the page.

    $('a[href*="#"]:not([href="#"])').click(function() {
        var pageHeight = {
            height : $(document.body).height()
        };

        var height = pageHeight.height;
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                if(height < 4000) {
                    $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            } else {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 4000);
            }
          return false;
            }
        }
    });

})(jQuery);