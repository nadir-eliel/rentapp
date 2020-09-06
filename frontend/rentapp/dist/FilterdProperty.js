"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _CardActionArea = _interopRequireDefault(require("@material-ui/core/CardActionArea"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _reactUltimateCalendar = _interopRequireDefault(require("react-ultimate-calendar"));

var _reactRouterDom = require("react-router-dom");

var _universalCookie = _interopRequireDefault(require("universal-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookies = new _universalCookie.default();
var avatar = ['https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg'];
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    media: {
      height: 140
    }
  };
});

function FilterProperty() {
  var classes = useStyles(); //calendar

  var start = new Date();
  var end = new Date();
  end.setDate(end.getDate() + 10); //const onChangeHandler = (weekNumber, startDate, end Date) => { ... }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    bgcolor: "primary.main",
    color: "primary.contrastText",
    p: 2
  }, /*#__PURE__*/_react.default.createElement(_CardActionArea.default, null, /*#__PURE__*/_react.default.createElement(_CardMedia.default, {
    className: classes.media,
    image: avatar
  }), /*#__PURE__*/_react.default.createElement("h1", null, "imagen"))))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    bgcolor: "primary.main",
    color: "primary.contrastText",
    p: 2
  }, /*#__PURE__*/_react.default.createElement(_CardActionArea.default, null, /*#__PURE__*/_react.default.createElement(_CardContent.default, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    gutterBottom: true,
    variant: "h3",
    component: "h2"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "titulo")), /*#__PURE__*/_react.default.createElement(_Typography.default, {
    gutterBottom: true,
    variant: "h1",
    color: "textSecondary",
    component: "h1"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "descripcion de la casa"))))))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    bgcolor: "primary.main",
    color: "primary.contrastText",
    p: 2
  }, "mapa"))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 8
  }, /*#__PURE__*/_react.default.createElement(_Paper.default, {
    className: classes.paper
  }, /*#__PURE__*/_react.default.createElement(_Box.default, {
    bgcolor: "primary.main",
    color: "primary.contrastText",
    p: 2
  }, "comentarios"))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    xs: 12,
    sm: 4
  }, /*#__PURE__*/_react.default.createElement(_reactUltimateCalendar.default, {
    locale: "de-DE" // multi
    // onChange={onChangeHandler}
    ,
    showWeekNumbers: true,
    weeksSelector: true,
    value: [start, end] // Specify default selected range of 10 days from today

  }), ";")));
}

var _default = (0, _reactRouterDom.withRouter)(FilterProperty);

exports.default = _default;