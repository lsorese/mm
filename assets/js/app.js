$(function() {
    function redraw() {
        var heightCalc = $('.base__inside').height();
        var widthCalc = $('.base__inside').width();

        if ($('body').width() < 576) {
            $('.grid--item, .grid--item__overlay, .grid--item--wideShortThird').height(widthCalc / 2).width(widthCalc / 2); // make square
            $('.grid--item--tall, .scrollArea, .scrollArea--none, .grid--item--wideTallThird, .blogArticle__copy').height(widthCalc).width(widthCalc);
            $('.masthead').height(widthCalc / 2).width(widthCalc);
            $('body, html').addClass('mobile').removeClass('desktop');
            $('.grid--item__overlay').width(widthCalc);
        } else {
            $('.masthead, .grid--item, .grid--item__overlay, .grid--item--wideShortThird').height(heightCalc / 2);
            $('.grid--item--tall, .grid__wrap, .scrollArea, .scrollArea--none, .grid--item--wideTallThird, .blogArticle__copy').height(heightCalc);

            $('body, html').addClass('desktop').removeClass('mobile');
            $('.grid--item__overlay').width(widthCalc / 2);
        }
    }

    redraw();
    $(window).resize(function() {
        redraw();
    });

    // Google Maps
    if (document.getElementById('map')) {
        var marker = { lat: 36.028601, lng: -115.088484 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: marker
        });
        var marker = new google.maps.Marker({
            position: marker,
            icon: 'assets/images/PNG/Map.png',
            map: map
        });
    }
    if ($('body').width() < 576) {
        var heightCalc = $('.base__inside').height();


    } else {
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

        // SWIPER CONTROL
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
    }

    //// HAMBURGER
    $('.hamburger').on('click', function(e) {
        e.preventDefault;
        $('.hamburger').addClass('hamburger--open');

    });

    //// FILTER
    $('.base__filter__link a').on('click', function() {
        $grid.isotope({ filter: '.grid--item--type--' + $(this).data('category') })
        $('.topNav--click').removeClass('active');
        $('.topNav--click').addClass('notActive');
        $(this).addClass('active').removeClass('notActive');
    });

    //// SEARCH
    $('.header__right__icon--search, .drawer-nav--search').on('click', function(e) {
        e.preventDefault;
        $('.drawer').drawer('close');

        if ($('.search').hasClass('search--open') === true) {
            $('.search').removeClass('search--open');
            $('.scrollArrow').fadeIn();
        } else {
            $('.scrollArrow').fadeOut();
            $('.search').addClass('search--open');
        }
    });
    $('.search__close').on('click', function(e) {
        e.preventDefault;
        $('.search').removeClass('search--open');
        $('.scrollArrow').fadeIn();
    });

    //// NAVIGATION
    $('.drawer').drawer();
    $('.drawer').on('drawer.opened', function() {
        $('.hamburger').addClass('hamburger--open');
    });
    $('.drawer').on('drawer.closed', function() {
        $('.hamburger').removeClass('hamburger--open');
    });

    //// IMAGE HOVER
    $(".imageHover").each(function(index, el) {
        var no = $(this).data('no');
        var yes = $(this).data('yes');
        $(this).css('background-image', 'url(' + no + ')');
        $(this).on({
            mouseenter: function() {
                $(this).css('background-image', 'url(' + yes + ')');
            },
            mouseleave: function() {
                if ($(this).hasClass('clicked') === false) {
                    $(this).css('background-image', 'url(' + no + ')');
                }
            }
        })
    });

    // Grid--item click. It's heavy as fuck
    $('.grid--item').on('click', function(e) {
        e.preventDefault;
        var no = $(this).data('no');
        var yes = $(this).data('yes');
        $.each($(this).siblings(), function(i, l) {
            var no = $(this).data('no');
            $(this).css('background-image', 'url(' + no + ')');
        })
        $(this).siblings().removeClass('clicked');
        $(this).toggleClass('clicked');
        if ($(this).hasClass('clicked')) {
            if ($('.base__filter').length && $(this).has('.grid--item__overlay').length) {
                $(this).css('background-image', 'url(' + yes + ')');
                if ($('body').hasClass('desktop')) $('.base__filter').fadeTo(666, 0);
            }
        } else {
            if ($('.base__filter').length && $(this).has('.grid--item__overlay').length) {
                $(this).css('background-image', 'url(' + no + ')');
                if ($('body').hasClass('desktop')) $('.base__filter').fadeTo(666, 0.75);
            }

        }
    });


    //// ISOTOPE
    var $grid = $('.grid').isotope({
        itemSelector: '.grid--item',
        layoutMode: 'packery',
        cat: '[data-category]'
    });
    //// REVEAL ISOTOPE
    var $items = $grid.find('.grid--item');
    $grid.addClass('is-showing-items')
        .isotope('revealItemElements', $items);

    // OWL CAROUSEL
    if ($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 1,
        });
    }

});
