webpackHotUpdate("static/development/pages/products.js",{

/***/ "./components/header/action_icon.js":
/*!******************************************!*\
  !*** ./components/header/action_icon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");





function ActionIcon(_ref) {
  var _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? 'cart' : _ref$icon,
      _ref$action = _ref.action,
      action = _ref$action === void 0 ? function () {} : _ref$action;
  var SelectedIcon = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["iconFactory"])(icon);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    onClick: action,
    className: "jsx-2168374675"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SelectedIcon, {
    className: "jsx-2168374675"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2168374675"
  }, "div.jsx-2168374675{height:24px;width:24px;border:1px solid #8E793E;color:#8E793E;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;margin:4px;-webkit-transition:all 0.3s;transition:all 0.3s;}div.jsx-2168374675:hover{border:1px solid #8E793E;color:#fff;background:#8E793E;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvaGVhZGVyL2FjdGlvbl9pY29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVTLEFBR3NCLEFBWWEsWUFYZCxXQUNjLEVBV2QsV0FFYixZQVpnQixPQVlmLE9BWGMsMEVBQ1UsbUdBQ0osNkZBQ0osZUFDSixXQUNVLGdEQUN0QiIsImZpbGUiOiIvaG9tZS9zYW11ZWxlZ3Vpbm85Ny9EZXNrdG9wL1Byb2plY3RzL1BlcnNvbmFsL2Vjb21tZXJjZV90ZW1wbGF0ZS9jb21wb25lbnRzL2hlYWRlci9hY3Rpb25faWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1kU2hvcHBpbmdDYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXG5pbXBvcnQgeyBpY29uRmFjdG9yeSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmZ1bmN0aW9uIEFjdGlvbkljb24oeyBpY29uPSdjYXJ0JyAsYWN0aW9uPSgpPT57fX0pIHtcbiAgbGV0IFNlbGVjdGVkSWNvbiA9IGljb25GYWN0b3J5KGljb24pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXthY3Rpb259ID5cbiAgICAgIDxTZWxlY3RlZEljb24gLz5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgaGVpZ2h0OjI0cHg7XG4gICAgICAgICAgd2lkdGg6MjRweDtcbiAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICM4RTc5M0U7XG4gICAgICAgICAgY29sb3I6IzhFNzkzRTtcbiAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luOjRweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgfVxuICAgICAgICBkaXY6aG92ZXIge1xuICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgIzhFNzkzRTtcbiAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgIGJhY2tncm91bmQ6IzhFNzkzRVxuICAgICAgICB9XG4gICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uSWNvblxuIl19 */\n/*@ sourceURL=/home/samueleguino97/Desktop/Projects/Personal/ecommerce_template/components/header/action_icon.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ActionIcon);

/***/ })

})
//# sourceMappingURL=products.js.79b7b4ac1a563d007f0d.hot-update.js.map