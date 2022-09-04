const express = require("express")
const router = express.Router()
const mainController = require("../controllers/main-controller")
const productController = require("../controllers/productsControllers")

router.get("/", productController.index)
router.get("/adminpanel", mainController.admin)

module.exports = router
