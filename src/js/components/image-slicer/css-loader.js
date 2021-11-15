import { CSS_LOADER_ID } from './slicer-constants.js';
export const cssLoader = getLoader();

function getLoader() {
    const element = document.createElement('div');
    element.id = CSS_LOADER_ID;
    element.className = 'lds-grid';
    element.innerHTML = /*html*/ `
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    `;

    return element;
}
