<?php
echo "hola";
//php code to send mail, 
//author : idrish laxmidhar
//Use this code to send a test mail from your localhost.
 
$to = "oboujloud@gmail.com";
$subject = "Hi!";
$body="test".PHP_EOL;
$body.="Hello World. If all went well then you can see this mail in your Inbox".PHP_EOL;
$body.="Regards".PHP_EOL;
$body.="Idrish Laxmidhar".PHP_EOL;
$body.="http://i-tech-life.blogspot.com".PHP_EOL;
 
$headers = "From: local-owner@localhost.com"; 
mail("oboujloud@gmail.com","Success","Send mail from localhost using PHP")
// if (mail("oboujloud@gmail.com","Success","Send mail from localhost using PHP")) {
// echo("Message successfully sent!");
// } else {
// echo("Message delivery failed...");
// }

// print_r("estoy en mail");
//     $to = "oboujloud@gmail.com";
//     $subject = "My pruebaa";
//     $txt = "Ultima prueba bro";
//     // $headers = "From: webmaster@example.com" . "\r\n" .
//     // "CC: somebodyelse@example.com";

//     if(mail($to,$subject,$txt)){
//         echo("Message successfully sent!");
//     }else {echo("Message nooo");}
//     echo "sdsdsd";

   




?>