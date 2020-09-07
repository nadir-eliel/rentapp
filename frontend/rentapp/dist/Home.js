"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BuildingList = _interopRequireDefault(require("./BuildingList"));

var _Searchbar = _interopRequireDefault(require("./Searchbar"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  var _useRouteMatch = (0, _reactRouterDom.useRouteMatch)(),
      path = _useRouteMatch.path,
      url = _useRouteMatch.url;

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: path
  }, /*#__PURE__*/_react.default.createElement(_Searchbar.default, null), /*#__PURE__*/_react.default.createElement(_BuildingList.default, null))));
}

var _default = (0, _reactRouterDom.withRouter)(Home);

exports.default = _default;