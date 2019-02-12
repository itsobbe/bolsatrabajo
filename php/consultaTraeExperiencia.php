<?php
    include_once 'conexion.php';
    $alumno=json_decode($_REQUEST["obj"]);
    
    //orden
    $orden="select e.* from alumnobolsa a,experiencia e where a.dni=e.dniAlumno AND a.dni='$alumno->dni'";
    $resultado=$conexion->query($orden);
    if($resultado->num_rows > 0){
        while($row=$resultado->fetch_object()){
            $array[]=$row;
        }
        echo json_encode($array);
    }else{
        echo json_encode(-1);
    }