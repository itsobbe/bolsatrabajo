<?php
    include_once 'conexion.php';
    $alumno=json_decode($_REQUEST["obj"]);
    $empresa=json_decode($_REQUEST["objEmp"]);

    $orden="INSERT INTO empleadora VALUES(null,'$alumno->dni','$empresa->cif',curdate())";
    $resultado=$conexion->query($orden);
    echo json_encode($conexion->affected_rows);