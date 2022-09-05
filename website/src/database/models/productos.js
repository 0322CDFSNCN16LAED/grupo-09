module.exports = (sequelize, dataTypes) => {
    let cols = {
        id: { autoIncrement: true, primaryKey: true, type: dataTypes.INTEGER },
        name: { type: dataTypes.STRING },
        price: { type: dataTypes.INTEGER },
        description: { type: dataTypes.STRING },
        image: { type: dataTypes.STRING },
        continent: { type: dataTypes.STRING },
        rate: { type: dataTypes.INTEGER },
        opinions: { type: dataTypes.INTEGER },
        country: { type: dataTypes.STRING },
        city: { type: dataTypes.STRING },
        imageProductDetail: { type: dataTypes.STRING },
        discount: { type: dataTypes.STRING },
    }

    let config = {
        tableName: "products",
        timestamps: false,
    }
    const Products = sequelize.define("Products", cols, config)

    Products.associate = function (models) {
        Products.belongsToMany(models.Users, {
            as: "users",
            through: "users_products",
            foreignKey: "products_id",
            otherKey: "users_id",
            timestamps: false,
        })
    }

    return Products
}
