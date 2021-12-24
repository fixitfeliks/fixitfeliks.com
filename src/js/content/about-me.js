import aboutMeImg from 'Assets/me.jpg';

import { MAIN_WRAPPER_ID } from 'Scripts/global-config.js';
import { getTitleCard, getHeaderFlexCard } from 'Components/flex-card.js';

const MOBILE_BREAKPOINT = 800;

export default function () {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(getTitleCard('about me'));
    fragment.appendChild(
        getHeaderFlexCard(
            /*html*/ `<img src=${aboutMeImg} class="img-header"/>`,
            /*html*/ `Hi I'm Feliks! <br><br>
            An engineer, programmer, scientist, researcher, eccentric, and professional troubleshooter. <br><br>
            I am passionate about science and technology and have had a very interesting and diverse career that has spanned many different industries.
            My greatest skill is my ability to learn quickly having a very strong and diverse foundation across many technical fields. <br><br>

            Jack of all trades, but master of none might be one way to describe me. I am perfectly happy being pulled in all directions and constantly learning. I would like to spend the next decade of my career focusing and mastering the art of building world class software in whatever technology or language.<br><br>
            This next chapter of my career I am excited about getting back into software development and being part of a team where I can learn and eventually lead!`
        )
    );
    fragment.children[0].id = 'scroll-about-me';
    return fragment;
}
