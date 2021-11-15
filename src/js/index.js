import 'Styles/flex-box.css';
import 'Styles/image-slicer.css';
import 'Styles/css-loader.css';
import testImg from 'Assets/test.png';
import bearImg from 'Assets/bear.jpg';
import weasleImf from 'Assets/weasle.jpg';
import rue from 'Assets/rue.jpg';
import { ImageSlicer } from 'Components/image-slicer/image-slicer.js';

import { X_ROWS, Y_COLS, WIDTH, HEIGHT } from 'Scripts/global-config.js';

const test = new ImageSlicer(weasleImf, 40, 40);
document.body.appendChild(test.getHTML());
test.initSpreadElement();
