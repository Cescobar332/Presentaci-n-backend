<?php

require_once 'Persona.php'; 

class Empleado extends Persona{
    private $numEmpleado;
    private $salario;

    public function __construct($nombre, $cedula, $genero, $numEmpleado, $salario) {
        parent::__construct($nombre, $cedula, $genero);
        $this->numEmpleado = $numEmpleado;
        $this->salario = $salario;
    }
    

    /**
     * Get the value of numEmpleado
     */ 
    public function getNumEmpleado()
    {
        return $this->numEmpleado;
    }

    /**
     * Set the value of numEmpleado
     *
     * @return  self
     */ 
    public function setNumEmpleado($numEmpleado)
    {
        $this->numEmpleado = $numEmpleado;

        return $this;
    }

    /**
     * Get the value of salario
     */ 
    public function getSalario()
    {
        return $this->salario;
    }

    /**
     * Set the value of salario
     *
     * @return  self
     */ 
    public function setSalario($salario)
    {
        $this->salario = $salario;

        return $this;
    }
}