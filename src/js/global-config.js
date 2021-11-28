// In Pixels
export const X_ROWS = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--x-rows'));
export const Y_COLS = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--y-cols'));
export const WIDTH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-width'));
export const HEIGHT = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-height'));

export const FLEX_TRANSITION_TIME = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--flex-transition-time')
);

export const MAIN_WRAPPER_ID = 'main-wrapper-id';
export const MAIN_GRID_ID = 'main-grid-id';
export const NAVBAR_ID = 'navbar-id';
export const NAVBAR_BUTTON_CONTAINER_CLASSNAME = 'open-nav-button-container';
export const NAVBAR_BUTTON_ID = 'open-navbar-id';
export const NAVBAR_BUTTON_CLASSNAME = 'open-nav-button';
export const HIDE_NAVBAR_BUTTON_CLASSNAME = 'open-nav-hide';
export const ROTATE_NAVBAR_BUTTON_CLASSNAME = 'open-nav-rotate';
export const NAVBAR_ITEM_LIST_ID = 'navbar-list-id';
export const NAVBAR_ITEM_CLASSNAME = 'navbar-item';
