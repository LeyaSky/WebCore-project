
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

// function hideShowButton(box,btn){
//     if(!box.classList.contains('hidden')){
//         btn.style.display = 'none';
//     } 
// }
// function showHideButton(box,btn){
//     if (box.classList.contains('hidden')){
//         btn.style.display = 'block';
//         console.log(btn.classList);
//     }
// }

// +(function showHiddenBrands() {
//     const showBtn = document.querySelector('.main-brands__button--show');
//     const hideBtn = document.querySelector('main-brands__button--hide');
//     const brandsBox = document.querySelector('.main-brands__items--wide'); 
//     showBtn.addEventListener('click', () => {
//         brandsBox.classList.toggle('hidden');
//         hideShowButton(brandsBox, showBtn);
//         showHideButton(brandsBox, hideBtn);
//     })
// })();

+(function showHideContent(){
    const showBtn = document.querySelector('.main-brands__button--show');
    console.log(showBtn);
    const hideBtn = document.querySelector('.main-brands__button--hide');
    console.log(hideBtn);
    const brandsBox = document.querySelector('.main-brands__items--wide'); 
    showBtn.addEventListener('click', () => {
        brandsBox.classList.remove('hidden');
        showBtn.style.display = 'none'
        // showBtn.classList.add('hiddenBtn');
        // hideBtn.classList.remove('hiddenBtn');
        hideBtn.style.display = 'block';
    });
    hideBtn.addEventListener('click', () => {
        brandsBox.classList.add('hidden');
        // showBtn.classList.remove('hiddenBtn');
        // hideBtn.classList.add('hiddenBtn');
        showBtn.style.display = 'block';
        hideBtn.style.display = 'none';
    });
})();

});

console.log('hello!');
