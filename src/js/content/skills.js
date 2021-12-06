import frontendSkillsImg from 'Assets/web-skills.png';
import frontendSkillsImgMobile from 'Assets/web-skills-mobile.png';

import { getHeaderImageBodyFlexCard } from 'Components/flex-card.js';
import { ImageSlicer } from 'Components/image-slicer/image-slicer.js';

import { MAIN_WRAPPER_ID } from 'Scripts/global-config.js';

const frontendSkillsImgSlicer =
    window.innerWidth > 800
        ? new ImageSlicer(1, frontendSkillsImg, 2, 3)
        : new ImageSlicer(1, frontendSkillsImgMobile, 2, 3);
const frontendSlicerHTML = frontendSkillsImgSlicer.getHTML();

const backendSkillsImgSlicer =
    window.innerWidth > 800
        ? new ImageSlicer(2, frontendSkillsImg, 2, 3)
        : new ImageSlicer(2, frontendSkillsImgMobile, 2, 3);
const backendSlicerHTML = backendSkillsImgSlicer.getHTML();

const databaseSkillsImgSlicer =
    window.innerWidth > 800
        ? new ImageSlicer(3, frontendSkillsImg, 2, 3)
        : new ImageSlicer(3, frontendSkillsImgMobile, 2, 3);
const databaseSlicerHTML = databaseSkillsImgSlicer.getHTML();

export function getSkillsPage() {
    const fragment = document.createDocumentFragment();
    const mainWrapper = document.getElementById(MAIN_WRAPPER_ID);

    // FRONTEND
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Front End Skills',
            frontendSlicerHTML,
            `
        I really enjoy front end dev and learning about whats possible in the browser! Experience with React and Redux on large projects with lots of state to manage. 
        I love working with React and understand the needs for state and properties on large projects, but also am always trying to learn more about the HTML, JS, and CSS combo. 
        
        `
        )
    );
    frontendSkillsImgSlicer.initFoldInElement(mainWrapper);

    // BACKEND

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Front End Skills',
            backendSlicerHTML,
            `
        I really enjoy front end dev and learning about whats possible in the browser! Experience with React and Redux on large projects with lots of state to manage. 
        I love working with React and understand the needs for state and properties on large projects, but also am always trying to learn more about the HTML, JS, and CSS combo. 
        
        `
        )
    );
    backendSkillsImgSlicer.initFoldInElement(mainWrapper);

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Front End Skills',
            databaseSlicerHTML,
            `
    I really enjoy front end dev and learning about whats possible in the browser! Experience with React and Redux on large projects with lots of state to manage. 
    I love working with React and understand the needs for state and properties on large projects, but also am always trying to learn more about the HTML, JS, and CSS combo. 
    
    `
        )
    );
    databaseSkillsImgSlicer.initFoldInElement(mainWrapper);

    return fragment;
}
