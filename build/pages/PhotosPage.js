"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _photos = require("../styled-components/pages/photos");

var _photoList = _interopRequireDefault(require("../data/photoList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PhotosPage =
/*#__PURE__*/
function (_Component) {
  _inherits(PhotosPage, _Component);

  function PhotosPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PhotosPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PhotosPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "sortPhotos", function () {
      var listOfLocations = [];

      for (var i = 0; i < _photoList["default"].length; i++) {
        var locationIndex = listOfLocations.findIndex(function (a) {
          return a.location == _photoList["default"][i].location;
        });

        if (locationIndex == -1) {
          listOfLocations.push({
            location: _photoList["default"][i].location,
            photos: [_photoList["default"][i]]
          });
        } else {
          listOfLocations[locationIndex].photos.push(_photoList["default"][i]);
        }
      }

      listOfLocations.sort(function (a, b) {
        return a.location > b.location ? 1 : b.location > a.location ? -1 : 0;
      });
      return listOfLocations.map(function (a, i) {
        return _react["default"].createElement("div", {
          key: i
        }, _react["default"].createElement("h2", null, a.location), _react["default"].createElement("hr", null), _react["default"].createElement(_components.Photos, {
          images: a.photos
        }));
      });
    });

    return _this;
  }

  _createClass(PhotosPage, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_photos.PhotosWrapper, null, _react["default"].createElement(_components.Header, {
        page: this.props.data.page
      }), _react["default"].createElement(_components.Banner, null), _react["default"].createElement(_photos.PhotosContent, null, this.sortPhotos()), _react["default"].createElement(_components.Footer, null));
    }
  }]);

  return PhotosPage;
}(_react.Component);

var _default = PhotosPage;
exports["default"] = _default;