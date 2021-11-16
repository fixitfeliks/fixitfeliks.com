import { cssLoader } from './loader-spinner.js';
import {
    MAIN_WRAPPER_ELEMENT_ID,
    GRID_WRAPPER_ELEMENT_ID,
    GRID_WRAPPER_ELEMENT_CLASS,
    GRID_ELEMENT_CLASS,
    GRID_ELEMENT_ID_PREFIX,
    CSS_LOADER_ID
} from './slicer-constants.js';

export function createGridLayout(numTiles) {
    console.log('create grid for numTiles:', numTiles);
    const fragment = new DocumentFragment();
    if (numTiles != null) {
        const wrapper = document.createElement('div');
        wrapper.className = GRID_WRAPPER_ELEMENT_CLASS;
        wrapper.id = GRID_WRAPPER_ELEMENT_ID;
        wrapper.style.width = '100%';
        wrapper.style.height = '100%';
        // wrapper.appendChild(cssLoader);
        for (let i = 0; i < numTiles; i++) {
            const itemId = GRID_ELEMENT_ID_PREFIX + i;
            const gridItem = document.createElement('canvas');
            gridItem.id = itemId;
            gridItem.className = GRID_ELEMENT_CLASS;
            gridItem.style.display = 'none';
            wrapper.appendChild(gridItem);
        }
        fragment.appendChild(wrapper);
        return fragment;
    }
    const error = document.createElement('div');
    error.innerHTML = '<b> layout null </b>';
    fragment.appendChild(error);
    return fragment;
}

export function initCanvasTile(canvas, tile) {
    canvas.style.top = tile.y + 'px';
    canvas.style.left = tile.x + 'px';
    canvas.style.width = tile.width + 'px';
    canvas.style.height = tile.height + 'px';
}

export function showTiles(tiles) {
    const wrapper = document.getElementById(MAIN_WRAPPER_ELEMENT_ID);
    for (let i = 0; i < tiles.length; i++) {
        const tile = document.getElementById(GRID_ELEMENT_ID_PREFIX + tiles[i].id);
        tile.style.display = 'flex';
    }
    const loaderSpinner = document.getElementById(CSS_LOADER_ID);
    if (loaderSpinner) wrapper.removeChild(loaderSpinner);
}

export function updateGridLayout(tiles) {
    for (let i = 0; i < tiles.length; i++) {
        const gridItem = document.getElementById(GRID_ELEMENT_ID_PREFIX + tiles[i].id);
        gridItem.style.top = tiles[i].y + 'px';
        gridItem.style.left = tiles[i].x + 'px';
    }
}

function randomColorStyle(element) {
    element.style.backgroundColor = `rgb(
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)}
                )`;
}
