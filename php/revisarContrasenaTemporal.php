<?php
    include_once 'conexion.php';
    $quien=json_decode($_REQUEST["id"]);
    $obj=json_decode($_REQUEST["obj"]);

    if($quien == "alumno"){
        $orden="select * from alumnobolsa where contrasena='$obj->contrasena' and dni = '$obj->dni'";
        $resultado=$conexion->query($orden);
        echo json_encode($resultado->num_rows);
    }else if($quien == "empresa"){
        $orden="select * from empresa where contrasena='$obj->contrasena' and cif='$obj->cif'";
        $resultado=$conexion->query($orden);
        echo json_encode($resultado->num_rows);
    }

