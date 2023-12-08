<?php 
$title = "";
require "../ressources/template/_header.php";
?>
<form action="#" method="POST">
    <!-- TODO: Ajouter class et value  -->
    <input type="text" name="username" placeholder="Entrez votre Nom">
    <!-- TODO: ajouter le message d'erreur en PHP -->
    <span class="error"></span>
    <br>
    <!-- TODO: AJouter class -->
    <fieldset>
        <legend>Nourriture Favorite</legend>
        <!-- TODO: Ajouter une boucle pour afficher les radios -->
        <input type="radio" name="food" value="" id="">
        <label for=""></label>
        <br>
        <!-- TODO: ajouter le message d'erreur en PHP -->
        <span class="error"></span>
    </fieldset>
    <label for="drink">Boisson Favorite</label>
    <br>
    <select name="drink" id="drink">
        <!-- TODO: Ajouter une boucle pour afficher les options -->
        <option value=""></option>
    </select>
    <!-- TODO: ajouter le message d'erreur en PHP -->
    <span class="error"></span>
    <br>
    <input type="checkbox" name="cgu" id="cgu" value="cgu">
    <label for="cgu">J'accepte que mes données ne m'appartiennent plus</label>
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