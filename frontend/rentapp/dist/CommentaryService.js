"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MemeService = /*#__PURE__*/function () {
  function MemeService() {
    _classCallCheck(this, MemeService);
  }

  _createClass(MemeService, null, [{
    key: "getCommentary",
    value: function () {
      var _getCommentary = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, user_name) {
        var options, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  url: process.env.REACT_APP_API_URL + 'api/comments/' + id,
                  method: 'GET',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                  },
                  params: {
                    user_name: user_name
                  }
                };
                _context.prev = 1;
                _context.next = 4;
                return (0, _axios.default)(options);

              case 4:
                response = _context.sent;

                if (!response.data.result) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", response.data);

              case 9:
                this.ultimoError = response.data.message;
                return _context.abrupt("return", null);

              case 11:
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](1);
                this.ultimoError = _context.t0;
                return _context.abrupt("return", null);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 13]]);
      }));

      function getCommentary(_x, _x2) {
        return _getCommentary.apply(this, arguments);
      }

      return getCommentary;
    }()
  }]);

  return MemeService;
}();

exports.default = MemeService;

_defineProperty(MemeService, "ultimoError", void 0);