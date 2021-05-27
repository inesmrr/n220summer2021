// ice cream colors array
let iceColors = ["#fdaeae", "#f6e2b3", "#b49982"]

function setup() {
    createCanvas(500, 300);
    background(255, 254, 242);

    // for as many elements in color array, tint rectangles:
    for( var i = 0; i < iceColors.length; i++) {
        noStroke();
        fill(iceColors[i]);
        rect(100 + 100 * i, 100, 50, 50);
        
    }
}