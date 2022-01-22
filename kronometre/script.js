let saniye = 00;
let salise = 00;
let saniyeAppend= document.getElementById("saniye");
let saliseAppend= document.getElementById("salise");
let start = document.getElementById("startbtn");
let buttonStop = document.getElementById("stopbtn");
let reset = document.getElementById("resetbt");

var Interval ;

start.onclick= function (){
clearInterval(Interval);
Interval= setInterval(startTimer,10)
}
buttonStop.onclick= function(){
    clearInterval(Interval);
}

reset.onclick= function(){
    clearInterval(Interval)
    saniye= 0;
    salise= 0;
    saniyeAppend.innerHTML="0"+ saniye;
    saliseAppend.innerHTML="0"+ salise;
}
function startTimer () {
    salise++;
    if (salise<10) {
        saliseAppend.innerHTML="0"+salise
    }
     if (salise>= 10) {saliseAppend.innerHTML=salise
    }
 
     if (salise>99) {
        console.log("saniye")
     saniye ++;
    saniyeAppend.innerHTML="0"+saniye
salise=0 ;
saliseAppend.innerHTML= "0"+0}
   if (saniye>9) {
    saniyeAppend.innerHTML= saniye;
 
}
}