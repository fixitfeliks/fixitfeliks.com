import frontendSkillsImg from 'Assets/web-skills.png';
import frontendSkillsImgMobile from 'Assets/web-skills-mobile.png';

import backendSkillsImg from 'Assets/backend-skills.png';
import backendSkillsImgMobile from 'Assets/backend-skills-mobile.png';

import mobileSkillsImg from 'Assets/mobile-skills.png';
import mobileSkillsImgMobile from 'Assets/mobile-skills-mobile.png';

import databaseSkillsImg from 'Assets/database-skills.png';
import databaseSkillsImgMobile from 'Assets/database-skills-mobile.png';

import devopsSkillsImg from 'Assets/devops-skills.png';
import devopsSkillsImgMobile from 'Assets/devops-skills-mobile.png';

import mcuSkillsImg from 'Assets/mcu-skills.png';
import mcuSkillsImgMobile from 'Assets/mcu-skills-mobile.png';

import engineeringSkillsImg from 'Assets/engineering-skills.png';
import engineeringSkillsImgMobile from 'Assets/engineering-skills-mobile.png';

import automationSkillsImg from 'Assets/automation-skills.png';
import automationSkillsImgMobile from 'Assets/automation-skills-mobile.png';

import { getTitleCard, getHeaderImageBodyFlexCard } from 'Components/flex-card.js';
import { ImageSlicer } from 'Components/image-slicer/image-slicer.js';

import { MAIN_WRAPPER_ID } from 'Scripts/global-config.js';

const MOBILE_BREAKPOINT = 800;

const frontendSkillsImgSlicer =
    window.innerWidth > MOBILE_BREAKPOINT
        ? new ImageSlicer(1, frontendSkillsImg, 2, 3)
        : new ImageSlicer(1, frontendSkillsImgMobile, 2, 3);
const frontendSlicerHTML = frontendSkillsImgSlicer.getHTML();

const backendSkillsImgSlicer =
    window.innerWidth > MOBILE_BREAKPOINT
        ? new ImageSlicer(2, backendSkillsImg, 2, 3)
        : new ImageSlicer(2, backendSkillsImgMobile, 2, 3);
const backendSlicerHTML = backendSkillsImgSlicer.getHTML();

const mobileSkillsImgSlicer =
    window.innerWidth > MOBILE_BREAKPOINT
        ? new ImageSlicer(3, mobileSkillsImg, 2, 3)
        : new ImageSlicer(3, mobileSkillsImgMobile, 2, 3);
const mobileSlicerHTML = mobileSkillsImgSlicer.getHTML();

const databaseSkillsImgSlicer =
    window.innerWidth > MOBILE_BREAKPOINT
        ? new ImageSlicer(4, databaseSkillsImg, 1, 3)
        : new ImageSlicer(4, databaseSkillsImgMobile, 1, 3);
const databaseSlicerHTML = databaseSkillsImgSlicer.getHTML();

const devopsSkillsImgSlicer =
    window.innerWidth > MOBILE_BREAKPOINT
        ? new ImageSlicer(5, devopsSkillsImg, 1, 3)
        : new ImageSlicer(5, devopsSkillsImgMobile, 1, 3);
const devopsSlicerHTML = devopsSkillsImgSlicer.getHTML();

const mcuSkillsImgSlicer =
    window.innerWidth > MOBILE_BREAKPOINT
        ? new ImageSlicer(6, mcuSkillsImg, 1, 3)
        : new ImageSlicer(6, mcuSkillsImgMobile, 1, 3);
const mcuSlicerHTML = mcuSkillsImgSlicer.getHTML();

const engineeringSkillsImgSlicer =
    window.innerWidth > MOBILE_BREAKPOINT
        ? new ImageSlicer(7, engineeringSkillsImg, 2, 3)
        : new ImageSlicer(7, engineeringSkillsImgMobile, 2, 3);
const engineeringSlicerHTML = engineeringSkillsImgSlicer.getHTML();

const automationSkillsImgSlicer =
    window.innerWidth > MOBILE_BREAKPOINT
        ? new ImageSlicer(8, automationSkillsImg, 2, 3)
        : new ImageSlicer(8, automationSkillsImgMobile, 2, 3);
const automationSlicerHTML = automationSkillsImgSlicer.getHTML();

export default function () {
    const fragment = document.createDocumentFragment();
    const mainWrapper = document.getElementById(MAIN_WRAPPER_ID);

    fragment.appendChild(getTitleCard('skills & experience'));

    // FRONTEND
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Frontend',
            frontendSlicerHTML,
            `
                1-2 years front end development with React and Redux
                Enjoy working on projects with Vanilla JS, CSS, and HTML.. like this site!<br><br>
                Working with REST APIs and GraphQL clients like Apollo

            `
        )
    );
    frontendSkillsImgSlicer.initFoldInElement(mainWrapper);

    // BACKEND
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Backend',
            backendSlicerHTML,
            `
                3-4 Years with Java for Application development and 1 year with Spring<br><br>
                Java was the first programming language I learned in HS. I enjoy it, but yea I know.
        
            `
        )
    );
    backendSkillsImgSlicer.initSpreadElement(mainWrapper);

    // Mobile
    // My first 'Smartphone' was the Samsung Blackjack, but no really it was an iPhone 4. Pretty sweet bit of kit for 2011.<br><br>
    // When I wanted to get into mobile development I switched over to an Android Nexus mostly because of the Java, but also the open source.
    // I've been an Android user ever since and built my first
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Mobile',
            mobileSlicerHTML,
            `
                1-2 Years in Android and React Native <br><br>
                My first 'Smartphone' was the Samsung Blackjack, but no really it was an iPhone 4. Pretty sweet bit of kit for 2011.<br><br>
                I am an Android/Linux user but am comfortable with macOS. The Java got me into Android and I've stuck with it. I created my first app for a project in uni<br><br>
                I spent a year with a Windows phone just to mix it up, not sure how about it now. The new iPhone 13 mini is looking really good right now actually and giving me 2011 vibes. 
                     
            `
        )
    );
    mobileSkillsImgSlicer.initFoldInElement(mainWrapper);

    // Database
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Database',
            databaseSlicerHTML,
            `
                3-4 Years with SQL.
                First full stack app was a LAMP stack with MYSQL<br><br>
                Experience building relational data models and some experience with Dynamo DB and NoSQL
            `
        )
    );
    databaseSkillsImgSlicer.initSpreadElement(mainWrapper);

    // Devops
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Dev Ops',
            devopsSlicerHTML,
            `
                    3-4 Years with SQL.
                    First full stack app was a LAMP stack with MYSQL<br><br>
                    Experience building relational data models and some experience with Dynamo DB and NoSQL
                `
        )
    );
    devopsSkillsImgSlicer.initFoldInElement(mainWrapper);

    // MCU
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Microcontrollers and RaspberryPI',
            mcuSlicerHTML,
            `
                    2-3 years experience <br><br>
                    Started out with 8-bit microchip microcontrollers and got into Arduino later on. <br><br>
                    I really like the RaspberryPI Zero W!
                `
        )
    );
    mcuSkillsImgSlicer.initSpreadElement(mainWrapper);

    // Engineering
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Mechanical & Electrical',
            engineeringSlicerHTML,
            `
                    5+ years experience <br><br>
                    My core experiences are in industrial automation and manufacturing
                `
        )
    );
    engineeringSkillsImgSlicer.initFoldInElement(mainWrapper);

    // Automation
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Industrial Automation',
            automationSlicerHTML,
            `
                        5+ years experience <br><br>
                        My core experiences are in industrial automation and manufacturing
                    `
        )
    );
    automationSkillsImgSlicer.initSpreadElement(mainWrapper);

    fragment.children[0].id = 'scroll-skills-experience';

    return fragment;
}
