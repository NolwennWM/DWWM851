<?php 
session_start();
if(empty($_SESSION["randomPrice"]))
{
    $_SESSION["randomPrice"] = rand(1, 100);
}
$message = ["C'est plus", "C'est moins", "C'est gagné"];
$price = "";
$error = [];

if($_SERVER['REQUEST_METHOD']=='GET' && isset($_GET['price']))
{
    if(empty($_GET["price"]))
    {
        $error["price"] = "Veuillez entrer un chiffre";
    }
    else
    {
        $price = $_GET["price"];
    }
}
?>
<div class="carte">
    <?= $_SESSION["randomPrice"]?>
</div>
<h1>
    <?php if($_SESSION["randomPrice"] > $price) echo $message[0]?>
    <?php if($_SESSION["randomPrice"] < $price) echo $message[1]?>
    <?php if($_SESSION["randomPrice"] == $price)
    {
        echo $message[2];
        unset($_SESSION["randomPrice"]);
    } ?>
</h1>
<form action="" method="GET">
    <input type="number" name="price" value="<?= $price ?>">
    <span class="error"><?php $error["price"]??""?></span>
    <button>Valider</button>
</form>
<a href="">Rejouer</a>