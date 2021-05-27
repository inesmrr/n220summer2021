// mouse snake array
let xPositions = [];

function setup(){
    createCanvas(600,300);
    fill(255, 254, 242);
}

function draw() {
    background(0);
    // remove entries once it hits 10
    if(xPositions.length > 10) {
        xPositions.shift();
    }
    
    // add element moving with mousex
    xPositions.push(mouseX);

    // run as many times as there are elements in the array
    for(var i = 0; i < xPositions.length; i++){
        circle(xPositions[i], 100, i*2);
    }

}