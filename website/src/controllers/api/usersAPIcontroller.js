const path = require("path")
const db = require("../../database/models")
const sequelize = db.sequelize
const { Op } = require("sequelize")

const usersAPIcontroller = {
    list: async (req, res) => {
        const {count, rows} = await db.Users.findAndCountAll()

            let respuesta = {
                meta: {
                    status: 200,
                    total: usersAPIcontroller.length,
                    url: "api/users",
                },
                users : rows.map((user)=>{
                    return {
                        name : user.name,
                        id : user.id,
                        email: user.email,
                        detail: `api/users/${user.id}`
                        /*FALTA UNA URL PARA MOSTRAR LA IMAGEN DEL PERFIL */
                    }
                }),
                count : count
               
            }
            res.json(respuesta)
       
    },
    detail: (req, res) => {
        db.Users.findByPk(req.params.id).then((user) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: user.length,
                    url: "/api/user/:id",
                },
                data: {
                    name : user.name,
                    id : user.id,
                    email: user.email,
                    phoneNumber : user.celular,
                    detail: `api/users/${user.id}`
                },
            }
            res.json(respuesta)
        })
    },
}

module.exports = usersAPIcontroller