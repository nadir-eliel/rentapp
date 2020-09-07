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

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)({
  card: {
    maxWidth: 500,
    padding: 5,
    marginTop: 60,
    marginLeft: 60,
    marginRight: 60
  },
  media: {
    height: 140
  }
});

function BuildingCard(_ref) {
  var email = _ref.email,
      firstname = _ref.firstname,
      lastname = _ref.lastname,
      avatar = _ref.avatar;
  var classes = useStyles();
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/filterdproperty",
    className: "link"
  }, /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: classes.card
  }, /*#__PURE__*/_react.default.createElement(_CardActionArea.default, null, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    className: classes.media,
    image: avatar
  }), /*#__PURE__*/_react.default.createElement(_CardContent.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, firstname + '' + lastname), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, email, ' ')), ' '), /*#__PURE__*/_react.default.createElement(_CardActions.default, null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    href: avatar,
    size: "small",
    color: "primary"
  }, "Thumbnail Pic", ' '), ' ')));
}

var _default = (0, _reactRouterDom.withRouter)(BuildingCard);

exports.default = _default;