<?php 
$title = "Blog de ". $user["username"];
require __DIR__. "/../../../ressources/template/_header.php";
// Si l'utilisateur est connecté sur son blog, alors j'affiche le formulaire d'ajout
if(isset($_SESSION["idUser"]) && $id == $_SESSION["idUser"]):
?>
    <form action="/blog/ajout" method="post">
        <textarea name="message" placeholder="Nouveau message"></textarea>
        <input type="submit" value="Envoyer" name="addMessage">
    </form>
<?php
endif;
/* 
    Autre possibilité :
*/
if(false)
{
    echo '
    <form action="/blog/ajout" method="post">
        <textarea name="message" placeholder="Nouveau message"></textarea>
        <input type="submit" value="Envoyer" name="addMessage">
    </form>';
}
if($messages):
    foreach($messages as $m):
?>
    <div class="message">
        <div class="date1">
            Ajouté le <?= $m["createdAt"] ?>
        </div>
        <div class="date2">
            <?= ($m["editedAt"]?"Édité le ".$m["editedAt"]:"") ?>
        </div>
        <p><?= $m["message"] ?></p>
        <div class="btns">
            <?php 
            // Si l'utilisateur connecté est sur son blog alors on affiche les boutons :
            if(isset($_SESSION["idUser"]) && $id == $_SESSION["idUser"]):
                /*
                    On fait passer les id des messages dans la route grâce au routeur 
                    Ou en "get" si on n'utilise pas de routeur "?id="
                */
            ?>
                <a href="/blog/update/<?= $m["idMessage"] ?>">éditer</a>
                <a href="/blog/delete/<?= $m["idMessage"] ?>">supprimer</a>
            <?php endif;?>
        </div>
    </div>
<?php 
    endforeach;
else:
?>
    <p>Cet Utilisateur n'a aucun message.</p>
<?php endif;
require __DIR__. "/../../../ressources/template/_footer.php";
?>