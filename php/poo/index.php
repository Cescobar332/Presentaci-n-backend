<?php

require_once 'Persona.php'; 
require_once 'Empleado.php'; 

$miPersona = new Empleado("Carlos" , "1097780659", true, "CFES2004", 28000000);

echo "Nombre de la persona: " . $miPersona->getNombre();
echo "Salario: " . $miPersona->getSalario();