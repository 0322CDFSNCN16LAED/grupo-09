const express = require("express")
const router = express.Router()
const usersAPIController = require("../../controllers/api/usersAPIController")
const { route } = require("./products")

router.get("/api/users", usersAPIController.list)
router.get("api/users/:id", usersAPIController.detail)
module.exports = router
