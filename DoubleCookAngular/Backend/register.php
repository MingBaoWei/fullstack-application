<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

// Configuración de la conexión a la base de datos
$servername = "WIN-DELJ78QFRUF";
$username = "admin";
$password = "1234";
$database = "mydb";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos del formulario de registro
$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];
$nombre_apellido = $_POST['nombre_apellido'];
$rol = $_POST['rol'];
$numero = $_POST['numero'];

// Consulta SQL para insertar un nuevo usuario en la tabla Usuarios
$sql = "INSERT INTO Usuarios (correo, contrasena, nombre_apellido, rol, numero) 
        VALUES ('$correo', '$contrasena', '$nombre_apellido', '$rol', '$numero')";

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    echo "Usuario registrado correctamente";
} else {
    echo "Error al registrar el usuario: " . $conn->error;
}

// Cerrar la conexión
$conn->close();

?>
