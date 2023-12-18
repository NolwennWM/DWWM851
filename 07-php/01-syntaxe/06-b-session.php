<?php 

/* 
    Si on a besoin de la session sur quelques rare pages, 
    autant l'activer uniquement là où elle est utile.
    Mais si tout votre site en a besoin, il est possible de placer le "session_start()" dans un fichier chargé à tout les coups comme le header.

    Il est possible d'indiquer la durée de vie du cookie contenant l'id de session en option du session_start

    par défaut, il est à 0, c'est à dire qu'il disparaît si on quitte le navigateur
*/
session_start(["cookie_lifetime"=>3600]);
/* 
    Sur un projet complexe, il est possible d'oublier que l'on a déjà fait un session_start
    Un message de "notice" s'affiche alors indiquant que le second a été ignoré.
    Pour éviter cela on peut faire une condition avec "session_status()" et l'une des trois constantes suivante :
    PHP_SESSION_NONE
    PHP_SESSION_DISABLED
    PHP_SESSION_ACTIVE
*/
if(session_status() === PHP_SESSION_NONE) session_start();


/* 
    Lorsque vous utilisez des valeurs qui peuvent ne pas exister.
    (par exemple ici, si on vient sur la page 2 sans être passé par la 1)
    Il vaut mieux vérifier qu'elles existent avant de tenter de les afficher.
    On pourra par exemple utiliser "isset()"
*/
if(isset($_SESSION["username"], $_SESSION["food"], $_SESSION["age"]))
{
    $message = $_SESSION["username"] ." aime la "
        . $_SESSION["food"] . " et a "
        . $_SESSION["age"]. "<br>";
}
/* 
    Si je souhaite supprimer une information de la session, 
    Je peux simplement utiliser "unset()" sur cette information
*/
unset($_SESSION["food"]);
// var_dump($_SESSION);
/* 
    Et si je veux faire disparaître la session dans son entièreté.
    Je vais passer par trois étapes.
        La première est un "session_destroy()"
*/
// echo "<hr>";
session_destroy();
// var_dump($_SESSION);
/* 
    Une fois la session détruite, 
    il reste cela dit les informations de session dans la superglobal
    et cela jusqu'au prochain rechargement.
    On pourra par sécurité "unset" la superglobal
*/
unset($_SESSION);
/* 
    La session a bien disparut, mais il reste le cookie sur le navigateur de l'utilisateur.
    Pour le supprimer, on lui indiquera une date d'expiration passé.
*/
setcookie("PHPSESSID", "", time()-3600);

/* 
    Il est possible de créer des sessions avec un nom différent en changeant ce nom avant le session_start();
    Pour cela on utilisera "session_name()"
*/
$title = "Session page 2";
require(__DIR__."/../ressources/template/_header.php");
echo $message ??"";
echo "<a href='/session/a'>Page 1</a>";
require(__DIR__."/../ressources/template/_footer.php");
?>