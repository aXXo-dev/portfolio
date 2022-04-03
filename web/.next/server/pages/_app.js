/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ui/Anchor.js":
/*!*********************************!*\
  !*** ./components/ui/Anchor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ A)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction A({ className , children , href  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        className: `cursor-pointer hover:scale-125 transition-all ${className}`,\n        href: href,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/charlessanchez/Documents/Github/portfolio/web/components/ui/Anchor.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL0FuY2hvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsUUFBUSxDQUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFFBQVEsR0FBRUMsSUFBSSxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hELE1BQU0sNkVBQ0hDLENBQUM7UUFDQUgsU0FBUyxHQUFHLDhDQUE4QyxFQUFFQSxTQUFTO1FBQ3JFRSxJQUFJLEVBQUVBLElBQUk7a0JBRVRELFFBQVE7Ozs7OztBQUdmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9jb21wb25lbnRzL3VpL0FuY2hvci5qcz8wMDQ1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEEoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBocmVmIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTI1IHRyYW5zaXRpb24tYWxsICR7Y2xhc3NOYW1lfWB9XG4gICAgICBocmVmPXtocmVmfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/Anchor.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var _components_ui_Anchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ui/Anchor */ \"./components/ui/Anchor.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const { 0: overlay , 1: setOverlay  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        localStorage.setItem(\"transition\", false);\n        setOverlay(document.getElementById(\"overlay\"));\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimateSharedLayout, {\n        children: [\n            overlay && /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex flex-col text-center h-screen justify-center items-center gap-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Anchor__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"text-5xl\",\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/charlessanchez/Documents/Github/portfolio/web/pages/_app.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Anchor__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"text-5xl\",\n                        href: \"/blog\",\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"/Users/charlessanchez/Documents/Github/portfolio/web/pages/_app.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Anchor__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"text-5xl\",\n                        href: \"/contact\",\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/charlessanchez/Documents/Github/portfolio/web/pages/_app.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/charlessanchez/Documents/Github/portfolio/web/pages/_app.js\",\n                lineNumber: 21,\n                columnNumber: 11\n            }, this), overlay),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/charlessanchez/Documents/Github/portfolio/web/pages/_app.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/charlessanchez/Documents/Github/portfolio/web/pages/_app.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUVZO0FBQ0g7QUFDVztBQUVaO0FBRXhCLFFBQVEsQ0FBQ0ssS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkQsS0FBSyxNQUFFQyxPQUFPLE1BQUVDLFVBQVUsTUFBSVQsK0NBQVE7SUFFdENDLGdEQUFTLEtBQU8sQ0FBQztRQUNmUyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFZLGFBQUUsS0FBSztRQUN4Q0YsVUFBVSxDQUFDRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxDQUFTO0lBQzlDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLDZFQUNIViw4REFBbUI7O1lBQ2pCSyxPQUFPLGtCQUNOTix1REFBWSw2RUFDVFksQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXNFOztnR0FDbEZYLDZEQUFDO3dCQUFDVyxTQUFTLEVBQUMsQ0FBVTt3QkFBQ0MsSUFBSSxFQUFDLENBQUc7a0NBQUMsQ0FFakM7Ozs7OztnR0FDQ1osNkRBQUM7d0JBQUNXLFNBQVMsRUFBQyxDQUFVO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTztrQ0FBQyxDQUVyQzs7Ozs7O2dHQUNDWiw2REFBQzt3QkFBQ1csU0FBUyxFQUFDLENBQVU7d0JBQUNDLElBQUksRUFBQyxDQUFVO2tDQUFDLENBRXhDOzs7Ozs7Ozs7OztzQkFFRlIsT0FBTzt3RkFFVkYsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuc2Nzc1wiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBBbmltYXRlU2hhcmVkTGF5b3V0IH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuaW1wb3J0IEEgZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvQW5jaG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbb3ZlcmxheSwgc2V0T3ZlcmxheV0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0cmFuc2l0aW9uXCIsIGZhbHNlKTtcbiAgICBzZXRPdmVybGF5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3ZlcmxheVwiKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxBbmltYXRlU2hhcmVkTGF5b3V0PlxuICAgICAge292ZXJsYXkgJiZcbiAgICAgICAgY3JlYXRlUG9ydGFsKFxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWNlbnRlciBoLXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTVcIj5cbiAgICAgICAgICAgIDxBIGNsYXNzTmFtZT1cInRleHQtNXhsXCIgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9BPlxuICAgICAgICAgICAgPEEgY2xhc3NOYW1lPVwidGV4dC01eGxcIiBocmVmPVwiL2Jsb2dcIj5cbiAgICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgICAgPC9BPlxuICAgICAgICAgICAgPEEgY2xhc3NOYW1lPVwidGV4dC01eGxcIiBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgPC9BPlxuICAgICAgICAgIDwvbmF2PixcbiAgICAgICAgICBvdmVybGF5XG4gICAgICAgICl9XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BbmltYXRlU2hhcmVkTGF5b3V0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY3JlYXRlUG9ydGFsIiwiQW5pbWF0ZVNoYXJlZExheW91dCIsIkEiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm92ZXJsYXkiLCJzZXRPdmVybGF5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJuYXYiLCJjbGFzc05hbWUiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();