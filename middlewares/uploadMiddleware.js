const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const permitidos = /jpeg|jpg|png/;
    const extname = permitidos.test(path.extname(file.originalname).toLowerCase());
    const mimetype = permitidos.test(file.mimetype);
    if (extname && mimetype) {
        return cb(null, true);
    }
    cb(new Error('Solo se permiten imágenes (jpeg, jpg, png)'));
};

module.exports = multer({ storage: storage, fileFilter: fileFilter });