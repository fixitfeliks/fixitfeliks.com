import aboutMeImg from 'Assets/about-me.jpg';

import { MAIN_WRAPPER_ID } from 'Scripts/global-config.js';
import { getHeaderFlexCard } from 'Components/flex-card.js';

const MOBILE_BREAKPOINT = 800;

export default function () {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(
        getHeaderFlexCard(
            /*html*/ `<img src=${aboutMeImg} />`,
            'Hi this is about me! I am a certified weasle, we do weasle things and the such. Do not be afraid of my weasle powers'
        )
    );
    fragment.children[0].id = 'scroll-about-me';
    return fragment;
}
