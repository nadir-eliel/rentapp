"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _reactRouterDom = require("react-router-dom");

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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getCitiesAsync() {
  return _getCitiesAsync.apply(this, arguments);
}

function _getCitiesAsync() {
  _getCitiesAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var response, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch('http://localhost:4000/api/apartments/cities');

          case 2:
            response = _context2.sent;
            data = response.json();
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getCitiesAsync.apply(this, arguments);
}

var PropertySearchBar = /*#__PURE__*/function (_React$Component) {
  _inherits(PropertySearchBar, _React$Component);

  var _super = _createSuper(PropertySearchBar);

  function PropertySearchBar(props) {
    var _this;

    _classCallCheck(this, PropertySearchBar);

    _this = _super.call(this, props);
    _this.state = {
      filterActive: false,
      cities: [],
      city: undefined,
      priceMin: undefined,
      priceMax: undefined,
      tipoInmueble: undefined,
      bedroom_count: undefined
    };
    return _this;
  }

  _createClass(PropertySearchBar, [{
    key: "handleChangeCity",
    value: function handleChangeCity(e) {
      this.setState({
        city: e.target.value,
        filterActive: true
      });
    }
  }, {
    key: "handleChangePriceMin",
    value: function handleChangePriceMin(e) {
      this.setState({
        priceMin: e.target.value,
        filterActive: true
      });
    }
  }, {
    key: "handleChangePriceMax",
    value: function handleChangePriceMax(e) {
      this.setState({
        priceMax: e.target.value,
        filterActive: true
      });
    }
  }, {
    key: "handleChangeTipoInmueble",
    value: function handleChangeTipoInmueble(e) {
      this.setState({
        tipoInmueble: e.target.value,
        filterActive: true
      });
    }
  }, {
    key: "handleChangeBedroomCount",
    value: function handleChangeBedroomCount(e) {
      this.setState({
        bedroom_count: e.target.value,
        filterActive: true
      });
    }
  }, {
    key: "handleClickBuscar",
    value: function handleClickBuscar(e) {
      if (this.state.filterActive) {
        var newFilter = {
          city: this.state.city,
          priceMin: this.state.priceMin,
          priceMax: this.state.priceMax,
          tipeA: this.state.tipoInmueble,
          bedroom: this.state.bedroom_count
        };
        this.props.callbackFromParent(newFilter);
      } else this.props.callbackFromParent({});
    }
  }, {
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var dataCities;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getCitiesAsync();

              case 2:
                dataCities = _context.sent;
                this.setState({
                  cities: dataCities
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex-wrap',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
        style: {
          marginLeft: 20,
          spacing: 3,
          minWidth: 170
        }
      }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
        id: "select-lblCiudad"
      }, "Ciudad"), /*#__PURE__*/_react.default.createElement(_Select.default, {
        labelId: "select-lblCiudad",
        id: "select-ciudad",
        value: this.state.city,
        onChange: this.handleChangeCity.bind(this)
      }, this.state.cities.map(function (ciudad) {
        return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
          key: ciudad.city,
          value: ciudad.city
        }, ciudad.city);
      }))), /*#__PURE__*/_react.default.createElement(_TextField.default, {
        style: {
          marginLeft: 20
        },
        label: "Precio Min.",
        value: this.state.precioMin,
        onChange: this.handleChangePriceMin.bind(this),
        name: "numberformat",
        id: "formatted-numberformat-input"
      }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
        style: {
          marginLeft: 20
        },
        label: "Precio Max.",
        value: this.state.precioMax,
        onChange: this.handleChangePriceMax.bind(this),
        name: "numberformat",
        id: "formatted-numberformat-input"
      }), /*#__PURE__*/_react.default.createElement(_FormControl.default, {
        style: {
          marginLeft: 20,
          spacing: 3,
          minWidth: 170
        }
      }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
        id: "select-lblTipoInmueble"
      }, "Tipo de Inmueble"), /*#__PURE__*/_react.default.createElement(_Select.default, {
        labelId: "select-lblTipoInmueble",
        id: "select-inmueble",
        value: this.state.tipoInmueble,
        onChange: this.handleChangeTipoInmueble.bind(this)
      }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        value: ''
      }), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        value: 'Casa'
      }, "Casa"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        value: 'Departamento'
      }, "Departamento"))), /*#__PURE__*/_react.default.createElement(_TextField.default, {
        style: {
          marginLeft: 20
        },
        label: "Dormitorios",
        value: this.state.bedroom_count,
        onChange: this.handleChangeBedroomCount.bind(this),
        name: "numberformat",
        id: "formatted-numberformat-input"
      }), /*#__PURE__*/_react.default.createElement(_Button.default, {
        style: {
          marginLeft: 20,
          marginTop: 10
        },
        variant: "contained",
        color: "primary",
        onClick: this.handleClickBuscar.bind(this),
        endIcon: /*#__PURE__*/_react.default.createElement(_Search.default, null, "BUSCAR")
      }, "buscar"));
    }
  }]);

  return PropertySearchBar;
}(_react.default.Component);

var _default = (0, _reactRouterDom.withRouter)(PropertySearchBar);

exports.default = _default;