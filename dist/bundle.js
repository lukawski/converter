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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Converter = function () {
  function Converter(currencies) {
    _classCallCheck(this, Converter);

    this.currencies = currencies;
  }

  _createClass(Converter, [{
    key: "convert",
    value: function convert(currency, value) {
      var currencyRule = this.currencies[currency];
      var course = currencyRule * (1 + Math.random() * 100 / 1000);
      var converted = course * value;

      return converted;
    }
  }]);

  return Converter;
}();

exports.default = Converter;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var History = function () {
  function History() {
    _classCallCheck(this, History);

    this.history = [];
    this.latest = {};
  }

  _createClass(History, [{
    key: 'add',
    value: function add(entry) {
      this.history.push(entry);
      this.latest = entry;
    }
  }, {
    key: 'getLatest',
    value: function getLatest() {
      return this.latest;
    }
  }, {
    key: 'createHTMLElement',
    value: function createHTMLElement(element) {
      var el = document.createElement('div');
      var month = element.date.getMonth() > 9 ? element.date.getMonth() : '0' + element.date.getMonth();
      var day = element.date.getDate() > 9 ? element.date.getDate() : '0' + element.date.getDate();
      var hour = element.date.getHours() > 9 ? element.date.getHours() : '0' + element.date.getHours();
      var min = element.date.getMinutes() > 9 ? element.date.getMinutes() : '0' + element.date.getMinutes();

      el.innerHTML = '<p class="upper">pln amount</p> <h1>' + element.value + '</h1> \n                    <time>' + element.date.getFullYear() + '.' + month + '.' + day + ' ' + hour + ':' + min + '</time>';
      return el;
    }
  }]);

  return History;
}();

exports.default = History;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Converter = __webpack_require__(0);

var _Converter2 = _interopRequireDefault(_Converter);

var _History = __webpack_require__(1);

var _History2 = _interopRequireDefault(_History);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var converter = new _Converter2.default({ eur: 4, pln: 4.4 });
var history = new _History2.default();
var convertButton = document.getElementById('convert');
var convertInput = document.getElementById('value');
var historySection = document.getElementById('history');

convertButton.addEventListener('click', function (e) {
  if (!convertInput.value) return false;
  if (isNaN(convertInput.value)) return false;

  var userValue = Number(convertInput.value);
  var convertedValue = converter.convert('eur', userValue);

  history.add({ value: convertedValue, date: new Date() });

  var latestEntry = history.getLatest();
  var newHistoryElement = history.createHTMLElement(latestEntry);

  historySection.appendChild(newHistoryElement);
});

/***/ })
/******/ ]);