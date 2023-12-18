<?php 
/* 
    Include et Require permettent d'inclure d'autres fichiers dans notre code.

    Une petite convention est de nommer les fichiers qui doivent être inclu et n'ont pas pour but d'être ouvert seul, avec un "_" les précédents.
*/
$title = "Include";
$mainClass = "includeNav";
require(__DIR__."/../ressources/template/_header.php");

/* 
    La seule différence entre require et include
    Est le niveau d'erreur lancé.

    require en cas de problème provoque une "fatal error" mettant fin au code.

    include lui lance un "warning" et le code continue.
*/
require(__DIR__."/../ressources/template/_nav.php");

?>
<div>
    <p id="para1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptatibus illum, velit, dolor id in incidunt, impedit molestias cumque dolore non aspernatur repellendus! Repellat fugiat nostrum non animi iusto libero.
    </p>
    <p id="para2">
        Ratione magni repellat libero assumenda alias at deleniti numquam odio ipsa, eum tempora corporis ipsam molestiae a aliquid iure illo. Rerum laudantium minima qui obcaecati impedit rem nobis vel magnam!
    </p>
    <p id="para3">
        Tenetur unde adipisci omnis autem sit eum. Quod debitis corrupti labore, magnam sunt sed repudiandae, earum voluptatem vel ullam sit tenetur aperiam excepturi quibusdam sequi ipsa consequatur fuga asperiores ducimus.
    </p>
    <p id="para4">
        Ut incidunt deserunt beatae voluptatibus molestias ratione voluptate, et accusantium odio tempora blanditiis voluptas quidem eaque possimus commodi sit quos laudantium, fugit provident voluptates sapiente, hic quibusdam odit? Libero, aspernatur?
    </p>
    <p id="para5">
        Asperiores saepe eum provident modi rerum quas dolorum nisi eaque, quo quos quia aliquam. Earum dignissimos aliquam dolore laborum quisquam natus, assumenda nulla itaque tempore delectus eum officiis officia dolorum!
    </p>
</div>
<?php 
/* 
    Dans un très gros projet avec beaucoup d'inclusion
    Il est possible de s'emmeller et de require plusieurs fois un même fichier.

    L'utilisation de "require_once" ou "include_once" règle se problème.
    Car ces derniers avant d'inclure vérifient si le fichier n'a pas déjà été inclu.
    (il sont cela dit, un peu plus gourmand en ressource.)
*/
require(__DIR__."/../ressources/template/_footer.php");
// require("../ressources/template/_footer.php");
require_once(__DIR__."/../ressources/template/_footer.php");

?>