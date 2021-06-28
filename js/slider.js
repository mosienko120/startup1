new Swiper('.about-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1140: {
            slidesPerView: 4
        }
    }
});

new Swiper('.brand-slider',{
     pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    }
});