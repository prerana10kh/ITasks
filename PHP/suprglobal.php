<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8">
<title></title>
</head>

<body>

<h2>Superglobals</h2>

<?php

$num1 = 50;
$num2 = 10;

function multiply(){
    $GLOBALS['result'] = $GLOBALS['num1'] * $GLOBALS['num2'];
}

multiply();
echo $GLOBALS['result']."<br>";

function add($value){
    return $GLOBALS['result'] + $value;
}

echo add(50);

?>

</body>
</html>