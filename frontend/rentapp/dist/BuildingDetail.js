"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BuildingDetail() {
  var _useRouteMatch = useRouteMatch(),
      path = _useRouteMatch.path,
      url = _useRouteMatch.url;

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Hola buildinfdetail"));
}

var _default = BuildingDetail;
exports.default = _default;