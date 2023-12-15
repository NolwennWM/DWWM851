<?php 
require_once __DIR__ . "/../../ressources/services/_pdo.php";

function getAllUsers(): array
{
    // Je me connecte à la BDD
    $pdo = connexionPDO();
    // J'envoi la requête SQL
    $sql = $pdo->query("SELECT * FROM users");
    // Je récupère toute les informations
    return $sql->fetchAll();
}
var_dump(getAllUsers());
?>