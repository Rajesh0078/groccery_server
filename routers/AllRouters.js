const express = require("express")
const { categoryCtrl, locationCtrl } = require("../controllers/storeCTRL")
const { categoriesCtrl, navCategoryCtrl } = require("../controllers/categoriesCtrl")
const main_productsCtrl = require("../controllers/main_productsCtrl")
const router = express.Router()


router.post("/category", categoryCtrl)
router.get("/location", locationCtrl)
router.get("/categories", categoriesCtrl)
router.post("/categories/nav", navCategoryCtrl)
router.get("/main/products", main_productsCtrl)

module.exports = router