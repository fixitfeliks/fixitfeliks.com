import { createGridLayout, initCanvasTile, updateGridLayout, showTiles } from './layout.js';
import { ImageGrid } from './image-grid.js';
import {
    MAIN_WRAPPER_ELEMENT_ID,
    MAIN_WRAPPER_ELEMENT_CLASS,
    GRID_WRAPPER_ELEMENT_ID,
    GRID_ELEMENT_ID,
    CSS_LOADER_ID,
    SPREAD_TOTAL_MOVES,
    SPREAD_TOTAL_TIME,
    TILE_MOVE_TIME,
    MAIN_TRANSITION_DELAY,
    MAIN_TRANSITION_OVERFLOW,
    IMAGE_ID,
    GRID_WRAPPER_ELEMENT_CLASS
} from './slicer-constants.js';
import { cssLoader } from './loader-spinner.js';

export class ImageSlicer {
    constructor(id, imageSrc, rows, cols) {
        this.id = id;
        this.imageSrc = imageSrc;
        this.rows = rows;
        this.cols = cols;
        // Image width
        this.imageWidth = undefined;
        this.imageHeight = undefined;
        // Unscaled tile width
        this.tileWidth = undefined;
        this.tileHeight = undefined;
        // Scaled tile width
        this.canvasWidth = undefined;
        this.canvasHeight = undefined;
        this.imageGrid = undefined;
        this.tilesLoadedPromise;
        // Calculated Aspect Ratios
        this.imageAspectRatio = undefined;
        this.tilesAspectRatio = undefined;

        this.moveIndex = undefined;
        this.frames = undefined;

        this.image = document.createElement('img');
        this.imageLoadedPromise = new Promise((resolve) => {
            const context = () => resolve();
            this.loadImage(context);
        });
    }

    loadImage(context) {
        const mainWrapper = document.getElementById(MAIN_WRAPPER_ELEMENT_ID + this.id);
        this.image.src = this.imageSrc;
        this.image.style.display = 'none';
        this.image.id = IMAGE_ID + this.id;
        document.body.appendChild(this.image);
        this.image.onload = () => {
            this.imageWidth = this.image.naturalWidth;
            this.imageHeight = this.image.naturalHeight;
            this.tileWidth = this.imageWidth / this.cols;
            this.tileHeight = this.imageHeight / this.rows;
            this.imageAspectRatio = this.imageHeight / this.imageWidth;
            this.tilesAspectRatio = this.tileHeight / this.tileWidth;
            this.image.remove();
            context();
        };
    }

    getHTML() {
        // TODO Remove null error when navigating and coming back form a page
        // with another image slicer (possible duplicate event listener without handle)
        let resizeDebounce = undefined;
        window.addEventListener('resize', () => {
            clearTimeout(resizeDebounce);
            resizeDebounce = setTimeout(() => {
                console.log(`resize: (${window.innerWidth},${window.innerHeight})`);
                const mainWrappers = document.getElementsByClassName(MAIN_WRAPPER_ELEMENT_CLASS);
                for (let i = 0; i < mainWrappers.length; i++) {
                    if (mainWrappers[i].children[0].children.length > 1) {
                        this.initImageTiles();
                    }
                }
            }, 500);
        });

        const fragment = this.createWrapper();
        fragment.appendChild(createGridLayout(this.rows * this.cols, this.id));
        return fragment;
    }

    createWrapper() {
        const contentWrapper = document.createElement('div');
        contentWrapper.id = MAIN_WRAPPER_ELEMENT_ID + this.id;
        contentWrapper.className = MAIN_WRAPPER_ELEMENT_CLASS;
        // contentWrapper.appendChild(cssLoader);
        return contentWrapper;
    }

    initImageTiles() {
        const mainWrapper = document.getElementById(MAIN_WRAPPER_ELEMENT_ID + this.id);
        const gridWrapper = document.getElementById(GRID_WRAPPER_ELEMENT_ID + this.id);
        const clientWidth = mainWrapper.clientWidth;
        const clientHeight = mainWrapper.clientHeight;

        let initWidth = undefined;
        let initHeight = undefined;
        let initTileWidth = undefined;
        let initTileHeight = undefined;

        if (this.imageWidth > clientWidth) {
            //|| this.imageHeight > clientHeight) {
            // const ratio = Math.min(clientWidth / this.imageWidth, clientHeight / this.imageHeight);
            const ratio = clientWidth / this.imageWidth;
            const tempInitWidth = this.imageWidth * ratio;
            const tempInitHeight = this.imageHeight * ratio;
            initTileWidth = Math.floor(tempInitWidth / this.cols);
            initTileHeight = Math.floor(tempInitHeight / this.rows);
            initWidth = this.cols * initTileWidth;
            initHeight = this.rows * initTileHeight;
        } else {
            initWidth = this.imageWidth;
            initHeight = this.imageHeight;
            initTileWidth = initWidth / this.cols;
            initTileHeight = initHeight / this.rows;
        }

        gridWrapper.style.width = initWidth + 'px';
        gridWrapper.style.height = initHeight + 'px';

        this.imageGrid = new ImageGrid(this.rows, this.cols, initTileWidth, initTileHeight);
        const originalScaleGrid = new ImageGrid(this.rows, this.cols, this.tileWidth, this.tileHeight);

        console.log('init Tiles ', this.imageGrid.tiles);

        for (let i = 0; i < this.imageGrid.tiles.length; i++) {
            let imageType = this.imageSrc.substring(this.imageSrc.lastIndexOf('.') + 1, this.imageSrc.length);
            imageType = imageType === 'jpg' ? 'jpeg' : imageType;
            let canvas = document.getElementById(GRID_ELEMENT_ID + this.id + this.imageGrid.tiles[i].id);
            canvas.width = initTileWidth;
            canvas.height = initTileHeight;
            let context = canvas.getContext('2d');
            const scaleFactor = clientWidth / this.imageWidth;
            context.drawImage(
                this.image,
                originalScaleGrid.tiles[i].x,
                originalScaleGrid.tiles[i].y,
                this.tileWidth,
                this.tileHeight,
                0,
                0,
                initTileWidth,
                initTileHeight
            );
            initCanvasTile(canvas, this.imageGrid.tiles[i]);
        }
    }

    initFoldInElement(wrapper = document.body) {
        return new Promise((resolve) => {
            this.imageLoadedPromise.then(() => {
                console.log('fold-in image loaded');
                this.tilesLoadedPromise = new Promise((resolve) => {
                    this.initImageTiles();
                    resolve();
                });
                this.tilesLoadedPromise.then(() => {
                    console.log('fold-in tiles loaded');
                    this.frames = [];
                    this.frames.push(this.imageGrid.getCurrentState());
                    for (let i = 0; i < this.imageGrid.tiles.length; i++) {
                        this.imageGrid.tiles[i].foldIn();
                    }
                    this.frames.push(this.imageGrid.getCurrentState());
                    const mainWrapper = document.getElementById(MAIN_WRAPPER_ELEMENT_ID + this.id);
                    const rect = mainWrapper.getBoundingClientRect();
                    if (
                        rect.y < -mainWrapper.clientHeight / 2 ||
                        rect.y > window.innerHeight - mainWrapper.clientHeight / 2
                    ) {
                        window.requestAnimationFrame(() => {
                            updateGridLayout(this.frames[1], this.id);
                            showTiles(this.imageGrid.tiles, this.id);
                        });
                    } else {
                        window.requestAnimationFrame(() => {
                            updateGridLayout(this.frames[1], this.id);
                            showTiles(this.imageGrid.tiles, this.id);
                            window.requestAnimationFrame(() => {
                                updateGridLayout(this.frames[0], this.id);
                            });
                        });
                    }

                    wrapper.addEventListener('scroll', () => {
                        this.setFoldScrollStatus();
                    });
                });
            });
        });
    }

    setFoldScrollStatus() {
        const mainWrapper = document.getElementById(MAIN_WRAPPER_ELEMENT_ID + this.id);
        const rect = mainWrapper.getBoundingClientRect();
        console.log(rect);
        if (rect.y < -mainWrapper.clientHeight / 2 || rect.y > window.innerHeight - mainWrapper.clientHeight / 2) {
            this.foldIn();
        } else {
            this.foldOut();
        }
    }

    foldIn() {
        window.requestAnimationFrame(() => {
            updateGridLayout(this.frames[1], this.id);
        });
    }

    foldOut() {
        window.requestAnimationFrame(() => {
            updateGridLayout(this.frames[0], this.id);
        });
    }
    initSpreadElement() {
        return new Promise((resolve) => {
            this.imageLoadedPromise.then(() => {
                console.log('image loaded');
                this.tilesLoadedPromise = new Promise((resolve) => {
                    this.initImageTiles();
                    resolve();
                });
                this.tilesLoadedPromise.then(() => {
                    console.log('tiles loaded');
                    const mainWrapper = document.getElementById(MAIN_WRAPPER_ELEMENT_ID + this.id);
                    // mainWrapper.classList.add(MAIN_TRANSITION_OVERFLOW);
                    const moveFrames = this.getFramesForNumMoves(SPREAD_TOTAL_MOVES);
                    let index = moveFrames.length - 1;

                    updateGridLayout(moveFrames[index], this.id);
                    showTiles(this.imageGrid.tiles, this.id);
                    index -= 1;
                    setTimeout(() => {
                        updateGridLayout(moveFrames[index], this.id);
                    }, 10);

                    const interval = setInterval(() => {
                        index--;
                        if (index >= 0) {
                            updateGridLayout(moveFrames[index], this.id);
                        }
                        if (index <= 0) {
                            clearInterval(interval);
                        }
                    }, TILE_MOVE_TIME);

                    setTimeout(() => {
                        const image = document.getElementById(IMAGE_ID + this.id);
                        const slicerWrapper = document.getElementById(MAIN_WRAPPER_ELEMENT_ID + this.id);
                        const imageGrid = document.getElementById(GRID_WRAPPER_ELEMENT_ID + this.id);

                        if (image) {
                            image.remove();
                            image.style.display = 'block';
                        }
                        if (imageGrid) {
                            imageGrid.remove();
                            slicerWrapper.appendChild(image);
                        }
                        mainWrapper.classList.remove(MAIN_TRANSITION_OVERFLOW);

                        resolve();
                    }, SPREAD_TOTAL_TIME + MAIN_TRANSITION_DELAY);
                });
            });
        });
    }

    getFramesForNumMoves(numMoves) {
        let frames = [];
        frames.push(this.imageGrid.getCurrentState());
        for (let i = 0; i < numMoves; i++) {
            for (let j = 0; j < this.imageGrid.tiles.length; j++) {
                this.imageGrid.tiles[j].walkRandom();
            }
            frames.push(this.imageGrid.getCurrentState());
        }
        this.moveIndex = frames.length - 1;
        return frames;
    }

    // sliceImage() {
    //     let index = 0;
    //     for (let i = 0; i < this.rows; i++) {
    //         for (let j = 0; j < this.cols; j++) {
    //             const item = document.getElementById(GRID_ELEMENT_ID + index);
    //             item.style.backgroundImage = `url('${this.imageSrc}')`;
    //             item.style.backgroundPositionX = -j * this.tileWidth + 'px';
    //             item.style.backgroundPositionY = -i * this.tileHeight + 'px';
    //             index++;
    //         }
    //     }
    // }
}
