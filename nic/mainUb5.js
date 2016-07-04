/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

function ber(){
    var weight = document.getElementById("gw").value;
    var height = document.getElementById("gr").value;
    var bmi = weight / (height * height);
//document.write("Mit " + weight + " kg und " + height + " m " +
//       "haben Sie einen Body Mass Index von " + bmi + ".<br>");
    
    //toFixed(x) returns a string, with x number of decimals;
    document.getElementById("ausgabe").innerHTML = bmi.toFixed(2);
}
document.getElementById("berechnen").onclick = ber;



function pruefen(){
    var str,estr,astr = [];
    str = document.getElementById("nfeld");
    estr = document.getElementById("emfeld");
    for (var i=0; i<str.length; i++){
            if (str.search(/[,\s]+<>^/)!== 0){
            str[i] = str.replace(/[,\s]+<>^/g,"");
            alert("Bitte ohne Sonderzeichen!\n");
            break;
        }
      
    }
    document.getElementById("nfeld").innerHTML = str;
    
    if (estr.email.value.indexOf("@") === -1){
            alert("Keine korrekte eMail-Adresse!\n");
            
        }
    
    astr = document.getElementByTagName("anmerk").value;
    for (var i=0; i<astr.length; i++){
        if (str.search(/[,\s]+<>^/)!== 0){
            str[i] = str.replace(/[,\s]+<>^/g,"");
            alert("Bitte ohne Sonderzeichen!\n");
            break;
        }
       
    }
}
document.getElementById("send").onsubmit = pruefen;





//function upruf(){
//    var message, str;
//    message = document.getElementById("message");
//    message.innerHTML = "";
//    str = document.getElementById("nfeld");
//    try { 
//        if(str === "")  throw "empty";
//        if (str.search(/[,\s]+<>^/g)!==0)    throw str.replace(/[,\s]+<>^/g,"")+"Bitte keine Sonderzeichen";
//        
//    }
//    catch(err) {
//        message.innerHTML = "Input is " + err;
//    }

//};
//document.getElementById("send").onsubmit = upruf;
////document.write(upruf("nfeld"));


