import { NAVBAR_ITEM_CLASSNAME, NAVBAR_ID } from 'Scripts/global-config.js';
window.addEventListener('hashchange', onRouteChanged);

function onRouteChanged() {
    const hash = window.location.hash.substring(1);
}
