<?php 
/* 
    Les headers des requêtes http permettent d'indiquer au navigateur ou au serveur des informations avant de lire un fichier.
    Par exemple, quel est le type de ce fichier.
    quel est le code d'état de la requête (200, 301, 404...)
    Ou si certaines actions vont devoir être effectués.

    Par exemple, indiquons que l'on est sur une page 404:
*/
// header("HTTP/1.1 404 Not Found");
header("HTTP/1.1 418 I'm a teapot");
// à noter que l'on peut aussi utiliser :
// http_response_code(404);

if(rand(0,100)<50)
{
    header("Location: /header/b");
    exit;
    /* 
        En indiquant "Location:" je provoque une redirection.
        Lorsque l'on fait une redirection, c'est une bonne pratique de la faire suivre par un "exit" ou un "die" qui sont la même fonction.
        Ceux-ci mettent fin à l'execution de tout code, afin d'être sûr que rien ne ce soit passé avant de rediriger.

        die et exit peuvent être aussi utiliser pour du debuggage, afin de stopper le code et afficher un message.
        (On peut ajouter un message entre parenthèse)
        die("on s'arrête ici");
    */
}
$title = "Gestion des headers de requete";
require(__DIR__."/../ressources/template/_header.php");
// Sans paramètre, affiche le code de la page :
echo http_response_code();
echo "<br> Ceci est ma page 1 !";
require(__DIR__."/../ressources/template/_footer.php");
?>