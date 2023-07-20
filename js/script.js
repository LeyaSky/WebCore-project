
document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth;
    if(width < 769 ){
        const mobileSlider = new Swiper('.main-brands', {
            pagination: {
                el: '.swiper-pagination',
                clickable:true,
            },
            mousewheel: {
            },
            slidesPerView: 1.3,
            spaceBetween : 16,
        });
    }

    // // Add Wide modificator to wide screen brand items 
    // let wideDevicesBrands = document.querySelector('.main-brands__items--wide').children;
    // wideDevicesBrands = Array.prototype.slice.call(wideDevicesBrands);
    // wideDevicesBrands.forEach(element => {
    //     element.classList.add('.main-brands__item--wide');
    // });
});

