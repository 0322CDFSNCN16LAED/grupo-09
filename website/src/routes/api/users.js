const express = require("express")
const router = express.Router()
const usersAPIController = require("../../controllers/api/usersAPIController")
const { route } = require("./products")

router.get("/", usersAPIController.list)
router.get("/:id", usersAPIController.detail)
module.exports = router