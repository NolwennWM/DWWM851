<?php 
$title = "";
require "../ressources/template/_header.php";
?>
<form action="#" method="GET">
    <input type="text" name="username" placeholder="Entrez votre Nom">
    <!-- TODO: ajouter le message d'erreur en PHP -->
    <span class="error"></span>
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
        <!-- TODO: ajouter le message d'erreur en PHP -->
        <span class="error"></span>
    </fieldset>
    <label for="drink">Boisson Favorite</label>
    <br>
    <select name="drink" id="drink">
        <option value="jus de tomate">Jus de Tomate (je suis un vampire)</option>
        <option value="milkshake">Milkshake (aux fruits de préférence)</option>
        <option value="limonade">Limonade (J'ai besoin de sucre)</option>
    </select>
    <!-- TODO: ajouter le message d'erreur en PHP -->
    <span class="error"></span>
    <br>
    <button type="submit" name="meal">Envoyer</button>
</form>
<!-- TODO: Ajouter une condition pour vérifier si le formulaire a été posté  -->
<h1>Meilleurs Repas :</h1>
<p>
    <!-- TODO : Afficher le repas choisi -->
</p>
<?php 
require "../ressources/template/_footer.php";
?>