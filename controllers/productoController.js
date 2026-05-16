const Producto = require('../models/Producto');
const { validationResult } = require('express-validator');

exports.listarProductos = async (req, res) => {
    try {
        const productos = await Producto.find().lean();
        res.render('productos', { 
            productos, 
            username: req.session.username 
        });
    } catch (error) {
        res.status(500).send('Error al obtener productos');
    }
};

exports.crearProducto = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }

    try {
        const { nombre, precio, descripcion } = req.body;
        const imagen = req.file ? '/uploads/' + req.file.filename : null;
        
        const nuevoProducto = new Producto({ nombre, precio, descripcion, imagen });
        await nuevoProducto.save();
        res.redirect('/productos');
    } catch (error) {
        res.status(500).send('Error al crear producto');
    }
};

exports.eliminarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.redirect('/productos');
    } catch (error) {
        res.status(500).send('Error al eliminar producto');
    }
};