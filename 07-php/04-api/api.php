<?php
// Accès depuis n'importe quel site ou appareil (*)
header("Access-Control-Allow-Origin: *");

// Format des données envoyées
header("Content-Type: application/json; charset=UTF-8");

// Durée de vie de la requête
header("Access-Control-Max-Age: 3600");
// On indique la possibilité d'échanger des identifiants
header("Access-Control-Allow-Credentials: true");

// Entêtes autorisées
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function sendResponse(array $data, int $status, string $message): void
{
    http_response_code($status);
    echo json_encode([
        "data"=>$data,
        "status"=>$status,
        "message"=>$message
    ]);
    exit;
}
/**
 * Si les arguments sont fourni, cela rempli le tableau d'erreur.
 * Si aucun argument n'est fourni, alors cela retourne le tableau d'erreur.
 *
 * @param boolean $property
 * @param boolean $message
 * @return void|array
 */
function setError($property=false, $message=false)
{
    static $error = [];
    if(!$property && !$message)return ["violations"=>$error];
    $error[] = [ 
        "propertyPath"=> $property,
        "message"=>$message
    ];
}