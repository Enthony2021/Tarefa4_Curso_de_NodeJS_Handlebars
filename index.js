const express = require("express");
const exphbs = require("express-handlebars");
const homeRoutes = require("./routes/homeRoutes.js");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.engine("handlebars", exphbs.engine());
    this.app.set("view engine", "handlebars");
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/", homeRoutes);
  }
}

module.exports = new App().app;
