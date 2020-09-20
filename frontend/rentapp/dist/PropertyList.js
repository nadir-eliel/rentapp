"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _PropertyCard = _interopRequireDefault(require("./PropertyCard"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//import UploadImagen from './UploadImage';
function getPropertiesAsync(_x, _x2, _x3, _x4, _x5) {
  return _getPropertiesAsync.apply(this, arguments);
}

function _getPropertiesAsync() {
  _getPropertiesAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(city, priceMin, priceMax, tipeA, bedroom) {
    var response, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch('http://localhost:4000/api/apartments/', {
              method: 'GET',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              params: {
                city: city,
                priceMin: priceMin,
                priceMax: priceMax,
                tipeA: tipeA,
                bedroom: bedroom
              }
            });

          case 2:
            response = _context3.sent;
            data = response.json();
            return _context3.abrupt("return", data);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getPropertiesAsync.apply(this, arguments);
}

function getPromedio(rates) {
  var promedy = 0;

  if (rates.length > 0) {
    var val = rates.map(function (rate) {
      return rate.rate;
    });
    var count = val.length;
    var values = val.reduce(function (previous, current) {
      return current += previous;
    });
    promedy = Math.round((values /= count) * 10) / 10;
  }

  return promedy;
}

var PropertyList = /*#__PURE__*/function (_React$Component) {
  _inherits(PropertyList, _React$Component);

  var _super = _createSuper(PropertyList);

  function PropertyList(props) {
    var _this;

    _classCallCheck(this, PropertyList);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "ChangeSelectedProperty", function (a) {
      _this.setState({
        selectedProperty: a
      });
    });

    _this.state = {
      filters: undefined,
      properties: [],
      selectedProperty: undefined
    };
    return _this;
  }

  _createClass(PropertyList, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var dataProperties;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getPropertiesAsync();

              case 2:
                dataProperties = _context.sent;
                this.setState({
                  properties: dataProperties
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
    key: "componentWillReceiveProps",
    value: function () {
      var _componentWillReceiveProps = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(nextProps) {
        var dataProperties;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  filters: nextProps.value
                });
                _context2.next = 3;
                return getPropertiesAsync(nextProps.value.city, nextProps.value.priceMin, nextProps.value.priceMax, nextProps.value.tipeA, nextProps.value.bedroom);

              case 3:
                dataProperties = _context2.sent;
                console.log(dataProperties);
                this.setState({
                  properties: dataProperties
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillReceiveProps(_x6) {
        return _componentWillReceiveProps.apply(this, arguments);
      }

      return componentWillReceiveProps;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.selectedProperty !== undefined) this.props.changeProperty(this.state.selectedProperty);
      /*
      if (this. !== undefined) {
        return (
          <Redirect
            to={'/filteredProperty/' + this.state.redirectProperty}
          ></Redirect>
        );
      }*/

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "property-list"
      }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true,
        spacing: 5,
        style: {
          marginTop: 10
        }
      }, this.state.properties.map(function (property) {
        return /*#__PURE__*/_react.default.createElement(_Grid.default, {
          key: property._id,
          item: true,
          itemxs: 12,
          sm: 6,
          md: 4,
          lg: 4,
          xl: 3
        }, /*#__PURE__*/_react.default.createElement(_PropertyCard.default, {
          key: property._id + '',
          id: property._id,
          photo: property.photos[0],
          bathroom_count: property.bathroom_count,
          bedroom_count: property.bedroom_count,
          commentary_count: property.comments.length,
          valoration: getPromedio(property.rates),
          price: property.price,
          other_property_details: property.other_details ? property.other_details.substring(0, 100) + '...' : '',
          selectProperty: _this2.ChangeSelectedProperty
        }));
      })));
    }
  }]);

  return PropertyList;
}(_react.default.Component);

exports.default = PropertyList;