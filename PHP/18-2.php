<?php
session_start();
?>

<form method="post">

<h2>POST Form</h2>

<input type="text" name="input1" placeholder="Username">
<br><br>

<button type="submit" name="button">Submit</button>

</form>

<?php

if(isset($_POST["input1"])){

    $_SESSION["input1"] = $_POST["input1"];

    echo $_POST["input1"];

    header("Location: 18-3.php");

}

?>