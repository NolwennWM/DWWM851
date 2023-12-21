<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// l'autoload s'occupera de require automatiquement les classes demandées
require __DIR__."/../../vendor/autoload.php";
/**
 * Envoi un mail
 *
 * @param string $from
 * @param string $to
 * @param string $subject
 * @param string $body
 * @return string
 */
function sendMail(string $from, string $to, string $subject, string $body): string
{
    // Le paramètre à true permet d'activer les exceptions (type d'erreur)
    $mail = new PHPMailer(true);

    try
    {
        /* 
            On active l'utilisation de SMTP
            (Simple Mail Transfer Protocol)
        */
        $mail->isSMTP();
        // On indique notre serveur de mail :
        $mail->Host = "sandbox.smtp.mailtrap.io";
        // On active l'authentification par SMTP:
        $mail->SMTPAuth = true;
        // On indique le port du serveur de mail :
        $mail->Port = 2525;
        // On indique les informations d'authentification à notre serveur de mail :
        $mail->Username = "1e77adf0ab1df0";
        $mail->Password = "5779de4e98bd51";
        /* 
            Permet d'avoir de nombreux détails sur le déroulement de l'envoi de mail :
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        */
        /* 
            Quel type de chiffrement sera utilisé pour envoyer les mails.
            (ici je ne l'active pas car il peut poser problème avec le serveur de mail que j'ai choisi)
            $mail->SMTPSecure= PHPMAILER::ENCRYPTION_SMTPS
        */
        // Paramètre l'expediteur du mail
        $mail->setFrom($from);
        // Paramètre un destinataire
        $mail->addAddress($to);
        // Active le format HTML pour le mail
        $mail->isHTML(true);
        // le sujet du mail :
        $mail->Subject = $subject;
        // Le corps du mail :
        $mail->Body = $body;
        /* 
            On peut ajouter un "AltBody" dans le cas om le client de l'utilisateur ne gère pas le HTML.
        */
        $mail->send();
        return "Message Envoyé";
    }catch(Exception $e)
    {
        return "Le message n'a pas pu être envoyé. Mailer Error : {$mail->ErrorInfo}";
    }
}