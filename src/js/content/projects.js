import aboutMeImg from 'Assets/about-me.jpg';
import phopshrImg from 'Assets/project-phosphr.png';
import gitHubLogoImg from 'Assets/GitHub-Mark-32px.png';
import boardOneImg from 'Assets/BoardOne_2.png';

import { getTitleCard, getHeaderImageBodyFlexCard } from 'Components/flex-card.js';

export default function () {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(getTitleCard('projects'));

    const elmImageSlicerImg = document.createElement('img');
    elmImageSlicerImg.setAttribute('src', aboutMeImg);
    elmImageSlicerImg.classList.add('img-style');

    const elmStirrerImg = document.createElement('img');
    elmStirrerImg.setAttribute('src', aboutMeImg);

    const elmPhopshrImg = document.createElement('img');
    elmPhopshrImg.setAttribute('src', phopshrImg);

    const gitHubLogo = document.createElement('img');
    gitHubLogo.setAttribute('src', gitHubLogoImg);

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Image Slicer',
            /*html*/ `<div>
                A small project I am working to turn into a component/library. Its whats powering the little animations on this site!<br><br>
                    <ul>
                        <li>Images are loaded and scaled to create a grid of canvas objects.</li>
                        <li>Canvas objects are animated using CSS translate transitions</li>
                        <li>'Tiles' in the grid are moved and a snapshot of the grid can be created at each step</li>
                        <li>Add the snapshots to an array and render!</li>
                    </ul>
                    <div class="gh-link-container">
                        &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                       <a href="https://github.com/fixitfeliks/image-slicer" class="gh-link-text" target="_blank">github.com/fixitfeliks/image-slicer</a>
                    </div>
                </div>
            `,
            elmImageSlicerImg
        )
    );

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Brush-less DC Motor for Magnetic Stirrer',
            /*html*/ ` <div>
                    A magnetic stirrer based on a brush-less DC motor concept<br><br>
                        <ul>
                            <li>Conventional stirrers use a rotating magnet on a motor</li>
                            <li>Magnetic stirrers based on this concept are pretty common, but I thought it would be cool to build one myself!</li>
                            <li><a href="http://ww1.microchip.com/downloads/en/AppNotes/00885a.pdf" class="gh-link-text" target="_blank">Microchip AN885 - Brushless DC (BLDC) Motor Fundamentals</a></li>
                            <li><a href="http://ww1.microchip.com/downloads/en/AppNotes/00857B.pdf" class="gh-link-text" target="_blank">Microchip AN857 - Brushless DC Motor Control Made Easy</a></li>
                        </ul>
                        Control & commutation done with an arduino<br><br>
                        <div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/open-loop-bldc" class="gh-link-text" target="_blank">github.com/fixitfeliks/open-loop-bldc</a>
                        </div><br><br>
                        <div class="iframe-wrapper">
                            <iframe src="https://drive.google.com/file/d/1sD-0xDB0bGW0HveV3NwNqf3t4Pn1eciU/preview" width="100%" height="480" frameBorder="0" allow="autoplay"></iframe>
                        </div>
                    </div>
                `,
            document.createDocumentFragment()
        )
    );

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Google HomeGraph API App with IOT Device',
            /*html*/ ` <div>
                    A learning project I did that was of course never finished, it would be cool to update this!<br><br>
                        NodeJS Backend<br><br>
                        <div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/phosphr-cloud" class="gh-link-text" target="_blank">github.com/fixitfeliks/phosphr-cloud</a>
                        </div><br>
                        Account Linking with Google HomeGraph API<br><br>
                        <div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/homegraph-nodejs-server" class="gh-link-text" target="_blank">github.com/fixitfeliks/homegraph-nodejs-server</a>
                        </div><br>
                        React Native Mobile App with Expo<br><br>
                        <div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/phosphr-mobile" class="gh-link-text" target="_blank">github.com/fixitfeliks/phosphr-mobile</a>
                        </div><br>
                        RaspberryPI Django Server with GPIO Zero<br><br>
                        <div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/phosphr-pi" class="gh-link-text" target="_blank">github.com/fixitfeliks/phosphr-pi</a>
                        </div><br><br>
                        <div class="iframe-wrapper">
                            <iframe src="https://drive.google.com/file/d/1CkY5dERs6OberRMrSGWSAZk_g2iCbq-m/preview" width="640" height="480" frameBorder="0" allow="autoplay"></iframe>
                        </div>
                    </div>
                `,
            document.createDocumentFragment()
        )
    );

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Arduino 8-Bit RGB LED Controller with Bluetooth Android App',
            /*html*/ ` <div>
                    Simple Arduino PWM RGD driver with HC-06 Bluetooth Module. Android App in Java. <br><br>
                    Board designed in Eagle and fabricated by etching on a cnc mill. Generic 6040 CNC router with 3D printed fixtures run with Linux CNC image.<br><br>
                        Java App<br><br>
                        <div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/android-led-controller" class="gh-link-text" target="_blank">github.com/fixitfeliks/android-led-controller</a>
                        </div><br>
                        Arduino Routine<br><br>
                        <div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/arduino-led-controller" class="gh-link-text" target="_blank">github.com/fixitfeliks/arduino-led-controller"</a>
                        </div><br><br>
                        PCB Designed in Eagle<br><br>
                        <img src=${boardOneImg} class="img-style"/>
                    </div>
                `,
            document.createDocumentFragment()
        )
    );

    fragment.children[0].id = 'scroll-projects';
    return fragment;
}
