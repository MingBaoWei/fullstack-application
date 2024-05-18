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

// Definir ruta para obtener datos de un menú específico y sus platos
app.get('/api/menu/:idMenus', (req, res) => {
    const menuId = req.params.idMenus;
    // Consulta SQL para obtener los datos del menú y sus platos asociados
    const query = `
        SELECT m.idMenus, m.nombre AS nombreMenu, m.precio, m.descripcion AS descripcionMenu, m.img, m.categorias,
               p.idPlato, p.nombre AS nombrePlato, p.descripcion AS descripcionPlato, p.precio AS precioPlato
        FROM menus m
        LEFT JOIN platos p ON m.idMenus = p.idMenus
        WHERE m.idMenus = ?
    `;
    connection.query(query, [menuId], (error, results) => {
        if (error) {
            res.status(500).send({ error: 'Error al obtener el menú' });
        } else {
            // Organizar los resultados para tener un objeto de menú con su lista de platos asociados
            const menu = {
                idMenus: results[0].idMenus,
                nombre: results[0].nombreMenu,
                precio: results[0].precio,
                descripcion: results[0].descripcionMenu,
                img: results[0].img,
                categorias: results[0].categorias,
                platos: results.map(row => ({
                    idPlato: row.idPlato,
                    nombre: row.nombrePlato,
                    descripcion: row.descripcionPlato,
                    precio: row.precioPlato
                }))
            };
            res.json(menu); // Devolver los resultados como JSON
        }
    });
});
/*
// Ruta para crear un nuevo menú
app.post('/api/menu', (req, res) => {
    const { nombre, precio, descripcion, img, categorias } = req.body; // Obtener los datos del cuerpo de la solicitud

    // Consulta SQL para insertar un nuevo menú con la ruta de la imagen
    const query = 'INSERT INTO menus (nombre, precio, descripcion, img, categorias) VALUES (?, ?, ?, ?, ?)';
    
    // Ejecutar la consulta SQL con los datos proporcionados
    connection.query(query, [nombre, precio, descripcion, img, categorias], (error, results) => {
        if (error) {
            res.status(500).send({ error: 'Error al crear el menú' });
        } else {
            res.status(201).send('Menú insertado correctamente'); // Enviar una respuesta al cliente
        }
    });
});
*/


// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
