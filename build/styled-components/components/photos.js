"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Photo = exports.Photos = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(50% - 8px);\n  margin-bottom: 16px;\n  @media(min-width: 700px){\n    width: calc(calc(100%/3) - calc(32px/3));\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  max-width: 1200px;\n  margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Photos = _styledComponents["default"].div(_templateObject());

exports.Photos = Photos;

var Photo = _styledComponents["default"].img(_templateObject2());

exports.Photo = Photo;