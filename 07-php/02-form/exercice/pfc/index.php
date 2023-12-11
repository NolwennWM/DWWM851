<?php 
$jeu = ["ciseaux", "pierre", "feuille"];
$message = ["perdu", "gagné", "égalité"];
$choix = "";

$randBot = array_rand($jeu);
$choixBot = $jeu[$randBot];

echo $choixBot;

if($_SERVER['REQUEST_METHOD']=='GET' && isset($_GET['choixJoueur']))
{
    if(empty($_GET["choixJoueur"]))
    {
        $error["choixJoueur"] = "Veuillez choisir.";
    }
    else
    {
        $choix = $_GET["choixJoueur"];
    }
}
?>
<section>
    <div class="carteC">Ciseaux</div>
    <div class="carteF">Feuille</div>
    <div class="carteP">Pierre</div>
</section>
<h1>
    <?php 
        if($choix === "ciseaux" && $choixBot === "ciseaux")echo $message[2];
        if($choix === "ciseaux" && $choixBot === "pierre")echo $message[0];
        if($choix === "ciseaux" && $choixBot === "feuille")echo $message[1];
        if($choix === "feuille" && $choixBot === "ciseaux")echo $message[0];
        if($choix === "feuille" && $choixBot === "pierre")echo $message[1];
        if($choix === "feuille" && $choixBot === "feuille")echo $message[2];
        if($choix === "pierre" && $choixBot === "ciseaux")echo $message[1];
        if($choix === "pierre" && $choixBot === "pierre")echo $message[2];
        if($choix === "pierre" && $choixBot === "feuille")echo $message[0];
    ?>
</h1>
<form action="" method="get">
    <button value="ciseaux" name="choixJoueur">Ciseaux</button>
    <button value="feuille" name="choixJoueur">Feuille</button>
    <button value="pierre" name="choixJoueur">Pierre</button>
</form>