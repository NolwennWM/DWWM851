<?php 
// Quels sont les méthodes acceptés par cette page.
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
require __DIR__."/../api.php";
session_start();
require __DIR__."/../model/UserModel.php";
global $regexPass;
$regexPass = "/^(?=.*[!?@#$%^&*+-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/";

switch($_SERVER["REQUEST_METHOD"])
{
    case "POST": inscription(); break;
    case "GET": listeUtilisateur(); break;
    case "PUT": updateUser(); break;
    case "DELETE": deleteUser(); break;
}

function inscription()
{
    global $regexPass;
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $username = $email = $password = "";
    $error = setError();

    /* 
        Todo: Traiter le formulaire
    */
    if($data && isset($data->userForm))
    {
        // traitement username
        if(empty($data->username)){
            setError("username", "Veuillez saisir un nom d'utilisateur");
        }else{
            $username = clean_data($data->username);
            if(!preg_match("/^[a-zA-Z' -]{2,25}$/", $username)){
                setError("username", "Veuillez saisir un nom d'utilisateur Valide");
            }
        }
        // Traitement email
        if(empty($data->email))
        {
            setError("email", "Veuillez saisir un email");
        }
        else
        {
            $email = clean_data($data->email);
            if(!filter_var($email, FILTER_VALIDATE_EMAIL))
            {
                setError("email", "Veuillez saisir un email valide");
            }
            // Je vérifie si l'utilisateur existe en BDD
            $resultat = getOneUserByEmail($email);
            if($resultat)
            {
                setError("email", "Cet email est déjà enregistré.");
            }
        }
        // Traitement password
        if(empty($data->password))
        {
            setError("password", "Veuillez saisir un mot de passe");
        }
        else
        {
            $password = clean_data($data->password);
            // on utilise la regex défini plus haut.
            if(!preg_match($regexPass, $password))
            {
                setError("password", "Veuillez saisir un mot de passe valide");
            }
            else
            {
                $password = password_hash($password, PASSWORD_DEFAULT);
            }
        }
        // vérification du mot de passe.
        if(empty($data->passwordBis))
        {
            setError("passwordBis", "Veuillez saisir à nouveau votre mot de passe");
        }
        elseif($data->password != $data->passwordBis)
		{
			setError("passwordBis", "Veuillez saisir le même mot de passe");
		}
        $error = setError();
        // envoi des données.
        if(empty($error["violations"]))
        {
            // J'ajoute mon utilisateur en BDD.
            addUser($username, $email, $password);
            // On peut aussi retourner l'utilisateur ajouté et le renvoyer au front pour confirmer l'inscription.
            sendResponse([], 200, "Inscription validé");
        }
    }
    sendResponse($error, 400, "Formulaire incorrecte");
};
function listeUtilisateur()
{
    // Je récupère tous mes utilisateurs.
    if(isset($_GET["id"]))
        $users = getOneUserById((int)$_GET["id"]);
    else
        $users = getAllUsers();
    sendResponse($users, 200, "utilisateur(s) récupéré.");
};
function updateUser(){};
function deleteUser()
{
    if(!isset($_GET["id"], $_SESSION["idUser"]) || $_SESSION["idUser"] != $_GET["id"])
    {
        sendResponse($_SESSION, 400, "Accès interdit!");
    }
    // On supprime l'utilisateur
    deleteUserById((int)$_GET["id"]);
    // Et on le déconnecte.
    unset($_SESSION);
    session_destroy();
    setcookie("PHPSESSID","", time()-3600);
        
    sendResponse([], 200, "compte supprimé et déconnecté");
};