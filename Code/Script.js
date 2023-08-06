// on enter preseed
const walkImage = document.getElementById("walk");
window.onkeyup = function(e){
    const currentleft = parseInt(walkImage.style.left);
    const currentTop = parseInt(walkImage.style.top);

    if(e.key === "ArrowDown"){
        walkImage.style.top = currentTop + 10 + "px";

    }
    if(e.key === "ArrowRight"){
        walkImage.style.left = currentleft + 10 + "px"; 
    }

    if(e.key === "ArrowUp"){
        walkImage.style.top = currentTop - 10 + "px"; 
    }

    if(e.key === "ArrowLeft"){
        walkImage.style.left = currentleft - 10 + "px";
    }
}