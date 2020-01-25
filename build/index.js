"use strict";

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _HomeRoot = _interopRequireDefault(require("./roots/HomeRoot"));

var _PlacesRoot = _interopRequireDefault(require("./roots/PlacesRoot"));

var _ContactRoot = _interopRequireDefault(require("./roots/ContactRoot"));

var _AuthorRoot = _interopRequireDefault(require("./roots/AuthorRoot"));

var _PhotosRoot = _interopRequireDefault(require("./roots/PhotosRoot"));

var _styledComponents = require("styled-components");

var _fs = _interopRequireDefault(require("fs"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 3003;
var app = (0, _express["default"])();
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
var dataObj = {},
    homeBundle = "",
    placesBundle = "",
    contactBundle = "",
    authorBundle = "",
    photosBundle = "";

_fs["default"].readFile('./dist/js/home.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  homeBundle = data || "";
}); // fs.readFile('./dist/js/places.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   placesBundle = data || "";
// })
// fs.readFile('./dist/js/contact.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   contactBundle = data || "";
// })
// fs.readFile('./dist/js/author.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   authorBundle = data || "";
// })
// fs.readFile('./dist/js/photos.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   photosBundle = data || "";
// })


app.get('/', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _HomeRoot["default"], "home"));
});
app.get('/home', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _HomeRoot["default"], "home"));
});
app.get('/places', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, placesBundle, _PlacesRoot["default"], "places"));
});
app.get('/contact', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contactBundle, _ContactRoot["default"], "contact"));
});
app.get('/author', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, authorBundle, _AuthorRoot["default"], "author"));
});
app.get('/photos', function (req, res) {
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, photosBundle, _PhotosRoot["default"], "photos"));
});
;
app.get('/health', function (req, res) {
  return res.send('OK');
});
app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
}); // functions!!!!!!!!!!!!!

function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];

  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }

  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch["default"])(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  })["catch"](errHandle);
}

function returnHTML(data, bundle, Page, title) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles(_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n            <html lang=\"en\">\n              <head>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                <title>".concat(title, "</title>\n                <meta name=\"Description\" content=\"").concat(title, "\">\n                <link href=\"https://fonts.googleapis.com/css?family=Averia+Serif+Libre&display=swap\" rel=\"stylesheet\">\n                <style>\n                  body { margin: 0; font-family: 'Averia Serif Libre', cursive; }\n                  a { text-decoration: none; color: #000; }\n                </style>\n                ").concat(styles, "\n              </head>\n              <body>\n                <script>window.os = window.os || {};</script>\n                <script>window.__DATA__=").concat(dataString, "</script>\n                <div id=\"app\" role=\"main\">").concat(body, "</div>\n                <script>").concat(bundle, "</script>\n              </body>\n            </html>\n          ");
}

function errHandle(err) {
  console.log(err);
}