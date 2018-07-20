$(document).ready(() => {
    $(document).on('click', 'a[href^="#"]', function (e) {
        let id = $(this).attr('href');
        let $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        let pos = $id.offset().top;
        $('body, html').animate({scrollTop: pos});
    });

    window.sr = ScrollReveal({
        duration: 600,
        origin: 'bottom',
        distance: '10vh',
        easing: 'ease-out',
        scale: 1
    });
    sr.reveal('#iphone', {delay: 500});
});

