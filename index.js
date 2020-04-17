/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_layout_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout/menu */ \"./src/scripts/page-layout/menu.js\");\n/* harmony import */ var _page_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout */ \"./src/scripts/page-layout/index.js\");\n\r\n\r\n\r\nconsole.log('index.js');\r\n\r\nconst menu = Object(_page_layout_menu__WEBPACK_IMPORTED_MODULE_0__[\"getMenu\"])();\r\n\r\ndocument.body.append(menu);\r\n\r\nconst page = Object(_page_layout__WEBPACK_IMPORTED_MODULE_1__[\"getLayout\"])();\r\n// document.body.append(page);\r\ndocument.getElementById('root').append(page);\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/page-layout/buttons.js":
/*!********************************************!*\
  !*** ./src/scripts/page-layout/buttons.js ***!
  \********************************************/
/*! exports provided: defaultBtnText, getBaseButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultBtnText\", function() { return defaultBtnText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBaseButton\", function() { return getBaseButton; });\nconst defaultBtnText = 'Button';\r\n\r\nfunction getBaseButton(text) {\r\n  const btn = document.createElement('button');\r\n\r\n  btn.textContent = text || defaultBtnText;\r\n\r\n  return btn;\r\n}\r\n\r\nfunction getCancelButton() {\r\n  return getBaseButton('Cancel');\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getCancelButton);\n\n//# sourceURL=webpack:///./src/scripts/page-layout/buttons.js?");

/***/ }),

/***/ "./src/scripts/page-layout/index.js":
/*!******************************************!*\
  !*** ./src/scripts/page-layout/index.js ***!
  \******************************************/
/*! exports provided: getLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLayout\", function() { return getLayout; });\nfunction getLayout() {\r\n  \r\n}\n\n//# sourceURL=webpack:///./src/scripts/page-layout/index.js?");

/***/ }),

/***/ "./src/scripts/page-layout/menu.js":
/*!*****************************************!*\
  !*** ./src/scripts/page-layout/menu.js ***!
  \*****************************************/
/*! exports provided: getMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMenu\", function() { return getMenu; });\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/scripts/page-layout/buttons.js\");\n\r\n\r\nfunction getMenu() {\r\n  const menu = document.createElement('menu');\r\n\r\n  const food = Object(_buttons__WEBPACK_IMPORTED_MODULE_0__[\"getBaseButton\"])('Food');\r\n  const addFood = Object(_buttons__WEBPACK_IMPORTED_MODULE_0__[\"getBaseButton\"])('Add food');\r\n  const editFood = Object(_buttons__WEBPACK_IMPORTED_MODULE_0__[\"getBaseButton\"])('Edit food');\r\n  const removeFood = Object(_buttons__WEBPACK_IMPORTED_MODULE_0__[\"getBaseButton\"])('Remove food');\r\n\r\n  menu.append(food, addFood, editFood, removeFood);\r\n\r\n  return menu;\r\n}\r\n\r\nconsole.log(_buttons__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/scripts/page-layout/menu.js?");

/***/ })

/******/ });