"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActionArea = _interopRequireDefault(require("@material-ui/core/CardActionArea"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Grade = _interopRequireDefault(require("@material-ui/icons/Grade"));

var _Comment = _interopRequireDefault(require("@material-ui/icons/Comment"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Hotel = _interopRequireDefault(require("@material-ui/icons/Hotel"));

var _AttachMoney = _interopRequireDefault(require("@material-ui/icons/AttachMoney"));

var _SimpleRating = _interopRequireDefault(require("./SimpleRating"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _reactRouterDom = require("react-router-dom");

var _Visibility = _interopRequireDefault(require("@material-ui/icons/Visibility"));

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

var PropertyCard = /*#__PURE__*/function (_React$Component) {
  _inherits(PropertyCard, _React$Component);

  var _super = _createSuper(PropertyCard);

  function PropertyCard(props) {
    var _this;

    _classCallCheck(this, PropertyCard);

    _this = _super.call(this, props);
    _this.state = {
      selectedProperty: undefined
    };
    return _this;
  }

  _createClass(PropertyCard, [{
    key: "handleSelectProperty",
    value: function handleSelectProperty(e) {
      this.props.selectProperty(this.props.id);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_Card.default, {
        style: {
          maxWidth: 400,
          padding: 5,
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,
          maxHeight: 380
        }
      }, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
        image: this.props.photo,
        style: {
          height: 160
        }
      }), /*#__PURE__*/_react.default.createElement(_CardContent.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
        variant: "body2",
        color: "textSecondary",
        component: "p"
      }, this.props.other_property_details), /*#__PURE__*/_react.default.createElement("div", {
        fontSize: "small"
      }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
        fontSize: "small",
        "aria-label": "Comentarios"
      }, /*#__PURE__*/_react.default.createElement(_Comment.default, {
        fontSize: "small"
      }), this.props.commentary_count), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
        "aria-label": "Valoracion"
      }, /*#__PURE__*/_react.default.createElement(_Grade.default, {
        fontSize: "small"
      }), this.props.valoration), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
        "aria-label": " Comentarios"
      }, /*#__PURE__*/_react.default.createElement(_Hotel.default, {
        fontSize: "small"
      }), this.props.bedroom_count), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
        "aria-label": " Comentarios"
      }, /*#__PURE__*/_react.default.createElement(_AttachMoney.default, {
        fontSize: "small"
      }), this.props.price)), /*#__PURE__*/_react.default.createElement(_Divider.default, {
        variant: "middle"
      })), /*#__PURE__*/_react.default.createElement(_CardActionArea.default, null, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
        onClick: this.handleSelectProperty.bind(this)
      }, /*#__PURE__*/_react.default.createElement(_Visibility.default, {
        fontSize: "small"
      }))));
    }
  }]);

  return PropertyCard;
}(_react.default.Component);

var _default = (0, _reactRouterDom.withRouter)(PropertyCard);

exports.default = _default;