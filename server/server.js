const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar el paquete cors

const app = express();

// Configuración de la conexión MySQL
const connection = mysql.createConnection({
    host: 'WIN-DELJ78QFRUF',
    user: 'admin',
    password: '1234',
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
    connection.query('SELECT * FROM menus', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.send(results);
        }
    });
});

// Definir ruta para registrar un nuevo usuario en la base de datos
app.post('/api/usuarios', (req, res) => {
    // Obtener los datos del cuerpo de la solicitud
    const { correo, contrasena, nombre_apellido, rol, numero } = req.body;

    // Realizar la inserción en la base de datos
    connection.query('INSERT INTO usuarios (correo, contrasena, nombre_apellido, rol, numero) VALUES (?, ?, ?, ?, ?)',
        [correo, contrasena, nombre_apellido, rol, numero],
        (error, results) => {
            if (error) {
                throw error;
            } else {
                // Si la inserción es exitosa, enviar una respuesta de éxito
                res.status(201).send('Usuario registrado exitosamente');
            }
        }
    );
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
