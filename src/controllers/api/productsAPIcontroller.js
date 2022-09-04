const path = require("path")
const db = require("../../database/models")
const sequelize = db.sequelize
const { Op } = require("sequelize")

const productsAPIcontroller = {
    list: (req, res) => {},
    detail: (req, res) => {},
}

module.exports = productsAPIcontroller
