require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const { engine } = require('express-handlebars');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Configuración de Handlebars
app.engine('.hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error conectando a MongoDB:', err));

// Rutas
app.use('/', require('./routes/authRoutes'));
app.use('/productos', require('./routes/productoRoutes'));

// Socket.io para el chat
io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado al chat');
    
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Reenviar mensaje a todos
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});