jQuery(function(){if(document.getElementById("map"))var e={lat:36.028601,lng:-115.088484},a=new google.maps.Map(document.getElementById("map"),{zoom:14,center:e}),r=new google.maps.Marker({position:e,icon:"assets/images/PNG/Map.png",map:a});var i=new Swiper(".swiper-container",{pagination:".base__pagination .base__section",paginationClickable:!0,slidesPerView:1,spaceBetween:0,keyboardControl:!0,mousewheelControl:!0,direction:"vertical",onSlideChangeEnd:function(e){$(".bullet").removeClass("active"),$('.bullet[data-index="'+e.activeIndex+'"]').addClass("active"),e.activeIndex>0?$(".scrollArrow").fadeOut():$(".scrollArrow").fadeIn()},paginationBulletRender:function(e,a,r){return'<div class="bullet" data-name="'+data[a]+'" data-index="'+a+'"><span class="bullet__one"></span><span class="bullet__two"></span><span class="bullet__name">'+data[a]+"</span></div>"}});if($('.bullet[data-index="0"]').addClass("active"),$(".bullet").on("click",function(){i.slideTo($(this).attr("data-index"),300)}),$(".base__scroll").on("click",function(){i.slideNext(300)}),$(".scrollArrow").on("click",function(){i.slideNext(300)}),jQuery(".hamburger").on("click",function(e){e.preventDefault,$(".hamburger").addClass("hamburger--open")}),jQuery(".header__right__icon--search").on("click",function(e){e.preventDefault,$(".search").hasClass("search--open")===!0?($(".search").removeClass("search--open"),$(".scrollArrow").fadeIn()):($(".scrollArrow").fadeOut(),$(".search").addClass("search--open"))}),jQuery(".search__close").on("click",function(e){e.preventDefault,$(".search").removeClass("search--open"),$(".scrollArrow").fadeIn()}),jQuery(".imageHover").each(function(e,a){var r=$(this).data("no"),i=$(this).data("yes");$(this).css("background-image","url("+r+")"),$(this).on({mouseenter:function(){$(this).css("background-image","url("+i+")")},mouseleave:function(){$(this).css("background-image","url("+r+")")}})}),$(".drawer").drawer(),$(".drawer").on("drawer.opened",function(){$(".hamburger").addClass("hamburger--open")}),$(".drawer").on("drawer.closed",function(){$(".hamburger").removeClass("hamburger--open")}),$(".base__filter").length)var t=$(".base__inside").height();else var t=$(".base__inside").height();$(".masthead, .grid--item, .grid--item--wideShortThird").height(t/2),$(".grid--item--tall, .grid__wrap, .scrollArea, .scrollArea--none, .grid--item--wideTallThird, .blogArticle__copy").height(t);var l=$(".grid").isotope({itemSelector:".grid--item",layoutMode:"packery",cat:"[data-category]"}),o=l.find(".grid--item");l.addClass("is-showing-items").isotope("revealItemElements",o),jQuery(".base__filter__link a").on("click",function(){l.isotope({filter:".blogItem--"+$(this).data("category")}),jQuery(".blog__nav--click").removeClass("active"),jQuery(".blog__nav--click").addClass("notActive"),$(this).addClass("active").removeClass("notActive")}),$(".owl-carousel").length&&$(".owl-carousel").owlCarousel({loop:!0,margin:10,nav:!0,items:1})}),$(window).resize(function(){$(".masthead, .grid--item, .grid--item--wideShortThird").height(heightCalc/2),$(".grid--item--tall, .grid__wrap, .scrollArea, .scrollArea--none, .grid--item--wideTallThird, .blogArticle__copy").height(heightCalc)});