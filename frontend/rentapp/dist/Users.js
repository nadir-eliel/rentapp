"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../styles/Users.css");

var _AccountCircle = _interopRequireDefault(require("@material-ui/icons/AccountCircle"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _isAuthenticated = _interopRequireDefault(require("../lib/isAuthenticated"));

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _AuthHelperMethods = _interopRequireDefault(require("../services/AuthHelperMethods"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var useStyles = function useStyles(theme) {
  return {
    root: {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap'
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 400
    }
  };
};

var Users = /*#__PURE__*/function (_Component) {
  _inherits(Users, _Component);

  var _super = _createSuper(Users);

  function Users() {
    var _this;

    _classCallCheck(this, Users);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "Auth", new _AuthHelperMethods.default());

    _defineProperty(_assertThisInitialized(_this), "state", {
      loggedin: (0, _isAuthenticated.default)(),
      user_name: '',
      password: '',
      successMessage: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleFormSubmit", function (e) {
      e.preventDefault();
      /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */

      _this.Auth.login(_this.state.user_name, _this.state.password).then(function (res) {
        if (res === false) {
          return alert("Sorry those credentials don't exist!");
        }

        _this.props.history.replace('/');
      }).catch(function (err) {
        alert(err);
      });
    });

    return _this;
  }

  _createClass(Users, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      /* Here is a great place to redirect someone who is already logged in to the protected route */
      if (this.Auth.loggedIn()) this.props.history.replace('/');
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state = this.state,
          user_name = _this$state.user_name,
          password = _this$state.password,
          successMessage = _this$state.successMessage;

      if (this.state.loggedin && this.state.loggedin !== '') {
        return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
          to: {
            pathname: '/'
          }
        });
      } else {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: classes.root
        }, /*#__PURE__*/_react.default.createElement("form", {
          className: classes.paper
        }, successMessage !== '' && /*#__PURE__*/_react.default.createElement("div", {
          className: "alert alert-warning alert-dismissible",
          role: "alert"
        }, successMessage), /*#__PURE__*/_react.default.createElement(_Paper.default, {
          className: classes.paper
        }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
          container: true,
          spacing: 4,
          justify: "center"
        }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
          container: true,
          direction: "column",
          justify: "center",
          alignItems: "center",
          item: true,
          md: 12
        }, /*#__PURE__*/_react.default.createElement(_core.FormControl, null, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
          htmlFor: "input-with-icon-adornment"
        }, "Usuario:"), /*#__PURE__*/_react.default.createElement(_core.Input, {
          id: "input-with-icon-adornment",
          name: "user_name",
          type: "usuario",
          "arai-describedby": "usuario-helper",
          value: user_name,
          onChange: this.onChange,
          startAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, {
            position: "start"
          }, /*#__PURE__*/_react.default.createElement(_AccountCircle.default, null))
        }), /*#__PURE__*/_react.default.createElement(_core.FormHelperText, {
          id: "usuario-helper"
        }, "Ingrese su nombre de Usuario"))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
          container: true,
          direction: "column",
          justify: "center",
          alignItems: "center",
          item: true,
          md: 12
        }, /*#__PURE__*/_react.default.createElement(_core.FormControl, null, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
          htmlFor: "pwd"
        }, "Password"), /*#__PURE__*/_react.default.createElement(_core.Input, {
          name: "password",
          type: "password",
          "arai-describedby": "password-helper",
          value: password,
          onChange: this.onChange
        }), /*#__PURE__*/_react.default.createElement(_core.FormHelperText, {
          id: "password-helper"
        }, "Ingrese su Password"))), /*#__PURE__*/_react.default.createElement(_core.Grid, {
          container: true,
          direction: "column",
          justify: "center",
          alignItems: "center",
          item: true,
          md: 12
        }, /*#__PURE__*/_react.default.createElement(_core.Button, {
          variant: "contained",
          color: "primary",
          onClick: this.handleFormSubmit
        }, "Iniciar Sesi\xF3n"))), /*#__PURE__*/_react.default.createElement("div", {
          className: "registerMessage"
        }, /*#__PURE__*/_react.default.createElement("span", null, "\xBFNo tengo una cuenta? "), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
          to: "/signin"
        }, "Registrate"), ";"))));
      }
    }
  }]);

  return Users;
}(_react.Component);

var _default = (0, _styles.withStyles)(useStyles, {
  withTheme: true
})(Users);

exports.default = _default;