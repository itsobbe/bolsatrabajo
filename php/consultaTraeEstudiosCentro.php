<?php
include_once 'conexion.php';

$orden="select * from estudiocentro";
$resultado=$conexion->query($orden);

$array=array();

while($row=$resultado->fetch_object()){
    $array[]=$row;
}

echo json_encode($array);