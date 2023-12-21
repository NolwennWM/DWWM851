<?php
require __DIR__."/../../ressources/services/_shouldBeLogged.php";
require __DIR__."/../model/UserModel.php";
require __DIR__."/../model/MessageModel.php";

/**
 * Gère la page d'affichage des messages
 *
 * @return void
 */
function readMessage($id):void
{
    $id = (int)$id;
    // Si autre chose qu'un nombre est donné en argument, on redirige ailleurs
    if($id === 0)
    {
        header("Location: /userlist");
        exit;
    }
    $user = getOneUserById($id);
    if(!$user)
    {
        header("Location: /userlist");
        exit;
    }
    $messages = getMessageByUser($id);

    require __DIR__ . "/../view/message/listMessage.php";
}
/**
 * Gère la création des messages
 *
 * @return void
 */
function createMessage():void
{
    shouldBeLogged(true, "/connexion");
    if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['addMessage']))
    {
        if(empty($_POST["message"]))
        {
            $_SESSION["flash"] = "Veuillez entrer un message";
        }
        else
        {
            $message = clean_data($_POST["message"]);
            addMessage(["message"=>$message, "idUser"=> $_SESSION["idUser"]]);
            $_SESSION["flash"] = "Message Envoyé";
        }
    }
    goToListMessage();
}
/**
 * Gère la suppression de message
 *
 * @param string $id
 * @return void
 */
function deleteMessage(string $id): void 
{
    shouldBeLogged(true, "/connexion");
    $id = (int)$id;
    if($id === 0)
    {
        goToListMessage("id inexistant");
    }
    $message = getMessageById($id);
    // Si il n'y a pas de message avec cet id ou si l'utilisateur connecté n'est pas l'auteur du message
    if(!$message || $message["idUser"] != $_SESSION["idUser"])
    {
        goToListMessage("Impossible de Supprimer");
    }
    deleteMessageById($id);
    goToListMessage("Votre message a bien été supprimé");
}
/**
 * Gère la page d'édition de message
 *
 * @param string $id
 * @return void
 */
function updateMessage(string $id): void
{
    shouldBeLogged(true, "/connexion");
    $id = (int)$id;
    if($id === 0)
    {
        goToListMessage("Id inexistant");
    }
    $message = getMessageById($id);
    // Si je n'ai pas de message à cet id ou si l'utilisateur connecté n'est pas son auteur, alors on redirige.
    if(!$message || $message["idUser"] != $_SESSION["idUser"])
    {
        goToListMessage("Impossible d'éditer ce message");
    }

    $m = "";
    if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['editMessage']))
    {
        if(empty($_POST["message"]))
        {
            $m = $message["message"];
        }
        else
        {
            $m = clean_data($_POST["message"]);
        }
        updateMessageById($id,$m);
        goToListMessage("Message édité");
    }
    require __DIR__ ."/../view/message/updateMessage.php";
}
/**
 * Redirige vers la liste des messages de l'utilisateur connecté
 * Peut optionnellement prendre un message flash en paramètre.
 *
 * @param string|null $message
 * @return void
 */
function goToListMessage(string|null $message = null): void
{
    if($message)
    {
        $_SESSION["flash"] = $message;
    }
    header("Location: /blog/".$_SESSION["idUser"]);
    exit;
}