document.querySelectorAll("button").forEach(function(e){
    e.addEventListener("mouseover", function(el){
        el.target.style.backgroundColor= "#595959";
        el.target.style.transition="ease-in 0.2s"
    })
    })
    
    document.querySelectorAll("button").forEach(function(e){
        e.addEventListener("mouseout", function(el){
            el.target.style.backgroundColor= "#D7282F";
        })
        })
        
