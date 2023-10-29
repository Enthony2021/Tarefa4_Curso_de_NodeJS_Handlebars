const Router = require("express");
const homeController = require("../controllers/homeController");

const router = new Router();

router.get("/", homeController.index);
router.get("/product/:id", homeController.product);

module.exports = router;
