<?php

    include 'conexion.php';

    //recogemos datos json
    $obj=json_decode($_REQUEST["obj"]);
    print_r($obj);

    //generamos contraseña
    function generar($length){
   $string = "";
   $chars = "abcdefghijklmanopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   $size = strlen($chars);
   for ($i = 0; $i < $length; $i++) {
       $string .= $chars[rand(0, $size - 1)];
   }
   return $string; 
}

    $contrasena=generar(10);
    //registramos
    $orden="INSERT INTO empresa VALUES(null,'$obj->nombre','$obj->cif','$obj->correo',$obj->telefono,'$contrasena')";
    $resultado=$conexion->query($orden);


    if($conexion->affected_rows == 1){
        include_once 'enviarCorreo.php';

        // enviar($obj->correo,"Contraseña temporal",$contrasena);
        // the message
        $msg = "First line of text\nSecond line of text";

        // use wordwrap() if lines are longer than 70 characters
        $msg = wordwrap($msg,70);

        // send email
        mail("oboujloud@gmail.com","My subject",$msg);
    }


?>