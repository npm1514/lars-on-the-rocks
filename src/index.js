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
photosBundle = "";

fs.readFile('./dist/js/home.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  homeBundle = data || "";
})
// fs.readFile('./dist/js/places.bundle.min.js', "utf8", (err, data) => {
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

app.get('/', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "home"));
});

app.get('/home', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, homeBundle, HomeRoot, "home"));
});
app.get('/places', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, placesBundle, PlacesRoot, "places"));
});
app.get('/contact', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, contactBundle, ContactRoot, "contact"));
});
app.get('/author', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, authorBundle, AuthorRoot, "author"));
});
app.get('/photos', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, photosBundle, PhotosRoot, "photos"));
});;

app.get('/health', (req, res) => res.send('OK'));

app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${title}</title>
                <meta name="Description" content="${title}">
                <link href="https://fonts.googleapis.com/css?family=Averia+Serif+Libre&display=swap" rel="stylesheet">
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
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
