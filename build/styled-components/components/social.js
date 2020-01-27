"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconsDiv = exports.Title = exports.Social = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 48px);\n  padding: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  svg {\n    height: 40px;\n    width: 40px;\n    margin: 4px;\n    color: #404040;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  background-color: #fff;\n  top: -21px;\n  padding: 12px 36px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  color: #404040;\n  width: 50%;\n  font-size: 16px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  border: 1px solid #8d8d8d;\n  width: 100%;\n  max-width: 1200px;\n  margin: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Social = _styledComponents["default"].div(_templateObject());

exports.Social = Social;

var Title = _styledComponents["default"].div(_templateObject2());

exports.Title = Title;

var IconsDiv = _styledComponents["default"].div(_templateObject3());

exports.IconsDiv = IconsDiv;