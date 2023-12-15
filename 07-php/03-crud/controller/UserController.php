<?php 
// require __DIR__ . "/../../ressources/services/_csrf.php";
require __DIR__ . "/../../ressources/services/_shouldBeLogged.php";
require __DIR__ . "/../model/UserModel.php";

/**
 * Gère ma page listant les utilisateur
 *
 * @return void
 */
function listUsers():void
{
    $users = getAllUsers();

    require __DIR__ . "/../view/user/ListUser.php";
}
/**
 * Gère ma page d'inscription
 *
 * @return void
 */
function inscription():void
{
    echo "Ceci est ma page d'inscription";
}
?>