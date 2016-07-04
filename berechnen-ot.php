<?php
$weight = $_GET["gewicht"];
$height = $_GET["groesse"];
$bmi = $weight / ($height * $height);
echo $bmi;
?>