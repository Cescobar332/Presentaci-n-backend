<?php
//$colores = ["azul", "verde", "morado"];
$colores = array("azul", "verde", "morado");

$colores[] = "Amadillo";

echo "<pre>";
print_r($colores);
echo "</pre>";

unset($colores[0]);

echo "<pre>";
print_r($colores);
echo "</pre>";

$colores[3]= "Magenta";

$persona = [
    'nombre' => 'Carlos',
    'apellido' => 'Escobar',
    'altura' => 165.4,
    'esProfesor' => false,
    'hobbies' => [
        'jugar', 'comer', 'series'
    ]
];

print_r($persona['apellido']);
$persona['edad'] = 20;
echo "<pre>";
print_r($persona);
echo "</pre>";