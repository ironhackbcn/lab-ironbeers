const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const PunkAPIWrapper = require("punkapi-javascript-wrapper");
const punkAPI = new PunkAPIWrapper();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(__dirname + "/views/partials");

app.get("/", (req, res, next) => {
  res.render("index");
});

app.get("/beers", (req, res, next) => {
  punkAPI
    .getBeers()
    .then(beers => {
      console.log("Beers are here!");
      res.render("beers", { beers });
    })
    .catch(err => {
      console.log("Error ", err);
    });
});

app.get("/random-beer", (req, res, next) => {
  punkAPI
    .getRandom()
    .then(beers => {
      res.render("random-beer", { beers });
      console.log("Random beer is ON");
    })
    .catch(err => {
      console.log("Error ", err);
    });
});

app.listen(3000);
