// stoplight colors array
let traffic = ["#eb4034", "#f1f525", "#2be055"]

function setup() {
    createCanvas(300, 300);
    background(0);

    // for as many elements in color array, tint circles:
    for( var i = 0; i < traffic.length; i++) {
        noStroke();
        // fill circles with array colors in order
        fill(traffic[i]);
        // circle positioning so its vertical
        circle(120 , 70 + 75 * i , 30);
        
    }
}