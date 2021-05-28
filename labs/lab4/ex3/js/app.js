let colors = ["#fdaeae", "#f6e2b3", "#b49982"]
// let dvRandom = document.getElementById("random");

function setup() {
    createCanvas(400, 400);
    background(255, 254, 242);
}

function draw() {
} // Empty draw() keeps the program running

function mousePressed() {
    for( var i = 0; i < colors.length; i ++){
        // let random = iceColors[Math.floor(Math.random() * random.length)];
        // dvRandom.innerHTML = random;
        
        // draw rect each time mouse is pressed
        rect(mouseX, mouseY, 33, 33);  
        // var randColor = Math.random(iceColors);
        // fill(randColor);
        
        // fill each rect with the color indexed/selected
        fill(colors[0]);
        console.log(colors); 
    }
    
}