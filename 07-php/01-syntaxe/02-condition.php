<?php 
/* 
    rand retourne par défaut une valeur aléatoire entre 0 et "getrandmax()"
    Mais on peut lui donner en paramètre, un nombre minimum et maximum
*/
$r = rand(0,100);
echo $r, "<br>";
echo "<h1>Conditions</h1> <hr>";
// Si la condition est "true" alors on effectue ce qui se trouve entre accolade.
if($r < 50)
{
    echo 'La variable est inférieure à 50';
}
// Optionnellement on peut ajouter des conditions avec elsif qui seront vérifié si les précédentes sont fausse.
elseif($r > 50)
{
    echo 'La variable est supérieur à 50';
}
// Optionnellement on peut ajouter un "else" qui se déclenchera si toute les conditions précédentes sont fausses.
else
{
    echo 'La variable est égale à 50';
}
# ---------------------------------------
echo "<h2>Autres syntaxes</h2> <hr>";
/* 
    Il est aussi possible de remplacer les accolades par ":" pour marquer le début de la condition
    Puis "endif" pour marquer la fin 
*/
if ($r < 50):
    echo 'La variable est inférieure à 50';
elseif ($r > 50):
    echo 'La variable est supérieur à 50';
else:
    echo 'La variable est égale à 50';
endif;

// Il est tout à fait possible de placer du HTML dans une condition:
if($r < 50):
?>
    <p>La variable est inférieure à 50</p>
<?php elseif($r > 50):?>
    <p>La variable est supérieur à 50</p>
<?php else:?>
    <p>La variable est égale à 50</p>
<?php endif ?>
<br>
<?php 
/* 
    Si nos conditions ne contiennent qu'une seule instruction, 
    il est tout à fait possible d'omettre ":" et "endif"
*/
if ($r < 50)
    echo 'La variable est inférieure à 50';
elseif ($r > 50)
    echo 'La variable est supérieur à 50';
else
    echo 'La variable est égale à 50';

/* 
    Il est possible d'écrire une condition sur une seule ligne avec les ternaires :
    condition ? true : false;
*/
echo "La variable est ". ($r<50?"inférieur":"supérieur ou égale") . " à 50";

/* 
    On peut aussi vérifier si une variable existe,
    et dans le cas contraire faire autre chose avec "??"
*/
$message1 = "Bonjour le monde <br>";
echo $message1 ?? "Rien à dire <br>";
echo $message2 ?? "Rien à dire <br>";
#------------------------------------------------
echo "<h1>Switch</h1> <hr>";
$pays = ["France", "Japon", "Angleterre", "Suisse", "france"];
// Choisi un index aléatoire du tableau.
$r2 = array_rand($pays);
echo $pays[$r2], "<br>";
/* 
    Le switch prend une variable en argument et déclenche le cas qui correspond.
    chaque cas devrait terminer par un break.
    Dans le cas contraire, le cas suivant sera lancé même si il ne correspond pas.
    On peut aussi ajouter un "default" qui se déclenchera si aucun cas ne correspond.
*/
switch ($pays[$r2]) 
{
    case "Japon":
        echo "Il n'y a pas de sushi.";
        break;
    case "Suisse":
        echo "Le fromage est excellent.";
        break;
    case "France":
    case "france":
        echo "Ce pays est magnifique.";
        break;
    default:
        echo "Je suis perdu...";
}
?>