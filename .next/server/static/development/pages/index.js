module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_2__);
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

/***/ }),

/***/ "./components/header/button_bar.js":
/*!*****************************************!*\
  !*** ./components/header/button_bar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo */ "./components/header/logo.js");
/* harmony import */ var _login_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login_button */ "./components/header/login_button.js");
/* harmony import */ var _action_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action_icon */ "./components/header/action_icon.js");







function ButtonBar(_ref) {
  var children = _ref.children,
      separator = _ref.separator,
      fixed = _ref.fixed;
  var elRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var positionRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      outOfView = _useState2[0],
      setoutOfView = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('scroll', function (event) {
      if (elRef.current !== null) {
        if (fixed) {
          if (window.scrollY >= 80) {
            if (outOfView !== true) {
              positionRef.current = window.scrollY;
              setoutOfView(true);
              return;
            }
          }
        }

        if (elRef.current.getBoundingClientRect().top < 0) {
          if (outOfView !== true) {
            positionRef.current = window.scrollY;
            setoutOfView(true);
            return;
          }
        }

        if (window.scrollY <= positionRef.current) {
          setoutOfView(false);
        }
      }
    });
  }, []);
  var navClasses = outOfView ? 'fillMain outofview' : 'fixed fillMain';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
    ref: function ref(el) {
      return elRef.current = el;
    },
    className: "jsx-1402303213" + " " + ((fixed ? navClasses : 'fillMain') || "")
  }, fixed && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1402303213" + " " + "banner_container"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_logo__WEBPACK_IMPORTED_MODULE_3__["default"], null)), children.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, item, index !== children.length - 1 && separator);
  }), fixed && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1402303213" + " " + "extra_containers"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_action_icon__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_action_icon__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_action_icon__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_action_icon__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_login_button__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1402303213"
  }, "nav.jsx-1402303213{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#8E793E;height:50px;}.banner_container.jsx-1402303213{position:absolute;left:20px;-webkit-animation-name:navappear-jsx-1402303213;animation-name:navappear-jsx-1402303213;-webkit-animation-duration:0.5s;animation-duration:0.5s;}.extra_containers.jsx-1402303213{position:absolute;top:20%;right:5%;-webkit-animation-name:navappear-jsx-1402303213;animation-name:navappear-jsx-1402303213;-webkit-animation-duration:1.5s;animation-duration:1.5s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.fixed.jsx-1402303213{display:none;}.outofview.jsx-1402303213{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition:0.2s;transition:0.2s;position:fixed;top:0;z-index:5000;height:50px;}@-webkit-keyframes navappear-jsx-1402303213{from{opacity:0;}to{opacity:1;}}@keyframes navappear-jsx-1402303213{from{opacity:0;}to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvaGVhZGVyL2J1dHRvbl9iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkVpQixBQUc2QixBQVNLLEFBTUEsQUFVTCxBQUdBLEFBU0MsQUFHQSxVQUZiLEFBR0EsR0FmSixLQWhCYSxBQU1GLFFBQ0MsRUFOZ0IsT0FPQSx1Q0FqQk4sQUE0QkYsd0NBQ0YsRUFsQlMsT0FPQSxNQVlsQixNQUNPLGFBQ0QsWUFDZixPQWhDYyxLQVdkLE1BVjBCLENBaUJWLDBFQUNNLHdCQWpCRixxRUFrQmEsZ0JBakJoQixjQUNGLFlBQ2YseUVBZ0JBIiwiZmlsZSI6Ii9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvaGVhZGVyL2J1dHRvbl9iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFubmVyIGZyb20gJy4vbG9nbyc7XG5pbXBvcnQgTG9naW5CdXR0b24gZnJvbSAnLi9sb2dpbl9idXR0b24nO1xuaW1wb3J0IEFjdGlvbkljb24gZnJvbSAnLi9hY3Rpb25faWNvbic7XG5cbmZ1bmN0aW9uIEJ1dHRvbkJhcih7IGNoaWxkcmVuLCBzZXBhcmF0b3IsIGZpeGVkIH0pIHtcbiAgICBjb25zdCBlbFJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBwb3NpdGlvblJlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbb3V0T2ZWaWV3LCBzZXRvdXRPZlZpZXddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZml4ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IDgwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3V0T2ZWaWV3ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25SZWYuY3VycmVudCA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0b3V0T2ZWaWV3KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZWxSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdXRPZlZpZXcgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uUmVmLmN1cnJlbnQgPSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0b3V0T2ZWaWV3KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA8PSBwb3NpdGlvblJlZi5jdXJyZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0b3V0T2ZWaWV3KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSwgW10pXG5cblxuICAgIGNvbnN0IG5hdkNsYXNzZXMgPSBvdXRPZlZpZXcgPyAnZmlsbE1haW4gb3V0b2Z2aWV3JyA6ICdmaXhlZCBmaWxsTWFpbic7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgcmVmPXtlbCA9PiBlbFJlZi5jdXJyZW50ID0gZWx9IGNsYXNzTmFtZT17Zml4ZWQgPyBuYXZDbGFzc2VzIDogJ2ZpbGxNYWluJ30gPlxuICAgICAgICAgICAge2ZpeGVkICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lcl9jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxCYW5uZXIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICE9PSBjaGlsZHJlbi5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpeGVkICYmXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiZXh0cmFfY29udGFpbmVyc1wiID5cbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvbi8+XG4gICAgICAgICAgICAgICAgPEFjdGlvbkljb24vPlxuICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uLz5cbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvbi8+XG4gICAgICAgICAgICAgICAgPExvZ2luQnV0dG9uLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6bm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjojOEU3OTNFO1xuICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhbm5lcl9jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDoyMHB4O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOm5hdmFwcGVhcjtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246MC41cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5leHRyYV9jb250YWluZXJze1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDoyMCU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6NSU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6bmF2YXBwZWFyO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjoxLjVzO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZml4ZWR7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm91dG9mdmlldyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgICAgICAgICAgICAgdG9wOjA7XG4gICAgICAgICAgICAgICAgei1pbmRleDo1MDAwO1xuICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGtleWZyYW1lcyBuYXZhcHBlYXJ7XG4gICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L25hdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkJhclxuIl19 */\n/*@ sourceURL=/home/samueleguino97/Desktop/Projects/Personal/ecommerce_template/components/header/button_bar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ButtonBar);

/***/ }),

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ "./components/header/logo.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _login_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login_button */ "./components/header/login_button.js");
/* harmony import */ var _action_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./action_icon */ "./components/header/action_icon.js");







function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-829283800" + " " + 'root fillMain'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Fira+Sans",
    rel: "stylesheet",
    className: "jsx-829283800"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_logo__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-829283800" + " " + "right"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_action_icon__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_login_button__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-829283800" + " " + "left"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_action_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    action: function action() {
      window.open('https://www.facebook.com/angies.store.37', '_blank');
    },
    icon: "facebook"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_action_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: "google"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_action_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: "whatsapp"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_action_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    icon: "phone"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "548153794"
  }, ".root.jsx-829283800{height:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}h1.jsx-829283800{font-size:28px;line-height:60px;justify-self:center;color:#8E793E;}.right.jsx-829283800{position:absolute;top:70%;right:25%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.left.jsx-829283800{position:absolute;top:70%;left:25%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#login.jsx-829283800{position:absolute;top:70%;right:30%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmlCLEFBR29DLEFBU0csQUFNRyxBQU1BLEFBT1osWUEzQk8sR0FTSSxHQU1ULEFBTUEsQUFPWixRQVpjLEFBTUQsQUFPWCxNQW5Cc0IsR0FhUCxDQU5BLEFBYWhCLGdCQW5CaUIsY0FDakIsb0JBWDJCLHVCQXVCM0IsQ0FOQSwyRUFoQmMsV0FDTyxrQkFDRCxxRkFDcEIiLCJmaWxlIjoiL2hvbWUvc2FtdWVsZWd1aW5vOTcvRGVza3RvcC9Qcm9qZWN0cy9QZXJzb25hbC9lY29tbWVyY2VfdGVtcGxhdGUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbm5lciBmcm9tIFwiLi9sb2dvXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExvZ2luQnV0dG9uIGZyb20gXCIuL2xvZ2luX2J1dHRvblwiO1xuaW1wb3J0IEFjdGlvbkljb24gZnJvbSBcIi4vYWN0aW9uX2ljb25cIjtcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdyb290IGZpbGxNYWluJyA+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZpcmErU2Fuc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPEJhbm5lciAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCIgPlxuXG4gICAgICAgICAgICAgICAgPEFjdGlvbkljb24gLz5cbiAgICAgICAgICAgICAgICA8TG9naW5CdXR0b24gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCIgPlxuICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uIGFjdGlvbj17KCk9Pnt3aW5kb3cub3BlbignaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FuZ2llcy5zdG9yZS4zNycsJ19ibGFuaycsKX19IGljb249XCJmYWNlYm9va1wiIC8+XG4gICAgICAgICAgICAgICAgPEFjdGlvbkljb24gaWNvbj1cImdvb2dsZVwiIC8+XG4gICAgICAgICAgICAgICAgPEFjdGlvbkljb24gaWNvbj1cIndoYXRzYXBwXCIgLz5cbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvbiBpY29uPVwicGhvbmVcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLnJvb3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjgwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0Om5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6NjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjojOEU3OTNFO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5yaWdodHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjcwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjI1JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubGVmdHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjcwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNsb2dpbntcblxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6NzAlO1xuICAgICAgICAgICAgcmlnaHQ6MzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgICAgICBHTE9CQUwgU1RZTEVTXG4gICAgICAgICAgICAqL31cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjAwdmg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmZpbGxNYWlue1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDojZmZmXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdfQ== */\n/*@ sourceURL=/home/samueleguino97/Desktop/Projects/Personal/ecommerce_template/components/header/header.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1569997395"
  }, "body{margin:0;padding:0;font-family:'Fira Sans',sans-serif;height:200vh;}.fillMain{background:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRWlCLEFBR2lDLEFBT2IsU0FOYyxPQU1iLEdBTHdDLG1DQUN4QixhQUNoQiIsImZpbGUiOiIvaG9tZS9zYW11ZWxlZ3Vpbm85Ny9EZXNrdG9wL1Byb2plY3RzL1BlcnNvbmFsL2Vjb21tZXJjZV90ZW1wbGF0ZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFubmVyIGZyb20gXCIuL2xvZ29cIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTG9naW5CdXR0b24gZnJvbSBcIi4vbG9naW5fYnV0dG9uXCI7XG5pbXBvcnQgQWN0aW9uSWNvbiBmcm9tIFwiLi9hY3Rpb25faWNvblwiO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9J3Jvb3QgZmlsbE1haW4nID5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStTYW5zXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8QmFubmVyIC8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIiA+XG5cbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvbiAvPlxuICAgICAgICAgICAgICAgIDxMb2dpbkJ1dHRvbiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIiA+XG4gICAgICAgICAgICAgICAgPEFjdGlvbkljb24gYWN0aW9uPXsoKT0+e3dpbmRvdy5vcGVuKCdodHRwczovL3d3dy5mYWNlYm9vay5jb20vYW5naWVzLnN0b3JlLjM3JywnX2JsYW5rJywpfX0gaWNvbj1cImZhY2Vib29rXCIgLz5cbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvbiBpY29uPVwiZ29vZ2xlXCIgLz5cbiAgICAgICAgICAgICAgICA8QWN0aW9uSWNvbiBpY29uPVwid2hhdHNhcHBcIiAvPlxuICAgICAgICAgICAgICAgIDxBY3Rpb25JY29uIGljb249XCJwaG9uZVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAucm9vdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjI4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDo2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiM4RTc5M0U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnJpZ2h0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6NzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6NzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDoyNSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2xvZ2lue1xuXG4gICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDo3MCU7XG4gICAgICAgICAgICByaWdodDozMCU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICAgICAgey8qIFxuICAgICAgICAgICAgICAgIEdMT0JBTCBTVFlMRVNcbiAgICAgICAgICAgICovfVxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoyMDB2aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZmlsbE1haW57XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=/home/samueleguino97/Desktop/Projects/Personal/ecommerce_template/components/header/header.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/header/login_button.js":
/*!*******************************************!*\
  !*** ./components/header/login_button.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function LoginButton() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: 'login'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2674893510"
  }, "Login", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2674893510"
  }, "div.jsx-2674893510{padding-left:20px;padding-right:20px;padding-top:5px;padding-bottom:5px;cursor:pointer;border:2px solid #fff;color:#fff;background:#8E793E;-webkit-transition:all 0.5s;transition:all 0.5s;font-size:14px;}div.jsx-2674893510:hover{background:#fff;border:2px solid #8E793E;color:#8E793E;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvaGVhZGVyL2xvZ2luX2J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRcUIsQUFHOEIsQUFZRixnQkFDVSxFQVpQLG1CQUNILElBWUQsWUFYSSxFQVl0QixpQkFYa0IsZUFDUSxzQkFDWCxXQUNPLG1CQUNFLGdEQUNOLGVBQ2xCIiwiZmlsZSI6Ii9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvaGVhZGVyL2xvZ2luX2J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZnVuY3Rpb24gTG9naW5CdXR0b24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17J2xvZ2luJ30gPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDoyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDoyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6NXB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206NXB4O1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiM4RTc5M0U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xuICAgICAgICB9IFxuICAgICAgICBkaXY6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOEU3OTNFO1xuICAgICAgICAgICAgY29sb3I6ICM4RTc5M0U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkJ1dHRvblxuIl19 */\n/*@ sourceURL=/home/samueleguino97/Desktop/Projects/Personal/ecommerce_template/components/header/login_button.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (LoginButton);

/***/ }),

/***/ "./components/header/logo.js":
/*!***********************************!*\
  !*** ./components/header/logo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Banner() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1881483174" + " " + "main_banner"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1881483174"
  }, "Company Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1881483174"
  }, ".jsx-1881483174{font-size:26px;color:#8E793E;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvaGVhZGVyL2xvZ28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2lCLEFBRW1DLGVBQ0QsY0FDakIiLCJmaWxlIjoiL2hvbWUvc2FtdWVsZWd1aW5vOTcvRGVza3RvcC9Qcm9qZWN0cy9QZXJzb25hbC9lY29tbWVyY2VfdGVtcGxhdGUvY29tcG9uZW50cy9oZWFkZXIvbG9nby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gQmFubmVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5fYmFubmVyXCIgPlxuICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgIENvbXBhbnkgTmFtZVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjI2cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiM4RTc5M0U7XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lclxuIl19 */\n/*@ sourceURL=/home/samueleguino97/Desktop/Projects/Personal/ecommerce_template/components/header/logo.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/header/nav_button.js":
/*!*****************************************!*\
  !*** ./components/header/nav_button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function NavButton(_ref) {
  var text = _ref.text,
      to = _ref.to;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: to
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-2070685583"
  }, text, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2070685583"
  }, "section.jsx-2070685583{padding:4px;min-width:48px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:4px;margin-left:4px;cursor:pointer;-webkit-transition:all 0.2s;transition:all 0.2s;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}section.jsx-2070685583:hover{-webkit-transform:scale(1.09);-ms-transform:scale(1.09);transform:scale(1.09);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvaGVhZGVyL25hdl9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3FCLEFBR29DLEFBYVUsWUFaUCxlQUNGLG1EQVloQix1QkFYeUIsOEVBQ0gsNkZBQ0YsaUJBQ0QsZ0JBQ0EsZUFDSyxnREFDSCxrQkFDRCxxRkFDcEIiLCJmaWxlIjoiL2hvbWUvc2FtdWVsZWd1aW5vOTcvRGVza3RvcC9Qcm9qZWN0cy9QZXJzb25hbC9lY29tbWVyY2VfdGVtcGxhdGUvY29tcG9uZW50cy9oZWFkZXIvbmF2X2J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZnVuY3Rpb24gTmF2QnV0dG9uKHsgdGV4dCx0byB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgaHJlZj17dG99PlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6NDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDo0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgxLjA5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2QnV0dG9uXG4iXX0= */\n/*@ sourceURL=/home/samueleguino97/Desktop/Projects/Personal/ecommerce_template/components/header/nav_button.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (NavButton);

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header */ "./components/header/header.js");
/* harmony import */ var _header_button_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/button_bar */ "./components/header/button_bar.js");
/* harmony import */ var _header_nav_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/nav_button */ "./components/header/nav_button.js");





function PageLayout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_header__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_button_bar__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_nav_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/",
    text: "Home"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_nav_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/contact",
    text: "Contact"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_nav_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/about",
    text: "About"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_nav_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/shop",
    text: "Shop"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_button_bar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fixed: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_nav_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/",
    text: "Home"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_nav_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/contact",
    text: "Contact"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_nav_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/about",
    text: "About"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header_nav_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/shop",
    text: "Shop"
  })), children);
}

/* harmony default export */ __webpack_exports__["default"] = (PageLayout);

/***/ }),

/***/ "./components/products/featured_product.js":
/*!*************************************************!*\
  !*** ./components/products/featured_product.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _product_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product_info */ "./components/products/product_info.js");




function FeaturedProduct() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-4047800677"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: 'https://picsum.photos/850/450',
    className: "jsx-4047800677"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4047800677"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_product_info__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-4047800677" + " " + "product-info"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4047800677"
  }, "Este producto es super bueno, esta hecho con materiales de buena calidad y tiene buen precio")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4047800677"
  }, "main.jsx-4047800677{position:relative;height:500px;width:90%;padding:12px;}img.jsx-4047800677{object-fit:cover;height:55vh;width:55vw;-webkit-animation-name:appear-jsx-4047800677;animation-name:appear-jsx-4047800677;-webkit-animation-duration:3s;animation-duration:3s;-webkit-transition:all 1s;transition:all 1s;box-shadow:0 0 20px 2px #111;border-radius:8px;}img.jsx-4047800677:hover{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}.product-info.jsx-4047800677{background-color:#fff;position:absolute;right:20%;top:40%;height:20%;width:30%;opacity:1;padding:12px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#AD974F;box-shadow:0 3px 5px 2px #333;-webkit-animation-name:appear-jsx-4047800677;animation-name:appear-jsx-4047800677;-webkit-animation-duration:1s;animation-duration:1s;border-radius:8px;-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);-webkit-transition:all 1s;transition:all 1s;}.product-info.jsx-4047800677:hover{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}div.jsx-4047800677{width:300px;padding:5px;position:absolute;top:2%;right:-8%;}p.jsx-4047800677{margin:24px;opacity:1;text-align:center;}.product-specifications.jsx-4047800677{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:90%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:30%;}ul.jsx-4047800677{-webkit-flex:1;-ms-flex:1;flex:1;list-style:none;text-align:center;font-size:16px;}@-webkit-keyframes appear-jsx-4047800677{from{opacity:0;}to{opacity:1;}}@keyframes appear-jsx-4047800677{from{opacity:0;}to{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvcHJvZHVjdHMvZmVhdHVyZWRfcHJvZHVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmlCLEFBRzBDLEFBTUQsQUFVSyxBQUdBLEFBa0JILEFBR1AsQUFTQSxBQUtDLEFBTU4sQUFPTyxBQUNGLFVBREcsQUFDRixFQTNCRCxBQVNGLEtBM0NFLENBTkUsSUFtQkksQUErQkEsRUFUQSxLQWxDUCxFQU5BLEVBMkRLLE9BcERNLEFBWVosQUErQmIsQ0FqRGdCLENBd0NOLE9BQ0csQUFrQlEsQ0F4Q1YsSUFsQlgsSUFtQmMsQ0F1QmQsUUFpQm1CLEVBdkNOLEFBY2IsS0FpQmEsSUF0Q2IsQ0FRYSxHQXVDYixFQVJzQixLQTlCTixhQUNJLG9CQWpCSyxvREFDSCxHQThDUixVQTdCRyxDQThCakIsYUE3QmlDLGlCQWpCQSxhQWtCUixnQkFqQkosa0JBQ3JCLGdEQWlCeUIsb0RBQ0osa0JBQ0csMkVBQ0YsNENBQ3RCIiwiZmlsZSI6Ii9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvcHJvZHVjdHMvZmVhdHVyZWRfcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9kdWN0SW5mbyBmcm9tICcuL3Byb2R1Y3RfaW5mbyc7XG5cbmZ1bmN0aW9uIEZlYXR1cmVkUHJvZHVjdCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9eydodHRwczovL3BpY3N1bS5waG90b3MvODUwLzQ1MCd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UHJvZHVjdEluZm8gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdC1pbmZvXCIgPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBFc3RlIHByb2R1Y3RvIGVzIHN1cGVyIGJ1ZW5vLCBlc3RhIGhlY2hvIGNvbiBtYXRlcmlhbGVzIGRlIGJ1ZW5hIGNhbGlkYWQgeSB0aWVuZSBidWVuIHByZWNpb1xuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjEycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6Y292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NTV2aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjU1dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTphcHBlYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246M3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjBweCAycHggIzExMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGltZzpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3QtaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjIwJTsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDo0MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzoxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6bm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNBRDk3NEY7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAgM3B4IDVweCAycHggIzMzMzsgXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTphcHBlYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwLjgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWluZm86aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRpdntcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzo1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoyJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0Oi04JTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjoyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3Qtc3BlY2lmaWNhdGlvbnN7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo5MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MzAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVse1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleDoxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGFwcGVhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHtvcGFjaXR5OjB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0byB7b3BhY2l0eToxfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvbWFpbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkUHJvZHVjdFxuIl19 */\n/*@ sourceURL=/home/samueleguino97/Desktop/Projects/Personal/ecommerce_template/components/products/featured_product.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (FeaturedProduct);

/***/ }),

/***/ "./components/products/product_info.js":
/*!*********************************************!*\
  !*** ./components/products/product_info.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_login_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/login_button */ "./components/header/login_button.js");
/* harmony import */ var _shop_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop_button */ "./components/products/shop_button.js");





function ProductInfo() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-782360749"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-782360749"
  }, "Nombre del producto"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-782360749"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-782360749"
  }, "Gucci - Color Blanco - Individual: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-782360749"
  }, "16.99 Bs")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    className: "jsx-782360749"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shop_button__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-782360749"
  }, "Gucci - Color Negro - 5 piezas: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-782360749"
  }, "25.99 Bs")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    className: "jsx-782360749"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shop_button__WEBPACK_IMPORTED_MODULE_3__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "782360749"
  }, "div.jsx-782360749{background-color:#fff;width:100%;padding-bottom:8px;-webkit-animation-name:slideinleft-jsx-782360749;animation-name:slideinleft-jsx-782360749;-webkit-animation-duration:1s;animation-duration:1s;height:17vh;}h3.jsx-782360749{color:#AD974F;padding:5px;margin:0;font-size:18px;text-align:center;box-shadow:0 2px 2px 1px #ccc;}section.jsx-782360749{padding-top:8px;diplay:flex;width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#fff;}p.jsx-782360749{font-size:14px;font-weight:bold;margin:12px;width:100%;}span.jsx-782360749{color:#AD974F;font-weight:bolder;position:absolute;right:15px;}@-webkit-keyframes slideinleft-jsx-782360749{from{opacity:0;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}to{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none;}}@keyframes slideinleft-jsx-782360749{from{opacity:0;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);}to{opacity:1;-webkit-transform:none;-ms-transform:none;transform:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdF9pbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCUyxBQUdnQyxBQVFSLEFBUUUsQUFPQSxBQU1GLEFBUUMsQUFDRixVQUQ4QixBQUNqQixJQTdCZCxBQXFCTyxDQU5ELENBUE4sTUFoQkQsSUFTRixFQVFFLElBT0MsQ0F2Qk8sQUE2QkQsRUFwQkgsSUFRTyxLQU9YLE1BZE8sQ0FvQlAsQ0E3QmdCLEdBd0I1QixPQU1BLEtBSzRCLENBekJJLDhCQUNoQyxRQXVCNkMsV0FqQnRCLHNCQUN2QixHQWpCdUIsb0RBQ1YsWUFDYiIsImZpbGUiOiIvaG9tZS9zYW11ZWxlZ3Vpbm85Ny9EZXNrdG9wL1Byb2plY3RzL1BlcnNvbmFsL2Vjb21tZXJjZV90ZW1wbGF0ZS9jb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3RfaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2dpbkJ1dHRvbiBmcm9tICcuLi9oZWFkZXIvbG9naW5fYnV0dG9uJztcbmltcG9ydCBTaG9wQnV0dG9uIGZyb20gJy4vc2hvcF9idXR0b24nO1xuXG5mdW5jdGlvbiBQcm9kdWN0SW5mbygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPk5vbWJyZSBkZWwgcHJvZHVjdG88L2gzPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEd1Y2NpIC0gQ29sb3IgQmxhbmNvIC0gSW5kaXZpZHVhbDogPHNwYW4+MTYuOTkgQnM8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLGp1c3RpZnlDb250ZW50OidjZW50ZXInfX0gPlxuICAgICAgICAgIDxTaG9wQnV0dG9uIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICBHdWNjaSAtIENvbG9yIE5lZ3JvIC0gNSBwaWV6YXM6IDxzcGFuPjI1Ljk5IEJzPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JyxqdXN0aWZ5Q29udGVudDonY2VudGVyJ319ID5cbiAgICAgICAgICA8U2hvcEJ1dHRvbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgIGRpdntcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4cHg7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6c2xpZGVpbmxlZnQ7XG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xuICAgICAgICAgIGhlaWdodDoxN3ZoO1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBjb2xvcjojQUQ5NzRGO1xuICAgICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAxcHggI2NjYztcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9ue1xuICAgICAgICAgIHBhZGRpbmctdG9wOjhweDtcbiAgICAgICAgICBkaXBsYXk6ZmxleDtcbiAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luOjEycHg7XG4gICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgIGNvbG9yOiNBRDk3NEY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xuICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OjE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlaW5sZWZ0IHtcbiAgICAgICAgICBcbiAgICAgICAgICBmcm9tIHtvcGFjaXR5OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwMCUpfVxuICAgICAgICAgIHRvIHtvcGFjaXR5OjE7dHJhbnNmb3JtOm5vbmV9XG4gICAgICB9XG4gICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SW5mb1xuIl19 */\n/*@ sourceURL=/home/samueleguino97/Desktop/Projects/Personal/ecommerce_template/components/products/product_info.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ProductInfo);

/***/ }),

/***/ "./components/products/shop_button.js":
/*!********************************************!*\
  !*** ./components/products/shop_button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function ShopButton() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: 'products?productid'
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1076215164"
  }, "Shop Now", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1076215164"
  }, "div.jsx-1076215164{width:80px;height:20px;padding:8px;cursor:pointer;background:#fff;border:2px solid #8E793E;color:#8E793E;-webkit-transition:all 0.3s;transition:all 0.3s;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;displat:-webkit-box;displat:-webkit-flex;displat:-ms-flexbox;displat:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}div.jsx-1076215164:hover{border:2px solid #8E793E;color:#fff;background:#8E793E;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL2NvbXBvbmVudHMvcHJvZHVjdHMvc2hvcF9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXFCLEFBR3VCLEFBY2UsV0FiZCxZQUNBLEVBYUEsVUFaRyxDQWFJLGNBWkgsS0FhbkIsV0FaNkIseUJBQ1gsY0FDTSxnREFDSCx1RUFDTCwwRUFDVSxtR0FDSiw2RkFDdEIiLCJmaWxlIjoiL2hvbWUvc2FtdWVsZWd1aW5vOTcvRGVza3RvcC9Qcm9qZWN0cy9QZXJzb25hbC9lY29tbWVyY2VfdGVtcGxhdGUvY29tcG9uZW50cy9wcm9kdWN0cy9zaG9wX2J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZnVuY3Rpb24gU2hvcEJ1dHRvbigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXsncHJvZHVjdHM/cHJvZHVjdGlkJ30gPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBTaG9wIE5vd1xuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOjgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6MjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6OHB4O1xuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNmZmY7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOEU3OTNFO1xuICAgICAgICAgICAgY29sb3I6ICM4RTc5M0U7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuICAgICAgICAgICAgZGlzcGxhdDpmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBkaXY6aG92ZXJ7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjOEU3OTNFO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiM4RTc5M0U7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wQnV0dG9uXG4iXX0= */\n/*@ sourceURL=/home/samueleguino97/Desktop/Projects/Personal/ecommerce_template/components/products/shop_button.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (ShopButton);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_button_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/button_bar */ "./components/header/button_bar.js");
/* harmony import */ var _components_header_nav_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/nav_button */ "./components/header/nav_button.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header/header */ "./components/header/header.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_products_featured_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/products/featured_product */ "./components/products/featured_product.js");








function HomePage() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4198666923"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_products_featured_product__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-4198666923"
  }, "Colecciones")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4198666923"
  }, "div.jsx-4198666923{min-height:80vh;background:linear-gradient(#8E793E 0%,#AF9B5F 3%,#fff 100%);padding:24px;}span.jsx-4198666923{font-size:64px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNhLEFBR29DLEFBS0QsZUFDbEIsQ0FMK0QsNERBQy9DLGFBQ2hCIiwiZmlsZSI6Ii9ob21lL3NhbXVlbGVndWlubzk3L0Rlc2t0b3AvUHJvamVjdHMvUGVyc29uYWwvZWNvbW1lcmNlX3RlbXBsYXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXIvYnV0dG9uX2JhclwiO1xuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXIvbmF2X2J1dHRvblwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyXCI7XG5pbXBvcnQgUGFnZUxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBGZWF0dXJlZFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZHVjdHMvZmVhdHVyZWRfcHJvZHVjdFwiO1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZUxheW91dD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVkUHJvZHVjdC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+Q29sZWNjaW9uZXM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6ODB2aDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoIzhFNzkzRSAwJSwjQUY5QjVGIDMlLCNmZmYgMTAwJSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MjRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo2NHB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvUGFnZUxheW91dD5cblxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXX0= */\n/*@ sourceURL=/home/samueleguino97/Desktop/Projects/Personal/ecommerce_template/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: iconFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconFactory", function() { return iconFactory; });
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);


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

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/samueleguino97/Desktop/Projects/Personal/ecommerce_template/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map