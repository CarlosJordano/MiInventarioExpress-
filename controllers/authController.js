const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

exports.mostrarLogin = (req, res) => {
    res.render('login', { layout: 'main' });
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ username });
        if (usuario && await bcrypt.compare(password, usuario.password)) {
            req.session.usuarioId = usuario._id;
            req.session.username = usuario.username;
            return res.redirect('/productos');
        }
        res.render('login', { error: 'Credenciales inválidas' });
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
};

// Utilidad temporal para crear un admin de prueba
exports.crearAdmin = async (req, res) => {
    try {
        const admin = new Usuario({ username: 'admin', password: '123' });
        await admin.save();
        res.send('Admin creado: Usuario: admin, Pass: 123');
    } catch (error) {
        console.error("ERROR DETALLADO:", error);
        res.send('Fallo al crear admin. El error real es: ' + error.message);
    }
};