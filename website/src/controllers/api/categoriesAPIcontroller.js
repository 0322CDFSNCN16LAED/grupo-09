const path = require("path")
const db = require("../../database/models")
const sequelize = db.sequelize
const { Op } = require("sequelize")

const categoriesAPIcontroller = {

    list: async (req, res) => {
        const {count, rows} = await db.Products.findAndCountAll()
        const europa = [];
        const africa = [];
        const america = [];
        const asia = [];
        const oceania = [];

        rows.forEach(element => {
           if(element.continent == "América"){
                america.push(element)
           } else if (element.continent == "Europa"){
                europa.push(element)
           } else if(element.continent == "Asia"){
                asia.push(element)
           } else if(element.continent == "Oceania") {
                oceania.push(element)
           } else {
                africa.push(element)
           }
        });

            let respuesta = {
                meta: {
                    status: 200,
                    total: categoriesAPIcontroller.length,
                    url: "api/categories",
                },
                categories : {europa, america, africa, asia, oceania},
                count : {count}
               
            }
            res.json(respuesta)
       
    },
    detail: (req, res) => {
        db.Products.findByPk(req.params.id).then((product) => {
            let respuesta = {
                meta: {
                    status: 200,
                   
                    url: "/api/categories/:id",
                },
                data: {
                    product
                },
            }
            res.json(respuesta)
        })
    },
}

module.exports = categoriesAPIcontroller