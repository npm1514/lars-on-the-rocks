"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogSubtitle = exports.BlogDate = exports.BlogTitle = exports.BlogPost = exports.Blog = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: #3f3f3f;\n  font-size: 14px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 13px;\n  color: #3f3f3f;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20px;\n  color: #404040;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 24px);\n  padding: 12px;\n  margin: 12px 0;\n  img {\n    width: 100%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 24px);\n  padding: 12px;\n  border: 1px solid #8d8d8d;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Blog = _styledComponents["default"].div(_templateObject());

exports.Blog = Blog;

var BlogPost = _styledComponents["default"].div(_templateObject2());

exports.BlogPost = BlogPost;

var BlogTitle = _styledComponents["default"].div(_templateObject3());

exports.BlogTitle = BlogTitle;

var BlogDate = _styledComponents["default"].div(_templateObject4());

exports.BlogDate = BlogDate;

var BlogSubtitle = _styledComponents["default"].div(_templateObject5());

exports.BlogSubtitle = BlogSubtitle;