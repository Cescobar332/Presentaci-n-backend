<?php

function login($email, $password)
{
    $emailData = "cescobar332@unab.edu.co";
    $passwordData = "qwerty123";

    if ($email == $emailData && $password == $passwordData) {
        return true;
    } else {
        return false;
    }
}

if (empty($_GET['email'])) {
    $email_de_usuario = "";
} else {
    $email_de_usuario = $_GET['email'];
}
if (isset($_GET['password'])) {
    $pass_de_usuario = $_GET['password'];
} else {
    $pass_de_usuario = "";
}
if (login($email_de_usuario, $pass_de_usuario)) {
    echo "<h1>Iniciaste sesión</h1>";
}

$diaSemana = 1;

switch ($diaSemana) {
    case 1:
        echo "Lunes";
        break;
    case 2:
        echo "Martes";
        break;
    default:
        echo "No se cumplió";
        break;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <form action="sentencias.php" method="GET">
        Email:
        <Input type="email" name="email"></Input>
        <br>
        Password:
        <Input type="password" name="password"></Input>
        <br>
        <Input type="submit" value="Iniciar Sesión"></Input>
    </form>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>