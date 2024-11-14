<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
print_r($_GET);
echo "Hola, esto es php";

$nombre = "Charles";
$apellido = "Escobar";
$num1 = 10;
$num2 = "10";
$booleanos = true;

echo "<br>  <h1>" . $nombre ." ". $apellido . "</h1>";

$resultado = $num1 + $num2;

echo $resultado;
?>
</body>
</html>
