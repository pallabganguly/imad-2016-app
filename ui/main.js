console.log('Loaded!');

var element= document.getElementById("maintext");

var wow= document.getElementById("dino");

wow.onclick=function(){
  //wow.style.marginLeft="100px";  
  var interval = setInterval(moveLeft, 100);
};