<?php 
/* 
    Nous allons voir comment gérer l'upload de fichier.
    Même si l'enregistrement en BDD attendra.
    Il faut noter que l'on n'enregistre pas les fichiers en BDD.
    Seul leur nom et leurs chemins d'accès doivent être enregistré en BDD.
    Enregistrer des fichiers seraient trop lourd pour la bdd.
    Les fichiers eux sont simplement stocké dans un dossier du serveur.
*/
$error = $target_file = $target_name = $mime_type = $oldname = "";
// Chemin vers le dossier d'upload :
$target_dir = "./upload/";
// Liste des types mimes acceptés pour les fichiers uploadé.
$types_permis = ["image/png", "image/jpeg", "image/gif", "application/pdf"];

if($_SERVER['REQUEST_METHOD']==='POST' && isset($_POST['upload']))
{
    /* 
        Lorsque l'on upload un fichier, il est placé dans un dossier temporaire supprimé à la fin de l'execution.
        On va donc vérifier que le fichier correspond à nos attentes,
        puis le déplacer dans notre dossier d'upload.

        La première étape va être de vérifier que le fichier a bien été upload.
        Pour cela on va utiliser la superglobal $_FILES qui contient tout les fichiers uploadé. 
        C'est un tableau associatif qui prendra en clef, le name de l'input type file.
        On ira chercher le "tmp_name" que l'on verifiera avec "is_uploaded_file()"
    */
    if(!is_uploaded_file($_FILES["fichier"]["tmp_name"]))
    {
        $error = "Veuillez sélectionner un fichier";
    }
    else
    {
        /* 
            Je vais commencer par récupérer le nom de base du fichier.
            grâce à basename(), je vais récupérer le nom sans informations superflues
        */
        $oldName = basename($_FILES["fichier"]["name"]);
        /* 
            PHP supprimera un fichier, si un fichier du même nom est placé dans un dossier.
            Pour éviter cela, nous allons renommer notre fichier.
            Il existe plein de façon de renommé, 
            ici je vais utiliser la fonction "uniqid()"
                Elle va générer un string de 13 charactères aléatoires qui se veulent unique à chaque fois.
                Elle peut prendre un premier argument, qui servira de "prefix"
                Et un second argument, qui sera un boolean, à true, ça ne sera plus 13 mais 23 charactères aléatoires.
        */
        $target_name = uniqid(time()."-", true). "-".$oldName;

        // Je vais créer le chemin pour mon nouveau fichier :
        $target_file = $target_dir . $target_name;
        /* 
            Il nous faudra vérifier le type du fichier.
            Pour cela il y a deux solutions.
            Soit vérifier l'extension du fichier. Mais cela est peu sécurisé.
            Soit vérifier le type mime du fichier téléversé.        
        */
        $mime_type = mime_content_type($_FILES["fichier"]["tmp_name"]);
        // Je vérifie si le fichier n'existe pas déjà dans mon dossier :
        if(file_exists($target_file))
        {
            $error = "Ce fichier existe déjà";
        }
        // Je vérifie la taille maximum de mon fichier.
        if($_FILES["fichier"]["size"] > 1000000)
        {
            $error = "Ce fichier est trop gros";
        }
        /* 
            L'upload peut échouer si des fichiers trop lourd sont envoyé 
            et que la configuration serveur ne correspond pas.
            Allez voir dans le fichier php.ini

            Je vérifie si le type mime du fichier est dans ma liste de type accepté
        */
        if(!in_array($mime_type, $types_permis))
        {
            $error = "Ce type de fichier n'est pas accepté";
        }
        var_dump($mime_type);
        // Si il n'y a pas d'erreur :
        if(empty($error))
        {
            /* 
                On va utiliser la fonction "move_uploaded_file" pour déplacer notre fichier depuis sa zone temporaire (premier argument), jusqu'à sa zone final (second argument)
                Cette fonction retourne un boolean indiquant si le déplacement s'est bien déroulé.
            */
            if(move_uploaded_file($_FILES["fichier"]["tmp_name"], $target_file))
            {
                // Envoyer le chemin et/ou nom d'origine en bdd
            }
            else
            {
                $error = "Erreur lors de l'upload";
            }
        }
    }
}
// phpinfo();
$title = "";
require(__DIR__."/../ressources/template/_header.php");?>
<!-- Notre formulaire est assez classique, on oublie juste pas l'attribut :
    "enctype" lorsque l'on veut uploader un fichier. -->
<form action="" method="post" enctype="multipart/form-data">
    <label for="fichier">Choisir un fichier :</label>
    <input type="file" name="fichier" id="fichier">
    <input type="submit" value="Envoyer" name="upload">
    <span class="error"><?php echo $error??""; ?></span>   
</form>
<!-- On affiche cette partie que is on a envoyé notre formulaire et qu'il n'y a aucune erreur. -->
<?php if(isset($_POST["upload"]) && empty($error)): ?>
    <p>
        Votre fichier a bien été téléversé sous le nom  "<?php echo $target_name ?>". <br>
        Vous pouvez le télécharger <br> <a href="<?php echo $target_file ?>" download="<?php echo $oldName ?>"> ICI</a>
    </p>
<?php
endif;
require(__DIR__."/../ressources/template/_footer.php");?>