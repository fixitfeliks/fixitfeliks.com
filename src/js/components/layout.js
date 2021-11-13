export function createGridLayout(tiles) {
    console.log('create grid ', tiles);
    const fragment = new DocumentFragment();
    if (tiles != null) {
        const flexContainer = document.createElement('div');
        flexContainer.setAttribute('class', 'grid-wrapper');

        for (let i = 0; i < tiles.length; i++) {
            const itemId = 'item-' + tiles[i].id.toString();
            const gridItem = document.createElement('div');
            gridItem.id = itemId;
            gridItem.className = 'item';
            gridItem.style.top = tiles[i].y + 'px';
            gridItem.style.left = tiles[i].x + 'px';
            gridItem.style.width = tiles[i].width + 'px';
            gridItem.style.height = tiles[i].height + 'px';
            // gridItem.innerHTML = /*html*/ `<a>${itemId}</a>`;
            flexContainer.appendChild(gridItem);
        }
        fragment.appendChild(flexContainer);
        return fragment;
    }
    const error = document.createElement('div');
    error.innerHTML = '<b> layout null </b>';
    fragment.appendChild(error);
    return fragment;
}

export function updateGridLayout(tiles) {
    console.log('update grid ', tiles);
    for (let i = 0; i < tiles.length; i++) {
        const div = document.getElementById('item-' + tiles[i].id);
        div.style.top = tiles[i].y + 'px';
        div.style.left = tiles[i].x + 'px';
    }
}

function randomColorStyle(element) {
    element.style.backgroundColor = `rgb(
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)},
                    ${Math.floor(Math.random() * 256)}
                )`;
}
