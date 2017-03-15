    jQuery(function() {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.base__pagination .base__section',
            paginationClickable: true,
            slidesPerView: 1,
            spaceBetween: 0,
            keyboardControl: true,
            mousewheelControl: true,
            direction: 'vertical',
            onSlideChangeEnd: function(swiper) {
                $('.bullet').removeClass('active');
                $('.bullet[data-index="' + swiper.activeIndex + '"]').addClass('active');
            },
            paginationBulletRender: function(swiper, index, className) {
                return '<div class="bullet" data-name="' + data[index] + '" data-index="' + index + '"><span class="bullet__one"></span><span class="bullet__two"></span><span class="bullet__name">'+data[index]+'</span></div>';

            }
        });
        $('.bullet[data-index="0"]').addClass("active");


        $('.bullet').on('click', function() {
            swiper.slideTo($(this).attr('data-index'), 300);
        });
        $('.base__scroll').on('click', function() {
            swiper.slideNext(300);
        });
        $('.scrollArrow').on('click', function() {
            swiper.slideNext(300);
        });

        $(".animsition").animsition({
            inClass: 'fade-in-left',
            outClass: 'fade-out-right',
            inDuration: 800,
            outDuration: 800,
            linkElement: '.animsition-link',
            // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
            loading: true,
            loadingParentElement: 'body', //animsition wrapper element
            loadingClass: 'animsition-loading',
            loadingInner: '', // e.g '<img src="loading.svg" />'
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: ['animation-duration', '-webkit-animation-duration'],
            // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body',
            transition: function(url) { window.location.href = url; }
        });

        jQuery('.hamburger').on('click', function(e) {
            e.preventDefault;
            $('.hamburger').addClass('hamburger--open');
        })

        jQuery('.header__right__icon--search').on('click', function(e) {
            e.preventDefault;
            if ($('.search').hasClass('search--open') === true) {
            $('.search').removeClass('search--open');
            $('.scrollArrow').fadeIn();
            } else {
                $('.scrollArrow').fadeOut();
                $('.search').addClass('search--open');

            }

        })
        jQuery('.search__close').on('click', function(e) {
            e.preventDefault;
            $('.search').removeClass('search--open');
            $('.scrollArrow').fadeIn();
        })

        $('.grid').isotope({
            // options
            itemSelector: '.grid-item',
            layoutMode: 'masonry'
        });

        $('.drawer').drawer();
        $('.drawer').on('drawer.opened', function() {
            $('.hamburger').addClass('hamburger--open');
        });
        $('.drawer').on('drawer.closed', function() {
            $('.hamburger').removeClass('hamburger--open');
        });

        $(window).resize(function() {
            $('.masthead, .grid-item').height($('.base__inside').height() / 2);
            $('.grid-item--tall, .grid__wrap, .search').height($('.base__inside').height());
        })
        $('.masthead, .grid-item').height($('.base__inside').height() / 2);
        $('.grid-item--tall, .grid__wrap, .search').height($('.base__inside').height());
    });
