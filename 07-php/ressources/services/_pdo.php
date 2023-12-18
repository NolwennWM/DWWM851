<?php 

function connexionPDO(): \PDO
{
    // Je récupère les informations du fichier de configuration.
    $config = require __DIR__ . "/../config/_blogConfig.php";
    /* 
        Je vais devoir constuire un DSN, "Data Source Name" 
        C'est un string qui contient toute les informations pour localiser la BDD. 
        il prendra la forme suivante :
            "pilote de la bdd":host="hôte de la bdd";port="port de la bdd";dbname="nom de la bdd";charset="charset de la bdd";
        Par exemple :
            mysql:host=localhost;port=3306;dbname=blog;charset=utf8mb4
    */
    $dsn =  "mysql:host=".$config["host"]
            .";port=". $config["port"]
            .";dbname=". $config["database"]
            .";charset=". $config["charset"];
    try
    {
        /* 
            On crée une nouvelle instance de PDO en lui donnant en argument :
                Le DSN,
                Le nom d'utilisateur
                Le mot de passe
                Et les options de PDO
        */
        $pdo = new \PDO($dsn, $config["user"], $config["password"], $config["options"]);
        return $pdo;
    }catch(\PDOException $e)
    {
        /* 
            On lance une nouvelle instance de "PDOException"
        */
        throw new \PDOException($e->getMessage(), (int)$e->getCode());
    }
}
/**
 * filtre le string passé en paramètre.
 *
 * @param string $data
 * @return string
 */
function clean_data(string $data): string
{
    $data = trim($data);
    $data = stripslashes($data);
    return htmlspecialchars($data);
    // return htmlspecialchars(stripslashes(trim($data)));
}
?>