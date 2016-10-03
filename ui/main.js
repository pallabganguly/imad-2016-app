console.log('Loaded!');

var element= document.getElementById("maintext");

var wow= document.getElementById("dino");

var marginRight=0;

function moveLeft(){
  marginRight+=10;
  wow.style.marginRight=marginRight+'px';
};

wow.onclick=function(){
  //wow.style.marginLeft="100px";  
  var interval = setInterval(moveLeft, 30);
};