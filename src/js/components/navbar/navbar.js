import { NAVBAR_ID, NAVBAR_ITEM_CLASSNAME } from 'Scripts/global-config.js';

const navbarRoutes = [
    {
        name: 'About Me',
        path: 'about-me'
    },
    {
        name: 'test1',
        path: 'test1'
    },
    {
        name: 'test2',
        path: 'test2'
    }
];

export function createNavbar() {
    const fragment = document.createDocumentFragment();
    const navbar = document.createElement('nav');
    navbar.id = NAVBAR_ID;
    for (let i = 0; i < navbarRoutes.length; i++) {
        const navbarItem = document.createElement('div');
        navbarItem.classList.add('navbar-item', 'transition');
        navbarItem.innerHTML = navbarRoutes[i].name;
        navbarItem.id = navbarRoutes[i].path;
        navbar.appendChild(navbarItem);
    }
    fragment.appendChild(navbar);
    return fragment;
}

window.addEventListener('click', function (event) {
    if (event.target.id != null && event.target.id !== '') {
        const clicked = document.getElementById(event.target.id);
        if (clicked != null && clicked.classList.contains(NAVBAR_ITEM_CLASSNAME)) {
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
    const height = window.innerHeight / 10;
    const navbar = document.getElementById(NAVBAR_ID);
    const elementCollection = navbar.children;
    for (let i = 0; i < elementCollection.length; i++) {
        elementCollection[i].classList.remove('transition');
        elementCollection[i].style.backgroundColor = '';
        if (i < index) {
            elementCollection[i].style.top = -height + 'px';
            elementCollection[i].style.zIndex = 0;
        } else if (i > index) {
            elementCollection[i].style.top = 0 + 'px';
            elementCollection[i].style.zIndex = 0;
        } else if (i === index) {
            elementCollection[i].style.top = index * height + 'px';
            elementCollection[i].style.zIndex = 1;
            elementCollection[i].style.backgroundColor = '#333333';
        }
    }
    elementCollection[0].insertAdjacentElement('beforebegin', elementCollection[index]);
    setTimeout(() => {
        for (let i = 0; i < elementCollection.length; i++) {
            elementCollection[i].style.top = 0;
            elementCollection[i].classList.add('transition');
            elementCollection[i].addEventListener('transitionEnd', () => {
                elementCollection[i].removeEventListener('transitionEnd');
                elementCollection[i].classList.remove('disable-click');
            });
        }
    }, 10);
}

function randomColorStyle(element) {
    element.style.backgroundColor = `rgb(
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)}
                )`;
}
