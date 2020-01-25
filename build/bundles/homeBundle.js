"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _HomePage = _interopRequireDefault(require("../pages/HomePage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (window) (0, _reactDom.render)(_react["default"].createElement(_HomePage["default"], {
  data: window.__DATA__
}), document.getElementById('app'));