<?php
$x = 0;

while($x <100){
    echo "Hola" . $x. '<br>';
    $x++;
}
for ($i = 0; $i<10; $i++){

}
$persona = [
    'nombre' => 'Carlos',
    'apellido' => 'Escobar',
    'altura' => 165.4,
    'esProfesor' => false,
    'hobbies' => [
        'jugar', 'comer', 'series'
    ]
];

foreach ($persona as $atributo){
    print_r($atributo);
}