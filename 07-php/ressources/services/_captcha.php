<?php 
if(session_status() === PHP_SESSION_NONE) session_start();
// Liste des characters possibles pour le captcha.
$characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
/**
 * Génère un string aléatoire
 *
 * @param string $characters liste des charactères possible
 * @param integer $strength taille du string à retourner
 * @return string
 */
function generate_string(string $characters, int $strength = 10): string
{
    $randStr = "";
    for($i = 0; $i < $strength; $i++)
    {
        $randStr .= $characters[rand(0, strlen($characters)-1)];
    }
    return $randStr;
}
/* 
    le code suivant utilise des fonctions de la bibliothèque PHP "GD"
    imagecreatetruecolor(largeur, hauteur) génère une image qui est un objet de classe GdImage.
*/
$image = imagecreatetruecolor(200, 50);
// Active les fonctions d'antialiasing pour améliorer la qualité de l'image.
imageantialias($image, true);

$colors = [];
// On choisi une plage de couleur aléatoire
$red = rand(125, 175);
$green = rand(125, 175);
$blue = rand(125, 175);

for($i = 0; $i < 5; $i++)
{
    /* 
        imagecolorallocate prend un objet GdImage en premier argument
        puis 3 valeurs numériques représentant les niveaux de couleur rgb
        retourne un INT qui représente l'identifiant pour la couleur généré
    */
    $colors[] = imagecolorallocate($image, $red-20*$i, $green-20*$i,$blue-20*$i);
}
/* 
    Rempli un objet GdImage donné en premier argument
    à partir des positions données en second et troisième argument.
    avec l'identifiant de couleur donné en quatrième argument.
*/
imagefill($image, 0, 0, $colors[0]);

for ($i=0; $i < 10; $i++) 
{ 
    // Paramètre l'épaisseur des lignes
    imagesetthickness($image, rand(2,10));
    /* 
        Dessine un rectangle dans l'image en premier argument.
        Avec le coin haut gauche aux positions x, y en second et troisième argument
        et le coind bas droit aux positions x,y en quatrième et cinquième argument
        de la couleur en sixième argument.
    */
    imagerectangle(
        $image,
        rand(-10, 190),
        rand(-10, 10),
        rand(-10, 190),
        rand(40, 60),
        $colors[rand(1, 4)]
    );
}
// Couleurs possible pour le texte
$textColors = [imagecolorallocate($image, 0,0,0),imagecolorallocate($image, 255,255,255)];
// Polices possible pour le texte
$fonts = [
    __DIR__."/../fonts/Acme-Regular.ttf",
    __DIR__."/../fonts/arial.ttf",
    __DIR__."/../fonts/typewriter.ttf"
];
// nombre de charactères pour le captcha :
$strLength = 6;
// string aléatoire :
$captchaStr = generate_string($characters, $strLength);
// On sauvegarde le string en session :
$_SESSION["captchaStr"] = $captchaStr;

// On ajoute les characters à l'image
for($i=0; $i < $strLength; $i++)
{
    // On calcul l'espacement entre les lettres
    $letterSpace = 170/$strLength;
    // On choisi une position initial pour les lettres :
    $initial = 15;
    /*  */
    imagettftext(
        $image,
        24,
        rand(-15, 15),
        (int)($initial + $i * $letterSpace),
        rand(25, 45),
        $textColors[rand(0,1)],
        $fonts[array_rand($fonts)],
        $captchaStr[$i]
    );
}

// On indique le type de fichier qui est rendu au navigateur :
header("Content-type: image/png");
// On transforme notre objet GdImage en image au format png :
imagepng($image);
?>