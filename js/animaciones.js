window.sr = ScrollReveal();

    sr.reveal('.animation-bottom', {
        duration: 2000,
        origin: 'bottom',
        distance: '-100px'
    });

    sr.reveal('.animation-left', {
        duration: 2000,
        origin: 'right',
        distance: '-200px',
        reset: true,
    });

    /*sr.reveal('.animation-right', {
        duration: 2000,
        origin: 'left',
        distance: '-500px',
        reset: true
    });*/

    sr.reveal('.animation-top', {
        duration: 2000,
        origin: 'top',
        distance: '-200px',
        reset: true
    });