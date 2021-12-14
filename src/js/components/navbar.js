import {
    MAIN_GRID_ID,
    NAVBAR_BUTTON_CONTAINER_CLASSNAME,
    NAVBAR_BUTTON_ID,
    NAVBAR_BUTTON_CLASSNAME,
    HIDE_NAVBAR_BUTTON_CLASSNAME,
    ROTATE_NAVBAR_BUTTON_CLASSNAME,
    MAIN_WRAPPER_ID,
    NAVBAR_ID,
    NAVBAR_ITEM_LIST_ID,
    NAVBAR_ITEM_CLASSNAME
} from 'Scripts/global-config.js';

// TODO combine with CSS
const RESPONSIVE_BREAKPOINT = 700;

const navbarRoutes = [
    {
        name: 'projects',
        path: 'projects'
    },
    {
        name: 'skills & experience',
        path: 'skills-experience'
    },
    {
        name: 'about me',
        path: 'about-me'
    }
];

let state = {
    path: 'about-me'
};

// window.location.hash = '/' + state.path;

window.addEventListener('resize', () => {
    const mobileView = window.innerWidth <= RESPONSIVE_BREAKPOINT ? true : false;
    const navbar = document.getElementById(NAVBAR_ID);
    const navbarItemList = document.getElementById(NAVBAR_ITEM_LIST_ID);
    if (navbar.classList.contains('sticky')) {
        const navbarItemHeight = navbarItemList.children[0].clientHeight;
        navbar.style.top = mobileView
            ? `${-navbarItemHeight * (navbarItemList.children.length - 1)}px`
            : `calc(${-navbarItemHeight}px + 1em)`;
        if (mobileView) {
            resetOpenNavButton();
            setVisibilityOpenNavButton(true);
        }
        navbar.style.width = `calc(${navbar.parentElement.clientWidth}px - 2em)`;
    }
});

export function getNavbarFragment(scrollId) {
    const fragment = document.createDocumentFragment();
    const navbar = document.createElement('nav');
    navbar.id = NAVBAR_ID;
    const navbarItemList = document.createElement('div');
    navbarItemList.id = NAVBAR_ITEM_LIST_ID;
    const pathIndex = getInitialPathIndex(state.path);
    for (let i = 0; i < navbarRoutes.length; i++) {
        const navbarItem = document.createElement('a');
        navbarItem.href = `/#/${navbarRoutes[i].path}`;
        navbarItem.innerHTML = navbarRoutes[i].name;
        navbarItem.classList.add(NAVBAR_ITEM_CLASSNAME, 'transition');
        navbarItem.onclick = (e) => onNavClick(e);
        navbarItem.id = navbarRoutes[i].path;
        navbarItem.ontransitionend = onNavItemTransitionEnd;
        navbarItemList.appendChild(navbarItem);
        if (i === pathIndex) navbarItem.style.textDecoration = 'underline';
    }

    navbar.appendChild(navbarItemList);
    navbarItemList.insertAdjacentElement('beforeend', navbarItemList.children[pathIndex]);
    navbar.appendChild(getOpenNavButtonFragment());

    fragment.appendChild(navbar);

    document.getElementById(scrollId).addEventListener('scroll', function (e) {
        window.requestAnimationFrame(function () {
            navOnScroll(document.getElementById(MAIN_WRAPPER_ID).scrollTop);
        });
    });

    return fragment;
}

let resetScroll = true;
function navOnScroll(scrollY) {
    console.log('Scroll ', scrollY);
    if (scrollY < 10) {
        resetScroll = true;
    }
    const navbar = document.getElementById(NAVBAR_ID);
    const navbarItemList = document.getElementById(NAVBAR_ITEM_LIST_ID);
    const navbarChildren = navbarItemList.children;
    const navbarItemHeight = navbarChildren[0].clientHeight;
    const navbarDelta = getNewNavbarTop();
    const bodyChildren = document.body.children;
    const mobileView = window.innerWidth <= RESPONSIVE_BREAKPOINT ? true : false;
    const originalNavbarWidth = bodyChildren[0].children[0].clientWidth;
    const newNavbarWidth =
        navbar.parentElement.clientWidth -
        parseFloat(window.getComputedStyle(navbar.parentElement, null).getPropertyValue('padding-left')) * 2;
    if (scrollY > navbarDelta && !navbar.classList.contains('sticky')) {
        resetScroll = false;
        navbar.classList.remove('transition-top');
        navbar.classList.add('sticky');
        if (mobileView) setVisibilityOpenNavButton(true);
        navbar.style.width = `${newNavbarWidth}px`;
        navbar.style.top = `${-navbarDelta}px`; //TODO Fix nested children
        bodyChildren[0].children[0].style.top = mobileView
            ? `${navbarItemHeight * navbarChildren.length}px`
            : `${navbarItemHeight}px`;
    } else if (scrollY < navbarDelta && navbar.classList.contains('sticky') && resetScroll) {
        navbar.classList.add('transition-top');
        navbar.classList.remove('sticky');
        setVisibilityOpenNavButton(false);
        navbar.style.width = '100%';
        navbar.style.top = '0px';
        bodyChildren[0].children[0].style.top = '0px';
    }
}

function getNewNavbarTop() {
    const navbar = document.getElementById(NAVBAR_ID);
    const navbarItemList = document.getElementById(NAVBAR_ITEM_LIST_ID);
    const navbarChildren = navbarItemList.children;
    const navbarItemHeight = navbarChildren[0].clientHeight;
    const navbarHeight = navbar.clientHeight;
    const navbarDelta = navbarHeight - navbarItemHeight;
    return navbarDelta;
}

function getOpenNavButtonFragment() {
    const fragment = document.createDocumentFragment();
    const navbarButtonContainer = document.createElement('div');
    navbarButtonContainer.classList.add(NAVBAR_BUTTON_CONTAINER_CLASSNAME, HIDE_NAVBAR_BUTTON_CLASSNAME, 'transition');
    const openNavButton = document.createElement('div');
    openNavButton.innerHTML = '<div></div>';
    fragment.appendChild(openNavButton);
    openNavButton.id = NAVBAR_BUTTON_ID;
    openNavButton.classList.add(NAVBAR_BUTTON_CLASSNAME, 'transition');
    navbarButtonContainer.appendChild(openNavButton);
    navbarButtonContainer.onclick = toggleOpenNavButton;
    fragment.appendChild(navbarButtonContainer);
    return fragment;
}

const toggleOpenNavButton = () => {
    const navbar = document.getElementById(NAVBAR_ID);
    const navbarItemList = document.getElementById(NAVBAR_ITEM_LIST_ID).children;
    const navButton = document.getElementById(NAVBAR_BUTTON_ID);
    if (navButton != null) {
        if (navButton.classList.contains(ROTATE_NAVBAR_BUTTON_CLASSNAME)) {
            navButton.classList.remove(ROTATE_NAVBAR_BUTTON_CLASSNAME);
            if (navbar != null && navbarItemList != null)
                navbar.style.top = `${-getNewNavbarTop(navbarItemList.length - 1)}px`;
        } else {
            navbar.classList.add('transition-top');
            navButton.classList.add(ROTATE_NAVBAR_BUTTON_CLASSNAME);
            if (navbar != null) navbar.style.top = 0;
        }
    }
};

function resetOpenNavButton() {
    const navButton = document.getElementById(NAVBAR_BUTTON_ID);
    if (navButton != null) {
        navButton.classList.remove(ROTATE_NAVBAR_BUTTON_CLASSNAME);
    }
}

function setVisibilityOpenNavButton(isShow) {
    const navButton = document.getElementById(NAVBAR_BUTTON_ID);
    if (navButton != null) {
        if (isShow) {
            if (navButton.parentElement.classList.contains(HIDE_NAVBAR_BUTTON_CLASSNAME)) {
                navButton.parentElement.classList.remove(HIDE_NAVBAR_BUTTON_CLASSNAME);
                resetOpenNavButton();
            }
        } else {
            if (!navButton.parentElement.classList.contains(HIDE_NAVBAR_BUTTON_CLASSNAME)) {
                navButton.parentElement.classList.add(HIDE_NAVBAR_BUTTON_CLASSNAME);
                resetOpenNavButton();
            }
        }
    }
}

const onNavItemTransitionEnd = () => {
    // navReady = true;
};

function onNavClick(event) {
    const navbar = document.getElementById(NAVBAR_ID);
    const navButton = document.getElementById(NAVBAR_BUTTON_ID);
    console.log('nav item click: ', event.target.id);
    const scrollTo = document.getElementById('scroll-' + event.target.id);
    const mobileView = window.innerWidth <= RESPONSIVE_BREAKPOINT ? true : false;
    if (scrollTo != null) {
        let finalScrollTop = scrollTo.offsetTop;
        if (!navbar.classList.contains('sticky')) {
            if (mobileView) {
                finalScrollTop -= navbar.children[0].children[0].clientHeight;
            } else {
                finalScrollTop -= navbar.clientHeight;
            }
            finalScrollTop -= parseFloat(window.getComputedStyle(navbar, null).getPropertyValue('border-bottom'));
        } else {
            if (mobileView) {
                finalScrollTop += navbar.clientHeight - navbar.children[0].children[0].clientHeight;
            } else {
                finalScrollTop -=
                    navbar.clientHeight -
                    navbar.children[0].children[0].clientHeight -
                    parseFloat(window.getComputedStyle(navbar.parentElement, null).getPropertyValue('padding-left')) *
                        2;
            }
            finalScrollTop += parseFloat(window.getComputedStyle(navbar, null).getPropertyValue('border-bottom')) + 1;
        }
        console.log('Scroll To: ', finalScrollTop);
        document.getElementById(MAIN_WRAPPER_ID).scrollTo({
            top: finalScrollTop,
            left: 0,
            behavior: 'smooth'
        });
    }
    if (navButton.classList.contains(ROTATE_NAVBAR_BUTTON_CLASSNAME) && mobileView) {
        navbar.classList.add('transition-top');
        navButton.classList.remove(ROTATE_NAVBAR_BUTTON_CLASSNAME);
        if (navbar != null) navbar.style.top = `${-getNewNavbarTop(navbar.children.length - 1)}px`;
    }

    state.path = '/' + event.target.id;
    if (window.location.hash.substring(1) !== state.path) resetOpenNavButton();
    const navbarItemList = document.getElementById(NAVBAR_ITEM_LIST_ID);
    const elementCollection = navbarItemList.children;
    let index = -1;
    for (let i = 0; i < elementCollection.length; i++) {
        if (event.target.id === elementCollection[i].id) {
            index = i;
            i = elementCollection.length;
        }
    }
    sortNavbarItems(parseInt(index));
    // }
}

function sortNavbarItems(index) {
    const navbarItemList = document.getElementById(NAVBAR_ITEM_LIST_ID);
    const elementCollection = navbarItemList.children;
    if (index !== -1 && index !== elementCollection.length - 1) {
        const mobileView = window.innerWidth <= RESPONSIVE_BREAKPOINT ? true : false;
        let cumlItemHeight = 0;
        let cumlItemWidth = 0;
        for (let i = elementCollection.length - 1; i >= 0; i--) {
            elementCollection[i].classList.remove('transition');
            elementCollection[i].style.textDecoration = '';
            if (i > index) {
                const height = elementCollection[i - 1].clientHeight;
                const width =
                    i === elementCollection.length - 1 && index === 0
                        ? elementCollection[0].clientWidth
                        : elementCollection[i - 1].clientWidth;
                elementCollection[i].style.left = mobileView ? '0px' : width + 'px';
                elementCollection[i].style.top = mobileView ? height + 'px' : '0px';
                elementCollection[i].style.zIndex = 0;
            } else if (i < index) {
                elementCollection[i].style.left = '0px';
                elementCollection[i].style.top = '0px';
                elementCollection[i].style.zIndex = 0;
            } else if (i === index) {
                elementCollection[i].style.left = mobileView ? '0px' : -cumlItemWidth + 'px';
                elementCollection[i].style.top = mobileView ? -cumlItemHeight + 'px' : '0px';
                elementCollection[i].style.zIndex = 1;
                elementCollection[i].style.textDecoration = 'underline';
            }
            cumlItemHeight += elementCollection[i].clientHeight;
            cumlItemWidth += elementCollection[i].clientWidth;
        }

        navbarItemList.insertAdjacentElement('beforeend', elementCollection[index]);

        updateAnimation(elementCollection);
    }
}

function updateAnimation(elementCollection) {
    setTimeout(() => {
        for (let i = elementCollection.length - 1; i >= 0; i--) {
            // This skips some animations, why!?!?!
            // window.requestAnimationFrame(function () {
            elementCollection[i].style.left = 0;
            elementCollection[i].style.top = 0;
            elementCollection[i].classList.add('transition');
            // navReady = false;
            // });
        }
    }, 10);
}

function getInitialPathIndex(path) {
    for (let i = 0; i < navbarRoutes.length; i++) {
        if (navbarRoutes[i].path === path) return i;
    }
}
