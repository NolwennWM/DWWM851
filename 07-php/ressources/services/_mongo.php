<?php 
use MongoDB\BSON\ObjectId;
use MongoDB\Driver\Query;
use MongoDB\Driver\Manager;

function connexionMongo()
{
    $config = require __DIR__."/../config/_blogMongoConfig.php";
    /*
        Je construit mon DSN, celui de mongodb prend la syntaxe suivante :
        "mongodb://nomUser:password@host:port"
    */
    $dsn = "mongodb://{$config['user']}:{$config['password']}@{$config['host']}:{$config['port']}";
    try
    {
        $mongo = new Manager($dsn);
        return $mongo;
    }catch(Exception $e)
    {
        echo "Exception reçue : {$e->getMessage()}";
    }
}
?>