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
const ul = document.querySelector('.result-box ul');
const button = document.querySelector('button');


inputBox.onkeyup = function() {
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
    console.log(result);
    display(result)
};

function display(result) {
    const content = result.map((search) => {
        return '<li>' + search + '</li>'
    });

    // solution using regExp:
    // console.log(content.join(',').replace(new RegExp(',', "g"), ''));
    // const pureContent = content.join(',').replace(/,/g, '');

    // most easy
    ul.innerHTML = content.join('');
};

