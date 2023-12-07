<?php 
$information = ["titre" => "Les joies du PHP", "content"=>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quia commodi dolore quisquam voluptatem, autem nostrum distinctio blanditiis, suscipit, minima numquam. Non at quaerat, quis consequatur earum sint praesentium voluptates!"];
header("content-type:application/json");
echo json_encode($information);
?>