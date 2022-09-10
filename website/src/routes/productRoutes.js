const express = require("express")
const router = express.Router()

// Controllers
const productController = require("../controllers/productsControllers")

// Middlewares
const productValidation = require("../validations/product-validation")
const fileUpload = require("../middlewares/multerNewProduct")

// Rutes

// Todos los productos
// router.get("/", productController.index);
router.get("/products", productController.list)
// Create product
router.get("/formulario", productController.create)
router.post("/formulario", fileUpload.single("image"), productController.store)

// Edit product
router.get("/edit" ,productController.showOptions )
router.post("/edit", productController.searchOptions)
router.get("/edit/:id", productController.edit)
router.put("/edit/:id", productController.updateEdition)

// Delete
router.get("/delete/:id", productController.delete)
router.delete("/delete/:id", productController.destroy)

// Product cart / Detail
router.get("/productcart", productController.productCart)
router.get("/:id", productController.productDetail)

module.exports = router
