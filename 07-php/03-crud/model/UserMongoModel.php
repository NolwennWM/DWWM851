<?php 
use MongoDB\Driver\Query;
use MongoDB\Driver\BulkWrite;

require_once __DIR__."/../../ressources/services/_mongo.php";
global $mongo, $bulk;
$mongo = connexionMongo();
$bulk = new BulkWrite();

/**
 * Récupère tous les utilisateurs
 *
 * @return array
 */
function getAllUsers(): array
{
    global $mongo;
    
    $query = new Query([]);
    return queryResult("blog.user", $query, "idUser");
}
/**
 * Récupère un utilisateur par son email
 *
 * @param string $email
 * @return array|boolean
 */
function getOneUserByEmail(string $email): array|bool
{
    $query = new Query(["email"=>$email]);
    return queryResult("blog.user", $query, "idUser", true);
}
/**
 * Selectionne un utilisateur par son ID
 *
 * @param string $id
 * @return array|boolean
 */
function getOneUserById(string $id): array|bool
{
    $query = new Query(["_id"=>getId($id)]);
    return queryResult("blog.user", $query, "idUser", true);
}
/**
 * Ajoute un utilisateur en BDD
 *
 * @param string $us
 * @param string $em
 * @param string $pass
 * @return void
 */
function addUser(string $us, string $em, string $pass): void
{
    global $mongo, $bulk;
    // On prépare les requête que l'on souhaite faire
    $bulk->insert(["username"=>$us, "email"=>$em, "password"=>$pass]);
    // Puis on les execute.
    $mongo->executeBulkWrite("blog.user", $bulk);
}
/**
 * Supprime un utilisateur par son ID
 *
 * @param string $id
 * @return void
 */
function deleteUserById(string $id): void
{
    global $mongo, $bulk;
    $bulk->delete(["_id"=>getId($id)]);
    $mongo->executeBulkWrite("blog.user", $bulk);
}
/**
 * Met à jour un utilisateur via son id
 *
 * @param string $username
 * @param string $email
 * @param string $password
 * @param string $id
 * @return void
 */
function updateUserById(string $username, string $email, string $password, string $id):void
{
    global $mongo, $bulk;
    $bulk->update(["_id"=>getId($id)], ['$set'=>["username"=>$username, "email"=>$email, "password"=>$password]]);
    $mongo->executeBulkWrite("blog.user", $bulk);
}
?>