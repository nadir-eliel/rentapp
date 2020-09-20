"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _PropertyCard = _interopRequireDefault(require("./PropertyCard"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//import UploadImagen from './UploadImage';
function PropertyList1() {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      properties = _useState2[0],
      setProperties = _useState2[1];

  (0, _react.useEffect)(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setProperties(
                /*await fetch('https://reqres.in/api/users?per_page=12')
                  .then((res) => res.json())
                  .then((res) => res.data)*/
                data.properties);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, []);
  var data = {
    offset: 0,
    size: 0,
    // eslint-disable-next-line no-sparse-arrays
    properties: [{
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      photos: ['https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg'],
      bathroom_count: 2,
      bedroom_count: 2,
      garage: true,
      backyard: false,
      pets: true,
      kids: true,
      room_count: 4,
      other_building_details: 'Luminoso, excelente ubicación, admite mascotas y niños.',
      address: {
        province: 'Neuquén',
        city: 'San Martín de los Andes',
        street_number: 'Belgrano 125'
      }
    }, {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0852',
      photos: ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg'],
      bathroom_count: 2,
      bedroom_count: 3,
      garage: true,
      backyard: true,
      pets: true,
      kids: false,
      room_count: 2,
      other_building_details: 'Varios ambientes, patio grande y comedor espacioso',
      address: {
        province: 'Neuquén',
        city: 'Centenario',
        street_number: 'Honduras 191'
      }
    }, {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0853',
      photos: ['https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/X7MEAFG6FNECVOWVTM3WYC555Q.jpg'],
      bathroom_count: 2,
      bedroom_count: 2,
      garage: true,
      backyard: true,
      pets: true,
      kids: true,
      room_count: 4,
      other_building_details: 'Mansion grande, digna de un sicario de la mafia italiana',
      address: {
        province: 'Salta',
        city: 'Salta',
        street_number: 'Portugal 125'
      }
    }, {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0854',
      photos: ['https://s04.s3c.es/imag/_v0/770x420/7/d/7/600x400_Casa-de-los-simpson.png'],
      bathroom_count: 4,
      bedroom_count: 1,
      garage: true,
      backyard: true,
      pets: true,
      kids: true,
      room_count: 4,
      other_building_details: 'Ex casa de familia de tez amarilla mediaticamente conocida.',
      address: {
        province: 'Tierra del Fuego',
        city: 'Springfield',
        street_number: 'Av. Siempre Viva 123'
      }
    }, {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0855',
      photos: ['https://pbs.twimg.com/media/DsONJkrXgAAoivG.jpg'],
      bathroom_count: 10,
      bedroom_count: 5,
      garage: false,
      backyard: true,
      pets: true,
      kids: true,
      room_count: 12,
      other_building_details: 'Ubicada en el medio de la selva, ideal cazador furtivo',
      address: {
        province: 'Chaco',
        city: 'Selva Oeste',
        street_number: 'A la vuelta del quito tronco 612'
      }
    }, {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0856',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0856',
      photos: ['https://www.travelreport.mx/wp-content/uploads/2018/12/tuneles-chinos-en-mexicali-cuarto.jpg'],
      bathroom_count: 1,
      bedroom_count: 1,
      garage: false,
      backyard: false,
      pets: false,
      kids: false,
      room_count: 1,
      other_building_details: 'Cuarto bajo tierra, clandestina, completamente inhumano. Buen precio',
      address: {
        province: 'Buenos Aires',
        city: 'Estacion Constituyentes',
        street_number: 'Subte linea B'
      }
    }, {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0857',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0857',
      photos: ['https://i.pinimg.com/736x/ef/74/8f/ef748f319ff248216cefb4fbcf0c1699.jpg'],
      bathroom_count: 2,
      bedroom_count: 2,
      garage: true,
      backyard: true,
      pets: true,
      kids: true,
      room_count: 4,
      other_building_details: 'Ubicada a 623 mts de altura, sin elevador ni electricidad, excelente vista',
      address: {
        province: 'Salta',
        city: 'Arbolandia',
        street_number: 'Roble 1'
      }
    },, {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0857',
      user_id: 'd290f1ee-6c54-4b01-90e6-d701748f0857',
      photos: ['https://laopinion.com/wp-content/uploads/sites/3/2020/03/casa-cueva-bisbee-arizona.jpg?quality=80&strip=all&w=940'],
      bathroom_count: 2,
      bedroom_count: 2,
      garage: true,
      backyard: true,
      pets: true,
      kids: true,
      room_count: 4,
      other_building_details: 'Casa debajo una cueva, tallada a mano con un destornillador de punta philips',
      address: {
        province: 'Santa Cruz',
        city: 'Cavernas de la Luz',
        street_number: 'Quinta cueva'
      }
    }]
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "property-list"
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    spacing: 5,
    style: {
      padding: '24px'
    }
  }, properties.map(function (property) {
    return /*#__PURE__*/_react.default.createElement(_Grid.default, {
      key: property.id,
      item: true,
      itemxs: 12,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 3
    }, /*#__PURE__*/_react.default.createElement(_PropertyCard.default, {
      key: property.id,
      photo: property.photos[0],
      bathroom_count: property.bathroom_count,
      bedroom_count: property.bedroom_count,
      commentary_count: Math.floor(Math.random() * 5) + 1,
      valoration: 3.2,
      price: Math.floor(Math.random() * 17505) + 1,
      other_property_details: property.other_building_details
    }));
  })), console.log(PropertyList));
}

var _default = (0, _reactRouterDom.withRouter)(PropertyList);

exports.default = _default;