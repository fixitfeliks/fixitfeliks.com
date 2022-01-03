import aboutMeImg from 'Assets/me.jpg';

import { getTitleCard, getHeaderFlexCard } from 'Components/flex-card.js';

export default function () {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(getTitleCard('about me'));
    fragment.appendChild(
        getHeaderFlexCard(
            /*html*/ `<img src=${aboutMeImg} class="img-style"/>`,
            /*html*/ `<p>Hi I'm Feliks!</p> 
            <p>Engineer, programmer, perfectionist, researcher, eccentric, troubleshooter, and somewhat of a scientist. </p>
            <p>Passionate about science, technology, and lifelong learning. </p>
            <p>My greatest skill is my ability to learn quickly. I have a very strong and diverse foundation across many technical fields.</p>
            <p>Excited about the future specializing in software development.</p>
            <p>Looking for a new team member, someone to collaborate on projects, or even a new website? 
            <a href = "mailto: feliks.peysakhov@gmail.com" class="gh-link-text">Email me</a> </p>
            `
        )
    );
    fragment.children[0].id = 'scroll-about-me';
    return fragment;
}
