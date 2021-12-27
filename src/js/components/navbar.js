import {
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
let updateScrollReady = true;
let navReady = true;

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

window.addEventListener('resize', () => {
    onResize();
});

function onResize() {
    window.requestAnimationFrame(() => {
        const mobileView = window.innerWidth <= RESPONSIVE_BREAKPOINT ? true : false;
        const navbar = document.getElementById(NAVBAR_ID);
        if (navbar.classList.contains('sticky')) {
            if (mobileView) {
                resetOpenNavButton();
                setVisibilityOpenNavButton(true);
            }
            navbar.style.top = mobileView ? `${getNewNavbarTop()}px` : `${-getNavBarTopPadding()}px`;
            navbar.style.width = `calc(${navbar.parentElement.clientWidth}px - 2em)`;
        }
    });
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

function updateNavOnScroll(scrollY) {
    const navbarItemList = document.getElementById(NAVBAR_ITEM_LIST_ID);

    for (let i = 0; i < navbarRoutes.length; i++) {
        if (scrollY > navbarRoutes[i].scroll) {
            for (let j = 0; j < navbarItemList.children.length - 1; j++) {
                if (navbarItemList.children[j].id == navbarRoutes[i].path) {
                    sortNavbarItems(j);
                    break;
                }
            }
            break;
        }
    }
}

let resetScroll = true;
function navOnScroll(scrollY) {
    if (scrollY < 10) {
        resetScroll = true;
    }
    const navbar = document.getElementById(NAVBAR_ID);
    const navbarItemList = document.getElementById(NAVBAR_ITEM_LIST_ID);
    const navbarChildren = navbarItemList.children;
    const navbarItemHeight = navbarChildren[0].clientHeight;
    const bodyChildren = document.body.children;
    const mobileView = window.innerWidth <= RESPONSIVE_BREAKPOINT ? true : false;
    const navbarDelta = getNavBarTopPadding();
    const newNavbarWidth =
        navbar.parentElement.clientWidth -
        parseFloat(window.getComputedStyle(navbar.parentElement, null).getPropertyValue('padding-left')) * 2;
    if (scrollY > navbarDelta && !navbar.classList.contains('sticky')) {
        resetScroll = false;
        navbar.classList.remove('transition-top');
        navbar.classList.add('sticky');
        updateScrollPositions();
        if (mobileView) setVisibilityOpenNavButton(true);
        navbar.style.width = `${newNavbarWidth}px`;
        navbar.style.top = mobileView ? `${getNewNavbarTop()}px` : `${-getNavBarTopPadding()}px`; //TODO Fix nested children
        bodyChildren[0].children[0].style.top = mobileView
            ? `${navbarItemHeight * navbarChildren.length}px`
            : `${navbarItemHeight}px`;
    } else if (scrollY < navbarDelta && navbar.classList.contains('sticky') && resetScroll) {
        navbar.classList.add('transition-top');
        navbar.classList.remove('sticky');
        updateScrollPositions();
        setVisibilityOpenNavButton(false);
        navbar.style.width = '100%';
        navbar.style.top = '0px';
        bodyChildren[0].children[0].style.top = '0px';
    }
    if (updateScrollReady) updateNavOnScroll(scrollY);
}

function getNavBarTopPadding() {
    const navbarItemList = document.getElementById(NAVBAR_ITEM_LIST_ID);
    const navbarChildren = navbarItemList.children;
    const navbarItemHeight = navbarChildren[0].clientHeight;
    const navbarDelta = navbarItemHeight - parseFloat(getComputedStyle(navbarChildren[0]).fontSize);
    return Math.floor(navbarDelta);
}

function getNewNavbarTop() {
    const navbarItemList = document.getElementById(NAVBAR_ITEM_LIST_ID);
    const navbarChildren = navbarItemList.children;
    return Math.floor((navbarChildren.length - 1) * -navbarChildren[0].clientHeight);
}

const toggleOpenNavButton = () => {
    const navbar = document.getElementById(NAVBAR_ID);
    const navbarItemList = document.getElementById(NAVBAR_ITEM_LIST_ID).children;
    const navButton = document.getElementById(NAVBAR_BUTTON_ID);
    if (navButton != null) {
        if (navButton.classList.contains(ROTATE_NAVBAR_BUTTON_CLASSNAME)) {
            navButton.classList.remove(ROTATE_NAVBAR_BUTTON_CLASSNAME);
            if (navbar != null && navbarItemList != null) navbar.style.top = `${getNewNavbarTop()}px`;
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
    navReady = true;
};

function scrollOffsetCalc(finalScrollTop) {
    const navbar = document.getElementById(NAVBAR_ID);
    const borderWidth = window.getComputedStyle(navbar, null).getPropertyValue('border-bottom-width');
    const mobileView = window.innerWidth <= RESPONSIVE_BREAKPOINT ? true : false;

    if (!navbar.classList.contains('sticky')) {
        if (mobileView) {
            finalScrollTop -= navbar.children[0].children[0].clientHeight;
        } else {
            finalScrollTop -= navbar.clientHeight;
        }
        finalScrollTop -= parseFloat(borderWidth ? borderWidth : 0);
    } else {
        if (mobileView) {
            finalScrollTop += navbar.clientHeight - navbar.children[0].children[0].clientHeight;
        } else {
            const paddingWidth = window.getComputedStyle(navbar.parentElement, null).getPropertyValue('padding-left');

            finalScrollTop -=
                navbar.clientHeight -
                navbar.children[0].children[0].clientHeight -
                parseFloat(paddingWidth ? paddingWidth : 0) * 2;
            finalScrollTop += parseFloat(borderWidth ? borderWidth : 0) + 1;
        }
    }

    return finalScrollTop;
}

function onNavClick(event) {
    if (navReady) {
        updateScrollReady = false;
        const navbar = document.getElementById(NAVBAR_ID);
        const navButton = document.getElementById(NAVBAR_BUTTON_ID);
        console.log('nav item click: ', event.target.id);
        const scrollTo = document.getElementById('scroll-' + event.target.id);
        const mobileView = window.innerWidth <= RESPONSIVE_BREAKPOINT ? true : false;
        let finalScrollTop = scrollOffsetCalc(scrollTo.offsetTop);

        if (scrollTo != null) {
            console.log('Scroll To: ', finalScrollTop);
            document.getElementById(MAIN_WRAPPER_ID).scrollTo({
                top: finalScrollTop,
                left: 0,
                behavior: 'smooth'
            });
            const timeout = () => {
                const scrollToElementTop = document.getElementById(MAIN_WRAPPER_ID).scrollTop;
                if (scrollToElementTop == finalScrollTop) {
                    updateScrollReady = true;
                } else {
                    setTimeout(() => {
                        timeout();
                    }, 10);
                }
            };

            timeout();
        }

        if (navButton.classList.contains(ROTATE_NAVBAR_BUTTON_CLASSNAME) && mobileView) {
            navbar.classList.add('transition-top');
            navButton.classList.remove(ROTATE_NAVBAR_BUTTON_CLASSNAME);
            if (navbar != null) navbar.style.top = `${getNewNavbarTop()}px`;
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
    }
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
            // TODO fix issue with requestAnimationFrame skipping.
            // window.requestAnimationFrame(function () {
            elementCollection[i].style.left = 0;
            elementCollection[i].style.top = 0;
            elementCollection[i].classList.add('transition');
            navReady = false;
            // });
        }
    }, 10);
}

function getInitialPathIndex(path) {
    for (let i = 0; i < navbarRoutes.length; i++) {
        if (navbarRoutes[i].path === path) return i;
    }
}

export function updateScrollPositions() {
    navbarRoutes.forEach((obj) => {
        const element = document.getElementById(`scroll-${obj.path}`);
        obj.scroll = scrollOffsetCalc(element.offsetTop);
    });
}
