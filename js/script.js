// slider line
var line = document.getElementById("slider-line");
// move slider
var move = 0;

// slider left move
function left(){
    move+=400;
    if(move === 400){
        move = -800;
    }
    // move
    line.style.left = move + "px";
}

// slider right move
function right(){
    move-=400;
    if(move === -1200){
        move = 0;
    }
    // move
    line.style.left = move + "px";
}

// auto slider move
setInterval(right,3500);



