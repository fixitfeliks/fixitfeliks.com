export function getTitleCard(text) {
    const fragment = document.createDocumentFragment();
    const flexCard = document.createElement('div');
    flexCard.classList.add('flex-container');
    fragment.appendChild(flexCard);

    const flexTitle = document.createElement('div');
    flexTitle.classList.add('flex-body-header');
    flexTitle.innerHTML = /*html*/ `<h2>${text}</h2>`;

    flexCard.appendChild(flexTitle);
    fragment.appendChild(flexCard);
    return fragment;
}

export function getHeaderImageBodyFlexCard(heading, content, imageSlicer) {
    const fragment = document.createDocumentFragment();
    const flexCard = document.createElement('div');
    flexCard.classList.add('flex-container');
    fragment.appendChild(flexCard);

    const flexHeader = document.createElement('div');
    const flexImageWrapper = document.createElement('div');
    const flexContent = document.createElement('div');
    flexHeader.classList.add('flex-body-header');
    flexHeader.innerHTML = heading;
    flexImageWrapper.classList.add('flex-body-image');
    flexImageWrapper.appendChild(imageSlicer);
    flexContent.classList.add('flex-body-content');
    flexContent.innerHTML = content;
    flexCard.appendChild(flexHeader);
    flexCard.appendChild(flexContent);
    flexCard.appendChild(flexImageWrapper);

    return fragment;
}

export function getDoubleFlexCard(titleHeading, titleContent, bodyHeading, bodyContent) {
    const fragment = document.createDocumentFragment();
    const flexCard = document.createElement('div');
    flexCard.classList.add('flex-container');
    fragment.appendChild(flexCard);

    const flexHeader = document.createElement('div');
    const flexContent = document.createElement('div');
    flexHeader.classList.add('flex-title-header');
    flexHeader.innerHTML = titleHeading;
    flexContent.classList.add('flex-title-content');
    flexContent.innerHTML = titleContent;
    flexCard.appendChild(flexHeader);
    flexCard.appendChild(flexContent);

    fragment.appendChild(getSingleFlexCard(bodyHeading, bodyContent));
    return fragment;
}

export function getSingleFlexCard(heading, content) {
    const fragment = document.createDocumentFragment();
    const flexCard = document.createElement('div');
    flexCard.classList.add('flex-container');
    fragment.appendChild(flexCard);

    const flexHeader = document.createElement('div');
    const flexContent = document.createElement('div');
    flexHeader.classList.add('flex-body-header');
    flexHeader.innerHTML = heading;
    flexContent.classList.add('flex-body-content');
    flexContent.innerHTML = content;
    flexCard.appendChild(flexHeader);
    flexCard.appendChild(flexContent);

    if (heading === null) {
        flexHeader.style.margin = 0;
    }

    return fragment;
}

export function getHeaderFlexCard(heading, content) {
    const fragment = document.createDocumentFragment();
    const flexCard = document.createElement('div');
    flexCard.classList.add('flex-container');
    fragment.appendChild(flexCard);

    const flexHeader = document.createElement('div');
    const flexContent = document.createElement('div');
    flexHeader.classList.add('flex-title-header');
    flexHeader.innerHTML = heading;
    flexContent.classList.add('flex-title-content');
    flexContent.innerHTML = content;
    flexCard.appendChild(flexHeader);
    flexCard.appendChild(flexContent);

    return fragment;
}
