$(document).ready(() => {
    let arr = document.getElementsByClassName('slider-dot');
    let index = $.scrollify.currentIndex();


    window.sr = ScrollReveal({
        duration: 500,
        distance: '5vh',
        easing: 'ease-out',
        scale: 1
    });


    sr.reveal('#iphone', {delay: 200,origin:'bottom'});


    sr.reveal('#manage .text', {delay: 400,origin:'left'});
    sr.reveal('#manage figure', {delay: 200,origin:'right'});


    sr.reveal('#create figure',{delay:200,origin:'top'});
    sr.reveal('#create h2, #create p',{delay:400,origin:'bottom'});


    sr.reveal('#growth figure',{delay:200,origin:'left'});
    sr.reveal('#growth .text',{delay:400,origin:'right'});



    sr.reveal('#about h2',{delay:200,origin:'bottom'});
    sr.reveal('#about p',{delay:400,origin:'bottom'});
    sr.reveal('#about img',{delay:600,origin:'bottom'});



    sr.reveal('#reviews .review:nth-child(1)',{delay:200,origin:'right'});
    sr.reveal('#reviews .review:nth-child(2)',{delay:400,origin:'left'});
    sr.reveal('#reviews .review:nth-child(3)',{delay:600,origin:'right'});


    sr.reveal('#pricing > *',{delay:200,origin:'top'},50);






    $(function () {
        $.scrollify(
            {
                section: 'body > section',
                updateHash: false,
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


});

