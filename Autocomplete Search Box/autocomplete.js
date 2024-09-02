let availableKeywords = [
    'HTML',
    'CSS',
    'Easy Tutorials',
    'Web design tutorials',
    'Javascript',
    'Where to learn coding online',
    'Where to learn web design',
    'How to create a website',
];

const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('input-box');
// const ul = document.querySelector('.result-box ul');
const button = document.querySelector('button');


inputBox.onkeyup = function() {
    // resultBox.classList.remove('hide');
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword) => {
            if(input === ' '){
                return;
            }
            return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
    };
    display(result);
    if(!result.length){
        resultBox.innerHTML = '';
    }
};

function selectInputValue(value) {
    inputBox.value = value.innerText;
    resultBox.innerHTML = '';
    // resultBox.classList.add('hide');
}

function display(result) {
    const content = result.map((search) => {
        return "<li onClick=selectInputValue(this)>" + search + '</li>'
    });

    // solution using regExp:
    // console.log(content.join(',').replace(new RegExp(',', "g"), ''));
    // const pureContent = content.join(',').replace(/,/g, '');

    // most easy
    resultBox.innerHTML = '<ul>' + content.join('') + '</ul>';
    // if(result.length === 0){
    //     resultBox.innerHTML = ''
    // }
};

