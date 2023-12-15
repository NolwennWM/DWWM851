<?php 
$title = "Liste des Utilisateurs";
require __DIR__. "/../../../ressources/template/_header.php";
if($users):
?>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>username</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($users as $u):?>
                <tr>
                    <td><?= $u["idUser"] ?></td>
                    <td><?= $u["username"] ?></td>
                    <td>
                        <a href="">Voir les messages</a>
                        &nbsp;|&nbsp;
                        <a href="">éditer l'utilisateur</a>
                        &nbsp;|&nbsp;
                        <a href="">supprimer l'utilisateur</a>
                    </td>
                </tr>
            <?php endforeach;?>
        </tbody>
    </table>
<?php else:?>
    <p>Aucun utilisateur trouvé</p>
<?php endif;
require __DIR__. "/../../../ressources/template/_footer.php";?>