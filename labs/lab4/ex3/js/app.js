let dObj = { x:200, y:0, velocityY:2 }

let gravity = .2;

function draw() {
    background(0);
    circle(dObj.x, dObj.y, 20);dObj.y += dObj.velocityY;
    dObj.velocityY += gravity;
}