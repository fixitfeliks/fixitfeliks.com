import 'Styles/flex-box.css';
import 'Styles/grid-layout.css';

import { getGridCoors, X_ROWS, Y_COLS } from 'Scripts/global-config.js';
import { createGridLayout, updateGridLayout } from 'Components/layout.js';
import store from 'Components/store.js';

const fragment = document.createDocumentFragment();
const contentWrapper = document.createElement('div');
contentWrapper.className = 'content-wrapper';
contentWrapper.appendChild(createGridLayout(getGridCoors()));
fragment.appendChild(contentWrapper);
document.body.appendChild(fragment);

function floatDivs() {
    const coors = store.getCoors();
    const newArray = shuffleArray(coors);
    for (let i = 0; i < coors.length; i++) {
        const div = document.getElementById('item-' + coors[i].index);
        div.style.top = newArray[i].top + 'px';
        div.style.left = newArray[i].left + 'px';
        div.style.backgroundColor = 'purple';
    }
    setTimeout(floatDivs, 5000);
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray;
}

function squareWeave(gridCoors) {
    let newGrid = [...gridCoors];
    let traveled = createAndFillTwoDArray(X_ROWS, Y_COLS, 0);
    for (let i = 0; i < newGrid.length; i++) {
        for (let j = 0; j < newGrid[i].length; j++) {
            let dir = 0;
            if (!traveled[i][j]) {
                if (i === newGrid.length - 1) {
                    dir = 0;
                } else if (j === newGrid[i].length - 1) {
                    dir = 1;
                } else {
                    dir = Math.floor(Math.random() * 2);
                }
                if (!(i === newGrid.length - 1 && j === newGrid[i].length - 1)) {
                    let tI = dir ? i + 1 : i;
                    let tJ = dir ? j : j + 1;
                    traveled[i][j] = 1;
                    traveled[tI][tJ] = 1;

                    // let tempLeft = newGrid[i][j].left;
                    // let tempTop = newGrid[i][j].top;
                    // newGrid[i][j].left = newGrid[tI][tJ].left;
                    // newGrid[i][j].top = newGrid[tI][tJ].top;
                    // newGrid[tI][tJ].left = tempLeft;
                    // newGrid[tI][tJ].top = tempTop;

                    let temp = newGrid[i][j];
                    newGrid[i][j] = newGrid[tI][tJ];
                    newGrid[tI][tJ] = temp;
                }
            }
        }
    }
    console.log('sqW: ', newGrid);
    updateGridLayout(newGrid);
    setTimeout(() => squareWeave(newGrid), 3200);
}

function createAndFillTwoDArray(rows, columns, defaultValue) {
    return Array.from({ length: rows }, () => Array.from({ length: columns }, () => defaultValue));
}

squareWeave(getGridCoors());
