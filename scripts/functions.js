//freezeframe
$(function() {
  const e = new Freezeframe();
  $("#play-gif").on("click", function(){e.start()});
  $("#stop-gif").on("click", function(){e.stop()});
});



// contents
var coll = document.getElementsByClassName("contentsbtn");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// self ship webring       
var nameSelfWebring = "Vanilla";
var relationshipSelfWebring = "is best friends with";
var charnameSelfWebring = "Jyushi Aimono";
var seriesSelfWebring = "Hypnosis Mic";
var imgurlSelfWebring = "https://cdn.discordapp.com/attachments/977549029380591686/1152572698837385288/cc20_3_2.jpg";

var templateWebring = document.createElement("selfinsertwebring");
 templateWebring.innerHTML = "<style> #templateWebring a {color: #BF3C8E; font-weight:bold} #templateWebring a:hover{font-weight:bold; color:#A43379}  #templateWebring {width:300px !important; text-align:center !important; height:164px !important; border:2px solid #DD28A7 !important; margin: auto !important; background-image:url('https://webring.koinuko.pink/img/bg.png'); background-size:cover} #webringiconbox {border:2px solid #DD28A7 !important; position:relative !important; overflow:hidden !important;   height:100px !important; width:100px !important; left:8px !important; padding:0px !important; margin:0px !important; margin-top:8px !important; box-sizing:content-box !important; max-width:100% !important; justify-content:start !important; display:block !important; clear:none !important } #iconWebring {width:100px !important; overflow:hidden !important; height:100px !important; margin:0px !important; padding:0px !important; box-sizing:content-box !important} #webringdescbox {width:166px !important; height:100px !important; margin-left:122px !important; margin-top:-102px !important; border:1px dashed #DD28A7 !important} #webringdesc{line-height: normal !important; font-weight:normal !important; padding:2px !important; width:160px !important; color:#452134 !important; font-family:Verdana !important; font-size:small !important; margin:auto !important; text-align:center !important; position:relative !important; top:50% !important;  -ms-transform: translateY(-50%) !important; -webkit-transform: translateY(-50%) !important; transform: translateY(-50%) !important;} #webringlinks {line-height:normal !important; font-weight:normal !important; width:278px !important; margin:auto !important; height:38px !important; margin-top:6px !important; border:1px dashed #DD28A7 !important} #linkparaWebring {font-family:Verdana !important; color:#452134 !important; font-size:small !important; 	margin:auto !important; line-height: normal !important; text-align:center !important;	margin-top:3px !important; padding:0px !important} </style> <div id='templateWebring'> <div id='webringiconbox'> <img id='iconWebring' src='" + imgurlSelfWebring + "'/> </div> <div id='webringdescbox'> <p id='webringdesc'> <strong>" + nameSelfWebring + "</strong> " + relationshipSelfWebring + "<br /> <strong>" + charnameSelfWebring + "</strong> from <strong>" + seriesSelfWebring + "</strong>! </p> </div> <div id='webringlinks'>	<p id='linkparaWebring'> | <a href='https://webring.koinuko.pink/members.php' target='_PARENT'>Members List</a> | <br/>	Part of the <a href='https://webring.koinuko.pink/members.php' target='_PARENT'>Self-Insert Webring</a></p> </div> </div>"; 
  document.getElementById("selfinsertwebring").appendChild(templateWebring);  
         
       