<?php

require_once __DIR__.'/router.php';

get("/", "./index.php");
get("/variables", "./01-syntaxe/01-variable.php");

// Liste utilisateur
get("/userlist", function(){
    require "./03-crud/controller/UserController.php";
    listUsers();
});
// Inscription
any("/inscription", function(){
    require "./03-crud/controller/UserController.php";
    inscription();
});
// Suppression
get("/userdelete", function(){
    require "./03-crud/controller/UserController.php";
    deleteUser();
});
// Mise à jour
any("/userupdate", function(){
    require "./03-crud/controller/UserController.php";
    updateUser();
});
// page 404
any("/404", "./404.php");