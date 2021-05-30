// get div from html
let dvSquare = document.getElementById("square");

var size = 100;

// html div styling
dvSquare.style.backgroundColor="#0fa7ff";
dvSquare.style.width = size + "px";
dvSquare.style.height = size + "px";

// see div info on console
console.log(dvSquare);

// mouse over function
function black(){  
    // make square black when mouse is over
    dvSquare.style.backgroundColor = "#000000";

    // console.log everytime mouse is over
    console.log("black");
}

// mouse out function
function blue(){  
    // make square blue when mouse is out
    dvSquare.style.backgroundColor = "#0fa7ff";

    // console.log everytime mouse is out
    console.log("blue");
}
