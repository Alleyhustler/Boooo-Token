
//facts thingy from here: https://codepen.io/mmlumba/pen/BJvEmb


window.addEventListener("load", function(){

var then = new Date(2019, 12, 7), 
now  = new Date;
  
days = Math.round((now - then) / (1000 * 60 * 60 * 24) + 30),
hours = Math.round((now - then) / (1000 * 60 * 60)),
seconds = Math.round((now - then) / (1000 * 60)),
  
document.getElementById("counter").innerHTML = "It has been: " + days + " days since meeting Jyushi!";})