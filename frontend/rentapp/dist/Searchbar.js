"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _colors = require("@material-ui/core/colors");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    formControl: {
      margin: theme.spacing(1),
      minWidth: 170
    },
    TextField: {
      margin: theme.spacing(1)
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    button: {
      margin: theme.spacing(2)
    },
    divSearch: {
      display: 'flex-wrap',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
});

function Searchbar() {
  var classes = useStyles();

  var _React$useState = _react.default.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      ciudad = _React$useState2[0],
      setCiudad = _React$useState2[1];

  var _React$useState3 = _react.default.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      precioMin = _React$useState4[0],
      setPrecioMin = _React$useState4[1];

  var _React$useState5 = _react.default.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      precioMax = _React$useState6[0],
      setPrecioMax = _React$useState6[1];

  var _React$useState7 = _react.default.useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      inmueble = _React$useState8[0],
      setTipoInmueble = _React$useState8[1];

  var handleChangeCiudad = function handleChangeCiudad(event) {
    setCiudad(event.target.value);
  };

  var handleChangePrecioMin = function handleChangePrecioMin(event) {
    setPrecioMin(event.target.value);
  };

  var handleChangePrecioMax = function handleChangePrecioMax(event) {
    setPrecioMax(event.target.value);
  };

  var handleChangeTipoInmueble = function handleChangeTipoInmueble(event) {
    setTipoInmueble(event.target.value);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.divSearch
  }, /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    className: classes.formControl
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    id: "select-lblCiudad"
  }, "Ciudad"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    labelId: "select-lblCiudad",
    id: "select-ciudad",
    value: ciudad,
    onChange: handleChangeCiudad
  }, lugar.map(function (ciudad) {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      value: ciudad.id
    }, ciudad.nombre);
  }))), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    className: classes.TextField,
    label: "Precio Min.",
    value: precioMin,
    onChange: handleChangePrecioMin,
    name: "numberformat",
    id: "formatted-numberformat-input"
  }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    className: classes.TextField,
    label: "Precio Max.",
    value: precioMax,
    onChange: handleChangePrecioMax,
    name: "numberformat",
    id: "formatted-numberformat-input"
  }), /*#__PURE__*/_react.default.createElement(_FormControl.default, {
    className: classes.formControl
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    id: "select-lblTipoInmueble"
  }, "Tipo Inmueble"), /*#__PURE__*/_react.default.createElement(_Select.default, {
    labelId: "select-lblTipoInmueble",
    id: "select-tipoInmueble",
    value: inmueble,
    onChange: handleChangeTipoInmueble
  }, tipoInmueble.map(function (tipoInmueble) {
    return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
      value: tipoInmueble.id
    }, tipoInmueble.nombre);
  }))), /*#__PURE__*/_react.default.createElement(_TextField.default, {
    className: classes.TextField,
    id: "standard-number",
    label: "Dormitorios",
    type: "number"
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    variant: "contained",
    color: "primary",
    className: classes.button,
    endIcon: /*#__PURE__*/_react.default.createElement(_Search.default, null, "BUSCAR")
  }, "buscar"));
} //Deberian ser reemplazados por la API


var lugar = [{
  id: 1,
  nombre: 'Neuquen'
}, {
  id: 2,
  nombre: 'Cipolletti'
}, {
  id: 3,
  nombre: 'Centenario'
}, {
  id: 4,
  nombre: 'General Roca'
}]; //Deberian ser reemplazados por la API

var tipoInmueble = [{
  id: 1,
  nombre: 'Edificio'
}, {
  id: 2,
  nombre: 'Duplex'
}, {
  id: 3,
  nombre: 'Departamento'
}, {
  id: 4,
  nombre: 'Casa c/garage'
}, {
  id: 4,
  nombre: 'Casa s/garage'
}];

var _default = (0, _reactRouterDom.withRouter)(Searchbar);

exports.default = _default;