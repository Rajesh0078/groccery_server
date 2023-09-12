const express = require("express")
const { categoryCtrl, locationCtrl } = require("../controllers/storeCTRL")
const { categoriesCtrl, navCategoryCtrl, filterInData } = require("../controllers/categoriesCtrl")
const main_productsCtrl = require("../controllers/main_productsCtrl")
const createCart = require("../controllers/cartCtrl")
const router = express.Router()


router.post("/category", categoryCtrl)
router.get("/location", locationCtrl)
router.get("/categories", categoriesCtrl)
router.post("/categories/nav", navCategoryCtrl)
router.get("/categories/filter", filterInData)
router.get("/main/products", main_productsCtrl)
router.post("/cart", createCart)


module.exports = router