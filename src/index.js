import 'Styles/flex-box.css';
import 'Styles/grid-layout.css';
import { createGridLayout, updateGridLayout } from 'Components/layout.js';
import { squareShuffle } from 'Components/shufflers';
import { ImageGrid } from 'Components/image-grid.js';
import { sliceImage } from 'Components/image-slicer.js';
import { X_ROWS, Y_COLS, ITEM_WIDTH, ITEM_HEIGHT } from 'Scripts/global-config.js';

const test = new ImageGrid(10, 10, 57, 88);
const frames = [];

for (let i = 0; i < 20; i++) {
    frames.push(test.getFrame());
    for (let j = 0; j < test.tiles.length; j++) {
        test.tiles[j].walk();
    }
}

const fragment = document.createDocumentFragment();
const contentWrapper = document.createElement('div');
contentWrapper.className = 'content-wrapper';
contentWrapper.appendChild(createGridLayout(frames[frames.length - 1]));
fragment.appendChild(contentWrapper);
document.body.appendChild(fragment);

const imageSlices = sliceImage('assets/test.png', X_ROWS, Y_COLS, ITEM_WIDTH, ITEM_HEIGHT);

let index = frames.length - 1;

function getNextFrame() {
    updateGridLayout(frames[index]);
    if (index == 0) clearInterval(timer);
    else index -= 1;
}

const timer = setInterval(() => {
    getNextFrame();
}, 50);
