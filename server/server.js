const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuración de la conexión MySQL
const connection = mysql.createConnection({
    host: '192.168.1.13',
    user: 'admin',
    password: '1234Qwer',
    database: 'mydb',
    connectTimeout: 300000
});

// Conexión a la base de datos
connection.connect(function(err){
    if(err){
        throw err;
    } else {
        console.log("Conexion hecha");
    }
});

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para habilitar CORS
app.use(cors());

// Definir ruta para obtener datos de la tabla 'menus'
app.get('/api/data', (req, res) => {
    // Consulta SQL para obtener los datos de la tabla 'menus'
    connection.query('SELECT * FROM usuarios', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});

// Definir ruta para iniciar sesión
app.post('/api/iniciar-sesion', (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const { correo, contrasena } = req.body;

    // Realizar la verificación de las credenciales en la base de datos
    connection.query('SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?',
        [correo, contrasena],
        (error, results) => {
            if (error) {
                res.status(500).json({ error: error.message }); // Error del servidor
            } else {
                if (results.length > 0) {
                    // Enviar los datos del usuario junto con el mensaje de inicio de sesión exitoso
                    res.status(200).json({ message: 'Inicio de sesión exitoso', user: results[0] });
                } else {
                    res.status(401).json({ error: 'Credenciales inválidas' }); // Credenciales inválidas
                }
            }
        }
    );
});


// Definir ruta para registrar un nuevo usuario en la base de datos
app.post('/api/register', (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const { correo, contrasena, nombre_apellido, rol, numero } = req.body;

    // Realizar la inserción en la base de datos
    connection.query('INSERT INTO usuarios (correo, contrasena, nombre_apellido, rol, numero) VALUES (?, ?, ?, ?, ?)',
        [correo, contrasena, nombre_apellido, rol, numero],
        (error, results) => {
            if (error) {
                res.status(500).json({ error: error.message }); // Devolver un error en formato JSON
            } else {
                // Si la inserción es exitosa, enviar una respuesta de éxito en formato JSON
                res.status(201).json({ message: 'Usuario registrado exitosamente' });
            }
        }
    );
});

// Definir ruta para obtener datos de la tabla 'menus'
app.get('/api/menus', (req, res) => {
    // Consulta SQL para obtener los datos de la tabla 'menus'
    connection.query('SELECT * FROM menus', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});

// Definir ruta para obtener la lista de platos de un menú
app.get('/api/menu/:id', (req, res) => {
    const menuId = req.params.id;
    // Consulta SQL para obtener los platos de un menú específico
    connection.query('SELECT * FROM menus WHERE idMenus = ?', [menuId], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});


// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
