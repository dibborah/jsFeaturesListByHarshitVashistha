// const URL = 'https://baconmockup.com/250/230/';
// const URL = 'https://baconmockup.com/';

const URL = 'https://picsum.photos/300/400?random=';

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
// and load more images if
// we reach the bottom of the window

// document.documentElement === HTML (Root Element)

window.addEventListener('scroll', () => {

    // console.log(window.scrollY); // Area we scroll down vertically from top of the window.
    //  value returns in px // Also called pageYOffset
    // console.log(window.innerHeight);// Area visible to us in the window screen
    // scrollHeight = scrollY + innerHeight

    // console.log(document.documentElement.scrollHeight)
    // console.log(window.scrollY + window.innerHeight)

    const windowTotal = Math.ceil(window.scrollY + window.innerHeight)

    if(windowTotal >= document.documentElement.scrollHeight){
        console.log('inside if');
        loadImages()
    }
})

