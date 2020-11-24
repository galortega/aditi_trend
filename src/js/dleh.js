$(document).ready(function($) {
    "use strict";
    //=============================MENU / MOBILE============================//

    $('.togglebutton').on('click', function() {
        $('body').addClass('menu-open');
    });

    $('.menu-mobile .close, .wrapper').on('click', function() {
        $('body').removeClass('menu-open');
        $('.togglebutton').removeClass('oct-line-active');
    });

    $(".togglebutton").on("click", function() {
        $(this).toggleClass("oct-line-active");
    })
    //dropdown FAQ
    $(".fa-title").on("click", function() {
        $(this).toggleClass('active');
    });
    $(".fa-title1").on("click", function() {
        $(this).toggleClass('active');
    });
    //=============================ITEM / EVEN / OUR HERO============================//
    $('#owl-even').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    $('#owl-even_2').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    //=============================OWL-CAROUSEL / SLIDER============================//
    $('#owl-slider').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    /*owlCarousel-testimonials*/
    $('#testimonials').owlCarousel({
        loop: true,
        nav: true,
        margin: 30, // autoplay:true,
        // autoplayTimeout:9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*end-owlCarousel-testimonials*/
    $('#owl-clients').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
    $('#owl-members').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('#owl-members1').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        // autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('#showcase10').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    //=============================OWL-CAROUSEL / SERVICE============================//
    $('#owl-service').owlCarousel({
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    //=============================dropdown-submenu1============================//
    $('.dropdown-submenu1 a.test').on("click", function(e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    /*end-owlCarousel-rooms*/
    $('ul li a').on("click", function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });
    /*scroll-top*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').on("click", function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /*counter*/
    $('.info-4').each(function() {
        $('.counter').counterUp({
            delay: 3,
            time: 1000
        });
    });
    //=============================SHOWCASE-CONTENT============================//
    $('#show-content').on("click", function() {
        $('.hidden-content').slideToggle("slow");
    });


    //=============================MENU / SCROLL============================//
    $(function() {
        var stickyNav = $('#header-top').offset().top;
        $(window).scroll(function() {
            if ($(window).scrollTop() > stickyNav) {
                $('#header-top').addClass('header-top-dleh');
            } else {
                $('#header-top').removeClass('header-top-dleh');
            }
        });
    });

    //=============================MAPL============================//

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 18,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(-37.817037, 144.955646), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{ "stylers": [{ "hue": "#dd0d0d" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(-37.817037, 144.955646),
            map: map,
            title: 'Snazzy!'
        });
    }

    if ($('#map').length > 0) {
        google.maps.event.addDomListener(window, 'load', init);

    }


    //=============================SEARCH============================//
    $(function() {
        $('#search').each(function() {
            $('a[href="#search"]').on('click', function(event) {
                event.preventDefault();
                $('#search').addClass('open');
                $('#search > form > input[type="search"]').focus();
            });

            $('#search, #search button.close').on('click keyup', function(event) {
                if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
                    $(this).removeClass('open');
                }
            });

            $('form').submit(function(event) {
                event.preventDefault();
                return false;
            })
        });

    });


    //=============================SHOWCASE-10============================//
    $(".f-title").on("click", function() {
        $(this).toggleClass('active');
    });

    //=============================COUNTERUP============================//
    $('.funfact-number').each(function() {
        $('.statistic-counter').counterUp({
            delay: 5,
            time: 2000
        });
    });
    /*pie-charts*/
    $('.progress1 > .loader').each(function() {
        var $this = $(this);
        var svg = '<svg viewBox="-10 -10 220 220"><circle cx="0" cy="0" fill="transparent" r="100" stroke="#e09300" stroke-width="5" transform="translate(100, 100)"></circle></svg>';

        $this.append(svg, svg).find('>svg').last().find('>circle').attr('stroke-dashoffset', -Math.round((parseInt($this.data('percent').replace('%', '')) * 629) / 100));
    });

    /* scroll-dow*/
    $(function() {
        $('.scroll-dowbtn').on("click", function() {
            $('html, body').animate({ scrollTop: $('.ok').offset().top }, 'slow');
            return false;
        });
    });
    /*navigation-4*/
    $(function() {
        var x = 0;
        setInterval(function() {
            x -= 1;
            $('.navigations-4-v4').css('background-position', x + 'px 0');
        }, 120);
    })
    /*skill-bars*/
    $(".skills").addClass("active")
    $(".skills .skill .skill-bar span").each(function() {
        $(this).animate({
            "width": $(this).parent().attr("data-bar") + "%"
        }, 1000);
        $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
    });
    setTimeout(function() {
        $(".skills .skill .skill-bar span b").animate({ "opacity": "1" }, 4000);
    }, 1000);

    /*cart*/
    $(document).on('click', '.number-spinner button', function() {
        var btn = $(this),
            oldValue = btn.closest('.number-spinner').find('input').val().trim(),
            newVal = 0;

        if (btn.attr('data-dir') == 'up') {
            newVal = parseInt(oldValue) + 1;
        } else {
            if (oldValue > 1) {
                newVal = parseInt(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        btn.closest('.number-spinner').find('input').val(newVal);
    });

    /*masonry*/
    $('#container').each(function() {
        $('#container').masonry();
    });

    /*Ligh Box*/
    $('.lightbox').each(function() {
        $('.lightbox').littleLightBox();
    });

    (function($) {
        /* Gallery Isotope */
        function GalleryIsotope() {
            if ($('.gallery').length) {
                $('.gallery').each(function(index, el) {
                    var $this = $(this),
                        $isotope = $this.find('.gallery-isotope'),
                        $filter = $this.find('.gallery-cat');

                    if ($isotope.length) {
                        var isotope_run = function(filter) {
                            $isotope.isotope({
                                itemSelector: '.item-isotope',
                                filter: filter,
                                percentPosition: true,
                                masonry: {
                                    columnWidth: '.item-size'
                                },
                                transitionDuration: '0.6s',
                                hiddenStyle: {
                                    opacity: 0
                                },
                                visibleStyle: {
                                    opacity: 1
                                }
                            });
                        }

                        $filter.on('click', 'a', function(event) {
                            event.preventDefault();
                            $(this).parents('ul').find('.active').removeClass('active');
                            $(this).parent('li').addClass('active');
                            isotope_run($(this).attr('data-filter'));
                        });

                        isotope_run('*');
                    }
                });
            }
        }

        $(window).load(function() {
            $('#preloader').delay(1000).fadeOut('400', function() {
                $(this).fadeOut()
            });
            $('body').append('<div class="awe-popup-overlay" id="awe-popup-overlay"></div><div class="awe-popup-wrap" id="awe-popup-wrap"><div class="awe-popup-content"></div><span class="awe-popup-close" id="awe-popup-close"></div>');
            GalleryIsotope();
        });

    })(jQuery);


});