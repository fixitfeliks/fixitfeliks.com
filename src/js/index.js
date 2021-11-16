import 'Styles/flex-box.css';
import 'Styles/image-slicer.css';
import 'Styles/loader-spinner.css';
import 'Styles/navbar.css';
import 'Styles/grid-responsive.css';
import testImg from 'Assets/test.png';
import bearImg from 'Assets/bear.jpg';
import weasleImf from 'Assets/weasle.jpg';
import rue from 'Assets/rue.jpg';
import { ImageSlicer } from 'Components/image-slicer/image-slicer.js';

import { X_ROWS, Y_COLS, WIDTH, FLEX_TRANSITION_TIME } from 'Scripts/global-config.js';

// const flexContainer = document.createElement('div');
// flexContainer.className = 'flex-container';

// const flexItem1 = document.createElement('div');
// const flexItem3 = document.createElement('div');
// const imgWrap1 = document.createElement('div');
// imgWrap1.classList.add('img-wrapper');
// const imgWrap2 = document.createElement('div');
// imgWrap2.classList.add('img-wrapper');
// flexItem1.className = 'flex-item';
// flexItem3.className = 'flex-item';

// const img1 = document.createElement('img');
// img1.src = rue;
// const img2 = document.createElement('img');
// img2.src = rue;
// imgWrap2.appendChild(img2);

// const navbar = document.createElement('div');
// navbar.classList.add('navbar');

// document.body.appendChild(navbar);

// imgWrap1.appendChild(test.getHTML());
// flexItem1.appendChild(test.getHTML());
// flexItem3.appendChild(imgWrap2);

// flexItem1.classList.add('flex-item-added');
// flexContainer.appendChild(flexItem1);
// // document.body.appendChild(flexContainer);
// let spreadCompletePromise = test.initSpreadElement();

// // setTimeout(() => {
// //     // addFlexItem(flexItem3, flexContainer);
// //     document.body.getElementsByTagName('main')[0].appendChild(flexItem3);
// // }, 5000);

// spreadCompletePromise.then(() => {
//     // const addFlexPromise = addFlexItem(flexItem2, flexContainer);
//     // addFlexPromise.then(() => {
//     //     removeFlexItem(flexItem1, flexContainer);
//     // });
// });

// document.body.getElementsByTagName('header')[0].appendChild(test.getHTML());

function addFlexItem(item, container) {
    return new Promise((resolve) => {
        item.classList.add('flex-item-removed');
        container.appendChild(item);
        setTimeout(() => {
            item.classList.remove('flex-item-removed');
            item.classList.add('flex-item-added');
            setTimeout(() => {
                resolve();
            }, FLEX_TRANSITION_TIME);
        }, 100);
    });
}

function removeFlexItem(item, container) {
    item.classList.remove('flex-item-added');
    item.classList.add('flex-item-removed');
    setTimeout(() => {
        container.removeChild(item);
    }, FLEX_TRANSITION_TIME);
}

const test = new ImageSlicer(rue, 10, 10);
const header = document.getElementsByTagName('header')[0];
header.appendChild(test.getHTML());
let spreadCompletePromise = test.initSpreadElement();

setInterval(() => {}, 1000);
