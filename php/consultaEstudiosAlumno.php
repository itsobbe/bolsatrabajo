<?php
include_once 'conexion.php';

$obj=json_decode($_REQUEST["obj"]);

$orden="select e.* from alumnobolsa a,estudiocentro e,estudioalumno ea where a.dni=ea.dniAlumno AND e.idEstudio=ea.idCentroEstudio AND a.dni='$obj->dni'";

$resultado=$conexion->query($orden);
$array=Array();
if($resultado->num_rows > 0){
    while($row=$resultado->fetch_object()){
        $array[]=$row;
    }
    echo json_encode($array);
}else echo json_encode(-1);
