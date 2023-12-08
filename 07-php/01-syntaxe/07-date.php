<?php 
$title = "Gestion du Temps en PHP";
require "../ressources/template/_header.php";

// Si on souhaite utiliser le timestamp, on pourra utiliser la fonction :
echo time(), "<br>";
/*
    Pour afficher directement l'heure ou la date, 
    On utilisera la fonction "date()"
    Elle prendra en premier argument, un string correspondant au format qui doit être affiché. 
    En second, optionnellement, on pourra lui donner un timestamp passé ou futur pour obtenir la date correspondante.

    d = numéro du jour du mois avec le 0
    m = numéro du mois avec le 0
    Y = année sur 4 chiffres
*/
echo date("d/m/Y"), "<br>";
echo date("d-m-Y", time()-1234567890), "<br>";
/* 
    j = numéro du jour du mois sans le 0
    n = numéro du mois sans le 0
    y = année sur 2 chiffres
*/
echo date("j/n/y"), "<br>";
/* 
    D = nom du jour sur 3 lettres
    l = nom du jour complet
    M = nom du mois sur 3 lettres
    F = nom du mois complet
*/
echo date("D = l / M = F"), "<br>";
/* 
    N = numéro du jour dans la semaine avec dimanche = 7
    w = numéro du jour dans la semaine avec dimanche = 0
*/
echo date("D = N = w"), "<br>";
require "../ressources/template/_footer.php";
?>