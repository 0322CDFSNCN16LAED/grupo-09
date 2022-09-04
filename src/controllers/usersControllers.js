const bcrypt = require("bcryptjs")
const { validationResult } = require("express-validator")
const db = require("../database/models")

module.exports = {
    showLogin: (req, res) => {
        res.render("users/login")
    },
    /*
  login: async (req,res)=> {
    const emailLogin = req.body.email;
    const passwordLogin = req.body.password;    
    
    const user = await db.Users.findOne({ where: { email: emailLogin } });

      if (user === null) {
         console.log('Not found!');
      } 
      else {
         if (bcrypt.compareSync(passwordLogin, user.password)) {
    
          req.session.loggedUser = user;
          console.log(req.session)
          return res.redirect("/");
         }
         else {};
      };
      
    res.render("users/login", {
        error: true,
    });
  },
    
   */
    login: async (req, res) => {
        const emailLogin = req.body.email
        const password = req.body.password
        const user = await db.Users.findOne({ where: { email: emailLogin } })
        if (user && bcrypt.compareSync(password, user.password)) {
            req.session.loggedUser = user
            res.redirect("/")
            return
        }
        res.render("users/login", {
            error: true,
        })
    },
    profile: (req, res) => {
        res.render("users/profile")
    },
    logout: (req, res) => {
        req.session.destroy()
        return res.redirect("/")
    },
    showRegister: (req, res) => {
        res.render("users/register")
    },

    register: (req, res) => {
        const errors = validationResult(req)
        console.log(errors)
        if (!errors.isEmpty()) {
            res.render("users/register", {
                errors: errors.mapped(),
                old: req.body,
            })
            return
        }
        /*VALIDO MULTER (SI LA IMG SE ENVIO DEL TODO)*/
        let imageFile = req.file
        if (!imageFile) {
            let error = new Error("Porfavor seleccione un archivo.")
            error.httpStatusCode = 400
            return res.send(error)
        }
        /*FIN DE VALIDACION MULTER */
        console.log(req.file.filename)

        db.Users.create({
            email: req.body.email,
            name: req.body.name,
            celular: req.body.phoneNumber,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename,
        }).then((user) => {
            delete user.rePassword
            res.redirect("/users/login")
        })
    },
    edit: async (req, res) => {
        let id = req.params.id
        let userToEdit = await db.Users.findByPk(id)
        res.render("users/user-edit-form", { user: userToEdit })
    },
    updateEdition: (req, res) => {
        let id = req.params.id
        db.Users.update(
            {
                name: req.body.name,
                email: req.body.email,
                celular: req.body.phoneNumber,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.file.filename,
            },
            {
                where: { id: id },
            }
        ).then((u) => {
            res.redirect("/")
        })
    },
}
