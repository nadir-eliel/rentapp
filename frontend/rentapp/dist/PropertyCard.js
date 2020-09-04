"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActionArea = _interopRequireDefault(require("@material-ui/core/CardActionArea"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Grade = _interopRequireDefault(require("@material-ui/icons/Grade"));

var _Comment = _interopRequireDefault(require("@material-ui/icons/Comment"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Hotel = _interopRequireDefault(require("@material-ui/icons/Hotel"));

var _AttachMoney = _interopRequireDefault(require("@material-ui/icons/AttachMoney"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)({
  card: {
    maxWidth: 400,
    padding: 5,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40
  },
  media: {
    height: 200
  }
});

function PropertyCard(_ref) {
  var id = _ref.id,
      photo = _ref.photo,
      bathroom_count = _ref.bathroom_count,
      bedroom_count = _ref.bedroom_count,
      price = _ref.price,
      other_property_details = _ref.other_property_details,
      commentary_count = _ref.commentary_count,
      valoration = _ref.valoration;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: classes.card
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/filterdproperty"
  }, /*#__PURE__*/_react.default.createElement(_CardActionArea.default, null, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    className: classes.media,
    image: photo
  }), /*#__PURE__*/_react.default.createElement(_CardContent.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    gutterBottom: true,
    variant: "h6",
    component: "h4"
  }, other_property_details)), ' '), /*#__PURE__*/_react.default.createElement(_CardActions.default, null, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "Comentarios"
  }, /*#__PURE__*/_react.default.createElement(_Comment.default, null), commentary_count), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": "Valoracion"
  }, /*#__PURE__*/_react.default.createElement(_Grade.default, null), valoration), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": " Comentarios"
  }, /*#__PURE__*/_react.default.createElement(_Hotel.default, null), bedroom_count), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    "aria-label": " Comentarios"
  }, /*#__PURE__*/_react.default.createElement(_AttachMoney.default, null), price))));
}

var _default = (0, _reactRouterDom.withRouter)(PropertyCard);

exports.default = _default;