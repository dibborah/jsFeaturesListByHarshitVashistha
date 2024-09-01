const accordians = document.querySelectorAll('.accordian');

accordians.forEach((accordian) => {
    const answer = accordian.querySelector('.answer');
    const icon = accordian.querySelector('.icon');
    accordian.addEventListener('click', () => {
        answer.classList.toggle('active');
        icon.classList.toggle('active');
    })
})