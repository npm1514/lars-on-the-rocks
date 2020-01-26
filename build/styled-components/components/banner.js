"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subtitle = exports.Title = exports.Mask = exports.Banner = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: max-content;\n  margin: 4px auto;\n  color: #c9c9c9;\n  font-size: 16px;\n  font-weight: 100;\n  letter-spacing: 3px;\n  word-wrap: break-word;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  width: max-content;\n  font-size: 54px;\n  margin: 4px auto;\n  font-weight: 100;\n  letter-spacing: 4px;\n  word-wrap: break-word;\n  width: 100%;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 300px;\n  background-color: #00000060;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 300px;\n  background-image: url('/images/cropped-photo-apr-11-7-12-08-am.jpg');\n  background-position: left;\n  background-size: cover;\n  margin-top: 60px;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Banner = _styledComponents["default"].div(_templateObject());

exports.Banner = Banner;

var Mask = _styledComponents["default"].div(_templateObject2());

exports.Mask = Mask;

var Title = _styledComponents["default"].h1(_templateObject3());

exports.Title = Title;

var Subtitle = _styledComponents["default"].h3(_templateObject4());

exports.Subtitle = Subtitle;