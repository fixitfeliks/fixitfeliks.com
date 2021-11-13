export function sliceImage(src, rows, cols, tileWidth, tileHeight) {
    let index = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const testDiv = document.getElementById('item-' + index);
            testDiv.style.backgroundImage = `url('./assets/test.png')`;
            testDiv.style.backgroundPositionX = -i * tileWidth + 'px';
            testDiv.style.backgroundPositionY = -j * tileHeight + 'px';
            index++;
        }
    }
}

function optimized() {
    let imageSlices = [];
    var image = new Image();
    image.src = src;
    let canvas = document.createElement('canvas');
    canvas.id = index;
    canvas.width = tileWidth;
    canvas.height = tileHeight;
    let context = canvas.getContext('2d');
    context.drawImage(image, i * tileWidth, j * tileHeight, tileWidth, tileHeight, 0, 0, canvas.width, canvas.height);
    imageSlices.push(canvas.toDataURL());
}
