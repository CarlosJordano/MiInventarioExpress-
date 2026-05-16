const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const productoController = require('../controllers/productoController');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');

router.use(authMiddleware); // Proteger todas las rutas de productos

router.get('/', productoController.listarProductos);

router.post('/', upload.single('imagen'), [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('precio').isNumeric().withMessage('El precio debe ser un número'),
    body('descripcion').notEmpty().withMessage('La descripción es obligatoria')
], productoController.crearProducto);

router.post('/eliminar/:id', productoController.eliminarProducto);

module.exports = router;