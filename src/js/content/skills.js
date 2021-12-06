import webSkillsImg from 'Assets/web-skills.png';
import webSkillsImgMobile from 'Assets/web-skills-mobile.png';

import { getHeaderImageBodyFlexCard } from 'Components/flex-card.js';
import { ImageSlicer } from 'Components/image-slicer/image-slicer.js';

export function getSkillsPage() {
    const fragment = document.createDocumentFragment();
    const webSkillsImgSlicer =
        window.innerWidth > 800 ? new ImageSlicer(1, webSkillsImg, 2, 3) : new ImageSlicer(1, webSkillsImgMobile, 2, 3);

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Front End Skills',
            webSkillsImgSlicer.getHTML(),
            `
            I really enjoy front end dev and learning about whats possible in the browser! Experience with React and Redux on large projects with lots of state to manage. 
            I love working with React and understand the needs for state and properties on large projects, but also am always trying to learn more about the HTML, JS, and CSS combo. 
            
            `
        )
    );
    webSkillsImgSlicer.initFoldInElement();

    return fragment;
}
