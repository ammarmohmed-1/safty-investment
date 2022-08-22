
//start make a respposve navbar

var bars = document.querySelector(".bars");
var list = document.querySelector(".list-none");
var close = document.querySelector(".close");

bars.addEventListener("click", ()=>{
    list.classList.remove("list-none")    
}
);
close.addEventListener("click", ()=>{
    list.classList.add("list-none")    
}
);
//start make a respposve navbar