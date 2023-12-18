<?php 
// Je déclare les variables dont je vais avoir besoin
$food = $username = $drink = "";
$error = [];
$foodList = ["welsh", "cannelloni", "oyakodon"];
$drinkList = ["jus de tomate", "milkshake", "limonade"];

/* 
    Il va me falloir ensuite vérifier si le formulaire a bien été soumi.
    Pour cela je vais vérifier la méthode avec laquelle on est arrivé sur la page,
    ainsi que si j'ai au moins un champ (voir le nom du formulaire si il est défini).

    Pour récupérer la méthode, avec laquelle la requête est arrivé, je pourrais utiliser la superglobal "$_SERVER" avec la clef "REQUEST_METHOD"
*/
if($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["meal"]))
{
    // var_dump($_GET);
    // Vérification du champ "username"
    if(empty($_GET["username"]))
    {
        $error["username"] = "Veuillez entrer un nom d'utilisateur";
    }
    else
    {
        $username = $_GET["username"];
        // Retire les espaces avant et après le string
        $username = trim($username);
        // Retire les "\" sur les quotes
        $username = stripslashes($username);
        // Transforme les characters speciaux en code HTML ("<" devient "&lt;")
        $username = htmlspecialchars($username);
        // $username = htmlentities($username);
        if(strlen($username)<3 || strlen($username)>20)
        {
            $error["username"] = "Veuillez entrer un nom d'utilisateur d'une longueur comprise entre 3 et 20";
        }
        if(!preg_match("/^[A-Za-z\-_]+$/", $username))
        {
            $error["username"] = "Veuillez n'utiliser que des lettres, des tirets ou des underscores";
        }
    }
    // Vérification de mon champ "food"
    if(empty($_GET["food"]))
    {
        $error["food"] = "Veuillez choisir un repas";
    }
    elseif(!in_array($_GET["food"], $foodList))
    {
        $error["food"] = "Ce repas n'existe pas !";
    }
    else
    {
        // Ici mon résultat est forcément égale à ce qu'il y a dans mon tableau, je peux donc ne pas faire de trim/htmlspecialchar...
        $food = $_GET["food"];
    }
    // vérification du champ "drink"
    if(empty($_GET["drink"]))
    {
        $error["drink"] = "Veuillez choisir une boisson !";
    }
    elseif(!in_array($_GET["drink"], $drinkList))
    {
        $error["drink"] = "Cette boisson n'existe pas !";
    }
    else
    {
        $drink = $_GET["drink"];
    }
    /* 
        Une fois toute les vérifications faite.
        Il restera à voir si on a pas d'erreur :
    */
    if(empty($error))
    {
        // On enregistre ensuite en BDD nos informations. (voir cours suivant)
        echo "<script>alert('formulaire validé')</script>";
    }
}

$title = "";
require(__DIR__."/../ressources/template/_header.php");?>
<form action="#" method="GET">
    <input type="text" name="username" placeholder="Entrez votre Nom">
    <!-- J'affiche le message d'erreur de username -->
    <span class="error"><?php echo $error["username"]??"" ?></span>
    <br>
    <fieldset>
        <legend>Nourriture Favorite</legend>
        <input type="radio" name="food" value="welsh" id="welsh">
        <label for="welsh">Weslh (car vive le fromage)</label>
        <br>
        <input type="radio" name="food" value="cannelloni" id="cannelloni">
        <label for="cannelloni">Cannelloni (Pour changer des raviolis)</label>
        <br>
        <input type="radio" name="food" value="oyakodon" id="oyakodon">
        <label for="oyakodon">Oyakodon (Car j'aime l'humour noir)</label>
        <!-- affiche le message d'erreur de food -->
        <span class="error"><?php echo $error["food"]??"" ?></span>
    </fieldset>
    <label for="drink">Boisson Favorite</label>
    <br>
    <select name="drink" id="drink">
        <option value="jus de tomate">Jus de Tomate (je suis un vampire)</option>
        <option value="milkshake">Milkshake (aux fruits de préférence)</option>
        <option value="limonade">Limonade (J'ai besoin de sucre)</option>
    </select>
    <!-- affiche le message d'erreur de "drink" -->
    <span class="error"><?php echo $error["drink"]??"" ?></span>
    <br>
    <button type="submit" name="meal">Envoyer</button>
</form>
<!-- Vérification si le formulaire s'est bien placé  -->
<?php if(empty($error) && isset($_GET["meal"])):?>
    <h1>Meilleurs Repas :</h1>
    <p>
        <!-- affichage d'un message -->
        <?php echo "Pour $username, le meilleur repas est \"$food\" avec \"$drink\"" ?>
    </p>
<?php 
endif;
require(__DIR__."/../ressources/template/_footer.php");?>