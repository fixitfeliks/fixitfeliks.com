import 'Styles/flex-box.css';
import 'Styles/image-slicer.css';
import 'Styles/css-loader.css';
import testImg from 'Assets/test.png';
import bearImg from 'Assets/bear.jpg';
import weasleImf from 'Assets/weasle.jpg';
import rue from 'Assets/rue.jpg';
import { ImageSlicer } from 'Components/image-slicer/image-slicer.js';

import { X_ROWS, Y_COLS, WIDTH, HEIGHT } from 'Scripts/global-config.js';

const flexContainer = document.createElement('div');
flexContainer.className = 'flex-container';
const test = new ImageSlicer(rue, 10, 10);
const flexItem1 = document.createElement('div');
const flexItem2 = document.createElement('div');

flexItem1.className = 'flex-item';
flexItem2.className = 'flex-item';

flexItem1.style.backgroundColor = 'green';
flexItem2.style.backgroundColor = '#000';

const img1 = document.createElement('img');
img1.src = rue;

const img2 = document.createElement('img');
img2.src = rue;

// flexItem1.appendChild(img1);
// flexItem2.appendChild(img2);

flexItem1.classList.add('flex-item-added');
flexContainer.appendChild(flexItem1);
document.body.appendChild(flexContainer);

let spreadCompletePromise = test.initSpreadElement();

spreadCompletePromise.then(() => {
    // flexContainer.appendChild(flexItem2);
    // flexItem2.classList.add('flex-item-added');
    // setTimeout(() => {
    //     flexItem2.classList.add('flex-item-removed');
    // }, 2000);
    addFlexItem(flexItem2, flexContainer);
});

setTimeout(() => {
    addFlexItem(flexItem2, flexContainer);
}, 2000);

function addFlexItem(item, container) {
    item.classList.add('flex-item-removed');
    container.appendChild(item);
    setTimeout(() => {
        item.classList.remove('flex-item-removed');
        item.classList.add('flex-item-added');
    }, 2000);
}

function removeFlexItem(item, container) {
    item.classList.remove('flex-item-added');
    item.classList.add('flex-item-removed');
    setTimeout(() => {
        container.remove(item);
    }, 1000);
}
