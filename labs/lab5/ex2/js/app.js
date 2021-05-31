// block size
var size = 100;

// random colors for each block
var randColor = Math.random() * 255;

// load function right away
window.onload = multiply();

function multiply() {
    // loop to create 100 divs
    for(var i = 0; i < 100; i++) {
        // create div
        let divBlock = document.createElement("div");

        // random color generator
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let color = "rgb(" + r + "," + g + "," + b + ")";

        // style div
        divBlock.style.backgroundColor = color;
        divBlock.style.width = size + "px";
        divBlock.style.height = size + "px"; 
        divBlock.style.float = "left";
        divBlock.style.margin = "3px";

        // place div on page
        document.body.appendChild(divBlock);  
        
        console.log(divBlock);
    }     
}

