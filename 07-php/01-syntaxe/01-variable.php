<h1>Introduction</h1> <hr>
<!-- Le code PHP commence par <?php ?> et ceci est sa balise de fin -->

<?php 
// Un commentaire sur une seule ligne
# Un autre commentaire sur une seule ligne
/* Commentaire sur 
plusieurs lignes */
/* 
    Il n'est pas rare de voir du HTML et du PHP sur un même fichier.
    Le serveur va traiter tout ce qui se trouve dans les balises PHP, puis rendre le fichier au navigateur comme du simple HTML.
*/
// ! Chaque instruction PHP se termine par ";"
/* 
    Ce que l'on fait en PHP n'étant pas visible, nous devrons utiliser certaines fonctions pour les afficher :

    Certaines rare fonctions peuvent être écrites sans parenthèse.
*/
echo "Coucou";
// echo peut prendre autant de paramètre que souhaité
echo "Hello", "World";
// Les informations retourné au navigateur étant traité comme du HTML, on peut afficher des balises :
echo "<hr>";
/* 
    Il existe plusieurs fonctions d'affichage qui ont leur propre particularité, 
    echo étant la plus commune.

    print retournera une valeur de "1" et sera un peu plus lent
*/
print "PRINT !!!!!<br>";
/* 
    var_dump() très utile pour debug, il affichera des informations supplémentaires
*/
var_dump("Bonjour", "Le Monde");
/* 
    var_export() affiche ses paramètres tel du PHP executable.
*/
var_export("Banane");
// phpinfo() affiche toute la configuration de PHP.
// phpinfo();
// Petit bonus, le racourci <?= permet d'ouvrir php juste pour un echo
?>
Test raccourci echo :
<?= 'Salut ! <hr>' ?>
<?php 
#-----------------------------------------------------
echo "<h1>Déclaration des variables !</h1>";

$banane;
/* 
    On déclare une variable php avec un "$" puis une lettre ou un "_" puis ensuite les chiffres sont acceptés
    Les variables sont sensible à la casse: "$a" et "$A" sont deux variables différentes.

    Si une variable n'a pas été définie et seulement déclaré, l'afficher provoquera une erreur:
*/
// echo $banane;

$banane = "Jaune";
echo "banane :", $banane, "<br>";

/* 
    On peut aussi définir des constantes en PHP, par convention on les mettra souvent en majuscule, et elles n'auront pas de "$" 
*/
const AVOCAT = "vert";
/* 
    Ceci est la nouvelle syntaxe, jusqu'il y a peu il fallait utiliser la fonction define :
*/
define("AVOCADO", "vert");
// get_defined_vars() permet de voir toute les variables déclarés
var_dump(get_defined_vars());
// echo '<pre>'.print_r(get_defined_vars(), 1).'</pre>';

// Variable Dynamique:
$chaussette = "rouge";
$$chaussette = "bleu";
$$$chaussette= 5;
echo $rouge, $bleu;
/* 
    Les variables dynamique, sont des variables dont le nom dépend d'une autre variable
    Ici la seconde variable prend le nom "$rouge"

    Par défaut, PHP détruit les variables une fois le script terminé,
    Mais on peut vouloir les détruire soit même avec unset()
*/
unset($banane);
// echo $banane;
# ---------------------------------------------------------
echo "<hr><h1>Types de variables</h1>";
$num = 5;
$dec = 0.5;
$str = "coucou";
$arr = [];
$boo = true;
$nul = NULL;
$obj = (object)[];

echo gettype($num), "<br>";
echo gettype($dec), "<br>";
echo gettype($str), "<br>";
echo gettype($arr), "<br>";
echo gettype($boo), "<br>";
echo gettype($nul), "<br>";
echo gettype($obj), "<br>";

// Aucune erreur à changer de type
$num = "Je change de type !";

# --------------------------------------------------------
echo "<hr><h1>Chaîne de caractères</h1>";
// Un string peut être représenté par " ou ';
echo "bonjour", 'coucou', "<br>";
// Les backticks auront un tout autre rôle en PHP.
// On peut faire des sauts à la ligne et des indentations mais ils ne seront pas prit en compte :
echo "Ceci est 
    un message si long
    qu'il prend plusieurs lignes <br>";
/* 
    Si on souhaite insérer une variable dans un string, 
    il suffit de l'y placer pour que l'interpolation ai lieu
    Cela ne fonctionne qu'avec les guillemets
*/
$nom = "Maurice";
$age = 54;
echo "$nom a $age ans. <br>";
echo '$nom a $age ans. <br>';
/* 
    La concatenation se fait avec le symbole "."
*/
echo $nom . " a " . $age ." ans.<br>";
// On peut aussi changer la valeur d'une variable avec la concatenation :
$nom .= " DUPONT";
echo $nom, "<br>";
// Quelques fonctions utiles :
# La longueur du string :
echo strlen($nom), '<br>';
# Le nombre de mots :
echo str_word_count($nom), '<br>';
# Inverse le string :
echo strrev("Bonjour"), '<br>';
# Donne la position dans le string du second paramètre :
echo stripos($nom, 'i'), '<br>';
# [] après un string permet de selectionner le caractère à la position indiqué
echo $nom[8], "<br>";
# On peut changer la lettre à l'index indiqué.
$nom[8] = "L";
echo $nom, "<br>";
# Remplace le premier paramètre, par le second, dans le troisième:
echo str_replace("ce", "cette", $nom);

#--------------------------------------------------------
echo "<hr><h1>Nombres</h1>";
// Il est possible de préfixer les nombres pour indiquer leur base :
# 0b pour binaire:
$bin = 0b10000;
echo "\$bin = $bin <br>";
# 0 pour octale:
$oct = 020;
echo "\$oct = $oct <br>";
# rien pour le decimal:
$dec = 16;
echo "\$dec = $dec <br>";
# 0x pour l'hexadecimal:
$hexa = 0x10;
echo "\$hexa = $hexa <br>";

// Les nombres sont soit des "INTEGER" (des entiers sans virgules), soit des "FLOAT" ou "DOUBLE" (des decimals à virgule)
var_dump("3.14 is int?", is_int(3.14));
echo "<br>";
var_dump("3.14 is float?", is_float(3.14));
echo "<br>";
var_dump("'3.14' is numeric?", is_numeric("3.14"));
echo "<br>";
var_dump("3.14 is nan?", is_nan(3.14));
echo "<br>";
// On peut connaître le plus grand (ou plus petit) INTEGER géré par PHP grâce à :
echo PHP_INT_MAX, "<br>", PHP_INT_MIN, "<br>"; 
// Ou en version float :
echo PHP_FLOAT_MAX, "<br>", PHP_FLOAT_MIN, "<br>";
// On peut convertire un string ou un float en entier simplement avec :
echo (int)"42", "<br>", (int)3.14, "<br>";

// L'utilisation d'opérateur mathématique est possible :
echo "1+1=", 1+1, "<br>";
echo "1-1=", 1-1, "<br>";
echo "5*7=", 5*7, "<br>";
echo "9/3=", 9/3, "<br>";
// Modulo
echo "10%3=", 10%3, "<br>";
// Puissance
echo "10**3=", 10**3, "<br>"; 

// On retrouvera aussi les opérateurs d'assignement :
$x = 5;
$x += 2;
$x -= 3;
$x *= 4;
$x /= 2;
$x %= 3;
$x **= 2;
echo $x, "<br>";

// Enfin on aura l'incrémentation et la décrémentation :
echo $x++, "--> $x <br>";
echo ++$x, "--> $x <br>";
echo $x--, "--> $x <br>";
echo --$x, "--> $x <br>";
?>