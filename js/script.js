//https://regex101.com/#javascript
"use strict";
console.log("script.js loaded");

function calc(){
    console.log("function calc lodaded");
    var weight = document.getElementById("gewicht").value;
    console.log(weight);
    var height = document.getElementById("groesse").value;
    console.log(height);
    var bmi = weight / (height * height);
//document.write("Mit " + weight + " kg und " + height + " m " +
//       "haben Sie einen Body Mass Index von " + bmi + ".<br>");
    
    //toFixed(x) returns a string, with x number of decimals;
    document.getElementById("bmi_").innerHTML = bmi.toFixed(2);
}
document.getElementById("berechnen").onclick = calc;



function pruefen(){

    var ok=true;
    console.log("pruefen loaded");
    var str,estr,astr = [];
    var nstr=[];
    str = document.getElementById("name").value;
    estr = document.getElementById("email").value;
    console.log("Nameregex test:"+/^[a-zA-Z `´^']+$/.test("MAX MUSTER"));
        if (/^[a-zA-Z `´^']+$/.test(str) !== true){

            console.log("Vor Name Replace:"+str);    
            console.log(nstr);
            
            alert("Bitte Name ohne Sonderzeichen!\n" +str);
            ok=false;
        }
    //console.log("EMregex test:"+/^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/gi.test("MAX@MUSTER.de"));
        if (/^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/gi.test(estr) !== true){
   
            alert("Bitte Email ohne Sonderzeichen!\n"+ estr);
            ok=false;
                
        }
             
    astr = document.getElementsByName("anmerk")[0].value;
    //console.log("AnmerkRegex: "+/<img.*?src="([^"]*)"[^>]*>(?:<\/img>)?/gi.test("Asdf 3>4"));
        if (/([<]|[>]).*([<]|[>])/gi.test(astr)){
            alert("Bitte Anmerkungen ohne Sonderzeichen!\n"+ astr);
            ok=false;
        }

    return ok;
}
document.getElementById("senden").onclick = pruefen;