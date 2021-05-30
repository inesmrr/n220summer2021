// get div from html
let dvSquare = document.getElementById("square");

var size = 100;

// html div styling
dvSquare.innerHTML = "Hola";
dvSquare.style.backgroundColor="#42f54b";
dvSquare.style.width = size + "px";
dvSquare.style.height = size + "px";

// see div info on console
console.log(dvSquare);

// onclick function
function grow(){  
    // make square grow each time its clicked by 10%
    size = size * 1.1;
    dvSquare.style.width = size + "px";
    dvSquare.style.height = size + "px";
    // console.log everytime square is clicked
    console.log("it grew");
}