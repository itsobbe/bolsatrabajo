<?php
function envia($to,$subject,$msg){
    $fromEmail="elbazar@gmail.com";
    $fromName="Bolsawa";
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From:  ' . $fromName . ' <' . $fromEmail .'>' . " \r\n" .
                'Reply-To: '.  $fromEmail . "\r\n" .
                'X-Mailer: PHP/' . phpversion();

   return mail($to,$subject,$msg,$headers);
}

?>