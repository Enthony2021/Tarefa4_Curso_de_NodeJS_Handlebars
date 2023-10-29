const express = require('express');
const exphbs = require("express-handlebars");
const homeRoutes = require('./routes/homeRoutes');

class App {
  app: any;
  port: number = 3000;

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