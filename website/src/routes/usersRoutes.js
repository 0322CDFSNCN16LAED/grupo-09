const express = require("express")
const router = express.Router()

// Controllers
const usersController = require("../controllers/usersControllers")

// Middlewares
const fileUpload = require("../middlewares/multer")
const registerValidation = require("../validations/register-validation")
const loginValidation = require("../validations/login-validation")
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")

//Rutas
// Registro
router.get("/register", guestMiddleware, usersController.showRegister)
router.post(
    "/register",
    fileUpload.single("avatar"),
    registerValidation,
    usersController.register
)

//Login
router.get("/login", guestMiddleware, usersController.showLogin)
router.post("/login", loginValidation, usersController.login)

// Perfil
router.get("/profile", authMiddleware, usersController.profile)

//Logout
router.get("/logout/", usersController.logout)

// Edit user
router.get("/edituser/:id", usersController.edit)
router.put("/edituser/:id", fileUpload.single("avatar"), usersController.updateEdition)

module.exports = router
