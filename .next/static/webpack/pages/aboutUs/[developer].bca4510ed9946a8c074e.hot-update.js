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

  var req_developer = details.find(function (dev) {
    return dev.id === developer_id;
  });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWJvdXRVcy9bZGV2ZWxvcGVyXS5qcyJdLCJuYW1lcyI6WyJkZXZlbG9wZXIiLCJkZXRhaWxzIiwiaWQiLCJuYW1lIiwicm9sZSIsInJvdXRlciIsInVzZVJvdXRlciIsImRldmVsb3Blcl9pZCIsInBhcnNlSW50IiwicXVlcnkiLCJyZXFfZGV2ZWxvcGVyIiwiZmluZCIsImRldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFBRUMsTUFBRSxFQUFFLENBQU47QUFBU0MsUUFBSSxFQUFFLE1BQWY7QUFBdUJDLFFBQUksRUFBRTtBQUE3QixHQURjLEVBRWQ7QUFBRUYsTUFBRSxFQUFFLENBQU47QUFBU0MsUUFBSSxFQUFFLFNBQWY7QUFBMEJDLFFBQUksRUFBRTtBQUFoQyxHQUZjLEVBR2Q7QUFBRUYsTUFBRSxFQUFFLENBQU47QUFBU0MsUUFBSSxFQUFFLFFBQWY7QUFBeUJDLFFBQUksRUFBRTtBQUEvQixHQUhjLENBQWhCO0FBTUEsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLFlBQVksR0FBR0MsUUFBUSxDQUFDSCxNQUFNLENBQUNJLEtBQVAsQ0FBYVQsU0FBZCxDQUE3QixDQVJzQixDQVFpQztBQUV2RDs7QUFDQSxNQUFNVSxhQUFhLEdBQUdULE9BQU8sQ0FBQ1UsSUFBUixDQUFhLFVBQUNDLEdBQUQ7QUFBQSxXQUFTQSxHQUFHLENBQUNWLEVBQUosS0FBV0ssWUFBcEI7QUFBQSxHQUFiLENBQXRCOztBQUVBLE1BQUksQ0FBQ0csYUFBTCxFQUFvQjtBQUNsQix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLGdCQUFJQSxhQUFhLENBQUNSO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsZ0JBQUlRLGFBQWEsQ0FBQ1A7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBQSxnQkFBSU8sYUFBYSxDQUFDTjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQXhCRDs7R0FBTUosUztVQU9XTSxxRDs7O0FBbUJGTix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hYm91dFVzL1tkZXZlbG9wZXJdLmJjYTQ1MTBlZDk5NDZhOGMwNzRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBkZXZlbG9wZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGV0YWlscyA9IFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6ICdZYXNoJywgcm9sZTogJ1NlbmlvciBEZXZlbG9wZXInIH0sXHJcbiAgICB7IGlkOiAyLCBuYW1lOiAnVmFpYmhhdicsIHJvbGU6ICdCYWNrZW5kIERldmVsb3BlcicgfSxcclxuICAgIHsgaWQ6IDMsIG5hbWU6ICdTdXJlc2gnLCByb2xlOiAnRnJvbnRlbmQgRGV2ZWxvcGVyJyB9XHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGV2ZWxvcGVyX2lkID0gcGFyc2VJbnQocm91dGVyLnF1ZXJ5LmRldmVsb3Blcik7IC8vIENvbnZlcnQgdG8gYSBudW1iZXJcclxuXHJcbiAgLy8gRmluZCB0aGUgZGV2ZWxvcGVyIHdpdGggdGhlIG1hdGNoaW5nIElEXHJcbiAgY29uc3QgcmVxX2RldmVsb3BlciA9IGRldGFpbHMuZmluZCgoZGV2KSA9PiBkZXYuaWQgPT09IGRldmVsb3Blcl9pZCk7XHJcblxyXG4gIGlmICghcmVxX2RldmVsb3Blcikge1xyXG4gICAgcmV0dXJuIDxwPkRldmVsb3BlciBub3QgZm91bmQ8L3A+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPntyZXFfZGV2ZWxvcGVyLmlkfTwvcD5cclxuICAgICAgPHA+e3JlcV9kZXZlbG9wZXIubmFtZX08L3A+XHJcbiAgICAgIDxwPntyZXFfZGV2ZWxvcGVyLnJvbGV9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRldmVsb3BlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==