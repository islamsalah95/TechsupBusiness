(function ($) {
    'use strict';
    $(document).ready(function () {
        /*==============================
        Menu
        ==============================*/
        $('.header__btn').on('click', function () {
            $(this).toggleClass('header__btn--active');
            $('.header__menu').toggleClass('header__menu--active');
        });

        $('.header__search .close, .header__action--search button').on('click', function () {
            $('.header__search').toggleClass('header__search--active');
        });
        /*==============================
        Multi level dropdowns
        ==============================*/
        $('ul.dropdown-menu [data-toggle="dropdown"]').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();

            $(this).siblings().toggleClass('show');
        });

        AOS.init({
            once: true,
        });


        $(document).ready(function () {
            $('.select2').select2();
        });

        // setTimeout(function () {
        // 	$('body').addClass('loaded');


        // }, 1500);
        // loader();

        //   function loader(_success) {
        // 			var obj = document.querySelector('.loader'),
        // 			inner = document.querySelector('.preloader_inner'),
        // 			page = document.querySelector('body');
        // 			obj.classList.add('show');
        // 			page.classList.remove('show');
        // 			var w = 0,
        // 				t = setInterval(function() {
        // 					w = w + 1;
        // 					inner.textContent = w+'%';
        // 					if (w === 100){
        // 						obj.classList.remove('show');
        // 						page.classList.add('show');
        // 						clearInterval(t);
        // 						w = 0;
        // 						if (_success){
        // 							return _success();
        // 						}
        // 					}
        // 				}, 30);
        // 		}
        $(document).on('click', function (e) {
            $('.dropdown-menu').removeClass('show');
        });
        //   rang
        // $(function () {
        // 	var rangePercent = $('[type="range"]').val();
        // 	$('[type="range"]').on('change input', function () {
        // 		rangePercent = $('[type="range"]').val();
        // 		$('.number').html(rangePercent + '<span></span>');
        // 		$('[type="range"], h4>span').css('filter', 'hue-rotate(-' + rangePercent + 'deg)');
        // 		// $('h4').css({'transform': 'translateX(calc(-50% - 20px)) scale(' + (1+(rangePercent/100)) + ')', 'left': rangePercent+'%'});
        // 		$('.number').css({ 'transform': 'translateX(-50%) scale(' + (1 + (rangePercent / 100)) + ')', 'left': rangePercent + '%' });
        // 	});
        // });
        // progress
        // $(".next").click(function () {
        // 	if ($(".step-wrapper li:last-child").hasClass('completed')) {
        // 		alert("completed");
        // 		return
        // 	}
        // 	$(".step-wrapper li.active").addClass("completed").removeClass("active").next('li').addClass("active");
        // });

        // $(".previous").click(function () {
        // 	if ($(".step-wrapper li:first-child").hasClass('active')) {
        // 		return
        // 	}
        // 	$(".step-wrapper li.active").removeClass("active completed").prev('li').addClass("active").removeClass('completed');
        // 	if ($(".step-wrapper li:last-child").hasClass('completed')) {
        // 		$(".step-wrapper li:last-child").removeClass('completed').addClass('active')
        // 	}
        // });

        // Simulate loading with a delay (you can replace this with your actual loading logic)
        // setTimeout(() => {
        // 	togglePreloaderLoaded();
        // }, 3000);

        /*==============================
           start slider
     ==============================*/

        $(window).on("load", function () {
            $('body:not(.rtl) .slider-techsup').owlCarousel({
                loop: true,
                rewind: true,
                margin: 10,
                lazyLoad: true,
                responsiveClass: true,
                smartSpeed: 500,
                // autoplay: true,
                // autoplayTimeout: 8000,
                dots: false,
                navText: ["<div class=\"paralax-arrow slick-prev\"><div class=\"slick-arrow paralax-elem\"><i class='fas fa-angle-double-left'></i></div></div>", "<div class=\"paralax-arrow slick-next\"><div class=\"slick-arrow paralax-elem\"><i class='fas fa-angle-double-right'></i></div></div>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                    }
                }
            });
        });
        /* HOME SLIDE */
        $(window).on("load", function () {
            $('body.rtl .slider-techsup').owlCarousel({
                loop: true,
                rewind: true,
                rtl: true,
                margin: 10,
                lazyLoad: true,
                responsiveClass: true,
                smartSpeed: 500,
                // autoplayTimeout: 8000,
                dots: false,
                navText: ["<i class='fas fa-angle-double-left'></i>", "<i class='fas fa-angle-double-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                    }
                }
            });
        });

        // 		$(window).on("load", function () {
        //   $('body.rtl .service-boxes-slider').owlCarousel({
        //     loop: true,
        //     rewind: true,
        //     rtl: true, // Change this to true to make the slider slide from right to left
        //     margin: 10,
        //     lazyLoad: true,
        //     responsiveClass: true,
        //     smartSpeed: 500,
        //     autoplayTimeout: 8000,
        //     dots: false,
        //     navText: ["<i class='fas fa-angle-double-left'></i>", "<i class='fas fa-angle-double-right'></i>"],
        //     responsive: {
        //       0: {
        //         items: 1,
        //         nav: true
        //       },
        //       600: {
        //         items: 1,
        //         nav: true
        //       },
        //       1000: {
        //         items: 1,
        //         nav: true,
        //       }
        //     }
        //   });
        // });

        $(window).on("load", function () {
            $('body.rtl .partners-boxes-slider').owlCarousel({
                loop: false,
                rewind: true,
                rtl: true,
                margin: 10,
                lazyLoad: true,
                responsiveClass: true,
                smartSpeed: 500,
                autoplayTimeout: 8000,
                dots: false,
                navText: ["<i class='fas fa-angle-double-left'></i>", "<i class='fas fa-angle-double-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                    }
                }
            });
        });

        /* SERVICES BOXES */
        // $('body:not(.rtl) .service-boxes-slider').owlCarousel({
        // 	autoplay: false,
        // 	loop: true,
        // 	smartSpeed: 500,
        // 	autoplayTimeout: 6000,
        // 	margin: 10,
        // 	rtl: false,
        // 	nav: false,
        // 	arrows: false,
        // 	autoplay: true,
        // 	autoplayTimeout: 4000,
        // 	dots: true,
        // 	responsiveClass: true,
        // 	responsive: {
        // 		0: {
        // 			items: 1
        // 		},
        // 		600: {
        // 			items: 2
        // 		},
        // 		1000: {
        // 			items: 3
        // 		}
        // 	}
        // });

        // $('.rtl .service-boxes-slider').owlCarousel({
        // 	rtl: true,
        // 	loop: false,
        // 	autoplay: true,
        // 	smartSpeed: 500,
        // 	autoplayTimeout: 6000,
        // 	margin: 10,
        // 	nav: false,
        // 	arrows: false,
        // 	dots: true,
        // 	responsiveClass: true,
        // 	responsive: {
        // 		0: {
        // 			items: 1
        // 		},
        // 		600: {
        // 			items: 2
        // 		},
        // 		1000: {
        // 			items: 3
        // 		}
        // 	}
        // });






        $('body:not(.rtl) .service-boxes-slider').owlCarousel({
            autoplay: true,
            loop: true,
            rewind: true,
            smartSpeed: 500,
            autoplayTimeout: 6000,
            margin: 10,
            nav: false,
            arrows: false,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: true,
            responsiveClass: true,
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
        });

        $('.rtl .service-boxes-slider').owlCarousel({
            rtl: true,
            loop: true,
            autoplay: true,
            smartSpeed: 500,
            autoplayTimeout: 6000,
            margin: 10,
            nav: false,
            arrows: false,
            dots: true,
            responsiveClass: true,
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
        });
        /* partners BOXES */

        $('body:not(.rtl) .partners-boxes-slider').owlCarousel({
            autoplay: false,
            loop: false,
            smartSpeed: 500,
            autoplayTimeout: 6000,
            margin: 5,
            nav: false,
            arrows: false,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 5
                }
            }
        });

        $('.rtl .partners-boxes-slider').owlCarousel({
            rtl: true,
            loop: false,
            autoplay: true,
            smartSpeed: 500,
            autoplayTimeout: 3000,
            margin: 5,
            nav: false,
            arrows: false,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 5
                }
            }
        });



        $('.rtl .clients-slider').owlCarousel({
            rtl: true,
            loop: true,
            lazyLoad: true,
            autoplay: true,
            smartSpeed: 500,
            autoplayTimeout: 4000,
            margin: 15,
            nav: false,
            arrows: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });



        // portfolio

        $('body:not(.rtl) .portfolio-boxes-slider').owlCarousel({
            autoplay: true,
            loop: true,
            rewind: true,
            smartSpeed: 500,
            autoplayTimeout: 6000,
            margin: 10,
            nav: false,
            arrows: false,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.rtl .portfolio-boxes-slider').owlCarousel({
            rtl: true,
            loop: true,
            autoplay: true,
            smartSpeed: 500,
            autoplayTimeout: 6000,
            margin: 30,
            nav: false,
            arrows: false,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        });



        // portfolio

        $('body:not(.rtl) .blog-boxes-slider').owlCarousel({
            autoplay: true,
            loop: true,
            rewind: true,
            smartSpeed: 500,
            autoplayTimeout: 6000,
            margin: 10,
            nav: false,
            arrows: false,
            autoplay: true,
            autoplayTimeout: 4000,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        });

        $('.rtl .blog-boxes-slider').owlCarousel({
            rtl: true,
            loop: true,
            autoplay: true,
            smartSpeed: 500,
            autoplayTimeout: 6000,
            margin: 10,
            nav: false,
            arrows: false,
            dots: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        });


        /*==============================
           end slider
        ==============================*/
        $(function () {
            $('label').magnificPopup({
                type: 'inline',
                items: { src: '#modal' },
                preloader: false,
                modal: true
            });
            $(document).on('click', '.popup-modal-dismiss', function (e) {
                e.preventDefault();
                $.magnificPopup.close();
            });
        });

        if (jQuery('.gallery').length) {
            jQuery('.gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                },
                // other options
            });
        }
        if (jQuery('.gallery').length) {
            jQuery('.gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: true
                },
                // other options
            });
        }

        if (jQuery('.popup-vimeo-video').length) {
            $(".popup-vimeo-video").magnificPopup({
                type: "iframe",
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
        /* HOME ABOUT PARALAX */
        if (jQuery(window).width() > 768) {
            let img1 = document.getElementsByClassName('thumparallax');
            new simplePara2(img1, {
                delay: 2
            });

            let img2 = document.getElementsByClassName('thumparallax-down');
            new simplePara2(img2, {
                delay: 2,
                orientation: 'down'
            });
        }

        /* FUN FACTS COUNTS */
        if (jQuery('#fun-facts').length) {
            function isScrolledIntoView(el) {
                var elemTop = el.getBoundingClientRect().top;
                var elemBottom = el.getBoundingClientRect().bottom;

                var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
                return isVisible;
            }

            $(window).on('scroll', function (e) {
                if (isScrolledIntoView(document.getElementById('fun-facts'))) {
                    $('.timer').countTo();
                    $(window).off(e);
                }
            });
        }

        /* SIDEBAR */
        jQuery('.side_panel_sidebar').on("click", function () {
            jQuery('.fixed-sidebar-menu').toggleClass('open');
            jQuery(this).parent().find('#navbar').toggleClass('hidden');
            jQuery('.fixed-sidebar-menu-overlay').addClass('visible');
        });
        jQuery('.fixed-sidebar-menu-overlay').on("click", function () {
            jQuery('.fixed-sidebar-menu').removeClass('open');
            jQuery(this).removeClass('visible');
        });
        jQuery('.fixed-sidebar-menu .close-sidebar').on("click", function () {
            jQuery('.fixed-sidebar-menu').removeClass('open');
            jQuery('.fixed-sidebar-menu-overlay').removeClass('visible');
        });
        jQuery(document).on("keyup", function (e) {
            if (e.keyCode == 27) {
                jQuery('.fixed-sidebar-menu').removeClass('open');
                jQuery('.fixed-sidebar-menu-overlay').removeClass('visible');
            }
        });




        $("#addOtherRequire").on("click", function () {
            let x = $(".added-card-require").clone();
            x.find('input:not([type="radio"])').val('');
            let lastId = $('#last_value').data('last-value');
            lastId++;

            $('#last_value').data('last-value', lastId);

            x.find('input[type="radio"]').each(function(index) {
                let newId = `repeated-item-${lastId}-${index}`;
                $(this).attr('id', newId);
            });

            x.find('[for]').each(function(index) {
                let newFor = `repeated-item-${lastId}-${index}`;
                $(this).attr('for', newFor);
            });

            x.find('input').each(function(index) {
                let name = $(this).attr('name');
                $(this).attr('name', name.replace('[0]', `[${lastId}]`));
            });

            x.find('small').remove();
            x.removeClass("added-card-require").appendTo(".require-card-wrapper");
        });

        /* start  back to top */
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })



        $(".js-example-basic-multiple-limit").select2({
            maximumSelectionLength: 2
        });



        $('#search').on('keyup', function () {
            var query = $(this).val();
            if ($(this).val() != "") {
                $.ajax({
                    url: "/search", // blade-engine / php functionality
                    type: "GET",
                    data: { 'project': query },
                    beforeSend: function () {
                        $('.header__search button i').removeClass('fa-search').addClass('fa-spinner fa-spin');
                    },

                    success: function (data) {
                        $('.header__search button i').removeClass('fa-spinner fa-spin').addClass('fa-search');
                        $('#project_list').addClass("active");
                        $('#project_list').html(data);
                    }
                })
            } else {
                $('#project_list').html("");
            }
        });
        $(document).on('click', '.slider-techsup-section, .header__content, .breadcrumb-area, .breadcrumb-area + div', function () {
            $('#project_list').html("");
        });


        // $(function () {
        // 	$('label').magnificPopup({
        // 		type: 'inline',
        // 		items: { src: '#modal' },
        // 		preloader: false,
        // 		modal: true
        // 	});
        // 	$(document).on('click', '.popup-modal-dismiss', function (e) {
        // 		e.preventDefault();
        // 		$.magnificPopup.close();
        // 	});
        // });

        // if (jQuery('.gallery').length) {
        // 	jQuery('.gallery').magnificPopup({
        // 		delegate: 'a',
        // 		type: 'image',
        // 		gallery: {
        // 			enabled: true
        // 		},
        // 		// other options
        // 	});
        // }
        // if (jQuery('.gallery').length) {
        // 	jQuery('.gallery').magnificPopup({
        // 		delegate: 'a',
        // 		type: 'image',
        // 		gallery: {
        // 			enabled: true
        // 		},
        // 		// other options
        // 	});
        // }

        if (jQuery('.popup-vimeo-video').length) {
            $(".popup-vimeo-video").magnificPopup({
                type: "iframe",
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }

        // if (jQuery('.portfolio-section-filters').length) {
        // 	const filters = document.querySelectorAll('.filter');

        // 	filters.forEach(filter => {

        // 		filter.addEventListener('click', function () {

        // 			var liElements = document.querySelectorAll(".portfolio-section-filters .filter.active");
        // 			if (liElements.length > 0) {
        // 				liElements[0].classList.remove("active");
        // 			}

        // 			filter.classList.add("active");

        // 			let selectedFilter = filter.getAttribute('data-filter');

        // 			let itemsToHide = document.querySelectorAll(`.projects .project:not([data-filter='${selectedFilter}'])`);
        // 			let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

        // 			if (selectedFilter == 'all') {
        // 				itemsToHide = [];
        // 				itemsToShow = document.querySelectorAll('.projects [data-filter]');
        // 			}

        // 			itemsToHide.forEach(el => {
        // 				el.classList.add('hide');
        // 				el.classList.remove('show');
        // 			});

        // 			itemsToShow.forEach(el => {
        // 				el.classList.remove('hide');
        // 				el.classList.add('show');
        // 			});

        // 		});
        // 	});
        // }

        jQuery(window).on("scroll", function () {
            (jQuery(window).scrollTop() > 250 && jQuery(window).width() > 1200 && (
                jQuery("body").addClass("sticky"),
                    jQuery(".header__content").addClass("animated fadeInDown"
                    )),
            jQuery(window).scrollTop() < 250 && (jQuery("body").removeClass("sticky"),
                jQuery(".header__content").removeClass("animated fadeInDown")))

        }), jQuery(window).resize(function () {
            jQuery(window).width() < 1200 && jQuery("body").removeClass("sticky")
        });


    })
}(jQuery))




var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};


!function (window) {
    var $q = function (q, res) {
            if (document.querySelectorAll) {
                res = document.querySelectorAll(q);
            } else {
                var d = document
                    , a = d.styleSheets[0] || d.createStyleSheet();
                a.addRule(q, 'f:b');
                for (var l = d.all, b = 0, c = [], f = l.length; b < f; b++)
                    l[b].currentStyle.f && c.push(l[b]);

                a.removeRule(0);
                res = c;
            }
            return res;
        }
        , addEventListener = function (evt, fn) {
            window.addEventListener
                ? this.addEventListener(evt, fn, false)
                : (window.attachEvent)
                    ? this.attachEvent('on' + evt, fn)
                    : this['on' + evt] = fn;
        }
        , _has = function (obj, key) {
            return Object.prototype.hasOwnProperty.call(obj, key);
        }
    ;

    function loadImage(el, fn) {
        var img = new Image()
            , src = el.getAttribute('data-src');
        img.onload = function () {
            if (!!el.parent)
                el.parent.replaceChild(img, el)
            else
                el.src = src;

            fn ? fn() : null;
        }
        img.src = src;
    }

    function elementInViewport(el) {
        var rect = el.getBoundingClientRect()

        return (
            rect.top >= 0
            && rect.left >= 0
            && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        )
    }

    var images = new Array()
        , query = $q('img.lazy')
        , processScroll = function () {
            for (var i = 0; i < images.length; i++) {
                if (elementInViewport(images[i])) {
                    loadImage(images[i], function () {
                        images.splice(i, i);
                    });
                }
            };
        }
    ;
    for (var i = 0; i < query.length; i++) {
        images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll', processScroll);

}(this);

function scrollToSection() {
    document.getElementById('techsupApps').scrollIntoView({ behavior: 'smooth' });
}
function BackgroundNode({ node, loadedClassName }) {
    let src = node.getAttribute('data-background-image-url');
    let show = (onComplete) => {
        requestAnimationFrame(() => {
            node.style.backgroundImage = `url(${src})`
            node.classList.add(loadedClassName);
            onComplete();
        })
    }

    return {
        node,

        // onComplete is called after the image is done loading.
        load: (onComplete) => {
            let img = new Image();
            img.onload = show(onComplete);
            img.src = src;
        }
    }
}
let defaultOptions = {
    selector: '[data-background-image-url]',
    loadedClassName: 'loaded'
}
function BackgroundLazyLoader({ selector, loadedClassName } = defaultOptions) {
    let nodes = [].slice.apply(document.querySelectorAll(selector))
        .map(node => new BackgroundNode({ node, loadedClassName }));

    let callback = (entries, observer) => {
        entries.forEach(({ target, isIntersecting }) => {
            if (!isIntersecting) {
                return;
            }

            let obj = nodes.find(it => it.node.isSameNode(target));

            if (obj) {
                obj.load(() => {
                    // Unobserve the node:
                    observer.unobserve(target);
                    // Remove this node from our list:
                    nodes = nodes.filter(n => !n.node.isSameNode(target));

                    // If there are no remaining unloaded nodes,
                    // disconnect the observer since we don't need it anymore.
                    if (!nodes.length) {
                        observer.disconnect();
                    }
                });
            }
        })
    };

    let observer = new IntersectionObserver(callback);
    nodes.forEach(node => observer.observe(node.node));
};
BackgroundLazyLoader();
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".btnsvg");

    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            var imageContainer = button.nextElementSibling;
            imageContainer.style.display = "block";

            setTimeout(function () {
                imageContainer.style.display = "none";
            }, 2000);
        });
    });
});
// $(document).ready(function () {
//     //Initialize tooltips
//     $('.nav-tabs > li a[title]').tooltip();

//     //Wizard
//     $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

//         var $target = $(e.target);

//         if ($target.parent().hasClass('disabled')) {
//             return false;
//         }
//     });

//     $(".next-step").click(function (e) {

//         var $active = $('.wizard .nav-tabs li.active');
//         $active.next().removeClass('disabled');
//         nextTab($active);

//     });
//     $(".prev-step").click(function (e) {

//         var $active = $('.wizard .nav-tabs li.active');
//         prevTab($active);

//     });
// });

// function nextTab(elem) {
//     $(elem).next().find('a[data-toggle="tab"]').click();
// }
// function prevTab(elem) {
//     $(elem).prev().find('a[data-toggle="tab"]').click();
// }
$(document).ready(function () {



    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var $target = $(e.target);
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".step-wrapper li").click(function (e) {
        var $clickedStep = $(this);
        var clickedIndex = $clickedStep.index();
        var $active = $('.step-wrapper li.active');

        // Check if the clicked step is before or after the active step
        if (clickedIndex > $active.index()) {
            $active.nextUntil($clickedStep).andSelf().removeClass('completed').addClass('active');
        } else if (clickedIndex < $active.index()) {
            $active.prevUntil($clickedStep).andSelf().removeClass('completed').addClass('active');
        }
    });
});
// Helper function to mark a step as completed
function markStepAsCompleted(index) {
    $('.step-wrapper li').eq(index).removeClass('active').addClass('completed');
}
(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

$("#addOtherUser").on("click", function () {
    $(".added-card").clone().removeClass("added-card").appendTo(".user-card-wrapper");
});

$(document).on("click", ".delete-user", function () {
    $(this).closest(".card").remove();
});

$("#addOtherRequire").on("click", function () {
    $(".added-card-require").clone().removeClass("added-card-require").appendTo(".require-card-wrapper");
});




$(document).on("click", ".delete-require", function () {
    $(this).closest(".card").remove();
});











document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".btnsvg");

    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            var imageContainer = button.nextElementSibling;
            imageContainer.style.display = "block";

            setTimeout(function () {
                imageContainer.style.display = "none";
            }, 2000);
        });
    });
});



var slider = document.getElementById("myRange");
slider.oninput = function () {
    var value = (slider.value - slider.min) / (slider.max - slider.min);
    slider.style.background = 'linear-gradient(to right, #1597ff 0%, #1597ff ' + (value * 100) + '%, #ddd ' + (value * 100) + '%)';
};
