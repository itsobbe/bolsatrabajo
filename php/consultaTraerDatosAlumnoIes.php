<?php

include_once 'conexionIES.php';

$alumno=json_decode($_REQUEST["obj"]);

$orden="select * from alumnoies where dni='".$alumno->nif."'";

$resultado=$conexion->query($orden);

$array=Array();
while($row=$resultado->fetch_object()){
    $array[]=$row;
}

$fin=json_encode($array);
echo $fin;