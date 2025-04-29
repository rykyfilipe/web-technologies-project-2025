/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/components/NavItem.js":
/*!****************************************!*\
  !*** ./frontend/components/NavItem.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_components_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/components-functions.js */ "./frontend/utils/components-functions.js");

var NavItem = function NavItem(container, navItemInfo) {
  var item = document.createElement("button");
  item.classList.add("nav-item");
  item.innerText = navItemInfo.name;
  item.addEventListener("click", function (e) {
    e.preventDefault();
    var dashboard = (0,_utils_components_functions_js__WEBPACK_IMPORTED_MODULE_0__.getContainer)('dashboard');
    navItemInfo.callBack(dashboard);
  });
  container.append(item);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./frontend/constants/index.js":
/*!*************************************!*\
  !*** ./frontend/constants/index.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navItems: () => (/* binding */ navItems)
/* harmony export */ });
/* harmony import */ var _sections_About_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sections/About.js */ "./frontend/sections/About.js");
/* harmony import */ var _sections_Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sections/Home.js */ "./frontend/sections/Home.js");
/* harmony import */ var _sections_Contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/Contact.js */ "./frontend/sections/Contact.js");



var navItems = [{
  id: 1,
  name: "Home",
  icon: "home",
  callBack: _sections_Home_js__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  id: 2,
  name: "About",
  icon: "about",
  callBack: _sections_About_js__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  id: 3,
  name: "Contact",
  icon: "contact",
  callBack: _sections_Contact_js__WEBPACK_IMPORTED_MODULE_2__["default"]
}];

/***/ }),

/***/ "./frontend/sections/About.js":
/*!************************************!*\
  !*** ./frontend/sections/About.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var About = function About(container) {
  container.innerText = 'About';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./frontend/sections/Contact.js":
/*!**************************************!*\
  !*** ./frontend/sections/Contact.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Contact = function Contact(container) {
  container.innerText = 'Contact';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./frontend/sections/Dashboard.js":
/*!****************************************!*\
  !*** ./frontend/sections/Dashboard.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_style_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/style-functions.js */ "./frontend/utils/style-functions.js");
/* harmony import */ var _utils_components_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/components-functions.js */ "./frontend/utils/components-functions.js");
/* harmony import */ var _styles_Dashboard_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Dashboard.css */ "./frontend/styles/Dashboard.css");



var Dashboard = function Dashboard(container) {
  if (!container) {
    console.error('Dashboard: container is null or undefined.');
    return;
  }
  var existing = (0,_utils_components_functions_js__WEBPACK_IMPORTED_MODULE_1__.getContainer)('dashboard');
  if (existing) {
    existing.remove();
  }
  var section = document.createElement("section");
  section.classList.add("dashboard");
  section.id = "dashboard";
  section.textContent = "Dashboard";
  (0,_utils_style_functions_js__WEBPACK_IMPORTED_MODULE_0__.addCSS)('Dashboard');
  container.append(section);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./frontend/sections/Home.js":
/*!***********************************!*\
  !*** ./frontend/sections/Home.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Home = function Home(container) {
  container.innerText = 'Home';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./frontend/sections/Navbar.js":
/*!*************************************!*\
  !*** ./frontend/sections/Navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/index.js */ "./frontend/constants/index.js");
/* harmony import */ var _components_NavItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavItem.js */ "./frontend/components/NavItem.js");
/* harmony import */ var _Dashboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.js */ "./frontend/sections/Dashboard.js");
/* harmony import */ var _styles_Navbar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Navbar.css */ "./frontend/styles/Navbar.css");




var Navbar = function Navbar(container) {
  var nav = document.createElement("nav");
  var logoInfo = {
    name: "ACA",
    icon: "ACA-logo",
    callBack: _Dashboard_js__WEBPACK_IMPORTED_MODULE_2__["default"]
  };
  nav.classList.add("navbar");
  var logo = document.createElement("button");
  logo.classList.add("logo");
  logo.textContent = logoInfo.name;
  logo.addEventListener("click", function () {
    logoInfo.callBack(container);
  });
  nav.append(logo);
  _constants_index_js__WEBPACK_IMPORTED_MODULE_0__.navItems.forEach(function (navItem) {
    (0,_components_NavItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(nav, navItem);
  });
  container.append(nav);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./frontend/styles/Dashboard.css":
/*!***************************************!*\
  !*** ./frontend/styles/Dashboard.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Dashboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Dashboard.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/styles/Dashboard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Dashboard_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Dashboard_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Dashboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Dashboard_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./frontend/styles/Navbar.css":
/*!************************************!*\
  !*** ./frontend/styles/Navbar.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Navbar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Navbar.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/styles/Navbar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Navbar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./frontend/styles/index.css":
/*!***********************************!*\
  !*** ./frontend/styles/index.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./frontend/utils/components-functions.js":
/*!************************************************!*\
  !*** ./frontend/utils/components-functions.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getContainer: () => (/* binding */ getContainer)
/* harmony export */ });
var getContainer = function getContainer(containerName) {
  return document.getElementById(containerName);
};

/***/ }),

/***/ "./frontend/utils/style-functions.js":
/*!*******************************************!*\
  !*** ./frontend/utils/style-functions.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCSS: () => (/* binding */ addCSS)
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/styles/Dashboard.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/styles/Dashboard.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./setup.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/styles/setup.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dashboard {
    width: 100%;
    max-width: var(--dashboard-width);
    min-width: 300px; /* Evită ca dashboard-ul să devină prea mic pe ecrane mici */

    height: 95%;

    border-radius: 20px;
    border: 1px solid black;

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: var(--font-size-large);

    transition: width 0.3s ease, height 0.3s ease; /* Tranziție pentru schimbările de dimensiuni */
}

/* Media Queries pentru responsive design */
@media (max-width: 1024px) {
    .dashboard {
        width: 90%; /* Dashboard-ul va ocupa 90% din lățimea pe ecrane mai mici */
        max-width: 800px; /* Setează o lățime maximă pe tablete */
    }
}

@media (max-width: 768px) {
    .dashboard {
        width: 95%; /* Crește lățimea pe tablete mai mici */
        max-width: 700px;
    }
}

@media (max-width: 600px) {
    .dashboard {
        width: 100%; /* Pe dispozitive mobile, dashboard-ul va ocupa întreaga lățime */
        max-width: 100%; /* Lăsăm dashboard-ul să se extindă complet pe mobil */
        min-width: 90%; /* Evită dimensiuni prea mici pe mobil */
    }

    .dashboard {
        font-size: var(--font-size-medium); /* Ajustează dimensiunea fontului pe mobil */
    }
}
`, "",{"version":3,"sources":["webpack://./frontend/styles/Dashboard.css"],"names":[],"mappings":"AAEA;IACI,WAAW;IACX,iCAAiC;IACjC,gBAAgB,EAAE,4DAA4D;;IAE9E,WAAW;;IAEX,mBAAmB;IACnB,uBAAuB;;IAEvB,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,iCAAiC;;IAEjC,6CAA6C,EAAE,+CAA+C;AAClG;;AAEA,2CAA2C;AAC3C;IACI;QACI,UAAU,EAAE,6DAA6D;QACzE,gBAAgB,EAAE,uCAAuC;IAC7D;AACJ;;AAEA;IACI;QACI,UAAU,EAAE,uCAAuC;QACnD,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,WAAW,EAAE,iEAAiE;QAC9E,eAAe,EAAE,sDAAsD;QACvE,cAAc,EAAE,wCAAwC;IAC5D;;IAEA;QACI,kCAAkC,EAAE,4CAA4C;IACpF;AACJ","sourcesContent":["@import url(\"setup.css\");\r\n\r\n.dashboard {\r\n    width: 100%;\r\n    max-width: var(--dashboard-width);\r\n    min-width: 300px; /* Evită ca dashboard-ul să devină prea mic pe ecrane mici */\r\n\r\n    height: 95%;\r\n\r\n    border-radius: 20px;\r\n    border: 1px solid black;\r\n\r\n    margin: auto;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    font-size: var(--font-size-large);\r\n\r\n    transition: width 0.3s ease, height 0.3s ease; /* Tranziție pentru schimbările de dimensiuni */\r\n}\r\n\r\n/* Media Queries pentru responsive design */\r\n@media (max-width: 1024px) {\r\n    .dashboard {\r\n        width: 90%; /* Dashboard-ul va ocupa 90% din lățimea pe ecrane mai mici */\r\n        max-width: 800px; /* Setează o lățime maximă pe tablete */\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .dashboard {\r\n        width: 95%; /* Crește lățimea pe tablete mai mici */\r\n        max-width: 700px;\r\n    }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .dashboard {\r\n        width: 100%; /* Pe dispozitive mobile, dashboard-ul va ocupa întreaga lățime */\r\n        max-width: 100%; /* Lăsăm dashboard-ul să se extindă complet pe mobil */\r\n        min-width: 90%; /* Evită dimensiuni prea mici pe mobil */\r\n    }\r\n\r\n    .dashboard {\r\n        font-size: var(--font-size-medium); /* Ajustează dimensiunea fontului pe mobil */\r\n    }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/styles/Navbar.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/styles/Navbar.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./setup.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/styles/setup.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.navbar {
    width: 20%;
    max-width: var(--navbar-width);
    height: 95%;
    min-width: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    margin-left: 20px;
    margin-right: 20px;
    gap: 20px;

    border-radius: 20px;
    border: 1px solid black;
    transition: width 0.3s ease;
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
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo:hover {
    border-bottom: 1px solid black;
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

.nav-item:hover {
    color: var(--primary-color);
    background: var(--secondary-color);
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

    .nav-item {
        font-size: var(--font-size-small);
    }
}

@media (max-width: 800px) {
    .navbar {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
        display: none;
    }

    .logo {
        font-size: var(--font-size-medium);
    }

    .nav-item {
        font-size: var(--font-size-small);
    }


}

body {
    margin: 0;
    font-family: sans-serif;
}

`, "",{"version":3,"sources":["webpack://./frontend/styles/Navbar.css"],"names":[],"mappings":"AAEA;IACI,UAAU;IACV,8BAA8B;IAC9B,WAAW;IACX,gBAAgB;;IAEhB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,2BAA2B;;IAE3B,iBAAiB;IACjB,kBAAkB;IAClB,SAAS;;IAET,mBAAmB;IACnB,uBAAuB;IACvB,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,4BAA4B;IAC5B,6BAA6B;;IAE7B,kCAAkC;IAClC,iCAAiC;IACjC,2BAA2B;;IAE3B,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,6BAA6B;IAC7B,kCAAkC;IAClC,mBAAmB;IACnB,6CAA6C;AACjD;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,kCAAkC;AACtC;;AAEA;IACI;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;QACI,iCAAiC;IACrC;AACJ;;AAEA;IACI;QACI,WAAW;QACX,kBAAkB;QAClB,MAAM;QACN,OAAO;QACP,aAAa;QACb,aAAa;IACjB;;IAEA;QACI,kCAAkC;IACtC;;IAEA;QACI,iCAAiC;IACrC;;;AAGJ;;AAEA;IACI,SAAS;IACT,uBAAuB;AAC3B","sourcesContent":["@import url(\"setup.css\");\r\n\r\n.navbar {\r\n    width: 20%;\r\n    max-width: var(--navbar-width);\r\n    height: 95%;\r\n    min-width: 200px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    gap: 20px;\r\n\r\n    border-radius: 20px;\r\n    border: 1px solid black;\r\n    transition: width 0.3s ease;\r\n}\r\n\r\n.logo {\r\n    width: 100%;\r\n    height: 40px;\r\n    border-top-left-radius: 20px;\r\n    border-top-right-radius: 20px;\r\n\r\n    background: var(--secondary-color);\r\n    font-size: var(--font-size-large);\r\n    color: var(--primary-color);\r\n\r\n    border: none;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.logo:hover {\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.nav-item {\r\n    width: 80%;\r\n    height: 30px;\r\n    border: none;\r\n    cursor: pointer;\r\n    background: transparent;\r\n    color: var(--secondary-color);\r\n    font-size: var(--font-size-medium);\r\n    border-radius: 15px;\r\n    transition: background-color 0.3s, color 0.3s;\r\n}\r\n\r\n.nav-item:first-of-type {\r\n    margin-top: 50px;\r\n}\r\n\r\n.nav-item:hover {\r\n    color: var(--primary-color);\r\n    background: var(--secondary-color);\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n    .navbar {\r\n        width: 30%;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .navbar {\r\n        width: 40%;\r\n    }\r\n\r\n    .nav-item {\r\n        font-size: var(--font-size-small);\r\n    }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .navbar {\r\n        width: 100%;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        z-index: 1000;\r\n        display: none;\r\n    }\r\n\r\n    .logo {\r\n        font-size: var(--font-size-medium);\r\n    }\r\n\r\n    .nav-item {\r\n        font-size: var(--font-size-small);\r\n    }\r\n\r\n\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: sans-serif;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/styles/index.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/styles/index.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./setup.css */ "./node_modules/css-loader/dist/cjs.js!./frontend/styles/setup.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_setup_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#root {
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background: var(--primary-color);
}

.alert {
    position: absolute;

    background-color: #fff3cd;
    color: #856404;
    padding: 12px 20px;
    border: 1px solid #ffeeba;
    border-radius: 8px;
    font-size: 1rem;

    top: 20px;
    right: 20px;

    text-align: center;
    font-weight: 500;
}`, "",{"version":3,"sources":["webpack://./frontend/styles/index.css"],"names":[],"mappings":"AAEA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,6BAA6B;;IAE7B,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;;IAElB,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;;IAEf,SAAS;IACT,WAAW;;IAEX,kBAAkB;IAClB,gBAAgB;AACpB","sourcesContent":["@import url(\"setup.css\");\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#root {\r\n    height: 100vh;\r\n    width: 100vw;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n\r\n    background: var(--primary-color);\r\n}\r\n\r\n.alert {\r\n    position: absolute;\r\n\r\n    background-color: #fff3cd;\r\n    color: #856404;\r\n    padding: 12px 20px;\r\n    border: 1px solid #ffeeba;\r\n    border-radius: 8px;\r\n    font-size: 1rem;\r\n\r\n    top: 20px;\r\n    right: 20px;\r\n\r\n    text-align: center;\r\n    font-weight: 500;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./frontend/styles/setup.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./frontend/styles/setup.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sections_Navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/Navbar.js */ "./frontend/sections/Navbar.js");
/* harmony import */ var _utils_components_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/components-functions.js */ "./frontend/utils/components-functions.js");
/* harmony import */ var _sections_Dashboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/Dashboard.js */ "./frontend/sections/Dashboard.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/index.css */ "./frontend/styles/index.css");




document.addEventListener("DOMContentLoaded", function () {
  var container = (0,_utils_components_functions_js__WEBPACK_IMPORTED_MODULE_1__.getContainer)('root');
  (0,_sections_Navbar_js__WEBPACK_IMPORTED_MODULE_0__["default"])(container);
  (0,_sections_Dashboard_js__WEBPACK_IMPORTED_MODULE_2__["default"])(container);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map