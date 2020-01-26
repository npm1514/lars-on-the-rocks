"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuLine = exports.MobileMenuWrapper = exports.MobileMenu = exports.MenuLink = exports.DesktopMenuWrapper = exports.DesktopMenu = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  color: #fff;\n  background-color: #3f3f3f;\n  padding: 16px;\n  a {\n    color: #fff;\n    text-decoration: none;\n  }\n  &:hover {\n    cursor: pointer;\n    background-color: #454545;\n  }\n  &.selectedMobileLine {\n    background-color: #454545;\n  }\n  &.selectedMobileLine:hover {\n    background-color: #3f3f3f;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 60px;\n  z-index: 10;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  svg {\n    position: absolute;\n    height: 36px;\n    width: 36px;\n    top: 12px;\n    right: 12px;\n  }\n  @media (min-width: 770px){\n    display: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: max-width;\n  padding: 12px;\n  color: #fff;\n  a {\n    color: #fff;\n    text-decoration: none;\n  }\n  a:hover {\n    cursor: pointer;\n    color: #454545;\n  }\n  &.selectedDesktopLink a {\n    color: #8d8d8d;\n  }\n  &.selectedDesktopLink a:hover {\n    color: #fff;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  display: none;\n  color: #fff;\n  text-transform: uppercase;\n  @media (min-width: 770px){\n    display: block;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 60px;\n  background-color: #070707;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents["default"].header(_templateObject()); //desktop


exports.Header = Header;

var DesktopMenu = _styledComponents["default"].div(_templateObject2());

exports.DesktopMenu = DesktopMenu;

var DesktopMenuWrapper = _styledComponents["default"].div(_templateObject3());

exports.DesktopMenuWrapper = DesktopMenuWrapper;

var MenuLink = _styledComponents["default"].div(_templateObject4()); //mobile


exports.MenuLink = MenuLink;

var MobileMenu = _styledComponents["default"].div(_templateObject5());

exports.MobileMenu = MobileMenu;

var MobileMenuWrapper = _styledComponents["default"].div(_templateObject6());

exports.MobileMenuWrapper = MobileMenuWrapper;

var MenuLine = _styledComponents["default"].div(_templateObject7());

exports.MenuLine = MenuLine;