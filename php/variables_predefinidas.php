<?php 

function imprimirUnArreglo($array){
    echo "<pre>";
    print_r($array);
    echo "</pre>";
}

imprimirUnArreglo($_GET);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variables Predefinidas</title>
</head>
<body>
    <h1>Variables Predefinidas</h1>
    <form action="hola.php" method="get">
        Nombre:    
        <Input type="text" name="nombre"></Input>
        Fecha:
        <Input type="date" name="fecha"></Input>
        <br>
        <Input type="submit" value="Enviar"></Input>
    
    </form>
</body>
</html>