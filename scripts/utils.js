// utils.js

/**
 * Utility function to log messages with a specific prefix.
 * @param {string} message - The message to log.
 */
function log(message) {
    console.log(`[Extension Boilerplate] ${message}`);
}

/**
 * Utility function to create DOM elements.
 * @param {string} tag - The HTML tag to create.
 * @param {object} attributes - An object of attributes to set.
 * @param {Array} children - An array of child elements or strings.
 * @returns {HTMLElement} The created DOM element.
 */
function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    for (let key in attributes) {
        if (key === 'className') {
            element.className = attributes[key];
        } else {
            element.setAttribute(key, attributes[key]);
        }
    }
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    return element;
}

// Export functions for use in other scripts
export { log, createElement };
