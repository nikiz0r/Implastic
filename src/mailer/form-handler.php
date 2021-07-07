<?php
    require('class.phpmailer.php');

if ( isset( $_POST['action'] ) ):

    $name = filter_var( $_POST['username'], FILTER_SANITIZE_STRING );
    $from_email = filter_var( $_POST['email'], FILTER_SANITIZE_EMAIL );
    $message = filter_var( $_POST['message'], FILTER_SANITIZE_STRING );

    $to_email = "emailto";    // To email address
    $to_name = "Contato Site";

    $email_subject = 'Nova mensagem de ' . $name . ' - ' . $from_email;

    $mail = new PHPMailer();
    
    $mail->IsSMTP();
    $mail->SMTPDebug = 1;
    $mail->Port = 587;
    $mail->Host = 'smtp.xxx.xxx';
    $mail->SMTPAuth = true;
    $mail->Username = 'username';
    $mail->Password = 'pass';

    $mail->From = $to_email; 
    $mail->FromName = $name;

    $mail->AddAddress($to_email, $to_name);

    $mail->Subject  = $email_subject;
    
    $email_body = file_get_contents('../template/template.html');
    $email_body = str_replace('#NOME#', $name, $email_body);
    $email_body = str_replace('#EMAIL#', $from_email, $email_body);
    $email_body = str_replace('#MENSAGEM#', $message, $email_body);

    $mail->MsgHTML($email_body);
    $mail->IsHTML(true);
    $mail->CharSet="UTF-8";

    $sent = $mail->Send();

    if( $sent ) {
        echo json_encode(array(
            'success' => true,
            'message' => "Mensagem enviada!"
        ));
    } else {
        echo json_encode(array(
                'success' => false,
                'message' => "Ocorreu um erro ao enviar o email, por favor utilize outro meio de comunicação!"
            )
        );
    }

else:

    echo json_encode(array(
            'success' => false,
            'message' => "Invalid Request!"
        )
    );
endif;

die;
