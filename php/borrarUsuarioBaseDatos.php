<?php
    include_once 'conexion.php';

    $usuario=json_decode($_REQUEST["obj"]);
    
    try{
        

        $orden="delete from empresa where cif='$usuario->documento'";
        $resultado=$conexion->query($orden);
        if($conexion->affected_rows == 1){
            echo json_encode(1);
            exit;
        }
        $orden="delete from alumnobolsa where dni='$usuario->documento'";
        $resultado=$conexion->query($orden);
        if($conexion->affected_rows == 1){
            echo json_encode(1);
            exit;
        }
    
    echo json_encode(-1);
    }catch(Exception $e){
        echo json_encode(-1);
    }
    