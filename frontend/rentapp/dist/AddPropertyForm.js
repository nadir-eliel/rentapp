"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _ImageUpload = _interopRequireDefault(require("./ImageUpload"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

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

var imageUploaded = undefined;

var AddPropertyForm = /*#__PURE__*/function (_React$Component) {
  _inherits(AddPropertyForm, _React$Component);

  var _super = _createSuper(AddPropertyForm);

  function AddPropertyForm(props) {
    var _this;

    _classCallCheck(this, AddPropertyForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleClickOpen", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        isOpen: false
      });
    });

    _this.state = {
      isOpen: false,
      user_id: undefined,
      price: undefined,
      bathroom_count: undefined,
      bedroom_count: undefined,
      room_count: undefined,
      other_details: undefined,
      garage: undefined,
      kids: undefined,
      pets: undefined,
      type: undefined,
      backyard: undefined,
      pool: undefined,
      province: undefined,
      city: undefined,
      street_number: undefined,
      photos: undefined
    };
    return _this;
  }

  _createClass(AddPropertyForm, [{
    key: "handleChangePrice",
    value: function handleChangePrice(e) {
      this.setState({
        price: e.target.value
      });
    }
  }, {
    key: "handleChangeBathroomCount",
    value: function handleChangeBathroomCount(e) {
      this.setState({
        bathroom_count: e.target.value
      });
    }
  }, {
    key: "handleChangeBedroomCount",
    value: function handleChangeBedroomCount(e) {
      this.setState({
        bedroom_count: e.target.value
      });
    }
  }, {
    key: "handleChangeRoomCount",
    value: function handleChangeRoomCount(e) {
      this.setState({
        room_count: e.target.value
      });
    }
  }, {
    key: "handleChangeOtherDetails",
    value: function handleChangeOtherDetails(e) {
      this.setState({
        other_details: e.target.value
      });
    }
  }, {
    key: "handleChangeGarage",
    value: function handleChangeGarage(e) {
      this.setState({
        garage: e.target.checked
      });
    }
  }, {
    key: "handleChangeKids",
    value: function handleChangeKids(e) {
      this.setState({
        kids: e.target.checked
      });
    }
  }, {
    key: "handleChangePets",
    value: function handleChangePets(e) {
      this.setState({
        pets: e.target.checked
      });
    }
  }, {
    key: "handleChangeBackyard",
    value: function handleChangeBackyard(e) {
      this.setState({
        backyard: e.target.checked
      });
    }
  }, {
    key: "handleChangePool",
    value: function handleChangePool(e) {
      this.setState({
        pool: e.target.checked
      });
    }
  }, {
    key: "handleChangeProvince",
    value: function handleChangeProvince(e) {
      this.setState({
        province: e.target.value
      });
    }
  }, {
    key: "handleChangeCity",
    value: function handleChangeCity(e) {
      this.setState({
        city: e.target.value
      });
    }
  }, {
    key: "handleChangePhotos",
    value: function handleChangePhotos(photoN) {
      imageUploaded = photoN;
    }
  }, {
    key: "handleChangeStreetNumber",
    value: function handleChangeStreetNumber(e) {
      this.setState({
        street_number: e.target.value
      });
    }
  }, {
    key: "handleChangeTipoInmueble",
    value: function handleChangeTipoInmueble(e) {
      this.setState({
        type: e.target.value
      });
    }
  }, {
    key: "handleGuardar",
    value: function handleGuardar(e) {
      var newProperty = {
        price: this.state.price,
        bathroom_count: this.state.bathroom_count,
        bedroom_count: this.state.bedroom_count,
        room_count: this.state.room_count,
        other_details: this.state.other_details,
        type: this.state.type,
        garage: this.state.garage,
        kids: this.state.kids,
        pets: this.state.pets,
        backyard: this.state.backyard,
        pool: this.state.pool,
        address: {
          province: this.state.province,
          city: this.state.city,
          street_number: this.state.street_number
        },
        photos: [imageUploaded]
      };
      this.props.addProperty(newProperty);
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
        style: {
          flex: 1,
          marginTop: 20,
          marginLeft: 10
        },
        variant: "outlined",
        color: "primary",
        onClick: this.handleClickOpen,
        endIcon: /*#__PURE__*/_react.default.createElement(_Add.default, null)
      }, "NUEVO INMUEBLE"), /*#__PURE__*/_react.default.createElement(_Dialog.default, {
        open: this.state.isOpen,
        onClose: this.handleClose,
        "aria-labelledby": "form-dialog-title"
      }, /*#__PURE__*/_react.default.createElement(_DialogTitle.default, {
        id: "form-dialog-title"
      }, "Nuevo Inmueble"), /*#__PURE__*/_react.default.createElement(_DialogContent.default, null, /*#__PURE__*/_react.default.createElement(_DialogContentText.default, null, "Por favor complete todos los campos para una mejor visibilidad."), /*#__PURE__*/_react.default.createElement(_TextField.default, {
        value: this.state.city,
        required: true,
        autoFocus: true,
        margin: "dense",
        id: "name",
        label: "Ciudad",
        type: "ciudad",
        fullWidth: true,
        onChange: this.handleChangeCity.bind(this)
      }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
        value: this.state.province,
        autoFocus: true,
        margin: "dense",
        id: "name",
        label: "Provincia",
        type: "provincia",
        fullWidth: true,
        onChange: this.handleChangeProvince.bind(this)
      }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
        value: this.state.street_number,
        autoFocus: true,
        margin: "dense",
        id: "name",
        label: "Direccion",
        type: "direccion",
        fullWidth: true,
        onChange: this.handleChangeStreetNumber.bind(this)
      }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
        value: this.state.room_count,
        autoFocus: true,
        margin: "dense",
        id: "name",
        label: "Ambientes",
        type: "number",
        onChange: this.handleChangeRoomCount.bind(this)
      }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
        value: this.state.bathroom_count,
        margin: "dense",
        id: "name",
        label: "Ba\xF1os",
        type: "number",
        style: {
          marginLeft: 10
        },
        onChange: this.handleChangeBathroomCount.bind(this)
      }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
        required: true,
        value: this.state.bedroom_count,
        autoFocus: true,
        margin: "dense",
        id: "rooms",
        label: "Habitaciones",
        type: "number",
        style: {
          marginLeft: 10
        },
        onChange: this.handleChangeBedroomCount.bind(this)
      }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
        required: true,
        value: this.state.price,
        autoFocus: true,
        margin: "dense",
        id: "price",
        label: "Precio",
        type: "number",
        onChange: this.handleChangePrice.bind(this)
      }), /*#__PURE__*/_react.default.createElement(_TextField.default, {
        required: true,
        value: this.state.other_details,
        autoFocus: true,
        margin: "dense",
        id: "other_details",
        label: "Otros Detalles",
        type: "other_details",
        fullWidth: true,
        onChange: this.handleChangeOtherDetails.bind(this)
      }), /*#__PURE__*/_react.default.createElement(_FormControl.default, {
        style: {
          minWidth: 300
        }
      }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
        id: "select-lblTipoInmueble"
      }, "Tipo"), /*#__PURE__*/_react.default.createElement(_Select.default, {
        required: true,
        labelId: "select-lblTipoInmueble",
        id: "select-inmueble",
        value: this.state.type,
        onChange: this.handleChangeTipoInmueble.bind(this)
      }, /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        value: ''
      }), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        value: 'Casa'
      }, "Casa"), /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        value: 'Departamento'
      }, "Departamento"))), /*#__PURE__*/_react.default.createElement("div", {
        id: "checkboxContainer",
        style: {
          marginTop: 15
        }
      }, /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        value: this.state.pets,
        control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          color: "primary"
        }),
        label: "\xBFPermite mascotas?",
        labelPlacement: "start",
        onChange: this.handleChangePets.bind(this)
      }), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        value: this.state.kids,
        control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          color: "primary"
        }),
        label: "\xBFPermite ni\xF1os?",
        labelPlacement: "start",
        onChange: this.handleChangeKids.bind(this)
      }), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        value: this.state.pool,
        control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          color: "primary"
        }),
        label: "\xBFTiene piscina?",
        labelPlacement: "start",
        onChange: this.handleChangePool.bind(this)
      }), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        value: this.state.backyard,
        control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          color: "primary"
        }),
        label: "\xBFTiene patio?",
        labelPlacement: "start",
        onChange: this.handleChangeBackyard.bind(this)
      }), /*#__PURE__*/_react.default.createElement(_FormControlLabel.default, {
        value: this.state.garage,
        control: /*#__PURE__*/_react.default.createElement(_Checkbox.default, {
          color: "primary"
        }),
        label: "\xBFTiene garage?",
        labelPlacement: "start",
        onChange: this.handleChangeGarage.bind(this)
      })), /*#__PURE__*/_react.default.createElement(_Divider.default, {
        variant: "middle"
      }), /*#__PURE__*/_react.default.createElement("div", {
        id: "imageUploadContainer",
        style: {
          marginTop: 15
        }
      }, /*#__PURE__*/_react.default.createElement(_ImageUpload.default, {
        uploadImage: this.handleChangePhotos
      }))), /*#__PURE__*/_react.default.createElement(_DialogActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
        onClick: this.handleClose.bind(this),
        color: "primary"
      }, "Cancel"), /*#__PURE__*/_react.default.createElement(_Button.default, {
        onClick: this.handleGuardar.bind(this),
        color: "primary"
      }, "Guardar")))));
    }
  }]);

  return AddPropertyForm;
}(_react.default.Component);

exports.default = AddPropertyForm;