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
import { ImageSlicer } from 'Components/image-slicer/js/image-slicer.js';

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
            /*html*/ `
                <p>1-2 years front end development with React and recently with Redux and middleware like Redux-Saga. </p>
                <p>Enjoy learning and working on projects with Vanilla JS, CSS, and HTML without any dependencies or external libraries... like this site I built with webpack!</p>
                <p>Working with REST APIs and GraphQL clients like Apollo </p>

            `,
            frontendSlicerHTML
        )
    );
    frontendSkillsImgSlicer.initRandom(mainWrapper);

    // BACKEND
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Backend',
            /*html*/ `
                <p>3-4 Years with Java for Application development and 1 year with Spring</p>
                <p> Java was the first programming language I learned in HS!</p>
                <p>Fairly new to Python, but used it for helper scripts. Ran Django on the PI to take advantage of the Python GPIO Zero library.</p>
        
            `,
            backendSlicerHTML
        )
    );
    backendSkillsImgSlicer.initRandom(mainWrapper);

    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Mobile',
            /*html*/ `
                <p>1-2 Years in Android and React Native</p>
                <p>My first 'Smartphone' was the Samsung Blackjack. Pretty sweet bit of kit for 2007.</p>
                <p>The Java got me into Android and I've stuck with it. I created my first app for my senior design project in college.</p>
                <p>I spent a year with a Windows phone just to mix it up, I regret nothing.</p>
                     
            `,
            mobileSlicerHTML
        )
    );
    mobileSkillsImgSlicer.initRandom(mainWrapper);

    // Database
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Database',
            /*html*/ `
                <p>3-4 Years with SQL.</p>
                <p>First full stack app was a LAMP stack with MYSQL.</p>
                <p>Experience building relational data models and some experience with Dynamo DB and NoSQL.
                    Interested about learning more about the inner-workings of DBMS and how to optimize and tune queries and models for scalability.</p>
            `,
            databaseSlicerHTML
        )
    );
    databaseSkillsImgSlicer.initRandom(mainWrapper);

    // Devops
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Dev Ops',
            /*html*/ `
                <p>Been playing around with and installing Linux on random systems for over a decade, professional daily experience over a year.</p>
                <p>Comfortable setting up nginx and configuring on a Linux system.</p>
                <p>Just getting into Docker, but already had my fair share of setting up Dockerized apps, configuring Docker networks, and troubleshooting in Docker VMs on Linux and Rancher.</p>
                <p>I really enjoy setting up systems and working with automation, I would have a lot of fun with a career in DevOps</p>
            `,
            devopsSlicerHTML
        )
    );
    devopsSkillsImgSlicer.initRandom(mainWrapper);

    // MCU
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Microcontrollers and RaspberryPI',
            /*html*/ `
                <p>2-3 years experience. </p>
                <p>Started out with 8-bit Microchip microcontrollers and got into Arduino later on.</p>
                <p>I really liked the RaspberryPI W Zero for my IOT platform. Had it setup to broadcast its own AP for setup and a cron script to disable/enable the AP if no connection was found.</p>
            `,
            mcuSlicerHTML
        )
    );
    mcuSkillsImgSlicer.initRandom(mainWrapper);

    // Engineering
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Mechanical & Electrical',
            /*html*/ `
                <p>5+ years experience</p>
                <p>Skilled with SolidWorks, electrical troubleshooting, and fabrication. I had my own machine shop with mill, lathe, and grinder used for in house fabrication of machine and automated assembly equipment fixtures and components.</p>
            `,
            engineeringSlicerHTML
        )
    );
    engineeringSkillsImgSlicer.initRandom(mainWrapper);

    // Automation
    fragment.appendChild(
        getHeaderImageBodyFlexCard(
            'Industrial Automation',
            /*html*/ `
                <p>5+ years experience.</p>
                <p>Skilled PLC and Vision System programmer, I can appreciate a nice finite state machine.</p>
                <p>My core experiences are in industrial automation and manufacturing</p>
                <p>I've built vision guided robotic packaging cells. Worked on and troubleshot equipment that would weld, crimp, and measure the smallest precision stamped components to automated assembly cells that would take up an entire two story warehouse complete with large conveyor and elevator systems.</p>
            `,
            automationSlicerHTML
        )
    );
    automationSkillsImgSlicer.initRandom(mainWrapper);
    fragment.children[0].id = 'scroll-skills-experience';

    return fragment;
}
