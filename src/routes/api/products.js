const express = require("express")
const router = express.Router()
const productsAPIController = require("../../controllers/api/productsAPIController")

router.get("/api/products", productsAPIController.list)
router.get("/api/products/:id", productsAPIController.detail)

module.exports = router
