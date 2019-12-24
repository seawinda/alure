$(document).ready(function() {
    //smooth scroll to elem
    $('.go_to').click(function(e) {
        e.preventDefault();
        var scroll_el = $(this).attr('data-href');
        $('.mobile-menu__checkbox').prop('checked', false);
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 1000);
            if (($(window).width() <= '900')) {
                $('html, body').animate({
                    scrollTop: $(scroll_el).offset().top
                }, 1000);

            } else if (($(window).width() > '900')) {
                $('html, body').animate({
                    scrollTop: $(scroll_el).offset().top
                }, 1000);
            }
        }
        return false;
    });

    $('.mainmenu__link').click(function() {
        var listelem = $(this).attr('data-href');
        $('.header__mainmenu').find('.mainmenu__link').removeClass('marked');
        $('.header__mainmenu [data-href="' + listelem + '"]').addClass('marked');
    });


});

let counted = 0;
$(document).scroll(function() {
    let scrolled = $(document).scrollTop();
    if (scrolled > $('.main').height() - $(window).height()) {
        $('.header').removeClass('fixed-menu_active');
        $('.header').css('bottom', $('.footer').outerHeight());

    } else {
        $('.header').addClass('fixed-menu_active');
        $('.header').css('bottom', 'auto');
    }

    /* animate nums*/


    if ((scrolled >= $('#production').offset().top - 300) && (counted === 0)) {
        const types = $('#types');
        const colors = $('#colors');
        const agents = $('#agents');
        types.animateNumber({
                number: 8,
                easing: 'easeOutCubic'
            },
            5000
        );
        colors.animateNumber({
                number: 300,
                easing: 'easeOutCubic'
            },
            5000
        );
        agents.animateNumber({
                number: 30,
                easing: 'easeOutCubic'
            },
            5000
        );
        counted++;

    }


});