// object
let myRect = {
    x: 30,
    y: 30,
    height: 50,
    width: 50,
    color: "#ff00ff",
}

function setup(){
    createCanvas(400,400);
}

// draw function using data from object
function draw() {
    rect(myRect.x, myRect.y, myRect.width, myRect.height);
    fill(myRect.color);
}