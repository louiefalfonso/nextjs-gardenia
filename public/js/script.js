jQuery(function ($) {

	'use strict';


    // -------------------------------------------------------------
    //      Sticky Menu
    // -------------------------------------------------------------
        
        function menuSticky() { 
            var navHeight = $(".top-bar").height();
            var slidersection = $(".slider-section");
            var headertitle = $(".header-title");
            var menutoggle = $(".menu-toggle");
            var extra = $(".extra");

            ($(window).scrollTop() > navHeight) ? $('nav,.slider-section,.header-title,.menu-toggle,.extra').addClass('sticky') : $('nav,.slider-section, .header-title, .menu-toggle, .extra').removeClass('sticky');
        }


    // -------------------------------------------------------------
    //      Fixed Menu
    // -------------------------------------------------------------

        function menuFixed() { 
            var navHeight = $(".upper").height();
            ($(window).scrollTop() > navHeight) ? $('.nav-One').addClass('sticky') : $('.nav-One').removeClass('sticky');
        }



    // -------------------------------------------------------------
    //  	Offcanvas Menu
    // -------------------------------------------------------------

        (function () {
            var menutoggle = $(".menu-toggle");
            var offcanvasmenu = $("#offcanvas-menu");
            var closemenu = $(".close-menu");

            menutoggle.on("click" ,function(){
                offcanvasmenu.addClass("toggled");
                return false;
            });

            closemenu.on("click" ,function() {
                offcanvasmenu.removeClass("toggled");
                return false;
            });
        }());



    // -------------------------------------------------------------
    //      Single-Page-Menu-Scrolling  Easy Plugin
    // -------------------------------------------------------------

        $(function() {
            $('a.page-scroll').on('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });
        


    // -------------------------------------------------------------
    // Sub-menu
    // -------------------------------------------------------------
        if ( $('.dropmenu').length) {
            $('.dropmenu').on("click" ,function(){
                $(this).parent().find('.dropDown').slideToggle();
                return false;
            });
        }

        if ( $('.single-dropmenu').length) {
            $('.single-dropmenu').on("click" ,function(){
                $(this).parent().find('.single-dropDown').slideToggle();
                return false;
            });
        }



    // -------------------------------------------------------------
    //      Cart-Box-Open/Remove
    // -------------------------------------------------------------

        (function() {
            var openclose = $(".cart-wrapper");
            var openclosetwo = $(".cart-wrapper-two");

            openclose.on("click" ,function() {
                return $(this).toggleClass("open");
            });

            openclosetwo.on("click" ,function() {
                return $(this).toggleClass("open");
            });

        }());



    // -------------------------------------------------------------
    //      Search Bar
    // -------------------------------------------------------------

        (function () {
            var openbar = $(".open-bar");
            var searchbar = $("#search-bar");
            var closebar = $(".close-bar");

            openbar.on("click" ,function(){
                searchbar.addClass("active");
                return false;
            });

            closebar.on("click" ,function() {
                searchbar.removeClass("active");
                return false;
            });
        }());



    // -------------------------------------------------------------
    //      Map/Contact-Box-Remove
    // -------------------------------------------------------------

        (function () {
            var mapview = $(".map-view");
            var contactsection = $(".contact-section-one");
            var formview = $(".form-view");

            mapview.on("click" ,function() {
                contactsection.fadeOut('3000');
                return false;
            });

            formview.on("click" ,function() {
                contactsection.fadeIn('3000');
                return false;
            });
        }());



    

    // -------------------------------------------------------------
    //      LightBox-Js
    // -------------------------------------------------------------

        if ($('#lightBox, #lightBox-2').length) {
            $('#lightBox, #lightBox-2').poptrox({
                usePopupCaption: true,
                usePopupNav: true,
                popupPadding: 0
            });
        }




       
    // -------------------------------------------------------------
    //      Service-Slider
    // -------------------------------------------------------------

        if ($('.service-carousel').length) {
            $('.service-carousel').owlCarousel({
                loop:true,
                autoplay:true,
                autoplayTimeout: 3000,
                margin:30,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                        dots:true,
                    },
                    600:{
                        items:2,
                        nav:true,
                        dots:true,
                    },
                    1000:{
                        items:3
                    }
                }
            });
        }



    // -------------------------------------------------------------
    //      Gallery-Seven-Slider
    // -------------------------------------------------------------

        if ($('.portfolio-wraper-nineteen').length) {
            $('.portfolio-wraper-nineteen').owlCarousel({
                loop:true,
                autoplay:true,
                nav:false,
                dots: false,
                stagePadding: 150,
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                        dots:true,
                        stagePadding: 0,
                    },
                    600:{
                        items:2,
                        nav:true,
                        dots:true,
                        stagePadding: 50,
                    },
                    1000:{
                        items:2
                    }
                }
            });
        }




    // -------------------------------------------------------------
    //      Gallery-Eight-Slider
    // -------------------------------------------------------------

        if ($('.portfolio-wraper-sixteen').length) {
            $('.portfolio-wraper-sixteen').owlCarousel({
                loop:true,
                autoplay:true,
                nav:false,
                dots: false,
                stagePadding: 150,
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                        dots:true,
                        stagePadding: 0,
                    },
                    600:{
                        items:2,
                        nav:true,
                        dots:true,
                        stagePadding: 50,
                    },
                    1000:{
                        items:2
                    }
                }
            });
        }




    // -------------------------------------------------------------
    //      Worker-Slider
    // -------------------------------------------------------------

        if ($('.worker-carousel').length) {
            $('.worker-carousel').owlCarousel({
                loop:true,
                autoplay:false,
                margin:30,
                nav:false,
                dot:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false,
                        dots:true,
                    },
                    767:{
                        items:2,
                        nav:false,
                        dots:true,
                    },
                    1000:{
                        items:4
                    }
                }
            });
        }




    //-------------------------------------------------------
    //  	counter Section
    //-------------------------------------------------------
       
        function funFactCounting() {
            if ($('.counting-section').length) {
                $('.counting-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
                    if (visible) {
                        $(this).find('.timer').each(function () {
                            var $this = $(this);
                            $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                                duration: 2000,
                                easing: 'linear',
                                step: function () {
                                    $this.text(Math.ceil(this.Counter));
                                }
                            });
                        });

                        $(this).off('inview');
                    }
                });
            }
        }



    // -------------------------------------------------------------
    // Countdown
    // ------------------------------------------------------------- 

        if ($('#countdownOne, #countdownTwo, #countdownThree, #countdownFour').length) {
            $("#countdownOne, #countdownTwo, #countdownThree, #countdownFour").countdown({
                date: "30 October 2017 12:00:00",
                format: "on"
            });
        }




    // -------------------------------------------------------------
    //      Google Map
    // -------------------------------------------------------------

        if ($('#googleMap').length) {
            google.maps.event.addDomListener(window, 'load', init);
            
            function init() {
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 9,
                    scrollwheel: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(37.984998, -120.382831), // New York

                    // This is where you would paste any style found on Snazzy Maps.
                    styles:[{"featureType": "all","elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},
                            {"featureType": "all","elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},
                            {"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
                            {"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},
                            {"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]},
                            {"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#ebe8de"},{"lightness": 20}]},
                            {"featureType": "poi","elementType": "geometry","stylers": [{"color": "#ebe8de"},{"lightness": 21}]},
                            {"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#cbe6a3"},{"lightness": 21}]},
                            {"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},
                            {"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},
                            {"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},
                            {"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},
                            {"featureType": "transit","elementType": "geometry","stylers": [{"color": "#cbe6a3"},{"lightness": 19}]},
                            {"featureType": "water","elementType": "geometry","stylers": [{"color": "#a3ccff"},{"lightness": 17}]}]};

                            // Get the HTML DOM element that will contain your map 
                            var mapElement = document.getElementById('googleMap');

                            // Create the Google Map using our element and options defined above
                            var map = new google.maps.Map(mapElement, mapOptions);

                            // Let's also add a marker while we're at it
                            var marker = new google.maps.Marker({
                                position: new google.maps.LatLng(37.984998, -120.382831),
                                map: map,
                                title: 'Snazzy!'
                            });
            }
        }




    // -------------------------------------------------------------
    //  Back To Top
    // -------------------------------------------------------------

        function backToTopBtnAppear() {
            if ($("#toTop").length) {
                var windowpos = $(window).scrollTop(),
                    backToTopBtn = $("#toTop");

                if (windowpos > 300) {
                    backToTopBtn.fadeIn();
                } else {
                   backToTopBtn.fadeOut();
                }
            }
        }

        function backToTop() {
            if ($("#toTop").length) {
                var backToTopBtn = $("#toTop");
                backToTopBtn.on("click", function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 1000);
                    
                    return false;
                })
            }
        }



	// -------------------------------------------------------------
    // 		Preloader
    // -------------------------------------------------------------

        function preloader() {
            if($('#preloader').length) {
                $('#preloader').delay(100).fadeOut(500, function() {});
            }
        }
    
    


    // -------------------------------------------------------------
    //      WHEN WINDOW LOAD
    // -------------------------------------------------------------

        $(window).on("load", function() {

            preloader();

            funFactCounting();

            backToTop();

            new WOW().init();

        })



    // -------------------------------------------------------------
    //      WHEN WINDOW SCROLL
    // -------------------------------------------------------------
        $(window).on("scroll", function() {

            backToTopBtnAppear();

            menuSticky();

            menuFixed();

        });

});   // Jquery-End