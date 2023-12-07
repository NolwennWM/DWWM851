<?php 
echo "<h1>Déclaration </h1><hr>";
/* 
    Pour déclarer une fonction en PHP,
    On utilisera le mot clef "function" suivi du nom de la fonction.
    Puis des parenthèses et enfin des accolades.

    Les parenthèses accueillerons les possibles paramètres de la fonction.
    les accolades, pour le corps de la fonction.
*/
function salut()
{
    echo "Salut le monde ! <br>";
}
/* 
    Déclarer une fonction n'activera pas le code à l'interieur.
    Il faudra l'appeler pour que ce code s'affiche.
    Pour cela on utilisera le nom de la fonction suivi de parenthèse.
*/
salut();
/* 
    On peut appeler une fonction avant sa définition, tant que celle ci est déclaré hors de tout bloc (condition, autre fonction...)
*/
salut2();
function salut2()
{
    echo "Salut les autres! <br>";
}
if(true)
{
    // Déclenche une fatal error
    // salut3();
    function salut3()
    {
        echo "Salut moi-même! <br>";
    }
    salut3();
}
/* 
    Une fonction peut se contenter de réaliser une action.
    Mais elle peut aussi renvoyer des informations qui seront utilisé dans une variable ou une autre fonction :
        On utilisera pour cela le mot clef "return" suivi des informations à renvoyer.
    Ce mot clef mettant fin à la fonction, tout ce qui suit, ne sera pas réalisé.
*/
function aleaString()
{
    $r = rand(0, 100);
    if($r<50)return;
    return (string)$r;
}
// Si rien n'est retourné, on obtient "NULL";
var_dump(aleaString());
echo "<br>";
// attribué à une variable :
$alea = aleaString();
echo $alea, "<br>";
# ----------------------------------------------------
echo "<h2>Les Arguments</h2><hr>";
/* 
    Entre les parenthèses d'une déclaration de fonction, 
    il est possible d'ajouter autant de déclaration de variable que l'on souhaite.
    Celles ci seront des paramètres à placer lors de l'appel de la fonction, 
    qui seront transmits à celle ci.
    Chaque argument est séparé d'une virgule.
*/
function bonjour($nom)
{
    echo "Bonjour $nom ! <br>";
}
bonjour("Maurice");
function bonjour2($nom1, $nom2)
{
    echo "Bonjour $nom1 et $nom2 ! <br>";
}
// Si le bon nombre d'argument n'est pas fourni, on obtient une fatal erreur
// bonjour2("Maurice");
bonjour2("Maurice", "Pierre");
/* 
    Il est possible d'avoir un nombre infini d'argument sur une fonction,
    Cela grace au rest operator "..."
    Tous les arguments seront placé sous forme de tableau.
*/
function bonjour3(...$noms)
{
    foreach($noms as $n)
    {
        echo "Salut $n ! <br>";
    }
}
bonjour3("Maurice", "Pierre", "Charles");

/* 
    On peut donner une valeur par défaut à un paramètre.
    Cela aura aussi pour effet de le rendre optionnel
*/
function bonjour4($n1, $n2="personne d'autre")
{
    echo "Bonjour $n1 et $n2 ! <br>";
}
bonjour4("Maurice");
bonjour4("Maurice", "Pierre");
/* 
    Une variable donné à une fonction n'est pas modifié
    Seule sa valeur est transmise.
*/
function titre($nom)
{
    $nom .= " le Grand";
    return $nom;
}
$mau = "Maurice";
$mau2 = titre($mau);
echo "$mau est devenu $mau2 <br>";
/* 
    Mais il est possible de passer un argument par référence.
    Cela permet de changer la valeur de la variable donnée en argument.
*/
function titre2(&$nom)
{
    $nom .= " le Grand";
}
titre2($mau);
echo "Voici $mau ! <br>";

#------------------------------------------------------
echo "<h2>Récurcivité</h2><hr>";
/* 
    Une fonction récurcive est une fonction qui s'appelle elle-même.
    Cela peut provoquer une boucle infinie, 
    attention de bien prévoir une condition de sortie.
*/
function decompte($n)
{
    // action à réaliser
    echo "$n <br>";
    // condition de sortie
    if($n <= 0)return;
    // récurcivité
    decompte(--$n);
}
decompte(5);
#------------------------------------------------------
echo "<h2>Typage et Description</h2><hr>";
/* 
    Sur les dernières versions de PHP, il est possible, conseillé bien que non obligatoire, 
    de typer ses arguments et valeur de retour ainsi que de décrire les fonctions.

    Faire ceci ne changera pas le fonctionnement de votre code, 
    mais améliorera sa lisibilité si vous ou quelqu'un d'autre souhaite le réutiliser plus tard.
*/
/**
 * Cette fonction retourne la présentation du personnage
 * 
 * Les arguments sont les informations du personnage
 *
 * @param string $nom nom du personnage
 * @param integer $age age du personnage
 * @param boolean $travail le personnage travail t-il?
 * @return string phrase de présentation
 */
function presentation(string $nom, int $age, bool $travail): string
{
    return "Je m'appelle $nom et j'ai $age ans. Je ".
        ($travail?"travaille.":"ne travaille pas.");
}
echo presentation("Maurice", 54, true);

#------------------------------------------------------
echo "<h2>Portée des variables et variable static</h2><hr>";
/* 
    Une variable déclaré hors d'une fonction n'est pas disponible dans celle ci.
    Si on souhaite utiliser une variable dans la fonction, 
    elle devra soit être passé en argument,
    soit récupéré via le mot clef "global"
    Celui ci permet d'indiquer que la variable que l'on souhaite utilisé a été déclaré hors de toute fonction.
*/
$z = 5;
function showZ()
{
    // echo $z; erreur
    global $z;
    echo $z, "<br>";
}
showZ();
/* 
    Une variable précédé du mot "static" ne sera pas réinitialisé à chaque appelle de la fonction.
    Sa valeur sera donc sauvegardé entre chaque appel.
*/
function compte()
{
    $a = 0;
    static $b = 0;
    echo "a : $a <br> b : $b <br>";
    $a++;
    $b++;
}
compte();
compte();
compte();
#------------------------------------------------------
echo "<h2>Fonction anonyme, fléché et callback</h2><hr>";
/* 
    Bien que rarement utilisé, il est possible de déclarer des fonctions anonyme et fléché en PHP.
    Une fonction anonyme est une fonction qui ne porte pas de nom, elle sera rangé dans une variable ou utilisé en callback.
    Une fonction fléché est une version raccourci de la fonction anonyme.
    Un callback est une fonction passé en argument qui sera appelé par la fonction qui la reçoit.
*/
/**
 * Cette fonction prend un tableau et utilise la fonction donnée en callback pour afficher le contenu.
 *
 * @param array $arr tableau de donnée
 * @param callable $func fonction d'affichage
 * @return void
 */
function dump(array $arr, callable $func): void
{
    foreach($arr as $a)
    {
        $func($a);
        echo "<br>";
    }
}
$tab = ["sandwich", "ramen", "pizza"];
// Je donne en second argument, une fonction anonyme.
dump($tab, function($x){ echo $x;});
// Je donne en second argument, une fonction fléchée.
dump($tab, fn($x)=>var_dump($x));

// Je range ma fonction anonyme dans une variable :
$superFonction = function($x){
    print($x);
};
// Je donne en callback ma variable contenant une fonction.
dump($tab, $superFonction);
?>
