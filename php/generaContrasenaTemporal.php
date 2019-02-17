<?php
    include_once 'conexion.php';
    include_once 'generaContrasena.php';
    include_once 'enviarCorreo.php';

    $obj=json_decode($_REQUEST["obj"]);
    
    $contrasenaTemporal=generar(10);

    if(property_exists($obj, 'cif')){
        $orden="UPDATE empresa SET contrasena='$contrasenaTemporal', contrasenaTemporal='S' where cif='$obj->cif'";
        $resultado=$conexion->query($orden);
        if($conexion->affected_rows == 1){
            $msg="La contraseña temporal es:'$contrasenaTemporal'";
            envia($obj->correo,"Contraseña temporal",$msg);
        }
    }else if(property_exists($obj, 'dni')){
        $orden="UPDATE alumnobolsa SET contrasena='$contrasenaTemporal', contrasenaTemporal='S' where dni='$obj->dni'";
        $resultado=$conexion->query($orden);
        if($conexion->affected_rows == 1){
            $msg="La contraseña temporal es:'$contrasenaTemporal'";
            envia($obj->correo,"Contraseña temporal",$msg);
        }
    }
    echo json_encode($conexion->affected_rows);