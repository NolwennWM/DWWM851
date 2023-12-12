<?php 
session_start();

function save_tasks($task)
{
    $_SESSION["tasks"] = $task;
}
function load_tasks()
{
    return isset($_SESSION["tasks"])?$_SESSION["tasks"]:[];
}
$tasks = load_tasks();
if($_SERVER["REQUEST_METHOD"] === "POST")
{
    if(isset($_POST["taskInput"]))
    {
        $taskText = trim($_POST["taskInput"]);
        if($taskText !== "")
        {
            $tasks[] = ["task"=>$taskText, "completed"=>false];
            save_tasks($tasks);
        }
    }
    elseif(isset($_POST["delete"]))
    {
        $index = (int)$_POST["delete"];
        if(isset($tasks[$index]))
        {
            array_splice($tasks, $index, 1);
            save_tasks($tasks);
        }
    }
    elseif(isset($_POST["completed"]))
    {
        $index = (int)$_POST["completed"];
        if(isset($tasks[$index]))
        {
            $tasks[$index]["completed"] = !$tasks[$index]["completed"];
            save_tasks($tasks);
        }
    }
}
?>
<div class="todo-container">
    <h1>Liste des choses à faire</h1>
    <form action="" method="POST">
        <input type="text" name="taskInput" placeholder="texte">
        <button type="submit">Ajouter</button>
    </form>
    <ul class="task-list">
        <?php foreach($tasks as $index => $task):?>
            <li>
                <form action="" method="post" style="display: inline;">
                    <input type="hidden" name="completed" value="<?= $index ?>">
                    <button type="submit" class="completed">valider</button>
                </form>
                <?= $task["completed"]?"completed":"" ?>
                <?= htmlspecialchars($task["task"]) ?>
                <form action="" method="post" style="display: inline;">
                    <input type="hidden" name="delete" value="<?= $index ?>">
                    <button type="submit" class="delete">&#10007;</button>
                </form>
            </li>
        <?php endforeach; ?>
    </ul>
</div>