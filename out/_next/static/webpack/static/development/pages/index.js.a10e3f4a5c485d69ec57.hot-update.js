webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: iconFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconFactory", function() { return iconFactory; });
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");


var iconFactory = function iconFactory() {
  var icon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "cart";

  switch (icon) {
    case 'cart':
      return react_icons_md__WEBPACK_IMPORTED_MODULE_0__["MdShoppingCart"];

    case 'facebook':
      return react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaFacebook"];

    case 'google':
      return react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaGooglePlusG"];

    case 'whatsapp':
      return react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaWhatsapp"];

    case 'phone':
      return react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaPhone"];

    default:
      return null;
  }
};

/***/ })

})
//# sourceMappingURL=index.js.a10e3f4a5c485d69ec57.hot-update.js.map