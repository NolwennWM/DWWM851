<?php 
/* 
    La session comme le localstorage permet de stocker des informations temporaire.
    Mais cette fois ci du côté serveur.
    Pour différencier une session d'un utilisateur d'une autre, son identifiant est stocké dans un cookie qui est envoyé à l'utilisateur.

    à la différence du localstorage, n'importe quel type de donnée peut être stocké en session.

    Les fonctionnalités de session, sont inaccessible tant que l'on n'a pas lancé un "session_start()"
        La session doit être start avant tout affichage HTML.
*/
session_start();

$title = "Session page 1";
require(__DIR__."/../ressources/template/_header.php");

// On peut retrouver l'id de la session dans les cookies ou avec la fonction "session_id()"
var_dump($_COOKIE, session_id());
/* 
    Le nom par défaut du cookie est "PHPSESSID"

    Pour stocker des données en session, on utilisera la superglobal "$_SESSION" tel un tableau associatif.
*/
$_SESSION["food"] = "Pizza";
$_SESSION["age"] = 54;
$_SESSION["username"] = "Maurice";
echo "<br>";
var_dump($_SESSION);
?>
<br>
<a href="/session/b">Page 2</a>
<?php
require(__DIR__."/../ressources/template/_footer.php");
?>