let s=document.querySelector("#box>input");

let captch=false;

document.querySelector("#box>img").addEventListener("click", function(e){
    e.target.src="./Images/register/tick.png";
    captch =true;
});


document.querySelector("button").addEventListener("click", function(e){
    
    if (captch && s.value!="") {
        
        alert("Registered Sucessful")
}
})

