$(document).ready(() => {


    let ua = navigator.userAgent.toLowerCase();
    let is_safari = (ua.indexOf("safari/") > -1 && ua.indexOf("chrome") < 0);
    if (is_safari) {
        let video = document.getElementsByTagName('video');
        setTimeout(function () {
            video[0].play();
            video[1].play();
        }, 50);
    }
    document.getElementsByTagName('video')[0].setAttribute('muted', 'true');
    document.getElementsByTagName('video')[1].setAttribute('muted', 'true');
    if ($(window).width() > 900) {
        window.sr = ScrollReveal({
            duration: 500,
            distance: '5vh',
            easing: 'ease-out',
            scale: 1,
        });
        sr.reveal('#iphone', {delay: 200, origin: 'bottom'});


        sr.reveal('#manage .text', {delay: 400, origin: 'left'});
        sr.reveal('#manage figure', {delay: 200, origin: 'right'});


        sr.reveal('#create figure', {delay: 200, origin: 'top'});
        sr.reveal('#create h2, #create p', {delay: 400, origin: 'bottom'});


        sr.reveal('#growth figure', {delay: 200, origin: 'left'});
        sr.reveal('#growth .text', {delay: 400, origin: 'right'});


        sr.reveal('#about h2', {delay: 200, origin: 'bottom'});
        sr.reveal('#about p', {delay: 400, origin: 'bottom'});
        sr.reveal('#about img', {delay: 600, origin: 'bottom'});


        sr.reveal('#reviews .review:nth-child(1)', {delay: 200, origin: 'right'});
        sr.reveal('#reviews .review:nth-child(2)', {delay: 400, origin: 'left'});
        sr.reveal('#reviews .review:nth-child(3)', {delay: 600, origin: 'right'});
        sr.reveal('#reviews a', {delay: 800, origin: 'left'});


        sr.reveal('#pricing > *', {delay: 200, origin: 'top'}, 50);
    } else {
        window.sr = ScrollReveal({
            duration: 500,
            distance: '5vh',
            easing: 'ease-out',
            scale: 1,
        });
        sr.reveal('#iphone', {delay: 200, origin: 'bottom'});


        sr.reveal('#manage .text', {delay: 400, origin: 'bottom'});
        sr.reveal('#manage figure', {delay: 200, origin: 'bottom'});


        sr.reveal('#create figure', {delay: 200, origin: 'bottom'});
        sr.reveal('#create h2, #create p', {delay: 400, origin: 'bottom'});


        sr.reveal('#growth figure', {delay: 200, origin: 'bottom'});
        sr.reveal('#growth .text', {delay: 400, origin: 'bottom'});


        sr.reveal('#about h2', {delay: 200, origin: 'bottom'});
        sr.reveal('#about p', {delay: 400, origin: 'bottom'});
        sr.reveal('#about img', {delay: 600, origin: 'bottom'});


        sr.reveal('#reviews .review:nth-child(1)', {delay: 200, origin: 'bottom'});
        sr.reveal('#reviews .review:nth-child(2)', {delay: 400, origin: 'bottom'});
        sr.reveal('#reviews .review:nth-child(3)', {delay: 600, origin: 'bottom'});
        sr.reveal('#reviews a', {delay: 800, origin: 'bottom'});


        sr.reveal('#pricing > *', {delay: 200, origin: 'bottom'}, 50);
    }


    if ($(window).width() > 900) {
        let arr = document.getElementsByClassName('slider-dot');
        let index = $.scrollify.currentIndex();
        $('header a:not(.link)').click(e => {
            e.preventDefault();
        });
        $(function () {
            $.scrollify(
                {
                    section: 'body > section',
                    updateHash: false,
                    setHeights: false,
                    standardScrollElements: "#pricing",
                    scrollSpeed: 1100,
                    easing: "easeOutExpo",
                    scrollBars: true,
                    before: function () {
                        arr[index].style.transform = 'scale(1)';
                        index = $.scrollify.currentIndex();
                        arr[index].style.transform = 'scale(2)';
                    },
                    afterRender: function () {
                        index = $.scrollify.currentIndex();
                        arr[index].style.transform = 'scale(2)';
                    },
                }
            );
        });
    }


    let show_menu = false;

    function showBurger() {
        let menu = $('.mobile-header .menu');
        if (!show_menu) {
            menu.css('right', '0')
        } else {
            menu.css('right', '-100%')
        }
    }
    
    $('.mobile-header .menu a').click(()=>{
        showBurger();
    })

    $('.burger').click(() => {
        let burger = $('.burger');
        let middle = $('.burger .middle');
        let top = $('.burger .top');
        let bottom = $('.burger .bottom');
        if (!show_menu) {
            showBurger();
            show_menu = true;
            middle.css({
                'opacity': '0'
            });
            // burger.removeClass(' d-flex flex-column justify-content-between align-items-center');
            top.removeClass('moveTopRev');
            bottom.removeClass('moveBottomRev');
            top.addClass('moveBottom');
            bottom.addClass('moveTop');

            // top.css({
            //     'animation': 'moveBot .5s',
            //     'transform': 'rotate(45deg)',
            //     'top': '13.5px'
            // });
            // bottom.css({
            //     'animation': 'moveTop .5s',
            //     'bottom': '13.5px',
            //     'transform': 'rotate(-45deg)'
            // });


        } else {
            showBurger();
            show_menu = false;
            // burger.addClass(' d-flex flex-column justify-content-between align-items-center');
            top.removeClass('moveBottom');
            bottom.removeClass('moveTop');
            top.addClass('moveTopRev');
            bottom.addClass('moveBottomRev');
            // top.css({
            //     'animation': 'moveTopRev .5s',
            //     'transform': 'rotate(0)',
            //     'top': '0',
            // });
            // bottom.css({
            //     'animation': 'moveBotRev .5s',
            //     'transform': 'rotate(0)',
            //     'bottom': '0',
            // });
            middle.css({
                'opacity': '1'
            });

        }
    });
});

