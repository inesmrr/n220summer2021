// div for block that changes color
let block = document.getElementById("block");
// styling
let black = "rgb(0,0,0)"
block.style.backgroundColor = black;
block.style.height = 200 + "px";
block.style.width = 400 + "px";
block.style.float = "left";
block.style.margin = 5 + "px";

// getting div for current color string
let currentColor = document.getElementById("currentColor");

// global rgb variables
let r = 0;
let g = 0;
let b = 0;
let color = "rgb(" + r + "," + g + "," + b + ")";

function changeRed(event){
    // get red attribute
    let addRed = Number(event.target.getAttribute("data-red"));

    // made r += addRed so that everytime it is clicked, it adds the attribute to the initial color
    r = r += addRed;
    color = "rgb(" + r + "," + g + "," + b + ")";
    
    // change block to clicked color
    block.style.backgroundColor = color;
    console.log(color);

    // update color string
    currentColor.innerHTML = color;
}

function changeGreen(event){
    // get green attribute
    let addGreen = Number(event.target.getAttribute("data-green"));

    // made g += addGreen so that everytime it is clicked, it adds the attribute to the initial color
    g = g += addGreen;
    color = "rgb(" + r + "," + g + "," + b + ")";
    
    // change block to clicked color
    block.style.backgroundColor = color;
    console.log(color);

    // update color string
    currentColor.innerHTML = color;
}

function changeBlue(event){
    // get blue attribute
    let addBlue = Number(event.target.getAttribute("data-blue"));

    // made b += addBlue so that everytime it is clicked, it adds the attribute to the initial color
    b = b += addBlue;
    color = "rgb(" + r + "," + g + "," + b + ")";
    
    // change block to clicked color
    block.style.backgroundColor = color;
    console.log(color);

    // update color string
    currentColor.innerHTML = color;
}