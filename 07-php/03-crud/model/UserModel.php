<?php 
require_once __DIR__ . "/../../ressources/services/_pdo.php";

/**
 * récupère tous les utilisateurs
 *
 * @return array
 */
function getAllUsers(): array
{
    // Je me connecte à la BDD
    $pdo = connexionPDO();
    // J'envoi la requête SQL
    $sql = $pdo->query("SELECT idUser, username FROM users");
    // Je récupère toute les informations
    return $sql->fetchAll();
}
/**
 * Selectionne un utilisateur par son email.
 *
 * @param string $email
 * @return array|boolean
 */
function getOneUserByEmail(string $email): array|bool
{
    $pdo = connexionPDO();
    // "SELECT * FROM users WHERE email = $email"
    // Je prépare ma requête afin d'éviter une injection SQL
    $sql = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    // J'execute ma requête en lui donnant les paramètres dans le même ordre que les "?"
    $sql->execute([$email]);
    // Je récupère la première information trouvé.
    return $sql->fetch();
}
/**
 * récupère un utilisateur via son id
 *
 * @param string $id
 * @return array|boolean
 */
function getOneUserById(string $id): array|bool
{
    $pdo = connexionPDO();
    // Plutôt que les "?", on peut utiliser un placeholder précédé de ":"
    $sql = $pdo->prepare("SELECT * FROM users WHERE idUser = :id");
    // Avec les placeholder, on donne les paramètres via un tableau associatif dont les clefs correspondent aux placeholders
    $sql->execute(["id"=>$id]);
    return $sql->fetch();
}
/**
 * Ajoute un utilisateur en BDD
 *
 * @param string $us nom d'utilisateur
 * @param string $em email
 * @param string $pass mot de passe
 * @return void
 */
function addUser(string $us, string $em, string $pass): void
{
    $pdo = connexionPDO();
    $sql = $pdo->prepare("INSERT INTO users(username, email, password) VALUES(?, ?, ?)");
    $sql->execute([$us, $em, $pass]);
}
/**
 * Supprime un utilisateur via son ID
 *
 * @param string $id
 * @return void
 */
function deleteUserById(string $id): void
{
    $pdo = connexionPDO();
    $sql = $pdo->prepare("DELETE FROM users WHERE idUser=:id");
    /* 
        Une autre façon d'indiquer les paramètres de la requête,
        C'est l'utilisation de "bindParam" ou "bindValue".
        Dans ce cas on laisse l'execute vide.
        les bind prendrons en premier argument, le placeholder à changer,
        en second la valeur à lui donner, 
        et optionnellement en troisième, le type (int, string) via une constante
        $sql->bindParam("id", $id);
        $sql->bindParam("id", $id, PDO::PARAM_STR);
    */
    $sql->bindParam("id", $id);
    $sql->execute();
}
/**
 * Met à jour l'utilisateur via son id
 *
 * @param string $username nom d'utilisateur
 * @param string $email email
 * @param string $password mot de passe
 * @param string $id
 * @return void
 */
function updateUserByID(string $username, string $email, string $password, string $id): void
{
    $pdo = connexionPDO();
    $sql = $pdo->prepare("UPDATE users SET username=:us, email=:em, password=:mdp WHERE idUser = :id");
    $sql->execute([
        "id"=>(int)$id,
        "mdp"=>$password,
        "em"=>$email,
        "us"=>$username
    ]);
}
?>