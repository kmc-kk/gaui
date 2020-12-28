/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fileIO.ts":
/*!***********************!*\
  !*** ./src/fileIO.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.saveFile = exports.readFile = exports.FILE_FILTERS = exports.FILE_EVENTS = void 0;\r\nconst fs_1 = __importDefault(__webpack_require__(/*! fs */ \"fs\"));\r\nvar FILE_EVENTS;\r\n(function (FILE_EVENTS) {\r\n    FILE_EVENTS[\"OPEN_DIALOG\"] = \"open_dialog\";\r\n    FILE_EVENTS[\"SAVE_DIALOG\"] = \"save_dialog\";\r\n    FILE_EVENTS[\"OPEN_FILE\"] = \"open_file\";\r\n    FILE_EVENTS[\"SAVE_FILE\"] = \"save_file\";\r\n})(FILE_EVENTS = exports.FILE_EVENTS || (exports.FILE_EVENTS = {}));\r\nexports.FILE_FILTERS = [\r\n    { name: 'Text', extensions: ['txt'] },\r\n    { name: 'All Files', extensions: ['*'] }\r\n];\r\nconst readFile = (fileName) => {\r\n    let fileText = '';\r\n    try {\r\n        fileText = fs_1.default.readFileSync(fileName, 'UTF-8');\r\n    }\r\n    catch (e) {\r\n        console.log(e);\r\n    }\r\n    return fileText;\r\n};\r\nexports.readFile = readFile;\r\nconst saveFile = (fileName, fileText) => {\r\n    try {\r\n        fs_1.default.writeFileSync(fileName, fileText, 'UTF-8');\r\n    }\r\n    catch (e) {\r\n        console.log(e);\r\n    }\r\n};\r\nexports.saveFile = saveFile;\r\n\n\n//# sourceURL=webpack:///./src/fileIO.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst electron_1 = __webpack_require__(/*! electron */ \"electron\");\r\nconst fileIO_1 = __webpack_require__(/*! ./fileIO */ \"./src/fileIO.ts\");\r\nconst isEnv = \"development\" === 'development';\r\nconst mainURL = `file://${__dirname}/index.html`;\r\nlet mainWindow = null;\r\nconst createWindow = () => {\r\n    mainWindow = new electron_1.BrowserWindow({\r\n        width: 1024,\r\n        height: 768,\r\n        webPreferences: {\r\n            nodeIntegration: true\r\n        }\r\n    });\r\n    mainWindow.loadURL(mainURL);\r\n    mainWindow.on('closed', () => {\r\n        mainWindow = null;\r\n    });\r\n};\r\n// アプリの起動と終了\r\nelectron_1.app.on('ready', () => {\r\n    createWindow();\r\n    if (isEnv && mainWindow) {\r\n        mainWindow.webContents.openDevTools();\r\n        //    BrowserWindow.addDevToolsExtension(\r\n        //      path.join(\r\n        //        os.homedir(),\r\n        //        '/AppData/Local/Google/Chrome/User Data/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.2.0_0'\r\n        //      )\r\n        //    );\r\n    }\r\n});\r\nelectron_1.app.on('window-all-closed', () => {\r\n    electron_1.app.quit();\r\n});\r\nelectron_1.app.on('activate', () => {\r\n    if (mainWindow === null) {\r\n        createWindow();\r\n    }\r\n});\r\n// ファイルを開く\r\nelectron_1.ipcMain.on(fileIO_1.FILE_EVENTS.OPEN_DIALOG, () => {\r\n    if (mainWindow === null)\r\n        return;\r\n    const fileNames = electron_1.dialog.showOpenDialogSync(mainWindow, {\r\n        properties: ['openFile'],\r\n        filters: fileIO_1.FILE_FILTERS\r\n    });\r\n    if (!fileNames || !fileNames.length)\r\n        return;\r\n    const fileText = fileIO_1.readFile(fileNames[0]);\r\n    mainWindow.webContents.send(fileIO_1.FILE_EVENTS.OPEN_FILE, {\r\n        fileName: fileNames[0],\r\n        fileText\r\n    });\r\n});\r\n// 名前をつけて保存する\r\nelectron_1.ipcMain.on(fileIO_1.FILE_EVENTS.SAVE_DIALOG, (_, fileInfo) => {\r\n    if (mainWindow === null)\r\n        return;\r\n    const newFileName = electron_1.dialog.showSaveDialogSync(mainWindow, {\r\n        defaultPath: fileInfo.fileName,\r\n        filters: fileIO_1.FILE_FILTERS\r\n    });\r\n    if (!newFileName)\r\n        return;\r\n    fileIO_1.saveFile(newFileName, fileInfo.fileText);\r\n    mainWindow.webContents.send(fileIO_1.FILE_EVENTS.SAVE_FILE, newFileName);\r\n});\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = require(\"electron\");;\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

eval("module.exports = require(\"fs\");;\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;