<?php

$weight = $_GET["gewicht"];
$height = $_GET["groesse"];
$bmi = $weight / ($height * $height);
echo"Mit " . $weight . " kg und " . $height . " m " .
 "haben Sie einen Body MassIndex von " . $bmi . "<br>";
if ($bmi < 20)
    echo "Damit sind Sie zu d&uuml;nn!<br>";
elseif ($bmi > 24)
    echo"Damit sind Sie zu dick!<br>";
else
    echo"Damit haben Sie Normalgewicht.<br>";
?>