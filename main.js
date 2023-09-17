// NAVBAR SCROll 
const nav = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 150){
        nav.classList.add('nav-scrolled');
    }
    if(window.scrollY < 150){
        nav.classList.remove('nav-scrolled');
    }
});

// IMAGE SLIDER
let img = document.querySelectorAll('.img');
let counter = 0;
img.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

let previous = () => {
    counter--;if (counter > 2){
    counter = 0;
}
if (counter < 0){
    counter = 2;
}
    slideImage();
}
let goNext = () => {
    counter++;
    if (counter > 2){
    counter = 0;
}
if (counter < 0){
    counter = 2;
}
    slideImage();
}

const slideImage = () => {
    img.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

// IMAGE PRODUCT SLIDER
let productBox = document.querySelectorAll('.productBox');
let counterProduct = 0;
productBox.forEach((slide, index) => {
    slide.style.left = `${index * 224}%`;
})

let previousProduct = () => {
    counterProduct--;
    if (counterProduct > 1){
        counterProduct = 0;
    }
    if (counterProduct < 0){
        counterProduct = 1;
    }
    slideProductBox();
}
let goNextProduct = () => {
    counterProduct++;
    if (counterProduct > 1){
        counterProduct = 0;
    }
    if (counterProduct < 0){
        counterProduct = 1;
    }
    slideProductBox();
}

const slideProductBox = () => {
    productBox.forEach((slide) => {
        slide.style.transform = `translateX(-${counterProduct * 224}%)`;
    })
}

// FAQS BOX PLUS MINUS CONTROL 
let faqsBoxHeading = document.querySelectorAll('.faqsBoxHeading');
let plusSign = document.querySelectorAll('.plusSign');
let minusSign = document.querySelectorAll('.minusSign');
let faqsBoxPara = document.querySelectorAll('.faqsBoxPara');

for (let i = 0; i < faqsBoxHeading.length; i++){
    faqsBoxHeading[i].addEventListener('click', () => {
        plusSign[i].classList.toggle('active');
        minusSign[i].classList.toggle('active');
        faqsBoxPara[i].classList.toggle('active');
    })
}

// TESTIMONIAL SLIDER
let testimonialsBox = document.querySelectorAll('.testimonialsBox');
let manualBtn = document.querySelectorAll('.manualBtn');
let counterTestimonial = 0;

testimonialsBox.forEach((slide, index) => {
    slide.style.left = `${index * 251}%`;
})
let previousTestimonial = () => {
    counterTestimonial--;
    if (counterTestimonial > 2){
        counterTestimonial = 0;
    }
    if (counterTestimonial < 0){
        counterTestimonial = 2;
    }
    slideTestimonialsBox();
}
let goNextTestimonial = () => {
    counterTestimonial++;
    if (counterTestimonial > 2){
        counterTestimonial = 0;
    }
    if (counterTestimonial < 0){
        counterTestimonial = 2;
    }
    slideTestimonialsBox();
}

const slideTestimonialsBox = () => {
    testimonialsBox.forEach((slide) => {
        slide.style.transform = `translateX(-${counterTestimonial * 251}%)`;
    })
}

