<?php
    include_once 'conexion.php';
    $empresa=json_decode($_REQUEST["obj"]);
    $orden="select * from empresa where cif='$empresa->cif'";
    $resultado=$conexion->query($orden);
    $empresaObj=new stdClass();

    if($resultado->num_rows > 0){
        $empresaObj=$resultado->fetch_object();
        $orden2="select count(*) from empleadora where cif='$empresa->cif'";
        $resultado2=$conexion->query($orden2);
        if($resultado2->num_rows > 0){
            $empresaObj->contratos=$resultado2->fetch_row()[0];
        }
        $orden3="select count(*) from solicitud where cif='$empresa->cif'";
        $resultado3=$conexion->query($orden3);
        if($resultado3->num_rows > 0){
            $empresaObj->solicitudes=$resultado3->fetch_row()[0];
        }
        
        echo json_encode($empresaObj);
    }else echo json_encode(-1);
    