"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PropertyList = _interopRequireDefault(require("./PropertyList"));

var _PropertySearchBar = _interopRequireDefault(require("./PropertySearchBar"));

var _AddProperty = _interopRequireDefault(require("./AddProperty"));

var _reactRouterDom = require("react-router-dom");

var _AuthHelperMethods = _interopRequireDefault(require("../services/AuthHelperMethods"));

var _FilteredProperty = _interopRequireDefault(require("./FilteredProperty"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var userHelper = new _AuthHelperMethods.default();

var Property = /*#__PURE__*/function (_React$Component) {
  _inherits(Property, _React$Component);

  var _super = _createSuper(Property);

  function Property(props) {
    var _this;

    _classCallCheck(this, Property);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "setFilter", function (dataFromChild) {
      _this.setState({
        filter: dataFromChild
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addProperty", function () {
      return /*#__PURE__*/_react.default.createElement(_AddProperty.default, {
        callbackFromParent: _this.setFilter
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectProperty", function (id) {
      _this.setState({
        propertySelected: id,
        vistaActual: 'property'
      });
    });

    _this.state = {
      isAdmin: false,
      filter: undefined,
      propertySelected: undefined,
      vistaActual: 'property'
    };
    return _this;
  }

  _createClass(Property, [{
    key: "mostrarVista",
    value: function mostrarVista() {
      if (this.state.vistaActual === 'list') return /*#__PURE__*/_react.default.createElement("div", {
        className: "propertyList"
      }, /*#__PURE__*/_react.default.createElement(_PropertySearchBar.default, {
        callbackFromParent: this.setFilter
      }), userHelper.loggedIn() && userHelper.getConfirm().user._id === '5f619db1f5289434c4719141' ? this.addProperty() : '', /*#__PURE__*/_react.default.createElement(_PropertyList.default, {
        value: this.state.filter,
        changeProperty: this.selectProperty
      }));

      if (this.state.vistaActual === 'property') {
        return /*#__PURE__*/_react.default.createElement(_FilteredProperty.default, null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "Property"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "mainView"
      }, this.mostrarVista()));
    }
  }]);

  return Property;
}(_react.default.Component);

var _default = (0, _reactRouterDom.withRouter)(Property);

exports.default = _default;