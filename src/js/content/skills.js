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
            'With the right amount of weed anything is possible.'
        )
    );
    webSkillsImgSlicer.initFoldInElement();

    return fragment;
}
