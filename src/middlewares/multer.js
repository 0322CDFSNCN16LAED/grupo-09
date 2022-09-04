const multer = require("multer")
const path = require("path")

let multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let folder = path.join(__dirname, "../public/images/profile-images")
        cb(null, folder)
    },
    filename: (req, file, cb) => {
        let imageName = Date.now() + path.extname(file.originalname)
        cb(null, imageName)
    },
})

let fileUpload = multer({ storage: multerDiskStorage })

module.exports = fileUpload
