<?php 
/* 
    Il est possible de changer le type du fichier rendu pour que le navigateur le traite autrement que du HTML
    
    header("content-type: image/png");
    header("content-type: application/json");

    On peut aussi demander à la page de se réactualiser après quelques secondes.
    header("refresh:5")
    On peut ajouter à cela un url pour rediriger après quelques seconde.
    header("refresh:5; url=08-a-header.php");
*/
header("refresh:5; url=/header/a");
$title = "Header Page 2";
require(__DIR__."/../ressources/template/_header.php");
echo "<br> Ceci est ma page 2 !";

require(__DIR__."/../ressources/template/_footer.php");?>