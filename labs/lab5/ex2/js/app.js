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
        var randColor = Math.random() * 255;

        // style div
        divBlock.style.backgroundColor = randColor;
        divBlock.style.width = size + "px";
        divBlock.style.height = size + "px"; 
        divBlock.style.float = "left";
        divBlock.style.margin = "3px";

        // place div on page
        document.body.appendChild(divBlock);  
        
        console.log(divBlock);
    }     
}

// function create(){
//     for(var i = 0; i < 3; i++) {
//         var size = 100;
//         var divBlock = document.createElement("div");
//         divBlock.style.backgroundColor="#42f54b";
//         divBlock.style.width = size + "px";
//         divBlock.style.height = size + "px";
//         document.body.appendChild(divBlock); 
        
//         console.log(divBlock);
//     }
// }