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

hbs.registerPartials(path.join(__dirname, "/views/partials"));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/beers", (req, res, next) => {
  punkAPI
    .getBeers()
    // eslint-disable-next-line arrow-parens
    .then(beers => {
      res.render("beers", { beers });
    })
    // eslint-disable-next-line arrow-parens
    .catch(error => {
      console.log("Error", error);
    });
});

app.get("/random-beer", (req, res, next) => {
  punkAPI
    .getRandom()
    .then(beers => {
      res.render("random-beer", { beers });
    })
    .catch(error => {
      console.log("Error", error);
    });
});

app.listen(3000);
