<?php
include_once 'conexion.php';

    $alumno=json_decode($_REQUEST["obj"]);
    
    $orden="select * from alumnobolsa where dni='$alumno->dni'";
    $resultado=$conexion->query($orden);
    if($resultado->num_rows == 1){
        $obj=$resultado->fetch_object();
        echo json_encode($obj);
    }else{
        echo json_encode(-1);
    }