// CSS - Styles
import 'Styles/flex-card.css';
import 'Styles/image-slicer.css';
import 'Styles/loader-spinner.css';
import 'Styles/navbar.css';
import 'Styles/grid-responsive.css';

// Assets - Images
import testImg from 'Assets/test.png';
import bearImg from 'Assets/bear.jpg';
import weasleImf from 'Assets/weasle.jpg';
import rue from 'Assets/rue.jpg';

// Scripts - JS
import 'Components/router.js';
import { ImageSlicer } from 'Components/image-slicer/image-slicer.js';
import { getNavbarFragment } from 'Components/navbar.js';
import { X_ROWS, Y_COLS, WIDTH, FLEX_TRANSITION_TIME, MAIN_WRAPPER_ID } from 'Scripts/global-config.js';

// Content - JS
import { NAVBAR_ID } from './global-config';
const main = document.createElement('div');
main.classList.add('main-wrapper');
main.id = MAIN_WRAPPER_ID;

document.body.appendChild(main);

// const test = new ImageSlicer(rue, 10, 10);
// const header = document.createElement('header');
// main.appendChild(test.getHTML());
// let spreadCompletePromise = test.initSpreadElement();

const mainGrid = document.createElement('div');
mainGrid.classList.add('main-grid');
mainGrid.id = 'main-grid-1';
mainGrid.appendChild(getNavbarFragment(MAIN_WRAPPER_ID));
main.appendChild(mainGrid);

const mainDiv = document.createElement('main');

const footer = document.createElement('footer');
footer.innerHTML = 'fix it feliks 2&copy;21 x_ks';

mainGrid.appendChild(footer);
mainGrid.appendChild(mainDiv);

const addScrollbars = () => {
    // main.classList.remove('hide-overflow');
    // document.body.style.overflow = 'auto';
    main.removeEventListener('transitionend', addScrollbars);
};
main.ontransitionend = addScrollbars;

const nav = document.getElementsByTagName('nav')[0];
// mainDiv.style.minHeight = `calc(${window.innerHeight - nav.clientHeight - footer.clientHeight}px - 4.5em)`;

// mainGrid.appendChild(header);
// setTimeout(() => {
//     main.classList.remove('float-up');
//     // mainGrid.style.top = 0;
// }, 1000);

// spreadCompletePromise.then(() => {
//     const imageSlicer = document.getElementById('image-slicer-main');
//     const newTop = -1 * parseInt(imageSlicer.style.height) + 'px';
//     imageSlicer.style.top = newTop;
//     const mainGrid = document.getElementById('test');

//     imageSlicer.addEventListener('transitionend', () => {
//         imageSlicer.remove();
//     });

//     mainGrid.style.top = 0;
// });
