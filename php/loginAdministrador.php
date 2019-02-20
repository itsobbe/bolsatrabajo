<?php
    include_once 'conexion.php';

    $administrador=json_decode($_REQUEST["obj"]);
    $orden="select * from administrador where nombre='$administrador->nombre' AND contrasena='$administrador->contrasena'";
    $resultado=$conexion->query($orden);
    if($resultado->num_rows == 1){
        $objAdmin=$resultado->fetch_object();
        echo json_encode($objAdmin);
    }else{
        echo json_encode(-1);
    }
   