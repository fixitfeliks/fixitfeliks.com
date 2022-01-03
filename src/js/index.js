// CSS - Styles
import 'Styles/flex-card.css';
import 'Styles/navbar.css';
import 'Styles/grid-responsive.css';

// Assets - Images
import felixLogo from 'Assets/felix-logo.png';

// Scripts - JS
import { getNavbarFragment, updateScrollPositions } from 'Components/navbar.js';
import { MAIN_WRAPPER_ID } from 'Scripts/global-config.js';
import getAboutMePage from 'Scripts/content/about-me.js';
import getSkillsPage from 'Scripts/content/skills.js';
import getProjectPage from 'Scripts/content/projects.js';
import { ImageSlicer } from 'Components/image-slicer/js/image-slicer.js';

const introSlice = new ImageSlicer(0, felixLogo, 10, 10);
const introSliceWrapper = document.createElement('div');
introSliceWrapper.classList.add('intro-slice-wrapper', 'float-up');
introSliceWrapper.appendChild(introSlice.getHTML());
document.body.appendChild(introSliceWrapper);
introSlice.setTileMoveTime(500);
let introSliceComplete = introSlice.initSpreadElement(3, 10, null);

const mainWrapper = document.createElement('div');
mainWrapper.id = MAIN_WRAPPER_ID;
document.body.appendChild(mainWrapper);
mainWrapper.addEventListener('transitionend', () => {});
mainWrapper.classList.add('main-wrapper', 'float-up');

const mainGrid = document.createElement('div');
mainGrid.classList.add('main-grid');
mainGrid.id = 'main-grid-1';
mainGrid.appendChild(getNavbarFragment(MAIN_WRAPPER_ID));
mainWrapper.appendChild(mainGrid);

const mainDiv = document.createElement('main');
mainDiv.appendChild(getAboutMePage());

const footer = document.createElement('footer');
footer.innerHTML = 'fix it feliks 2&copy;22 x_ks';

mainGrid.appendChild(footer);
mainGrid.appendChild(mainDiv);

introSliceComplete.then(() => {
    setTimeout(() => {
        introSliceWrapper.classList.remove('float-up');
        mainWrapper.classList.remove('float-up');
        introSliceWrapper.addEventListener('transitionend', () => {
            introSliceWrapper.remove();
        });
        const mainDiv = document.getElementsByTagName('main');
        mainDiv[0].appendChild(getSkillsPage());
        mainDiv[0].appendChild(getProjectPage());
        updateScrollPositions();
    }, 2000);
});
