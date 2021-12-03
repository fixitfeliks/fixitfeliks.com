export const TILE_MOVE_TIME = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--tile-move-time'));
export const SPREAD_TOTAL_MOVES = 2;
export const SPREAD_TOTAL_TIME = SPREAD_TOTAL_MOVES * TILE_MOVE_TIME;
export const TILE_STEPS_PER_MOVE = 10;
export const MAIN_TRANSITION_DELAY = 200;

export const IMAGE_ID = 'image-slicer-image-id-';
export const MAIN_WRAPPER_ELEMENT_ID = 'image-slicer-main-';
export const MAIN_WRAPPER_ELEMENT_CLASS = 'slicer-main-wrapper';
export const GRID_WRAPPER_ELEMENT_ID = 'image-slicer-grid-';
export const GRID_WRAPPER_ELEMENT_CLASS = 'slicer-grid-wrapper';
export const GRID_ELEMENT_ID = 'image-slicer-grid-item-';
export const GRID_ELEMENT_CLASS = 'slicer-grid-item';
export const CSS_LOADER_ID = 'loader-spinner-';
export const MAIN_TRANSITION_OVERFLOW = 'slicer-transition-overflow';
