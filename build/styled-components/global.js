"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SplitRight = exports.SplitLeft = exports.SplitView = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";50%;\n  height: max-content;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";50%;\n  height: max-content;\n  img {\n    width: 100%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 48px - 48px);\n  padding: 24px;\n  margin: 24px;\n  border: 0.5px solid #8d8d8d;\n  display: flex;\n  align-items: stretch;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SplitView = _styledComponents["default"].div(_templateObject());

exports.SplitView = SplitView;

var SplitLeft = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.width ? props.width : "50%";
});

exports.SplitLeft = SplitLeft;

var SplitRight = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.width ? props.width : "50%";
});

exports.SplitRight = SplitRight;