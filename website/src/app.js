const path = require("path")
const express = require("express")
const methodOverride = require("method-override")
const userAuth = require("./middlewares/user-auth")
const session = require("express-session")

const app = express()

const PORT = 3000
app.listen(PORT, () => {
    console.log("Estamos corriendo en el puerto " + PORT)
})

app.use(express.static("public"))
// app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride("_method"))
app.set("view engine", "ejs")
app.set("views", "./src/views")

app.use(
    session({
        secret: "mensaje secreto",
        resave: false,
        saveUninitialized: false,
    })
)

const mainRoutes = require("./routes/main.js")
const productRoutes = require("./routes/productRoutes.js")
const usersRoutes = require("./routes/usersRoutes.js")
const usersAPIroutes = require("./routes/api/users")
const productsAPIroutes = require("./routes/api/products")
app.use(userAuth)

app.use("/", mainRoutes)
app.use("/product", productRoutes)
app.use("/users", usersRoutes)
app.use("/api/users", usersAPIroutes)
app.use("/api/products", productsAPIroutes)

app.use((req, res, next) => {
    res.status(404).render("not-found")
    next()
})