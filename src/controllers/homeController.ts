const products = require("../../data/data");

class HomeController {
  products: JSON;

  constructor(products: JSON) {
    this.products = products;
  }

  index(req: any, res: { render: (arg0: string, arg1: { products: JSON; }) => void; }) {
    res.render("home", { products });
  }

  product(req: { params: { id: string; }; }, res: { render: (arg0: string, arg1: { product: any; }) => void; }) {
    const product = products[parseInt(req.params.id) - 1];
    res.render("product", { product });
  }
}

module.exports = new HomeController(products);
