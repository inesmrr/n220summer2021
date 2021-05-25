function setup() {
    createCanvas(250, 300);
    // gray
    background(220,220,220);

    // noFill(0);

    // for loop syntax
    // put it here so i can fill the inside with white
    for( var i = 38; i > 0; i--) {
        stroke(255 - i * 150);
        circle(125, 150, i * 4);
    }
}

function draw() {
    // // gray
    // background(100);

    // noFill(0);

    // // for loop syntax
    // for( var i = 0; i < 25; i++) {
    //     stroke(255 - i * 15);
    //     circle(125, 150, i * 6);
    // }
}