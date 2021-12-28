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
            /*html*/ `<p>Hi I'm Feliks!</p> 
            <p>Engineer, programmer, researcher, eccentric, troubleshooter, and somewhat of a scientist myself. </p>
            <p>Passionate about science, technology, and lifelong learning. </p>
            <p>My greatest skill is my ability to learn quickly having a very strong and diverse foundation across many technical fields.</p>
            <p>Excited about the future specializing in software development and the next chapter!</p>
            `
        )
    );
    fragment.children[0].id = 'scroll-about-me';
    return fragment;
}
