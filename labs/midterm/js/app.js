// starting frame rate
let fr = 30;

// size variable
let s = 20;

// circle objects
let cirOne = {
    x: 100,
    y: 100,
    diameter: s,
    color: "#ff00ff",
}

let cirTwo = {
    x: 300,
    y: 200,
    diameter: s,
    color: "#ff0",
}

function setup(){
    createCanvas(500,500);
    frameRate(fr);
    // trying to implement for loop
    // for(i = 0; i < cirOne.length; i++) {
    //         // circOne data
    //         let cirOne = {
    //             x: 100,
    //             y: 100,
    //             diameter: 20,
    //             color: "#ff00ff",
    //         }
    //         circle(cirOne.x, cirOne.y, cirOne.diameter);
    //         fill(cirOne.color);
    //     }
}

// draw function using data from object
function draw() {
    // circOne data
    circle(cirOne.x, cirOne.y, cirOne.diameter);
    fill(cirOne.color);
    // increase size by .1
    cirOne.diameter = cirOne.diameter + .1;
  
    // if cirOne d is equal or greater than 200, set d back to 1 and start over
    if (cirOne.diameter >= 200 ){
      console.log("limit")
      cirOne.diameter = 20;
    }
    
    
    // cirtwo data
    circle(cirTwo.x, cirTwo.y, cirTwo.diameter);
    fill(cirTwo.color);
    // increase size by .1
    cirTwo.diameter = cirTwo.diameter + .1;

    // if cirTwo d is equal or greater than 200, set d back to 1 and start over
    if (cirTwo.diameter >= 200 ){
        console.log("limit")
        cirTwo.diameter = 20;
      }

    // if fr reaches 30, draw circle on mouse location
    if(fr === 30) {
        circle(mouseX,mouseY,30);
        fill(255,0,0);
    }
}


