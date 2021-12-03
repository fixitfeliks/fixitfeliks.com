import { TILE_STEPS_PER_MOVE } from './slicer-constants';
export class ImageGrid {
    constructor(rows, cols, tileWidth, tileHeight) {
        this.rows = rows;
        this.cols = cols;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.tiles = [];
        let index = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.tiles.push(new Tile(index, j * tileWidth, i * tileHeight, tileWidth, tileHeight));
                index++;
            }
        }
    }

    getCurrentState() {
        let frame = [];

        for (let i = 0; i < this.tiles.length; i++) {
            frame.push(this.tiles[i].getTile());
        }
        return frame;
    }
}

class Tile {
    dir = Math.floor(Math.random() * 4);
    lastDir = Math.floor(Math.random() * 4);

    constructor(id, x, y, width, height) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    moveUp() {
        this.y -= this.height * TILE_STEPS_PER_MOVE;
    }

    moveDown() {
        this.y += this.height * TILE_STEPS_PER_MOVE;
    }

    moveLeft() {
        this.x -= this.width * TILE_STEPS_PER_MOVE;
    }

    moveRight() {
        this.x += this.width * TILE_STEPS_PER_MOVE;
    }

    walkRandom() {
        this.lastDir = this.dir;
        this.dir = Math.floor(Math.random() * 4);
        let moves = [() => this.moveUp(), () => this.moveDown(), () => this.moveLeft(), () => this.moveRight()];

        while (this.dir + this.lastDir === 1 || this.dir + this.lastDir === 5) {
            this.dir = Math.floor(Math.random() * 4);
        }
        moves[this.dir]();
    }

    getTile() {
        let tile = {};
        tile.id = this.id;
        tile.x = this.x;
        tile.y = this.y;
        tile.width = this.width;
        tile.height = this.height;
        return tile;
    }
}
