/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.js */ \"./src/page.js\");\n\n\nconst tabs = document.querySelectorAll('.tab');\ntabs.forEach(tab => {\n    tab.addEventListener('click', () => {\n        if (tab.id == 'home-tab') {\n            _page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].home();\n        } else if (tab.id == 'menu-tab') {\n            _page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].menu();\n        } else {\n            _page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].contact();\n        }\n    })\n});\n\n_page_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].home();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction selectTab(tabName) {\n    const tabs = document.querySelectorAll('.tab');\n    tabs.forEach(tab => {\n        if (tab.id == tabName) {\n            tab.classList.add('current');\n        } else {\n            tab.classList.remove('current');\n        }\n    });\n}\n\nfunction infoCards() {\n    const reviewCard = document.createElement('div');\n    reviewCard.classList.add('card');\n    const review = document.createElement('p');\n    review.id = 'review';\n    review.textContent = 'The Center for Community is by far one of the worst places I have ever eaten. It should be a crime that all those poor trust fund baby students should be forced to eat at such a wretched dining hall. The government and I would be thrilled to do absolutely nothing about this.';\n    reviewCard.appendChild(review);\n    const reviewAuthor = document.createElement('p');\n    reviewAuthor.id = 'review-author';\n    reviewAuthor.textContent = '~Obama';\n    reviewCard.appendChild(reviewAuthor);\n\n    const hoursCard = document.createElement('div');\n    hoursCard.classList.add('card');\n    const hoursTitle = document.createElement('h2');\n    hoursTitle.classList.add('card-title');\n    hoursTitle.textContent = 'Hours';\n    hoursCard.appendChild(hoursTitle);\n    const schedule = document.createElement('ul');\n    schedule.id = 'schedule';\n    const sundayHours = document.createElement('li');\n    sundayHours.classList.add('schedule-item');\n    sundayHours.textContent = 'Sunday: 8am - 8pm';\n    schedule.appendChild(sundayHours);\n    const mondayHours = document.createElement('li');\n    mondayHours.classList.add('schedule-item');\n    mondayHours.textContent = 'Monday: 8am - 8pm';\n    schedule.appendChild(mondayHours);\n    const tuesdayHours = document.createElement('li');\n    tuesdayHours.classList.add('schedule-item');\n    tuesdayHours.textContent = 'Tuesday: 8am - 8pm';\n    schedule.appendChild(tuesdayHours);\n    const wednesdayHours = document.createElement('li');\n    wednesdayHours.classList.add('schedule-item');\n    wednesdayHours.textContent = 'Wednesday: 8am - 8pm';\n    schedule.appendChild(wednesdayHours);\n    const thursdayHours = document.createElement('li');\n    thursdayHours.classList.add('schedule-item');\n    thursdayHours.textContent = 'Thursday: 8am - 8pm';\n    schedule.appendChild(thursdayHours);\n    const fridayHours = document.createElement('li');\n    fridayHours.classList.add('schedule-item');\n    fridayHours.textContent = 'Friday: 8am - 8pm';\n    schedule.appendChild(fridayHours);\n    const saturdayHours = document.createElement('li');\n    saturdayHours.classList.add('schedule-item');\n    saturdayHours.textContent = 'Saturday: 8am - 8pm';\n    schedule.appendChild(saturdayHours);\n    hoursCard.appendChild(schedule);\n\n    const locationCard = document.createElement('div');\n    locationCard.classList.add('card');\n    const locationTitle = document.createElement('h2');\n    locationTitle.classList.add('card-title');\n    locationTitle.textContent = 'Location';\n    locationCard.appendChild(locationTitle);\n    const address = document.createElement('p');\n    address.id = 'address';\n    address.textContent = 'Boulder, CO';\n    locationCard.appendChild(address);\n\n    return [reviewCard, hoursCard, locationCard];\n}\n\nfunction menuCards() {\n    const appsCard = document.createElement('div');\n    appsCard.classList.add('card');\n    const appsTitle = document.createElement('h2');\n    appsTitle.classList.add('card-title');\n    appsTitle.textContent = 'Appetizers';\n    appsCard.appendChild(appsTitle);\n    const appsList = document.createElement('ul');\n    const apps = ['Calamari', 'Chicken fingers', 'Shrimp', 'Nachos']\n    apps.forEach(app => {\n        const appItem = document.createElement('li');\n        appItem.textContent = app;\n        appsList.appendChild(appItem);\n    });\n    appsCard.appendChild(appsList);\n\n    const entreeCard = document.createElement('div');\n    entreeCard.classList.add('card');\n    const entreeTitle = document.createElement('h2');\n    entreeTitle.classList.add('card-title');\n    entreeTitle.textContent = 'Entrees';\n    entreeCard.appendChild(entreeTitle);\n    const entreeList = document.createElement('ul');\n    const entrees = ['Filet Minon', 'Chicken breast', 'Lobster', 'Salmon']\n    entrees.forEach(entree => {\n        const entreeItem = document.createElement('li');\n        entreeItem.textContent = entree;\n        entreeList.appendChild(entreeItem);\n    });\n    entreeCard.appendChild(entreeList);\n\n    const dessertCard = document.createElement('div');\n    dessertCard.classList.add('card');\n    const dessertTitle = document.createElement('h2');\n    dessertTitle.classList.add('card-title');\n    dessertTitle.textContent = 'Desserts';\n    dessertCard.appendChild(dessertTitle);\n    const dessertList = document.createElement('ul');\n    const desserts = ['Ice cream', 'Apple pie', 'Brownie'];\n    desserts.forEach(dessert => {\n        const dessertItem = document.createElement('li');\n        dessertItem.textContent = dessert;\n        dessertList.appendChild(dessertItem);\n    });\n    dessertCard.appendChild(dessertList);\n\n    return [appsCard, entreeCard, dessertCard];\n}\n\nfunction homeContent() {\n    const content = document.createElement('div');\n    const title = document.createElement('h1');\n    title.classList.add('page-title');\n    title.textContent = 'Center 4 Community: Dining Hall';\n    content.appendChild(title);\n\n    const cards = infoCards();\n    cards.forEach(card => {\n        content.appendChild(card);\n    });\n\n    return content.innerHTML;\n}\n\nfunction menuContent() {\n    const content = document.createElement('div');\n    const title = document.createElement('h1');\n    title.classList.add('page-title');\n    title.textContent = 'Menu';\n    content.appendChild(title);\n\n    const cards = menuCards();\n    cards.forEach(card => {\n        content.appendChild(card);\n    });\n\n    return content.innerHTML;\n}\n\nfunction contactContent() {\n    const content = document.createElement('div');\n    const title = document.createElement('h1');\n    title.classList.add('page-title');\n    title.textContent = 'Contact';\n    content.appendChild(title);\n\n    const contactCard = document.createElement('div');\n    contactCard.classList.add('card');\n    contactCard.textContent = 'lazy >:<';\n    content.appendChild(contactCard)\n\n    return content.innerHTML;\n}\n\nconst page = (() => {\n    let content = document.querySelector('#content');\n    const home = () => {\n        content.innerHTML = homeContent();\n        selectTab('home-tab');\n    };\n    const menu = () => {\n        content.innerHTML = menuContent();\n        selectTab('menu-tab');\n    };\n    const contact = () => {\n        content.innerHTML = contactContent();\n        selectTab('contact-tab');\n    };\n\n    return {home, menu, contact}\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);\n\n\n//# sourceURL=webpack://restaurant/./src/page.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;