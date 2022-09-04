const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images/avatars")
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.avatar + "-" + Date.now() + path.extname(file.originalname)
        )
    },
})

const uploadFile = multer({ storage: storage })

module.exports = uploadFile
