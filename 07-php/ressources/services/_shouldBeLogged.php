<?php 
if(session_status()===PHP_SESSION_NONE)
    session_start();
/**
 * Vérifie si l'utilisateur est connecté et le redirige dans le cas contraire
 *
 * @param boolean $logged true si l'utilisateur doit être connecté et false si il ne doit pas être connecté
 * @param string $redirect chemin de redirection
 * @return void
 */
function shouldBeLogged(bool $logged = true, string $redirect = "/"): void
{
    if($logged)
    {
        if(isset($_SESSION["expire"]))
        {
            // Si la session a expiré, on la supprime
            if(time()> $_SESSION["expire"])
            {
                unset($_SESSION);
                session_destroy();
                setcookie("PHPSESSID", "", time()-3600);
            }else
            {
                // Sinon elle est renouvelé pour une heure
                $_SESSION["expire"] = time() + 3600;
            }
        } // fin vérification expire
        if(!isset($_SESSION["logged"]) || $_SESSION["logged"] !== true)
        {
            // Si l'utilisateur n'est pas connecté, on le redirige.
            header("Location: $redirect");
            exit;
        }
    }
    else
    {
        /* 
            Si l'utilisateur doit être déconnecté pour accèder à la page,
            alors on vérifie si il est connecté,
            et dans ce cas on le redirige
        */
        if(isset($_SESSION["logged"]) && $_SESSION["logged"] === true)
        {
            header("Location: $redirect");
            exit;
        }
    }
}
?>