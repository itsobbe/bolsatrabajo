<?php
    include_once 'conexion.php';

    $orden="SELECT DISTINCT perfil from estudiocentro";
    $resultado=$conexion->query($orden);

    $array=array();

    if($resultado->num_rows > 0){
        while($row=$resultado->fetch_assoc()){
            $array[]=$row["perfil"];

        }
    }

    echo json_encode($array);

?>