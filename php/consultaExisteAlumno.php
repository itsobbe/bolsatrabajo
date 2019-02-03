<?php
include_once 'conexionIES.php';

$alumno=JSON_decode($_REQUEST['obj']);

    //por no cambiar cosas en conexion bolsa normal lo hago aqui
    $conexionbolsa = new mysqli('localhost', 'root', 'root', 'bolsa_obb');
    //buscar primero si existe en alumnobolsa
    $orden1="select * from alumnobolsa where dni='".$alumno->nif."'";
    //echo $orden1;
    $resultado1=$conexionbolsa->query($orden1);
    //echo $conexionbolsa->error;
    if($resultado1->num_rows == 1){
        echo json_encode(-1);
    }else{
        $orden="select * from alumnoies where dni='".$alumno->nif."'";
        $resultado=$conexion->query($orden);

        $filas=$resultado->num_rows;
        $fin=json_encode($filas);

        echo $fin;
    }

?>