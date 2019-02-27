<?php
include_once 'conexion.php';

    $alumno=json_decode($_REQUEST["obj"]);
    //print_r($alumno);
    $orden="select * from alumnobolsa where dni='".$alumno->dni."' AND contrasena='".$alumno->contrasena."'";
    //echo $orden;
    $resultado=$conexion->query($orden);

    if($resultado->num_rows == 1){
        $obj=$resultado->fetch_object();
        $orden="UPDATE alumnobolsa set ultimaConexion=curdate() where dni='$alumno->dni'";
        $resultadoUpd=$conexion->query($orden);
        echo json_encode($obj);
    }else{
        echo json_encode(-1);
    }