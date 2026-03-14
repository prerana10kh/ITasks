<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>GET Superglobal</title>
</head>

<body>

<h2>Superglobals</h2>

<form method="get">

<h3>GET Form</h3>

<input type="text" name="input1" placeholder="Username">
<br><br>

<input type="text" name="input2" placeholder="Mail">
<br><br>

<button type="submit" name="button">Submit</button>

</form>

<?php

if(isset($_GET["input1"]) && isset($_GET["input2"])){

    echo $_GET["input1"]."<br>";
    echo $_GET["input2"]."<br>";

}

?>

</body>
</html>