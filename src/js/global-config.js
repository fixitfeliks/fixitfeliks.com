import store from 'Components/store.js';

// In Pixels
export const X_ROWS = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--x-rows'));
export const Y_COLS = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--y-cols'));
export const ITEM_WIDTH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-item-width'));
export const ITEM_HEIGHT = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-item-height'));

export function getGridCoors() {
    let index = 0;
    let grid = [];
    for (let i = 0; i < X_ROWS; i++) {
        let row = [];
        for (let j = 0; j < Y_COLS; j++) {
            let coor = {
                top: i * ITEM_WIDTH,
                left: j * ITEM_HEIGHT,
                index: index
            };
            index++;
            row.push(coor);
            store.addCoor(coor);
        }
        grid.push(row);
    }

    return grid;
}
