// div 1 
let element = document.getElementById("square");
// event listener to function
element.addEventListener("click", changeColor);
// styling
element.style.backgroundColor = "#999";
element.style.height = 200 + "px";
element.style.width = 200 + "px";
element.style.float = "left";
element.style.margin = 5 + "px";

// div 2
let element2 = document.getElementById("square2");
// event listener to function
// element2.addEventListener("click", changeColor);
// styling
element2.style.backgroundColor = "#999";
element2.style.height = 200 + "px";
element2.style.width = 200 + "px";
element2.style.float = "left";
element2.style.margin = 5 + "px";

// div 3
let element3 = document.getElementById("square3");
// event listener to function
// element3.addEventListener("click", changeColor);
// styling
element3.style.backgroundColor = "#999";
element3.style.height = 200 + "px";
element3.style.width = 200 + "px";
element3.style.float = "left";
element3.style.margin = 5 + "px";


function changeColor(event){
    // event.target.style.backgroundColor = "#000"

    // get the attribute 
    let color = event.target.getAttribute("data-color");
    // change background color using attribute var
    event.target.style.backgroundColor = color;
    // console log the clicked color
    console.log(color);
}