const path = require("path")
const db = require("../../database/models")
const sequelize = db.sequelize
const { Op } = require("sequelize")

const productsAPIcontroller = {
    list: async (req, res) => {
        const {count, rows} = await db.Products.findAndCountAll()

            let respuesta = {
                meta: {
                    status: 200,
                    total: productsAPIcontroller.length,
                    url: "api/products",
                },
                products : rows.map((product)=>{
                    return {
                       ...product.toJSON()
                    }
                }),
                count : {count}
               
            }
            res.json(respuesta)
       
    },
    detail: (req, res) => {
        db.Products.findByPk(req.params.id).then((product) => {
            let respuesta = {
                meta: {
                    status: 200,
                   
                    url: "/api/product/:id",
                },
                data: {
                    product
                },
            }
            res.json(respuesta)
        })
    },
}

module.exports = productsAPIcontroller