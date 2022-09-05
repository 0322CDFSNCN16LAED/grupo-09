function authMiddleware(req, res, next) {
    if (!req.session.loggedUser) {
        return res.redirect("/login")
    }
    next()
}

module.exports = authMiddleware
