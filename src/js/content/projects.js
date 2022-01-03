import gitHubLogoImg from 'Assets/GitHub-Mark-32px.png';
import boardOneImg from 'Assets/BoardOne_2.png';
import pcbCNC1 from 'Assets/pcb-cnc-1.jpg';
import pcbCNC2 from 'Assets/pcb-cnc-2.jpg';
import pcbCNC3 from 'Assets/pcb-cnc-3.jpg';
import pcbCNC4 from 'Assets/pcb-cnc-4.jpg';
import elmImageSlicerImg from 'Assets/felix-logo.png';
import elmImageSlicerImgMobile from 'Assets/felix-logo-mobile.png';

import { ImageSlicer } from 'Components/image-slicer/js/image-slicer.js';
import { getTitleCard, getHeaderImageBodyFlexCard } from 'Components/flex-card.js';
import { MAIN_WRAPPER_ID } from 'Scripts/global-config.js';

const MOBILE_BREAKPOINT = 700;

const elmImageSlicerImgSlicer =
    window.innerWidth > MOBILE_BREAKPOINT
        ? new ImageSlicer(101, elmImageSlicerImg, 5, 10)
        : new ImageSlicer(101, elmImageSlicerImgMobile, 5, 10);
const elmImageSlicerImgHTML = elmImageSlicerImgSlicer.getHTML();

export default function () {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(getTitleCard('projects'));
    const mainWrapper = document.getElementById(MAIN_WRAPPER_ID);

    const gitHubLogo = document.createElement('img');
    gitHubLogo.setAttribute('src', gitHubLogoImg);

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Image Slicer',
            /*html*/ `<div>
                <p>A small project I am working to turn into a component/library. It's what powers the little animations on this site!</p>
                    <ul>
                        <li>Images are loaded and scaled to create a grid of canvas objects</li>
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
            elmImageSlicerImgHTML
        )
    );

    elmImageSlicerImgSlicer.initSpreadElement(3, 10, mainWrapper);

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Brush-less DC Motor for Magnetic Stirrer',
            /*html*/ ` <div>
                    <p>A magnetic stirrer based on a brush-less DC motor concept</p>
                        <ul>
                            <li>Conventional stirrers use a rotating magnet on a motor</li>
                            <li>Magnetic stirrers based on this concept are pretty common, but I thought it would be cool to build one myself!</li>
                            <li><a href="http://ww1.microchip.com/downloads/en/AppNotes/00885a.pdf" class="gh-link-text" target="_blank">Microchip AN885 - Brushless DC (BLDC) Motor Fundamentals</a></li>
                            <li><a href="http://ww1.microchip.com/downloads/en/AppNotes/00857B.pdf" class="gh-link-text" target="_blank">Microchip AN857 - Brushless DC Motor Control Made Easy</a></li>
                        </ul>
                        <p>Control & commutation done with an Arduino Nano</p>
                        <p><div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/open-loop-bldc" class="gh-link-text" target="_blank">github.com/fixitfeliks/open-loop-bldc</a>
                        </div></p>
                        <br><div class="iframe-wrapper">
                            <iframe src="https://drive.google.com/file/d/1sD-0xDB0bGW0HveV3NwNqf3t4Pn1eciU/preview" width="640" height="360" frameBorder="0" allow="autoplay"></iframe>
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
                    <p>A learning project that I started in my free time and hope to update one day</p>
                        <p>NodeJS Backend</p>
                        <p><div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/phosphr-cloud" class="gh-link-text" target="_blank">github.com/fixitfeliks/phosphr-cloud</a>
                        </div></p>
                        <p>Account Linking with Google HomeGraph API</p>
                        <p><div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/homegraph-nodejs-server" class="gh-link-text" target="_blank">github.com/fixitfeliks/homegraph-nodejs-server</a>
                        </div></p>
                        <p>React Native Mobile App with Expo</p>
                        <p><div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/phosphr-mobile" class="gh-link-text" target="_blank">github.com/fixitfeliks/phosphr-mobile</a>
                        </div></p>
                        <p>RaspberryPI Django Server with GPIO Zero</p>
                        <p><div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/phosphr-pi" class="gh-link-text" target="_blank">github.com/fixitfeliks/phosphr-pi</a>
                        </div><br></p>
                        <p><div class="iframe-wrapper">
                            <iframe src="https://drive.google.com/file/d/1CkY5dERs6OberRMrSGWSAZk_g2iCbq-m/preview" width="640" height="480" frameBorder="0" allow="autoplay"></iframe>
                        </div></p>
                    </div>
                `,
            document.createDocumentFragment()
        )
    );

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Arduino 8-Bit RGB LED Controller with Bluetooth Android App',
            /*html*/ ` <div>
                    <p>Simple Arduino PWM RGB LED driver with HC-06 Bluetooth Module and Android App in Java. <br><br>
                    Board designed in Eagle and fabricated by etching on a cnc mill. Generic 6040 CNC router with 3D printed fixtures run with Linux CNC image.<br><br>
                        Java App</p>
                        <p><div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/android-led-controller" class="gh-link-text" target="_blank">github.com/fixitfeliks/android-led-controller</a>
                        </div></p>
                        <p>Arduino Routine</p>
                        <p><div class="gh-link-container">
                            &emsp;<img src=${gitHubLogoImg} class="gh-link-image" />
                            <a href="https://github.com/fixitfeliks/arduino-led-controller" class="gh-link-text" target="_blank">github.com/fixitfeliks/arduino-led-controller</a>
                        </div></p>
                        <p><br>PCB Designed in Eagle</p>
                        <img src=${boardOneImg} class="img-style"/>
                        <p><br><a href="http://eagle.autodesk.com/eagle/ulp?utf8=%E2%9C%93&q%5Btitle_or_author_or_description_cont%5D=pcb-gcode&button=" class="gh-link-text" target="_blank">G-Code generated with pcb-gcode</a></p>
                        <p>Machined using LinuxCNC and 6040 CNC Router.</p>
                        <p>Fixtures and enclosures 3D printed with Prusa MK3 FDM printer</p>
                        <p><div class="iframe-wrapper">
                            <iframe src="https://drive.google.com/file/d/149f7eqVUlbL7Q6F0HcBWRy-w022MDsD6/preview" width="640" height="360" frameBorder="0" allow="autoplay"></iframe>
                        </div></p>
                        <p><br>Machining two boards at once by drilling both Top and Bottom traces on one side and flipping. The secret sauce is in the alignment.</p>
                        <p>
                            <div class="img-grid">
                            <img src=${pcbCNC1}/>
                            <img src=${pcbCNC2}/>
                            <img src=${pcbCNC3} class="img-full-width"/>
                            <img src=${pcbCNC4} class="img-full-width"/>
                            </div>
                        </p>

                    </div>
                `,
            document.createDocumentFragment()
        )
    );

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'weddedaf.com',
            /*html*/ ` <div>
                            <p>A simple SPA I made for my wedding site when I first started learning React. Hosted from AWS S3 with CloudFront.</p>
                            <p>I love that the timer is counting backwards so I can always check back on how long its been. You can call it a happy little accident :)</p>
                            <p><a href="https://weddedaf.com" class="gh-link-text" target="_blank">weddedaf.com</a></p>
                            <p><div class="iframe-wrapper">
                                <iframe src="https://weddedaf.com" width="640" height="360" frameBorder="0" allow="autoplay"></iframe>
                            </div></p>
                        </div>
                `,
            document.createDocumentFragment()
        )
    );

    fragment.children[0].id = 'scroll-projects';
    return fragment;
}
