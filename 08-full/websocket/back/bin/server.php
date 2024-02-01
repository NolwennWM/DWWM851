<?php 
    use AFCI\Chat;
    use Ratchet\Http\HttpServer;
    use Ratchet\Server\IoServer;
    use Ratchet\WebSocket\WsServer;

    require __DIR__ . "/../vendor/autoload.php";
    require __DIR__ . "/../src/Chat.php";

    $server = IoServer::factory(
        new HttpServer(
            new WsServer(
                new Chat()
            )
        ),
        8000
    );
    $server->run();
?>