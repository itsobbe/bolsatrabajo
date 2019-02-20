<?php

    include_once 'conexion.php';

    $alumno=json_decode($_REQUEST["obj"]);

    $objAlumno=new stdClass();
    

    //$orden="select *,a.nombre as 'NombreAlumno' from alumnobolsa a,estudioalumno e,estudiocentro ec where a.dni=e.dniAlumno and e.idCentroEstudio=ec.idEstudio and a.dni='$alumno->dni'";
    $ordenDatosPersonales="select * from alumnobolsa where dni='$alumno->dni'";
    $resultado=$conexion->query($ordenDatosPersonales);
    if($resultado->num_rows > 0){
        $objAlumno=$resultado->fetch_object();

        $ordenCursos="select c.* from curso c,alumnobolsa a, cursoalumno ca where a.dni=ca.dniAlumno and ca.idCurso=c.idCurso and a.dni='$alumno->dni'";
        $resultadoCursos=$conexion->query($ordenCursos);
        if($resultadoCursos->num_rows > 0){
            $objAlumno->cursos=Array();
            while($row=$resultadoCursos->fetch_object()){
                array_push($objAlumno->cursos,$row);
            }
        }
        $ordenEstudios="select ec.* from estudiocentro ec,alumnobolsa a, estudioalumno ea where a.dni=ea.dniAlumno and ea.idCentroEstudio=ec.idEstudio and a.dni='$alumno->dni'";
        $resultadoEstudios=$conexion->query($ordenEstudios);
        if($resultadoEstudios->num_rows > 0){
            $objAlumno->estudios=Array();
            while($row=$resultadoEstudios->fetch_object()){
                array_push($objAlumno->estudios,$row);
            }
        }
        $ordenExperiencia="select e.* from experiencia e,alumnobolsa a where a.dni=e.dniAlumno and a.dni='$alumno->dni'";
        $resultadoExperiencia=$conexion->query($ordenExperiencia);
        if($resultadoExperiencia->num_rows > 0){
            $objAlumno->experiencia=Array();
            while($row=$resultadoExperiencia->fetch_object()){
                array_push($objAlumno->experiencia,$row);
            }
        }
        echo json_encode($objAlumno);
    }else{
        echo json_encode(-1);
    }
