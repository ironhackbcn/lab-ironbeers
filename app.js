/* eslint-disable no-console */
/* eslint-disable quotes */
const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");

const PunkAPIWrapper = require("punkapi-javascript-wrapper");

const punkAPI = new PunkAPIWrapper();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/beers", (req, res, next) => {
  punkAPI
    .getBeers()
    // eslint-disable-next-line arrow-parens
    .then(beers => {
      console.log("We have 25 beers");
      res.render("beers", { beers });
    })
    // eslint-disable-next-line arrow-parens
    .catch(error => {
      console.log("Error", error);
    });
});

app.listen(3000);
