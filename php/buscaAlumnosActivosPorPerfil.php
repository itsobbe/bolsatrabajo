<?php
    include_once 'conexion.php';
    $perfil=json_decode($_REQUEST["obj"]);

    $orden="select a.nombre as 'Nombre' ,a.apellido as 'Apellidos', a.dirección as 'Dirección',a.correo as 'Correo' from alumnobolsa a,estudioalumno ea,estudiocentro ec where a.dni=ea.dniAlumno and ea.idCentroEstudio=ec.idEstudio and a.contrasenaTemporal='S' and ec.nombre='$perfil->perfil'";
    $resultado=$conexion->query($orden);

    if($resultado->num_rows > 0){
        while($row=$resultado->fetch_object()){
            $array[]=$row;
        }
        echo json_encode($array);
    }else echo json_encode(-1);