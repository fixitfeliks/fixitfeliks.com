import { createGridLayout, initCanvasTile, updateGridLayout, showTiles } from './layout.js';
import { shuffleArray } from './shufflers';
import { ImageGrid } from './image-grid.js';
import {
    MAIN_WRAPPER_ELEMENT_ID,
    MAIN_WRAPPER_ELEMENT_CLASS,
    GRID_WRAPPER_ELEMENT_ID,
    GRID_ELEMENT_ID_PREFIX,
    CSS_LOADER_ID,
    SPREAD_TOTAL_MOVES,
    SPREAD_MOVE_TIME,
    SPREAD_TOTAL_TIME,
    TILE_TRANSITION_TIME,
    MAIN_TRANSITION_DELAY,
    MAIN_TRANSITION_OVERFLOW
} from './slicer-constants.js';
import { cssLoader } from './loader-spinner.js';

export class ImageSlicer {
    constructor(src, rows, cols) {
        this.src = src;
        this.rows = rows;
        this.cols = cols;
        this.width = 0;
        this.height = 0;
        this.tileWidth = 0;
        this.tileHeight = 0;
        this.grid = new ImageGrid(this.rows, this.cols, this.tileWidth, this.tileHeight);
        this.image = document.createElement('img');
        this.imageLoadedPromise = new Promise((resolve) => {
            const context = () => resolve();
            this.loadImage(context);
        });
        this.tilesLoadedPromise;
    }

    loadImage(context) {
        this.image.src = this.src;
        this.image.style.display = 'none';
        document.body.appendChild(this.image);
        this.image.onload = () => {
            this.width = this.image.naturalWidth;
            this.height = this.image.naturalHeight;
            this.tileWidth = this.width / this.cols;
            this.tileHeight = this.height / this.rows;
            this.grid = new ImageGrid(this.rows, this.cols, this.tileWidth, this.tileHeight);
            context();
        };
    }

    getHTML() {
        const fragment = this.createWrapper();
        fragment.appendChild(createGridLayout(this.rows * this.cols));
        return fragment;
    }

    createWrapper() {
        const contentWrapper = document.createElement('div');
        contentWrapper.id = MAIN_WRAPPER_ELEMENT_ID;
        contentWrapper.className = MAIN_WRAPPER_ELEMENT_CLASS;
        contentWrapper.appendChild(cssLoader);
        return contentWrapper;
    }

    initImageTiles() {
        console.log('init Tiles ', this.grid.tiles);
        // const cssLoader = document.getElementById(CSS_LOADER_ID);
        const mainWrapper = document.getElementById(MAIN_WRAPPER_ELEMENT_ID);
        const gridWrapper = document.getElementById(GRID_WRAPPER_ELEMENT_ID);
        mainWrapper.style.width = this.width + 'px';
        mainWrapper.style.height = this.height + 'px';
        gridWrapper.style.width = this.width + 'px';
        gridWrapper.style.height = this.height + 'px';

        for (let i = 0; i < this.grid.tiles.length; i++) {
            const tSrc = this.image.src;
            let imageType = tSrc.substring(tSrc.lastIndexOf('.') + 1, tSrc.length);
            imageType = imageType === 'jpg' ? 'jpeg' : imageType;
            let canvas = document.getElementById(GRID_ELEMENT_ID_PREFIX + this.grid.tiles[i].id);
            canvas.id = GRID_ELEMENT_ID_PREFIX + this.grid.tiles[i].id;
            canvas.width = this.tileWidth;
            canvas.height = this.tileHeight;
            let context = canvas.getContext('2d');
            context.drawImage(
                this.image,
                this.grid.tiles[i].x,
                this.grid.tiles[i].y,
                this.tileWidth,
                this.tileHeight,
                0,
                0,
                canvas.width,
                canvas.height
            );
            initCanvasTile(canvas, this.grid.tiles[i]);
        }
    }

    async initSpreadElement() {
        return new Promise((resolve) => {
            this.imageLoadedPromise.then(() => {
                console.log('image loaded');
                this.tilesLoadedPromise = new Promise((resolve) => {
                    this.initImageTiles();
                    resolve();
                });
                this.tilesLoadedPromise.then(() => {
                    console.log('tiles loaded');
                    const mainWrapper = document.getElementById(MAIN_WRAPPER_ELEMENT_ID);
                    // mainWrapper.classList.add(MAIN_TRANSITION_OVERFLOW);
                    const moveFrames = this.getFramesForNumMoves(SPREAD_TOTAL_MOVES);
                    let index = moveFrames.length - 1;

                    updateGridLayout(shuffleArray(moveFrames[index]));
                    showTiles(this.grid.tiles);

                    const interval = setInterval(() => {
                        updateGridLayout(moveFrames[index]);
                        if (index == 0) {
                            clearInterval(interval);
                        }
                        index--;
                    }, SPREAD_MOVE_TIME);

                    const timeout = setTimeout(() => {
                        mainWrapper.classList.remove(MAIN_TRANSITION_OVERFLOW);
                        resolve();
                    }, SPREAD_TOTAL_TIME + TILE_TRANSITION_TIME + MAIN_TRANSITION_DELAY);
                });
            });
        });
    }

    getFramesForNumMoves(numMoves) {
        let frames = [];
        for (let i = 0; i < numMoves; i++) {
            frames.push(this.grid.getCurrentState());
            for (let j = 0; j < this.grid.tiles.length; j++) {
                this.grid.tiles[j].walk();
            }
        }
        return frames;
    }

    // sliceImage() {
    //     let index = 0;
    //     for (let i = 0; i < this.rows; i++) {
    //         for (let j = 0; j < this.cols; j++) {
    //             const item = document.getElementById(GRID_ELEMENT_ID_PREFIX + index);
    //             item.style.backgroundImage = `url('${this.src}')`;
    //             item.style.backgroundPositionX = -j * this.tileWidth + 'px';
    //             item.style.backgroundPositionY = -i * this.tileHeight + 'px';
    //             index++;
    //         }
    //     }
    // }
}
