<?php
    $nombreUsuario = $_GET["username"];
    $nombresCogidos = array("pepe", "juan", "alberto");

    $nombreOcupado = 0;
    foreach ($nombresCogidos as $nombre){
        if(strcmp($nombre, $nombreUsuario) == 0){
            $nombreOcupado = 1;
        }
    }
    echo $nombreOcupado;
?>