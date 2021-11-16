export const SPREAD_MOVE_TIME = 50;
export const SPREAD_TOTAL_TIME = 1000;
export const SPREAD_TOTAL_MOVES = SPREAD_TOTAL_TIME / SPREAD_MOVE_TIME;
export const TILE_STEPS_MAX = 10;
export const TILE_TRANSITION_TIME = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue('--tile-transition-time')
);
export const MAIN_TRANSITION_DELAY = 500;

export const MAIN_WRAPPER_ELEMENT_ID = 'image-slicer-main';
export const MAIN_WRAPPER_ELEMENT_CLASS = 'slicer-main-wrapper';
export const GRID_WRAPPER_ELEMENT_ID = 'image-slicer-grid';
export const GRID_WRAPPER_ELEMENT_CLASS = 'slicer-grid-wrapper';
export const GRID_ELEMENT_ID_PREFIX = 'image-slicer-grid-item-';
export const GRID_ELEMENT_CLASS = 'slicer-grid-item';
export const CSS_LOADER_ID = 'loader-spinner';
export const MAIN_TRANSITION_OVERFLOW = 'slicer-transition-overflow';
