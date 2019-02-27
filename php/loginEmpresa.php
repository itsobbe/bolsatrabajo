<?php
include_once 'conexion.php';

    $empresa=json_decode($_REQUEST["obj"]);
    //print_r($empresa);
    $orden="select * from empresa where cif='".$empresa->cif."' and contrasena='".$empresa->contrasena."'";
    $resultado=$conexion->query($orden);

    if($resultado->num_rows == 1){
        $obj=$resultado->fetch_object();

        $orden="UPDATE empresa set ultimaConexion=curdate() where cif='$empresa->cif'";
        $resultadoUpd=$conexion->query($orden);
        echo json_encode($obj);
    }else{
        echo json_encode(-1);
    }