/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 40:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(703);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: Gentium;
    src: url(https://example.com/fonts/Gentium.woff);
    font-display: optional;
}

body {
    font-family: Gentium, serif;
}

#root {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--primary-color);
    min-height: 100vh;
    overflow-x: hidden;
}

.alert {
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: #fff3cd;
    color: #856404;
    padding: 12px 20px;
    border: 1px solid #ffeeba;
    border-radius: 8px;
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
    z-index: 1000;
    transform: translateX(0);
    transition: transform 0.3s ease;
}

.alert.hidden {
    transform: translateX(120%);
}`, "",{"version":3,"sources":["webpack://./frontend/styles/index.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,oBAAoB;IACpB,gDAAgD;IAChD,sBAAsB;AAC1B;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,gCAAgC;IAChC,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,WAAW;IACX,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,wBAAwB;IACxB,+BAA+B;AACnC;;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":["@import \"./setup.css\";\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@font-face {\r\n    font-family: Gentium;\r\n    src: url(https://example.com/fonts/Gentium.woff);\r\n    font-display: optional;\r\n}\r\n\r\nbody {\r\n    font-family: Gentium, serif;\r\n}\r\n\r\n#root {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    background: var(--primary-color);\r\n    min-height: 100vh;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.alert {\r\n    position: fixed;\r\n    top: 20px;\r\n    right: 20px;\r\n    background-color: #fff3cd;\r\n    color: #856404;\r\n    padding: 12px 20px;\r\n    border: 1px solid #ffeeba;\r\n    border-radius: 8px;\r\n    font-size: 1rem;\r\n    text-align: center;\r\n    font-weight: 500;\r\n    z-index: 1000;\r\n    transform: translateX(0);\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.alert.hidden {\r\n    transform: translateX(120%);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 72:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 113:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(703);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dashboard {
    width: 100%;
    max-width: var(--dashboard-width);
    min-width: 300px;
    min-height: 300px;
    height: 95%;
    border-radius: 20px;
    border: 1px solid black;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-large);
    transition: opacity 0.3s ease;
}

@media (max-width: 1024px) {
    .dashboard {
        width: 90%;
    }
}

@media (max-width: 600px) {
    .dashboard {
        width: 100%;
        min-width: 90%;
    }
}`, "",{"version":3,"sources":["webpack://./frontend/styles/Dashboard.css"],"names":[],"mappings":"AAEA;IACI,WAAW;IACX,iCAAiC;IACjC,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;IACX,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iCAAiC;IACjC,6BAA6B;AACjC;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,WAAW;QACX,cAAc;IAClB;AACJ","sourcesContent":["@import \"./setup.css\";\r\n\r\n.dashboard {\r\n    width: 100%;\r\n    max-width: var(--dashboard-width);\r\n    min-width: 300px;\r\n    min-height: 300px;\r\n    height: 95%;\r\n    border-radius: 20px;\r\n    border: 1px solid black;\r\n    margin: auto;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: var(--font-size-large);\r\n    transition: opacity 0.3s ease;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n    .dashboard {\r\n        width: 90%;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .dashboard {\r\n        width: 100%;\r\n        min-width: 90%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 354:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 659:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 680:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(703);
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.navbar {
    width: 20%;
    max-width: var(--navbar-width);
    height: 95%;
    min-width: 200px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-left: 20px;
    margin-right: 20px;
    gap: 20px;
    border-radius: 20px;
    border: 1px solid black;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    position: relative;
    z-index: 10;
    visibility: visible;
    opacity: 1;
}

.navbar.hidden {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    height: 0;
    min-height: 0;
    margin: 0;
    border: none;
}

.logo {
    width: 100%;
    height: 40px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background: var(--secondary-color);
    font-size: var(--font-size-large);
    color: var(--primary-color);
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow 0.2s ease;
}

.nav-item {
    width: 80%;
    height: 30px;
    border: none;
    cursor: pointer;
    background: transparent;
    color: var(--secondary-color);
    font-size: var(--font-size-medium);
    border-radius: 15px;
    transition: background-color 0.3s, color 0.3s;
}

.nav-item:first-of-type {
    margin-top: 50px;
}

@media (max-width: 1024px) {
    .navbar {
        width: 30%;
    }
}

@media (max-width: 768px) {
    .navbar {
        width: 40%;
    }
}

@media (max-width: 800px) {
    .navbar {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: white;
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .navbar.hidden {
        transform: translateX(-100%);
    }

    .navbar:not(.hidden) {
        transform: translateX(0);
    }
}`, "",{"version":3,"sources":["webpack://./frontend/styles/Navbar.css"],"names":[],"mappings":"AAEA;IACI,UAAU;IACV,8BAA8B;IAC9B,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;IAC3B,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;IACT,mBAAmB;IACnB,uBAAuB;IACvB,mDAAmD;IACnD,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,oBAAoB;IACpB,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,SAAS;IACT,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,6BAA6B;IAC7B,kCAAkC;IAClC,iCAAiC;IACjC,2BAA2B;IAC3B,YAAY;IACZ,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,6BAA6B;IAC7B,kCAAkC;IAClC,mBAAmB;IACnB,6CAA6C;AACjD;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,WAAW;QACX,aAAa;QACb,eAAe;QACf,MAAM;QACN,OAAO;QACP,iBAAiB;QACjB,aAAa;QACb,4BAA4B;QAC5B,kDAAkD;IACtD;;IAEA;QACI,4BAA4B;IAChC;;IAEA;QACI,wBAAwB;IAC5B;AACJ","sourcesContent":["@import \"./setup.css\";\r\n\r\n.navbar {\r\n    width: 20%;\r\n    max-width: var(--navbar-width);\r\n    height: 95%;\r\n    min-width: 200px;\r\n    min-height: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    gap: 20px;\r\n    border-radius: 20px;\r\n    border: 1px solid black;\r\n    transition: opacity 0.3s ease, visibility 0.3s ease;\r\n    position: relative;\r\n    z-index: 10;\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.navbar.hidden {\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    position: absolute;\r\n    height: 0;\r\n    min-height: 0;\r\n    margin: 0;\r\n    border: none;\r\n}\r\n\r\n.logo {\r\n    width: 100%;\r\n    height: 40px;\r\n    border-top-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n    background: var(--secondary-color);\r\n    font-size: var(--font-size-large);\r\n    color: var(--primary-color);\r\n    border: none;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: box-shadow 0.2s ease;\r\n}\r\n\r\n.nav-item {\r\n    width: 80%;\r\n    height: 30px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    color: var(--secondary-color);\r\n    font-size: var(--font-size-medium);\r\n    border-radius: 15px;\r\n    transition: background-color 0.3s, color 0.3s;\r\n}\r\n\r\n.nav-item:first-of-type {\r\n    margin-top: 50px;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n    .navbar {\r\n        width: 30%;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .navbar {\r\n        width: 40%;\r\n    }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .navbar {\r\n        width: 100%;\r\n        height: 100vh;\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n        background: white;\r\n        z-index: 1000;\r\n        transform: translateX(-100%);\r\n        transition: transform 0.3s ease, opacity 0.3s ease;\r\n    }\r\n\r\n    .navbar.hidden {\r\n        transform: translateX(-100%);\r\n    }\r\n\r\n    .navbar:not(.hidden) {\r\n        transform: translateX(0);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 703:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {

    --navbar-width: 250px;
    --dashboard-width: calc(100vw - var(--navbar-width) - 50px);

    --primary-color: #eaeaea;
    --secondary-color: #26282b;


    --font-size-small: 16px;
    --font-size-medium: 20px;
    --font-size-large: 26px;

}`, "",{"version":3,"sources":["webpack://./frontend/styles/setup.css"],"names":[],"mappings":"AAAA;;IAEI,qBAAqB;IACrB,2DAA2D;;IAE3D,wBAAwB;IACxB,0BAA0B;;;IAG1B,uBAAuB;IACvB,wBAAwB;IACxB,uBAAuB;;AAE3B","sourcesContent":[":root {\r\n\r\n    --navbar-width: 250px;\r\n    --dashboard-width: calc(100vw - var(--navbar-width) - 50px);\r\n\r\n    --primary-color: #eaeaea;\r\n    --secondary-color: #26282b;\r\n\r\n\r\n    --font-size-small: 16px;\r\n    --font-size-medium: 20px;\r\n    --font-size-large: 26px;\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 825:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// ./frontend/sections/About.js
var About = function About(container) {
  container.innerText = 'About';
};
/* harmony default export */ const sections_About = (About);
;// ./frontend/sections/Home.js
var Home = function Home(container) {
  container.innerText = 'Home';
};
/* harmony default export */ const sections_Home = (Home);
;// ./frontend/sections/Contact.js
var Contact = function Contact(container) {
  container.innerText = 'Contact';
};
/* harmony default export */ const sections_Contact = (Contact);
;// ./frontend/constants/index.js



var navItems = [{
  id: 1,
  name: "Home",
  icon: "home",
  callBack: sections_Home
}, {
  id: 2,
  name: "About",
  icon: "about",
  callBack: sections_About
}, {
  id: 3,
  name: "Contact",
  icon: "contact",
  callBack: sections_Contact
}];
;// ./frontend/utils/components-functions.js
var getContainer = function getContainer(containerName) {
  return document.getElementById(containerName);
};
;// ./frontend/components/NavItem.js

var NavItem = function NavItem(container, navItemInfo) {
  var item = document.createElement("button");
  item.classList.add("nav-item");
  item.innerText = navItemInfo.name;
  item.addEventListener("click", function (e) {
    e.preventDefault();
    var dashboard = getContainer('dashboard');
    navItemInfo.callBack(dashboard);
  });
  container.append(item);
};
/* harmony default export */ const components_NavItem = (NavItem);
;// ./frontend/utils/style-functions.js
var addCSS = function addCSS(path) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './frontend/styles/' + path + '.css';
  var existingLink = Array.from(document.head.getElementsByTagName('link')).find(function (el) {
    return el.href === link.href;
  });
  if (!existingLink) {
    document.head.appendChild(link);
  }
};
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./frontend/styles/Dashboard.css
var Dashboard = __webpack_require__(324);
;// ./frontend/styles/Dashboard.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Dashboard/* default */.A, options);




       /* harmony default export */ const styles_Dashboard = (Dashboard/* default */.A && Dashboard/* default */.A.locals ? Dashboard/* default */.A.locals : undefined);

;// ./frontend/sections/Dashboard.js



var Dashboard_Dashboard = function Dashboard(container) {
  if (!container) {
    console.error('Dashboard: container is null or undefined.');
    return;
  }
  var existing = getContainer('dashboard');
  if (existing) {
    existing.remove();
  }
  var section = document.createElement("section");
  section.classList.add("dashboard");
  section.id = "dashboard";
  section.textContent = "Dashboard";
  section.style.minHeight = "300px";
  addCSS('Dashboard');
  container.append(section);
};
/* harmony default export */ const sections_Dashboard = (Dashboard_Dashboard);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./frontend/styles/Navbar.css
var Navbar = __webpack_require__(680);
;// ./frontend/styles/Navbar.css

      
      
      
      
      
      
      
      
      

var Navbar_options = {};

Navbar_options.styleTagTransform = (styleTagTransform_default());
Navbar_options.setAttributes = (setAttributesWithoutAttributes_default());
Navbar_options.insert = insertBySelector_default().bind(null, "head");
Navbar_options.domAPI = (styleDomAPI_default());
Navbar_options.insertStyleElement = (insertStyleElement_default());

var Navbar_update = injectStylesIntoStyleTag_default()(Navbar/* default */.A, Navbar_options);




       /* harmony default export */ const styles_Navbar = (Navbar/* default */.A && Navbar/* default */.A.locals ? Navbar/* default */.A.locals : undefined);

;// ./frontend/sections/Navbar.js




var Navbar_Navbar = function Navbar(container) {
  var nav = document.createElement("nav");
  var logoInfo = {
    name: "ACA",
    icon: "ACA-logo",
    callBack: sections_Dashboard
  };
  nav.style.minWidth = "200px";
  nav.style.minHeight = "300px";
  nav.classList.add("navbar");
  nav.classList.add("hidden");
  var logo = document.createElement("button");
  logo.classList.add("logo");
  logo.textContent = logoInfo.name;
  logo.addEventListener("click", function () {
    logoInfo.callBack(container);
  });
  nav.append(logo);
  navItems.forEach(function (navItem) {
    components_NavItem(nav, navItem);
  });
  container.append(nav);
};
/* harmony default export */ const sections_Navbar = (Navbar_Navbar);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./frontend/styles/index.css
var styles = __webpack_require__(40);
;// ./frontend/styles/index.css

      
      
      
      
      
      
      
      
      

var styles_options = {};

styles_options.styleTagTransform = (styleTagTransform_default());
styles_options.setAttributes = (setAttributesWithoutAttributes_default());
styles_options.insert = insertBySelector_default().bind(null, "head");
styles_options.domAPI = (styleDomAPI_default());
styles_options.insertStyleElement = (insertStyleElement_default());

var styles_update = injectStylesIntoStyleTag_default()(styles/* default */.A, styles_options);




       /* harmony default export */ const frontend_styles = (styles/* default */.A && styles/* default */.A.locals ? styles/* default */.A.locals : undefined);

;// ./frontend/index.js




document.addEventListener("DOMContentLoaded", function () {
  var container = getContainer('root');
  sections_Navbar(container);
  sections_Dashboard(container);
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map