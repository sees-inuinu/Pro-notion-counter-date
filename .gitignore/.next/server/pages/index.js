"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n    const { 0: days , 1: setDays  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/days\").then((res)=>res.json()\n        ).then((data)=>{\n            setDays(data.days);\n            setTitle(data.title);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        style: {\n            backgroundColor: \"#1a1a1a\",\n            color: \"#ffffff\",\n            fontFamily: \"'Orbitron', sans-serif\",\n            padding: \"10px\",\n            borderRadius: \"10px\",\n            textAlign: \"center\",\n            width: \"300px\",\n            margin: \"20px auto\",\n            boxShadow: \"0 0 20px rgba(255,255,255,0.1)\",\n            letterSpacing: \"2px\"\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\4423g\\\\Downloads\\\\notion-counter-widget\\\\pages\\\\index.js\",\n            lineNumber: 17,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    fontSize: \"1.2rem\",\n                    marginBottom: \"10px\",\n                    fontWeight: \"bold\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\4423g\\\\Downloads\\\\notion-counter-widget\\\\pages\\\\index.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                style: {\n                    fontSize: \"3rem\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\4423g\\\\Downloads\\\\notion-counter-widget\\\\pages\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: days !== null ? `${days} DAYS` : \"Loading...\"\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFFNUIsUUFBUSxDQUFDRSxJQUFJLEdBQUcsQ0FBQztJQUM5QixLQUFLLE1BQUVDLElBQUksTUFBRUMsT0FBTyxNQUFJSCwrQ0FBUSxDQUFDLElBQUk7SUFDckMsS0FBSyxNQUFFSSxLQUFLLE1BQUVDLFFBQVEsTUFBSUwsK0NBQVEsQ0FBQyxDQUFFO0lBRXJDRCxnREFBUyxLQUFPLENBQUM7UUFDZk8sS0FBSyxDQUFDLENBQVcsWUFDZEMsSUFBSSxFQUFFQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSTtVQUN0QkYsSUFBSSxFQUFFRyxJQUFJLEdBQUssQ0FBQztZQUNmUCxPQUFPLENBQUNPLElBQUksQ0FBQ1IsSUFBSTtZQUNqQkcsUUFBUSxDQUFDSyxJQUFJLENBQUNOLEtBQUs7UUFDckIsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLHVFQUNITyxDQUFHO1FBQ0ZDLEtBQUssRUFBRSxDQUFDO1lBQ05DLGVBQWUsRUFBRSxDQUFTO1lBQzFCQyxLQUFLLEVBQUUsQ0FBUztZQUNoQkMsVUFBVSxFQUFFLENBQXdCO1lBQ3BDQyxPQUFPLEVBQUUsQ0FBTTtZQUNmQyxZQUFZLEVBQUUsQ0FBTTtZQUNwQkMsU0FBUyxFQUFFLENBQVE7WUFDbkJDLEtBQUssRUFBRSxDQUFPO1lBQ2RDLE1BQU0sRUFBRSxDQUFXO1lBQ25CQyxTQUFTLEVBQUUsQ0FBZ0M7WUFDM0NDLGFBQWEsRUFBRSxDQUFLO1FBQ3RCLENBQUM7Ozs7Ozs7O2lGQUVBWCxDQUFHO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQztvQkFBQ1csUUFBUSxFQUFFLENBQVE7b0JBQUVDLFlBQVksRUFBRSxDQUFNO29CQUFFQyxVQUFVLEVBQUUsQ0FBTTtnQkFBQyxDQUFDOzs7Ozs7OzBCQUN6RXJCLEtBQUs7O2lGQUVQTyxDQUFHO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQztvQkFBQ1csUUFBUSxFQUFFLENBQU07Z0JBQUMsQ0FBQzs7Ozs7OzswQkFDN0JyQixJQUFJLEtBQUssSUFBSSxNQUFNQSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQVk7Ozs7QUFJdEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbi1jb3VudGVyLXdpZGdldC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiL2FwaS9kYXlzXCIpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0RGF5cyhkYXRhLmRheXMpO1xuICAgICAgICBzZXRUaXRsZShkYXRhLnRpdGxlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzFhMWExYVwiLFxuICAgICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiJ09yYml0cm9uJywgc2Fucy1zZXJpZlwiLFxuICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICB3aWR0aDogXCIzMDBweFwiLFxuICAgICAgICBtYXJnaW46IFwiMjBweCBhdXRvXCIsXG4gICAgICAgIGJveFNoYWRvdzogXCIwIDAgMjBweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSlcIixcbiAgICAgICAgbGV0dGVyU3BhY2luZzogXCIycHhcIlxuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjEuMnJlbVwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiBcIjNyZW1cIiB9fT5cbiAgICAgICAge2RheXMgIT09IG51bGwgPyBgJHtkYXlzfSBEQVlTYCA6IFwiTG9hZGluZy4uLlwifVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSG9tZSIsImRheXMiLCJzZXREYXlzIiwidGl0bGUiLCJzZXRUaXRsZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwid2lkdGgiLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJmb250V2VpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();