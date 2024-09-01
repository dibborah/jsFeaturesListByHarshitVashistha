const pagination = document.querySelector('.pagination');
const btn1 = document.querySelector('.btn1');
const lis = pagination.querySelectorAll('li');

let currentValue = 1;

pagination.addEventListener(('click'), (e) => {
    const classTarget = e.target.classList;
    if (classTarget.contains('link')) {
        const lis = pagination.querySelectorAll('li');
        lis.forEach((link) => {
            link.classList.remove('active');
        })
        e.target.classList.add('active')
        currentValue = e.target.value;
    };
})


// The below click event is not working
// btn1.addEventListener(('click'), (e) => {
//     const lis = pagination.querySelectorAll('li');
//     lis.forEach((li, index) => {
//         if (li.classList.contains('active')) {
//             li.classList.remove('active');
//             currentValue = e.target.value;
//         };
//         if (index === (currentValue + 1)) {
//             console.log('in', currentValue)
//             // li.classList.add('active');
//         }
//     })
// });

function backBtn() {
    if(currentValue > 1){
        for (l of lis){
            l.classList.remove('active')
        }
        currentValue--;
        lis[currentValue - 1].classList.add('active');
    }
}

function nextBtn() {
    if(currentValue < 6){
        for (l of lis){
            l.classList.remove('active')
        }
        currentValue++;
        lis[currentValue - 1].classList.add('active');
    }
}


