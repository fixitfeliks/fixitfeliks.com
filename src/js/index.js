// CSS - Styles
import 'Styles/flex-card.css';
import 'Styles/image-slicer.css';
import 'Styles/loader-spinner.css';
import 'Styles/navbar.css';
import 'Styles/grid-responsive.css';

// Assets - Images
import weasleImf from 'Assets/weasle.jpg';

// Scripts - JS
import { getNavbarFragment } from 'Components/navbar.js';
import { MAIN_WRAPPER_ID } from 'Scripts/global-config.js';
import getAboutMePage from 'Scripts/content/about-me.js';
import getSkillsPage from 'Scripts/content/skills.js';
import getProjectPage from 'Scripts/content/projects.js';

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
mainDiv.appendChild(getAboutMePage());
mainDiv.appendChild(getSkillsPage());
mainDiv.appendChild(getProjectPage());

const footer = document.createElement('footer');
footer.innerHTML = 'fix it feliks 2&copy;21 x_ks';

mainGrid.appendChild(footer);
mainGrid.appendChild(mainDiv);

// const addScrollbars = () => {
//     main.classList.remove('hide-overflow');
//     document.body.style.overflow = 'auto';
//     main.removeEventListener('transitionend', addScrollbars);
// };
// main.ontransitionend = addScrollbars;
