<?php
    include_once 'conexion.php';
    $empresa=json_decode($_REQUEST["obj"]);
    
    $orden="UPDATE empresa set nombre='$empresa->nombre' , correo='$empresa->correo' , telefono='$empresa->telefono'  WHERE cif='$empresa->cif'";
    $resultado=$conexion->query($orden);

 
        echo json_encode($conexion->affected_rows);
    