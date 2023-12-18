<?php 
/* 
    Les failles de sécurité qu'un développeur web se doit de prévoir sont:
        - XSS (Cross Site Scripting)
        - CSRF (Cross Site Request Forgery)
        - Brute Force
        - Injection SQL

        ? ---------------------- XSS ----------------------
    La première, XSS, consiste à pouvoir intégrer du HTML ou des SCRIPT directement depuis un formulaire.
    Si l'utilisateur rentre un message comme "<script>alert("Hack !");</script>
    Et que cela s'execute, alors vous avez une faille XSS.

    Deux choses à faire pour s'en protéger 
    Si une information envoyé par un utilisateur doit être affiché en JS
    Surtout ne pas utiliser "innerHTML" mais plus "innerText" ou "textContent"
    En PHP, on filtrera le texte à afficher avec un "htmlspecialchars" ou "htmlentities".

    ? --------------------- CSRF -----------------------------
    Le CSRF consiste à répondre à un petit formulaire innocent.
    qui cache derrière des champs invisible et une action qui redirige vers un formulaire important.

    Par exemple l'administrateur d'un site répond à un sondage, qui va le rammener sur son site et donner le droit d'administration à un inconnu.

    Pour s'en protéger, on va générer en arrivant sur le formulaire, un jeton (chiffres ou lettres aléatoire) aléatoire que l'on sauvegarde en session.
    Puis afficher ce même jeton, dans un champ hidden de notre formulaire.
    Pour enfin lors de la validation de celui ci, comparer le jeton envoyé par le formulaire avec celui en session.

    ? ---------------------- Injection SQL ------------------
    L'injection SQL consiste à ce qu'un utilisateur écrive du SQL dans un formulaire, et que celui ci soit interprété et executé par votre BDD.
    Imaginons une requête simple comme :
        SELECT * FROM messages WHERE auteur = choixUtilisateur
    Si l'utilisateur tape "1; DROP DATABASE;"
    et que l'on se contente d'insérer la donnée brute on obtiendra :
        SELECT * FROM messages WHERE auteur = 1; DROP DATABASE;

    Ce qui poser problème.
    La solution à cela est nommé "requête préparé"
    Cela consiste en une requête en deux temps, la première ne contenant que la requête sans les informations qui sera interprété
    Puis dans un second temps, les informations inséré
        SELECT * FROM messages WHERE auteur = ?
            ou 
        SELECT * FROM messages WHERE auteur = :choixUtilisateur
    Et dans un second temps 
        execute avec "1; DROP DATABASE;"
    
    La BDD va comprendre que l'information envoyé en second temps, n'est pas du SQL, seul la première partie sera interprété.

    ? ---------------------- BRUTE FORCE ----------------------
    Cela consiste en l'envoi de multiple requête (souvent par un bot)
    Pour tenter toute les combinaisons possible d'identifier afin d'en trouver un valide.

    Ici plusieurs solutions existent, il faut juste faire la part des choses entre ce qui est contraignant pour l'utilisateur et ce qui le sécurise le plus.

    Pour s'en protéger on peut imaginer bloquer le compte utilisateur après un certain nombre d'essai, 
    puis le forcer à répondre à un email ou attendre un certain temps avant de réessayer.

    On peut ajouter une authentification à multiple facteur.
        Un mail ou un SMS à chaque fois que l'utilisateur veut se connecter.
        Ou encore un code temporaire via application comme google authenticator
    
    Ou bien un captcha pour bloquer ou ralentir les bots.
*/
// require __DIR__."/../ressources/services/_csrf.php";

$error = $password = "";
if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['password']))
{
    if(empty($_POST["password"]))
    {
        $error = "Veuillez entrer un mot de passe";
    }
    else
    {
        $password = trim($_POST["password"]);
        /* 
            Password_hash va hacher le string passé en premier paramètre
            Selon l'algorithme passé en second paramètre.

            Hacher et Crypter sont deux choses différentes.
            Un hachage ne peut pas être "déhaché" alors que l'on peut "décrypter" quelque chose qui a été "crypté"

            Le second paramètre est une constante à choisir entre :
                - PASSWORD_DEFAULT
                - PASSWORD_BCRYPT
                - PASSWORD_ARGON2I
                - PASSWORD_ARGON2ID
            Le premier choisira l'actuel algorythme le plus sécurisé selon les développeurs de PHP, actuellement c'est le BCRYPT.

            Un hachage est différent à chaque fois, excepté les premier caractères.
        */
        $password = password_hash($password, PASSWORD_DEFAULT);
    }
    // Vérification CSRF :
    if(!is_CSRF_valid())
    {
        $error = "La méthode utilisée n'est pas permise !";
    }
    // Vérification Captcha :
    if(!isset($_POST["captcha"], $_SESSION["captchaStr"]) || $_POST["captcha"] !== $_SESSION["captchaStr"])
    {
        $error = "CAPTCHA Incorrecte !";
    }

}
$title = "";
require(__DIR__."/../ressources/template/_header.php");
// var_dump(bin2hex(random_bytes(50)));
?>
<h1>Formulaire pour hacher un mot de passe :</h1>
<form action="#" method="post">
    <input type="password" name="password" placeholder="Mot de passe à hacher" required>
    <!-- Protection CSRF: -->
    <?php set_CSRF()?>
    <!-- Protection Captcha: -->
    <div>
        <label for="captcha">Veuillez recopier le texte ci-dessous :</label>
        <br>
        <img src="/captcha" alt="captcha">
        <br>
        <input type="text" name="captcha" id="captcha" pattern="^[A-Z0-9]{6}$">
    </div>
    <input type="submit" value="Hacher">
    <span class="error"><?= $error ??""?></span>
</form>
<?php if(empty($error) && !empty($password)):?>
    <div>
        Votre mot de passe haché est : <?= $password ?>
    </div>
<?php 
endif;
require(__DIR__."/../ressources/template/_footer.php");?>