import { cssLoader } from './loader-spinner.js';
import { shuffleArray } from './shufflers';

import {
    MAIN_WRAPPER_ELEMENT_ID,
    GRID_WRAPPER_ELEMENT_ID,
    GRID_WRAPPER_ELEMENT_CLASS,
    GRID_ELEMENT_CLASS,
    GRID_ELEMENT_ID,
    CSS_LOADER_ID
} from './slicer-constants.js';

export function createGridLayout(numTiles, id) {
    console.log('create grid for numTiles:', numTiles);
    const fragment = document.createDocumentFragment();
    const itemsFragment = document.createDocumentFragment();
    if (numTiles != null) {
        const wrapper = document.createElement('div');
        wrapper.className = GRID_WRAPPER_ELEMENT_CLASS;
        wrapper.id = GRID_WRAPPER_ELEMENT_ID + id;
        // wrapper.style.width = '100%';
        // wrapper.style.height = '300px';
        // wrapper.appendChild(cssLoader);
        for (let i = 0; i < numTiles; i++) {
            const itemId = GRID_ELEMENT_ID + id + i;
            const gridItem = document.createElement('canvas');
            gridItem.id = itemId;
            gridItem.className = GRID_ELEMENT_CLASS;
            gridItem.style.display = 'none';
            itemsFragment.appendChild(gridItem);
        }
        wrapper.append(...shuffleArray(itemsFragment.children));
        fragment.appendChild(wrapper);
        return fragment;
    }
    const error = document.createElement('div');
    error.innerHTML = '<b> layout null </b>';
    fragment.appendChild(error);
    return fragment;
}

export function initCanvasTile(canvas, tile) {
    // canvas.style.top = tile.y + 'px';
    // canvas.style.left = tile.x + 'px';
    // canvas.style.width = tile.width + 'px';
    // canvas.style.height = tile.height + 'px';

    applyTranslate(canvas, tile.x, tile.y);
}

export function showTiles(tiles, id) {
    const wrapper = document.getElementById(MAIN_WRAPPER_ELEMENT_ID + id);
    for (let i = 0; i < tiles.length; i++) {
        const tile = document.getElementById(GRID_ELEMENT_ID + id + tiles[i].id);
        tile.style.display = 'block';
    }
    // const loaderSpinner = document.getElementById(CSS_LOADER_ID);
    // if (loaderSpinner) wrapper.removeChild(loaderSpinner);
}

export function updateGridLayout(tiles, id) {
    for (let i = 0; i < tiles.length; i++) {
        const gridItem = document.getElementById(GRID_ELEMENT_ID + id + tiles[i].id);
        applyTranslate(gridItem, tiles[i].x, tiles[i].y);
        // gridItem.style.top = tiles[i].y + 'px';
        // gridItem.style.left = tiles[i].x + 'px';
    }
}

function applyTranslate(element, x, y) {
    element.style.transform = `translate(${x}px, ${y}px)`;
    element.style.MozTransform = `translate(${x}px, ${y}px)`;
    element.style.WebkitTransform = `translate(${x}px, ${y}px)`;
    element.style.OTransform = `translate(${x}px, ${y}px)`;
    element.style.msTransform = `translate(${x}px, ${y}px)`;
}
