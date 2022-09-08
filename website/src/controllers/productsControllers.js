const db = require("../database/models")
const fetch = require("node-fetch")
const { validationResult } = require("express-validator")

const controllers = {
    productCart: (req, res) => {
        res.render("product/productcart")
    },
    productDetail: async (req, res) => {
        const idDelTourBuscado = req.params.id
        const tour = await db.Products.findOne({
            where: { id: idDelTourBuscado },
        })
        const otrosTours = await db.Products.findAll({
            limit: 6,
        })

        if (tour) {
            res.render("product/productdetail", {
                tour,
                otrosTours,
            })
        } else {
            res.render("not-found")
        }
    },
    // Root - Show all products from the database
    index: (req, res) => {
        db.Products.findAll().then((products) => {
            res.render("index", { products })
        })
    },
    create: async (req, res) => {
        const continentes = ["Europa", "America", "Africa", "Oceania", "Asia"]
        const countries = await fetch("https://restcountries.com/v2/all")
            .then((response) => response.json())
            .then((paises) => {
                res.render("product/productCreate", { paises, continentes })
            })
    },
    store: (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            res.render("product/productCreate", {
                errors: errors.mapped(),
                old: req.body,
            })
            return
        }
        const newProduct = req.body
        console.log(newProduct)
        db.Products.create({
            name: newProduct.name,
            price: newProduct.price,
            description: newProduct.description,
            opinions: newProduct.opinions,
            image: req.file.filename,
            continent: newProduct.continent,
            rate: newProduct.rate,
            country: newProduct.country,
            city: newProduct.city,
            discount: newProduct.discount,
            imageProductDetail: null,
        })
            .then((p) => {
                return res.redirect("/product/products")
            })
            .catch((error) => res.send(error))
    },
    edit: (req, res) => {
        /* ASI IRIA CON EL MULTER SI ANDARA  SEQUELIZE (Hay que arreglar el index)*/
        let id = req.params.id
        db.Products.findByPk(id).then((tour) => {
            console.log(tour)
            res.render("product/product-edit-form", { product: tour })
        })
    },

    updateEdition: (req, res) => {
        let id = req.params.id
        db.Products.update(
            {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                continent: req.body.continent,
                rate: req.body.rate,
                opinions: req.body.opinions,
                country: req.body.country,
                city: req.body.city,
                discount: req.body.discount,
            },
            {
                where: { id: id },
            }
        ).then(() => {
            res.render("/")
        })
    },
    delete: (req, res) => {
        db.Products.findByPk(req.params.id).then((tourBuscado) => {
            res.render("./product/delete", { tourBuscado: tourBuscado })
        })
    },
    destroy: (req, res) => {
        let id = req.params.id
        db.Products.destroy({
            where: {
                id: id,
            },
        }).then((p) => {
            res.redirect("/product/products")
        })
    },

    // bring all products from the database
    list: (req, res) => {
        db.Products.findAll().then((products) => {
            res.render("./product/products", { products })
        })
    },
}
module.exports = controllers
/*
// Delete - Delete one product from Database
*/
