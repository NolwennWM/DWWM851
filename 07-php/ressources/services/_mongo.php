<?php 
use MongoDB\BSON\ObjectId;
use MongoDB\Driver\Query;
use MongoDB\Driver\Manager;
/**
 * Récupère la connexion à mongodb
 *
 * @return Manager
 */
function connexionMongo(): Manager
{
    $config = require __DIR__."/../config/_blogMongoConfig.php";
    /*
        Je construit mon DSN, celui de mongodb prend la syntaxe suivante :
        "mongodb://nomUser:password@host:port"
    */
    $dsn = "mongodb://{$config['user']}:{$config['password']}@{$config['host']}:{$config['port']}";
    try
    {
        $mongo = new Manager($dsn);
        return $mongo;
    }catch(Exception $e)
    {
        echo "Exception reçue : {$e->getMessage()}";
    }
}
/**
 * Récupère le résultat d'une requête
 *
 * @param string $collection
 * @param Query $query
 * @param string $idName
 * @param boolean $one
 * @return array
 */
function queryResult(string $collection, Query $query, string $idName, bool $one = false): array
{
    global $mongo;
    // On execute la requête donné en second argument, sur la collection en premier argument
    $cursor = $mongo->executeQuery($collection, $query);
    // Pour obtenir nos résultats sous forme de tableau associatif :
    $cursor->setTypeMap(["root"=>"array"]);
    // On retourne le résultat sous forme de tableau :
    $resultat = $cursor->toArray();
    // On change l'objet "objectId" en string:
    $resultat = setId($resultat, $idName);
    // Si le boolean "$one" est à true et que l'on a au moins 1 résultat, je retourne le premier résultat seulement.
    if($one && count($resultat)) return $resultat[0];
    return $resultat;
}
/**
 * Traduit l'object ID de mongoDB en simple string pour un tableau de résultat
 *
 * @param array $result
 * @param string $idName
 * @return array
 */
function setId(array $result, string $idName): array
{
    for($i=0; $i < count($result); $i++)
    {
        $result[$i][$idName] = (string)$result[$i]["_id"];
    }
    return $result;
}
/**
 * transforme l'id en object id;
 *
 * @param string $id
 * @return ObjectId
 */
function getId(string $id): ObjectId
{
    return new ObjectId((string)$id);
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