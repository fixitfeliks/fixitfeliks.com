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
import 'Components/navbar/router.js';
import { ImageSlicer } from 'Components/image-slicer/image-slicer.js';
import { createNavbar, navOnScroll } from 'Components/navbar/navbar.js';
import { X_ROWS, Y_COLS, WIDTH, FLEX_TRANSITION_TIME, MAIN_WRAPPER_ID } from 'Scripts/global-config.js';
import { getSingleFlexCard, getDoubleFlexCard, getHeaderFlexCard } from 'Components/flex-card.js';

// Content - JS
import {
    RESUME_HEADER_TITLE,
    RESUME_HEADER_BODY,
    WORK_EXPERIENCE_DNT_TITLE,
    WORK_EXPERIENCE_DNT_SUMMARY,
    WORK_EXPERIENCE_DNT_HEADER_WEB,
    WORK_EXPERIENCE_DNT_CONTENT_WEB,
    WORK_EXPERIENCE_DNT_HEADER_MOBILE,
    WORK_EXPERIENCE_DNT_CONTENT_MOBILE,
    WORK_EXPERIENCE_PS_TITLE,
    WORK_EXPERIENCE_PS_SUMMARY,
    WORK_EXPERIENCE_PS_HEADER_SOFTWARE,
    WORK_EXPERIENCE_PS_CONTENT_SOFTWARE,
    WORK_EXPERIENCE_PS_HEADER_ME,
    WORK_EXPERIENCE_PS_CONTENT_ME,
    WORK_EXPERIENCE_BD_TITLE,
    WORK_EXPERIENCE_BD_SUMMARY,
    WORK_EXPERIENCE_BD_CONTENT
} from 'Scripts/content/resume.js';

const main = document.createElement('div');
main.classList.add('main-wrapper', 'float-up');
main.id = MAIN_WRAPPER_ID;

document.body.appendChild(main);

// const test = new ImageSlicer(rue, 10, 10);
// const header = document.createElement('header');
// main.appendChild(test.getHTML());
// let spreadCompletePromise = test.initSpreadElement();

const mainGrid = document.createElement('div');
mainGrid.classList.add('main-grid');
mainGrid.id = 'main-grid-1';
mainGrid.appendChild(createNavbar());
main.appendChild(mainGrid);

let last_known_scroll_position = 0;
document.getElementById(MAIN_WRAPPER_ID).onscroll = function (e) {
    window.requestAnimationFrame(function () {
        last_known_scroll_position = document.getElementById(MAIN_WRAPPER_ID).scrollTop;
        navOnScroll(document.getElementById(MAIN_WRAPPER_ID).scrollTop);
    });
};

const mainDiv = document.createElement('main');
mainDiv.appendChild(getHeaderFlexCard(RESUME_HEADER_TITLE, RESUME_HEADER_BODY));
mainDiv.appendChild(
    getDoubleFlexCard(
        WORK_EXPERIENCE_DNT_TITLE,
        WORK_EXPERIENCE_DNT_SUMMARY,
        WORK_EXPERIENCE_DNT_HEADER_WEB,
        WORK_EXPERIENCE_DNT_CONTENT_WEB
    )
);
mainDiv.appendChild(getSingleFlexCard(WORK_EXPERIENCE_DNT_HEADER_MOBILE, WORK_EXPERIENCE_DNT_CONTENT_MOBILE));
mainDiv.appendChild(
    getDoubleFlexCard(
        WORK_EXPERIENCE_PS_TITLE,
        WORK_EXPERIENCE_PS_SUMMARY,
        WORK_EXPERIENCE_PS_HEADER_SOFTWARE,
        WORK_EXPERIENCE_PS_CONTENT_SOFTWARE
    )
);
mainDiv.appendChild(getSingleFlexCard(WORK_EXPERIENCE_PS_HEADER_ME, WORK_EXPERIENCE_PS_CONTENT_ME));
mainDiv.appendChild(
    getDoubleFlexCard(WORK_EXPERIENCE_BD_TITLE, WORK_EXPERIENCE_BD_SUMMARY, null, WORK_EXPERIENCE_BD_CONTENT)
);

const footer = document.createElement('footer');
footer.innerHTML = 'fix it feliks 2&copy;21 x_ks';

mainGrid.appendChild(footer);
mainGrid.appendChild(mainDiv);

// mainGrid.appendChild(header);
setTimeout(() => {
    // mainGrid.style.top = 0;
    main.classList.remove('float-up');
    const addScrollbars = () => {
        // main.classList.remove('hide-overflow');
        mainGrid.removeEventListener('transitionend', addScrollbars);
    };
    mainGrid.addEventListener('transitionend', addScrollbars);
}, 1000);

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

// setTimeout(() => {
//     const imageSlicerWrapper = document.getElementById('image-slicer-main');
//     const imageSlicerGrid = document.getElementById('image-slicer-grid');
// }, 2000);
