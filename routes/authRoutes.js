const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', (req, res) => res.redirect('/login'));
router.get('/login', authController.mostrarLogin);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/crear-admin', authController.crearAdmin); // Ejecutar una vez en el navegador para crear usuario

module.exports = router;