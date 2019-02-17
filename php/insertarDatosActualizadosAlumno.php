<?php
    include_once 'conexion.php';
    $alumno= json_decode($_REQUEST["obj"]);

        //actualizamos el alumno con todos los datos
        $ordenActualizar="UPDATE alumnobolsa SET nombre='$alumno->nombre',apellido='$alumno->apellido',dirección='$alumno->direccion',correo='$alumno->email',fechaNac='$alumno->nacimiento',viajar='$alumno->viajar',cambiarResidencia='$alumno->residir', permanente='$alumno->permanente' WHERE dni='$alumno->nif'";

        $resultado=$conexion->query($ordenActualizar);

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
    
        

    
        echo json_encode($conexion->affected_rows);