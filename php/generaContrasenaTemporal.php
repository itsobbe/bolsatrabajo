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
            $resultado=$conexion->query("select correo from empresa where cif='$obj->cif'");
            $correo=$resultado->fetch_row();
            $msg="La contraseña temporal es:'$contrasenaTemporal'";
            envia($correo[0],"Contraseña temporal",$msg);
        }
    }else if(property_exists($obj, 'dni')){
        $orden="UPDATE alumnobolsa SET contrasena='$contrasenaTemporal', contrasenaTemporal='S' where dni='$obj->dni'";
        $resultado=$conexion->query($orden);
        if($conexion->affected_rows == 1){
            $resultado=$conexion->query("select correo from alumnobolsa where dni='$obj->nif'");
            $correo=$resultado->fetch_row();
            $msg="La contraseña temporal es:'$contrasenaTemporal'";
            envia($correo[0],"Contraseña temporal",$msg);
        }
    }
    echo json_encode($conexion->affected_rows);