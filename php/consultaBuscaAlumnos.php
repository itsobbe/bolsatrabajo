<?php
include_once 'conexion.php';
    //recogemos obj json
    $alumno=json_decode($_REQUEST["obj"]);

    print_r();

    $orden="SELECT * from alumnobolsa a left join experiencia e on a.dni=e.dniAlumno left join estudioalumno ea on a.dni=ea.dniAlumno left join estudiocentro ec on ea.idCentroEstudio=ec.idEstudio";
    //poner las condiciones que faltan que vienen del formulario
    //los alumnos pueden tener varias experiencias cursos... se repiten filas debido a ello
    //habria que componer un obj con arrays de cursos, experiencias, estudios...
    //$orden.="AND ";

