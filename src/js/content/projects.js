import aboutMeImg from 'Assets/about-me.jpg';
import gitHubLogoImg from 'Assets/GitHub-Mark-32px.png';

import { getTitleCard, getHeaderImageBodyFlexCard } from 'Components/flex-card.js';

export default function () {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(getTitleCard('projects'));

    const image = document.createElement('img');
    image.setAttribute('src', aboutMeImg);

    const gitHubLogo = document.createElement('img');
    gitHubLogo.setAttribute('src', gitHubLogoImg);

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Image Slicer',
            /*html*/ `
                A small project I am working to turn into a component/library. Its whats powering the little animations on this site!<br><br>
                    <ul>
                        <li>Images are loaded and scaled to create a grid of canvas objects.</li>
                        <li>Canvas objects are animated using CSS translate transitions</li>
                        <li>'Tiles' in the grid are moved and a snapshot of the grid can be created at each step</li>
                        <li>TAdd the snapshots to an array and render!</li>
                    </ul>
                    <div style="height:32px; display:flex; align-items:center;">
                       <img src=${gitHubLogoImg} style="padding-right:17px;" />
                       <a href="https://github.com/fixitfeliks/image-slicer" style="text-decoration: none;">github.com/fixitfeliks/image-slicer</a>
                    </div>
            `,
            image
        )
    );

    fragment.children[0].id = 'scroll-projects';
    return fragment;
}
