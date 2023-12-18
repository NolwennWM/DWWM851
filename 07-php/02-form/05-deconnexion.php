<?php 
/* 
    Pour se déconnecter, il suffit de supprimer les informations que l'on a stocké en session.
    Si votre session ne sert qu'à la connexion, 
    On peut tout simplement, tout supprimer.
*/
session_start();
// On bloque l'accès à la page si il n'est pas connecté.
require __DIR__."/../ressources/services/_shouldBeLogged.php";
shouldBeLogged(true, "/");
// unset($_SESSION["user"])
unset($_SESSION);
session_destroy();
setcookie("PHPSESSID", "", time()-3600);
// Et je redirigine mon utilisateur ailleurs
header("Location: ./04-connexion.php");
exit;
?>