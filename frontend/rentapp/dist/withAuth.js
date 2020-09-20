"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withAuth;

var _react = _interopRequireWildcard(require("react"));

var _AuthHelperMethods = _interopRequireDefault(require("./AuthHelperMethods"));

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

/* A higher order component is frequently written as a function that returns a class. */
function withAuth(AuthComponent) {
  var _temp;

  var Auth = new _AuthHelperMethods.default();
  return _temp = /*#__PURE__*/function (_Component) {
    _inherits(AuthWrapped, _Component);

    var _super = _createSuper(AuthWrapped);

    function AuthWrapped() {
      var _this;

      _classCallCheck(this, AuthWrapped);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {
        confirm: null,
        loaded: false
      });

      return _this;
    }

    _createClass(AuthWrapped, [{
      key: "componentWillMount",

      /* In the componentDid<ount, we would want to do a couple of important tasks in order to verify the current users authentication status
          prior to granting them enterance into the app. */
      value: function componentWillMount() {
        if (!Auth.loggedIn()) {
          this.props.history.replace('/login');
        } else {
          /* Try to get confirmation message from the Auth helper. */
          try {
            var confirm = Auth.getConfirm();
            console.log('confirmation is:', confirm);
            this.setState({
              confirm: confirm,
              loaded: true
            });
          } catch (err) {
            /* Oh snap! Looks like there's an error so we'll print it out and log the user out for security reasons. */
            console.log(err);
            Auth.logout();
            this.props.history.replace('/login');
          }
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.loaded == true) {
          if (this.state.confirm) {
            console.log('confirmed!');
            return (
              /*#__PURE__*/

              /* component that is currently being wrapper(App.js) */
              _react.default.createElement(AuthComponent, {
                history: this.props.history,
                confirm: this.state.confirm
              })
            );
          } else {
            console.log('not confirmed!');
            return null;
          }
        } else {
          return null;
        }
      }
    }]);

    return AuthWrapped;
  }(_react.Component), _temp;
}