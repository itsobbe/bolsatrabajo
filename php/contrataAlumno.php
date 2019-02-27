<?php
    include_once 'conexion.php';
    $alumno=json_decode($_REQUEST["obj"]);
    $empresa=json_decode($_REQUEST["objEmp"]);

    $orden="INSERT INTO empleadora VALUES(null,'$alumno->dni','$empresa->cif',curdate())";
    $resultado=$conexion->query($orden);
    if($conexion->affected_rows == 1){
        $resultadoActualizar=$conexion->query("update alumnobolsa set disponibilidad='N' where dni='$alumno->dni'");
        if($conexion->affected_rows == 1){
            echo json_encode(1);
        }else echo json_encode(-1);
    }else echo json_encode(-1);
    