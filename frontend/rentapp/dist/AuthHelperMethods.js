"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AuthHelperMethods = function AuthHelperMethods() {
  var _this = this;

  _classCallCheck(this, AuthHelperMethods);

  _defineProperty(this, "login", function (user_name, password) {
    // Get a token from api server using the fetch api
    //.post(process.env.REACT_APP_API_URL + 'api/users',
    return _this.fetch('http://localhost:4000/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        user_name: user_name,
        password: password
      })
    }).then(function (res) {
      _this.setToken(res.token); // Setting the token in localStorage


      return Promise.resolve(res);
    });
  });

  _defineProperty(this, "loggedIn", function () {
    // Checks if there is a saved token and it's still valid
    var token = _this.getToken(); // Getting token from localstorage


    return !!token && !_this.isTokenExpired(token); // handwaiving here
  });

  _defineProperty(this, "isTokenExpired", function (token) {
    try {
      var decoded = (0, _jwtDecode.default)(token);

      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired.
        return true;
      } else return false;
    } catch (err) {
      console.log('expired check failed! Line 42: AuthService.js');
      return false;
    }
  });

  _defineProperty(this, "setToken", function (idToken) {
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  });

  _defineProperty(this, "getToken", function () {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  });

  _defineProperty(this, "logout", function () {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
  });

  _defineProperty(this, "getConfirm", function () {
    // Using jwt-decode npm package to decode the token
    var answer = (0, _jwtDecode.default)(_this.getToken());
    console.log('Recieved answer!');
    return answer;
  });

  _defineProperty(this, "fetch", function (url, options) {
    // performs api calls sending the required authentication headers
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }; // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx

    if (_this.loggedIn()) {
      headers['Authorization'] = 'Bearer ' + _this.getToken();
    }

    return fetch(url, _objectSpread({
      headers: headers
    }, options)).then(_this._checkStatus).then(function (response) {
      return response.json();
    });
  });

  _defineProperty(this, "_checkStatus", function (response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  });
};

exports.default = AuthHelperMethods;