"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceWrap = exports.PhotosContent = exports.PhotosWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    hr {\n      margin-bottom: 24px;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: calc(100% - 32px);\n    padding: 24px 16px;\n    min-height: calc(100vh - 300px - 60px);\n    text-align: center;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    min-height: 100vh;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PhotosWrapper = _styledComponents["default"].div(_templateObject());

exports.PhotosWrapper = PhotosWrapper;

var PhotosContent = _styledComponents["default"].div(_templateObject2());

exports.PhotosContent = PhotosContent;

var PlaceWrap = _styledComponents["default"].div(_templateObject3());

exports.PlaceWrap = PlaceWrap;