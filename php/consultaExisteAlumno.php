<?php
include_once 'conexionIES.php';

$alumno=JSON_decode($_REQUEST['obj']);

$orden="select * from alumnoies where dni='".$alumno->nif."'";
$resultado=$conexion->query($orden);

$filas=$resultado->num_rows;
$fin=json_encode($filas);

echo $fin;

?>