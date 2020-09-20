"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActionArea = _interopRequireDefault(require("@material-ui/core/CardActionArea"));

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _red = _interopRequireDefault(require("@material-ui/core/colors/red"));

var _blue = _interopRequireDefault(require("@material-ui/core/colors/blue"));

var _AddPhotoAlternate = _interopRequireDefault(require("@material-ui/icons/AddPhotoAlternate"));

var _styles = require("@material-ui/core/styles");

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

var styles = function styles(theme) {
  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    icon: {
      margin: theme.spacing.unit * 2
    },
    iconHover: {
      margin: theme.spacing.unit * 2,
      '&:hover': {
        color: _red.default[800]
      }
    },
    cardHeader: {
      textalign: 'center',
      align: 'center',
      backgroundColor: 'white'
    },
    input: {
      display: 'none'
    },
    title: {
      color: _blue.default[800],
      fontWeight: 'bold',
      fontFamily: 'Montserrat',
      align: 'center'
    },
    button: {
      color: _blue.default[900],
      margin: 10
    },
    secondaryButton: {
      color: 'gray',
      margin: 10
    },
    typography: {
      margin: theme.spacing.unit * 2,
      backgroundColor: 'default'
    },
    searchRoot: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400
    },
    searchInput: {
      marginLeft: 8,
      flex: 1
    },
    searchIconButton: {
      padding: 10
    },
    searchDivider: {
      width: 1,
      height: 28,
      margin: 4
    }
  };
};

var ImageUploadCard = /*#__PURE__*/function (_React$Component) {
  _inherits(ImageUploadCard, _React$Component);

  var _super = _createSuper(ImageUploadCard);

  function ImageUploadCard() {
    var _this;

    _classCallCheck(this, ImageUploadCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      mainState: 'initial',
      // initial, search, gallery, uploaded
      imageUploaded: 0,
      selectedFile: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleUploadClick", function (event) {
      var file = event.target.files[0];
      var reader = new FileReader();
      var url = reader.readAsDataURL(file);

      reader.onloadend = function (e) {
        this.setState({
          selectedFile: [reader.result]
        });
        this.props.uploadImage(reader.result);
      }.bind(_assertThisInitialized(_this));

      _this.setState({
        mainState: 'uploaded',
        selectedFile: event.target.files[0],
        imageUploaded: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "imageResetHandler", function (event) {
      console.log('Click!');

      _this.setState({
        mainState: 'initial',
        selectedFile: null,
        imageUploaded: 0
      });
    });

    return _this;
  }

  _createClass(ImageUploadCard, [{
    key: "renderInitialState",
    value: function renderInitialState() {
      var _this$props = this.props,
          classes = _this$props.classes,
          theme = _this$props.theme;
      var value = this.state.value;
      return /*#__PURE__*/_react.default.createElement(_Grid.default, {
        container: true,
        justify: "center",
        alignItems: "center"
      }, /*#__PURE__*/_react.default.createElement("input", {
        accept: "image/*",
        className: classes.input,
        id: "contained-button-file",
        multiple: true,
        type: "file",
        onChange: this.handleUploadClick
      }), /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "contained-button-file"
      }, /*#__PURE__*/_react.default.createElement(_Fab.default, {
        component: "span",
        className: classes.button
      }, /*#__PURE__*/_react.default.createElement(_AddPhotoAlternate.default, null))));
    }
  }, {
    key: "renderUploadedState",
    value: function renderUploadedState() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          theme = _this$props2.theme;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_CardActionArea.default, {
        onClick: this.imageResetHandler
      }, /*#__PURE__*/_react.default.createElement("img", {
        width: "100%",
        className: classes.media,
        src: this.state.selectedFile
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          classes = _this$props3.classes,
          theme = _this$props3.theme;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: classes.root
      }, /*#__PURE__*/_react.default.createElement(_Card.default, {
        className: this.props.cardName
      }, this.state.mainState === 'initial' && this.renderInitialState() || this.state.mainState === 'uploaded' && this.renderUploadedState())));
    }
  }]);

  return ImageUploadCard;
}(_react.default.Component);

var _default = (0, _styles.withStyles)(styles, {
  withTheme: true
})(ImageUploadCard);

exports.default = _default;