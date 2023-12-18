<?php 
/* 
    Pour savoir d'une page à l'autre que notre utilisateur est connecté,
    Je vais garder l'information en session.
*/
session_start();
/* 
    Si l'utilisateur est déjà connecté, 
    je le redirige ailleurs
*/
if(isset($_SESSION["logged"]) && $_SESSION["logged"] === true)
{
    header("Location: /");
    exit;
}

$email = $pass = "";
$error = [];

if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['login']))
{
    if(empty($_POST["email"]))
        $error["email"] = "Veuillez entrer un email";
    else
        $email = trim($_POST["email"]);

    if(empty($_POST["password"]))
        $error["password"] = "Veuillez entrer un password";
    else
        $pass = trim($_POST["password"]);

    if(empty($error))
    {
        /* 
            Habituellement il nous faudrait se connecter à la BDD et envoyer une requête pour trouver l'utilisateur.
            Mais on a pas encore vu la connexion à la BDD.
            Donc on va récupérer nos utilisateurs depuis un fichier json.

            file_get_contents() qui permet de récupérer le contenu d'un fichier.
            json_decode() permet de transformer du json en données PHP.
            (On ne l'utilisera pas ici mais json_encode() transforme des données PHP en JSON)
        */
        $users = file_get_contents("../ressources/users.json");
        $users = json_decode($users, true);
        // Je regarde si j'ai un utilisateur qui correspond à l'email :
        $user = $users[$email]?? false;
        // Je vérifie si j'ai trouvé un utilisateur :
        if($user)
        {
            /* 
                La fonction "password_verify()" permet de vérifier si un mot de passe non hashé correspond à un mot de passe hashé. 
            */
            if(password_verify($pass, $user["password"]))
            {
                /* 
                    Si notre email et notre mot de passe est bon.
                    On arrive ici, et on a plus qu'à sauvegarder les informations que l'on souhaite réutiliser d'une page à l'autre.
                */
                $_SESSION["logged"] = true;
                $_SESSION["username"] = $user["username"];
                // Et si je souhaite créer une durée limite de connexion
                $_SESSION["expire"] = time()+3600;
                // Enfin je redirige mon utilisateur vers une autre page.
                header("Location: /");
                exit;
            }
            else
            {
                $error["login"] = "Email ou Mot de Passe Incorrecte (password)";
            }
        }
        else
        {
            $error["login"] = "Email ou Mot de Passe Incorrecte (email)";
        }
    }
}

$title = "Connexion";
require(__DIR__."/../ressources/template/_header.php");?>
<form action="" method="post">
    <label for="email">Email</label>
    <input type="email" name="email" id="email">
    <br>
    <span class="error"><?php echo $error["email"]??""; ?></span>
    <br>
    <label for="password">Mot de passe</label>
    <input type="password" name="password" id="password">
    <br>
    <span class="error"><?php echo $error["pass"]??""; ?></span>
    <br>
    <input type="submit" value="Connexion" name="login">
    <br>
    <span class="error"><?php echo $error["login"]??""; ?></span>
</form>
<?php 
require(__DIR__."/../ressources/template/_footer.php");?>