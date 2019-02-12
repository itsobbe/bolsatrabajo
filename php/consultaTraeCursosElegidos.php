<?php 
    include_once 'conexion.php';
    $alumno=json_decode($_REQUEST["obj"]);
    $orden="select c.* from alumnobolsa a,cursoalumno ca,curso c where a.dni=ca.dniAlumno AND c.idCurso=ca.idCurso AND a.dni='$alumno->dni'";
    $resultado=$conexion->query($orden);
    if($resultado->num_rows > 0){
        while($row=$resultado->fetch_object()){
            $array[]=$row;
        }
        echo json_encode($array);
    }else{echo json_encode(-1);}