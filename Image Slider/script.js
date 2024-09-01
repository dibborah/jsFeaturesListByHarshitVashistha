const slide = document.querySelectorAll('.slide');
let counter = 0;

slide.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
        // slide.style.bottom = `${index * 100}%`;
        // slide.style.top = `${index * 100}%`;
    }
);

function goPrevious() {
    counter --;
    if(counter === -1){
        counter = 3;
    }
    slideImage()
}

function goNext() {
    counter ++;
    if(counter  === slide.length){
        counter = 0;
    };
    slideImage()
}

function slideImage() {
    slide.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)` 
            // slide.style.transform = `translateY(${counter * 100}%)` 
        }
    );
}
