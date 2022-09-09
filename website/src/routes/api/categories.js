const express = require("express")
const router = express.Router()
const categoriesAPIController = require("../../controllers/api/categoriesAPIController")

router.get("/", categoriesAPIController.list)
router.get("/:id", categoriesAPIController.detail)

module.exports = router