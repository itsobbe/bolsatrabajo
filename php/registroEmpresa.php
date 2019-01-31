<?php

    include 'conexion.php';

    //recogemos datos json
    $obj=json_decode($_REQUEST["obj"]);
    //print_r($obj);

    //generamos contraseña
    include_once 'generaContrasena.php';
    $contrasena=generar(10);
    //registramos
    $orden="INSERT INTO empresa VALUES(null,'$obj->nombre','$obj->cif','$obj->correo',$obj->telefono,'$contrasena','S')";
    $resultado=$conexion->query($orden);

    $hecho=false;
    if($conexion->affected_rows == 1){
        include_once 'enviarCorreo.php';
        $contra="Aquí tiene su contraseña temporal de un solo uso para el primer login: '".$contrasena."'";
        $hecho=envia($obj->correo,'Contraseña temporal',$contra);
        
    }

    if($conexion->affected_rows == 1 && $hecho){
        echo json_encode(1);
    }else echo json_encode(-1);
?>