import aboutMeImg from 'Assets/me.jpg';

import { MAIN_WRAPPER_ID } from 'Scripts/global-config.js';
import { getTitleCard, getHeaderFlexCard } from 'Components/flex-card.js';

const MOBILE_BREAKPOINT = 800;

export default function () {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(getTitleCard('about me'));
    fragment.appendChild(
        getHeaderFlexCard(
            /*html*/ `<img src=${aboutMeImg} class="img-style"/>`,
            /*html*/ `Hi I'm Feliks! <br><br>
            Engineer, programmer, researcher, eccentric, professional troubleshooter, and somewhat of a scientist myself. <br><br>
            Passionate about science and technology and my greatest skill is my ability to learn quickly having a very strong and diverse foundation across many technical fields. <br><br>

            `
        )
    );
    fragment.children[0].id = 'scroll-about-me';
    return fragment;
}
