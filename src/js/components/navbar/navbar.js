import { NAVBAR_ID, NAVBAR_ITEM_CLASSNAME } from 'Scripts/global-config.js';

const navbarRoutes = [
    {
        name: 'about me',
        path: 'about-me'
    },
    {
        name: 'skills & experience',
        path: 'skills-experience'
    },
    {
        name: 'projects',
        path: 'projects'
    }
];

export function createNavbar() {
    const fragment = document.createDocumentFragment();
    const navbar = document.createElement('nav');
    navbar.id = NAVBAR_ID;
    for (let i = 0; i < navbarRoutes.length; i++) {
        const navbarItem = document.createElement('div');
        const link = document.createElement('a');
        link.href = `/#/${navbarRoutes[i].path}`;
        navbarItem.innerHTML = navbarRoutes[i].name;
        navbarItem.appendChild(link);
        navbarItem.classList.add('navbar-item', 'transition');
        navbarItem.id = navbarRoutes[i].path;
        navbar.appendChild(navbarItem);
        if (i === 0) navbarItem.style.textDecoration = 'underline';
    }
    fragment.appendChild(navbar);
    return fragment;
}

window.addEventListener('click', function (event) {
    if (event.target.id != null && event.target.id !== '') {
        const clicked = document.getElementById(event.target.id);
        if (
            (clicked != null && clicked.classList.contains(NAVBAR_ITEM_CLASSNAME)) ||
            clicked.parentElement.classList.contains(NAVBAR_ITEM_CLASSNAME)
        ) {
            const navbar = document.getElementById(NAVBAR_ID);
            const elementCollection = navbar.children;
            let index = -1;
            for (let i = 0; i < elementCollection.length; i++) {
                if (event.target.id === elementCollection[i].id) {
                    index = i;
                    i = elementCollection.length;
                }
            }
            sortNavbarItems(parseInt(index));
        }
    }
});

function sortNavbarItems(index) {
    const navbar = document.getElementById(NAVBAR_ID);
    const elementCollection = navbar.children;
    const mobileView = window.innerWidth <= 600 ? true : false;
    let cumlItemHeight = 0;
    let cumlItemWidth = 0;
    for (let i = 0; i < elementCollection.length; i++) {
        elementCollection[i].classList.remove('transition');
        elementCollection[i].style.textDecoration = '';
        if (i < index) {
            const height = elementCollection[i + 1].clientHeight;
            const width =
                i == 0 && index == elementCollection.length - 1
                    ? elementCollection[elementCollection.length - 1].clientWidth
                    : elementCollection[i + 1].clientWidth;
            elementCollection[i].style.left = mobileView ? '0px' : -width + 'px';
            elementCollection[i].style.top = mobileView ? -height + 'px' : '0px';
            elementCollection[i].style.zIndex = 0;
        } else if (i > index) {
            elementCollection[i].style.left = '0px';
            elementCollection[i].style.top = '0px';
            elementCollection[i].style.zIndex = 0;
        } else if (i === index) {
            elementCollection[i].style.left = mobileView ? '0px' : cumlItemWidth + 'px';
            elementCollection[i].style.top = mobileView ? cumlItemHeight + 'px' : '0px';
            elementCollection[i].style.zIndex = 1;
            elementCollection[i].style.textDecoration = 'underline';
        }
        cumlItemHeight += elementCollection[i].clientHeight;
        cumlItemWidth += elementCollection[i].clientWidth;
    }
    elementCollection[0].insertAdjacentElement('beforebegin', elementCollection[index]);
    setTimeout(() => {
        for (let i = 0; i < elementCollection.length; i++) {
            elementCollection[i].style.left = 0;
            elementCollection[i].style.top = 0;
            elementCollection[i].classList.add('transition');
        }
    }, 10);
}

export function navOnScroll(scrollY) {
    const navbar = document.getElementById(NAVBAR_ID);
    const stickyX = navbar.offsetTop;
    const navbarChildren = navbar.children;
    const itemHeighnavbart = navbarChildren[0].innerHeight;
    if (scrollY > stickyX) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

function randomColorStyle(element) {
    element.style.backgroundColor = `rgb(
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)}
                )`;
}
