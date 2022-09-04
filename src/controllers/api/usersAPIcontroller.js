const path = require("path")
const db = require("../../database/models")
const sequelize = db.sequelize
const { Op } = require("sequelize")

const usersAPIcontroller = {
    list: (req, res) => {
        db.Users.findAll().then((user) => {
            let respuesta = {
                meta: {
                    status: 200,
                    total: usersAPIcontroller.length,
                    url: "api/users",
                },
                data: {
                    users: [
                        (id = user.id),
                        (name = user.name),
                        (email = user.email),
                        (detail = `api/users/${user.id} `),
                    ],
                    count: db.Users.count(),
                },
            }
            res.json(respuesta)
        })
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
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    celular: user.celular,
                    /*FALTA UNA PROPIEDAD QUE TRAIGA UNA URL PARA ACCEDER AL AVATAR DEL USUARIO */
                },
            }
            res.json(respuesta)
        })
    },
}

module.exports = usersAPIcontroller
