const products = require("../data/data");

class HomeController {
  constructor(products) {
    this.products = products;
  }

  index(req, res) {
    res.render("home", { products });
  }

  product(req, res) {
    const product = products[parseInt(req.params.id) - 1];
    res.render("product", { product });
  }
}

module.exports = new HomeController(products);
