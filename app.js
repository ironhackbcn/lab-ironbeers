const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const PunkAPIWrapper = require("punkapi-javascript-wrapper");
const punkAPI = new PunkAPIWrapper();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(path.join(__dirname + "/views/partials"));

app.get("/", (request, response, next) => {
  response.render("index");
});
app.get("/beers", (request, response, next) => {
  punkAPI
    .getBeers()
    .then(beers => {
      console.log(beers);
      response.render("beers", { beers });
    })
    .catch(error => {
      console.log(error);
    });
});
app.get("/random-beers", (request, response, next) => {
  punkAPI
    .getRandom()
    .then(beer => {
      console.log(beer[0]);
      response.render("random-beers", beer[0]);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get("*", (request, response, next) => {
  response.render("404");
});

app.listen(3000);
