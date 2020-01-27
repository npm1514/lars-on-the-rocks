"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _message = require("../styled-components/components/message");

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

var MessageComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(MessageComponent, _Component);

  function MessageComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MessageComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MessageComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      name: "",
      email: "",
      message: ""
    });

    _defineProperty(_assertThisInitialized(_this), "submitMessage", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          name = _this$state.name,
          email = _this$state.email,
          message = _this$state.message;
      console.log("send email", _this.state);
    });

    _defineProperty(_assertThisInitialized(_this), "changeState", function (prop, val) {
      var obj = {};
      obj[prop] = val;
      console.log(obj);

      _this.setState(obj);
    });

    return _this;
  }

  _createClass(MessageComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          name = _this$state2.name,
          email = _this$state2.email,
          message = _this$state2.message;
      return _react["default"].createElement(_message.Message, null, _react["default"].createElement(_message.Title, null, "Contact Me"), _react["default"].createElement(_message.Subtitle, null, "Lars Robertson", _react["default"].createElement("br", null), "1149 S 300 E", _react["default"].createElement("br", null), "Salt Lake City, UT", _react["default"].createElement("br", null)), _react["default"].createElement("form", {
        onSubmit: this.submitMessage
      }, _react["default"].createElement("input", {
        onChange: function onChange(e) {
          return _this2.changeState("name", e.target.value);
        },
        value: name,
        type: "text",
        placeholder: "Name (required)",
        required: true
      }), _react["default"].createElement("input", {
        onChange: function onChange(e) {
          return _this2.changeState("email", e.target.value);
        },
        value: email,
        type: "email",
        placeholder: "Email (required)",
        required: true
      }), _react["default"].createElement("textarea", {
        onChange: function onChange(e) {
          return _this2.changeState("message", e.target.value);
        },
        value: message,
        placeholder: "Message (required)",
        required: true
      }), _react["default"].createElement("button", {
        type: "submit"
      }, "Submit")));
    }
  }]);

  return MessageComponent;
}(_react.Component);

var _default = MessageComponent;
exports["default"] = _default;