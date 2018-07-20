$(document).ready(() => {
    let arr = document.getElementsByClassName('slider-dot');
    let index = $.scrollify.currentIndex();


    window.sr = ScrollReveal({
        duration: 500,
        origin: 'bottom',
        distance: '10vh',
        easing: 'ease-out',
        scale: 1
    });
    sr.reveal('#iphone', {delay: 200});

    $(function () {
        $.scrollify(
            {
                section: 'body > section',
                updateHash: true,
                sectionName: "section-name",
                scrollSpeed: 1100,
                easing: "easeOutExpo",
                scrollbars: false,
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

