<?php 
// var_dump($_ENV);
return [
    // L'host est l'hebergeur de la BDD
    "host"=>$_ENV["DB_HOST"]??"127.0.0.1",
    // le port utilisé pour se connecter
    "port"=>$_ENV["DB_PORT"]??"3306",
    // Le nom de la BDD
    "database"=>$_ENV["DB_NAME"]??"blog",
    // le nom d'utilisateur pour se connecter
    "user"=>$_ENV["DB_USER"]??"root",
    // le mot de passe 
    "password"=>$_ENV["DB_PASSWORD"]??"root",
    // Le set de caractère utilisé 
    "charset"=>$_ENV["DB_CHARSET"]??"utf8mb4",
    /* 
        Ce tableau d'option sera utilisé par "PDO" 
        PHP Data Object est un objet servant à la connexion aux BDD.
    */
    "options"=>
    [
        // Choisir le mode d'affichage d'erreur
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        // Choisir le mode de récupération des données (ici tableau associatif)
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        // J'indiquer à PDO de ne pas émuler les requêtes préparer, ce sera ma BDD qui s'en occupera
        PDO::ATTR_EMULATE_PREPARES => false
    ]
];
?>