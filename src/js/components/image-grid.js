export class ImageGrid {
    tiles = [];

    constructor(rows, cols, tileWidth, tileHeight) {
        this.rows = rows;
        this.cols = cols;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        let index = 0;
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.tiles.push(new Tile(index, i * tileWidth, j * tileHeight, tileWidth, tileHeight));
                index++;
            }
        }
    }

    getFrame() {
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
    dirStepsMax = 10;
    dirSteps = 0;
    // isWalking = false;

    constructor(id, x, y, width, height) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    moveUp() {
        this.y -= this.height;
    }

    moveDown() {
        this.y += this.height;
    }

    moveLeft() {
        this.x -= this.width;
    }

    moveRight() {
        this.x += this.width;
    }

    walk() {
        let moves = [() => this.moveUp(), () => this.moveDown(), () => this.moveLeft(), () => this.moveRight()];
        if (this.dirSteps > this.dirStepsMax) {
            this.dirSteps = 0;
            this.lastDir = this.dir;
            this.dir = Math.floor(Math.random() * 4);
            while (this.dir + this.lastDir === 1 || this.dir + this.lastDir === 5) {
                this.dir = Math.floor(Math.random() * 4);
            }
        }
        moves[this.dir]();
        this.dirSteps++;
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
