"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _CardActionArea = _interopRequireDefault(require("@material-ui/core/CardActionArea"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _reactUltimateCalendar = _interopRequireDefault(require("react-ultimate-calendar"));

var _materialAutoRotatingCarousel = require("material-auto-rotating-carousel");

var _materialUiImage = _interopRequireDefault(require("material-ui-image"));

require("../assets/logo.png");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//const Slide = require('./Slide').default;
var _require = require('@material-ui/core/colors'),
    red = _require.red,
    blue = _require.blue,
    green = _require.green;

var Button = require('@material-ui/core/Button').default;

var avatar = ['https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg'];
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor: '#757ce8',
      color: theme.palette.text.secondary
    },
    media: {
      height: 280
    }
  };
});

function FilterProperty() {
  var classes = useStyles();

  var _useState = (0, _react.useState)({
    open: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; //calendar


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
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height: 200
    }
  }, /*#__PURE__*/_react.default.createElement(Button, {
    onClick: function onClick() {
      return setState({
        open: true
      });
    }
  }, "Open Image"), /*#__PURE__*/_react.default.createElement(_materialAutoRotatingCarousel.AutoRotatingCarousel, {
    label: "Get started",
    open: state.open,
    onClose: function onClose() {
      return setState({
        open: false
      });
    },
    onStart: function onStart() {
      return setState({
        open: false
      });
    },
    style: {
      position: 'absolute'
    }
  }, /*#__PURE__*/_react.default.createElement(_materialAutoRotatingCarousel.Slide, {
    media: /*#__PURE__*/_react.default.createElement("img", {
      src: "https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg"
    }),
    mediaBackgroundStyle: {
      backgroundColor: red[400]
    },
    style: {
      backgroundColor: red[600]
    },
    title: "This is a very cool feature",
    subtitle: "Just using this will blow your mind."
  }), /*#__PURE__*/_react.default.createElement(_materialAutoRotatingCarousel.Slide, {
    media: /*#__PURE__*/_react.default.createElement("img", {
      src: "https://pbs.twimg.com/media/DsONJkrXgAAoivG.jpg"
    }),
    mediaBackgroundStyle: {
      backgroundColor: blue[400]
    },
    style: {
      backgroundColor: blue[600]
    },
    title: "Ever wanted to be popular?",
    subtitle: "Well just mix two colors and your are good to go!"
  }), /*#__PURE__*/_react.default.createElement(_materialAutoRotatingCarousel.Slide, {
    media: /*#__PURE__*/_react.default.createElement("img", {
      src: "https://www.travelreport.mx/wp-content/uploads/2018/12/tuneles-chinos-en-mexicali-cuarto.jpg"
    }),
    mediaBackgroundStyle: {
      backgroundColor: green[400]
    },
    style: {
      backgroundColor: green[600]
    },
    title: "May the force be with you",
    subtitle: "The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
  }))))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
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

var _default = (0, _reactRouterDom.withRouter)(FilterProperty); //<CardMedia className={classes.media} image={avatar} />


exports.default = _default;