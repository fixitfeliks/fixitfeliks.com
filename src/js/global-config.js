// In Pixels
export const X_ROWS = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--x-rows'));
export const Y_COLS = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--y-cols'));
export const WIDTH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-width'));
export const HEIGHT = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--grid-height'));

export const FLEX_TRANSITION_TIME = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--flex-transition-time')
);

export const NAVBAR_ITEM_CLASSNAME = 'navbar-item';
export const NAVBAR_ID = 'navbar-id';
