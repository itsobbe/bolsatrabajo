<?php
    include_once 'conexion.php';
    include_once 'enviarCorreo.php';

    $orden="select correo from alumnobolsa where ultimaConexion < DATE_SUB(now(), INTERVAL 12 MONTH)";
    $resultado=$conexion->query($orden);
    if($resultado->num_rows > 0){
        
        while($row=$resultado->fetch_row()){
            $txt="Hola, le informamos que lleva sin acceder en este último año, si no inicia sesión en un plazo de 10 días procederemos
        a darle de baja. Gracias.";
        $hecho=envia($row[0],'Aviso de inactividad',$txt);
        }
    }
    $orden="select correo from empresa where ultimaConexion < DATE_SUB(now(), INTERVAL 6 MONTH)";
    $resultado2=$conexion->query($orden);
    if($resultado2->num_rows > 0){
        while($row=$resultado2->fetch_row()){
            $txt="Hola, le informamos que lleva sin acceder en estos últimos 6 meses, si no inicia sesión en un plazo de 10 días procederemos
        a darle de baja. Gracias.";
        $hecho2=envia($row[0],'Aviso de inactividad',$txt);
        }
    }
    if($resultado2->num_rows < 1 && $resultado->num_rows < 1 && $hecho && $hecho2){
        echo json_encode(-1);
    }else echo json_encode(1);
    