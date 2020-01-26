import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";

import HomeRoot from "./roots/HomeRoot";
import PlacesRoot from "./roots/PlacesRoot";
import ContactRoot from "./roots/ContactRoot";
import AuthorRoot from "./roots/AuthorRoot";
import PhotosRoot from "./roots/PhotosRoot";

import { ServerStyleSheet } from 'styled-components';

import fs from 'fs';
import path from 'path'
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';

var PORT = process.env.PORT || 3003;

const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

var dataObj = {},
homeBundle = "",
placesBundle = "",
contactBundle = "",
authorBundle = "",
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
}

fs.readFile('./dist/js/home.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  homeBundle = data || "";
})
fs.readFile('./dist/js/places.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  placesBundle = data || "";
})
fs.readFile('./dist/js/contact.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  contactBundle = data || "";
})
fs.readFile('./dist/js/author.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  authorBundle = data || "";
})
fs.readFile('./dist/js/photos.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  photosBundle = data || "";
})

app.get('/', (req, res) => {
  let data = {
    page: "/"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot));
});

app.get('/home', (req, res) => {
  let data = {
    page: "/"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot));
});
app.get('/places', (req, res) => {
  let data = {
    page: "/places"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, placesBundle, PlacesRoot));
});
app.get('/contact', (req, res) => {
  let data = {
    page: "/contact"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contactBundle, ContactRoot));
});
app.get('/author', (req, res) => {
  let data = {
    page: "/author"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, authorBundle, AuthorRoot));
});
app.get('/photos', (req, res) => {
  let data = {
    page: "/photos"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, photosBundle, PhotosRoot));
});;

app.get('/health', (req, res) => res.send('OK'));

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});

app.post('/email', (req, res) => {
  fetch("https://mandrillapp.com/api/1.0/messages/send.json", {
    "method": "POST",
    "body": {
      "data": {
        // "key": "m9WhwvP-pCZrAOmfEmMceg",
        "key": "8646446f341f23391ed2f33475394a56-us4",
        "message": {
          "from_email": "npm1514@gmail.com",
          "to": [{
            "email": "npm1514@gmail.com",
            "name": "Lars On The Rocks",
            "type": "to"
          }],
          "autotext": true,
          "subject": "Customer Inquiry - " + "name" + " @ " + "email",
          "text": "message"
        }
      }
    }
  })
  .then(() => {
    console.log("success");
    res.send({
      message: "Your email has been received. I will get back to you within the next 48 hours."
    })
  }, () => {
    console.log("fail");
    res.send({
      message: "Whoops! Something went wrong. Please contact me via email or give me a call."
    })
  })
})

//maybe make analytics page, add date/hour buckets, good start though
app.get('/track/:id', (req, res) => {
  var sObj = trackedData[req.params.id];
  var {headers: {referer, host}, query } = req;
  sObj.total_count++;
  var val = query.content ? query.content : referer.split(host)[1];
  var found = sObj.tracks.findIndex(track => track.id == val);
  if(found == -1) sObj.tracks.push({ id: val, count: 1 })
  else sObj.tracks[found].count++;
  res.send(trackedData);
});

app.get('/*', (req, res) => {
  let data = {
    page: "/"
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot));
});

app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});

// functions!!!!!!!!!!!!!

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Lars on the Rocks – Adventuring at its Highest</title>
                <meta name="Description" content="Lars on the Rocks – Adventuring at its Highest">
                <link href="https://fonts.googleapis.com/css?family=Averia+Serif+Libre&display=swap" rel="stylesheet">
                <link rel="icon" href="/images/headertab_ico.jpg" sizes="32x32">
                <style>
                  body { margin: 0; font-family: 'Averia Serif Libre', cursive; }
                  a { text-decoration: none; color: #000; }
                </style>
                ${styles}
              </head>
              <body>
                <script>window.os = window.os || {};</script>
                <script>window.__DATA__=${dataString}</script>
                <div id="app" role="main">${body}</div>
                <script>${bundle}</script>
                <script>
                  fetch('/track/pv')
                  .then(res => res.json())
                  .then(res => {
                    window.tracked = res;
                  });
                  document.body.addEventListener('click', (e) => {
                    fetch('/track/click?content=' + e.target.outerHTML)
                    .then(res => res.json())
                    .then(res => {
                      window.tracked = res;
                    });
                  })
                </script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
