"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var CommentaryCard = /*#__PURE__*/function (_Component) {
  _inherits(CommentaryCard, _Component);

  var _super = _createSuper(CommentaryCard);

  function CommentaryCard(props) {
    var _this;

    _classCallCheck(this, CommentaryCard);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  _createClass(CommentaryCard, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("article", {
        className: "media"
      }, /*#__PURE__*/_react.default.createElement("figure", {
        className: "media-left"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "image is-64x64"
      }, /*#__PURE__*/_react.default.createElement("img", {
        src: "data:image/png;base64,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",
        alt: "Avatar"
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "media-content"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "content"
      }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, this.props.user), /*#__PURE__*/_react.default.createElement("br", null), moment, this.props.text)), /*#__PURE__*/_react.default.createElement("div", {
        className: "comment"
      }, this.props.comment)));
    }
  }]);

  return CommentaryCard;
}(_react.Component);

exports.default = CommentaryCard;