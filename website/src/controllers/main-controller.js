module.exports = {
    admin: (req, res) => {
        if (!req.session.loggedUser) {
            res.redirect("/")
        } else if (
            req.session.loggedUser.email == "admin@tripstarter.com" ||
            "tara@gmail.com"
        ) {
            res.render("./product/adminpanel")
            console.log("iupi")
        } else {
            res.redirect("/")
        }
    },
}
