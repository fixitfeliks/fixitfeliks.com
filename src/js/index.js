import 'Styles/flex-box.css';
import 'Styles/image-slicer.css';
import testImg from 'Assets/test.png';
import bearImg from 'Assets/bear.jpg';
import weasleImf from 'Assets/weasle.jpg';
import { ImageSlicer } from 'Components/image-slicer/image-slicer';

import { X_ROWS, Y_COLS, WIDTH, HEIGHT } from 'Scripts/global-config.js';

const test = new ImageSlicer('./assets/weasle.jpg', X_ROWS, Y_COLS, WIDTH, HEIGHT);
document.body.appendChild(test.getSpreadElement());
