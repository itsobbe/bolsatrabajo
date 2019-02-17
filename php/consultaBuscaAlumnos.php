<?php
include_once 'conexion.php';
    //recogemos obj json
    $alumno=json_decode($_REQUEST["obj"]);
    $cif=json_decode($_REQUEST["cif"]);
    
    //registramos los datos de la solicitud en bd ! falta pasar por get obj emp o cif
    $orden="INSERT INTO solicitud VALUES(null,curdate(),'".$alumno->perfil."','".$alumno->viajar."','".$alumno->residir."','".$cif."','".$alumno->permanente."')";
    $resultado=$conexion->query($orden);
    //echo $conexion->error;

    // $orden="SELECT * from alumnobolsa a left join experiencia e on a.dni=e.dniAlumno left join estudioalumno ea on a.dni=ea.dniAlumno left join estudiocentro ec on ea.idCentroEstudio=ec.idEstudio";
    //poner las condiciones que faltan que vienen del formulario
    //los alumnos pueden tener varias experiencias cursos... se repiten filas debido a ello
    //habria que componer un obj con arrays de cursos, experiencias, estudios...
    //$orden.="AND ";
    
    $orden="select a.nombre AS Nombre,a.apellido AS Apellidos,a.dirección AS Dirección,a.dni AS DNI,a.correo AS Email,a.fechaNac AS 'Fecha nacimiento',a.cambiarResidencia AS 'Cambio residencia',a.permanente AS 'Disponibillidad permanente',a.viajar AS 'Viajar' from alumnobolsa a, experiencia e, estudioalumno ea,estudiocentro ec where a.dni=e.dniAlumno AND ea.dniAlumno=a.dni AND ec.idEstudio=ea.idCentroEstudio";
    
    $orden= $orden . " AND ec.nombre='".$alumno->perfil."' ";
    $orden= $orden . " AND e.tiempo >= '".$alumno->experiencia."' ";
    $orden= $orden . " AND a.viajar = '".$alumno->viajar."' ";
    $orden= $orden . " AND a.cambiarResidencia = '".$alumno->residir."' ";
    $orden= $orden . " AND a.permanente = '".$alumno->permanente."' ";
    $orden= $orden . " GROUP BY a.dni ";
    // $orden= $orden . " AND  = '".$alumno->permanente."' ";
    
    $resultado=$conexion->query($orden);

    $array=Array();
    if($resultado->num_rows >= 1){
        //montar obj teniendo en cuenta que los alumnos que devuelvo tienen arrays dentro
        //lo dificil es leer lo que devuelve la consulta y controlar si el nuevo alumno es igual o no al anterior
        //montar aqui? dificil porque no tengo clase alumno. si creo en js mas facil
        //decision montar en js, aqui devolver todos los obj

        while($row=$resultado->fetch_object()){
            $array[]=$row;
        }
        echo json_encode($array);
    }else echo json_encode(-1);

