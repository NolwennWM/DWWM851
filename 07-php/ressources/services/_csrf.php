<?php 
if(session_status() === PHP_SESSION_NONE) session_start();
/**
 * Paramètre un token en session et ajoute un input:hidden contenant le token
 * 
 * Optionnellement ajoute un temps de vie au jeton
 *
 * @param integer $time temps de vie en minute
 * @return void
 */
function set_CSRF(int $time = 0): void
{
    // Si $time est plus grand que 0, on ajoute un temps d'expiration en minute
    if($time > 0)
        $_SESSION["tokenExpire"] = time() + 60*$time;

    /* 
        random_bytes retourne un nombre d'octet aléatoire d'une longueur donnée en paramètre.
        bin2hex transorme ces octets en hexadecimal.
    */
    $_SESSION["token"] = bin2hex(random_bytes(50));
    // On affiche l'input contenant le jeton
    echo "<input type='hidden' name='token' value='".$_SESSION["token"]."'>";
}
/**
 * Vérifie si le jeton est toujours valide.
 *
 * @return boolean
 */
function is_CSRF_valid(): bool
{
    // Si on a pas de temps limite ou si celui ci est plus grand que le temps actuel
    if(!isset($_SESSION["tokenExpire"]) || $_SESSION["tokenExpire"] > time())
    {
        // Si on a le token en session et envoyé en post et qu'ils correspondent.
        if(isset($_SESSION["token"], $_POST["token"]) && $_SESSION["token"] === $_POST["token"])
            return true;
    }
    // Sinon je retourne false et je paramètre un code 405
    header($_SERVER["SERVER_PROTOCOL"] . " 405 Method Not Allowed");
    return false;
}

?>