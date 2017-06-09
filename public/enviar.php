<?php
$destino= "alan.villanueva1@hotmail.com;

$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$ciudad = $_POST['ciudad'];
$telefono = $_POST['telefono'];
$comentario = $_POST['Comentario_contacto'];

$contenido= "Nombre: " . $nombre . "\nCorreo:" . $correo . "\nTelefono: . $telefono . "\nComentario: " . $comentario; 
mail($destino, "Contacto" , $contenido);

header("Location:gracias.html");

?>