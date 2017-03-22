    jQuery(function() {

        if (document.getElementById('map')) {
            var uluru = { lat: 36.028601, lng: -115.088484 };
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: uluru
            });
            var marker = new google.maps.Marker({
                position: uluru,
                icon: 'assets/images/PNG/Map.png',

                map: map
            });
        }

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
                if (swiper.activeIndex > 0) {
                    $('.scrollArrow').fadeOut();
                } else {
                    $('.scrollArrow').fadeIn();
                }
            },
            paginationBulletRender: function(swiper, index, className) {
                return '<div class="bullet" data-name="' + data[index] + '" data-index="' + index + '"><span class="bullet__one"></span><span class="bullet__two"></span><span class="bullet__name">' + data[index] + '</span></div>';

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

        /*$(".animsition").animsition({
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
        }); */

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

        jQuery(".imageHover").each(function(index, el) {
            var no = $(this).data('no');
            var yes = $(this).data('yes');
            $(this).css('background-image', 'url(' + no + ')');
            $(this).on({
                mouseenter: function() {
                    $(this).css('background-image', 'url(' + yes + ')');

                },
                mouseleave: function() {
                    $(this).css('background-image', 'url(' + no + ')');

                }
            })

        });

        $('.drawer').drawer();
        $('.drawer').on('drawer.opened', function() {
            $('.hamburger').addClass('hamburger--open');
        });
        $('.drawer').on('drawer.closed', function() {
            $('.hamburger').removeClass('hamburger--open');
        });

        if ($(".base__filter").length) {
            var heightCalc = $('.base__inside').height();

            //var heightCalc = $('.base__inside').height() - $('.base__filter').height();
        } else {
            var heightCalc = $('.base__inside').height();
        }


        $('.masthead, .grid--item, .grid--item--wideShortThird').height(heightCalc / 2);
        $('.grid--item--tall, .grid__wrap, .scrollArea, .scrollArea--none, .grid--item--wideTallThird, .blogArticle__copy').height(heightCalc);

        var $grid = $('.grid').isotope({
            // options
            itemSelector: '.grid--item',
            layoutMode: 'packery',
            cat: '[data-category]'
        });

        var $items = $grid.find('.grid--item');
        $grid.addClass('is-showing-items')
            .isotope('revealItemElements', $items);

        jQuery('.base__filter__link a').on('click', function() {
                $grid.isotope({ filter: '.blogItem--' + $(this).data('category') })
                jQuery('.blog__nav--click').removeClass('active');
                jQuery('.blog__nav--click').addClass('notActive');
                $(this).addClass('active').removeClass('notActive');
            })
            //swiper.destroy(true, true);
            if($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
        });
        }

    });
    $(window).resize(function() {
        $('.masthead, .grid--item, .grid--item--wideShortThird').height(heightCalc / 2);
        $('.grid--item--tall, .grid__wrap, .scrollArea, .scrollArea--none, .grid--item--wideTallThird, .blogArticle__copy').height(heightCalc);
    })
