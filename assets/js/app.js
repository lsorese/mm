    function redraw() {
        var heightCalc = $(".base__inside").height();
        var widthCalc = $(".base__inside").width();
        if ($("body").width() < 565) {

            // 1 out of 2 row on mobile
            $(".grid--item, .grid--item__overlay, .grid--item--wideShortThird, .masthead").height(widthCalc / 2).width(widthCalc / 2);
            $(".grid--item--tall,  .grid--item--wideTallThird").height(widthCalc).width(widthCalc);

            // Full width masthead
            $(".masthead").height(widthCalc / 2).width(widthCalc);

            $(".grid--item--case").width(widthCalc).height(2.5 * (heightCalc / 6));

            $(".swiper-slide, .swiper-wrapper, .blog, .scrollArea, .scrollArea--viewport").height(heightCalc);
            // Set class variable
            $("body, html").addClass("mobile").removeClass("desktop");
            // For overlay grids: 2 out of 4 columns

            $(".grid--item__overlay").width(widthCalc);
            $(".scrollArea--viewport .grid .grid--item").height(2.5 * (heightCalc / 6)).width(widthCalc);

        } else {
            // 1 out of 2 row on desktop
            $(".grid--item").width(widthCalc / 4);
            $(".grid--item, .grid--item__overlay, .grid--item--wideShortThird, .masthead").height(heightCalc / 2);
            // 2 out of 2 row on desktop
            $(".grid--item--tall, .grid__wrap, .scrollArea, .scrollArea--none, .grid--item--wideTallThird, .blogArticle__copy").height(heightCalc);
            // For overlay grids: 2 out of 4 columns
            $(".grid--item__overlay").width(widthCalc / 2);
            // Haphazard
            $(".grid--item--tinyShortThird").width(3 * (widthCalc / 10));
            $(".grid--item--wideShortThird").width(3.5 * (widthCalc / 10));
            $(".grid--item--wideTallThird").width(3.5 * (widthCalc / 10));

            $(".masthead").width(widthCalc);
            // 1 out of 3 rows on desktop
            $(".grid--item--style2, .grid--item--blog").width(widthCalc / 3);
            // Set class variable
            $("body, html").addClass("desktop").removeClass("mobile");

            $(".scrollArea--viewport .grid .grid--item").height(heightCalc / 2).width(widthCalc / 4);



            if (typeof swiper === "object") {
                console.log("Already a swiper");
            } else {
                var swiper = new Swiper(".swiper-container", {
                    pagination: ".base__pagination .base__section",
                    paginationClickable: true,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    keyboardControl: true,
                    mousewheelControl: true,
                    direction: "vertical",
                    onSlideChangeEnd: function(swiper) {
                        $(".bullet").removeClass("active");
                        $(".bullet[data-index=" + swiper.activeIndex + "]").addClass("active");
                        console.log(swiper.activeIndex);
                        if (swiper.activeIndex > 0) {
                            $(".scrollArrow").fadeOut();
                        } else {
                            $(".scrollArrow").fadeIn();
                        }
                    },
                    paginationBulletRender: function(swiper, index, className) {
                        return "<div class=bullet data-name=" + data[index] + " data-index=" + index + "><span class=bullet__one></span><span class=bullet__two></span><span class=bullet__name>" + data[index] + "</span></div>";

                    },
                    onInit: function(swiper) {
                        $(".bullet:first-child").addClass("active");

                        $(".bullet").on("click", function() {
                            swiper.slideTo($(this).attr("data-index"), 300);
                        });
                        $(".base__scroll").on("click", function() {
                            swiper.slideNext(300);
                        });
                        $(".scrollArrow").on("click", function() {
                            swiper.slideNext(300);
                        });
                    },
                    onAfterResize: function() {
                        if ($("body").width() < 565) {
                            swiper.destroy(true, true);
                            console.log("Destroyed Swiper");
                        }
                        $(".bullet[data-index=" + swiper.activeIndex + "]").addClass("active");
                        $(".bullet").on("click", function() {
                            swiper.slideTo($(this).attr("data-index"), 300);
                        });
                        $(".base__scroll").on("click", function() {
                            swiper.slideNext(300);
                        });
                        $(".scrollArrow").on("click", function() {
                            swiper.slideNext(300);
                        });
                    }
                });
            }
        }
    }

    $(function() {

        redraw();
        $(window).resize(function() {
            redraw();
        });
        $(".animsition").animsition({
            inClass: "fade-in",
            outClass: "fade-out",
            inDuration: 400,
            outDuration: 400,
            linkElement: ".drawer-nav a, .header__logo",
            // e.g. linkElement: "a:not([target="_blank"]):not([href^="#"])"
            loading: true,
            loadingParentElement: "body", //animsition wrapper element
            loadingClass: "animsition-loading",
            loadingInner: "", // e.g "<img src="loading.svg" />"
            timeout: false,
            timeoutCountdown: 5000,
            onLoadEvent: true,
            browser: ["animation-duration", "-webkit-animation-duration"],
            // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
            // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
            overlay: false,
            overlayClass: "animsition-overlay-slide",
            overlayParentElement: "body",
            transition: function(url) { window.location.href = url; }
        });

        // Google Maps
        if (document.getElementById("map")) {
            var marker = { lat: 36.028601, lng: -115.088484 };
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 14,
                center: marker
            });
            var marker = new google.maps.Marker({
                position: marker,
                icon: "assets/images/PNG/Map.png",
                map: map
            });
        }

        //// HAMBURGER
        $(".hamburger").on("click", function(e) {
            e.preventDefault;
            $(".hamburger").addClass("hamburger--open");

        });

        //// FILTER
        $(".gridLinks .base__filter__link a").on("click", function() {
            var cat = $(this).data("category");
            $('.base__pagination').fadeOut();
            $('.scrollArea--viewport .grid').empty();
            $('.scrollArea').addClass('floater');
            $.each($(".grid--item--type--" + cat), function(i, v) {
                $(this).clone().appendTo('.scrollArea--viewport .grid');
                redraw();
            });
            new Isotope('.scrollArea--viewport .grid', {
                itemSelector: ".grid--item",
                layoutMode: "packery"
            });
            $(".topNav--click").removeClass("active");
            $(".topNav--click").addClass("notActive");
        });

        $('.blogLinks .base__filter__link a').on('click', function() {
            $grid.isotope({ filter: '.grid--item--type--' + $(this).data('category') })
            $('.topNav--click').removeClass('active');
            $('.topNav--click').addClass('notActive');
            $(this).addClass('active').removeClass('notActive');
        });

        //// SEARCH
        $(".header__right__icon--search, .drawer-nav--search").on("click", function(e) {
            e.preventDefault;
            $(".drawer").drawer("close");

            if ($(".search").hasClass("search--open") === true) {
                $(".search").removeClass("search--open");
                $(".scrollArrow").fadeIn();
            } else {
                $(".scrollArrow").fadeOut();
                $(".search").addClass("search--open");
            }
        });
        $(".search__close").on("click", function(e) {
            e.preventDefault;
            $(".search").removeClass("search--open");
            $(".scrollArrow").fadeIn();
        });

        //// NAVIGATION
        $(".drawer").drawer();
        $(".drawer").on("drawer.opened", function() {
            $(".hamburger").addClass("hamburger--open");
        });
        $(".drawer").on("drawer.closed", function() {
            $(".hamburger").removeClass("hamburger--open");
        });


        $(".newsletterPopup .close").on("click", function(e) {
            e.preventDefault;
            $(".newsletterPopup").fadeOut();
        });


        //// IMAGE HOVER
        $(".imageHover").each(function(index, el) {
            var no = $(this).data("no");
            var yes = $(this).data("yes");
            $(this).css("background-image", "url(" + no + ")");
            $(this).on({
                mouseenter: function() {
                    $(this).css("background-image", "url(" + yes + ")");
                },
                mouseleave: function() {
                    if ($(this).hasClass("clicked") === false) {
                        $(this).css("background-image", "url(" + no + ")");
                    }
                }
            })
        });
        
        $(".base__filter__link a, .base__filter__link__child ul li a").on("click", function(e) { e.preventDefault(); })

        // Grid--item click. It"s heavy as fuck
        $(".grid--item").on("click", function(e) {
            e.preventDefault;
            var no = $(this).data("no");
            var yes = $(this).data("yes");
            $.each($(this).siblings(), function(i, l) {
                var no = $(this).data("no");
                $(this).css("background-image", "url(" + no + ")");
            })
            $(this).siblings().removeClass("clicked");
            $(this).toggleClass("clicked");
            if ($(this).hasClass("clicked")) {
                if ($(".base__filter").length && $(this).has(".grid--item__overlay").length) {
                    $(this).css("background-image", "url(" + yes + ")");
                    if ($("body").hasClass("desktop")) $(".base__filter").fadeTo(666, 0);
                }
            } else {
                if ($(".base__filter").length && $(this).has(".grid--item__overlay").length) {
                    $(this).css("background-image", "url(" + no + ")");
                    if ($("body").hasClass("desktop")) $(".base__filter").fadeTo(666, 0.75);
                }

            }
        });

        var sectionHeight = '-' + $('.base__section').height() / 2 + 'px';
        console.log(sectionHeight);
        $('.base__section').css('margin-top', sectionHeight);

        //// ISOTOPE
        var $grid = $(".grid").isotope({
            itemSelector: ".grid--item",
            layoutMode: "packery",
            cat: "[data-category]"
        });

        //// REVEAL ISOTOPE
        var $items = $grid.find('.grid--item');
        $grid.addClass('is-showing-items')
            .isotope('revealItemElements', $items);

        // OWL CAROUSEL
        if ($(".owl-carousel").length) {
            $(".owl-carousel").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                items: 1,
                singleItem: true

            });
        }
        if ($("body").width() < 565) {

            setTimeout(function() {
                $('.newsletterPopup').fadeIn();
            }, 4000);
        } else {
            $('.newsletterPopup').hide();
        }
    });
