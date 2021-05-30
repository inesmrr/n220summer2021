let dvSquare = document.getElementById("square");
var size = 100;

dvSquare.innerHTML = "Hola";
dvSquare.style.backgroundColor="#42f54b";
dvSquare.style.width = size + "px";
dvSquare.style.height = size + "px";
console.log(dvSquare);

function grow(){
    // let size = dvSquare;
    // if(true) {
    //     size = size * 1.1;
    // }

    // dvSquare.style.width = w_resized * '1.1px'; 

    size = size * 1.1;
    console.log("it grew");

    // dvSquare.innerHTML = dvSquare.style.width;
    // dvSquare.innerHTML = size;

}