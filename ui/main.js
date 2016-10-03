var button =document.getElementById("counter");
var counter=0;
button.onclick = function(){
  //make a request to the counter endpoint
  //capture the response and store it in a variable
  //render the variable in the html page usign the span
  var span=document.getElementById("count");
  span.innerHTML=counter.toString();
  counter+=1
};