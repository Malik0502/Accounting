"use strict";
/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
const formHandler_1 = require("./scripts/Form/formHandler");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min.js"); // Achte darauf, dass dies nur im Renderer-Prozess ist
console.log('👋 This message is being logged by "renderer.js", included via webpack');
document.getElementById("formSubmit").addEventListener("click", () => {
    let formHandler = new formHandler_1.FormHandler();
    formHandler.submitForm();
});
//# sourceMappingURL=renderer.js.map