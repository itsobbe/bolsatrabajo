<?php 

include_once 'conexion.php';
$obj=json_decode($_REQUEST['obj']);
$quien=json_decode($_REQUEST['id']);

if($quien == "empresa"){
    $orden="UPDATE empresa set contrasena='".$obj->contrasena."' where cif='".$obj->cif."'";
    $resultado=$conexion->query($orden);
    if($conexion->affected_rows == 1){
        $orden="UPDATE empresa set contrasenaTemporal='N' where cif='".$obj->cif."'";
        $resultado=$conexion->query($orden);
        if($conexion->affected_rows == 1){
            echo json_encode(1);
        }else{
            echo json_encode(-1);
        }
    }
}
if($quien == "alumno"){
    $orden="UPDATE alumnobolsa set contrasena='".$obj->contrasena."' where dni='".$obj->dni."'";
    $resultado=$conexion->query($orden);
    if($conexion->affected_rows == 1){
        $orden="UPDATE alumnobolsa set contrasenaTemporal='N' where dni='".$obj->dni."'";
    $resultado=$conexion->query($orden);
    if($conexion->affected_rows == 1){
        echo json_encode(1);
    }else{
        echo json_encode(-1);
    }
}
}