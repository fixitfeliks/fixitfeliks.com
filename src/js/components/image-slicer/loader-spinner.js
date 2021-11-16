import { CSS_LOADER_ID } from './slicer-constants.js';
export const cssLoader = getLoader();

function getLoader() {
    const element = document.createElement('div');
    element.id = CSS_LOADER_ID;

    const loaderSpinner = document.createElement('div');
    loaderSpinner.className = 'lds-grid';
    loaderSpinner.innerHTML = /*html*/ `
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    `;

    element.appendChild(loaderSpinner);

    return element;
}
