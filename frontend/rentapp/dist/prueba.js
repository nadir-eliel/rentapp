"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../components/Users.css");

var _reactRouterDom = require("react-router-dom");

var _axios = _interopRequireDefault(require("axios"));

var _md = _interopRequireDefault(require("md5"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var baseUrl = "http://localhost:3001/users";

function Users(props) {
  var _useState = (0, _react.useState)({
    user_name: "",
    password: "",
    successMessage: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return setState(_objectSpread(_objectSpread({}, state), {}, _defineProperty({}, event.target.name, event.target.value)));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var login = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              _context2.next = 3;
              return _axios.default.get(baseUrl, {
                params: {
                  user_name: state.user_name,
                  password: (0, _md.default)(state.password)
                }
              }).then(function (response) {
                return response.data;
              })
              /* .then(response=>{
               if(response.length>0){
                 redirectToHome();
               }})*/
              .then(function (response) {
                console.log(response); //if (response.status===200){

                if (response.length > 0) {
                  setState(function (prevState) {
                    return _objectSpread(_objectSpread({}, prevState), {}, {
                      'successMessage': 'Login successful. Redirecting to home page..'
                    });
                  }); //localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);

                  redirectToHome();
                  props.showError(null);
                } else if (response.code === 204) {
                  props.showError("Username and password do not match");
                } else {
                  props.showError("Username does not exists");
                }
              }).catch(function (error) {
                console.log(error);
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function login(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var redirectToHome = function redirectToHome() {
    props.history.push('/signin');
    props.updateTitle('Signin');
  };

  var redirectToRegister = function redirectToRegister() {
    props.history.push('/signin');
    props.updateTitle('Signin');
  };

  return /*#__PURE__*/_react.default.createElement(_core.Container, null, /*#__PURE__*/_react.default.createElement(_core.FormControl, null, /*#__PURE__*/_react.default.createElement(_core.Imputlabel, {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/_react.default.createElement(_core.Imput, {
    id: "email",
    type: "email",
    "arai-describedby": "email-helper"
  }), /*#__PURE__*/_react.default.createElement(FormaHelperText, {
    id: "email-helper"
  }, " Tu email Personal (no empresarial)")), /*#__PURE__*/_react.default.createElement(_core.FormControl, null, /*#__PURE__*/_react.default.createElement(_core.Imputlabel, {
    htmlFor: "pwd"
  }, "Password"), /*#__PURE__*/_react.default.createElement(_core.Imput, {
    id: "pwd",
    type: "password",
    "arai-describedby": "password-helper"
  }), /*#__PURE__*/_react.default.createElement(FormaHelperText, {
    id: "password-helper"
  }, " Entre 8 y 16 caracteres")))
  /*
  
        
     <div className="containerUsers">
        <div className="containerUsersSecundario">
        <div className="form-group">
          <label>Usuario: </label>
          <br />
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            name="user_name"
            onChange={handleChange}
          />
          <br />
          <label>Contraseña: </label>
          <br />
          <input type="password" 
                placeholder="Password"
                className="form-control" 
                name="password" 
                onChange={handleChange}
                  />
  
           <br />
          <button className="btn btn-primary" onClick={ login}>Iniciar Sesión</button>
        </div>
       
        <div className="registerMessage">
                  <span>¿No tengo una cuenta? </span>
                  <span className="loginText"  onClick={ redirectToRegister}>Registrese</span> 
                
              </div>
      </div>
    </div>*/
  ;
}

var _default = (0, _reactRouterDom.withRouter)(Users);

exports.default = _default;