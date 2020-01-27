"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subtitle = exports.Title = exports.Message = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  margin: 16px 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: #404040;\n  font-size: 36px;\n  text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 24px);\n  border: 1px solid #8d8d8d;\n  padding: 12px;\n  margin-bottom: 24px;\n  input, textarea {\n    width: 100%;\n    padding: 12px;\n    font-size: 16px;\n    margin-bottom: 12px\n    border: 1px solid #ccc;\n  }\n  textarea {\n    height: 150px;\n  }\n  button {\n    width: max-content;\n    padding: 12px 24px;\n    background-color: #000;\n    color: #fff;\n    border: none;\n    font-size: 16px;\n    font-family: 'Averia Serif Libre', cursive;\n  }\n  form {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n  }\n  @media(min-width: 700px){\n    width: calc(100% - 40px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Message = _styledComponents["default"].div(_templateObject());

exports.Message = Message;

var Title = _styledComponents["default"].div(_templateObject2());

exports.Title = Title;

var Subtitle = _styledComponents["default"].div(_templateObject3());

exports.Subtitle = Subtitle;