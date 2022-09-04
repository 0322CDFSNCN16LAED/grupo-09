module.exports = {
    admin: (req, res) => {
        
        if(req.session.loggedUser.email == "dimaria@gmail.com") {
            res.render("./product/adminpanel")
            console.log("iupi");
        }
        console.log("no tenes permiso")
    },
}
