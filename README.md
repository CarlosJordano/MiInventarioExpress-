# 📦 MiInventarioExpress

Una aplicación web completa y robusta para la gestión de inventarios, desarrollada bajo el patrón de arquitectura **MVC (Modelo-Vista-Controlador)**. Este sistema permite la administración segura de productos, carga de imágenes y comunicación en tiempo real entre administradores.

## 🎓 Contexto Académico
Este proyecto fue desarrollado como parte de las prácticas integrales del cuarto semestre de la carrera de Ingeniería de Software en la **Universidad Politécnica Salesiana**, demostrando competencias avanzadas en el desarrollo backend y operaciones de bases de datos NoSQL.

## ✨ Características Principales

* **Autenticación de Usuarios:** Sistema de login seguro utilizando sesiones (`express-session`) y encriptación de contraseñas (`bcrypt`).
* **CRUD Completo:** Creación, lectura, actualización y eliminación de productos en el inventario.
* **Gestión de Archivos:** Subida y validación de imágenes de productos almacenadas localmente usando `multer`.
* **Persistencia de Datos:** Integración con MongoDB mediante el ODM `mongoose`.
* **Comunicación en Tiempo Real:** Módulo de chat integrado para administradores conectado mediante `Socket.io`.
* **Interfaz Responsiva:** Vistas dinámicas renderizadas en el servidor con `express-handlebars` y estilizadas con Bootstrap 5.

## 🛠️ Tecnologías Utilizadas

**Backend:**
* Node.js & Express.js
* MongoDB & Mongoose
* Socket.io (WebSockets)
* Bcrypt (Seguridad)
* Multer (Manejo de archivos)

**Frontend:**
* Handlebars (Motor de plantillas)
* HTML5, CSS3, JavaScript puro
* Bootstrap 5

## 📂 Estructura del Proyecto (MVC)

\`\`\`text
MiInventarioExpress/
├── controllers/      # Lógica de negocio (authController, productoController)
├── middlewares/      # Interceptores (Autenticación, subida de archivos)
├── models/           # Esquemas de base de datos (Usuario, Producto)
├── public/           # Archivos estáticos accesibles por el cliente
├── routes/           # Definición de endpoints de la API y vistas
├── uploads/          # Directorio de almacenamiento de imágenes
├── views/            # Plantillas Handlebars (.hbs)
├── app.js            # Punto de entrada y configuración del servidor
└── .env              # Variables de entorno
\`\`\`

## 🚀 Guía de Instalación y Ejecución

### 1. Requisitos Previos
* Tener [Node.js](https://nodejs.org/) instalado.
* Tener [MongoDB](https://www.mongodb.com/try/download/community) corriendo localmente o una cuenta en MongoDB Atlas.

### 2. Clonar el repositorio
\`\`\`bash
git clone https://github.com/CarlosJordano/MiInventarioExpress.git
cd MiInventarioExpress
\`\`\`

### 3. Instalar dependencias
\`\`\`bash
npm install
\`\`\`

### 4. Configurar Variables de Entorno
Crea un archivo \`.env\` en la raíz del proyecto con la siguiente estructura:
\`\`\`env
PORT=3001
MONGODB_URI=mongodb://127.0.0.1:27017/miinventarioexpress
SESSION_SECRET=tu_secreto_super_seguro
\`\`\`

### 5. Iniciar la Aplicación
\`\`\`bash
node app.js
\`\`\`

### 6. Configuración Inicial (Primer Uso)
Para poder ingresar al sistema por primera vez, necesitas crear el usuario administrador:
1. Abre tu navegador y dirígete a: \`http://localhost:3001/crear-admin\`
2. Una vez veas el mensaje de confirmación, dirígete a \`http://localhost:3001/login\`
3. Ingresa con las credenciales por defecto:
   * **Usuario:** \`admin\`
   * **Contraseña:** \`123\`

## 👨‍💻 Autor

**Carlos Jordano**
* GitHub: [@CarlosJordano](https://github.com/CarlosJordano)