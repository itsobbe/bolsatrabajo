<?php
include_once 'conexion.php';

$alumno= json_decode($_REQUEST["obj"]);
// print_r($alumno);
    include_once 'generaContrasena.php';
    $contra=generar(10);
        //insertamos alumno
    $orden1="INSERT INTO alumnobolsa values(null,'$alumno->nombre','$alumno->apellido','$alumno->direccion','$alumno->email','$alumno->nacimiento','$alumno->viajar','$alumno->residir',$contra,'$alumno->nif','$alumno->permanente','S')";
    $resultado=$conexion->query($orden1);

        //insertamos estudios
    foreach($alumno->estudios as $key=>$value){
        $ordenCursos="INSERT INTO estudioalumno values(null,'$alumno->nif','$value')";
        $resultado=$conexion->query($ordenCursos);
    }

        //insertamos curso y a la vez cogemos el id con funcion php e insertamos cursoalumno
    
    foreach($alumno->cursos as $key){
        //print_r($key[0]."-------".$key[1].".....".$key[2]);
        
        $orden="INSERT INTO curso VALUES(null,'$key[0]','$key[1]','$key[2]')";
        $resultado=$conexion->query($orden);

        $orden="INSERT INTO cursoalumno VALUES(null,'$alumno->nif',$conexion->insert_id)";
        $resultado=$conexion->query($orden);
        
    }

    //insertamos experiencia
    foreach($alumno->experiencia as $key){
        //print_r($key[0]."-------".$key[1].".....".$key[2]);
        $orden="INSERT INTO experiencia VALUES(null,'$alumno->nif','$key[0]','$key[1]','$key[2]')";
        $resultado=$conexion->query($orden);
    }

    
    include_once 'enviarCorreo.php';
    $msg="Su contraseña temporal es: $contra";
    envia($alumno->email,"Cotraseña temporal",$msg);

    echo json_encode($conexion->affected_rows);


   

// echo $conexion->affected_rows;