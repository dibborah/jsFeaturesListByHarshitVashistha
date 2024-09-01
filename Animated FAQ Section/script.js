const accordians = document.querySelectorAll('.accordian');

const answer = document.querySelectorAll('.answer');

accordians.forEach((accordian, index) => {
    accordian.addEventListener('click', (accordian) => {
        answer[index].classList.toggle('hideAnswer');
    })
})