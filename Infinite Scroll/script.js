// const URL = 'https://baconmockup.com/250/230/';
// const URL = 'https://baconmockup.com/';
const URL = 'https://picsum.photos/200/300?random=';
const container = document.querySelector('.container');

// pt.1 : Done
// get a batch of images and load it to the div container 

const getRandomNum = () => {
    return Math.floor(Math.random() * 100);
}

function loadImages(numImages = 10) {
    let i = 0;

    // while(i < numImages) {
    //     const imageElement = document.createElement('img');
    //     const r1 = Math.floor(Math.random() * 210)
    //     const r2 = Math.floor(Math.random() * 210)
    //     imageElement.setAttribute('src', `${URL}${r1}/${r2}`);
    //     container.append(imageElement);
    //     i++;
    // }

    while(i < numImages) {
        const img = document.createElement('img');
        img.src = `${URL}${getRandomNum()}}`
        container.append(img);
        i++;
    }
}

loadImages();   

// pt.2
// listen for a scroll event 
// and load more images if we reach the bottom of the window

