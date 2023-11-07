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
  var developer_id = parseInt(router.query.developer); // Convert to a number
  // Find the developer with the matching ID

  var req_developer = details.fi(function (dev) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXRVcy9bZGV2ZWxvcGVyXS5qcyJdLCJuYW1lcyI6WyJkZXZlbG9wZXIiLCJkZXRhaWxzIiwiaWQiLCJuYW1lIiwicm9sZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRldmVsb3Blcl9pZCIsInBhcnNlSW50IiwicXVlcnkiLCJyZXFfZGV2ZWxvcGVyIiwiZmkiLCJkZXYiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxNQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFJLEVBQUUsTUFBZjtBQUF1QkMsUUFBSSxFQUFFO0FBQTdCLEdBRGMsRUFFZDtBQUFFRixNQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFJLEVBQUUsU0FBZjtBQUEwQkMsUUFBSSxFQUFFO0FBQWhDLEdBRmMsRUFHZDtBQUFFRixNQUFFLEVBQUUsQ0FBTjtBQUFTQyxRQUFJLEVBQUUsUUFBZjtBQUF5QkMsUUFBSSxFQUFFO0FBQS9CLEdBSGMsQ0FBaEI7QUFNQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhVCxTQUFkLENBQTdCLENBUnNCLENBUWlDO0FBRXZEOztBQUNBLE1BQU1VLGFBQWEsR0FBR1QsT0FBTyxDQUFDVSxFQUFSLENBQVcsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ1YsRUFBSixLQUFXSyxZQUFwQjtBQUFBLEdBQVgsQ0FBdEI7QUFDRk0sU0FBTyxDQUFDQyxHQUFSLENBQVlKLGFBQVo7O0FBQ0UsTUFBSSxDQUFDQSxhQUFMLEVBQW9CO0FBQ2xCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUlBLGFBQWEsQ0FBQ1I7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBSVEsYUFBYSxDQUFDUDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFBLGdCQUFJTyxhQUFhLENBQUNOO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU9ELENBeEJEOztHQUFNSixTO1VBT1dNLHFEOzs7QUFtQkZOLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0VXMvW2RldmVsb3Blcl0uOWU3N2QxNTE0MWI2NWYyMjFlMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IGRldmVsb3BlciA9ICgpID0+IHtcclxuICBjb25zdCBkZXRhaWxzID0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogJ1lhc2gnLCByb2xlOiAnU2VuaW9yIERldmVsb3BlcicgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6ICdWYWliaGF2Jywgcm9sZTogJ0JhY2tlbmQgRGV2ZWxvcGVyJyB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogJ1N1cmVzaCcsIHJvbGU6ICdGcm9udGVuZCBEZXZlbG9wZXInIH1cclxuICBdO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkZXZlbG9wZXJfaWQgPSBwYXJzZUludChyb3V0ZXIucXVlcnkuZGV2ZWxvcGVyKTsgLy8gQ29udmVydCB0byBhIG51bWJlclxyXG5cclxuICAvLyBGaW5kIHRoZSBkZXZlbG9wZXIgd2l0aCB0aGUgbWF0Y2hpbmcgSURcclxuICBjb25zdCByZXFfZGV2ZWxvcGVyID0gZGV0YWlscy5maSgoZGV2KSA9PiBkZXYuaWQgPT09IGRldmVsb3Blcl9pZCk7XHJcbmNvbnNvbGUubG9nKHJlcV9kZXZlbG9wZXIpXHJcbiAgaWYgKCFyZXFfZGV2ZWxvcGVyKSB7XHJcbiAgICByZXR1cm4gPHA+RGV2ZWxvcGVyIG5vdCBmb3VuZDwvcD47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+e3JlcV9kZXZlbG9wZXIuaWR9PC9wPlxyXG4gICAgICA8cD57cmVxX2RldmVsb3Blci5uYW1lfTwvcD5cclxuICAgICAgPHA+e3JlcV9kZXZlbG9wZXIucm9sZX08L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGV2ZWxvcGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9