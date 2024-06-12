<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $nombre_apellido = trim($request->nombre_apellido);
    $contrasena = mysqli_real_escape_string($mysqli, trim($request->contrasena));
    $correo = mysqli_real_escape_string($mysqli, trim($request->correo));
    $rol = mysqli_real_escape_string($mysqli, trim($request->rol));
    $numero = mysqli_real_escape_string($mysqli, trim($request->numero));
    
    $sql = "INSERT INTO usuarios (nombre_apellido, contrasena, correo, rol, numero) VALUES ('$nombre_apellido','$contrasena','$correo','$rol','$numero')";
    if ($mysqli->query($sql) === TRUE) {
        $response = [
            'success' => true,
            'message' => 'Usuario registrado correctamente'
        ];
        echo json_encode($response);
    } else {
        $response = [
            'success' => false,
            'message' => 'Error al registrar usuario: ' . $mysqli->error
        ];
        echo json_encode($response);
    }
}
?>
