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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/main.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js??ref--5-2!./src/scss/main.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/*\\nThis file is used to contain all abstracts imports.\\n*/\\n/*---COLORS---*/\\n/*\\nThis file is used to contain all base imports.\\n*/\\nhtml, body {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n}\\n\\n* {\\n  text-rendering: optimizeLegibility;\\n  -o-text-rendering: optimizeLegibility;\\n  -ms-text-rendering: optimizeLegibility;\\n  -moz-text-rendering: optimizeLegibility;\\n  -webkit-text-rendering: optimizeLegibility;\\n  -webkit-tap-highlight-color: transparent;\\n  box-sizing: border-box;\\n}\\n*:before, *:after {\\n  box-sizing: border-box;\\n}\\n*:focus {\\n  outline: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n  vertical-align: top;\\n  border: none;\\n}\\n\\ninput {\\n  border: none;\\n  padding: 0 16px;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\n/* Change Autocomplete styles in Chrome*/\\ninput:-webkit-autofill,\\ninput:-webkit-autofill:hover,\\ninput:-webkit-autofill:focus,\\ntextarea:-webkit-autofill,\\ntextarea:-webkit-autofill:hover,\\ntextarea:-webkit-autofill:focus,\\nselect:-webkit-autofill,\\nselect:-webkit-autofill:hover,\\nselect:-webkit-autofill:focus {\\n  -webkit-text-fill-color: #666;\\n  font-size: 14px;\\n  transition: background-color 5000s ease-in-out 0s;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-family: \\\"Inter\\\", \\\"Roboto\\\", sans-serif !important;\\n}\\n\\nhtml,\\nbody {\\n  -webkit-font-smoothing: auto;\\n  -moz-osx-font-smoothing: auto;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-weight: normal;\\n}\\n\\nh1 {\\n  font-size: 28px;\\n}\\n\\nh2 {\\n  font-size: 24px;\\n}\\n\\nh3 {\\n  font-size: 16px;\\n}\\n\\nh4 {\\n  font-size: 15px;\\n}\\n\\nh5 {\\n  font-size: 13px;\\n}\\n\\nh6 {\\n  font-size: 12px;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\n/*\\nThis file is used to contain all components imports.\\n*/\\n/*\\nThis file is used to contain all layouts imports.\\n*/\\n/*\\nThis file is used to contain all pages imports.\\n*/\\n/*\\nThis file is used to contain all themes imports.\\n*/\\n/*\\nThis file is used to contain all vendors imports.\\n*/\", \"\",{\"version\":3,\"sources\":[\"webpack://src/scss/abstracts/__abstracts-dir.scss\",\"webpack://src/scss/abstracts/_variables.scss\",\"webpack://src/scss/base/__base-dir.scss\",\"webpack://src/scss/base/_common.scss\",\"webpack://src/scss/main.scss\",\"webpack://src/scss/base/_reset.scss\",\"webpack://src/scss/base/_typography.scss\",\"webpack://src/scss/components/__components-dir.scss\",\"webpack://src/scss/layouts/__layouts-dir.scss\",\"webpack://src/scss/pages/__pages-dir.scss\",\"webpack://src/scss/themes/__themes-dir.scss\",\"webpack://src/scss/vendors/__vendors-dir.scss\"],\"names\":[],\"mappings\":\"AAAA;;CAAA;ACYA,eAAA;ACZA;;CAAA;ACIA;EACE,WAAA;EACA,YAAA;ACKF;;ACVA;EACE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;ADaF;;ACTA;EACE,kCAAA;EACA,qCAAA;EACA,sCAAA;EACA,uCAAA;EACA,0CAAA;EACA,wCAAA;EACA,sBAAA;ADYF;ACVE;EAEE,sBAAA;ADWJ;ACRE;EACE,aAAA;ADUJ;;ACLA;EACE,eAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;ADQF;;ACJA;EACE,YAAA;EACA,eAAA;ADOF;;ACHA;EACE,gBAAA;ADMF;;ACHA,wCAAA;AACA;;;;;;;;;EAUE,6BAAA;EACA,eAAA;EACA,iDAAA;ADKF;;AE/DA;EACE,gBAAA;AFkEF;;AE/DA;EACE,qDAAA;AFkEF;;AE/DA;;EAEE,4BAAA;EACA,6BAAA;AFkEF;;AE9DA;;;;;;EAME,mBAAA;AFiEF;;AE9DA;EACE,eAAA;AFiEF;;AE9DA;EACE,eAAA;AFiEF;;AE9DA;EACE,eAAA;AFiEF;;AE9DA;EACE,eAAA;AFiEF;;AE9DA;EACE,eAAA;AFiEF;;AE9DA;EACE,eAAA;AFiEF;;AE9DA;EACE,qBAAA;AFiEF;;AGpHA;;CAAA;ACAA;;CAAA;ACAA;;CAAA;ACAA;;CAAA;ACAA;;CAAA\",\"sourcesContent\":[\"/*\\r\\nThis file is used to contain all abstracts imports.\\r\\n*/\\r\\n\\r\\n@import \\\"./variables\\\";\\r\\n@import \\\"./functions\\\";\\r\\n@import \\\"./mixins\\\";\\r\\n@import \\\"./colors\\\";\\r\\n@import \\\"./fonts\\\";\\r\\n@import \\\"./breakpoints\\\";\\r\\n@import \\\"./animations\\\";\",\"$primary-text:#27303f;\\r\\n$secondary-text: #64748b;\\r\\n\\r\\n// Variables\\r\\n$primary: #27303f;\\r\\n$secondary: #64748b;\\r\\n$accent: #6875f5;\\r\\n$success: #45d3a3;\\r\\n$info: #45b0da;\\r\\n$danger: #fa4e4e;\\r\\n$warning: #f4b707;\\r\\n\\r\\n/*---COLORS---*/\\r\\n\\r\\n$white: #ffffff;\\r\\n$white1: #f2f3f8;\\r\\n$white2: #e4e8f0;\\r\\n$white3: #f2f7f8;\\r\\n$white4: #cccccc;\\r\\n$white5: #dddddd;\\r\\n$gray: #98a8b4;\\r\\n$gray1: #eeeeee;\\r\\n$gray2: #aea9c3;\\r\\n$gray3: #94a4b0;\\r\\n$dark: #2c304d;\\r\\n$dark2: #252946;\\r\\n$dark3: #40545a;\\r\\n$green: #5cb85c;\\r\\n$green1: #60c400;\\r\\n$blue: #009efb;\\r\\n$darkGreenMercon: #007d4c;\\r\\n$grayMercon: #54667a;\\r\\n$lightGreenMercon: #a3cf60;\\r\\n$lightRedMercon: #de544f;\\r\\n$yellowMercon: #ffce00;\\r\\n$orangeMercon: #f68932;\\r\\n$blackMercon: #000000;\\r\\n$white: #fff;\\r\\n$gray-100: #f8f9fa;\\r\\n$gray-200: #e9ecef;\\r\\n$gray-300: #dee2e6;\\r\\n$gray-400: #ced4da;\\r\\n$gray-500: #adb5bd;\\r\\n$gray-600: #868e96;\\r\\n$gray-700: #495057;\\r\\n$gray-800: #343a40;\\r\\n$gray-900: #212529;\\r\\n$black: #000;\\r\\n$blue: #0073dd;\\r\\n$indigo: #6610f2;\\r\\n$purple: #6f42c1;\\r\\n$pink: #e83e8c;\\r\\n$red: #dc3545;\\r\\n$orange: #fd7e14;\\r\\n$yellow: #ffc107;\\r\\n$green: #28a745;\\r\\n$teal: #20c997;\\r\\n$cyan: #17a2b8;\\r\\n\\r\\n$theme-colors: (\\r\\n  primary: $blue,\\r\\n  secondary: $gray-600,\\r\\n  success: $green,\\r\\n  info: $cyan,\\r\\n  warning: $yellow,\\r\\n  danger: $red,\\r\\n  light: $gray-100,\\r\\n  dark: $gray-800\\r\\n);\\r\\n\",\"/*\\r\\nThis file is used to contain all base imports.\\r\\n*/\\r\\n\\r\\n@import \\\"./common\\\";\\r\\n@import \\\"./reset\\\";\\r\\n@import \\\"./typography\\\";\",\"//  Author: Nguyen Chinh Hiep\\r\\n//  Email: nguyenchinhhiep95@gmail.com\\r\\n//  Facebook: facebook.com/hiepnguyen1003\\r\\n\\r\\nhtml, body {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\",\"/*\\nThis file is used to contain all abstracts imports.\\n*/\\n/*---COLORS---*/\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap\\\");\\n/*\\nThis file is used to contain all base imports.\\n*/\\nhtml, body {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n}\\n\\n* {\\n  text-rendering: optimizeLegibility;\\n  -o-text-rendering: optimizeLegibility;\\n  -ms-text-rendering: optimizeLegibility;\\n  -moz-text-rendering: optimizeLegibility;\\n  -webkit-text-rendering: optimizeLegibility;\\n  -webkit-tap-highlight-color: transparent;\\n  box-sizing: border-box;\\n}\\n*:before, *:after {\\n  box-sizing: border-box;\\n}\\n*:focus {\\n  outline: none;\\n}\\n\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n  vertical-align: top;\\n  border: none;\\n}\\n\\ninput {\\n  border: none;\\n  padding: 0 16px;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\n/* Change Autocomplete styles in Chrome*/\\ninput:-webkit-autofill,\\ninput:-webkit-autofill:hover,\\ninput:-webkit-autofill:focus,\\ntextarea:-webkit-autofill,\\ntextarea:-webkit-autofill:hover,\\ntextarea:-webkit-autofill:focus,\\nselect:-webkit-autofill,\\nselect:-webkit-autofill:hover,\\nselect:-webkit-autofill:focus {\\n  -webkit-text-fill-color: #666;\\n  font-size: 14px;\\n  transition: background-color 5000s ease-in-out 0s;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\\n\\nbody {\\n  font-family: \\\"Inter\\\", \\\"Roboto\\\", sans-serif !important;\\n}\\n\\nhtml,\\nbody {\\n  -webkit-font-smoothing: auto;\\n  -moz-osx-font-smoothing: auto;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-weight: normal;\\n}\\n\\nh1 {\\n  font-size: 28px;\\n}\\n\\nh2 {\\n  font-size: 24px;\\n}\\n\\nh3 {\\n  font-size: 16px;\\n}\\n\\nh4 {\\n  font-size: 15px;\\n}\\n\\nh5 {\\n  font-size: 13px;\\n}\\n\\nh6 {\\n  font-size: 12px;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\n/*\\nThis file is used to contain all components imports.\\n*/\\n/*\\nThis file is used to contain all layouts imports.\\n*/\\n/*\\nThis file is used to contain all pages imports.\\n*/\\n/*\\nThis file is used to contain all themes imports.\\n*/\\n/*\\nThis file is used to contain all vendors imports.\\n*/\",\"// Reset margin, padding,...\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  font-size: 100%;\\r\\n}\\r\\n\\r\\n// Text rendering & box sizing\\r\\n* {\\r\\n  text-rendering: optimizeLegibility;\\r\\n  -o-text-rendering: optimizeLegibility;\\r\\n  -ms-text-rendering: optimizeLegibility;\\r\\n  -moz-text-rendering: optimizeLegibility;\\r\\n  -webkit-text-rendering: optimizeLegibility;\\r\\n  -webkit-tap-highlight-color: transparent;\\r\\n  box-sizing: border-box;\\r\\n\\r\\n  &:before,\\r\\n  &:after {\\r\\n    box-sizing: border-box;\\r\\n  }\\r\\n\\r\\n  &:focus {\\r\\n    outline: none;\\r\\n  }\\r\\n}\\r\\n\\r\\n// Images\\r\\nimg {\\r\\n  max-width: 100%;\\r\\n  height: auto;\\r\\n  vertical-align: top;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n// Input\\r\\ninput {\\r\\n  border: none;\\r\\n  padding: 0 16px;\\r\\n}\\r\\n\\r\\n// List style\\r\\nul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* Change Autocomplete styles in Chrome*/\\r\\ninput:-webkit-autofill,\\r\\ninput:-webkit-autofill:hover, \\r\\ninput:-webkit-autofill:focus,\\r\\ntextarea:-webkit-autofill,\\r\\ntextarea:-webkit-autofill:hover,\\r\\ntextarea:-webkit-autofill:focus,\\r\\nselect:-webkit-autofill,\\r\\nselect:-webkit-autofill:hover,\\r\\nselect:-webkit-autofill:focus {\\r\\n  // border: solid 1px #c8cedb;\\r\\n  -webkit-text-fill-color: #666;\\r\\n  font-size: 14px;\\r\\n  transition: background-color 5000s ease-in-out 0s;\\r\\n}\",\"// Typography\\r\\n\\r\\nhtml {\\r\\n  font-size: 62.5%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Inter', 'Roboto', sans-serif !important;\\r\\n}\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  -webkit-font-smoothing: auto;\\r\\n  -moz-osx-font-smoothing: auto;\\r\\n}\\r\\n\\r\\n// Headings\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6 {\\r\\n  font-weight: normal;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 28px;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\nh4 {\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\nh5 {\\r\\n  font-size: 13px;\\r\\n}\\r\\n\\r\\nh6 {\\r\\n  font-size: 12px;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\",\"/*\\r\\nThis file is used to contain all components imports.\\r\\n*/\\r\\n\\r\\n@import \\\"./buttons\\\";\\r\\n@import \\\"./tables\\\";\\r\\n\",\"/*\\r\\nThis file is used to contain all layouts imports.\\r\\n*/\\r\\n\\r\\n@import \\\"./header\\\";\\r\\n@import \\\"./footer\\\";\\r\\n@import \\\"./navbar\\\";\\r\\n@import \\\"./navigation\\\";\\r\\n@import \\\"./sidebar\\\";\\r\\n@import \\\"./layout\\\";\\r\\n\\r\\n\",\"/*\\r\\nThis file is used to contain all pages imports.\\r\\n*/\\r\\n\\r\\n@import \\\"./login\\\";\\r\\n@import \\\"./forgot-password\\\";\\r\\n@import \\\"./register\\\";\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\",\"/*\\r\\nThis file is used to contain all themes imports.\\r\\n*/\\r\\n\\r\\n@import \\\"./basic\\\";\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\",\"/*\\r\\nThis file is used to contain all vendors imports.\\r\\n*/\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/sass-loader/dist/cjs.js??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/sass-loader/dist/cjs.js??ref--5-2!./main.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });