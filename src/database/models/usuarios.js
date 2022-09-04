module.exports = (sequelize, dataTypes) => {
    let cols = {
        id: { autoIncrement: true, primaryKey: true, type: dataTypes.INTEGER },
        email: { type: dataTypes.STRING },
        name: { type: dataTypes.STRING },
        celular: { type: dataTypes.INTEGER },
        password: { type: dataTypes.STRING },
        avatar: { type: dataTypes.STRING },
    }

    let config = { tableName: "users", timestamps: false }
    const Users = sequelize.define("Users", cols, config)

    Users.associate = function (models) {
        Users.belongsToMany(models.Products, {
            as: "products",
            through: "users_products",
            foreignKey: "users_id",
            otherKey: "products_id",
            timestamps: false,
        })
    }
    return Users
}
