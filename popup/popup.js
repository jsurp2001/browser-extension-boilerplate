// popup/popup.js

import { log, createElement } from '../scripts/utils.js';

document.getElementById('testButton').addEventListener('click', () => {
    log('Test button was clicked!');
    alert('Button clicked!');
});
