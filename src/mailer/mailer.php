<?php
    require('class.phpmailer.php');

    $mail = new PHPMailer();

    $mail->IsSMTP();
    $mail->SMTPDebug = 1;
    $mail->Port = 587;
    $mail->Host = 'smtp.xxx.xxx';
    $mail->SMTPAuth = true;
    $mail->Username = 'username';
    $mail->Password = 'pass';

    $mail->From = 'emailfrom'; 
    $mail->FromName = 'name';

    $mail->AddAddress('emailfrom', 'Envio SMTP');

    $mail->Subject  = 'Implastic subject';
    $mail->Body = 'Este é o corpo da mensagem em HTML!';

    if (!$mail->Send()) {
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message sent!';
    }