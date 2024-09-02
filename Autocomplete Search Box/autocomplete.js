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

const resultBox = document.querySelector('result-box');
const inputBox = document.getElementById('input-box');

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword) => {
            return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
        });
    };
    return result;
};