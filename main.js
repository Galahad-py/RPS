/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\"; // Clear existing content\r\n\r\n    const contactDiv = document.createElement(\"div\");\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Contact Us\";\r\n\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent = \"📍 Address: 123 Royal Street, Paris\\n📞 Phone: +33 123 456 789\";\r\n\r\n    contactDiv.appendChild(heading);\r\n    contactDiv.appendChild(paragraph);\r\n\r\n    content.appendChild(contactDiv);\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFjdC5qcz9kNTY1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjsgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudFxyXG5cclxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XHJcblxyXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIvCfk40gQWRkcmVzczogMTIzIFJveWFsIFN0cmVldCwgUGFyaXNcXG7wn5OeIFBob25lOiArMzMgMTIzIDQ1NiA3ODlcIjtcclxuXHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdERpdik7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHome)\n/* harmony export */ });\nfunction loadHome() {\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\"; // Clear existing content\r\n\r\n    const homeDiv = document.createElement(\"div\");\r\n\r\n    const img = document.createElement(\"img\");\r\n    img.src = \"path-to-your-image.jpg\"; // Replace with an actual image path\r\n    img.alt = \"Homepage image\";\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Le Jardin Royal\";\r\n\r\n    const paragraph = document.createElement(\"p\");\r\n    paragraph.textContent =\r\n        \"Welcome to Le Jardin Royal, a sanctuary of refined dining where the grace of a \" +\r\n        \"royal garden meets the artistry of haute cuisine. Step into our world, where \" +\r\n        \"each dish is a masterpiece, crafted with the freshest ingredients, \" +\r\n        \"cueillis avec soin and presented with regal flair. Here, in this ambiance elegante, \" +\r\n        \"you'll experience a true delice culinaire. Bon appetit.\";\r\n\r\n    homeDiv.appendChild(img);\r\n    homeDiv.appendChild(heading);\r\n    homeDiv.appendChild(paragraph);\r\n    \r\n    content.appendChild(homeDiv);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ob21lLmpzPzdiNDEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiOyAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XHJcblxyXG4gICAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5zcmMgPSBcInBhdGgtdG8teW91ci1pbWFnZS5qcGdcIjsgLy8gUmVwbGFjZSB3aXRoIGFuIGFjdHVhbCBpbWFnZSBwYXRoXHJcbiAgICBpbWcuYWx0ID0gXCJIb21lcGFnZSBpbWFnZVwiO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJMZSBKYXJkaW4gUm95YWxcIjtcclxuXHJcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgXCJXZWxjb21lIHRvIExlIEphcmRpbiBSb3lhbCwgYSBzYW5jdHVhcnkgb2YgcmVmaW5lZCBkaW5pbmcgd2hlcmUgdGhlIGdyYWNlIG9mIGEgXCIgK1xyXG4gICAgICAgIFwicm95YWwgZ2FyZGVuIG1lZXRzIHRoZSBhcnRpc3RyeSBvZiBoYXV0ZSBjdWlzaW5lLiBTdGVwIGludG8gb3VyIHdvcmxkLCB3aGVyZSBcIiArXHJcbiAgICAgICAgXCJlYWNoIGRpc2ggaXMgYSBtYXN0ZXJwaWVjZSwgY3JhZnRlZCB3aXRoIHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cywgXCIgK1xyXG4gICAgICAgIFwiY3VlaWxsaXMgYXZlYyBzb2luIGFuZCBwcmVzZW50ZWQgd2l0aCByZWdhbCBmbGFpci4gSGVyZSwgaW4gdGhpcyBhbWJpYW5jZSBlbGVnYW50ZSwgXCIgK1xyXG4gICAgICAgIFwieW91J2xsIGV4cGVyaWVuY2UgYSB0cnVlIGRlbGljZSBjdWxpbmFpcmUuIEJvbiBhcHBldGl0LlwiO1xyXG5cclxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBob21lRGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcbiAgICBcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZURpdik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction addEventListeners() {\r\n    document.getElementById(\"home-tab\").addEventListener(\"click\", _home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n    document.getElementById(\"menu-tab\").addEventListener(\"click\", _menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n    document.getElementById(\"contact-tab\").addEventListener(\"click\", _contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n}\r\n\r\n// Load home page by default\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    addEventListeners();\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFpQztBQUNBO0FBQ007QUFDdkM7QUFDQTtBQUNBLGtFQUFrRSxnREFBUTtBQUMxRSxrRUFBa0UsZ0RBQVE7QUFDMUUscUVBQXFFLG1EQUFXO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBUTtBQUNaO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkSG9tZSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS10YWJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRIb21lKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS10YWJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRNZW51KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdC10YWJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRDb250YWN0KTtcclxufVxyXG5cclxuLy8gTG9hZCBob21lIHBhZ2UgYnkgZGVmYXVsdFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBsb2FkSG9tZSgpO1xyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\r\n    const content = document.getElementById(\"content\");\r\n    content.innerHTML = \"\"; // Clear existing content\r\n\r\n    const menuDiv = document.createElement(\"div\");\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Menu\";\r\n\r\n    const menuList = document.createElement(\"ul\");\r\n\r\n    const items = [\"Dish 1\", \"Dish 2\", \"Dish 3\"];\r\n    items.forEach(item => {\r\n        const li = document.createElement(\"li\");\r\n        li.textContent = item;\r\n        menuList.appendChild(li);\r\n    });\r\n\r\n    menuDiv.appendChild(heading);\r\n    menuDiv.appendChild(menuList);\r\n\r\n    content.appendChild(menuDiv);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjsgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudFxyXG5cclxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcblxyXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBbXCJEaXNoIDFcIiwgXCJEaXNoIDJcIiwgXCJEaXNoIDNcIl07XHJcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gaXRlbTtcclxuICAgICAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51TGlzdCk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51RGl2KTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;