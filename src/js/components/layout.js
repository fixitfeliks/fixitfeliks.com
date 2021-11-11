import store from 'Components/store.js';
import { getGridCoors, X_ROWS, Y_COLS } from 'Scripts/global-config.js';

const layout = getGridCoors();

export function createGridLayout(grid) {
    console.log('grid ', grid);
    const fragment = new DocumentFragment();
    if (grid != null) {
        const flexContainer = document.createElement('div');
        flexContainer.setAttribute('class', 'grid-wrapper');

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                const itemId = 'item-' + grid[i][j].index.toString();
                const gridItem = document.createElement('div');
                gridItem.id = itemId;
                gridItem.className = 'item';
                gridItem.style.top = grid[i][j].top + 'px';
                gridItem.style.left = grid[i][j].left + 'px';
                gridItem.innerHTML = /*html*/ `<a>${itemId}</a>`;
                flexContainer.appendChild(gridItem);
            }
        }
        fragment.appendChild(flexContainer);
        return fragment;
    }
    const error = document.createElement('div');
    error.innerHTML = '<b> layout null </b>';
    fragment.appendChild(error);
    return fragment;
}

export function updateGridLayout(gridCoors) {
    let index = 0;
    for (let i = 0; i < gridCoors.length; i++) {
        for (let j = 0; j < gridCoors[i].length; j++) {
            setTimeout(() => {
                const div = document.getElementById('item-' + gridCoors[i][j].index);
                div.style.top = layout[i][j].top + 'px';
                div.style.left = layout[i][j].left + 'px';
            }, 50 * index);
            index++;
        }
    }
}
