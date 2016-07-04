function calcBmiPhp() {
    console.log("calcBmiPhp loaded");
    var groesse = document.getElementById("groesse");
    var gewicht = document.getElementById("gewicht");
    var queryString = "berechnen-ot.php?groesse=" + groesse.value
            + "&gewicht=" + gewicht.value;
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log(this.responseText);
        document.getElementById("bmi_").innerHTML = this.responseText;
    };
    xhr.open("get", queryString, true);
    xhr.send();
}