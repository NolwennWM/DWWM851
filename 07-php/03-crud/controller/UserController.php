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
    // Si l'utilisateur est connecté, on le redirige
    shouldBeLogged(false, "/");

    $username = $email = $password = "";
    $error = [];
    $regexPass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";

    if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['inscription']))
    {
        // Traitement username 
        if(empty($_POST["username"]))
        {
            $error["username"] = "Veuillez saisir un nom d'utilisateur";
        }
        else
        {
            $username = clean_data($_POST["username"]);
            if(!preg_match("/^[a-zA-Z' -]{2,25}$/", $username))
            {
                $error["username"] = "Veuillez saisir un nom d'utilisateur valide";
            }
        }
        // Traitement email
        if(empty($_POST["email"]))
        {
            $error["email"] = "Veuillez saisir un email";
        }
        else
        {
            $email = clean_data($_POST["email"]);
            /* 
                La fonction filter_var prendra en premeir argument
                la variable à filter, et en second une constante correspondant au filtre à appliquer.
                Il y a deux types de filtres
                    FILTER_SANITIZE_***
                    FILTER_VALIDATE_***
                Dans le premier cas, la valeur de retour sera la valeur de la variable filtré.
                Dans le second ce sera un boolean.
            */
            if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                $error["email"] = "Veuillez saisir un email valide";
            }
            $resultat = getOneUserByEmail($email);
            if($resultat)
            {
                $error["email"] = "Cet email est déjà enregistré";
            }
        }
        // Traitement password
        if(empty($_POST["password"]))
        {
            $error["password"] = "Veuillez saisir un mot de passe";
        }
        else
        {
            $password = trim($_POST["password"]);
            if(!preg_match($regexPass, $password))
            {
                $error["password"] = "Veuillez saisir un mot de passe valide";
            }
            else
            {
                $password = password_hash($password, PASSWORD_DEFAULT);
            }
        }
        // Traitement vérification du mot de passe
        if(empty($_POST["passwordBis"]))
        {
            $error["passwordBis"] = "Veuillez saisir à nouveau votre mot de passe";
        }
        else if($_POST["passwordBis"] !== $_POST["password"])
        {
            $error["passwordBis"] = "Veuillez saisir le même mot de passe";
        }
        // Envoi des données :
        if(empty($error))
        {
            addUser($username, $email, $password);
            header("Location: /");
            exit;
        }
    }
    require __DIR__."/../view/user/inscription.php";
}
/**
 * Gère ma page de suppression d'utilisateur
 *
 * @return void
 */
function deleteUser():void
{
    // L'utilisateur doit être connecté
    shouldBeLogged(true, "/");
    // L'utilisateur connecté est-il celui que l'on tente de supprimer
    if(empty($_GET["id"]) || $_SESSION["idUser"] !== $_GET["id"])
    {
        header("Location: /");
        exit;
    }

    deleteUserById($_GET["id"]);

    unset($_SESSION);
    session_destroy();
    setcookie("PHPSESSID", "", time()-3600);

    header("refresh: 5;url= /");

    require __DIR__ ."/../view/user/delete.php";
}
/**
 * Gère la page de mise à jour de l'utilisateur
 *
 * @return void
 */
function updateUser(): void
{

    require __DIR__."/../view/user/update.php";
}
?>