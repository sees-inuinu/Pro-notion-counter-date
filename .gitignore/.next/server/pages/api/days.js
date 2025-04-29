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
exports.id = "pages/api/days";
exports.ids = ["pages/api/days"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "./pages/api/days.js":
/*!***************************!*\
  !*** ./pages/api/days.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: process.env.NOTION_TOKEN\n});\nasync function handler(req, res) {\n    try {\n        var ref;\n        const databaseId = process.env.NOTION_DATABASE_ID;\n        const response = await notion.databases.query({\n            database_id: databaseId,\n            page_size: 1,\n            sorts: [\n                {\n                    property: \"日付\",\n                    direction: \"ascending\"\n                }\n            ]\n        });\n        // データベースに結果がない場合\n        if (!response.results.length) {\n            return res.status(404).json({\n                error: \"No pages found\"\n            });\n        }\n        const page = response.results[0];\n        const startDate = page.properties[\"日付\"].date.start;\n        const title = ((ref = page.properties[\"名前\"].title[0]) === null || ref === void 0 ? void 0 : ref.plain_text) || \"タイトルなし\";\n        const start = new Date(startDate);\n        const now = new Date();\n        // 「未来まであと何日」＝ (start - now)\n        const diffDays = Math.ceil((start - now) / (1000 * 60 * 60 * 24));\n        const remainingDays = diffDays > 0 ? diffDays : 0;\n        res.status(200).json({\n            days: remainingDays,\n            title\n        });\n    } catch (error) {\n        console.error(\"Error fetching data from Notion:\", error);\n        res.status(500).json({\n            error: \"Internal Server Error\"\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZGF5cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFFekMsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDRCxvREFBTSxDQUFDLENBQUM7SUFBQ0UsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWTtBQUFDLENBQUM7QUFFN0MsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxDQUFDO1lBZVdDLEdBQThCO1FBZDVDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sa0JBQWtCO1FBQ2pELEtBQUssQ0FBQ0MsUUFBUSxHQUFHLEtBQUssQ0FBQ1gsTUFBTSxDQUFDWSxTQUFTLENBQUNDLEtBQUssQ0FBQyxDQUFDO1lBQzdDQyxXQUFXLEVBQUVMLFVBQVU7WUFDdkJNLFNBQVMsRUFBRSxDQUFDO1lBQ1pDLEtBQUssRUFBRSxDQUFDO2dCQUFBLENBQUM7b0JBQUNDLFFBQVEsRUFBRSxDQUFRO29CQUFFQyxTQUFTLEVBQUUsQ0FBVztnQkFBQyxDQUFDO1lBQUEsQ0FBQztRQUN6RCxDQUFDO1FBRUQsRUFBNkM7UUFDN0MsRUFBRSxHQUFHUCxRQUFRLENBQUNRLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFLENBQUM7WUFDN0IsTUFBTSxDQUFDYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUFDQyxLQUFLLEVBQUUsQ0FBZ0I7WUFBQyxDQUFDO1FBQ3pELENBQUM7UUFFRCxLQUFLLENBQUNmLElBQUksR0FBR0csUUFBUSxDQUFDUSxPQUFPLENBQUMsQ0FBQztRQUMvQixLQUFLLENBQUNLLFNBQVMsR0FBR2hCLElBQUksQ0FBQ2lCLFVBQVUsQ0FBQyxDQUFRLFNBQUVDLElBQUksQ0FBQ0M7UUFDakQsS0FBSyxDQUFDQyxLQUFLLEtBQUdwQixHQUFrQyxHQUFsQ0EsSUFBSSxDQUFDaUIsVUFBVSxDQUFDLENBQVEsU0FBRUcsS0FBSyxDQUFDLENBQUMsZUFBakNwQixHQUFrQyxLQUFsQ0EsSUFBSSxDQUFKQSxDQUE4QyxHQUE5Q0EsSUFBSSxDQUFKQSxDQUE4QyxHQUE5Q0EsR0FBa0MsQ0FBRXFCLFVBQVUsS0FBSSxDQUFRO1FBRXhELEtBQVgsQ0FBQ0YsS0FBSyxHQUFHLEdBQUcsQ0FBQ0csSUFBSSxDQUFDTixTQUFTO1FBQ2hDLEtBQUssQ0FBQ08sR0FBRyxHQUFHLEdBQUcsQ0FBQ0QsSUFBSTtRQUVwQixFQUE0QjtRQUM1QixLQUFLLENBQUNFLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxJQUFJLEVBQUVQLEtBQUssR0FBR0ksR0FBRyxLQUFLLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7UUFDL0QsS0FBSyxDQUFDSSxhQUFhLEdBQUdILFFBQVEsR0FBRyxDQUFDLEdBQUdBLFFBQVEsR0FBRyxDQUFDO1FBRWpEekIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDYyxJQUFJLEVBQUVELGFBQWE7WUFBRVAsS0FBSztRQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLEtBQUssRUFBRUwsS0FBSyxFQUFFLENBQUM7UUFDZmMsT0FBTyxDQUFDZCxLQUFLLENBQUMsQ0FBa0MsbUNBQUVBLEtBQUs7UUFDdkRoQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEtBQUssRUFBRSxDQUF1QjtRQUFDLENBQUM7SUFDekQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rpb24tY291bnRlci13aWRnZXQvLi9wYWdlcy9hcGkvZGF5cy5qcz8yMjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gXCJAbm90aW9uaHEvY2xpZW50XCI7XG5cbmNvbnN0IG5vdGlvbiA9IG5ldyBDbGllbnQoeyBhdXRoOiBwcm9jZXNzLmVudi5OT1RJT05fVE9LRU4gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhYmFzZUlkID0gcHJvY2Vzcy5lbnYuTk9USU9OX0RBVEFCQVNFX0lEO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbm90aW9uLmRhdGFiYXNlcy5xdWVyeSh7XG4gICAgICBkYXRhYmFzZV9pZDogZGF0YWJhc2VJZCxcbiAgICAgIHBhZ2Vfc2l6ZTogMSxcbiAgICAgIHNvcnRzOiBbeyBwcm9wZXJ0eTogXCLml6Xku5hcIiwgZGlyZWN0aW9uOiBcImFzY2VuZGluZ1wiIH1dLFxuICAgIH0pO1xuXG4gICAgLy8g44OH44O844K/44OZ44O844K544Gr57WQ5p6c44GM44Gq44GE5aC05ZCIXG4gICAgaWYgKCFyZXNwb25zZS5yZXN1bHRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6IFwiTm8gcGFnZXMgZm91bmRcIiB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBwYWdlID0gcmVzcG9uc2UucmVzdWx0c1swXTtcbiAgICBjb25zdCBzdGFydERhdGUgPSBwYWdlLnByb3BlcnRpZXNbXCLml6Xku5hcIl0uZGF0ZS5zdGFydDtcbiAgICBjb25zdCB0aXRsZSA9IHBhZ2UucHJvcGVydGllc1tcIuWQjeWJjVwiXS50aXRsZVswXT8ucGxhaW5fdGV4dCB8fCBcIuOCv+OCpOODiOODq+OBquOBl1wiO1xuXG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgICAvLyDjgIzmnKrmnaXjgb7jgafjgYLjgajkvZXml6XjgI3vvJ0gKHN0YXJ0IC0gbm93KVxuICAgIGNvbnN0IGRpZmZEYXlzID0gTWF0aC5jZWlsKChzdGFydCAtIG5vdykgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIGNvbnN0IHJlbWFpbmluZ0RheXMgPSBkaWZmRGF5cyA+IDAgPyBkaWZmRGF5cyA6IDA7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGRheXM6IHJlbWFpbmluZ0RheXMsIHRpdGxlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhIGZyb20gTm90aW9uOlwiLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNsaWVudCIsIm5vdGlvbiIsImF1dGgiLCJwcm9jZXNzIiwiZW52IiwiTk9USU9OX1RPS0VOIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInBhZ2UiLCJkYXRhYmFzZUlkIiwiTk9USU9OX0RBVEFCQVNFX0lEIiwicmVzcG9uc2UiLCJkYXRhYmFzZXMiLCJxdWVyeSIsImRhdGFiYXNlX2lkIiwicGFnZV9zaXplIiwic29ydHMiLCJwcm9wZXJ0eSIsImRpcmVjdGlvbiIsInJlc3VsdHMiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJzdGFydERhdGUiLCJwcm9wZXJ0aWVzIiwiZGF0ZSIsInN0YXJ0IiwidGl0bGUiLCJwbGFpbl90ZXh0IiwiRGF0ZSIsIm5vdyIsImRpZmZEYXlzIiwiTWF0aCIsImNlaWwiLCJyZW1haW5pbmdEYXlzIiwiZGF5cyIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/days.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/days.js"));
module.exports = __webpack_exports__;

})();