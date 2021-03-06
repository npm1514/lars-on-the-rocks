"use strict";

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _HomeRoot = _interopRequireDefault(require("./roots/HomeRoot"));

var _ContactRoot = _interopRequireDefault(require("./roots/ContactRoot"));

var _AboutRoot = _interopRequireDefault(require("./roots/AboutRoot"));

var _PhotosRoot = _interopRequireDefault(require("./roots/PhotosRoot"));

var _styledComponents = require("styled-components");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cryptr = require('cryptr');

var cryptr = new Cryptr(_config["default"].key);
var PORT = process.env.PORT || 3003;
var app = (0, _express["default"])();
app.use((0, _compression["default"])());
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
var dataObj = {},
    homeBundle = "",
    contactBundle = "",
    aboutBundle = "",
    photosBundle = "",
    trackedData = {
  pv: {
    total_count: 0,
    tracks: [{
      id: '/',
      count: 0
    }]
  },
  click: {
    total_count: 0,
    tracks: [{
      id: 'body',
      count: 0
    }]
  }
};

_fs["default"].readFile('./dist/js/home.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  homeBundle = data || "";
});

_fs["default"].readFile('./dist/js/contact.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  contactBundle = data || "";
});

_fs["default"].readFile('./dist/js/about.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  aboutBundle = data || "";
});

_fs["default"].readFile('./dist/js/photos.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  photosBundle = data || "";
});

app.get('/', function (req, res) {
  var data = {
    page: "/"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _HomeRoot["default"]));
});
app.get('/home', function (req, res) {
  var data = {
    page: "/"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _HomeRoot["default"]));
});
app.get('/contact', function (req, res) {
  var data = {
    page: "/contact"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contactBundle, _ContactRoot["default"]));
});
app.get('/about', function (req, res) {
  var data = {
    page: "/about"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, aboutBundle, _AboutRoot["default"]));
});
app.get('/photos', function (req, res) {
  var data = {
    page: "/photos"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, photosBundle, _PhotosRoot["default"]));
});
;
app.get('/health', function (req, res) {
  return res.send('OK');
});
app.get('/images/:id', function (req, res) {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});
app.post('/email', function (req, res) {
  var transporter = _nodemailer["default"].createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: cryptr.decrypt(_config["default"].email),
      pass: cryptr.decrypt(_config["default"].gmPass)
    }
  });

  transporter.sendMail({
    from: req.body.email,
    to: cryptr.decrypt(_config["default"].email),
    // to: cryptr.decrypt(config.email2),
    subject: 'Lars On The Rocks Inquiry',
    html: "\n      <h3>Hi Lars!</h3>\n      <h3>The following person, ".concat(req.body.name, "(").concat(req.body.email, "), has a message for you and it can be read below.</h3>\n      <h3>Message:</h3>\n      <h3>").concat(req.body.message, "</h3>\n\n    ")
  }, function (error, info) {
    if (error) res.send({
      error: error
    });else res.send({
      response: info
    });
  });
}); //maybe make analytics page, add date/hour buckets, good start though

app.get('/track/:id', function (req, res) {
  var sObj = trackedData[req.params.id];
  var _req$headers = req.headers,
      referer = _req$headers.referer,
      host = _req$headers.host,
      query = req.query;
  sObj.total_count++;
  var val = query.content ? query.content : referer.split(host)[1];
  var found = sObj.tracks.findIndex(function (track) {
    return track.id == val;
  });
  if (found == -1) sObj.tracks.push({
    id: val,
    count: 1
  });else sObj.tracks[found].count++;
  res.send(trackedData);
});
app.get('/*', function (req, res) {
  var data = {
    page: "/"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, _HomeRoot["default"]));
});
app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
}); // functions!!!!!!!!!!!!!

function fetcher(url) {
  return (0, _nodeFetch["default"])(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  })["catch"](errHandle);
}

function returnHTML(data, bundle, Page) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles(_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n            <html lang=\"en\">\n              <head>\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n                <title>Lars on the Rocks \u2013 Adventuring at its Highest</title>\n                <meta name=\"Description\" content=\"Lars on the Rocks \u2013 Adventuring at its Highest\">\n                <link href=\"https://fonts.googleapis.com/css?family=Averia+Serif+Libre&display=swap\" rel=\"stylesheet\">\n                <link rel=\"icon\" href=\"/images/headertab_ico.jpg\" sizes=\"32x32\">\n                <style>\n                  body { margin: 0; font-family: 'Averia Serif Libre', cursive; }\n                  a { text-decoration: none; color: #000; }\n                </style>\n                ".concat(styles, "\n              </head>\n              <body>\n                <script>window.os = window.os || {};</script>\n                <script>window.__DATA__=").concat(dataString, "</script>\n                <div id=\"app\" role=\"main\">").concat(body, "</div>\n                <script>").concat(bundle, "</script>\n                <script>\n                  fetch('/track/pv')\n                  .then(res => res.json())\n                  .then(res => {\n                    window.tracked = res;\n                  });\n                  document.body.addEventListener('click', (e) => {\n                    fetch('/track/click?content=' + e.target.outerHTML)\n                    .then(res => res.json())\n                    .then(res => {\n                      window.tracked = res;\n                    });\n                  })\n                </script>\n              </body>\n            </html>\n          ");
}

function errHandle(err) {
  console.log(err);
}