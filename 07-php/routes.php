<?php

require_once __DIR__.'/router.php';

get("/", "./index.php");
get("/variables", "./01-syntaxe/01-variable.php");

get("/userlist", function(){
    require "./03-crud/controller/UserController.php";
    listUsers();
});
get("/inscription", function(){
    require "./03-crud/controller/UserController.php";
    inscription();
});
any("/404", "./404.php");