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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/App.js":
/*!******************************!*\
  !*** ./src/assets/js/App.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/Nav */ \"./src/assets/js/Modules/Nav.js\");\n/* harmony import */ var _Modules_TypeWriter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/TypeWriter */ \"./src/assets/js/Modules/TypeWriter.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', init);\n\nfunction init() {\n  var nav = new _Modules_Nav__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var typeWriter = new _Modules_TypeWriter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n}\n\n//# sourceURL=webpack:///./src/assets/js/App.js?");

/***/ }),

/***/ "./src/assets/js/Modules/Nav.js":
/*!**************************************!*\
  !*** ./src/assets/js/Modules/Nav.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Nav =\n/*#__PURE__*/\nfunction () {\n  function Nav() {\n    _classCallCheck(this, Nav);\n\n    this.menu = document.querySelector('nav');\n    this.btnMenu = document.querySelector('.btn-menu');\n    this.menuElements = document.querySelectorAll('.menu-list > li');\n    this.events();\n  }\n\n  _createClass(Nav, [{\n    key: \"events\",\n    value: function events() {\n      var _this = this;\n\n      this.btnMenu.addEventListener('click', this.AnimateMenu.bind(this));\n      this.menuElements.forEach(function (element) {\n        element.addEventListener('click', _this.AnimateMenu.bind(_this));\n      });\n    }\n  }, {\n    key: \"AnimateMenu\",\n    value: function AnimateMenu() {\n      this.btnMenu.classList.toggle('change');\n      this.menu.classList.toggle('menu-active');\n    }\n  }]);\n\n  return Nav;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\n//# sourceURL=webpack:///./src/assets/js/Modules/Nav.js?");

/***/ }),

/***/ "./src/assets/js/Modules/TypeWriter.js":
/*!*********************************************!*\
  !*** ./src/assets/js/Modules/TypeWriter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TypeWriter =\n/*#__PURE__*/\nfunction () {\n  function TypeWriter() {\n    _classCallCheck(this, TypeWriter);\n\n    this.textProfession = [\"\\\"Web Developer\\\"\", \"\\\"Javascript Developer\\\"\", \"\\\"WordPress Developer\\\"\"];\n    this.profession = document.getElementById('profession');\n    this.txt = '';\n    this.wait = 3000;\n    this.isDeleting = false;\n    this.wordIndex = 0;\n    this.type();\n  }\n\n  _createClass(TypeWriter, [{\n    key: \"type\",\n    value: function type() {\n      var _this = this;\n\n      var current = this.wordIndex % this.textProfession.length;\n      var fullTxt = this.textProfession[current];\n\n      if (this.isDeleting) {\n        this.txt = fullTxt.substring(0, this.txt.length - 1);\n      } else {\n        this.txt = fullTxt.substring(0, this.txt.length + 1);\n      }\n\n      this.profession.innerHTML = \"<span class=\\\"txt\\\">\".concat(this.txt, \"</span>\");\n      var typeSpeed = 300;\n\n      if (this.isDeleting) {\n        typeSpeed /= 2;\n      }\n\n      if (!this.isDeleting && this.txt == fullTxt) {\n        typeSpeed = this.wait;\n        this.isDeleting = true;\n      } else if (this.isDeleting && this.txt === '') {\n        this.isDeleting = false;\n        this.wordIndex++;\n        typeSpeed = 500;\n      }\n\n      setTimeout(function () {\n        return _this.type();\n      }, typeSpeed);\n    }\n  }]);\n\n  return TypeWriter;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TypeWriter);\n\n//# sourceURL=webpack:///./src/assets/js/Modules/TypeWriter.js?");

/***/ })

/******/ });