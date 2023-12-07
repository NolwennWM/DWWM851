<?php 
echo "<h1>Les boucles en PHP</h1><hr>";

$x = 0;
// La boucle while répète ses instructions tant que ce qui se trouve entre parenthèse retourne "true"
while($x < 5)
{
    echo "$x <br>";
    // ! Ne pas oublier la condition de sortie
    $x++;
}
// syntaxe en ":" endwhile;
while($x < 10):
    echo "$x <br>";
    $x++;
endwhile;
// syntaxe avec une seule instruction :
while($x < 15)
    echo $x++, "<br>";
# ------------------------------------------------
echo "<h2>Do While</h2> <hr>";
// Le do while va lancer une première fois l'action avant de vérifier si elle doit être répété.
do
{
    echo "$x do while <br>";
    $x++;
}while($x < 5);
// syntaxe ne prenant qu'une seule instruction:
do
    echo $x++, "do while <br>";
while($x<20);
# ----------------------------------------------------
echo "<h2>For</h2> <hr>";
/* 
    La boucle for est particulièrement adapté aux boucles basé sur un chiffre.
    elle est structuré ainsi:
    for(expr1; expr2; expr3;){instruction à répéter}

    La première expression est évalué avant de commencer la boucle.
    La seconde est évalué au début de chaque itération et continuera la boucle si "true"
    le troisième est évalué à chaque fin d'itération.
*/
for($y = 0; $y < 5; $y++)
{
    echo $y;
    echo "<br>";
}
// structure en ":" et endfor;
for($y = 0; $y < 5; $y++):
    echo $y;
    echo "<br>";
endfor;
// structure en une seule instruction :
for($y = 0; $y < 5; $y++)
    echo "$y <br>";
#----------------------------------------------------
echo "<h2>Foreach</h2><hr>";
$a = ["spaghetti", "thon", "mayonnaise", "oignon"];
/* 
    foreach permet d'itérer sur un tableau, il se structure ainsi :
        foreach($tableau as $nouvelleVariable){instruction à répéter}
    foreach répète les instructions pour chaque élément du tableau.
    Changeant à chaque fois la valeur de la variable par l'élément suivant du tableau.
*/
foreach($a as $food)
{
    echo "$food <br>";
}
/* 
    Il est aussi possible de récupérer l'index ou la clef (dans le cas d'un tableau associatif) avec cette structure :
        foreach($tableau as $variableIndex => $variableValeur){instruction à répéter}
*/
foreach($a as $k => $food)
{
    echo "$k : $food <br>";
}
// structure en ":" endforeach;
foreach($a as $food):
    echo "$food <br>";
endforeach;
// structure avec une seule instruction :
foreach($a as $k => $food)
    echo "$k : $food <br>";
#-----------------------------------------------------
echo "<h2>Continue et Break</h2><hr>";
/* 
    Toute les boucles peuvent utiliser les mots clefs "continue" et "break"
    "continue" met fin à l'itération actuelle, et passe à la suivante.
    "break" met fin à la boucle.
*/
foreach($a as $f)
{
    if($f === "spaghetti") continue;
    if($f === "mayonnaise") break;
    echo "$f <br>";
}
?>