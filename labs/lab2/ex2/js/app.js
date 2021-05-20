function setup(){
    createCanvas(400,300);
}

function draw(){
    background(0);
    fill(255, 0, 0);
    circle(mouseX, mouseY, 30);

    // fills circle in blue when mouse is on the left side of the canvas
    if(mouseX < 200){
        fill(3, 15, 252);
        circle(mouseX, mouseY, 30);
    }
}