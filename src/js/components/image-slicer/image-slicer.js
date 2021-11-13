import { createGridLayout, updateGridLayout } from './layout.js';
import { shuffleArray } from './shufflers';
import { ImageGrid } from './image-grid.js';
import { SPREAD_MOVE_TIME, SPREAD_TOTAL_MOVES } from './slicer-constants.js';

export class ImageSlicer {
    constructor(src, rows, cols, width, height) {
        this.src = src;
        this.rows = rows;
        this.cols = cols;
        this.width = width;
        this.height = height;
        this.tileWidth = width / cols;
        this.tileHeight = height / rows;
        this.grid = new ImageGrid(rows, cols, this.tileWidth, this.tileHeight);
    }

    getSpreadElement() {
        const moveFrames = this.getFramesForNumMoves(SPREAD_TOTAL_MOVES);
        let index = moveFrames.length - 1;

        let fragment = this.createElements(moveFrames[moveFrames.length - 1]);

        const timer = setInterval(() => {
            updateGridLayout(moveFrames[index]);
            if (index == 0) clearInterval(timer);
            index--;
        }, SPREAD_MOVE_TIME);

        this.sliceImage(fragment);
        return fragment;
    }

    sliceImage(fragment) {
        let index = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const item = fragment.getElementById('item-' + index);
                item.style.backgroundImage = `url('${this.src}')`;
                item.style.backgroundPositionX = -j * this.tileWidth + 'px';
                item.style.backgroundPositionY = -i * this.tileHeight + 'px';
                index++;
            }
        }
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

    createElements(frame) {
        const fragment = document.createDocumentFragment();
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'content-wrapper';
        contentWrapper.appendChild(createGridLayout(shuffleArray(frame)));
        fragment.appendChild(contentWrapper);
        return fragment;
    }

    //TODO see if making small canvas is better than shifted background
    optimized() {
        let imageSlices = [];
        var image = new Image();
        image.src = src;
        let canvas = document.createElement('canvas');
        canvas.id = index;
        canvas.width = tileWidth;
        canvas.height = tileHeight;
        let context = canvas.getContext('2d');
        context.drawImage(
            image,
            i * tileWidth,
            j * tileHeight,
            tileWidth,
            tileHeight,
            0,
            0,
            canvas.width,
            canvas.height
        );
        imageSlices.push(canvas.toDataURL());
    }
}
