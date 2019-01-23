<?php

@ $conexion = new mysqli('localhost', 'root', 'root', 'alumno_ies_obb');
$error = $conexion->connect_errno;
$conexion->set_charset("utf8");
if ($error != null) {
    echo "<p>Error $error conectando a la base de datos:
$conexion->connect_error</p>";
}
