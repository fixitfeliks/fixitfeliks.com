import { getResumePage } from 'Scripts/content/resume.js';
import { ImageSlicer } from 'Components/image-slicer/image-slicer.js';
import rue from 'Assets/rue.jpg';
import { MAIN_WRAPPER_ID } from 'Scripts/global-config.js';

window.addEventListener('hashchange', onRouteChanged);

window.onload = onRouteChanged;

function onRouteChanged() {
    const hash = window.location.hash.substring(2);
    const main = document.getElementsByTagName('main')[0];
    if (main != null) {
        main.innerHTML = '';
    }
    switch (hash) {
        case 'projects':
            const introSlice = new ImageSlicer(0, rue, 10, 10);

            main.appendChild(introSlice.getHTML());
            let spreadCompletePromise = introSlice.initSpreadElement();
            break;

        case 'skills-experience':
            main.appendChild(getResumePage());
            break;

        case 'about-me':
            break;

        case '':
            main.innerHTML = 'root';
            break;

        default:
            break;
    }
}
