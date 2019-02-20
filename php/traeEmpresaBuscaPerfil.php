<?php
    include_once 'conexion.php';
    $perfil=json_decode($_REQUEST["obj"]);
    $orden="select DISTINCT e.nombre as 'Nombre',e.cif as 'CIF',e.correo as 'Correo',e.telefono as 'Telefono' from empresa e,solicitud s where e.cif=s.cif and s.perfil='$perfil->perfil'";
    
    $resultado=$conexion->query($orden);
    if($resultado->num_rows > 0){
        while($row=$resultado->fetch_object()){
            $array[]=$row;
        }
        echo json_encode($array);
    }else echo json_encode(-1);