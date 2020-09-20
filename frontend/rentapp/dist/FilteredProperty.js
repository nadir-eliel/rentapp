"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CommentaryList = _interopRequireDefault(require("./CommentaryList"));

var _AddCommentaryForm = _interopRequireDefault(require("./AddCommentaryForm"));

var _MapComponent = _interopRequireDefault(require("./MapComponent"));

var _reactRouterDom = require("react-router-dom");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FilteredProperty = /*#__PURE__*/function (_React$Component) {
  _inherits(FilteredProperty, _React$Component);

  var _super = _createSuper(FilteredProperty);

  function FilteredProperty(props) {
    var _this;

    _classCallCheck(this, FilteredProperty);

    _this = _super.call(this, props);
    _this.state = {
      idProperty: undefined
    };
    return _this;
  }

  _createClass(FilteredProperty, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "filtered-content"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "property-content"
      }, /*#__PURE__*/_react.default.createElement(_Card.default, null, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
        style: {
          height: 300
        },
        image: 'http://localhost:4000/storage/imgs/img0.8466566440957268.jpg'
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "commentarylist-content"
      }, /*#__PURE__*/_react.default.createElement(_CommentaryList.default, null)), /*#__PURE__*/_react.default.createElement("div", {
        className: "newcommentary-content"
      }, /*#__PURE__*/_react.default.createElement(_AddCommentaryForm.default, null)), /*#__PURE__*/_react.default.createElement("div", {
        className: "map-content"
      }, /*#__PURE__*/_react.default.createElement(_MapComponent.default, null)), /*#__PURE__*/_react.default.createElement("div", {
        className: "calendary-content"
      }));
    }
  }]);

  return FilteredProperty;
}(_react.default.Component);

var _default = (0, _reactRouterDom.withRouter)(FilteredProperty);

exports.default = _default;