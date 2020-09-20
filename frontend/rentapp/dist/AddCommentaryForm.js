"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Send = _interopRequireDefault(require("@material-ui/icons/Send"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _moment = _interopRequireDefault(require("moment"));

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

var AddCommentaryForm = /*#__PURE__*/function (_Component) {
  _inherits(AddCommentaryForm, _Component);

  var _super = _createSuper(AddCommentaryForm);

  function AddCommentaryForm(props) {
    var _this;

    _classCallCheck(this, AddCommentaryForm);

    _this = _super.call(this, props);
    _this.state = {
      user_id: undefined,
      comment: undefined
    };
    return _this;
  }

  _createClass(AddCommentaryForm, [{
    key: "handleChangeText",
    value: function handleChangeText(e) {
      this.setState({
        texto: e.target.value
      });
    }
  }, {
    key: "handleClickEnviar",
    value: function handleClickEnviar(e) {
      var newComment = {
        apartment_id: this.props.apartmentId,
        user_id: this.state.user_id,
        comment: this.state.comment,
        created_at: 1,
        updated_at: 1
      }; //codigo para enviar el comentario
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "addCommentary"
      }, /*#__PURE__*/_react.default.createElement("form", {
        onSubmit: this.addComment
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "field",
        style: {
          marginLeft: 10
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "field"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "control",
        style: {
          marginLeft: 20,
          width: 400
        }
      }, /*#__PURE__*/_react.default.createElement("textarea", {
        style: {
          minHeight: 80
        },
        value: this.state.texto,
        className: "textarea",
        name: "comment",
        placeholder: "Agregar un comentario",
        onChange: this.handleChangeText.bind(this)
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "field"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "control"
      }, /*#__PURE__*/_react.default.createElement(_Button.default, {
        style: {
          marginLeft: 20,
          marginTop: 10
        },
        variant: "contained",
        color: "primary",
        onClick: this.handleClickEnviar.bind(this),
        endIcon: /*#__PURE__*/_react.default.createElement(_Send.default, null, "ENVIAR")
      }, "ENVIAR")))));
    }
  }]);

  return AddCommentaryForm;
}(_react.Component);

exports.default = AddCommentaryForm;