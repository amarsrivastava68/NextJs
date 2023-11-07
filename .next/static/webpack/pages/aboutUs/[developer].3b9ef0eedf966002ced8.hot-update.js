webpackHotUpdate_N_E("pages/aboutUs/[developer]",{

/***/ "./pages/aboutUs/[developer].js":
/*!**************************************!*\
  !*** ./pages/aboutUs/[developer].js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\ADMIN\\Downloads\\007 01-starting-project\\01-starting-project\\pages\\aboutUs\\[developer].js",
    _this = undefined,
    _s = $RefreshSig$();




var developer = function developer() {
  _s();

  var details = [{
    id: 1,
    name: 'Yash',
    role: 'Senior Developer'
  }, {
    id: 2,
    name: 'Vaibhav',
    role: 'Backend Developer'
  }, {
    id: 3,
    name: 'Suresh',
    role: 'Frontend Developer'
  }];
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var developer_id = router.query.developer; // Convert to a number
  // Find the developer with the matching ID

  var req_developer = details.find(function (dev) {
    return dev.id === developer_id;
  });
  console.log(req_developer);

  if (!req_developer) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Developer not found"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 12
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: req_developer.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: req_developer.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: req_developer.role
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(developer, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (developer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXRVcy9bZGV2ZWxvcGVyXS5qcyJdLCJuYW1lcyI6WyJkZXZlbG9wZXIiLCJkZXRhaWxzIiwiaWQiLCJuYW1lIiwicm9sZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRldmVsb3Blcl9pZCIsInF1ZXJ5IiwicmVxX2RldmVsb3BlciIsImZpbmQiLCJkZXYiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxNQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFJLEVBQUUsTUFBZjtBQUF1QkMsUUFBSSxFQUFFO0FBQTdCLEdBRGMsRUFFZDtBQUFFRixNQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFJLEVBQUUsU0FBZjtBQUEwQkMsUUFBSSxFQUFFO0FBQWhDLEdBRmMsRUFHZDtBQUFFRixNQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFJLEVBQUUsUUFBZjtBQUF5QkMsUUFBSSxFQUFFO0FBQS9CLEdBSGMsQ0FBaEI7QUFNQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFJRixNQUFNLENBQUNHLEtBQVAsQ0FBYVIsU0FBbkMsQ0FSc0IsQ0FReUI7QUFFL0M7O0FBQ0EsTUFBTVMsYUFBYSxHQUFHUixPQUFPLENBQUNTLElBQVIsQ0FBYSxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDVCxFQUFKLEtBQVdLLFlBQXBCO0FBQUEsR0FBYixDQUF0QjtBQUNGSyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosYUFBWjs7QUFDRSxNQUFJLENBQUNBLGFBQUwsRUFBb0I7QUFDbEIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBSUEsYUFBYSxDQUFDUDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUFJTyxhQUFhLENBQUNOO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsZ0JBQUlNLGFBQWEsQ0FBQ0w7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0F4QkQ7O0dBQU1KLFM7VUFPV00scUQ7OztBQW1CRk4sd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXRVcy9bZGV2ZWxvcGVyXS4zYjllZjBlZWRmOTY2MDAyY2VkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgZGV2ZWxvcGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRldGFpbHMgPSBbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiAnWWFzaCcsIHJvbGU6ICdTZW5pb3IgRGV2ZWxvcGVyJyB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogJ1ZhaWJoYXYnLCByb2xlOiAnQmFja2VuZCBEZXZlbG9wZXInIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiAnU3VyZXNoJywgcm9sZTogJ0Zyb250ZW5kIERldmVsb3BlcicgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRldmVsb3Blcl9pZCA9IChyb3V0ZXIucXVlcnkuZGV2ZWxvcGVyKTsgLy8gQ29udmVydCB0byBhIG51bWJlclxyXG5cclxuICAvLyBGaW5kIHRoZSBkZXZlbG9wZXIgd2l0aCB0aGUgbWF0Y2hpbmcgSURcclxuICBjb25zdCByZXFfZGV2ZWxvcGVyID0gZGV0YWlscy5maW5kKChkZXYpID0+IGRldi5pZCA9PT0gZGV2ZWxvcGVyX2lkKTtcclxuY29uc29sZS5sb2cocmVxX2RldmVsb3BlcilcclxuICBpZiAoIXJlcV9kZXZlbG9wZXIpIHtcclxuICAgIHJldHVybiA8cD5EZXZlbG9wZXIgbm90IGZvdW5kPC9wPjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD57cmVxX2RldmVsb3Blci5pZH08L3A+XHJcbiAgICAgIDxwPntyZXFfZGV2ZWxvcGVyLm5hbWV9PC9wPlxyXG4gICAgICA8cD57cmVxX2RldmVsb3Blci5yb2xlfTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZXZlbG9wZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=